<script>
    import Carousel from "svelte-flickity";
    let amount = 5; 

    const options = {
        pageDots: false,
        prevNextButtons: false,
        lazyLoad: false,
        dragThreshold: 10,
        selectedAttraction: 0.2,
        friction: 0.7,
        imagesLoaded: true,
        initialIndex: 3,
    };
</script>

<div class="carousel">
    <Carousel {options}>
        {#each Array(amount) as _, i}
            <div class="carousel-cell"></div>
        {/each}
    </Carousel>
</div>


<style>
    .carousel {
        position: relative;
        width: 100%;
        max-width: 900px;
    }

    .carousel::before, .carousel::after {
        content: '';
        position: absolute;
        z-index: 3;
        width: 10px;
        height: 100%;
        background: var(--bg-primary);
        top: 0;
    }

    .carousel::before {
        left: -2px;
        background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
    }

    .carousel::after {
        right: -2px;
        background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
    }

    .carousel-cell {
        aspect-ratio: 3/4;
        width: 50%;
        background: url("../../static/guy.png");
        background-position: center;
        background-size: cover;
        border-radius: 20px;
        margin-right: 12px;
        transition-duration: 100ms;
    }

    .carousel-cell:not(.is-selected) {
        opacity: .5;
    }

    @media screen and (min-width: 900px) {
        
    }

</style>