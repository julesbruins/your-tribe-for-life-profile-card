<script>
    let { data } = $props(); // data die uit page.server.js komt word hier opgehaald om gebruikt te worden

    const memberMe = data.memberMe; 
</script>


<main>
    <h1>{ memberMe.name }</h1>
    <p>Get to know better by putting your mouse over the hearts on the card! Curious about the face behind the little fun facts? Flip the card.</p>
    
    <section class="poker-card-info">

        <div class="icon-top"></div> 
            <ul>
                <li>
                    <span class="icon">♥️</span>
                    <span class="title">Birthday: { memberMe.birthdate }</span>
                </li>
                <li>
                    <span class="icon">♥️</span>
                    <span class="title">Fav tag:{ memberMe.fav_tag }</span>
                </li>
                <li>
                    <span class="icon">♥️</span>
                    <span class="title">Fav property: { memberMe.fav_property }</span>
                </li>
                <li>
                    <span class="icon">♥️</span>
                    <span class="title">Fav attribute: { memberMe.fav_attribute }</span>
                </li>
                <li>
                    <span class="icon">♥️</span>
                    <span class="title">Fav feature: { memberMe.fav_feature }</span>
                </li>
                <li>
                    <span class="icon">♥️</span>
                    <span class="title">Fav coffee: { memberMe.fav_coffee }</span>
                </li>
            </ul>
        <div class="icon-bottom"></div> 
    </section>

</main>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* PRIMARY */
     @font-face {
        font-family: "poker-extreme";
        src: url("/fonts/Poker.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
    }

    /* SECONDARY */
    @font-face {
        font-family: "poker-relaxed";
        src: url("/fonts/JqkasWild-w1YD6.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
    }

    main,
    ::before,
    ::after {
        --heart: "♥️";

        --primary-font: "poker-extreme";
        --secondary-font: "poker-relaxed";

        --background-color-one: ;
        --background-color-two: rgb(248, 229, 229);
        --card-accent-light: rgb(196, 19, 19);
        --card-accent-dark: rgb(93, 8, 8);
        
        --border-radius: 1rem;
        --border: 1px solid var(--card-accent-dark);

        background-color: green;
        padding: 1rem;
        width: 100vw;
        height: 100vh;
    }

    h1 {
        font-family: var(--primary-font);
        font-size: clamp(2.5rem, 6vw, 3.5rem);

        background-color: var(--background-color-two);
        border: var(--border);
        border-radius: var(--border-radius);
        width: fit-content;
        padding: .5rem 1rem;
        margin: 0 auto;
    }
    p:nth-of-type(1) {
        max-width: 70ch;
        padding: 1rem;
        text-align: center;
        background-color: var(--background-color-two);
        border-radius: var(--border-radius);
        margin: 1rem auto;
    }
    
    p {
        font-family: var(--secondary-font);
        color: var(--card-accent-dark);
        font-size: 1rem;
    }

    .poker-card-info {
        background-color: var(--background-color-two);
        border: var(--border);
        border-radius: var(--border-radius);

        max-width: 360px;
        height: auto;
        aspect-ratio: 5 / 7;
        padding: 5rem 2rem;

        display: flex;
        flex-direction: column;
        place-items: center;
        position: relative;
        margin: 0 auto;

    }

    .icon-top:before,
    .icon-bottom:after {
        content: var(--heart);
        background-color: var(--background-color-two);
        padding: 1rem;
        height: fit-content;
        width: fit-content;
        position: absolute;
        border-radius: var(--border-radius);
    }
    .icon-top:before {
        top: 0;
        left: 0;
    }
    .icon-bottom:after {
        bottom: 0;
        right: 0;
        rotate: 180deg;
    }
    ::before::before {
        content: var(--number);
    }


    /* HOVER ANIMATION */
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        position: relative; 
        cursor: pointer;
        height: 100%;
        align-items: center;
        
        li {
            position: relative;
            transition: 0.5s;
            list-style-type: none;
            height: 3.5em;
            width: 3.5em;

            span {
                position: absolute;
            }
        }
    }

    ul li .icon {
        color: #777;
        background-color: var(--background-color-one);
        font-size: 3.5em;
        transition: 0.5s;
        transition-delay: 0.25s;
        
    }

    ul li:hover .icon {
        transform: scale(0);
        transition-delay: 0s;
    }


    ul li .title {
        color: var(--card-accent-dark);
        font-family: var(--secondary-font);
        font-size: 1em;
        text-align: center;
        transform: scale(0);
        transition: 0.5s;
        transition-delay: 0s;
    }

    ul li:hover .title {
        transform: scale(1);
        transition-delay: 0.25s;
    }


</style>