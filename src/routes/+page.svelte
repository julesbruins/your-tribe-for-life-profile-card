<script>
    let { data } = $props(); // data die uit page.server.js komt word hier opgehaald om gebruikt te worden

    const memberMe = data.memberMe; 
</script>


<main>
    <h1>{ memberMe.name }</h1>
    <p>Get to know better by putting your mouse over the hearts on the card! Curious about the face behind the little fun facts? Flip the card.</p>

<div class="flipping">

    <form>
        <input type="radio" id="front" name="profile-card" value="front" checked/>
        <label for="front">front</label>

        <input type="radio" id="back" name="profile-card" value="back" />
        <label for="back">back</label>
    </form>


    <section class="poker-card-info">
        <h2>front of the card</h2>

        <span class="icon-top">♥️</span>
            <ul>
                <li>
                    <button class="icon">♥️</button>
                    <button class="title">Birthday: { memberMe.birthdate }</button>
                </li>
                <li>
                    <button class="icon">♥️</button>
                    <button class="title">Fav tag:{ memberMe.fav_tag }</button>
                </li>
                <li>
                    <button class="icon">♥️</button>
                    <button class="title">Fav property: { memberMe.fav_property }</button>
                </li>
                <li>
                    <button class="icon">♥️</button>
                    <button class="title">Fav attribute: { memberMe.fav_attribute }</button>
                </li>
                <li>
                    <button class="icon">♥️</button>
                    <button class="title">Fav feature: { memberMe.fav_feature }</button>
                </li>
                <li>
                    <button class="icon">♥️</button>
                    <button class="title">Fav coffee: { memberMe.fav_coffee }</button>
                </li>
            </ul>
        <span class="icon-bottom">♥️</span>
    </section>


    <section class="poker-card-photo">
        <h2>back of the card</h2>

        <span class="icon-top">♥️</span>
             <div class="photo-flex">
            <img src="https://fdnd.directus.app/assets/{memberMe.mugshot}" alt="" height="190" width="284">
            <img src="https://fdnd.directus.app/assets/{memberMe.mugshot}" alt="" height="190" width="284">
            </div>

        <span class="icon-bottom">♥️</span>
    </section>


</div>  

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
        margin: 1rem auto;
    }

    h2 {
        position: absolute;
        bottom: -100vh;
        
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
    
    section {
        position: absolute;
        background-color: var(--background-color-two);
        border: var(--border);
        border-radius: var(--border-radius);

        aspect-ratio: 5 / 7;
        width: 100%;
        max-width: 360px;
        
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 25px 15px rgba(0, 29, 11, 0.5);
        transition: .5s;

        .icon-top {
            position: absolute;
            top: 1rem;
            left: 1rem;
            font-size: 1.5rem;
        }
        .icon-bottom {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            rotate: 180deg;
            font-size: 1.5rem;
        }

    }

    .poker-card-photo {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        z-index: -1;
        
        img {
            width: 100%;
            /* height: 80%; */
            object-fit: cover;
            border-radius: 1rem 1rem 0 0;
            
        }
        img:nth-of-type(2) {
            rotate: 180deg;
        }
        .photo-flex {
            border-radius: var(--border-radius);
            border: var(--border);
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: 0;
        }
    }


    /* HOVER ANIMATION HEARTS */
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        position: relative; 
        cursor: pointer;
        height: 100%;
        place-content: center;
        width: fit-content;
        margin: 0 auto;
        
        li {
            position: relative;
            transition: 0.5s;
            list-style-type: none;
            height: 3.5em;
            width: 3.5em;

            button {
                position: absolute;
                border: none;
                background-color: var(--background-color-two);
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

    /* FLIPPING CARD */
    form {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);

        background-color: var(--background-color-two);
        border-radius: var(--border-radius);
        padding: 1rem;
        margin-top: 1rem;
        z-index: 10;
        font-family: var(--secondary-font);
        color: var(--card-accent-dark);

    }

    div:has([value="back"]:checked) .poker-card-photo {
        z-index: 1;
        transform: perspective(1000px) rotateY(180deg) translateX(50%);
    }
    div:has([value="back"]:checked) .poker-card-info {
         transform: perspective(1000px) rotateY(-180deg) translateX(50%);
    }

    input[type="radio"] {
        accent-color: var(--card-accent-dark); 
    }
    label:hover {
      transform: scale(1.2);
    }
    /* label:focus {
        border: var(--border);
    } */

</style>