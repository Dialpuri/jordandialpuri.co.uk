export interface Publication {
  title: string;
  journal: string;
  year: number;
  url: string;
  authors: string;
  /**
   * Papers without a stored abstract link straight out to the DOI.
   * Separate paragraphs with a blank line; the modal splits on them.
   */
  abstract?: string;
  /** Renders a "First author" marker — the signal that actually gets read. */
  firstAuthor?: boolean;
  /** Lifted out of the list into its own card above the articles. */
  kind?: "thesis";
}

export const publications: Publication[] = [
  {
    title:
      "Privateer for UCSF ChimeraX: carbohydrate structure validation and visualisation",
    journal: "Protein Science",
    year: 2026,
    url: "https://doi.org/10.1002/pro.70716",
    authors:
      "L. Holland, J. S. Dialpuri, L. C. Schofield, P. T. Pham, S. Wang, W. Cook, T. I. Croll, et al.",
    abstract:
      "Modeling 3D carbohydrate structures, either as ligands or covalently bonded to proteins, still presents a number of challenges. As such, carbohydrate structure validation is a key step in the modeling process. The Privateer software package has long provided methods to aid in this validation, considering unlikely ring conformations of the sugars, stereochemistry, comparison to known glycans, and unlikely linkage torsions. However, uptake of these tools depends on the pipeline used for structure solution. It is therefore important to make glycan validation available in as many model building programs as possible. To this end, we have created a Privateer bundle for ChimeraX. This bundle provides intuitive access to key validation metrics for carbohydrates present in a structure model within the molecular visualization program while working on your structure solution, as well as providing the ability to visualize monosaccharides in the structure using 3D glycan symbols to aid in understanding of interactions. The Privateer bundle for ChimeraX can be installed from ChimeraX's toolshed.",
  },
  {
    title:
      "Automated Model Building of Nucleic Acids and Carbohydrates Using Experimental Data and Deep Learning Models",
    journal: "University of York",
    year: 2026,
    url: "https://etheses.whiterose.ac.uk/id/eprint/38476/",
    authors: "J. S. Dialpuri",
    kind: "thesis",
    abstract:
      "Understanding the structural information of proteins, nucleic acids, and carbohydrates is fundamental to gaining mechanistic and functional insights into biological processes. X-ray crystallography and, more recently, cryogenic electron microscopy are frequently used methods to study the three-dimensional structures of biological molecules. These techniques do not record three-dimensional atomic positions directly, instead volumetric density data is used to create an atomic model. This process of building models from density data is often time-intensive and requires substantial manual effort, which automated model-building methods aim to alleviate. While automated methods for protein modelling are mature, methods for nucleic acid and carbohydrate modelling often fall short or require manual intervention. The main challenge that automated model-building methods face is identifying probable regions of experimental density associated with a specific atomic group.\n" +
      "\n" +
      "The use of convolutional neural networks to identify regions of experimental density corresponding to the phosphate, sugar and base groups of nucleotides was explored. Extensive experimentation with model architectures enabled the training of a single convolutional neural network that precisely identifies regions of experimental density associated with the nucleic acid phosphate, sugar, and base groups in both crystallographic and electron microscopy experimental density data. These predicted regions can then be used as a guide to automatically model nucleic acids into experimental density, with greater completeness than existing methods can provide. This new method was released as a software package called NucleoFind.\n" +
      "\n" +
      "The model architecture designed for nucleic acids was also applied to carbohydrates to identify potential glycosylation sites successfully. Using glycosylation geometry data obtained from the Protein Data Bank, these potential sites can then be modelled with a simple method of recursive carbohydrate addition and critical assessment. The resultant method can produce complete models of N, O, and C-linked glycosylation, and lays the groundwork for a future automated carbohydrate model-building method.",
  },
  // {
  //     title: "Methods for detecting, building, and improving tryptophan mannosylation in glycoprotein structures",
  //     journal: "Protein Science",
  //     year: 2025,
  //     url: "https://doi.org/10.1002/pro.70025",
  //     authors: "L. Holland, P. T. Pham, H. Bagdonas, J. S. Dialpuri, L. C. Schofield, and J. Agirre",
  // },
  {
    title:
      "NucleoFind: a deep-learning network for interpreting nucleic acid electron density",
    journal: "Nucleic Acids Research",
    year: 2024,
    url: "https://doi.org/10.1093/nar/gkae715",
    authors: "J. S. Dialpuri, J. Agirre, K. D. Cowtan, and P. S. Bond",
    firstAuthor: true,
    abstract:
      "Nucleic acid electron density interpretation after phasing by molecular replacement or other methods remains a difficult problem for computer programs to deal with. Programs tend to rely on time-consuming and computationally exhaustive searches to recognise characteristic features. We present NucleoFind, a deep-learning-based approach to interpreting and segmenting electron density. Using an electron density map from X-ray crystallography obtained after molecular replacement, the positions of the phosphate group, sugar ring and nitrogenous base group can be predicted with high accuracy. On average, 78% of phosphate atoms, 85% of sugar atoms and 83% of base atoms are positioned in predicted density after giving NucleoFind maps produced following successful molecular replacement. NucleoFind can use the wealth of context these predicted maps provide to build more accurate and complete nucleic acid models automatically.",
  },
  {
    title: "Post-translational modifications in the Protein Data Bank",
    journal: "Acta Crystallographica Section D",
    year: 2024,
    url: "https://doi.org/10.1107/S2059798324007794",
    authors: "L. C. Schofield, J. S. Dialpuri, G. N. Murshudov, and J. Agirre",
    abstract:
      "Proteins frequently undergo covalent modification at the post-translational level, which involves the covalent attachment of chemical groups onto amino acids. This can entail the singular or multiple addition of small groups, such as phosphorylation; long-chain modifications, such as glycosylation; small proteins, such as ubiquitination; as well as the interconversion of chemical groups, such as the formation of pyroglutamic acid. These post-translational modifications (PTMs) are essential for the normal functioning of cells, as they can alter the physicochemical properties of amino acids and therefore influence enzymatic activity, protein localization, protein–protein interactions and protein stability. Despite their inherent importance, accurately depicting PTMs in experimental studies of protein structures often poses a challenge. This review highlights the role of PTMs in protein structures, as well as the prevalence of PTMs in the Protein Data Bank, directing the reader to accurately built examples suitable for use as a modelling reference.",
  },
  {
    title:
      "Monitoring carbohydrate 3D structure quality with the Privateer database",
    journal: "Beilstein Journal of Organic Chemistry",
    year: 2024,
    url: "https://doi.org/10.3762/bjoc.20.83",
    authors:
      "J. S. Dialpuri, H. Bagdonas, L. C. Schofield, P. T. Pham, L. Holland, and J. Agirre",
    firstAuthor: true,
    abstract:
      "The remediation of the carbohydrate data of the Protein Data Bank (PDB) has brought numerous enhancements to the findability and interpretability of deposited glycan structures, yet crucial quality indicators are either missing or hard to find on the PDB pages. Without a way to access wider glycochemical context, problematic structures may be taken as fact by keen but inexperienced scientists. The Privateer software is a validation and analysis tool that provides access to a number of metrics and links to external experimental resources, allowing users to evaluate structures using carbohydrate-specific methods. Here, we present the Privateer database, a free resource that aims to complement the growing glycan content of the PDB.",
  },
  {
    title:
      "Online carbohydrate 3D structure validation with the Privateer web app",
    journal: "Acta Crystallographica Section F",
    year: 2024,
    url: "https://doi.org/10.1107/S2053230X24000359",
    authors:
      "J. S. Dialpuri, H. Bagdonas, L. C. Schofield, P. T. Pham, L. Holland, P. S. Bond, et al.",
    firstAuthor: true,
    abstract:
      "Owing to the difficulties associated with working with carbohydrates, validating glycan 3D structures prior to deposition into the Protein Data Bank has become a staple of the structure-solution pipeline. The Privateer software provides integrative methods for the validation, analysis, refinement and graphical representation of 3D atomic structures of glycans, both as ligands and as protein modifiers. While Privateer is free software, it requires users to install any of the structural biology software suites that support it or to build it from source code. Here, the Privateer web app is presented, which is always up to date and available to be used online (https://privateer.york.ac.uk) without installation. This self-updating tool, which runs locally on the user's machine, will allow structural biologists to simply and quickly analyse carbohydrate ligands and protein glycosylation from a web browser whilst retaining all confidential information on their devices.",
  },
  {
    title:
      "Analysis and validation of overall N-glycan conformation in Privateer",
    journal: "Acta Crystallographica Section D",
    year: 2023,
    url: "https://doi.org/10.1107/S2059798323003510",
    authors:
      "J. S. Dialpuri, H. Bagdonas, M. Atanasova, L. C. Schofield, M. L. Hekkelman, et al.",
    firstAuthor: true,
    abstract:
      "The oligosaccharides in N-glycosylation provide key structural and functional contributions to a glycoprotein. These contributions are dependent on the composition and overall conformation of the glycans. The Privateer software allows structural biologists to evaluate and improve the atomic structures of carbohydrates, including N-glycans; this software has recently been extended to check glycan composition through the use of glycomics data. Here, a broadening of the scope of the software to analyse and validate the overall conformation of N-glycans is presented, focusing on a newly compiled set of glycosidic linkage torsional preferences harvested from a curated set of glycoprotein models.",
  },
];
