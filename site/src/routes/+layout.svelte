<script>
       import BackToTop from "./back_to_top.svelte";

</script>

<div class = "navbar_">

    <h1 style=""><span style = "color:var(--text-secondary)">Jordan </span>Dialpuri</h1>


    <ul class = "navbar-links">

        <input type="checkbox" id="checkbox_toggle" />

        <label for="checkbox_toggle" class="hamburger">&#9776;</label>

        <div class = "menu">
            <li>
                <a href = "/">
                    <span>Home</span>
                </a>
            </li>
            
            <li>
                <a href = "#projects">
                    <span>Projects</span>
                </a>
            </li>
            <li>
                <a href = "#about">
                    <span>About</span>
                </a>
            </li>
            <li>
                <a href = "#contact">
                    <span>Contact</span>
                </a>
            </li>
            <a href = "https://www.github.com/dialpuri"><img style = "max-height: 2rem;" src = "images/github.png" alt = "Github Logo"></a>
            <a href = "https://www.linkedin.com/in/jordan-dialpuri/"><img style = "max-height: 2rem;" src = "images/linkedin.png" alt = "Linkedin Logo"></a>

        </div>
    </ul>
</div>

<slot></slot>

<footer>
    © Jordan Dialpuri 2023  
</footer>

<BackToTop />

<!--<div class = "content">-->


<!--    <div class = "slot">-->

<!--        <slot></slot>-->

<!--    </div>-->
<!--</div>-->

<style>

.navbar_ {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /*padding: 1rem;*/
    padding-inline: 1rem;
    background-color: var(--bg-2);
    border-bottom: var(--text-tertiary) solid 1px;
}

.navbar-links a {
    color: black;
}
 
li {
    list-style: none;
}

a {
    text-decoration: none;
}

.menu {
    display: flex;
    gap: 1em;
    font-size: 18px;
}

.menu li:hover {
    background-color: var(--text-tertiary);
    color: black;
    border-radius: 5px;
    transition: 0.3s ease;
}

.menu li { padding: 5px}

input[type=checkbox]{

    display: none;

}

.hamburger {
    display: none;
    font-size: 24px;
    user-select: none;
    color:white;
}

footer {
        width: 100%;
        background-color: var(--bg-1);
        height: 5vh;
        text-align: center;
        vertical-align: middle;
        line-height: 5vh; 
        color: var(--text-primary)
        /* justify-content: center; */
    }


@media (max-width: 768px) {
    .menu {
        display: none;
        position: absolute;
        background-color: var(--bg-2);
        right: 0;
        left: 0;
        text-align: center;

    }

    .menu li:hover {
        display: inline-block;
        background-color: var(--text-tertiary);
        transition: 0.3s ease;
    }

    input[type=checkbox]:checked ~ .menu {
        display: block;
    }

    .hamburger {
        display: block;
        color:var(--bg-1);
    }



}

</style>


