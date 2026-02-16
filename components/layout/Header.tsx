"use client";
import Link from "next/link";
import {Container} from "../ui/Container";
import {Menu, X} from "lucide-react";
import { useState } from "react";

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
}
const navLinks = [
    { id:"hero", label:"Anasayfa"},
    { id:"menu", label:"Menü"},
    { id:"about", label:"Hakkımızda"},
    { id:"contact", label:"İletişim"},
]


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 text-gray-800">
        <Container>
            <nav className="flex items-center justify-between h-16 ">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    Lumina
                </Link>
          
                {/* Linkler */}
                <ul className="hidden md:flex items-center gap-8  ">
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <button
                                className=" cursor-pointer hover:text-amber-600 transition-colors" 
                                onClick={() => scrollToSection(link.id)}>
                                {link.label}
                            </button>
                        </li>
                    ))}

                </ul>
                
          
                {/* CTA Butonu */}
                    <button className="hidden md:block bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors cursor-pointer">
                        Rezervasyon
                    </button>
                    {/* Mobil Menü Butonu */}
                    <button className="md:hidden cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
            </nav>
            {/* Mobil Menü */}
             {isOpen && (
                <div className="md:hidden border-t border-gray-100">
                <ul className="flex flex-col py-4 gap-4">
                  {navLinks.map(link => (
                    <li key={link.id}>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors cursor-pointer"
                        onClick={() => {
                          scrollToSection(link.id);
                          setIsOpen(false);
                        }}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                  <li className="px-4 pt-2">
                    <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors cursor-pointer">
                      Rezervasyon
                    </button>
                  </li>
                </ul>
              </div>
             )}
        </Container>
    </header>
  )
}

export default Header