<script>
    import { onMount } from "svelte";
    import Reviews from "../../lib/Reviews.svelte";
    import Faq from "../../lib/Faq.svelte";
    import { browser } from '$app/environment';
    import emailjs from '@emailjs/browser';
    import { goto } from '$app/navigation';

    let result;
    onMount(() => result = localStorage.getItem('result'))
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

    let fraHeis = false;
    let tilHeis = false;

    let inFraAdresse = '';
    let inFraPostnummer = '';
    let inFraPoststed = '';
    let inFraEtasje = '';
    let inTilAdresse = '';
    let inTilPostnummer = '';
    let inTilPoststed = '';
    let inTilEtasje = '';
    let inNavn = '';
    let inEpost = '';
    let inPrefix = "+47";
    let inMobilnummer = '';
    

    let formBtn;
    let sending = false;
    let formFilled = false;

    onMount(() => {
        emailjs.init({
            publicKey: import.meta.env.VITE_EJS_PKEY,
        });
    })

    $: if (browser ) {
        formFilled = 
            (inFraAdresse.length>5 && inTilAdresse.length>5) &&
            (inFraPostnummer && inFraPostnummer.toString().length>2 && inTilPostnummer && inTilPostnummer.toString().length>2) &&
            (inFraPoststed.length>1 && inTilPoststed.length>1) &&
            (inFraEtasje && inFraEtasje.toString.length>0 && inTilEtasje && inTilEtasje.toString.length>0) &&
            (inNavn.length>3) && 
            (inEpost.length>3 && inEpost.includes('@') && inEpost.includes('.')) &&
            (inPrefix.length>2 && inMobilnummer && inMobilnummer.toString().length>6) &&
            !sending;
    }
    
    function sendEmail() {
        if (!formFilled) return;
        sending = true;
        formBtn.textContent = "Sender..."
        emailjs.send("service_3yktczh","tilbud",{
            kalkulator: result,
            fraAdresse: inFraAdresse,
            fraPostnummer: inFraPostnummer,
            fraPoststed: inFraPoststed,
            fraEtasje: inFraEtasje,
            fraHeis: fraHeis === true ? 'Ja' : 'Nei',
            tilAdresse: inTilAdresse,
            tilPostnummer: inTilPostnummer,
            tilPoststed: inTilPoststed,
            tilEtasje: inTilEtasje,
            tilHeis: tilHeis === true ? 'Ja' : 'Nei',
            navn: inNavn,
            epost: inEpost,
            prefix: inPrefix,
            mobilnummer: inMobilnummer
        }).then(() => {
            formBtn.textContent = "Suksess!";
            sending = false;
            goto('/suksess');
        }, (error) => {
            formBtn.textContent = "Error :(";
            console.error('Svift | ', error);
            sending = false;
        });
    }
</script>

