<script>
    export let calculatorItems = {};
    let displayedItem = [];
    let displayedCount = [];
    let displayedSize = calculatorItems.map(obj => obj.size);

    let result = 0;

    $: if (calculatorItems) {
        displayedCount = new Array(calculatorItems.length).fill(0); 
    }

    $: if (displayedCount) {
        result = displayedCount.map((val, i) => val * displayedSize[i]).reduce((sum, val) => sum + val, 0);
    }

    function toggleItem(index, bool) {
        if ((displayedCount[index] === 0 && bool === true) ||
            (displayedCount[index] === 1 && bool === false)) 
            displayedItem[index].classList.toggle('active');
    }

    function changeCount(index, amount) {
        if (displayedCount[index]===99 && amount === 1) return;
        displayedCount[index] += amount;
    }

</script>

<div class="calculator">
    {#each calculatorItems as item, index}
        <div class="item" bind:this={displayedItem[index]}>
            <div class="left">
                <div class="image">
                    <img src={item.image} alt="{item.title} image">
                </div>
                <div class="desc">
                    <p class="ml we-m">{item.title}</p>
                    <p class="s op-m">Størrelse: {item.size}</p>
                </div>
            </div>
            <div class="right">
                <button class="hide custom" on:click={() => {toggleItem(index, false); changeCount(index, -1)}}><img src="/minus.svg" alt="minus"></button>
                <p class="hide ml we-m count" bind:this={displayedCount}>{displayedCount[index] || 0}</p>
                <button class="custom" on:click={() => {toggleItem(index, true); changeCount(index, 1)}}><img src="/plus.svg" alt="plus"></button>
            </div>
        </div>
    {/each}
</div>

<div class="menu">
    <p class="s">Estimert volum</p>
    <button class="inverted ml">Få tilbud på {result.toFixed(1)} m³</button>
</div>

<style>
    .item {
        display: flex;
        align-items: end;
        justify-content: space-between;
        padding: 16px 0;
        border-bottom: 1px solid var(--border-light);
    }

    .left {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .image {
        height: 67px;
        width: 67px;
        border-radius: 8px;
        background: var(--background-secondary);
        display: flex;
        justify-content: center;
        align-items: center;
        outline: 1px solid var(--border-light);
    }

    .image img {
        height: 40px;
        width: 40px;
    }

   
    .right {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .right button {
        padding: 4px;
        background: var(--primary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    }

    .right button img {
        height: 24px;
        width: 24px;
    }

    .item.active .right button {
        background: var(--background);
        border: 1px solid var(--border-light);
    }
    .item.active .right img {
        filter: invert(100%);
    }

    .right button.hide, .hide {
        display: none;
    }

    .item.active .right .hide {
        display: block;
    }


    .menu {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: 1px solid var(--border-light);
        background: rgba(255, 255, 255, 0.80);
        backdrop-filter: blur(10px);
        padding: 12px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>