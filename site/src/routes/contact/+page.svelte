<section style = "display: flex; flex-direction: column">

    <div class = "fill_screen bg_1 hero">

        <div class = "hero_name">
            <h2>Hello, my name is </h2>
            <h1>Jordan Dialpuri</h1>
        </div>

        <img src = "images/memoji.png"/>

    </div>

    <div class = "bg_2 about" id="about">

        <div class = "timeline">
            <h3>Education</h3>
            <ul>
                <li>
                    <span>October 2022 - Present</span>
                    <div class="content">
                        <div class = "text-content">

                            <h3>PhD in Biological Chemistry - University of York</h3>

                            <div class = "extra-content">
                            <p>
                                <span>Project Title: Automated model building of protein-nucleotide complexes using X-ray data and Alphafold models.</span>
                                <span>Supervisors: Professor Kevin Cowtan and Dr Jon Agirre</span>
                                <span>Presented work at Proteins by Candlelight conference in first month of PhD</span>
                            </p>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <span>September 2018 - August 2022</span>
                    <div class="content">
                        <div class = "text-content">
                            <h3>MChem in Chemistry - University of York</h3>
                            <div class = "extra-content">

                            <p>
                                Graduated with First Class Honours with Distinction (1*).
                            </p>
                        </div>
                    </div>                        </div>

                </li>
                <li>
                    <span>September 2011 - June 2018</span>
                    <div class="content">
                        <div class = "text-content">
                            <h3>King Edwards VI Camp Hill School for Boys</h3>
                            <div class = "extra-content">

                            <span>• A levels in Maths (A), Chemistry (A) and Biology (A)</span>
                            <span>• AS level in Computer Science (A)</span>
                            <span>• 10 GCSEs (5 A* and 5A)</span>

                        </div>

                    </div>                        </div>

                </li>

            </ul>
        </div>
        <div class = "timeline">
            <h3>Experience</h3>

            <ul>
                <li>
                    <span>October 2022 - Present</span>
                    <div class="content">
                        <div class = "text-content">

                            <h3>Summer Project - University of York</h3>
                            <div class = "extra-content">

                            <p>
                                <span>Project Title: N-glycan torsion angles</span>
                                <span>Supervisors: Professor Kevin Cowtan and Dr Jon Agirre</span>
                                <span>Presented work at Proteins by Candlelight conference in first month of PhD</span>
                            </p>
                        </div>                        </div>

                    </div>
                </li>
                <li>
                    <span>June 2021 - August 2022</span>
                    <div class="content">
                        <div class = "text-content">
                            <h3>Industrial Placement Student - Afton Chemical</h3>
                            <div class = "extra-content">

                            <span>• One year placement as part of fourth year of undergraduate degree, undertaking a research
                            project.</span>
                            <span>• Developed novel experiments and quantified success by running frequent infrared spectroscopy
                            analyses.</span>
                            <span>• Implementing machine learning models to assist company function.</span>
                        </div>                        </div>


                    </div>
                </li>
                <li>
                    <span>June 2018 - August 2022</span>
                    <div class="content">
                        <div class = "text-content">
                            <h3>MChem in Chemistry - University of York</h3>
                            <div class = "extra-content">

                            <p>
                                Graduated with First Class Honours with Distinction (1*).
                            </p>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>


        </div>

    </div>

    <div class = "fill_screen bg_3" id="projects">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci animi, atque ipsa laudantium libero minus nulla. Ab aliquam aut, commodi delectus, dolor dolore eum labore magnam praesentium quia quisquam!
    </div>

</section>
<style>

    .bg_1 {
        background-color: var(--bg-1);
    }

    .bg_2 {
        background-color: var(--bg-2);
    }

    .bg_3 {
        background-color: var(--bg-3);
    }

    .bg_4 {
        background-color: var(--bg-4);
    }

    .bg_5 {
        background-color: var(--bg-5);
    }

    .flex {
        display: flex;
    }

    .about {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        align-content: center;
        /*flex-grow: 0;*/
        min-height: 100vh;
        width: 100%;
    }

    .hero_name {
        display: flex;
        flex-direction: column;
    }

    .hero_name h1 {
        font-size: 5rem;
    }

    .hero {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        justify-content: center;
        /*flex-grow: inherit;*/
        gap: 2rem;
        color : white;
    }

    @media (max-width: 600px) {
        .hero img { display: none}

        .extra-content { display: none}
        .about { flex-direction: column}
    }
    .hero img {
        max-width: 30vh;
        max-height: 30vh;
        aspect-ratio: 1/1;
    }

    .fill_screen {
        width: 100%;
        height: 100vh;
    }

    .timeline {
        /*width: 800px;*/
        /*width: 40vw;*/
        /*min-width: 30vw;*/
        background-color: var(--bg-2);
        color: #fff;
        padding: 30px 20px;
        margin-inline: 1rem;
        /*box-shadow:0px 0px 10px rgba(0,0,0,.5);*/
    }

    .timeline ul {
        list-style-type: none;
        border-left: 2px solid var(--bg-5);
        padding: 10px 5px;

    }

    .timeline ul li {
        padding: 20px 20px;
        position: relative;
        cursor: pointer;
        border-radius: 20px;
        /*box-shadow: 0px 0px 5px var(--bg-5);*/
        transition: .5s;
        /*background-color: var(--bg-2);*/
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .timeline ul li span {
        display: inline-block;
        background-color: var(--bg-2);
        border-radius: 25px;
        padding: 2px 5px;
        font-size: 15px;
        /*text-align: center;*/
    }

    .timeline ul li .content h3 {
        color: var(--text-primary);
        font-size: 17px;
        padding-top: 5px;
    }

    .timeline ul li .content p {
        padding: 5px 0px 15px 0px;
        font-size: 15px;
    }

    .timeline ul li:before {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        background-color: var(--bg-5);
        border-radius: 50%;
        left: -11px;
        top: 28px;
        transition: .5s;
    }

    .timeline ul li:hover:before {
        background-color: var(--bg-5);
        box-shadow: 0px 0px 10px 2px var(--bg-5);
    }

</style>