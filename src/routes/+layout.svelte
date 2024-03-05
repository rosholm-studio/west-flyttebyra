<script>;
    import "@fontsource/inter";
    import "../global.css";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
    import { browser } from '$app/environment';

    if (browser) document.querySelector('footer').style.paddingBottom = `20px`;
</script>

<div>
    <Navbar />
    <main><slot></slot></main>
    <Footer />
</div>
