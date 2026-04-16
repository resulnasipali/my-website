'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Alanı */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              {/* Geçici Metin Logo (Resim logon hazır olunca Image satırının yorumunu kaldır) */}
              <span className="text-2xl font-extrabold text-blue-900 tracking-tighter">VOGUEMED</span>
              {/* <Image src="/logo.png" alt="Voguemed Logo" width={140} height={40} className="w-auto h-8 sm:h-10" /> */}
            </Link>
          </div>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition">Treatments</Link>
            <Link href="/doctors" className="text-gray-600 hover:text-blue-600 font-medium transition">Doctors</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 font-medium transition shadow-md">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobil Menü Butonu (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 rounded-lg">Treatments</Link>
            <Link href="/doctors" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 rounded-lg">Doctors</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block mt-4 text-center bg-blue-600 text-white px-4 py-3 rounded-xl font-bold shadow-md">
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
