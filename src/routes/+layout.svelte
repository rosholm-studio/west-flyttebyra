<script>;
    import "@fontsource/inter";
    import "../global.css";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<div>
    <Navbar />
    <main><slot></slot></main>
    <Footer />
</div>
