<script>
    import "@fontsource/inter";
    import "../global.css";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
    import { onMount } from "svelte";

    let container;
    let offset;

    onMount(() => {
        container = document.querySelector('nav .container');
        offset = `margin-top: ${container.offsetHeight}px;`;
    })
</script>

<div>
    <Navbar />
    <main style="{offset}"><slot></slot></main>
    <Footer />
</div>
