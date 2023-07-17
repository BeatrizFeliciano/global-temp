<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Global Temperature</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<svg width={622} height={622}>
		{#each Array(50) as _, i}
			<circle
				cx={311}
				cy={311}
				r={10+i*6}
				fill="none" 
				stroke="#FF0000"
				stroke-width={2}
			/>
		{/each}
	</svg>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.9;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
