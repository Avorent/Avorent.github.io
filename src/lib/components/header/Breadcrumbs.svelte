<script>
	import { page } from '$app/stores'

	$: paths = $page.url.pathname.split('/')
    $: paths.shift()
	$: hrefs = paths.map((path) =>  "/" + path).map((path, i, arr) => {
        switch(i){
            case 0: return path
            default: return arr[i-1] + path
        }
    })

	$: {
		console.info(paths);
        console.info(hrefs)
	}

</script>
<ul>
    <li>
        <a href="/">
            HOME
        </a>
    </li>
    {#each paths as path, i}
        <li>
            <a href={hrefs[i]}>{path.toLocaleUpperCase()}</a>
        </li>
    {/each}
</ul>

<style>
    ul {
        padding: 0;
        margin: 0;
    }
    li {
        display: inline-block;
    }

    li:not(:first-child)::before{
        content: ">";
        margin: 0.5em;
    }
</style>