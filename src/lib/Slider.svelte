<div class="logo-slider">
    <div>
        <img src="/eda.png" alt="">
        <img src="/discovery.png" alt="">
        <img src="/risks.png" alt="">
        <img src="/nav.png" alt="">
        <img src="/nor.png" alt="">
        <img src="/eda.png" alt="">
        <img src="/discovery.png" alt="">
        <img src="/risks.png" alt="">
        <img src="/nav.png" alt="">
        <img src="/nor.png" alt="">
    </div>
</div>

<style>
    .logo-slider {
        display: flex;
        position: relative;    
        padding: 20px 0;
        width: 100%;
        overflow: hidden;
        max-width: 600px;
    }

    .logo-slider div {
        display: flex;
        gap: 7px;
        animation: 30s slide infinite linear;
    }

    .logo-slider::before, .logo-slider::after {
        content: '';


        position: absolute;
        z-index: 3;
        width: 80px;
        height: 100%;
        background: var(--bg-primary);
        top: 0;
    }

    .logo-slider::before {
        left: -2px;
        background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
    }

    .logo-slider::after {
        right: -2px;
        background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
    }

    .op {
        opacity: .5;
    }

    img {
        height: 33px;
    }

    @keyframes slide {
        0% {
            
        }
        100% {
            transform: translateX(calc(-50% - 3.5px));
        }
    }
</style>