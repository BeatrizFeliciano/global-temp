<script>
	import data from '../lib/data/global-temp.json';
	import Tooltip from './Tooltip.svelte';
	import { scaleLinear } from 'd3';

	let innerWidth = 0
    let innerHeight = 0

	let warmColor = scaleLinear()
        .domain([0, 1.3])
        .range(["#e6e6e6", "#810101"]);

	let coldColor = scaleLinear()
		.domain([-1.3, 0])
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

	let calcColor = (fig, value) => {
		if (fig === 'circle')
			return "background-color: " + warmColor(value)

		else if (fig === 'triangle')
			return "background-color: " + coldColor(value)

		return ""
	}
	
</script>

<svelte:head>
	<title>Global Temperature</title>
	<meta name="description" content="App about the evolution of the global temperature." />
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight />

<section>
	<h1 class="title">Global Temperature</h1>
	<h2 class="text">
		<p>
			The average global temperature on Earth has 
			<u style={"text-decoration-thickness: 3px; text-decoration-color: " + warmColor(1.1)}>
				increased around 1.1° Celsius
			</u> 
			since 1880.
		</p>
		<p>
			A one-degree change is significant because it takes a great amount of variation to 
			affect the temperature of the all the Earth's sea surface and air near-surface.
		</p>
	</h2>
	<div class="viz">
		{#each data as d}
			<div class="data">
				<p class="year">{d.year}</p>
				{#each Array(12) as _, index}
					{#if figure(parseFloat(d[month(index)])) !== "nothing"}
						<Tooltip 
							title="value: {parseFloat(d[month(index)])}"
						>
							<div 
								class={figure(parseFloat(d[month(index)]))} 
								key={index}
								style={calcColor(figure(parseFloat(d[month(index)])), parseFloat(d[month(index)]))}
							/>
						</Tooltip>
					{:else}
						<div 
							class={figure(parseFloat(d[month(index)]))} 
							key={index}
							style={calcColor(figure(parseFloat(d[month(index)])), parseFloat(d[month(index)]))}
						/>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.year {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-right: 1.5vw;
		font-size: clamp(10px, 2vw, 16px);
		text-align: justify;
	}

	.title {
		color: rgb(241, 241, 241);
		margin-bottom: 30px;
		text-align: center;
		font-size: clamp(30px, 50px);
	}

	.text {
		margin-bottom: 30px;
		text-align: center;
		font-size: large;
		font-size: clamp(12px, 2vw, 17px);
		text-align: justify;
	}

	.data {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.viz {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.circle {
		border-radius: 50%;
		width: 5vw;
		height: 5vw;
		max-width: 50px;
		max-height: 50px;
		min-width: 15px;
		min-height: 15px;
		margin: 1vw;
	}

	.triangle {
		width: 5vw;
		height: 5vw;
		max-width: 50px;
		max-height: 50px;
		min-width: 15px;
		min-height: 15px;
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		margin: 1vw;
		box-sizing: border-box;
	}

	.square {
		background-color: #e3e3e3;
		margin: 1vw;
		border-radius: 5px;
		width: 5vw;
		height: 5vw;
		max-width: 50px;
		max-height: 50px;
		min-width: 15px;
		min-height: 15px;
	}

	.nothing {
		background-color: transparent;
		margin: 1vw;
		width: 5vw;
		height: 5vw;
		max-width: 50px;
		max-height: 50px;
		min-width: 15px;
		min-height: 15px;
	}
</style>
