"use client";
import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-100 bg-white/95 text-slate-900">
      {/* Subscribe strip */}
      <div className="bg-[#021b3a] px-4 py-10 text-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 md:max-w-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300">
              Subscribe to our blog
            </p>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Stay ahead with the latest product and engineering insights.
            </h2>
          </div>

          <form
            className="w-full max-w-md space-y-3 md:flex md:items-center md:space-y-0 md:space-x-3"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Enter email"
              className="h-10 w-full flex-1 rounded-full border border-white/30 bg-white/10 px-4 text-sm text-white placeholder:text-slate-300 outline-none ring-0 transition focus:border-sky-400 focus:bg-white/15"
            />
            <button
              type="submit"
              className="h-10 rounded-full bg-sky-500 px-6 text-sm font-semibold text-white shadow-sm shadow-sky-500/40 transition hover:bg-sky-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-10 text-sm text-slate-600 md:grid-cols-4">
          {/* Brand + social */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-sm shadow-slate-900/40">
                DW
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  DSTP
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  Web Platform
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 sm:text-sm">
              Modern digital solutions across SaaS, cloud, security, and
              automation for high-performing teams.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <button
                type="button"
                aria-label="Visit our Twitter"
                className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
              >
                <Twitter className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Visit our LinkedIn"
                className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
              >
                <Linkedin className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Visit our Facebook"
                className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
              >
                <Facebook className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Visit our Instagram"
                className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
              >
                <Instagram className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Product
            </h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="#features"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Company
            </h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  About us
                </a>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Culture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Support
            </h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  iOS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Android
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Web
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Mac
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  Windows
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex sm:items-center sm:justify-between">
          <p>© {currentYear} DSTP Web, Inc. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap items-center gap-4 sm:mt-0">
            <a href="#" className="transition hover:text-slate-600">
              Privacy Policy
            </a>
            <span className="opacity-40">•</span>
            <a href="#" className="transition hover:text-slate-600">
              Terms
            </a>
            <span className="opacity-40">•</span>
            <a href="#" className="transition hover:text-slate-600">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;