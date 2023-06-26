<script>
	/**
	 * @type {String[]}
	 */
	export let paths = [];
</script>

{#each paths as path}
	<a href="path">{path.toLocaleUpperCase()}</a>
{/each}

<style>
	a {
		font-size: 1.2em;
	}
</style>
