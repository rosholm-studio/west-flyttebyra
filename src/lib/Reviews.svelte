<script>
    export let reviewCount = 1;
</script>

<div class="container">
    {#each Array(reviewCount) as _}
        <div class="item">
            <div class="stars">
                {#each Array(5) as _}
                    <img src="star.svg" alt="Star">
                {/each}
            </div>
            <p class="ml">"Disse har kjørt for meg nærmest ukentlig de siste 2 årene og kan virkelig anbefales! Gode priser og hyggelige serriøse sjåfører. Tommel opp 👍🏻"</p>
            <p class="s">Håkon Halleland</p>
        </div>
    {/each}
</div>


<style>
    .container {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .item {
        padding: 24px;
        color: var(--primary-color);
        flex-direction: column;
        display: flex;
        gap: 20px;
        outline: 1px solid var(--border-light);
        border-radius: 20px;

        max-width: 360px;
    }
</style>