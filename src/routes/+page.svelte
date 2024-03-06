<script>
    import Faq from "../lib/Faq.svelte";
    import Reviews from "../lib/Reviews.svelte";
    import Slider from "../lib/Slider.svelte";
    
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

    let faqArrayTwo = [
        true, 
        {
            'Trenger jeg å være til stede under flyttingen?': 'Alle verdifulle møbler blir tatt hånd om med ekstrem forsiktighet. Vi har alltid med oss spesielle bokser, tepper og ekstra embalasje i tilfelle noe er pakket feil, eller om noe skulle trenge å bli ekstra sikkret under flyttingen.',
            'Må jeg demontere møblene?': 'Alle verdifulle møbler blir tatt hånd om med ekstrem forsiktighet. Vi har alltid med oss spesielle bokser, tepper og ekstra embalasje i tilfelle noe er pakket feil, eller om noe skulle trenge å bli ekstra sikkret under flyttingen.',
            'Kan jeg spore bilen møblene blir fraktet med?': 'Alle verdifulle møbler blir tatt hånd om med ekstrem forsiktighet. Vi har alltid med oss spesielle bokser, tepper og ekstra embalasje i tilfelle noe er pakket feil, eller om noe skulle trenge å bli ekstra sikkret under flyttingen.',
            'Hvordan håndteres verdifulle møbler under flyttingen?': 'Alle verdifulle møbler blir tatt hånd om med ekstrem forsiktighet. Vi har alltid med oss spesielle bokser, tepper og ekstra embalasje i tilfelle noe er pakket feil, eller om noe skulle trenge å bli ekstra sikkret under flyttingen.',
            'En gjenstand har blitt ødelagt, hva gjør jeg?': 'Alle verdifulle møbler blir tatt hånd om med ekstrem forsiktighet. Vi har alltid med oss spesielle bokser, tepper og ekstra embalasje i tilfelle noe er pakket feil, eller om noe skulle trenge å bli ekstra sikkret under flyttingen.',
            'Hvordan funker forsikringen min?': 'Alle verdifulle møbler blir tatt hånd om med ekstrem forsiktighet. Vi har alltid med oss spesielle bokser, tepper og ekstra embalasje i tilfelle noe er pakket feil, eller om noe skulle trenge å bli ekstra sikkret under flyttingen.',
            'Hva slags vaskeutstyr blir brukt under renhold?': 'Alle verdifulle møbler blir tatt hånd om med ekstrem forsiktighet. Vi har alltid med oss spesielle bokser, tepper og ekstra embalasje i tilfelle noe er pakket feil, eller om noe skulle trenge å bli ekstra sikkret under flyttingen.',
            'Jeg har flere møbler enn planlagt jeg skal flytte, hva gjør jeg?': 'Alle verdifulle møbler blir tatt hånd om med ekstrem forsiktighet. Vi har alltid med oss spesielle bokser, tepper og ekstra embalasje i tilfelle noe er pakket feil, eller om noe skulle trenge å bli ekstra sikkret under flyttingen.'
        }
    ]

    let reviewCount = 3;

</script>

<section class="landing">
    <div class="landing-content">
        <div class="rabatt btn-small btn-inverted">10% rabatt idag 🎉</div>
        <h1 class="we-m">Vi gjør det <div class="op-m">enkelt</div> og <div class="op-m">rimelig</div> for deg å flytte i Oslo-området</h1>
        <div class="landing-btn">
            <a href="/flyttekalkulator"><button>Flyttekalkulator</button></a>
            <p class="s op-h">La oss finne den beste prisen til deg</p>
        </div>
    </div>
    <div class="landing-image">
        <img src="/placeholder.jfif" alt="">
    </div>
