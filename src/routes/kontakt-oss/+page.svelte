<script>

</script>

<section class="hero">
    <div class="hero-text">
        <h1 class="xxl we-m">Kontakt oss</h1>
        <p>Trenger du hjelp eller har spørsmål angående din kommende flytting? Vår dedikerte kundeservice er her for å hjelpe deg. Kontakt oss i dag for å få mer informasjon.</p>
    </div>
    <div class="hero-content">
        <div class="hero-item">
            <img src="/icons/phone_inverted.svg" alt="Phone">
            <p class="xl we-r">Telefonnummer</p>
            <p class="op-h">+47 926 47 084</p>
        </div>
        <div class="hero-item">
            <img src="/icons/mail_inverted.svg" alt="Mail letter">
            <p class="xl we-r">E-post</p>
            <p class="op-h">post@westflyttebyra.no</p>
        </div>
        <div class="hero-item">
            <img src="/icons/pin.svg" alt="Address pin">
            <p class="xl we-r">Adresse</p>
            <p class="op-h">Ole Deviks vei 35, 0668 Oslo</p>
        </div>
    </div>
</section>
<section class="form">
    <div class="form-text">
        <h2 class="xxl we-m">Vil du heller sende oss en melding?</h2>
        <p>Vi svarer vanligvis samme dag.</p>
    </div>
    <form>
        <h2 class="s we-m">Kontaktskjema</h2>
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
        <div class="form-item">
            <label for="melding">Melding</label>
            <textarea name="melding" id="melding" placeholder="Skriv din melding her"></textarea>
        </div>
        <button type="submit" class="inverted">Send</button>
        <p class="s op-m">Ved å sende inn skjemaet godtar du vilkårene.</p>
    </form>
</section>
<div class="img-divider">
    <img src="/placeholder_tilbud.png" alt="Happy customer">
</div>


<style>
    .hero {
        padding: var(--gap-small) 20px;
        display: flex;
        flex-direction: column;
        gap: var(--gap-medium);
        background: var(--secondary-color);
        align-items: center;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: center;
        max-width: 550px;
        color: var(--primary-color);
    }

    .hero-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;
        width: 100%;
        max-width: 1000px;
    }

    .hero-item {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        background: var(--background);
        border-radius: 20px;
        
        width: 100%;
        max-width: 450px;
        text-align: center;
    }

    .form {
        display: flex;
        padding: var(--gap-medium) 20px;
        gap: var(--gap-small);
        background: var(--secondary-color);
        align-items: center;
        flex-direction: column;
    }

    .form-text {
        display: flex;
        flex-direction: column;
        gap: 24px;
        text-align: center;
        align-items: center;
        color: var(--primary-color);
        max-width: 450px;
    }

    form {
        width: 100%;
        max-width: 480px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    form p {
        text-align: center;
    }
    
    .img-divider {
        background: var(--secondary-color)
    }

    .img-divider img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        max-height: 500px;
    }

    @media screen and (min-width: 870px) {
        .form {
            padding: var(--gap-large) 24px;
            gap: var(--gap-medium);
        }        

        .hero {
            padding: var(--gap-large) 24px;
        }

        .hero h1 {
            font-size: var(--text-display);
        }

        .hero-content {
            flex-direction: row;
        }

        .hero-item {
            max-width: unset;
        }


    }
</style>