<script>
    import { onMount } from "svelte";
    import Reviews from "../../lib/Reviews.svelte";
    import Faq from "../../lib/Faq.svelte";
    let result;
    onMount(() => result = localStorage.getItem('result'))
    let reviewCount = 3;

    let fraHeis = false;
    let tilHeis = false;

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
    <div class="hero-text">
        <h1 class="xxl we-b">Få ditt personlige tilbud {#if result>0}på <u>{result} m³</u>{/if}</h1>
        <p class="m">Vi kan benytte flyttekalkulator som utgangspunkt i en fastpris, men det er da viktig at du har fått med deg alt du skal flytte på oversikten.</p>
        <div class="rabatt btn-inverted btn-small">10% rabatt idag 🎉</div>
    </div>
    <form>
        <div class="hidden">
            {#if result>0}<input type="text" value="{result}" hidden>{/if}
        </div>
        <h2 class="s we-m">Hvor flytter du fra?</h2>
        <div class="divider fw"></div>
        <div class="form-item">
            <label for="fra-adresse">Adresse</label>
            <input type="text" id="fra-adresse" placeholder="Karl Johans gate 0">
        </div>
        <div class="form-item">
            <label for="fra-til">Flytte til</label>
            <input type="text" id="fra-til" placeholder="Solveien 1B">
        </div>
        <div class="form-item">
            <label for="fra-etasje">Etasje</label>
            <input type="number" id="fra-etasje" placeholder="3">
        </div>
        <div class="form-item">
            <label for="fra-postnummer">Postnummer</label>
            <input type="number" id="fra-postnummer" placeholder="0265">
        </div>
        <div class="form-item">
            <label for="fra-heis">Heis</label>
            <div class="checkbox">
                <input class:active={fraHeis} type="button" id="fra-heis" value="Ja" on:click={() => fraHeis = true}>
                <input class:active={!fraHeis} type="button" id="fra-heis" value="Nei" on:click={() => fraHeis = false}>
            </div>
        </div>
        <div></div>
        <h2 class="s we-m">Hvor flytter du til?</h2>
        <div class="divider fw"></div>
        <div class="form-item">
            <label for="til-adresse">Adresse</label>
            <input type="text" id="til-adresse" placeholder="Karl Johans gate 0">
        </div>
        <div class="form-item">
            <label for="til-til">Flytte til</label>
            <input type="text" id="til-til" placeholder="Solveien 1B">
        </div>
        <div class="form-item">
            <label for="til-etasje">Etasje</label>
            <input type="number" id="til-etasje" placeholder="3">
        </div>
        <div class="form-item">
            <label for="til-postnummer">Postnummer</label>
            <input type="number" id="til-postnummer" placeholder="0265">
        </div>
        <div class="form-item">
            <label for="til-heis">Heis</label>
            <div class="checkbox">
                <input class:active={tilHeis} type="button" id="til-heis" value="Ja" on:click={() => tilHeis = true}>
                <input class:active={!tilHeis} type="button" id="til-heis" value="Nei" on:click={() => tilHeis = false}>
            </div>
        </div>
        <div></div>
        <h2 class="s we-m">Informasjon om deg</h2>
        <div class="divider fw"></div>
        <div class="form-item">
            <label for="name">Navn</label>
            <input type="text" id="name" placeholder="Ole Gunnarsen">
        </div>
        <div class="form-item">
            <label for="mail">E-post</label>
            <input type="email" id="mail" placeholder="ole@mail.com">
        </div>
        <div class="form-item">
            <label for="number">Mobilnummer</label>
            <div>
                <input maxlength="4" type="text" value="+47" placeholder="+47">
                <input type="number" id="number" placeholder="000 00 000">
            </div>
            
        </div>

        <button type="submit" class="inverted">Få uforpliktet tilbud</button>
        <p class="s op-m">Ved å sende inn skjemaet godtar du vilkårene.</p>
    </form>
</section>
<div class="img-divider">
    <img src="/placeholder_tilbud.png" alt="Happy client">
</div>
<section class="reviews">
    <div class="reviews-text">
        <h2 class="we-m">Ofte anbefalt av kunder</h2>
        <p class="ml">Alt arbeidet du selv synes er vanskelig og krevende utfører vi. Enten du bare ønsker flytting, eller hjelp med hele prosessen.</p>
    </div>    
    <Reviews {reviewCount} />
</section>
<section class="info">
    <div class="info-container">
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
<section class="faq">
    <Faq faqArray={faqArrayOne} />
</section>

<style>
    .img-divider {
        background: var(--secondary-color)
    }

    .img-divider img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        max-height: 500px;
    }

    u {
        text-underline-offset: 8px;
        text-decoration: 3px underline;
    }

    .hero {
        background: var(--secondary-color);
        color: var(--primary-color);
        padding: 60px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--gap-small);
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 550px;
    }

    form {
        width: 100%;
        max-width: 480px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .checkbox input {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    } 

    .hidden {
        display: none;
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


    .faq {
        padding: var(--gap-medium) 20px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        color: var(--primary-text);
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

    .info-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-top: 1px solid var(--border-light);
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

    @media screen and (min-width: 480px) {
        .hero {
            gap: var(--gap-medium);
        }

        .hero-text {
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
            align-items: center;
        }
    }
</style>