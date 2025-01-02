export default function Footer() {
    return <footer className="bg-primary flex flex-col items-center  p-4 align-middle justify-center text-md tracking-tight text-gray-900">
        <p className="font-semibold">© 2024 - {(new Date().getFullYear())} Jordan Dialpuri</p>
        <p className="text-s">All Rights Reserved.</p>
    </footer>
}