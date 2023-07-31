<script>
	import data from '../lib/data/global-temp.json';
	import Tooltip from './Tooltip.svelte';

	let size = 50; //circle size

	let month = (index) => {
		let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
		return months[index];
	}

	let figure = (value) => {
		console.log(value)
		if (value > 0) {
			return "circle"
		}

		else if (value === 0) {
			return "triangle"
		}

		return "square"
	}

	let calcSize = (fig) => {
		if (fig === "triangle")
			return
		return "width: " + size + "px; height: " + size + "px;"
	}

	let calcStyle = (fig) => {
		return calcSize(fig)
	}
	
</script>

<svelte:head>
	<title>Global Temperature</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#each data as d}
		<div class="data">
			<p>{d.year}</p>
			{#each Array(12) as _, index}
				<Tooltip 
					title=" year: {d.year}// 
					month: {month(index)}//
					 value: {parseFloat(d[month(index)])}"
				>
					<div 
						class={figure(parseFloat(d[month(index)]))} 
						key={index}
						style={calcStyle(figure(parseFloat(d[month(index)])))}
					/>
				</Tooltip>
			{/each}
		</div>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	p {
		margin: 20px;
		font-family: 'Montserrat', sans-serif;
	}

	.data {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.circle {
		border-radius: 50%;
		background-color: #0074d9;
		margin: 10px;
	}


	.triangle {
		width: 0;
		height: 0;
		border-left: 25px solid transparent;
		border-right: 25px solid transparent;
		border-bottom: 50px solid #0074d9; /* Adjust the color of the triangle */
		margin: 10px;
	}

	.square {
		background-color: #0074d9;
		margin: 10px;
	}
</style>
