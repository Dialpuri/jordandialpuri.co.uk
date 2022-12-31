<script>


</script>

<div class="main">

    <h1>About</h1>

    <div class="intro-container">
        <img class='figure' src="/images/memoji.png" alt = "Memoji of Jordan">

        <div class= "intro-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam asperiores blanditiis dicta et
            excepturi facere, ipsum nemo quam quasi ratione repudiandae sapiente sequi sint suscipit! Error porro quisquam
            ut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci amet cupiditate deserunt ea,
            ipsam iure minima molestiae molestias neque nostrum reiciendis sed similique sint temporibus velit voluptatum?
            A, reiciendis!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores ducimus, eligendi esse harum libero
            minima nostrum pariatur rem vitae? At corporis fugit maxime minima molestiae nesciunt, perferendis rem tenetur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis debitis dolorem, doloribus ducimus eum
            facere fugit impedit in ipsum odit, officiis pariatur quos rem repellat sint totam vel vero.
        </div>
    </div>
    <div class="timeline">
        <h3 style = "text-align: left">Education</h3>

        <ul>
            <li>
                <span>October 2022 - Present</span>
                <div class="content">
                    <div class = "text-content">

                        <h3>PhD in Biological Chemistry - University of York</h3>
                        <p>
                            <span>Project Title: Automated model building of protein-nucleotide complexes using X-ray data and Alphafold models.</span>
                            <span>Supervisors: Professor Kevin Cowtan and Dr Jon Agirre</span>
                            <span>Presented work at Proteins by Candlelight conference in first month of PhD</span>
                        </p>
                    </div>
                    <img src = "images/uoy.png"  alt="University of York Crest"/>
                </div>
            </li>
            <li>
                <span>June 2021 - August 2022</span>
                <div class="content">
                    <div class = "text-content">
                        <h3>Industrial Placement Student - Afton Chemical</h3>

                        <span>• One year placement as part of fourth year of undergraduate degree, undertaking a research
                            project.</span>
                        <span>• Developed novel experiments and quantified success by running frequent infrared spectroscopy
                            analyses.</span>
                        <span>• Enhanced computational skills by creating macros using VBA and performing hundreds of
                            quantum chemical and molecular dynamics simulations.</span>
                        <span>• Implementing machine learning models to assist company function.</span>
                    </div>
                    <img src = "images/afton.png"  alt="Afton Chemical logo"/>

                </div>
            </li>
            <li>
                <span>June 2018 - August 2022</span>
                <div class="content">
                    <div class = "text-content">
                        <h3>MChem in Chemistry - University of York</h3>
                        <p>
                            Graduated with First Class Honours with Distinction (1*).
                        </p>
                    </div>
                    <img src = "images/uoy.png" alt="University of York Crest"/>
                </div>
            </li>

        </ul>

    </div>


</div>

<style>

    .content {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    .text-content {
        display: flex;
        flex-direction: column;
    }

    .intro-text {
        max-width: 40vw;
    }

    .content img {
        max-width: 10%;
        aspect-ratio: 1/1;
        object-fit: contain;
     }

    .timeline {
        width: 800px;
        background-color: var(--bg-primary);
        color: #fff;
        padding: 30px 20px;
        /*box-shadow:0px 0px 10px rgba(0,0,0,.5);*/
    }

    .timeline ul {
        list-style-type: none;
        border-left: 2px solid var(--orange-yellow-crayola);
        padding: 10px 5px;

    }

    .timeline ul li {
        padding: 20px 20px;
        position: relative;
        cursor: pointer;
        border-radius: 20px;
        box-shadow: 0px 0px 5px var(--orange-yellow-crayola);
        transition: .5s;
        background-color: var(--bg-secondary);
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .timeline ul li span {
        display: inline-block;
        background-color: var(--bg-secondary);
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
        background-color: var(--orange-yellow-crayola);
        border-radius: 50%;
        left: -11px;
        top: 28px;
        transition: .5s;
    }

    /*.timeline ul li:hover{*/
    /*    background-color:var(--bg-highlight);*/
    /*}*/
    .timeline ul li:hover:before {
        background-color: var(--orange-yellow-crayola);
        box-shadow: 0px 0px 10px 2px #0F0;
    }

    @media (max-width: 768px) {
        .timeline {
            width: 100%;
            padding: 30px 5px 30px 10px;
        }

        .timeline ul li .content h3 {
            color: #34ace0;
            font-size: 15px;
        }
    }

    .main {
        background-color: var(--bg-primary);
        color: var(--text-primary);
        border-radius: 10px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
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