import Avatar from "../avatar.jpg"

export default function Footer() {
    return (
        <footer className="text-center flex items-center justify-center mt-auto py-5 text-black">
            <a href="https://www.instagram.com/ferdiisahin/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 rounded-full hover:bg-gray-100 transition-all">
                <img src={Avatar} className="w-8 h-8 rounded-full object-cover" alt="Ferdi Sahin" />
                <span className="text-sm ml-2">Ferdi Sahin</span>
            </a>
        </footer>
    )
}