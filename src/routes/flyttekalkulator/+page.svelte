<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores"
    import { onNavigate } from "$app/navigation";
    import Calculator from "../../lib/Calculator.svelte";
    let items = [
        {
            image: 'bed.svg',
            title: 'Seng',
            size: 2
        },
        {
            image: 'sofa.svg',
            title: 'Sofa',
            size: 1.4
        },
        {
            image: 'spisebord.svg',
            title: 'Spisebord',
            size: 0.8
        },
        {
            image: 'hoytalere.svg',
            title: 'Høytalere',
            size: 0.2
        },
        {
            image: 'sykkel.svg',
            title: 'Sykkel',
            size: 0.4
        },
        {
            image: 'gulvlampe.svg',
            title: 'Gulvlampe',
            size: 0.4
        },
        {
            image: 'flytteboks.svg',
            title: 'Flytteboks',
            size: 0.2
        }
    ];

    onMount(() => {
        calcFooter($page.url.pathname)
    })

    onNavigate((details) => {
        calcFooter(details.to.route.id)
    })

    function calcFooter(path) {
        path === '/flyttekalkulator' ? 
            document.querySelector('footer').style.paddingBottom = '90px' : 
            document.querySelector('footer').style.paddingBottom = '20px'
    }
    
</script>

<section class="hero">
    <div class="header">
        <h1 class="xxl we-b">Flyttekalkulator</h1>
        <p class="ml">Vi kan benytte flyttekalkulator som utgangspunkt i en fastpris, men det er da viktig at du har fått med deg alt du skal flytte på oversikten.</p>
    </div>
    <Calculator calculatorItems={items} />
</section>
<section class="info">
    <div class="info-container">
        <p class="ml">
            Har du noe som skal flyttes på som ikke finnes på flyttekalkulatoren? Se om du kan finne noe som har tilsvarende størrelse eller send en egen henvendelse med beskrivelse.
            <br><br>
            Vanskelig å estimere antall kartonger? I de fleste tilfeller har vi mer enn vi tror, så legg heller på noen ekstra, så kan det ev justeres når det nærmer seg flytt og du har pakket klart.
        </p>
        <div class="help">
            <p class="l">Trenger du hjelp?</p>
            <a href="tel:+4792647084"><button class="fw">+47 926 47 084</button></a>
        </div>
    </div>
    
</section>


<style>
    .hero {
        background: var(--background);
        color: var(--primary-color);
        padding: 60px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .header {
        display: flex;
        flex-direction: column;
        gap: 24px;
        max-width: 350px;
    }

    .info {
        background: var(--background);
        padding: 80px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info-container {
        border-radius: 20px;
        padding: 40px;
        background: var(--secondary-color);
        color: var(--primary-color);
        display: flex;
        flex-direction: column;
        gap: 60px;
        max-width: 700px;
    }

    .help {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .help button {
        height: 55px;
    }

    

    @media screen and (min-width: 400px) {
        .header {
            align-items: center;
            text-align: center;
        }

        .help button.fw {
            width: fit-content;
        }
    }


</style>
