<script>
    export let faqArray;
    let activeIndex;

    function toggleActive(index) {
        activeIndex = activeIndex === index ? null : index;
    }
</script>

<div class="container" class:inverted="{faqArray[0]}">
    {#each Object.entries(faqArray[1]) as [question, answer], index}
        <div class="item" class:active={activeIndex === index}>
            <button class="question custom" on:click={() => toggleActive(index)}>
                <h3 class="we-m ml">{question}</h3>
                <div class="plusminus"></div>
            </button>
            <div class="answer">
                <p class="ml op-m we-r">{answer}</p>
            </div>
        </div>
    {/each}
</div>


<style>
    .container {
        max-width: 840px;
        width: 100%;
    }

    .container.inverted * {
        color: var(--inverted-text);
    }
    
    .item {
        border-bottom: 1px solid var(--inverted-border-light);
        display: flex;
        flex-direction: column;
        color: var(--primary-text);
    }

    .container.inverted .item {
        border-bottom: 1px solid var(--border-light);
    }

    .question {
        position: relative;
        padding: 24px 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        text-align: start;
        align-items: center;
        gap: 20px;
    }

    .plusminus {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 19px;
        min-width: 19px;
    }

    .plusminus::before, .plusminus::after {
        position: absolute;
        content: '';
        background: var(--primary-text);
        transition-duration: 100ms;
    }

    .container.inverted .plusminus::before, .container.inverted .plusminus::after {
        background: var(--inverted-text)
    } 

    .plusminus::before {
        height: 1px;
        width: 19px;
        
    }

    .plusminus::after {
        width: 1px;
        height: 19px;
        
    }

    .item.active .plusminus::after {
        transform: rotate(-90deg);
    }

    .question h3 {
        color: inherit;
    }

    .answer {
        display: none;
        padding: 24px 0;
        color: inherit;
    }

    .item.active .answer {
        display: flex;
    }
</style>

