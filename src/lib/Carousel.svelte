<script>
    let width;
</script>

<div class="carousel" bind:clientWidth={width}>
    {#each Array(3) as _}
        <div style="min-width: {width-30}px;" class="image"></div>
    {/each}
</div>

<style>
    .carousel {
        display: flex;
        gap: 12px;
        width: 100%;
        height: 400px;
        scroll-snap-type: mandatory x;
        overflow-y: scroll;
        border-radius: 20px;
        
    }

    .image {
        height: 100%;
        background: url('/guy.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 20px;
    }
</style>