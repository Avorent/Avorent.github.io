<script>
    const intialBoard = Array(20).fill(Array(22).fill('inactive'));

    const handleDrag = (/** @type {DragEvent}*/ event) => {
        
    }
</script>

<div class="legion-board">
    {#each intialBoard as row, y}
        {#each row as data, x}
            <div class="legion-cell" data-legion={data} data-x={x} data-y={y}/>
        {/each}
    {/each}
</div>

<style>
    .legion-cell {
        /* width: 26px; */
        aspect-ratio: 1;
        display: table-cell;
        border-radius: 15%;
    }

    .legion-board {
        width: 100%;
        max-width: 50em;
        display: grid;
        grid-template-columns: repeat(22, auto);
        gap: 2px;
    }

    .legion-cell[data-legion="inactive"] {
        background: linear-gradient(to top,#2f2f2f,#454545 50%);
    }

    .legion-cell:hover {
        background: linear-gradient(to bottom, #dbbc8d, #a78968);
    }
</style>