</section>
<section class="content">
    <div class="content-text">
        <h2 class="xl we-m">West flyttebyrå er ditt flyttebyrå i Oslo</h2>
        <p class="m">Vi er et flyttebyrå i Oslo med lang erfaring og en rekke fornøyde kunder. Helt siden starten har vårt hovedmål vært å behandle flyttegods med omtanke og forsiktighet. Samtidig som at vi sørger for en rask og smidig gjennomføring av flytteoppdraget.</p>
    </div>
    <div class="content-info">
        <div class="checklist">
            {#each ['Demontering/montering', 'Pakking', 'Transport', 'Rengjøring', 'Lagring'] as text}
                <div class="checklist-item">
                    <img src="/checkmark.svg" alt="green checkmark">
                    <h3 class="m we-r">{text}</h3>
                </div>
            {/each}
        </div>
        <div class="btns fw">
            <a href="/flyttekalkulator"><button>Flyttekalkulator</button></a>
            <a href="/kontakt-oss"><button class="btn-inverted">Kontakt</button></a>
        </div>
    </div>
</section>
<!--
<section class="carousel">
    <Carousel />
</section>
-->
<!--
<section class="slider">
    <p class="ml we-m">Stolt på av 50+ bedrifter</p>
    <Slider />
</section>
-->
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
    <div class="faq-text">
        <h2 style="color: {faqArrayOne[0]}" class="we-m">Hvorfor velge West Flyttebyrå?</h2>
        <p class="m">Alt arbeidet du selv synes er vanskelig og krevende utfører vi. Enten du bare ønsker flytting, eller hjelp med hele prosessen.</p>
    </div>
    <Faq faqArray={faqArrayOne} />
    <div class="faq-bottom">
        <h4 class="we-m l">Skal du flytte i oslo-området?</h4>
        <div class="faq-btns">
            <a href="/flyttekalkulator"><button class="btn-inverted">Flyttekalkulator</button></a>
            <a href="/kontakt-oss"><button class="btn-tertiary">Kontakt</button></a>
        </div>
    </div>
</section>
<section class="reviews">
    <div class="reviews-text">
        <h2 class="we-m">Ofte anbefalt av kunder</h2>
        <p class="ml">Alt arbeidet du selv synes er vanskelig og krevende utfører vi. Enten du bare ønsker flytting, eller hjelp med hele prosessen.</p>
    </div>    
    <Reviews {reviewCount} />
</section>
<section class="cta">
    <div class="cta-container">
        <div class="rabatt btn-inverted btn-small">10% rabatt idag 🎉</div>
        <h2 class="we-m l">Få et tilbud på din flytting idag</h2>
        <div class="btns">
            <a href="/flyttekalkulator"><button>Flyttekalkulator</button></a>
            <a href="/kontakt-oss"><button class="btn-inverted">Kontakt</button></a>
        </div>
    </div>
    
</section>
<section class="img-divider">
    <img src="/placeholder.png" alt="filled moving truck">
</section>
<section class="faq inverted">
    <div class="faq-header">
        <h2 class="xl we-m">Ofte stilte spørsmål</h2>
        <p class="m we-r">Vi forstår at du kan ha spørsmål angående din kommende flytting. Derfor har vi satt sammen en liste over vanlige spørsmål og svar for å veilede deg gjennom prosessen.</p>
    </div>
    <div class="faq-container">
        <Faq faqArray={faqArrayTwo} />
    </div>
</section>
<section class="cta inverted">
    <div class="cta-container">
        <h3 class="xxl we-m">Kom i gang med flyttingen</h3>
        <div class="btns">
            <a href="/flyttekalkulator"><button class="btn-inverted">Flyttekalkulator</button></a>
            <a href="/kontakt-oss"><button class="btn-tertiary">Kontakt</button></a>
        </div>
    </div>
    
</section>


<style>
    .landing {
        background: var(--secondary-color);
        color: var(--primary-color);
        display: flex;
        flex-direction: column;
    }

    .landing-content {
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
        padding: var(--gap-small) 20px;
    }

    .landing h1 {
        font-size: var(--text-xxl);
        letter-spacing: var(--spacing-xxl);
        text-align: center;
        max-width: 600px;
    }

    .landing-btn {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 12px;
    }

    .landing-btn p {
        text-align: center;
        max-width: 150px;
    }

    .landing-image {
        width: 100%;
    }

    .landing-image img {
        max-height: 500px;
        object-fit: cover;
        object-position: center;
        width: 100%;
    }

    .content {
        background: var(--secondary-color);
        padding: var(--gap-small) 20px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: center;
        align-items: start;
        color: var(--primary-color);
    }

    .content-text {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 435px;
        gap: 20px;
    }

    .content-info {
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 100%;
        max-width: 435px;
    }

    .checklist {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .checklist-item {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .btns {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    /* .carousel {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 0;
        background: var(--background);
    }

    .slider {
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
        text-align: center;
        color: var(--primary-color);
        background: var(--background);
        padding-bottom: 60px;
    } */

    .info {
        background: var(--secondary-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        padding: 60px 16px 40px 16px;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-top: 1px solid var(--border-light);
        max-width: 1000px;
    }

    .info-container .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 20px;
        width: 100%;
        max-width: 350px;
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

    .faq {
        padding: var(--gap-medium) 20px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        color: var(--primary-text);
    }

    .faq-text {
        display: flex;
        flex-direction: column;
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

    .faq.inverted {
        background: var(--secondary-color);
        color: var(--inverted-text);
        gap: var(--gap-medium);
    }

    .faq.inverted .faq-header {
        display: flex;
        flex-direction: column;
        color: var(--primary-color);
        gap: 20px;
        text-align: center;
        align-items: center;
        max-width: 450px;
    }

    .faq-container {
        background: var(--background);
        padding: 0 24px;
        width: 100%;
        border-radius: 20px;
    }

    .faq.inverted .faq-container {
        max-width: 550px;
    }

    .faq-bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .faq-btns {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 8px;
        width: 100%;
    }

    .reviews {
        padding: 40px 16px;
        background: var(--secondary-color);
        display: flex;
        flex-direction: column;
        gap: 45px;
        color: var(--primary-color);
    }

    .reviews-text {
        display: flex;
        flex-direction: column;
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

    .cta {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--secondary-color);
        color: var(--primary-color);
    }

    .cta-container {
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--border-light);
        align-items: center;
        text-align: center;
        padding: var(--gap-medium) 20px;
        gap: 20px;
        width: 100%;
        max-width: 1000px;
    }

    .cta.inverted {
        background: var(--primary-color);
        color: var(--primary-text);
    }

    .cta.inverted .btns {
        display: flex;
        justify-content: center;
    }


    .img-divider {
        background: var(--secondary-color);
    }

    .img-divider img {
        object-fit: cover;
        object-position: center;
        max-height: 500px;
        width: 100%;
    }

    @media screen and (min-width: 1000px) {
        .info-container {
            flex-direction: row;
        }
    }


    @media screen and (min-width: 800px) {
        .faq {
            padding: var(--gap-large) 24px;
        }

        .faq-text h2 {
            font-size: var(--text-xxxl);
            letter-spacing: var(--spacing-xxxl);
        }

        .reviews-text h2 {
            font-size: var(--text-xxxl);
            letter-spacing: var(--spacing-xxxl);
        }

        .landing-content h1 {
            font-size: var(--text-display);
            letter-spacing: var(--spacing-display);
        }

        .content {
            padding: var(--gap-large) 24px;
            gap: var(--gap-large);
            flex-direction: row;
        }

        .content h2 {
            font-size: var(--text-xxxl);
            letter-spacing: var(--spacing-xxxl);
        }

        .cta-container {
            padding: var(--gap-large) 20px;
            gap: 24px;
        }

        .cta h2 {
            font-size: var(--text-xxl);
            letter-spacing: var(--spacing-xxl);
        }

        .faq-header {
            gap: 24px;
        }

        .faq-header h2 {
            font-size: var(--text-xxxl);
            letter-spacing: var(--spacing-xxxl);
        }
    }

    @media screen and (min-width: 550px) {
        .faq {
            align-items: center;
        }

        .faq-btns {
            flex-wrap: nowrap;
            display: flex;
            max-width: 400px;
        }
    }

</style>