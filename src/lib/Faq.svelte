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
            <button class="question btn-unset" on:click={() => toggleActive(index)}>
                <h3 class="we-m m">{question}</h3>
                <div class="plusminus"></div>
            </button>
            <div class="answer">
                <p class="op-m we-r">{answer}</p>
            </div>
        </div>
    {/each}
</div>

<style>
    .container {
        max-width: 1000px;
        width: 100%;
    }

    .container.inverted * {
        color: var(--inverted-text);
    }
    
    .item {
        border-bottom: 1px solid var(--inverted-border-light);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        color: var(--primary-text);
    }

    .container.inverted .item {
        border-bottom: 1px solid var(--border-light);
    }

    .question {
        position: relative;
        padding: 24px 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        text-align: start;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        gap: 20px;
    }

    .plusminus {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        min-height: 19px;
        min-width: 19px;
    }

    .plusminus::before, .plusminus::after {
        position: absolute;
        content: '';
        background: var(--primary-text);
        -webkit-transition-duration: 100ms;
             -o-transition-duration: 100ms;
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
        -webkit-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .answer p {
        max-width: 600px;
    }
</style>

