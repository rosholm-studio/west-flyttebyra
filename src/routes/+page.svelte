<svelte:head>
    <title>West Flyttebyrå - Ditt flyttebyrå i Oslo</title>
    <meta name="description" content="Vi er et flyttebyrå i Oslo med lang erfaring og en rekke fornøyde kunder. Skal du flytte i Oslo? Vi gjør det enkelt og rimelig for deg å flytte. Få et gratis tilbud idag.">
</svelte:head>

<script>
    import Faq from "../lib/Faq.svelte";
    import Reviews from "../lib/Reviews.svelte";
    import Slider from "../lib/Slider.svelte";
    
    let faqArrayOne = [ 
        null, 
        {
            'Erfaring': 'Med tre tiår med erfaring i bransjen bringer vi enestående ekspertise og kunnskap til hvert eneste flytt.',
            'Kundefokus': 'Vår forpliktelse til kundetilfredshet driver alt vi gjør. Vi prioriterer dine behov og sikrer åpen kommunikasjon gjennom hele flytteprosessen.',
            'Effektivitet': 'Vi forstår at flytting kan være stressende. Derfor streber vi etter å gjøre prosessen så jevn og effektiv som mulig, og sparer deg for tid og energi.',
            'Profesjonalitet': 'Vårt team består av opplærte fagpersoner som behandler eiendelene dine med største forsiktighet og respekt. Fra pakking til transport sikrer vi en profesjonell tilnærming på hvert trinn.'
        }
    ]

    let faqArrayTwo = [
        true, 
        {
            'Trenger jeg å være til stede under flyttingen?': 'Nei, som regel trenger man ikke å være det. Alt vil da bli flyttet ut i fra avtalen vi på forhånd har utarbeidet.',
            'Må jeg demontere møblene?': 'Som oftes må møblene demonteres. Dette er grunnet at møblene kan lett gå i stykker under transportprossesen. West Flyttebyrå tilbyr å demontere noen av møblene, men skulle det trenges å demontere et helt lokale må det på forhånd oppgis informasjon til oss.',
            'Kan jeg spore bilen møblene blir fraktet med?': 'Det er mulig å spore bilen møblene blir fraktet med ved å ringe flyttebyråets nummer, eller sjøførens privat tlf.',
            'Hvordan håndteres verdifulle møbler under flyttingen?': 'Alle verdifulle møbler blir tatt hånd om med ekstrem forsiktighet. Vi har alltid med oss spesielle bokser, tepper og ekstra embalasje i tilfelle noe er pakket feil, eller om noe skulle trenge å bli ekstra sikkret under flyttingen.',
            'En gjenstand har blitt ødelagt, hva gjør jeg?': 'Hvis en gjenstand har blitt ødelagt eller borte, tar man umidelbart kontakt med flyttebyrået slik at man finner ut hva som har skjedd på stedet.',
            'Hvordan funker forsikringen min?': 'Det er viktig å forsikre seg slik at man unngår uheldige oppståtte situasjoner. West Flyttebyrå har godsansvarsforsikring på alle våre biler.Vi anbefaler alle kunder på det sterkeste å tegne transportforsikring, som dekker hele flytteprosessen, inklusiv inn / ut lasting av hus og bil. Det betyr at du er forsikret mot tyveri og skade til enhver tid.Enkelgjenstander med en verdi over kr. 20.000 – må spesifiseres.',
            'Hva slags vaskeutstyr blir brukt under renhold?': 'Alt vaskeutstyr brukt under jobben er HMS godkjent av byrået. Før jobben blir alle kjemikalene inspisert, slik at det ikke skal oppstå noen helsefarlige situasjoner under og etter at arbeidet er utført.',
            'Jeg har flere møbler enn planlagt jeg skal flytte, hva gjør jeg?': 'Som oftes tas de med den planlagte flyttebilen hvis det ikke er for mange av dem. Vi planlegger alltid slik at det er plass igjen bak i bilen. Hvis det derimot blir for mange møbler enn planlagt må vi kjøre flere ganger, eller komme med en ekstra bil om mulig.'
        }
    ]

</script>

<section class="landing">
    <div class="landing-content">
        <div class="rabatt btn-small btn-inverted">10% rabatt idag 🎉</div>
        <h1 class="we-b">West Flyttebyrå er ditt flyttebyrå i Oslo</h1>
        <div class="landing-btn">
            <a href="/flyttekalkulator"><button>Flyttekalkulator</button></a>
            <p class="s op-h">La oss finne den beste prisen til deg</p>
        </div>
    </div>
    <div class="landing-image">
        <img src="/landing.webp" alt="West flyttebyrå er ditt flyttebyrå i oslo">
    </div>
</section>
<section class="content">
    <div class="content-text">
        <h2 class="xl we-m">Vi gjør det enkelt og rimelig for deg å flytte i Oslo</h2>
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
</section>
<section class="reviews">
    <div class="reviews-text">
        <h2 class="we-m">Ofte anbefalt av kunder</h2>
        <p class="ml">Alt arbeidet du selv synes er vanskelig og krevende utfører vi. Enten du bare ønsker flytting, eller hjelp med hele prosessen.</p>
    </div>    
    <Reviews />
</section>
<section class="cta">
    <div class="cta-container">
        <div class="rabatt btn-inverted btn-small">10% rabatt idag 🎉</div>
        <h2 class="we-m xl">Få et tilbud på din flytting idag</h2>
        <div class="btns">
            <a href="/flyttekalkulator"><button>Flyttekalkulator</button></a>
            <a href="/kontakt-oss"><button class="btn-inverted">Kontakt</button></a>
        </div>
    </div>
    
</section>
<section class="img-divider">
    <img src="/balcony.webp" alt="West flyttebyrå under flytting med kran">
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
        <h3 class="xl we-m">Kom i gang med flyttingen</h3>
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }

    .landing-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 24px;
        -webkit-box-align: center;
            -ms-flex-align: center;
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
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
        -o-object-fit: cover;
           object-fit: cover;
        -o-object-position: center;
           object-position: center;
        width: 100%;
    }

    .content {
        background: var(--secondary-color);
        padding: var(--gap-small) 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 40px;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: start;
            -ms-flex-align: start;
                align-items: start;
        color: var(--primary-color);
    }

    .content-text {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        width: 100%;
        max-width: 435px;
        gap: 20px;
    }

    .content-info {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 40px;
        width: 100%;
        max-width: 435px;
    }

    .checklist {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 12px;
    }

    .checklist-item {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        gap: 12px;
    }

    .btns {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
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
        padding: 60px 16px 40px 16px;
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
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        border-top: 1px solid var(--border-light);
        max-width: 1000px;
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

    .faq.inverted {
        background: var(--secondary-color);
        color: var(--inverted-text);
        gap: var(--gap-medium);
    }

    .faq.inverted .faq-header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        color: var(--primary-color);
        gap: 20px;
        text-align: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
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

    .reviews {
        padding: 80px 16px 20px 16px;
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

    .cta {
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
        background: var(--secondary-color);
        color: var(--primary-color);
    }

    .cta-container {
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
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
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-direction: row;
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
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
        }

        /* .faq-btns {
            -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            max-width: 400px;
        } */
    }

</style>