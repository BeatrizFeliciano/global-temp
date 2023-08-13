<script>
	let colorStep = 0.1857;
    export let warmColor;
    export let coldColor;
    export let minVal;
    export let maxVal;
</script>


<div class="legend">
    <div class="legend-elements" style="width: 52.5vw;">
        {#each Array(7) as _, i}
            <div class="triangle-legend" style="background-color: {coldColor(-1.3 + colorStep*i)};"/>
        {/each}

        <div class="square-legend"/>

        {#each Array(7) as _, i}
            <div class="circle-legend" style="background-color: {warmColor(0 + colorStep*i)};"/>
        {/each}
    </div>
    <div class="color-scale"/>
    <div class="legend-elements" style="font-size: x-small;">
        <p style="transform: translate(-10px);">{minVal}ºC</p>
        <p>0ºC</p>
        <p style="transform: translate(10px);">{maxVal}ºC</p>
    </div>
</div>	


<style>
	.legend {
		width: auto;
		height: auto;
		margin-bottom: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.legend-elements {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 50vw;
		height: auto;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 5px;
	}

	.circle-legend {
		border-radius: 50%;
		width: 2vw;
		height: 2vw;
		background-color: #810101;
		margin: 0.5vw;
	}

	.triangle-legend {
		width: 2vw;
		height: 2vw;
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		margin: 0.5vw;
		box-sizing: border-box;
	}

	.square-legend {
		background-color: #e3e3e3;
		margin: 0.5vw;
		border-radius: 5px;
		width: 2vw;
		height: 2vw;
	}

	.color-scale {
		width: 50vw;
		height: 10px;
		background: linear-gradient(90deg, #0a07e2 0%, #e6e6e6 50%, #810101 100%);
		border-radius: 10px;
	}
</style>
