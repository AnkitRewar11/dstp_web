import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm space-y-3">
            <Link
              href="#home"
              className="inline-flex items-baseline gap-1 text-lg font-semibold text-gray-900"
            >
              <span className="text-blue-600">DSTP</span>
              <span>WEB</span>
            </Link>
            <p className="text-xs text-gray-500 sm:text-sm">
              SaaS development, cloud platforms, cybersecurity, data analytics,
              AI/ML, IoT, robotics, and industrial automation for modern
              businesses.
            </p>
          </div>

          <div className="grid flex-1 gap-6 text-xs sm:grid-cols-3 sm:text-sm">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
                Company
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-600 transition hover:text-gray-900"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-gray-600 transition hover:text-gray-900"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-600 transition hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
                Capabilities
              </h3>
              <ul className="mt-3 space-y-2">
                <li>SaaS &amp; Cloud</li>
                <li>Cybersecurity</li>
                <li>Data &amp; BI</li>
                <li>AI/ML &amp; NLP</li>
                <li>IoT &amp; Robotics</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
                Contact
              </h3>
              <ul className="mt-3 space-y-2">
                <li className="font-mono text-xs text-gray-700">
                  contact@dstpweb.io
                </li>
                <li className="text-gray-500">
                  Remote‑first, working with teams worldwide.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-gray-100 pt-4 text-[11px] text-gray-400 sm:flex-row">
          <p>© {new Date().getFullYear()} DSTP Web. All rights reserved.</p>
          <p>Built as a modern SaaS &amp; Industry 4.0 launchpad.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;