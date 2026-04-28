"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#resultados", label: "Resultados" },
  { href: "#servicos", label: "Serviços" },
  { href: "#agendamento", label: "Agendar" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-3 border-b border-border"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <Image
              src="/images/apex-logo-removebg-preview.png"
              alt="Apex Detail Studio"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="font-display text-lg font-bold text-text-primary hidden sm:block">
              Apex<span className="text-gold">Studio</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-text-secondary hover:text-gold transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#agendamento"
            onClick={(e) => handleNavClick(e, "#agendamento")}
            className="hidden md:inline-flex btn-primary text-sm py-2"
          >
            Agendar
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-primary"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-text-secondary hover:text-gold transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#agendamento"
                onClick={(e) => handleNavClick(e, "#agendamento")}
                className="btn-primary text-center"
              >
                Agendar
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}