"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-0">
        <div className="flex items-center gap-2">
          <Link
            href="#home"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-xs font-bold text-white shadow-sm shadow-sky-500/40">
              DW
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                DSTP
              </span>
              <span className="text-xs text-slate-900">Web Platform</span>
            </span>
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
          <div className="flex items-center gap-6 text-xs font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition hover:text-slate-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="text-xs font-medium text-slate-500 transition hover:text-slate-900"
            >
              Contact sales
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-slate-900/25 transition hover:bg-slate-800"
            >
              Get in touch
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <button
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 p-2 text-slate-700 shadow-sm shadow-slate-200/60 transition hover:border-slate-300 hover:text-slate-900 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white/95 px-4 pb-4 pt-2 shadow-lg shadow-slate-200/70 md:hidden">
          <div className="space-y-1 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button
            type="button"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-slate-900/30 transition hover:bg-slate-800"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;