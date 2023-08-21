<script>
	import data from '../lib/data/global-temp.json';
	import Tooltip from '../components/Tooltip.svelte';
	import Legend from '../components/Legend.svelte';
	import { max, scaleLinear } from 'd3';

	export let innerWidth;
    export let innerHeight;

	let minVal = -1.3;
	let maxVal = 1.3;

	let warmColor = scaleLinear()
        .domain([0, maxVal])
        .range(["#e6e6e6", "#810101"]);

	let coldColor = scaleLinear()
		.domain([minVal, 0])
		.range(["#0a07e2", "#e6e6e6"]);

	let colorRange = (value) => {
		if (value > 0)
			return warmColor(value)
		else if (value < 0)
			return coldColor(value)
		else if (value === 0)
			return "#e6e6e6"
		return "transparent"
	}

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
			<u style="text-decoration-thickness: 3px; text-decoration-color: {warmColor(1.1)}">
				increased around 1.1° Celsius
			</u> 
			since 1880.
		</p>
		<p>
			A one-degree change is significant because it takes a great amount of variation to 
			affect all the Earth's sea surface and air near-surface temperature.
		</p>
	</h2>

	<div class="viz">
		<Legend 
			warmColor={warmColor} 
			coldColor={coldColor}
			minVal={minVal}
			maxVal={maxVal}/>

		<div class="months">
			<p class="year" style="color: transparent; user-select: none;">00000</p>
			{#each Array(12) as _, index}
				<div 
					class="month"
					style="
						display: flex; justify-content: center; align-items: center;"
				>
					<p class="year" style="margin-right: 0px;">
						{month(index)}
					</p>
				</div>
			{/each}
		</div>

		{#each data as d}
			<div class="data">
				<p class="year">{d.year}</p>
				{#each Array(12) as _, index}
					{#if figure(parseFloat(d[month(index)])) !== "nothing"}
						<Tooltip 
							title="value: {parseFloat(d[month(index)])}ºC"
						>
							<div 
								class={figure(parseFloat(d[month(index)]))} 
								key={index}
								style="background-color: {colorRange(parseFloat(d[month(index)]))}"
							/>
						</Tooltip>
					{:else}
						<div 
							class={figure(parseFloat(d[month(index)]))} 
							key={index}
							style="background-color: {colorRange(parseFloat(d[month(index)]))}"
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

	.title {
		color: rgb(193, 193, 193);
		margin-bottom: 30px;
		text-align: center;
		font-size: clamp(30px, 500px);
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

	.year {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-right: 1.5vw;
		font-size: clamp(10px, 2vw, 16px);
		text-align: justify;
	}

	.months {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: 1.5vw;
		font-size: clamp(10px, 2vw, 16px);
		text-align: justify;
	}

	.month {
		margin: 1vw;
		margin-bottom: 0px;
		width: 5vw;
		height: auto;
		max-width: 50px;
		min-width: 15px;
	}

	.color-scale {
		width: 50vw;
		height: 10px;
		background: linear-gradient(90deg, #0a07e2 0%, #e6e6e6 50%, #810101 100%);
		border-radius: 10px;
	}

	.circle {
		border-radius: 50%;
		width: 5vw;
		height: 5vw;
		background-color: #810101;
		max-width: 50px;
		max-height: 50px;
		min-width: 15px;
		min-height: 15px;
		margin: 1vw;
	}

	.triangle {
		width: 5vw;
		height: 5vw;
		background-color: #0a07e2;
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
		margin: 1vw;
		width: 5vw;
		height: 5vw;
		max-width: 50px;
		max-height: 50px;
		min-width: 15px;
		min-height: 15px;
	}
</style>
