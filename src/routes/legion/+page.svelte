<script>
	import Board from '$lib/components/legion/Board.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    console.info(data)
</script>

<div>
    <Board/>
</div>

<style>
</style>