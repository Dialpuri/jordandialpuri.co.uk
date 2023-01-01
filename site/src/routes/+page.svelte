<script> 
    export const prerender = true;

    import { onMount } from "svelte";

    onMount(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });
</script>

<section style = "display: flex; flex-direction: column">

    <div class = "fill_screen bg_1 hero">

        <div class = "hero_name">
            <h2>Hello, my name is </h2>
            <h1>Jordan Dialpuri</h1>
        </div>

        <img src = "images/memoji.png" alt = "Memoji of Jordan Dialpuri"/>

    </div>

    <div class = "bg_2" id="projects">
        
        <h2 style = "text-align: center; color: var(--text-secondary); padding-top: 1rem;"> Projects </h2>
        <div class="projects">

        <div class="project-content">
            <h4>Nautilus</h4>
            Currently, I am working on Nautilus (Cowtan, 2014).
            Nautilus is a program for automatic model building of nucleotide structures in electron density maps. It will trace a map with no model, extend an existing model, or add nucleotide chains to an existing non-nucleotide model. I am working to improve the reliability and completeness of the models as part of my PhD. This project is almost entirely in C++.
        </div>
        <div class="project-content">
            <h4>Privateer</h4>
            As part of a summer project I worked on Privateer.  Privateer is a tool for carbohydrate structure validation, re-refinement and graphical analysis. I was able to implement a new metric called a 'Z-score' which compares the current models torsion angles to a known database. This database was computed from validated structures in the Protein Data Bank. This project was completed using Python and C++.
        </div>
        <div class="project-content">
            <h4>Chemdle</h4>
            After the webapp Wordle gained popularity, I created a clone called Chemdle. Chemdle was aimed to help students grasp nomeclature in chemistry in a fun, relatable way. Every day, a new molecule would appear for users to try and guess in a similar style to Wordle. The frontend of this project was written in vanilla Javascript with no framework and the backend used was Django (Python) backend.
        </div>
        <div class="project-content">
            <h4>Chemix</h4>
            Chemix is an online editor for drawing lab diagrams and school experiment apparatus. I helped add new apparatus and implement new features as part of the development team. This was a rewarding experience as I learnt many techniques utilised by larger teams such as version control and test driven development. This project was completed in Typescript.
            </div>
        <div class="project-content">
            <h4>Bragg Visualiser</h4>
            To aid my revision for the principles of diffraction course in my undergraduate degree, I created BraggVisualiser. This was a webapp which aimed to visually explain some of the abstract concepts in X-ray crystallography such as the Ewald Sphere. This webapp was incorporated and improved upon for the course for the following year. This project was completed in vanilla Javascript.
        </div>
  

    </div>

    <div class = "bg_1 about" id="about">
        <h2> About </h2>
        
        <div class = "timeline-container">
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

                    </div>                        
                </div>

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
                        </div>                        
                    </div>


                    </div>
                </li>
                <li>
                    <span>June 2020 - August 2020</span>
                    <div class="content">
                        <div class = "text-content">
                            <h3>Summer Project - University of York</h3>
                            <div class = "extra-content">

                            <span>
                                • Wrote article on decolonisation of the scientific curriculum for Chemistry Review. 
                            </span>
                            <span>
                                • Focused on highlighting the achievements of black and minority ethnic (BAME) scientists.
                            </span>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>

        </div>

    </div>

    <!-- <div class="spacer-3-4"></div> -->

    <div class="fill_screen bg_4 contact" id = "contact">
        <h2>Contact</h2>

        <h4>You can contact me by email at jsd523@york.ac.uk</h4>

        <address>
            York Structural Biology Laboratory,
            Department of Biology,
            University of York, 
            Heslington,
            York
            YO10 5DD            
        </address>

        <center>
        <iframe title = "Map View of University of York" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.467204895688!2d-1.0554953073503617!3d53.94638762760822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487930324a78a6f3%3A0xe55ee181ddf91d18!2sUniversity%20of%20York!5e0!3m2!1sen!2suk!4v1672491867081!5m2!1sen!2suk" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id = "map"></iframe>
    </center>
    </div>

</section>



<style>

    .bg_1 {
        background-color: var(--bg-1);
    }

    .bg_2 {
        background-color: var(--bg-2);
    }

    .projects { 
        display: flex;
        flex-direction: row;
        /* gap: 1rem; */
        flex-wrap: wrap;
        align-items: center;
        justify-items: center;
        justify-content: space-evenly;
        min-height: 100vh;
        width: 100%;
        margin-bottom: 1rem;
        color: var(--text-secondary);
        /* padding-inline: 2rem; */

    }

    .project-content { 
        background-color: var(--bg-2);
        border-radius: 15px;
        padding:1rem;
        padding-inline: 1rem;
        max-width: 80vw;
        flex-grow: 1;
        flex-shrink: 1; 
        flex-basis: 1; 
        text-align: justify;
        text-justify: inter-word;
        /* max-width: 25vw; */
    }

    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact { 
        display: flex;
        flex-direction: column;
        gap:1rem;
        align-content: center;
        align-items: center;
        /* justify-content: center; */
        color: var(--text-secondary);

    }

    .contact h4 { 
        text-align: center
    }

    iframe { 
        width: 70vw;
        height: calc(70vw*0.8);

        max-height: 60vh
    }

    .contact h2 { 
        padding-top: 1rem;
        text-align: center;

    }

    .contact address { 
        text-align: center;
    }

    .about h2 { 
        padding-top: 1rem;
        color: var(--text-primary)
    }

    .timeline-container { 
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
        min-height: 100vh;
        width: 100%;
        color: var(--bg-2);
    }

    .hero_name {
        display: flex;
        flex-direction: column;
        padding: 1rem;        
        text-align: center;

    }

    .hero_name h1 {
        font-size: 5rem;
        text-align: center;
    }

    .hero {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        color : white;
    }

    @media (max-width: 600px) {
        .hero img { display: none}
        .hero_name { text-align: center;}
        /* .project-content {margin-inline: 1rem;} */
        .extra-content { display: none}
        .timeline-container { flex-direction: column}
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
        background-color: var(--bg-1);
        color: var(--text-primary);
        padding: 30px 20px;
        margin-inline: 1rem;
    }

    .timeline ul {
        list-style-type: none;
        border-left: 2px solid var(--text-tertiary);
        padding: 10px 5px;

    }

    .timeline ul li {
        padding: 20px 20px;
        position: relative;
        cursor: pointer;
        border-radius: 20px;
        transition: .5s;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .timeline ul li span {
        display: inline-block;
        background-color: var(--bg-1);
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
        background-color: var(--text-tertiary);
        border-radius: 50%;
        left: -11px;
        top: 28px;
        transition: .5s;
    }

    .timeline ul li:hover:before {
        background-color: var(--bg-2);
        box-shadow: 0px 0px 10px 2px var(--bg-2);
    }

    footer {
        width: 100%;
        background-color: var(--bg-1);
        height: 5vh;
    }

</style>