<section class="hero">
    <div class="hero-text">
        <h1 class="xxl we-b">Få ditt personlige tilbud {#if result>0}på <u>{result} m³</u>{/if}</h1>
        <p class="m">Vi kan benytte flyttekalkulator som utgangspunkt i en fastpris, men det er da viktig at du har fått med deg alt du skal flytte på oversikten.</p>
        <div class="rabatt btn-inverted btn-small">10% rabatt idag 🎉</div>
    </div>
    <form>
        <div class="hidden">
            {#if result>0}<input type="text" value="{result}" hidden>{/if}
        </div>
        <h2 class="m we-m">Hvor flytter du fra?</h2>
        <div class="divider fw"></div>
        <div class="form-item">
            <label for="fra-adresse">Adresse*</label>
            <input bind:value="{inFraAdresse}" type="text" id="fra-adresse" placeholder="Karl Johans gate 0">
        </div>
        <div class="form-item">
            <label for="fra-postnummer">Postnummer*</label>
            <input bind:value="{inFraPostnummer}" type="number" id="fra-postnummer" placeholder="0265">
        </div>
        <div class="form-item">
            <label for="fra-poststed">Poststed*</label>
            <input bind:value="{inFraPoststed}" type="text" id="fra-poststed" placeholder="Oslo">
        </div>
        <div class="form-item">
            <label for="fra-etasje">Etasje*</label>
            <input bind:value="{inFraEtasje}" type="number" id="fra-etasje" placeholder="3">
        </div>
        <div class="form-item">
            <label for="fra-heis">Heis</label>
            <div class="checkbox">
                <input class:active={fraHeis} type="button" id="fra-heis" value="Ja" on:click={() => fraHeis = true}>
                <input class:active={!fraHeis} type="button" id="fra-heis" value="Nei" on:click={() => fraHeis = false}>
            </div>
        </div>
        <div></div>
        <h2 class="m we-m">Hvor flytter du til?</h2>
        <div class="divider fw"></div>
        <div class="form-item">
            <label for="til-adresse">Adresse*</label>
            <input bind:value="{inTilAdresse}" type="text" id="til-adresse" placeholder="Karl Johans gate 0">
        </div>
        <div class="form-item">
            <label for="til-postnummer">Postnummer*</label>
            <input bind:value="{inTilPostnummer}" type="number" id="til-postnummer" placeholder="0265">
        </div>
        <div class="form-item">
            <label for="til-poststed">Poststed*</label>
            <input bind:value="{inTilPoststed}" type="text" id="til-poststed" placeholder="Oslo">
        </div>
        <div class="form-item">
            <label for="til-etasje">Etasje*</label>
            <input bind:value="{inTilEtasje}" type="number" id="til-etasje" placeholder="3">
        </div>
        <div class="form-item">
            <label for="til-heis">Heis</label>
            <div class="checkbox">
                <input class:active={tilHeis} type="button" id="til-heis" value="Ja" on:click={() => tilHeis = true}>
                <input class:active={!tilHeis} type="button" id="til-heis" value="Nei" on:click={() => tilHeis = false}>
            </div>
        </div>
        <div></div>
        <h2 class="m we-m">Informasjon om deg</h2>
        <div class="divider fw"></div>
        <div class="form-item">
            <label for="name">Navn*</label>
            <input bind:value="{inNavn}" type="text" id="name" placeholder="Ole Gunnarsen">
        </div>
        <div class="form-item">
            <label for="mail">E-post*</label>
            <input bind:value="{inEpost}" type="email" id="mail" placeholder="ole@mail.com">
        </div>
        <div class="form-item">
            <label for="number">Mobilnummer*</label>
            <div>
                <input bind:value="{inPrefix}" maxlength="4" type="text" placeholder="+47">
                <input bind:value="{inMobilnummer}" type="number" id="number" placeholder="000 00 000">
            </div>            
        </div>
        <button bind:this="{formBtn}" disabled="{!formFilled}" type="submit" on:click="{sendEmail}" class="inverted">Få uforpliktet tilbud</button>
        <p class="s op-m">Ved å sende inn skjemaet godtar du <u><a href="/personvern">personvernserklæringen.</a></u></p>
    </form>
</section>
<div class="img-divider">
    <img src="/placeholder_tilbud.png" alt="Happy client">
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

    h1 u {
        text-underline-offset: 8px;
        -webkit-text-decoration: 3px underline;
                text-decoration: 3px underline;
    }

    .hero {
        background: var(--secondary-color);
        color: var(--primary-color);
        padding: 60px 24px;
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

    .hero-text {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 20px;
        max-width: 550px;
    }

    form {
        width: 100%;
        max-width: 480px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 20px;
    }

    .checkbox input {
        width: 50%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        text-align: center;
    } 

    .hidden {
        display: none;
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
            gap: var(--gap-medium);
        }

        .hero-text {
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            text-align: center;
            gap: var(--gap-small);
        }

        .hero-text h1 {
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