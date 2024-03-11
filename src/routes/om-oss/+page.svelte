<svelte:head>
    <title>Om Oss - West Flyttebyrå</title>
    <meta name="description" content="West Flyttebyrå er et flyttebyrå i Oslo med 30 års erfaring og gode referanser. Vi er åpent døgnet rundt og hjelper deg med flytting i Oslo når du trenger det.">
</svelte:head>

<script>
    import Faq from "../../lib/Faq.svelte";

    let faqArrayOne = [ 
        null, 
        {
            'Erfaring': 'Med tre tiår med erfaring i bransjen bringer vi enestående ekspertise og kunnskap til hvert eneste flytt.',
            'Kundefokus': 'Vår forpliktelse til kundetilfredshet driver alt vi gjør. Vi prioriterer dine behov og sikrer åpen kommunikasjon gjennom hele flytteprosessen.',
            'Effektivitet': 'Vi forstår at flytting kan være stressende. Derfor streber vi etter å gjøre prosessen så jevn og effektiv som mulig, og sparer deg for tid og energi.',
            'Profesjonalitet': 'Vårt team består av opplærte fagpersoner som behandler eiendelene dine med største forsiktighet og respekt. Fra pakking til transport sikrer vi en profesjonell tilnærming på hvert trinn.'
        }
    ]
</script>

<section class="hero">
    <div class="hero-header">
        <h1 class="we-b xxl">Flyttebyrå i Oslo med 30 års erfaring</h1>
        <p>Med over 30 års erfaring har vi etablert oss som et ledende flyttebyrå i Oslo, dedikert til å tilby effektive, pålitelige og rimelige flyttetjenester skreddersydd for å møte dine behov.</p>
    </div>
    <div class="hero-content">
        <img src="/placeholder_about.png" alt="Unloaded truck">
        <div class="hero-text">
            <h2 class="we-m xxxl">Vår Forpliktelse</h2>
            <p>Siden oppstarten har vi prioritert å håndtere eiendelene dine med forsiktighet og presisjon samtidig som vi sikrer en sømløs overgang til din nye destinasjon. Pakking og flytting er kjerneområdene for vår ekspertise, og vi har utvidet tjenestene våre for å inkludere lagring og rengjøring, rettet mot både private og kommersielle kunder.</p>
            <div class="btns">
                <a href="/flyttekalkulator"><button>Flyttekalkulator</button></a>
                <a href="/kontakt-oss"><button class="btn-inverted">Kontakt</button></a>
            </div>
        </div>
    </div>
</section>
<section class="faq">
    <div class="faq-text">
        <h2 style="color: {faqArrayOne[0]}" class="we-m">Hvorfor velge West Flyttebyrå?</h2>
        <p class="m">Alt arbeidet du selv synes er vanskelig og krevende utfører vi. Enten du bare ønsker flytting, eller hjelp med hele prosessen.</p>
    </div>
    <Faq faqArray={faqArrayOne} />
</section>
<section class="img-divider">
    <img src="/placeholder_about2.png" alt="Home with furniture">
</section>

<style>
    .hero {
        background: var(--secondary-color);
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
        color: var(--primary-color);
    }

    .hero-header {
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        text-align: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 20px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        padding: var(--gap-small) 20px;
        max-width: 550px;
    }

    .hero-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        padding: var(--gap-small) 24px var(--gap-medium) 24px;
        gap: var(--gap-medium);
        max-width: 1000px;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }

    .hero-content img {
        height: 100%;
        max-height: 470px;
        -o-object-fit: cover;
           object-fit: cover;
        -o-object-position: center;
           object-position: center;
        width: 100%;
    }

    .hero-text {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 24px;
        width: 100%
    }

    .btns {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 8px;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
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
        gap: var(--gap-small);
        color: var(--primary-text);
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }

    .faq-text {
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
        width: 100%;
        max-width: 460px;
        text-align: center;
        color: var(--secondary-color);
    }

    .faq-text h2 {
        font-size: var(--text-xl);
        letter-spacing: var(--spacing-xl);
    }

    .img-divider {
        background: var(--secondary-color);
    }

    .img-divider img {
        -o-object-fit: cover;
           object-fit: cover;
        -o-object-position: center;
           object-position: center;
        max-height: 500px;
        width: 100%;
    }

    @media screen and (min-width: 705px) {
        .hero-header {
            padding: var(--gap-large) 24px;
            gap: var(--gap-small);
        }

        .hero-header h1 {
            font-size: var(--text-display);
            letter-spacing: var(--spacing-display);
        }

        .hero-content {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
                -ms-flex-direction: row-reverse;
                    flex-direction: row-reverse;
            padding: var(--gap-small) 48px var(--gap-large) 48px;
        }

        .faq {
            padding: var(--gap-large) 24px;
            gap: var(--gap-medium);
        }

        .faq-text h2 {
            font-size: var(--text-xxxl);
            letter-spacing: var(--spacing-xxxl);
        }
    }
</style>