<script>
    import Carousel from "svelte-flickity";
    import reviews from '$lib/reviews.json';

    let comments = [];
    let isExpandable = [];
    let expanded = [];
    let cells = [];

    $: if (comments.length>0) {
        isExpandable = new Array(comments.length).fill(false);
        expanded = new Array(comments.length).fill(false);
        checkExpandable()
    }  

    function checkExpandable() {
        comments.map((item, index) => {
            isExpandable[index] = (item.clientHeight === item.scrollHeight)
        })
    }

    const options = {
        pageDots: false,
        prevNextButtons: false,
        dragThreshold: 10,
        selectedAttraction: 0.2,
        friction: 0.7,
        initialIndex: 2
    };

    function adaptHeight() {
        let vp = document.querySelector('.flickity-viewport');
        let max = 0;
        setTimeout(() => {
            cells.forEach(item => {
            if (max<item.clientHeight) max = item.clientHeight; 
            })
            vp.style.height = `${max}px`;
        }, 25);
    }

    function imageSrc(path) {
        return `${path}`;
    }

</script>

<div class="container">
    {#if reviews.length>0} 
        <Carousel {options}>
            {#each reviews as review, i (review.author_name)}
                <div bind:this={cells[i]} class="item carousel-cell">
                    <div class="profile">
                        <img src="/reviews/photo_{i+1}.png" alt="{review.author_name}'s profile picture">
                        <div class="info">
                            <a href="{review.author_url}" target="_blank" class="s we-m">{review.author_name}</a>
                            <p class="s we-r">{review.relative_time_description}</p>
                        </div>
                    </div>
                    
                    <div class="stars">
                        {#each Array(review.rating) as _}
                            <img src="/star.svg" alt="Full star">
                        {/each}
                        {#each Array(5-review.rating) as _}
                            <img class="op-m" src="/star.svg" alt="Empty star">
                        {/each}
                    </div>
                    <p bind:this="{comments[i]}" class:cut={!expanded[i]} class="comment m we-r">{review.text}</p>
                    <div class="btns">
                        <button on:click|preventDefault="{() => {expanded[i] = !expanded[i]; adaptHeight()}}" class:hide="{isExpandable[i]}" class="btn-unset op-h s">
                            {#if !expanded[i]}Les mer{/if}
                            {#if expanded[i]}Les mer{/if}
                        </button>
                        <a href="https://www.google.com/maps/place/West+Flyttebyrå+AS" target="_blank"><img src="/icons/google.svg" alt="Google"></a>
                    </div>
                    
                </div>
            {/each}
        </Carousel>
    {/if}
</div>

<style>

.container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 16px;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        position: relative;
        width: 100%;
    }

    .item {
        padding: 24px;
        background: var(--background);
        color: var(--primary-color);
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 20px;
        margin-right: 50px;
        outline: 1px solid var(--border-light);
        border-radius: 20px;
        width: 100%;
        max-width: 360px;
        min-height: 360px;
        height: -webkit-fit-content;
        height: -moz-fit-content;
        height: fit-content;
    }

    .profile {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 12px;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }

    .profile img {
        height: 50px;
        width: 50px;
    }

    .info {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 2px;
    }

    .comment.cut {
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -o-text-overflow: ellipsis;
           text-overflow: ellipsis;
    }

    .btns {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        -webkit-box-align: end;
            -ms-flex-align: end;
                align-items: end;
        margin-top: auto;
    }

    .btns a {
        margin-left: auto;
    }

    .btns img {
        height: 24px;
        width: 24px;
    }

    .hide {
        display: none;
    }

    .stars {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 0;
    }
</style>