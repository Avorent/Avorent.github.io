<script>
    import Header from '$lib/components/header'
	/** @type {import('./$types').LayoutData} */
	// export let data;
</script>

<Header/>

<slot/>

<style>
	:global(html) {
        font-family: 'Inter', san-serif;
        font-weight: 300;
	}

    :global(a){
        text-decoration: solid;
        font-weight: 900;
        color: cornflowerblue;
        font-style: italic;
    }
</style>
