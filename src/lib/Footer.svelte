<script>
    function scrollUp() {
        window.scroll({
            top: document.querySelector('main'),
            behavior: 'smooth'
        });
    }
</script>

<footer>
    <div class="container">
        <img class="icon" src="/icon.svg" alt="West Icon">
        <div class="items">
            <div class="item">
                <p class="m we-b">West Flyttebyrå</p>
                <a class="m" href="/">Hjem</a>
                <a class="m" href="/flyttekalkulator">Flyttekalkulator</a>
                <a class="m" href="/om-oss">Om oss</a>
                <a class="m" href="/">Vilkår</a>
                <a class="m" href="/">Personvern</a>
            </div>
            <div class="item">
                <p class="m we-b">Kontakt</p>
                <a class="m" href="tel:+6494461709">+47 926 47 084</a>
                <a href="mailto:post@westflyttebyra.no">post@westflyttebyra.no</a>
                <p class="m">Ole Deviks vei 35,<br/> 0668 Oslo</p>
                <p class="m">Org nr 918 580 999</p>
            </div>
            <div class="item">
                <p class="m we-b">Sosialt</p>
                <a class="m" href="/">Facebook</a>
                <a class="m" href="/">Instagram</a>
                <p class="m" href="/">Linkedin</p>
            </div>
        </div>
        <a href="#" on:click|preventDefault={scrollUp} class="m up">Tilbake til toppen <img class="arrow" src="/arrow.svg" alt="Arrow up"></a>
    </div>
    <div class="bottom">
        <p class="m">Nettside av <a href="https://svift.studio/" target="_blank"><u>Svift</u>®</a></p>
        <p class="m">©2024 West Flyttebyrå AS</p>
    </div>
</footer>

<style>
    footer {
        padding: 40px 20px;
        background: var(--primary-color);
        color: var(--primary-text)
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .icon {
        height: 83px;
        width: 83px;
    }

    .arrow {
        height: 20px;
        width: 20px;
    }

    .item {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    a {
        color: var(--primary-text)
    }

    .up {
        display: flex;
        align-items: center;
    }

    .bottom {
        padding: 80px 0;
        display: flex;
        flex-direction: column;
        gap: 24px; 
    }
</style>