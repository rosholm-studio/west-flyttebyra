<script>
    import { onNavigate } from "$app/navigation";
    onNavigate(() => menuOpen = false)

    let menuOpen = false;
    let container;
</script>

<nav>
    <div class="container" bind:this={container}>
        <a href="/"><img src="/logo.svg" alt="" class="logo"></a>
        <div class="btns">
            <a href="/" class="m hide">Hjem</a>
            <a href="/om-oss" class="m hide">Om oss</a>
            <a href="/flyttekalkulator"><button class="s">Flyttekalkulator</button></a>
            <button class="burger custom" class:active={menuOpen} on:click={() => menuOpen = !menuOpen}></button>
        </div>
    </div>
    <div class="menu" class:active={menuOpen}>
        <a href="/" class="l">Hjem</a>
        <a href="/om-oss" class="l">Om oss</a>
        <a href="/flyttekalkulator" class="l">Flyttekalkulator</a>
        <a href="tel:+47 926 47 084"><button class="inverted s">+47 926 47 084</button></a>
    </div>
    <button class="close custom" class:active={menuOpen} on:touchstart={() => menuOpen = false} on:click={() => menuOpen = false}></button>
</nav>

<style>
    nav {
        left: 0;
        right: 0;
        top: 0;
        position: fixed;
        width: 100%;
        z-index: 10;
    }
    
    .container {
        padding: 12px 20px;
        padding-right: 0;
        background: var(--primary-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .logo {
        height: 20px;
    }

    .btns {
        display: flex;
        align-items: center;
    }

    .btns a {
        white-space: nowrap;
    }

    .btns button {
        font-weight: var(--weight-bold);
    }

    .burger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 10px 20px;
        gap: 9px;
    }

    .burger::before, .burger::after {
        content: '';
        transform-origin:89%;
        width: 20px;
        height: 2px;
        background: var(--tertiary-color);
        transition-duration: 100ms;
    }

    .burger.active::before {
        transform: rotate(-45deg);
    }

    .burger.active::after {
        transform: rotate(45deg);
    }

    .menu {
        display: none;
    }
    
    .menu.active {
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        align-items: end;
        background: var(--primary-color);
        gap: 8px;
    }

    a {
        color: var(--primary-text);
        font-weight: var(--weight-medium);
    }

    .menu button {
        margin-top: 32px;
        outline: 1px solid var(--inverted-border-medium);
    }

    .hide {
        display: none;
    }

    .close {
        display: none;
        bottom: 0;
        width: 100%;
        height: 100vh;
    }

    .close.active {
        display: block;
    }

    @media screen and (min-width: 600px) {
        .container {
            padding-right: 20px;
        }

        .btns {
            gap: 20px;
        }

        .hide {
            display: flex;
        }

        .burger {
            display: none;
        }
    }
</style>