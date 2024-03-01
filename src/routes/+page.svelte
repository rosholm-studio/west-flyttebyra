<script>
    import Carousel from "../lib/Carousel.svelte";
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

    let reviewCount = 2;

</script>



<section class="landing">
    <div class="landing-content">
        <p class="s">Flyttebyrå i Oslo</p>
        <h1 class="xxl">Vi gjør det enkelt og rimelig for deg å flytte i Oslo-området</h1>
        <p class="ml op-h">Med 30 års erfaring hjelper vi deg med alt fra flytting av møbler, til rengjøring av boligen din.</p>
        
        <div class="landing-stars">
            <div class="stars">
                {#each Array(5) as _}
                    <img src="/star.svg" alt="star icon">
                {/each}
                <p class="s">4.6</p>
            </div>
            <p class="s op-m">fra google reviews</p>
        </div>
    </div>
    <form>
        <div class="form-item">
            <label for="fra">Flytte Fra</label>
            <input type="text" id="fra" placeholder="Karl Johans gate 0">
        </div>
        <div class="form-item">
            <label for="til">Flytte til</label>
            <input type="text" id="til" placeholder="Solveien 1B">
        </div>
        <div class="form-item">
            <label for="name">Navn</label>
            <input type="text" id="name" placeholder="Ole Gunnarsen">
        </div>
        <div class="form-item">
            <label for="number">Mobilnummer</label>
            <div>
                <input maxlength="4" type="text" value="+47" placeholder="+47">
                <input type="number" id="number" placeholder="000 00 000">
            </div>
            
        </div>
        <div class="form-item">
            <label for="mail">E-post</label>
            <input type="email" id="mail" placeholder="ole@mail.com">
        </div>

        <button type="submit" class="inverted">Få uforpliktet tilbud</button>
        <p class="s op-m">Ved å sende inn skjemaet godtar du vilkårene.</p>
    </form>
</section>

<section class="content">
    <div class="content-text">
        <h2 class="xl">Alt du trenger for å flytte i Oslo</h2>
        <p>Alt arbeidet du selv synes er vanskelig og krevende utfører vi. Enten du bare ønsker flytting, eller hjelp med hele prosessen.</p>
    </div>
    <div class="content-info">
        <div class="checklist">
            {#each ['Demontering/montering', 'Pakking', 'Transport', 'Rengjøring', 'Lagring'] as text}
                <div class="checklist-item">
                    <img src="/checkmark.svg" alt="green checkmark">
                    <h3 class="m we-b">{text}</h3>
                </div>
            {/each}
        </div>
        <div class="btns fw">
            <a href="/"><button class="fw">Kontakt oss</button></a>
            <a href="/tilbud"><button class="fw inverted">Få tilbud</button></a>
        </div>
    </div>
</section>
<section class="carousel">
    <Carousel />
</section>
<section class="slider">
    <p class="ml we-m">Stolt på av 50+ bedrifter</p>
    <Slider />
</section>
<section class="faq">
    <h2 style="color: {faqArrayOne[0]}" class="xl we-m">Hvorfor velge West?</h2>
    <Faq faqArray={faqArrayOne} />
</section>
<section class="info">
    <div>
        <div class="item">
            <img src="/smile.svg" alt="Smiley face">
            <h4 class="xl">Fornøydhetsgaranti</h4>
            <p class="ml op-m">At du er fornøyd er det viktigste for oss</p>
        </div>
        <div class="item">
            <img src="/clock.svg" alt="Moving clock">
            <h4 class="xl">Punktlig og effektiv</h4>
            <p class="ml op-m">Vi respekterer tiden din</p>
        </div>

        <div class="item">
            <img src="/card.svg" alt="Credit card">
            <h4 class="xl">Økonomisk</h4>
            <p class="ml op-m">Markedets beste priser på din flyttejobb</p>
        </div>
        <div class="item">
            <img src="/sticker.svg" alt="Checkmark">
            <h4 class="xl">30 års erfaring</h4>
            <p class="ml op-m">Flyttebyrå med lang og bred erfaring</p>
        </div>
    </div>
</section>
<section class="cta">
    <div>
        <h5 class="xl we-b">Har du prøvd vår nye flyttekalkulator?</h5>
        <p class="ml">Legg inn tingene dine, så prøver vi å fikse en fast pris til deg.</p>
        <a href="/flyttekalkulator"><button class="small">Flyttekalkulator</button></a>
    </div>
</section>
<section class="reviews">
    <div>
        <h2 class="xl">Tilbakemeldinger fra Google Reviews</h2>
        <p class="ml">Ikke bare ta vårt ord for det</p>
    </div>    
    <Reviews {reviewCount} />
</section>
<section class="faq inverted">
    <h2 style="color: {faqArrayTwo[0]}" class="xl we-m">Ofte stilte spørsmål</h2>
    <Faq faqArray={faqArrayTwo} />
    <div class="faq-btns">
        <button class="fw">Kontakt oss</button>
        <a href="/tilbud"><button class="inverted fw">Få tilbud</button></a>
    </div>
    
</section>


<style>
    .landing {
        background: var(--primary-color);
        color: var(--primary-text);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        padding: 24px;
        padding-top: 48px;
    }

    .landing-content {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        gap: 24px;
    }

    .landing-content p {
        line-height: 150%;
    }

    .landing-stars {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    form {
        width: 100%;
        max-width: 500px;
    }

    .stars {
        display: flex;
        align-items: center;
    }

    .stars img {
        height: 24px;
        width: 24px;
    }

    .stars p {
        margin-left: 8px;
    }

    /* .landing p, .landing h1 {
        max-width: 99%;
    } */


    .content {
        padding: 60px 20px;
        display: flex;
        flex-direction: column;
        gap: 60px;
        background: var(--background);
        justify-content: center;
        align-items: center;
    }

    .content-text {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
        gap: 24px;
    }

    .content-info {
        display: flex;
        flex-direction: column;
        gap: 60px;
        width: 100%;
        max-width: 400px;
    }

    .checklist {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .checklist-item {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .btns {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .btns button {
        height: 55px;
        max-width: 400px;
    }

    .carousel {
        display: flex;
        flex-direction: column;
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
    }

    .faq {
        padding: 40px 24px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        color: var(--primary-text);

    }

    .faq.inverted {
        background: var(--background-secondary);
        color: var(--inverted-text)
    }

    .faq-btns {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
    }

    .faq-btns button {
        height: 55px;
        background: var(--background);
    }

    .faq-btns .fw{
        max-width: 350px;
    }

    .faq>div button.inverted {
        background: var(--primary-color)
    }

    .info {
        background: var(--secondary-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        padding: 60px 16px 40px 16px;
    }

    .info>div {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
        max-width: 900px;
    }

    .info .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 20px;
        width: 100%;
        max-width: 370px;
    }

    .info img {
        height: 96px;
        width: 96px;
    }

    .info h4 {
        color: var(--primary-color)
    }

    .info button {
        height: 55px;
        max-width: 350px;
    }

    .cta {
        background: var(--secondary-color);
        padding: 40px 16px;
        color: var(--primary-color);
        display: flex;
        justify-content: center;
    }

    .cta>div {
        border-radius: 20px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background: var(--background);
        width: 100%;
        max-width: 600px;
    }

    .cta button {
        width: fit-content;
        outline: none;
    }

    .reviews {
        padding: 40px 16px;
        background: var(--background);
        display: flex;
        flex-direction: column;
        gap: 45px;
        color: var(--primary-color);
    }

    .reviews>div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 24px;
    }

    @media screen and (min-width: 900px) {
        .landing {
            flex-direction: row;
            padding-bottom: 95px;
            gap: 60px;
        }

        form {
            width: unset;
            max-width: none;
        }

        .landing-content h1 {
            font-size: var(--text-display);
            letter-spacing: var(--spacing-display);
        }

        .content {
            flex-direction: row;
            align-items: start;
        }

        .content h2 {
            font-size: var(--text-xxxl);
            letter-spacing: var(--spacing-xxxl);
        }
    }

    @media screen and (min-width: 550px) {
        .faq {
            align-items: center;
        }

        .cta>div {
            align-items: center;
        }

        .faq-btns {
            flex-wrap: nowrap;
            max-width: 350px;
        }

        .faq-btns .fw {
            width: 50%;
        }
    }

</style>