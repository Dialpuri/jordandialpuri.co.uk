<!--<nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">-->
<!--    <a href="index.html" class="navbar-brand ml-lg-3">-->
<!--        <h1 class="m-0 display-5"><span class="text-primary">Jordan </span>Dialpuri</h1>-->
<!--    </a>-->
<!--    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--    </button>-->
<!--    <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">-->
<!--        <div class="navbar-nav m-auto py-0">-->
<!--            <a href="#home" class="nav-item nav-link active">Home</a>-->
<!--            <a href="#about" class="nav-item nav-link">About</a>-->
<!--            <a href="#projects" class="nav-item nav-link">Projects</a>-->
<!--            <a href="#contact" class="nav-item nav-link">Contact</a>-->
<!--            <a href = "https://www.github.com/dialpuri"><img style = "max-height: 2rem;" src = "images/github.png"></a>-->
<!--            <a href = "https://www.linkedin.com/in/jordan-dialpuri/"><img style = "max-height: 2rem;" src = "images/linkedin.png"></a>-->

<!--        </div>-->
<!--    </div>-->
<!--</nav>-->
<!-- Navbar End -->


<!--<script>-->
<!--import logo from '$lib/static/favicon.png'-->
<!--</script>-->

<div class = "navbar_">

    <h1 style=""><span class="text-primary">Jordan </span>Dialpuri</h1>


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
                <a href = "#about">
                    <span>About</span>
                </a>
            </li>
            <li>
                <a href = "#projects">
                    <span>Projects</span>
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
    background-color: rgb(247,248,249);
    border-bottom: var(--orange-yellow-crayola) solid 1px;
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


