export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  /** Rendered top-right of the card. */
  status: string;
  /** One sentence stating what the program does. */
  summary: string;
  /** Two or three sentences on the implementation. */
  detail: string;
  tags: string[];
  /** Shown as a copyable terminal line when the project ships as a package. */
  install?: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    name: "Coot",
    status: "Current work",
    summary:
      "A program for building, refining and validating macromolecular models against crystallographic and cryo-EM data.",
    detail:
      "Coot has been in continuous use in structural biology laboratories since 2004. My work concerns the modernisation of its C++ codebase, the extension of its Python API, and most importantly, the creation of next-generation features using machine learning and large language models. ",
    tags: ["C++", "Python"],
    links: [
      {
        label: "Project",
        url: "https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/coot/",
      },
      { label: "Source", url: "https://github.com/pemsley/coot" },
    ],
  },
  {
    name: "NucleoFind",
    status: "First author, Nucleic Acids Research 2024",
    summary:
      "A deep convolutional neural network that predicts the positions of the phosphate, sugar and base groups of nucleic acids from experimental density.",
    detail:
      "" +
      "A network was trained in TensorFlow on three-dimensional crystallographic and cryo-EM density maps. Phosphate, sugar and base positions are recovered with high accuracy. These predicted maps are then used to guide automated model building.",
    tags: ["TensorFlow", "ONNX Runtime", "C++", "Python"],
    install: "pip install nucleofind",
    links: [
      { label: "Paper", url: "https://doi.org/10.1093/nar/gkae715" },
      { label: "Source", url: "https://github.com/Dialpuri/NucleoFind" },
      { label: "Documentation", url: "https://dialpuri.github.io/NucleoFind/" },
    ],
  },
  {
    name: "Sails",
    status: "Open source",
    summary:
      "Automated identification and building of linked sugars in crystallographic protein models.",
    detail:
      "Sails is a new automated model building software package for carbohydrates. Sails locates carbohydrate density  adjacent to glycosylation sites using a novel deep learning model and builds the corresponding glycans without manual intervention, a step otherwise performed by hand.",
    tags: ["C++", "Python", "CMake", "PyPI"],
    install: "pip install pysails",
    links: [
      { label: "Source", url: "https://github.com/Dialpuri/Sails" },
      {
        label: "Documentation",
        url: "https://dialpuri.github.io/Sails/installation.html",
      },
    ],
  },
  {
    name: "Privateer web app and database",
    status: "First author",
    summary:
      "Validation of carbohydrate structures in the browser, with precomputed reports covering the Protein Data Bank.",
    detail:
      "Privateer, a software package for carbohydrate validation, was compiled to WebAssembly and driven by a TypeScript interface, so that all computation is performed on the user's own machine and unpublished coordinates are never transmitted. The accompanying database holds validation reports computed across the PDB and PDB-REDO, allowing for validation of new and already published structures.",
    tags: ["TypeScript", "React", "WebAssembly", "C++"],
    links: [
      { label: "Web app", url: "https://privateer.york.ac.uk" },
      { label: "Database", url: "https://privateer.york.ac.uk/database" },
      { label: "Paper", url: "https://doi.org/10.1107/S2053230X24000359" },
    ],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Systems",
    items: ["HPC", "CMake", "GitHub Actions", "Cloudflare"],
  },
  {
    label: "Machine learning",
    items: [
      "TensorFlow",
      "PyTorch",
      "3D convolutional networks",
      "Diffusion models",
    ],
  },
  {
    label: "Python",
    items: [
      "Packaging and wheels",
      "nanobind",
      "PyPI distribution",
      "Continuous integration",
    ],
  },
  {
    label: "Web",
    items: ["TypeScript", "React", "WebAssembly, Emscripten"],
  },
];
