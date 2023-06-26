<script>
	import Breadcrumbs from './Breadcrumbs.svelte';
	import { page } from '$app/stores';
</script>

<header>
	<h1>AVORENT</h1>
	{#if $page.url.pathname != '/'}
		<Breadcrumbs />
	{/if}
</header>

<style>
	header {
		border-bottom: 1px solid;
		padding-bottom: 1em;
	}

	h1 {
		font-weight: 900;
		font-size: 3em;
	}
</style>
