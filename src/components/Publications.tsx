import {useState} from "react";
import Example from "./Modal.tsx";

function PublicationBox(publication: Publication, id: string): JSX.Element {
    const [modalOpen, setModalOpen] = useState(false);

    return <button  title="Press for abstract" id={id} className=" bg-gradient-to-br from-primary to-primaryAlt text-center hover:bg-primaryAlt rounded-xl p-6 md:w-96" onClick={() => { setModalOpen(true)}}>
        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900">
            {publication.title}
        </h3>
        <p className="text-blueGray mt-2">
            <span className="italic">{publication.journal}</span>, {publication.date}
        </p>
        <p className="text-blueGray mt-2">
            <span className="italic">{publication.authors}</span>
        </p>

        {modalOpen ? <Example open={modalOpen} setOpen={setModalOpen} publication={publication} />: <></>}


    </button>;
}

export interface Publication {
    title: string;
    journal: string;
    date: string;
    url: string;
    authors: string;
    abstract: string;
}
export default function Publications(){
    const publications: Publication[] = [
        {
            title: "NucleoFind: a deep-learning network for interpreting nucleic acid electron density",
            journal: "Nucleic Acids Research",
            date: "August 2024",
            url: "https://doi.org/10.1093/nar/gkae715",
            authors: "J. S. Dialpuri, J. Agirre, K. D. Cowtan, and P. S. Bond",
            abstract: "Nucleic acid electron density interpretation after phasing by molecular replacement or other methods remains a difficult problem for computer programs to deal with. Programs tend to rely on time-consuming and computationally exhaustive searches to recognise characteristic features. We present NucleoFind, a deep-learning-based approach to interpreting and segmenting electron density. Using an electron density map from X-ray crystallography obtained after molecular replacement, the positions of the phosphate group, sugar ring and nitrogenous base group can be predicted with high accuracy. On average, 78% of phosphate atoms, 85% of sugar atoms and 83% of base atoms are positioned in predicted density after giving NucleoFind maps produced following successful molecular replacement. NucleoFind can use the wealth of context these predicted maps provide to build more accurate and complete nucleic acid models automatically."
        },
        {
            title: "Online carbohydrate 3D structure validation with the Privateer web app ",
            journal: "Acta Crystallogr F Struct Biol Commun",
            date: "January 2024",
            url: "https://doi.org/10.1107/S2053230X24000359",
            authors: "J. S. Dialpuri, H. Bagdonas, L. C. Schofield, et al.",
            abstract: "Owing to the difficulties associated with working with carbohydrates, validating glycan 3D structures prior to deposition into the Protein Data Bank has become a staple of the structure-solution pipeline. The Privateer software provides integrative methods for the validation, analysis, refinement and graphical representation of 3D atomic structures of glycans, both as ligands and as protein modifiers. While Privateer is free software, it requires users to install any of the structural biology software suites that support it or to build it from source code. Here, the Privateer web app is presented, which is always up to date and available to be used online (https://privateer.york.ac.uk) without installation. This self-updating tool, which runs locally on the user's machine, will allow structural biologists to simply and quickly analyse carbohydrate ligands and protein glycosylation from a web browser whilst retaining all confidential information on their devices."
        },
        {
            title: "Analysis and validation of overall N-glycan conformation in Privateer",
            journal: "Acta Crystallogr D Struct Biol",
            date: "June 2023",
            url: "https://doi.org/10.1107/S2059798323003510",
            authors: "J. S. Dialpuri, H. Bagdonas, M. Atanasova, et al.,",
            abstract: "The oligosaccharides in N-glycosylation provide key structural and functional contributions to a glycoprotein. These contributions are dependent on the composition and overall conformation of the glycans. The Privateer software allows structural biologists to evaluate and improve the atomic structures of carbohydrates, including N-glycans; this software has recently been extended to check glycan composition through the use of glycomics data. Here, a broadening of the scope of the software to analyse and validate the overall conformation of N-glycans is presented, focusing on a newly compiled set of glycosidic linkage torsional preferences harvested from a curated set of glycoprotein models."
        },
        {
            title: "Monitoring carbohydrate 3D structure quality with the Privateer database",
            journal: "Beilstein J. Org. Chem",
            date: "April 2024",
            url: "https://doi.org/10.3762/bjoc.20.83",
            authors: "J. S. Dialpuri, H. Bagdonas, L. C. Schofield, et al.",
            abstract: "The remediation of the carbohydrate data of the Protein Data Bank (PDB) has brought numerous enhancements to the findability and interpretability of deposited glycan structures, yet crucial quality indicators are either missing or hard to find on the PDB pages. Without a way to access wider glycochemical context, problematic structures may be taken as fact by keen but inexperienced scientists. The Privateer software is a validation and analysis tool that provides access to a number of metrics and links to external experimental resources, allowing users to evaluate structures using carbohydrate-specific methods. Here, we present the Privateer database, a free resource that aims to complement the growing glycan content of the PDB."
        },
        {
            title: "Post-translational modifications in the Protein Data Bank",
            journal: "Acta Crystallogr D Struct Biol",
            date: "August 2024",
            url: "https://doi.org/10.1107/S2059798324007794",
            authors: "L. C. Schofield, J. S. Dialpuri, G. N. Murshodov, and J. Agirre",
            abstract: "Proteins frequently undergo covalent modification at the post-translational level, which involves the covalent attachment of chemical groups onto amino acids. This can entail the singular or multiple addition of small groups, such as phosphorylation; long-chain modifications, such as glycosylation; small proteins, such as ubiquitination; as well as the interconversion of chemical groups, such as the formation of pyroglutamic acid. These post-translational modifications (PTMs) are essential for the normal functioning of cells, as they can alter the physicochemical properties of amino acids and therefore influence enzymatic activity, protein localization, protein–protein interactions and protein stability. Despite their inherent importance, accurately depicting PTMs in experimental studies of protein structures often poses a challenge. This review highlights the role of PTMs in protein structures, as well as the prevalence of PTMs in the Protein Data Bank, directing the reader to accurately built examples suitable for use as a modelling reference."
        }
    ]

    return <section className="flex flex-col">
        <h1 className="ml-0 sm:ml-24 mb-4 text-lg font-extrabold text-center sm:text-left leading-none tracking-tight text-gray-900 md:text-xl">
            A collection of my published works.
        </h1>


        <div className="mx-auto grid grid-cols-1 px-4 sm:px-0 sm:grid-cols-2 sm:gap-8">
            <div className="grid gap-4">
                <PublicationBox {...publications[0]} />
                <PublicationBox {...publications[2]} />

            </div>
            <div className="grid gap-4">
                <PublicationBox {...publications[1]} />
                <PublicationBox {...publications[3]} />
                <PublicationBox {...publications[4]} />
            </div>
        </div>



    </section>
}