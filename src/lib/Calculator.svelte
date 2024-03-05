<script>
    import { browser } from '$app/environment';
    export let calculatorItems = {};
    let displayedItem = [];
    let displayedCount = [];
    let displayedSize = calculatorItems.map(obj => obj.size);

    let result = 0;

    $: if (calculatorItems) displayedCount = new Array(calculatorItems.length).fill(0);
    $: if (displayedCount) {
        result = displayedCount.map((val, i) => val * displayedSize[i]).reduce((sum, val) => sum + val, 0);
        if (browser) calcFooter();
    }
    $: if (browser) localStorage.setItem('result', result.toFixed(1));
    $: if (browser) window.onresize = function () {
        if (result===0) return;
        calcFooter();
    }
    $: if (browser) calcFooter();

    function toggleItem(index, bool) {
        if ((displayedCount[index] === 0 && bool === true) ||
            (displayedCount[index] === 1 && bool === false)) 
            displayedItem[index].classList.toggle('active');
    }

    function changeCount(index, amount) {
        if (displayedCount[index]===99 && amount === 1) return;
        displayedCount[index] += amount;
    }

    let menu;

    function calcFooter() {
        if (!browser) return;
        result>0 ? document.body.style.setProperty('--calc-footer', `${menu.clientHeight}px`) :
        document.body.style.setProperty('--calc-footer', `0px`); 
    }

</script>

<div class="calculator">
    {#each calculatorItems as item, index}
        <div class="item" bind:this={displayedItem[index]}>
            <div class="left">
                <div class="image">
                    <img src="/furniture/{item.image}" alt="{item.title} image">
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
<div class="menu footer-menu" bind:this="{menu}" class:active="{result>0}">
    <div class="menu-container">
        <div class="text">
            <p class="s">Ditt estimerte volum:</p>
            <p class="price xl">{result.toFixed(1)} m³</p>
        </div>
        
        <div class="btns">
            <a href="/tilbud"><button class="inverted ml">Få tilbud på {result.toFixed(1)} m³</button></a>
            <a class="hide" href="/kontakt-oss"><button class="btn-inverted">Kontakt</button></a>
        </div>
        
    </div>
</div>


<style>
    .calculator {
        width: 100%;
        max-width: 1000px;
        background: var(--background);
        padding: 6px 24px;
        border-radius: 20px;
    }

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
        height: fit-content
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
        visibility: hidden;
        pointer-events: none;

        display: flex;
        position: fixed;
        bottom: -1px;
        left: 0;
        right: 0;
        border-top: 1px solid var(--border-light);
        background: rgba(255, 255, 255, 0.80);
        backdrop-filter: blur(10px);
        padding: 20px;
        padding-bottom: 32px;
        justify-content: center;
        align-items: center;
    }

    .menu.active {
        visibility: visible;
        pointer-events: all;
    }

    .menu-container {
        display: flex;
        width: 100%;
        max-width: 1000px;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 4px;
    }

    .menu .text {
        display: flex;
        flex-direction: column;
    } 

    .item:last-child {
        border-bottom: 0;
    }

    .btns {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    @media screen and (min-width: 800px) {
        .btns a.hide {
            display: block;
        }
    }

    @media screen and (min-width: 600px) {
        .menu {
            padding-bottom: 20px;
        }

        .menu .text {
            flex-direction: row;
            gap: 4px;
        }

        .menu .text p {
            font-size: var(--text-xl);
            letter-spacing: var(--spacing-xl);
        }
    }
</style>