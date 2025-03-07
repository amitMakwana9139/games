import { useState } from "react";
import { FaGamepad, FaHome, FaInfoCircle, FaEnvelope, FaThList, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative z-20 flex items-center justify-between px-6 py-4 backdrop-blur-md shadow-md">

            {/* Logo */}
            <div className="flex items-center gap-3">
                <FaGamepad className="text-blue-400 text-3xl" />
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide">
                    GameZone
                </h1>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-gray-300 text-2xl"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Navigation */}
            <nav
                className={`absolute md:static top-16 left-0 w-full md:w-auto  h-screen md:h-auto md:bg-transparent p-5 md:p-0 shadow-lg md:shadow-none transition-all duration-300 ${isOpen ? "block" : "hidden"} md:flex`}
            >
                <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 text-lg font-medium">
                    {[{ icon: <FaHome />, label: "Home" },
                    { icon: <FaThList />, label: "All Games" },
                    { icon: <FaInfoCircle />, label: "About" },
                    { icon: <FaEnvelope />, label: "Contact" },
                    ].map(({ icon, label }, index) => (
                        <li key={index} className="group relative cursor-pointer transition-all">
                            <span className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all">
                                {icon} {label}
                            </span>
                            {/* Underline Effect */}
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
