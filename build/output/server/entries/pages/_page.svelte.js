import { c as create_ssr_component } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bg_1.svelte-296vut.svelte-296vut{background-color:var(--bg-1)}.bg_2.svelte-296vut.svelte-296vut{background-color:var(--bg-2)}.projects.svelte-296vut.svelte-296vut{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-items:center;justify-content:space-evenly;min-height:100vh;width:100%;margin-bottom:1rem;color:var(--text-secondary)}.project-content.svelte-296vut.svelte-296vut{background-color:var(--bg-2);border-radius:15px;padding:1rem;padding-inline:1rem;max-width:80vw;flex-grow:1;flex-shrink:1;flex-basis:1;text-align:justify;text-justify:inter-word}.about.svelte-296vut.svelte-296vut{display:flex;flex-direction:column;align-items:center}.contact.svelte-296vut.svelte-296vut{display:flex;flex-direction:column;gap:1rem;align-content:center;align-items:center;color:var(--text-secondary)}.contact.svelte-296vut h4.svelte-296vut{text-align:center\n    }iframe.svelte-296vut.svelte-296vut{width:70vw;height:calc(70vw*0.8);max-height:60vh\n    }.contact.svelte-296vut h2.svelte-296vut{padding-top:1rem;text-align:center}.contact.svelte-296vut address.svelte-296vut{text-align:center}.about.svelte-296vut h2.svelte-296vut{padding-top:1rem;color:var(--text-primary)\n    }.timeline-container.svelte-296vut.svelte-296vut{display:flex;flex-direction:row;justify-content:space-evenly;align-items:flex-start;min-height:100vh;width:100%;color:var(--bg-2)}.hero_name.svelte-296vut.svelte-296vut{display:flex;flex-direction:column;padding:1rem;text-align:center}.hero_name.svelte-296vut h1.svelte-296vut{font-size:5rem;text-align:center}.hero.svelte-296vut.svelte-296vut{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;justify-content:center;gap:2rem;color:white}@media(max-width: 600px){.hero.svelte-296vut img.svelte-296vut{display:none}.hero_name.svelte-296vut.svelte-296vut{text-align:center}.extra-content.svelte-296vut.svelte-296vut{display:none}.timeline-container.svelte-296vut.svelte-296vut{flex-direction:column}}.hero.svelte-296vut img.svelte-296vut{max-width:30vh;max-height:30vh;aspect-ratio:1/1}.fill_screen.svelte-296vut.svelte-296vut{width:100%;height:100vh}.timeline.svelte-296vut.svelte-296vut{background-color:var(--bg-1);color:var(--text-primary);padding:30px 20px;margin-inline:1rem}.timeline.svelte-296vut ul.svelte-296vut{list-style-type:none;border-left:2px solid var(--text-tertiary);padding:10px 5px}.timeline.svelte-296vut ul li.svelte-296vut{padding:20px 20px;position:relative;cursor:pointer;border-radius:20px;transition:.5s;margin-top:1rem;margin-bottom:1rem}.timeline.svelte-296vut ul li span.svelte-296vut{display:inline-block;background-color:var(--bg-1);border-radius:25px;padding:2px 5px;font-size:15px}.timeline.svelte-296vut ul li .content h3.svelte-296vut{color:var(--text-primary);font-size:17px;padding-top:5px}.timeline.svelte-296vut ul li .content p.svelte-296vut{padding:5px 0px 15px 0px;font-size:15px}.timeline.svelte-296vut ul li.svelte-296vut:before{position:absolute;content:'';width:10px;height:10px;background-color:var(--text-tertiary);border-radius:50%;left:-11px;top:28px;transition:.5s}.timeline.svelte-296vut ul li.svelte-296vut:hover:before{background-color:var(--bg-2);box-shadow:0px 0px 10px 2px var(--bg-2)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `<section style="${"display: flex; flex-direction: column"}"><div class="${"fill_screen bg_1 hero svelte-296vut"}"><div class="${"hero_name svelte-296vut"}"><h2>Hello, my name is </h2>
            <h1 class="${"svelte-296vut"}">Jordan Dialpuri</h1></div>

        <img src="${"images/memoji.png"}" alt="${"Memoji of Jordan Dialpuri"}" class="${"svelte-296vut"}"></div>

    <div class="${"bg_2 svelte-296vut"}" id="${"projects"}"><h2 style="${"text-align: center; color: var(--text-secondary); padding-top: 1rem;"}">Projects </h2>
        <div class="${"projects svelte-296vut"}"><div class="${"project-content svelte-296vut"}"><h4>Nautilus </h4>

            Currently, I am working on Nautilus (Cowtan, 2014).
            Nautilus is a program for automatic model building of nucleotide structures in electron density maps. It will trace a map with no model, extend an existing model, or add nucleotide chains to an existing non-nucleotide model. I am working to improve the reliability and completeness of the models as part of my PhD. This project is almost entirely in C++ and the code is available on <a href="${"http://www.github.com/dialpuri/nautilus"}" style="${"color: inherit;text-decoration: none"}" target="${"_blank"}"></a>.
        </div>
        <div class="${"project-content svelte-296vut"}"><h4>Privateer</h4>
            As part of a summer project I worked on Privateer.  Privateer is a tool for carbohydrate structure validation, re-refinement and graphical analysis. I was able to implement a new metric called a &#39;Z-score&#39; which compares the current models torsion angles to a known database. This database was computed from validated structures in the Protein Data Bank. This project was completed using Python and C++.
        </div>
        <div class="${"project-content svelte-296vut"}"><h4>Chemdle</h4>
            After the webapp Wordle gained popularity, I created a clone called Chemdle. Chemdle was aimed to help students grasp nomeclature in chemistry in a fun, relatable way. Every day, a new molecule would appear for users to try and guess in a similar style to Wordle. The frontend of this project was written in vanilla Javascript with no framework and the backend used was Django (Python) backend.
        </div>
        <div class="${"project-content svelte-296vut"}"><h4>Chemix</h4>
            Chemix is an online editor for drawing lab diagrams and school experiment apparatus. I helped add new apparatus and implement new features as part of the development team. This was a rewarding experience as I learnt many techniques utilised by larger teams such as version control and test driven development. This project was completed in Typescript.
            </div>
        <div class="${"project-content svelte-296vut"}"><h4>Bragg Visualiser</h4>
            To aid my revision for the principles of diffraction course in my undergraduate degree, I created BraggVisualiser. This was a webapp which aimed to visually explain some of the abstract concepts in X-ray crystallography such as the Ewald Sphere. This webapp was incorporated and improved upon for the course for the following year. This project was completed in vanilla Javascript.
        </div></div>

    <div class="${"bg_1 about svelte-296vut"}" id="${"about"}"><h2 class="${"svelte-296vut"}">About </h2>
        
        <div class="${"timeline-container svelte-296vut"}"><div class="${"timeline svelte-296vut"}"><h3 class="${"svelte-296vut"}">Education</h3>
            <ul class="${"svelte-296vut"}"><li class="${"svelte-296vut"}"><span class="${"svelte-296vut"}">October 2022 - Present</span>
                    <div class="${"content"}"><div class="${"text-content"}"><h3 class="${"svelte-296vut"}">PhD in Biological Chemistry - University of York</h3>

                            <div class="${"extra-content svelte-296vut"}"><p class="${"svelte-296vut"}"><span class="${"svelte-296vut"}">Project Title: Automated model building of protein-nucleotide complexes using X-ray data and Alphafold models.</span>
                                <span class="${"svelte-296vut"}">Supervisors: Professor Kevin Cowtan and Dr Jon Agirre</span>
                                <span class="${"svelte-296vut"}">Presented work at Proteins by Candlelight conference in first month of PhD</span></p></div></div></div></li>

                <li class="${"svelte-296vut"}"><span class="${"svelte-296vut"}">September 2018 - August 2022</span>
                    <div class="${"content"}"><div class="${"text-content"}"><h3 class="${"svelte-296vut"}">MChem in Chemistry - University of York</h3>
                            <div class="${"extra-content svelte-296vut"}"><p class="${"svelte-296vut"}">Graduated with First Class Honours with Distinction (1*).
                            </p></div></div></div></li>
                <li class="${"svelte-296vut"}"><span class="${"svelte-296vut"}">September 2011 - June 2018</span>
                    <div class="${"content"}"><div class="${"text-content"}"><h3 class="${"svelte-296vut"}">King Edwards VI Camp Hill School for Boys</h3>
                            <div class="${"extra-content svelte-296vut"}"><span class="${"svelte-296vut"}">• A levels in Maths (A), Chemistry (A) and Biology (A)</span>
                            <span class="${"svelte-296vut"}">• AS level in Computer Science (A)</span>
                            <span class="${"svelte-296vut"}">• 10 GCSEs (5 A* and 5A)</span></div></div></div></li></ul></div>
        <div class="${"timeline svelte-296vut"}"><h3 class="${"svelte-296vut"}">Experience</h3>

            <ul class="${"svelte-296vut"}"><li class="${"svelte-296vut"}"><span class="${"svelte-296vut"}">October 2022 - Present</span>
                    <div class="${"content"}"><div class="${"text-content"}"><h3 class="${"svelte-296vut"}">Summer Project - University of York</h3>
                            <div class="${"extra-content svelte-296vut"}"><p class="${"svelte-296vut"}"><span class="${"svelte-296vut"}">Project Title: N-glycan torsion angles</span>
                                <span class="${"svelte-296vut"}">Supervisors: Professor Kevin Cowtan and Dr Jon Agirre</span>
                                <span class="${"svelte-296vut"}">Presented work at Proteins by Candlelight conference in first month of PhD</span></p></div></div></div></li>
                <li class="${"svelte-296vut"}"><span class="${"svelte-296vut"}">June 2021 - August 2022</span>
                    <div class="${"content"}"><div class="${"text-content"}"><h3 class="${"svelte-296vut"}">Industrial Placement Student - Afton Chemical</h3>
                            <div class="${"extra-content svelte-296vut"}"><span class="${"svelte-296vut"}">• One year placement as part of fourth year of undergraduate degree, undertaking a research
                            project.</span>
                            <span class="${"svelte-296vut"}">• Developed novel experiments and quantified success by running frequent infrared spectroscopy
                            analyses.</span>
                            <span class="${"svelte-296vut"}">• Implementing machine learning models to assist company function.</span></div></div></div></li>
                <li class="${"svelte-296vut"}"><span class="${"svelte-296vut"}">June 2020 - August 2020</span>
                    <div class="${"content"}"><div class="${"text-content"}"><h3 class="${"svelte-296vut"}">Summer Project - University of York</h3>
                            <div class="${"extra-content svelte-296vut"}"><span class="${"svelte-296vut"}">• Wrote article on decolonisation of the scientific curriculum for Chemistry Review. 
                            </span>
                            <span class="${"svelte-296vut"}">• Focused on highlighting the achievements of black and minority ethnic (BAME) scientists.
                            </span></div></div></div></li></ul></div></div></div>

    

    <div class="${"fill_screen bg_4 contact svelte-296vut"}" id="${"contact"}"><h2 class="${"svelte-296vut"}">Contact</h2>

        <h4 class="${"svelte-296vut"}">You can contact me by email at jsd523@york.ac.uk</h4>

        <address class="${"svelte-296vut"}">York Structural Biology Laboratory,
            Department of Biology,
            University of York, 
            Heslington,
            York
            YO10 5DD            
        </address>

        <center><iframe title="${"Map View of University of York"}" src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.467204895688!2d-1.0554953073503617!3d53.94638762760822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487930324a78a6f3%3A0xe55ee181ddf91d18!2sUniversity%20of%20York!5e0!3m2!1sen!2suk!4v1672491867081!5m2!1sen!2suk"}" style="${"border:0;"}" allowfullscreen="${""}" loading="${"lazy"}" referrerpolicy="${"no-referrer-when-downgrade"}" id="${"map"}" class="${"svelte-296vut"}"></iframe></center></div></div></section>`;
});
export {
  Page as default
};
