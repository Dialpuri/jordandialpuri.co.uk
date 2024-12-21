export default function Navbar() {
    return (
        <header className="bg-primary flex flex-row px-4 p-8 align-middle justify-center text-l md:text-xl lg:text-xl lg:px-24">

            <div className="flex-col mr-auto">
                <h1 className=" font-extrabold leading-none tracking-tight text-gray-900 mt-auto mb-auto">Jordan Dialpuri</h1>
                <span className="text-sm text-gray-500">PhD Student | University of York</span>
            </div>
            <nav className="flex flex-row space-x-6 mt-auto mb-auto">
                <a href="about" className="font-bold tracking-tight">About</a>
                <a href="about" className="font-bold tracking-tight">Publications</a>
                <a href="about" className="font-bold tracking-tight">Contact</a>
            </nav>
        </header>
    )
}