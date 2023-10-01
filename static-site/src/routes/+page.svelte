<script> 
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

            <h4 >Nautilus </h4>

            Currently, I am working on Nautilus (Cowtan, 2014).
            Nautilus is a program for automatic model building of nucleotide structures in electron density maps. It will trace a map with no model, extend an existing model, or add nucleotide chains to an existing non-nucleotide model. I am working to improve the reliability and completeness of the models as part of my PhD. This project is almost entirely in C++ and the code is available on <a href = "http://www.github.com/dialpuri/nautilus" style="color: inherit;text-decoration: none">GitHub</a>.
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

    <div class = "bg_1 education" id="education">
        <h2> Education </h2>

        <div class="container">
            <div class="timeline-block timeline-block-right">
                <div class="marker"></div>
                <div class="timeline-content">
                    <h3>PhD in Biological Chemistry - University of York</h3>
                    <span class="text-primary-color">October 2022 - Present</span>
                    <p></p>
                    <span class="text-primary-color">Project Title: Automated model building of protein-nucleotide complexes using X-ray data and Alphafold models.</span> 
                    <p class="text-tertiary-color">Gave talks at Proteins by Candelight Conference 2022, BCA Annual Meeting 2023, CCP4 Study Weekend 2023</p>
                </div>
            </div>


            <div class="timeline-block timeline-block-left">
                <div class="marker"></div>
                <div class="timeline-content">
                <h3>MChem in Chemistry - University of York</h3>
                <span class="text-primary-color">October 2018 - July 2022</span>
                <p></p>
                <span class="text-primary-color">Graduated with First Class Honours with Distinction (1*)</span>
                <p class="text-tertiary-color">Completed two summer placements with Dr Jon Agirre in N-glycan validation</p>
                </div>
            </div>

            <div class="timeline-block timeline-block-right">
                <div class="marker"></div>
                <div class="timeline-content">
                    <h3>King Edwards VI Camp Hill School for Boys</h3>
                    <span class="text-primary-color">September 2011 - June 2018</span>
                    <p></p>
                    <span class="text-primary-color">A levels in Maths (A), Chemistry (A) and Biology (A)</span> 
                    <p class="text-tertiary-color">AS level in Computer Science (A), 10 GCSEs (5 A* and 5A)</p>
                </div>
            </div>
        </div>

        <!-- <div class = "timeline-container">
        
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

                        
        </div> -->

    </div>
    <div class = "bg_4 experience" id="experience">
        <h2> Experience </h2>

        <div class="container">
            <div class="timeline-block timeline-block-right">
                <div class="marker"></div>
                <div class="timeline-content">
                    <h3>Summer Project - University of York</h3>
                    <span class="text-secondary-color">June 2022 - October 2022</span>
                    <p></p>
                    <span class="text-secondary-color">Project Title: Analysis and validation of overall N-glycan conformation in Privateer</span> 
                    <p>Published work in Acta Crystallographica Section D - <a href='https://journals.iucr.org/d/issues/2023/06/00/qe5003/qe5003.pdf' style="text-decoration:none">PDF</a></p>
                </div>
            </div>


            <div class="timeline-block timeline-block-left">
                <div class="marker"></div>
                <div class="timeline-content">
                <h3>Industrial Placement Student - Afton Chemical</h3>
                <span class="text-secondary-color">June 2021 - September 2022</span>
                <p></p>
                <span class="text-secondary-color" >Placement as part of undergraduate degree</span>
                <p class="text-secondary-color">Developed novel experiments and quantified success by running frequent infrared spectroscopy analyses. Implementing machine learning models to assist company function</p>
                </div>
            </div>

            <div class="timeline-block timeline-block-right">
                <div class="marker"></div>
                <div class="timeline-content">
                <h3>Industrial Placement Student - Afton Chemical</h3>
                <span class="text-secondary-color">June 2020 - August 2020</span>
                <p></p>
                <span class="text-secondary-color">Wrote article on decolonisation of the scientific curriculum for Chemistry Review Magazine</span>
                <p class="text-secondary-color">Focused on highlighting the achievements of black and minority ethnic (BAME) scientist George Washington Carver</p>
                </div>
            </div>
        </div>


    </div>

    <!-- <div class="spacer-3-4"></div> -->

    <div class="bg_1 contact" id = "contact" >
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

    .education {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .experience { 
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--text-secondary);
    }

    .contact { 
        display: flex;
        flex-direction: column;
        gap:1rem;
        align-content: center;
        align-items: center;
        /* justify-content: center; */
        color: var(--text-primary);

    }

    .contact h4 { 
        text-align: center
    }

    iframe { 
        width: 70vw;
        height: calc(70vw*0.8);

        max-height: 60vh
    }

    .contact { 
        padding-bottom: 1rem;
    }

    .contact h2 { 
        padding-top: 1rem;
        text-align: center;
    }

    .contact address { 
        text-align: center;
    }

    .education h2 { 
        padding-top: 1rem;
        color: var(--text-primary)
    }
    .experience h2 { 
        padding-top: 1rem;
        color: var(--text-secondary)
    }

    .experience h3 { 
        color: var(--text-tertiary);
        /* width: 50%; */
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


   

   
    .timeline-block {
    width: -webkit-calc(50% + 8.5px);
    width: -moz-calc(50% + 8.5px);
    width: calc(50% + 9.6px);
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
    clear: both;
    }
.timeline-block-right {
   float: right;
}

.container {
   width: 80%;
   padding: 50px 0;
   margin: 50px auto;
   position: relative;
   overflow: hidden;
}

.container:before {
   content: '';
   position: absolute;
   top: 0;
   left: 50%;
   margin-left: -1px;
   width: 2px;
   height: 100%;
   background-color: var(--text-tertiary);
   z-index: 1
}


.timeline-block-left {
   float: left;
   direction: rtl
}

.marker {
   width: 16px;
   height: 16px;
   border-radius: 50%;
   border: 2px solid var(--text-tertiary);
   background: var(--text-tertiary);
   margin-top: 10px;
   z-index: 9999
}

.timeline-content {
   width: 95%;
   padding: 0 15px;
   color: #666
}

.timeline-content h3 {
   margin-top: 5px;
   margin-bottom: 5px;
   font-size: 25px;
   font-weight: 500;
   color:var(--text-tertiary)
}

.text-primary-color {
    color: var(--text-primary);
}

.text-secondary-color { 
    color: var(--text-secondary);

}

.text-tertiary-color { 
    color: var(--text-tertiary);

}

.timeline-content span {
   font-size: 15px;
}


.timeline-content p {
   font-size: 14px;
   line-height: 1.5em;
   word-spacing: 1px;
}


@media screen and (max-width: 768px) {
   .container:before {
      left: 8px;
      width: 2px;
   }
   .timeline-block {
      width: 100%;
      margin-bottom: 30px;
   }
   .timeline-block-right {
      float: none;
   }

   .timeline-block-left {
      float: none;
      direction: ltr;
   }
}

    

</style>