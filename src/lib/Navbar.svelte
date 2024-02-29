<script>
    let menuOpen = false;
    let container;
</script>

<nav>
    <div class="container" bind:this={container}>
        <a href="/"><img src="/logo.svg" alt="" class="logo"></a>
        <div class="btns">
            <a href="/flyttekalkulator"><button class="s">Flyttekalkulator</button></a>
            <button class="burger custom" on:click={() => menuOpen = !menuOpen}></button>
        </div>
    </div>
    <div class="menu" class:active={menuOpen}>
        <a href="/">Hjem</a>
        <a href="/om-oss">Om oss</a>
        <a href="/flyttekalkulator">Flyttekalkulator</a>
        <button class="inverted s">+47 926 47 084</button>
    </div>
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
        gap: 20px;
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
        gap: 9px;
    }

    .burger::before, .burger::after {
        content: '';
        width: 20px;
        height: 1px;
        background: var(--tertiary-color)
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
        font-size: var(--text-l);
        letter-spacing: var(--spacing-l);
    }

    .menu button {
        margin-top: 32px;
    }

</style>