<script>
    import Calculator from "../../lib/Calculator.svelte";
    let items = [
        {
            image: '/bed.svg',
            title: 'Seng',
            size: 2
        },
        {
            image: '/sofa.svg',
            title: 'Sofa',
            size: 1.4
        },
        {
            image: '/spisebord.svg',
            title: 'Spisebord',
            size: 0.8
        }
    ];
    
</script>

<section class="hero">
    <div class="header">
        <h1 class="xxl we-b">Flyttekalkulator</h1>
        <p class="ml">Vi kan benytte flyttekalkulator som utgangspunkt i en fastpris, men det er da viktig at du har fått med deg alt du skal flytte på oversikten.</p>
    </div>
    <Calculator calculatorItems={items} />
</section>
<section class="info">
    <p class="ml">
        Har du noe som skal flyttes på som ikke finnes på flyttekalkulatoren? Se om du kan finne noe som har tilsvarende størrelse eller send en egen henvendelse med beskrivelse.
        <br><br>
        Vanskelig å estimere antall kartonger? I de fleste tilfeller har vi mer enn vi tror, så legg heller på noen ekstra, så kan det ev justeres når det nærmer seg flytt og du har pakket klart.
    </p>
    <div class="help">
        <p class="l">Trenger du hjelp?</p>
        <button class="fw">+47 926 47 084</button>
    </div>
</section>


<style>
    .hero {
        background: var(--background);
        color: var(--primary-color);
        padding: 60px 24px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .header {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .info {
        background: var(--secondary-color);
        color: var(--primary-color);
        padding: 80px 24px;
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    .help {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .help button {
        height: 55px;
    }


</style>
