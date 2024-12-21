export default function Hero() {

    return <section className="bg-gradient-to-b from-primary from-85% to-white to-85% flex flex-col md:flex-row justify-center text-center align-middle py-12 sm:py-8 rounded-b-2xl px-4 md:px-8 lg:px-20 lg:space-x-20">
            <div className="mt-auto pb-12" id="about">
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:pr-8">
                    Innovative solutions with machine learning and web applications.
                </h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-8 xl:px-12 dark:text-gray-400">
                    I am a final year PhD student in the York Structural Biology Laboratory,
                    developing novel methods for modelling protein-nucleotide and protein-sugar complexes using
                    deep-learning models and X-ray diffraction data.
                </p>
                <div className="mx-auto mt-6 justify-center flex flex-row space-x-8">
                    <a href="https://github.com/Dialpuri" target="_blank" rel="noopener noreferrer">
                        <img src="/github.png" className="h-8 w-8 md:w-10 md:h-10 hover:scale-110 hover:cursor-pointer"
                             alt="Github Logo"/>
                    </a>
                    <a href="https://scholar.google.com/citations?hl=en&user=xz6r-DMAAAAJ" target="_blank"
                       rel="noopener noreferrer">
                        <img src="/scholar.png"
                             className="h-8 w-9 md:w-10 md:h-10 hover:scale-110 hover:cursor-pointer"
                             alt="Google Scholar Logo"/>
                    </a>
                    <a href="https://linkedin.com/in/jordan-dialpuri" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png"
                             className="h-8 w-9 md:w-12 md:h-10 hover:scale-110 hover:cursor-pointer"
                             alt="Linkedin Logo"/>
                    </a>
                </div>
            </div>
        <img src="/memoji.png" alt="Memoji of Jordan Dialpuri"
             className="rounded-full border-4 border-gray-700 w-32 h-32  mx-auto sm:w-1/4 sm:h-1/4"/>
    </section>
}