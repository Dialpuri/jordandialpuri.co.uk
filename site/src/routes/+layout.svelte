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
            <a href = "https://www.github.com/dialpuri"><img style = "max-height: 2rem;" src = "images/github.png"></a>
            <a href = "https://www.linkedin.com/in/jordan-dialpuri/"><img style = "max-height: 2rem;" src = "images/linkedin.png"></a>

        </div>
    </ul>
</div>

<slot></slot>

<!--<div class = "content">-->


<!--    <div class = "slot">-->

<!--        <slot></slot>-->

<!--    </div>-->
<!--</div>-->

<style>
.content {
    display: flex;
    margin: 1rem;
    padding: 0;
    gap: 1rem;
}

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

.navbar-item ul {
    margin: 0;
    padding: 0;
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
    background-color: var(--orange-yellow-crayola);
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

@media (max-width: 768px) {
    .menu {
        display: none;
        position: absolute;
        background-color: var(--bg-primary);
        right: 0;
        left: 0;
        text-align: center;

    }

    .menu li:hover {
        display: inline-block;
        background-color: #6649b8;
        transition: 0.3s ease;
    }

    input[type=checkbox]:checked ~ .menu {
        display: block;
    }

    .hamburger {
        display: block;
        color:white;
    }



}

</style>


