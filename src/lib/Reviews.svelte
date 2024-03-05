<script>
    import { onMount } from "svelte";
    import Carousel from "svelte-flickity";

    let reviews = [];
    const apiKey = 'AIzaSyDi43xtjtLKrru8XIqPx0uu06FWT1HnnyY';
    const placeId = 'ChIJwTEuTd1vQUYR8uFah9AB9Cw';

    export let reviewCount = 1;
    let comments = [];
    let isExpandable = [];
    let expanded = [];

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

    onMount(async () => {
        const cachedReviews = localStorage.getItem('reviews');
        const cachedTimestamp = localStorage.getItem('reviewsTimestamp');
        const now = new Date(); 
        if (true || cachedReviews && cachedTimestamp) {
            const lastFetched = new Date(cachedTimestamp);
            const diffInHours = (now - lastFetched) / (1000 * 60 * 60); 
            if (true || diffInHours < 24) {
                console.log('Fetching from storage') 
                reviews = JSON.parse(cachedReviews);
                return;
            }
        }
        console.log('fetching from API')
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&reviews_no_translations=true&key=${apiKey}`);
        if (response.ok) {
            const data = await response.json();
            reviews = data.result.reviews;
            console.log(data);  
            localStorage.setItem('reviews', JSON.stringify(reviews));
            localStorage.setItem('reviewsTimestamp', now.toISOString());
        } else {
            console.error('Failed to fetch reviews');
        }
    });

    const options = {
        pageDots: false,
        prevNextButtons: false,
        dragThreshold: 10,
        selectedAttraction: 0.2,
        friction: 0.7
    };
    
</script>

<div class="container">
    <Carousel {options}>
        {#each reviews.slice(0, reviewCount) as review, i (review.author_name)}
            <div class="item carousel-cell">
                <div class="profile">
                    <img src="{review.profile_photo_url}" alt="{review.author_name}'s profile picture">
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
                    <button on:click|preventDefault="{() => expanded[i] = !expanded[i]}" class:hide="{isExpandable[i]}" class="btn-unset op-h s">
                        {#if !expanded[i]}Show more{/if}
                        {#if expanded[i]}Show less{/if}
                    </button>
                    <a href="https://www.google.com/maps/place/West+Flyttebyrå+AS" target="_blank"><img src="/icons/google.svg" alt="Google"></a>
                </div>
                
            </div>
        {/each}
    </Carousel>
</div>


<style>

    .container {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
        position: relative;
        width: 100%;
    }

    .item {
        padding: 24px;
        background: var(--background);
        color: var(--primary-color);
        flex-direction: column;
        display: flex;
        gap: 20px;
        margin-right: 50px;
        outline: 1px solid var(--border-light);
        border-radius: 20px;
        width: 100%;
        max-width: 360px;
        height: 360px;
        max-height: 1000px;
    }

    .profile {
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .profile img {
        height: 50px;
        width: 50px;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .comment.cut {
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .btns {
        display: flex;
        justify-content: space-between;
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
        display: flex;
        gap: 0;
    }
</style>