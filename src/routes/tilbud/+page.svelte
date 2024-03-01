<script>
    import { onMount } from "svelte";
    let result;
    onMount(() => result = localStorage.getItem('result'))
</script>

<section class="hero">
    <h1 class="xxl we-b">Ditt personlige tilbud {#if result>0}på {result} m³ {/if}</h1>
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
                <input  type="button" id="fra-heis" value="Ja">
                <input  type="button" id="fra-heis" value="Nei">
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
                <input  type="button" id="til-heis" value="Ja">
                <input  type="button" id="til-heis" value="Nei">
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

<style>
    .hero {
        background: var(--background);
        color: var(--primary-color);
        padding: 60px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
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
</style>