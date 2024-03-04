<script>
    import { onNavigate } from "$app/navigation";
    import { onMount } from "svelte";
    onNavigate(() => menuOpen = false)

    let menuOpen = false;
    let container;
    let body;

    onMount(() => {
        body = document.querySelector('body');
    })

    $: if (body) {
        if (menuOpen) window.scrollTo(0,0);
        menuOpen ? body.style.overflow = 'hidden' : body.style.overflow = 'unset';
    }
</script>

<nav>
    <div class="info">
        <a class="item" href="tel:+4792647084">
            <img src="/icons/phone.svg" alt="phone svg">
            <p class="s">+47 926 47 084</p>
        </a>
        <a class="item info-mail" href="mailto:post@westflyttebyra.no">
            <img src="/icons/mail.svg" alt="mail svg">
            <p class="s">post@westflyttebyra.no</p>
        </a>
        <div class="item info-time">
            <img src="/icons/time.svg" alt="clock svg">
            <p class="s">Åpent døgnet rundt</p>
        </div>
    </div>
    <div class="container" bind:this={container}>
        <a href="/"><img src="/logo.svg" alt="" class="logo"></a>
        <div class="links">
            <a href="/" class="m">Hjem</a>
            <a href="/flyttekalkulator" class="m">Kalkulator</a>
            <a href="/kontakt-oss" class="m">Kontakt oss</a>
            <a href="/om-oss" class="m">Om oss</a>
        </div>
        <div class="btns">
            <a href="/flyttekalkulator"><button>Flyttekalkulator</button></a>
            <button class="burger btn-inverted btn-round" class:active={menuOpen} on:click={() => menuOpen = !menuOpen}></button>
        </div>
    </div>
    <div class="menu" class:active={menuOpen}>
        <div class="links">
            <a href="/" class="xxl">Hjem</a>
            <a href="/flyttekalkulator" class="xxl">Kalkulator</a>
            <a href="/kontakt-oss" class="xxl">Kontakt oss</a>
            <a href="/om-oss" class="xxl">Om oss</a>
        </div>
        
        <div class="btns">
            <a href="tel:+4792647084"><button class="btn-tertiary m">+47 926 47 084</button></a>
            <a href="/flyttekalkulator"><button class="btn-inverted m">Flyttekalkulator</button></a>
        </div>
    </div>
</nav>

<style>
    nav {
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 10;
    }

    .info {
        padding: 8px 24px;
        display: flex;
        gap: 40px;
    }

    .info .item {
        display: flex;
        gap: 8px;
        color: var(--primary-text);
    }

    .info-mail {
        display: none !important;
    }

    .info-time {
        display: none !important;
    }
    
    .container {
        padding: 20px 20px;
        background: var(--secondary-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
    }

    .logo {
        width: 44px;
    }

    .container .btns {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .container .btns a {
        white-space: nowrap;
    }

    .container .links {
        display: none;
        gap: 100px;
    }

    .container .links a {
        color: var(--primary-color)
    }

    .container .btns button:first-child {
        display: none;
    }

    .burger {
        flex-direction: column;
        gap: 5px;
        z-index: 16;
    }

    .burger::before, .burger::after {
        display: block;
        content: '';
        transform-origin: 69%;
        width: 20px;
        height: 1px;
        background: var(--primary-color);
        transition-duration: 100ms;
    }

    .burger.active::before {
        transform: rotate(-45deg) translateX(-1px);
    }

    .burger.active::after {
        transform: rotate(45deg) translateX(-1px);
    }

    .menu {
        position: fixed;
        top: 0;
        display: none;
        width: 100%;
        min-height: 101dvh;
        z-index: 15;
        padding: 190px 24px 44px 24px;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        background: var(--primary-color);
        overflow-y: scroll;
        gap: 24px;
    }
    
    .menu.active {
        display: flex;
    }

    .menu .links {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 8px;
    }

    .menu a {
        color: var(--primary-text);
        font-weight: var(--weight-medium);
    }

    .menu .btns {
        display: flex;
        flex-wrap: wrap-reverse;
        align-items: end;
        width: 100%;
        justify-content: end;
        gap: 8px;
    }

    .hide {
        display: none;
    }

    @media screen and (min-width: 350px) {
        .container .btns button:first-child {
            display: block;
        }
    }

    @media screen and (min-width: 370px) {
        .info-time {
            display: flex !important; 
        }
    }

    @media screen and (min-width: 600px) {
        .info-mail {
            display: flex !important;
        }
    }

    @media screen and (min-width: 1000px) {
        .hide {
            display: flex;
        }

        .burger {
            display: none;
        }

        .container .links {
            display: flex;
        }
    }

    
</style>