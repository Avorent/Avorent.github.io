<script>
	import Header from '$lib/components/Header.svelte';
	/** @type {import('./$types').LayoutData} */
	export let data;
	console.info(data);
</script>

<Header />
<slot />

<style>
	@media (prefers-color-scheme: dark) {
		:root {
			--background-color: rgb(38, 38, 38);
		}
	}

	@media (prefers-color-scheme: light) {
		:root {
			--background-color: white;
		}
	}

	:global(html) {
		font-family: 'Inter', san-serif;
		font-weight: 400;
		background-color: var(--background-color);
		transition: background-color 250ms ease-in;
	}

	:global(a) {
		text-decoration: solid;
		font-weight: 900;
		color: cornflowerblue;
		font-style: italic;
	}
</style>
