<script>
    import Header from '$lib/components/Header.svelte'
	/** @type {import('./$types').LayoutData} */
	export let data;
    console.info(data)
</script>

<Header/>
{#if data.hrefs}
<ul>
    {#each data.paths as path, i}
    <li>
        <a href={data.hrefs[i]}>{path.toLocaleUpperCase()}</a>
    </li>
    {/each}
</ul>
    
{/if }
<slot/>

<style>
    :root {
        --background-color: white;
    }

	:global(html) {
        font-family: 'Inter', san-serif;
        font-weight: 400;
        background-color: var(--background-color);
        transition: background-color 250ms ease-in;
	}

    :global(a){
        text-decoration: solid;
        font-weight: 900;
        color: cornflowerblue;
        font-style: italic;
    }

    ul {
        padding: 0;
    }

    li {
        display: inline-block;
    }

    li:not(:first-child)::before{
        content: ">";
        margin: .5em;
    }
</style>
