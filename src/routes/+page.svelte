<script>
	import data from '../lib/data/global-temp.json';
	import Tooltip from './Tooltip.svelte';
	import { scaleLinear } from 'd3';

	let size = 50; //circle size
	let warmColor = scaleLinear()
        .domain([0, 1.5])
        .range(["#e6e6e6", "#810101"]);

	let coldColor = scaleLinear()
		.domain([-1.5, 0])
		.range(["#0805b1", "#e6e6e6"]);

	let month = (index) => {
		let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
		return months[index];
	}

	let figure = (value) => {
		if (value > 0) {
			return "circle"
		}

		else if (value === 0) {
			return "square"
		}

		else if (value < 0) {
			return "triangle"
		}

		return "nothing"
	}

	let calcSize = (fig) => {
		if (fig === "triangle")
			return ""
		return "width: " + size + "px; height: " + size + "px;"
	}

	let calcColor = (fig, value) => {
		if (fig === 'circle')
		return "background-color: " + warmColor(value)
		
		else if (fig === "triangle"){
			return "border-bottom: 50px solid " + coldColor(value)
		}

		return ""
	}

	let calcStyle = (fig, value) => {
		if (fig === "triangle")
			console.log(calcSize(fig) + calcColor(fig, value))
		return calcSize(fig) + calcColor(fig, value)
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
					title="value: {parseFloat(d[month(index)])}"
				>
					<div 
						class={figure(parseFloat(d[month(index)]))} 
						key={index}
						style={calcStyle(figure(parseFloat(d[month(index)])), parseFloat(d[month(index)]))}
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
	}

	.data {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.circle {
		border-radius: 50%;
		/* background-color: #0074d9; */
		margin: 10px;
	}


	.triangle {
		width: 0;
		height: 0;
		border-left: 25px solid transparent;
		border-right: 25px solid transparent;
		/* border-bottom: 50px solid #ffe7e7; */
		margin: 10px;
	}

	.square {
		background-color: #e6e6e6;
		margin: 10px;
		border-radius: 5px;
	}

	.nothing {
		background-color: transparent;
		margin: 10px;
	}
</style>
