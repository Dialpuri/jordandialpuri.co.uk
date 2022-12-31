<script>


</script>

<div class="main">

    <h1>Projects</h1>

    <div class = "projects">
        <div class = "project-item">
            <h3>Privateer</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur deserunt sunt suscipit vitae. Dolore doloremque itaque iure mollitia odio, quia quos? Alias aut deleniti eaque explicabo placeat praesentium sit!
        </div>
        <div class = "project-item">
            <h3>Privateer</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur deserunt sunt suscipit vitae. Dolore doloremque itaque iure mollitia odio, quia quos? Alias aut deleniti eaque explicabo placeat praesentium sit!

        </div>
        <div class = "project-item">
            <h3>Privateer</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur deserunt sunt suscipit vitae. Dolore doloremque itaque iure mollitia odio, quia quos? Alias aut deleniti eaque explicabo placeat praesentium sit!

        </div>
        <div class = "project-item">
            <h3>Privateer</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur deserunt sunt suscipit vitae. Dolore doloremque itaque iure mollitia odio, quia quos? Alias aut deleniti eaque explicabo placeat praesentium sit!

        </div>
        
    </div>

</div>

<style>

    .projects {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        /*width: 100%;*/
    }

    .project-item {
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        margin: 1rem;
        padding:1rem;
        gap: 1rem;
        box-shadow: 0px 0px 10px black;
        max-width: 25vh;
    }

    .main {
        background-color: var(--bg-secondary);
        color: var(--text-primary);
        border-radius: 10px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        margin: auto;
        align-items: center;
    }

    .intro-container {
        display: flex;
        align-items: center;
        /*justify-content: center;*/
        text-justify: inter-word;
        text-align: center;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        .intro-container {
            flex-wrap: wrap;
            align-items: center;
            /*justify-content: center;*/
            text-align: center;
            justify-content: space-around;

        }


    }


</style>