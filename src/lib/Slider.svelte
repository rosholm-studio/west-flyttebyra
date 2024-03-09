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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: relative;    
        padding: 20px 0;
        width: 100%;
        overflow: hidden;
        max-width: 600px;
    }

    .logo-slider div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 7px;
        -webkit-animation: 30s slide infinite linear;
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
        background: -webkit-gradient(linear, left top, right top, from(rgb(255, 255, 255)), to(rgba(255, 255, 255, 0)));
        background: -o-linear-gradient(left, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
        background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
    }

    .logo-slider::after {
        right: -2px;
        background: -webkit-gradient(linear, right top, left top, from(rgb(255, 255, 255)), to(rgba(255, 255, 255, 0)));
        background: -o-linear-gradient(right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
        background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
    }

    .op {
        opacity: .5;
    }

    img {
        height: 33px;
    }

    @-webkit-keyframes slide {
        0% {
            
        }
        100% {
            -webkit-transform: translateX(calc(-50% - 3.5px));
                    transform: translateX(calc(-50% - 3.5px));
        }
    }

    @keyframes slide {
        0% {
            
        }
        100% {
            -webkit-transform: translateX(calc(-50% - 3.5px));
                    transform: translateX(calc(-50% - 3.5px));
        }
    }
</style>