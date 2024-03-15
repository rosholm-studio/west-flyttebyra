<svelte:head>
    <title>Flyttekalkulator - West Flyttebyrå</title>
    <meta name="description" content="Prøv ut vår nye flyttekalkulator for å få et personlig tilbud på flytting din. West Flyttebyrå er ditt flyttebyrå i Oslo.
    ">
</svelte:head>

<script>
    import Calculator from "../../lib/Calculator.svelte";
    let items = [
        {
            image: 'seng.svg',
            title: 'Seng',
            size: 1.2
        },
        {
            image: 'dobbelseng.svg',
            title: 'Dobbelseng',
            size: 2.4
        },
        {
            image: 'tv.svg',
            title: 'TV',
            size: 0.5
        },
        {
            image: 'tørketrommel.svg',
            title: 'Tørketrommel',
            size: 0.6
        },
        {
            image: 'vaskemaskin.svg',
            title: 'Vaskemaskin',
            size: 0.6
        },
        {
            image: 'oppvaskmaskin.svg',
            title: 'Oppvaskmaskin',
            size: 0.6
        },
        {
            image: 'kjøleskap.svg',
            title: 'Kjøleskap',
            size: 0.6
        },
        {
            image: 'komfyr.svg',
            title: 'Komfyr',
            size: 0.6
        },
        {
            image: 'mikrobølgeovn.svg',
            title: 'Mikrobølgeovn',
            size: 0.2
        },
        {
            image: 'støvsuger.svg',
            title: 'Støvsuger',
            size: 0.3
        },
        {
            image: 'stereoanlegg.svg',
            title: 'Stereoanlegg',
            size: 0.3
        },
        {
            image: 'høytalere.svg',
            title: 'Høytalere',
            size: 0.2
        },
        {
            image: 'skjenk.svg',
            title: 'Skjenk',
            size: 0.5
        },
        {
            image: 'garderobeskap.svg',
            title: 'Garderobeskap',
            size: 0.3
        },
        {
            image: 'bokhylle.svg',
            title: 'Bokhylle',
            size: 0.3
        },
        {
            image: 'spisebord.svg',
            title: 'Spisebord',
            size: 0.6
        },
        {
            image: 'salongbord.svg',
            title: 'Salongbord',
            size: 0.4
        },
        {
            image: 'skrivebord.svg',
            title: 'Skrivebord',
            size: 0.4
        },
        {
            image: 'sidebord.svg',
            title: 'Sidebord',
            size: 0.1
        },
        {
            image: 'speil.svg',
            title: 'Speil',
            size: 0.1
        },
        {
            image: 'bilde.svg',
            title: 'Bilde',
            size: 0.1
        },
        {
            image: '2-3-seter_sofa.svg',
            title: '2-3-seter sofa',
            size: 1
        },
        {
            image: 'hjørnesofa.svg',
            title: 'Hjørnesofa',
            size: 1.5
        },
        {
            image: 'lenestol.svg',
            title: 'Lenestol',
            size: 0.3
        },
        {
            image: 'stol.svg',
            title: 'Stol',
            size: 0.2
        },
        {
            image: 'gulvlampe.svg',
            title: 'Gulvlampe',
            size: 0.2
        },
        {
            image: 'sykkel.svg',
            title: 'Sykkel',
            size: 0.5
        },
        {
            image: 'ski.svg',
            title: 'Ski',
            size: 0.1
        },
        {
            image: 'barneseng.svg',
            title: 'Barneseng',
            size: 0.6
        },
        {
            image: 'nattbord.svg',
            title: 'Nattbord',
            size: 0.2
        },
        {
            image: 'piano.svg',
            title: 'Piano',
            size: 2.5
        },
        {
            image: 'klokke.svg',
            title: 'Klokke',
            size: 0.5
        },
        {
            image: 'lamper.svg',
            title: 'Lamper',
            size: 0.4
        },
        {
            image: 'lysekrone.svg',
            title: 'Lysekrone',
            size: 0.5
        },
        {
            image: 'pc.svg',
            title: 'PC',
            size: 0.5
        },
        {
            image: 'teppe.svg',
            title: 'Teppe',
            size: 0.3
        },
        {
            image: 'radio.svg',
            title: 'Radio',
            size: 0.1
        },
        {
            image: 'fryser.svg',
            title: 'Fryser',
            size: 1.2
        },
        {
            image: 'barnevogn.svg',
            title: 'Barnevogn',
            size: 0.5
        },
        {
            image: 'bildekk.svg',
            title: 'Bildekk',
            size: 0.2
        },
        {
            image: 'hageredskap.svg',
            title: 'Hageredskap',
            size: 0.3
        },
        {
            image: 'hagebord.svg',
            title: 'Hagebord',
            size: 0.2
        },
        {
            image: 'hagestol.svg',
            title: 'Hagestol',
            size: 0.2
        },
        {
            image: 'esker.svg',
            title: 'Esker',
            size: 2
        }
    ];
    
</script>

<section class="hero">
    <div class="header">
        <h1 class="xxl we-b">Få den beste prisen på flytting i Oslo-området</h1>
        <p class="ml">Vi kan benytte flyttekalkulator som utgangspunkt i en fastpris, men det er da viktig at du har fått med deg alt du skal flytte på oversikten.</p>
        <div class="rabatt btn-inverted btn-small">10% rabatt idag 🎉</div>
        
    </div>
    <Calculator calculatorItems={items} />
</section>
<div class="img-container">
    <img src="/calculator.webp" alt="West flyttebyrå under flytting i oslo">
</div>


<style>
    .hero {
        background: var(--secondary-color);
        color: var(--primary-color);
        padding: var(--gap-small) 24px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        gap: var(--gap-small);
    }

    .header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 24px;
        max-width: 550px;
    }
    .img-container {
        background: var(--secondary-color);
        overflow: hidden;
    }

    .img-container img {
        max-height: 500px;
        -o-object-fit: cover;
           object-fit: cover;
        -o-object-position: center;
           object-position: center;
        width: 100%;
    }

    @media screen and (min-width: 800px) {
        .hero {
            padding: var(--gap-large) 24px;
            gap: var(--gap-medium);
        }
        .header h1 {
            font-size: var(--text-display);
            letter-spacing: var(--spacing-display);
        }
    }

    @media screen and (min-width: 400px) {
        .header {
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            text-align: center;
            gap: var(--gap-small);
        }
    }


</style>
