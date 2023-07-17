<script>
	import Header from './Header.svelte';
	import './styles.css';
	import data from '../lib/data/global-temp.json'

	console.log(data)
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer>
		<p>Data from <a href="https://github.com/rfordatascience/tidytuesday/tree/master/data/2023/2023-07-11">Tidy Tuesday</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}


</style>
