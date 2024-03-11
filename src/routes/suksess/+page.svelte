<svelte:head>
    <title>Suksess - West Flyttebyrå</title>
</svelte:head>

<script>
    import Reviews from "../../lib/Reviews.svelte";
    import Faq from "../../lib/Faq.svelte";
    let reviewCount = 3;

    let faqArrayOne = [ 
        null, 
        {
            'Effektiv flytting': 'Vi er tilgjengelige døgnet rundt om det skulle være noe du trenger hjelp med.',
            'Tar vare på tingene dine': 'Vi er tilgjengelige døgnet rundt om det skulle være noe du trenger hjelp med.',
            'Sikkerhet': 'Vi er tilgjengelige døgnet rundt om det skulle være noe du trenger hjelp med.',
            'Rask kommunikasjon': 'Vi er tilgjengelige døgnet rundt om det skulle være noe du trenger hjelp med.',
            'God kundeservice': 'Vi er tilgjengelige døgnet rundt om det skulle være noe du trenger hjelp med.',
            'Pålitelig': 'Vi er tilgjengelige døgnet rundt om det skulle være noe du trenger hjelp med.',
            'Uforpliktende tilbud': 'Vi er tilgjengelige døgnet rundt om det skulle være noe du trenger hjelp med.'
        }
    ]
</script>

<section class="hero">
    <h1 class="we-b xxl">Det var alt. Vi kontakter deg snarest 🎉</h1>
    <p class="m">Vi gleder oss til å høre om dine flytteplaner!</p>
</section>
<div class="img-divider">
    <img src="/placeholder_tilbud.png" alt="Happy customer">
</div>
<!-- <section class="reviews">
    <div class="reviews-text">
        <h2 class="we-m">Ofte anbefalt av kunder</h2>
        <p class="ml">Alt arbeidet du selv synes er vanskelig og krevende utfører vi. Enten du bare ønsker flytting, eller hjelp med hele prosessen.</p>
    </div>    
    <Reviews {reviewCount} />
</section> -->
<section class="info">
    <div class="info-container">
        <div class="item">
            <img src="/clock.svg" alt="Moving clock">
            <h4 class="xl we-m">Punktlig og effektiv</h4>
            <p class="ml op-m">Vi respekterer tiden din</p>
        </div>
        <div class="item">
            <img src="/card.svg" alt="Credit card">
            <h4 class="xl we-m">Økonomisk</h4>
            <p class="ml op-m">Markedets beste priser på din flyttejobb</p>
        </div>
        <div class="item">
            <img src="/sticker.svg" alt="Checkmark">
            <h4 class="xl we-m">30 års erfaring</h4>
            <p class="ml op-m">Flyttebyrå med lang og bred erfaring</p>
        </div>
    </div>
</section>
<section class="faq">
    <Faq faqArray={faqArrayOne} />
</section>

<style>
    .hero {
        padding: var(--gap-small) 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 20px;
        text-align: center;
        width: 100%;
        background: var(--secondary-color);
        color: var(--primary-color);
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }

    h1 {
        max-width: 550px;
    }

    .img-divider {
        background: var(--secondary-color)
    }

    .img-divider img {
        width: 100%;
        -o-object-fit: cover;
           object-fit: cover;
        -o-object-position: center;
           object-position: center;
        max-height: 500px;
    }

    .reviews {
        padding: 40px 16px;
        background: var(--secondary-color);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 45px;
        color: var(--primary-color);
    }

    .reviews-text {
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
        text-align: center;
        gap: 20px;
    }

    .reviews-text h2 {
        font-size: var(--text-xl);
        letter-spacing: var(--spacing-xl);
    }

    .reviews-text p {
        max-width: 480px;
    }


    .faq {
        padding: var(--gap-medium) 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 40px;
        color: var(--primary-text);
    }

    .info {
        background: var(--secondary-color);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        gap: 40px;
        padding: 60px 24px 40px 24px;
    }

    .info-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        width: 100%;
        max-width: 1030px;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        border-top: 1px solid var(--border-light);
    }

    .info-container .item {
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
        gap: 20px;
        padding: 20px;
        width: 100%;
    }

    .info img {
        height: 96px;
        width: 96px;
    }

    .info p {
        text-align: center;
    }

    .info h4 {
        text-align: center;
        color: var(--primary-color)
    }

    @media screen and (min-width: 480px) {
        .hero {
            gap: var(--gap-small);
            padding: var(--gap-large) 24px;
        }

        .hero h1 {
            font-size: var(--text-display);
            letter-spacing: var(--spacing-display);
        }
    }

    @media screen and (min-width: 1000px) {
        .info-container {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-direction: row;
                    flex-direction: row;
        }
    }


    @media screen and (min-width: 800px) {
        .faq {
            padding: var(--gap-large) 24px;
        }
    }

    @media screen and (min-width: 550px) {
        .faq {
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
        }
    }
</style>