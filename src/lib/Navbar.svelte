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
    
    .container {
        padding: 20px 20px;
        background: var(--secondary-color);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        gap: 8px;
    }

    .logo {
        width: 44px;
    }

    .container .btns {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        gap: 8px;
    }

    .container .btns a {
        white-space: nowrap;
    }

    .container .links {
        display: none;
        gap: 60px;
    }

    .container .links a {
        color: var(--primary-color);
        padding: 12px 20px;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        -webkit-user-drag: none;
    }

    .container .btns button:first-child {
        display: none;
    }

    .burger {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 5px;
        z-index: 16;
    }

    .burger::before, .burger::after {
        display: block;
        content: '';
        -webkit-transform-origin: 69%;
            -ms-transform-origin: 69%;
                transform-origin: 69%;
        width: 20px;
        height: 1px;
        background: var(--primary-color);
        -webkit-transition-duration: 100ms;
             -o-transition-duration: 100ms;
                transition-duration: 100ms;
    }

    .burger.active::before {
        -webkit-transform: rotate(-45deg) translateX(-1px);
            -ms-transform: rotate(-45deg) translateX(-1px);
                transform: rotate(-45deg) translateX(-1px);
    }

    .burger.active::after {
        -webkit-transform: rotate(45deg) translateX(-1px);
            -ms-transform: rotate(45deg) translateX(-1px);
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
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        -webkit-box-align: end;
            -ms-flex-align: end;
                align-items: end;
        background: var(--primary-color);
        gap: 24px;
    }
    
    .menu.active {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .menu .links {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: end;
            -ms-flex-align: end;
                align-items: flex-end;
    }

    .menu a {
        color: var(--primary-text);
        font-weight: var(--weight-medium);
        padding: 4px 0;
    }

    .menu .btns {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap-reverse;
            flex-wrap: wrap-reverse;
        -webkit-box-align: end;
            -ms-flex-align: end;
                align-items: end;
        width: 100%;
        -webkit-box-pack: end;
            -ms-flex-pack: end;
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
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important; 
        }
    }

    @media screen and (min-width: 600px) {
        .info-mail {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
        }
    }

    @media screen and (min-width: 1000px) {
        .hide {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
        }

        .burger {
            display: none;
        }

        .container .links {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
        }
    }
</style>