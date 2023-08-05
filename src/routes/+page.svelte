<script>
	import data from '../lib/data/global-temp.json';
	import Tooltip from './Tooltip.svelte';
	import { scaleLinear } from 'd3';

	let innerWidth = 0
    let innerHeight = 0

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
	<h2 class="text">This is a test for a bigger text length. Just writting things to fill the horizontal space.</h2>
	{#each data as d}
		<div class="data">
			<p class="year">{d.year}</p>
			{#each Array(12) as _, index}
				<Tooltip 
					title="value: {parseFloat(d[month(index)])}"
				>
					<div 
						class={figure(parseFloat(d[month(index)]))} 
						key={index}
						style={calcColor(figure(parseFloat(d[month(index)])), parseFloat(d[month(index)]))}
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-right: 1.5vw;
		font-size: clamp(10px, 2vw, 16px);
	}

	.title {
		color: rgb(241, 241, 241);
		margin-bottom: 20px;
		text-align: center;
		font-size: clamp(30px, 50px);
	}

	.text {
		margin-top: 10px;
		margin-bottom: 60px;
		text-align: center;
		font-size: large;
		font-size: clamp(15px, 2vw, 20px);
	}

	.data {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-left: 50px;
		margin-right: 50px;
	}

	.circle {
		border-radius: 50%;
		width: 5vw;
		height: 5vw;
		max-width: 50px;
		max-height: 50px;
		min-width: 20px;
		min-height: 20px;
		margin: 1vw;
	}

	.triangle {
		width: 5vw;
		height: 5vw;
		max-width: 50px;
		max-height: 50px;
		min-width: 20px;
		min-height: 20px;
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
		min-width: 20px;
		min-height: 20px;
	}

	.nothing {
		background-color: transparent;
		margin: 1vw;
		width: 5vw;
		height: 5vw;
		max-width: 50px;
		max-height: 50px;
		min-width: 20px;
		min-height: 20px;
	}
</style>
