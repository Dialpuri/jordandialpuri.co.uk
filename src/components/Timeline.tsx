function EducationSVG() {
    return <svg className="w-6 h-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16 6.28a1.23 1.23 0 0 0-.62-1.07l-6.74-4a1.27 1.27 0 0 0-1.28 0l-6.75 4a1.25 1.25 0 0 0 0 2.15l1.92 1.12v2.81a1.28 1.28 0 0 0 .62 1.09l4.25 2.45a1.28 1.28 0 0 0 1.24 0l4.25-2.45a1.28 1.28 0 0 0 .62-1.09V8.45l1.24-.73v2.72H16V6.28zm-3.73 5L8 13.74l-4.22-2.45V9.22l3.58 2.13a1.29 1.29 0 0 0 1.28 0l3.62-2.16zM8 10.27l-6.75-4L8 2.26l6.75 4z"/>
    </svg>;
}

function CompanySVG() {
    return <svg className="w-6 h-6"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7 16H8M11.5 16H12.5M16 16H17M18.4 20H5.6C5.03995 20 4.75992 20 4.54601 19.891C4.35785 19.7951 4.20487 19.6422 4.10899 19.454C4 19.2401 4 18.9601 4 18.4V4.8C4 4.51997 4 4.37996 4.0545 4.273C4.10243 4.17892 4.17892 4.10243 4.273 4.0545C4.37996 4 4.51997 4 4.8 4H7.2C7.48003 4 7.62004 4 7.727 4.0545C7.82108 4.10243 7.89757 4.17892 7.9455 4.273C8 4.37996 8 4.51997 8 4.8V9.06863C8 9.67445 8 9.97735 8.1198 10.1176C8.22374 10.2393 8.37967 10.3039 8.53923 10.2914C8.72312 10.2769 8.93731 10.0627 9.36569 9.63431L12.6343 6.36569C13.0627 5.93731 13.2769 5.72312 13.4608 5.70865C13.6203 5.69609 13.7763 5.76068 13.8802 5.88238C14 6.02265 14 6.32556 14 6.93137V9.06863C14 9.67445 14 9.97735 14.1198 10.1176C14.2237 10.2393 14.3797 10.3039 14.5392 10.2914C14.7231 10.2769 14.9373 10.0627 15.3657 9.63431L18.6343 6.36569C19.0627 5.93731 19.2769 5.72312 19.4608 5.70865C19.6203 5.69609 19.7763 5.76068 19.8802 5.88238C20 6.02265 20 6.32556 20 6.93137V18.4C20 18.9601 20 19.2401 19.891 19.454C19.7951 19.6422 19.6422 19.7951 19.454 19.891C19.2401 20 18.9601 20 18.4 20Z"
            stroke="#000000" stroke-width="2" stroke-linecap="round"/>
    </svg>
}

function CVListItem(props: { text: string }): JSX.Element {
    return <p className="mb-2 text-base font-normal text-gray-500 ">• {props.text}</p>;
}

export default function Timeline() {

    return <section className="flex bg-white flex-col pt-12 pb-4 px-6 sm:px-0" id="about">
        <h1 className="ml-0 sm:ml-24 mb-4 text-lg font-extrabold text-center sm:text-left leading-none tracking-tight text-gray-900 md:text-xl">
            Experience and education.
        </h1>

        <ol className="relative border-s border-gray-200 dark:border-gray-700 sm:mx-24 mt-4">
            <li className="mb-10 ms-6">
            <span
                className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-white">
                <EducationSVG/>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
                    Doctor of Philosphy in Biological Chemistry
                </h3>
                <div
                    className="flex mb-2 text-sm font-normal leading-none justify-between text-gray-400 dark:text-gray-500">
                    <span>University of York</span>
                    <time>October 2022 - Present</time>
                </div>
                <CVListItem text="Title: Automated model
                    building of protein-nucleotide and protein-sugar complexes using X-ray data and
                    deep learning models."/>
                <CVListItem text="Produced deep learning
                    models
                    which simulate the intuition of an expert crystallographer to produce
                    accurate and efficient macromolecular structures."/>
                <CVListItem text="Developed deep
                    convolutional
                    neural networks to guide automated model building of nucleic acids and
                    carbohydrates."/>
                <CVListItem text="Created innovative web
                    application to allow easy and intuitive online carbohydrate structure
                    validation."/>
                <CVListItem text="Invited to present machine
                    learning work at national and international conferences."/>
                <CVListItem text="Aided undergraduate
                    students learning through demonstrating JavaScript, Python and R courses as a
                    Graduate Teaching Assistant."/>
            </li>
            <li className="mb-10 ms-6">
            <span
                className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-white">
                <CompanySVG/>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
                    Placement Student
                </h3>
                <div
                    className="flex mb-2 text-sm font-normal leading-none justify-between text-gray-400 dark:text-gray-500">
                    <span>Afton Chemical</span>
                    <time>July 2021 - September 2022</time>
                </div>
                <CVListItem
                    text="One-year placement as part of fourth year of undergraduate degree, undertaking a research project in engine oil additive optimisation."/>
                <CVListItem text="Enhanced computational
                    skills by creating macros using VBA and performing hundreds of quantum chemical
                    and molecular dynamics simulations."/>
                <CVListItem text="Presented monthly to the
                    wider team discussing project updates and goals."/>
                <CVListItem text="Implementing novel machine
                    learning models to predict the outcome of £150,000 industrial test"/>

            </li>

            <li className="ms-6">
            <span
                className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-white">
                <EducationSVG/>
            </span>
                <div className="flex mb-2 text-sm font-normal leading-none justify-between space-x-2 sm:space-x-8">
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
                    MChem in Chemistry
                </h3>
                <span className="text-sm text-center font-semibold me-2 rounded w-48 sm:w-fit">First Class Honours with Distinction (1*)</span>
                </div>

                <div
                    className="flex mb-2 text-sm font-normal leading-none justify-between text-gray-400">
                    <span>University of York</span>
                    <time>September 2018 - July 2022</time>
                </div>
            </li>
        </ol>


    </section>
}