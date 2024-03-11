<svelte:head>
    <title>Flyttekalkulator - West Flyttebyrå</title>
    <meta name="description" content="Prøv ut vår nye flyttekalkulator for å få et personlig tilbud på flytting din. West Flyttebyrå er ditt flyttebyrå i Oslo.
    ">
</svelte:head>

<script>
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
    <img src="/placeholder_calculator.png" alt="">
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
