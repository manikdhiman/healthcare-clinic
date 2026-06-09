"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[--color-medical-blue] flex items-center gap-2">
              🏥 <span className="hidden sm:inline">HealthCare Clinic</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-[--color-medical-blue] transition">Home</Link>
            <Link href="/about" className="hover:text-[--color-medical-blue] transition">About</Link>
            <Link href="/services" className="hover:text-[--color-medical-blue] transition">Services</Link>
            <Link href="/book" className="bg-[--color-medical-blue] text-white px-5 py-2 rounded-full hover:bg-[--color-medical-darkBlue] transition shadow-md">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none text-2xl">
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pt-2 pb-4 space-y-2 shadow-inner">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-gray-100 px-2 rounded">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-gray-100 px-2 rounded">About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-gray-100 px-2 rounded">Services</Link>
          <Link href="/book" onClick={() => setIsOpen(false)} className="block text-center bg-[--color-medical-blue] text-white py-2 rounded-md font-medium">Book Now</Link>
        </div>
      )}
    </nav>
  );
}