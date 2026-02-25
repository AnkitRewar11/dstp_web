import React from "react";
import Link from "next/link";
import { Play } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative left-1/2 h-[16rem] w-[38rem] -translate-x-1/2 bg-gradient-to-tr from-sky-400/30 via-indigo-400/20 to-cyan-400/25 opacity-60" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-18 pt-24 md:flex-row md:items-stretch md:justify-between md:pb-24 md:pt-28">
        {/* Left content */}
        <div className="max-w-xl space-y-6 md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] text-slate-600 shadow-sm shadow-slate-200">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Trusted SaaS, cloud & automation partner</span>
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build smarter platforms,
            <span className="block text-slate-900">
              not just{" "}
              <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                software.
              </span>
            </span>
          </h1>

          <p className="max-w-md text-balance text-sm text-slate-500 sm:text-base">
            We help teams launch SaaS, cloud, and automation products that tie
            together data, devices, and decision‑making.
          </p>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/40 transition hover:bg-slate-800 sm:w-auto"
            >
              Talk to our team
            </Link>
            <Link
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm shadow-slate-100 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              <Play className="h-3.5 w-3.5 fill-slate-800 text-slate-800" />
              See how it works
            </Link>
          </div>
        </div>

        {/* Right visual - modern layout */}
        <div className="w-full max-w-md md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-400/25 via-indigo-400/15 to-emerald-400/20 opacity-80 blur-xl" />

            <div className="relative space-y-4">
              {/* Main analytics canvas */}
              <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white/95 p-4 shadow-xl shadow-slate-200">
                <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-[10px] font-semibold text-white">
                      DW
                    </span>
                    <span className="font-medium text-slate-800">
                      Control surface
                    </span>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] text-slate-500">
                    Live · 24/7
                  </span>
                </div>

                <div className="mb-4 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Cloud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>Data &amp; AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>IoT &amp; robots</span>
                  </div>
                </div>

                <div className="flex items-end gap-3">
                  <div className="flex-1 space-y-2">
                    <div className="h-20 rounded-xl bg-gradient-to-t from-sky-500 to-sky-300" />
                    <p className="text-[10px] text-slate-500">Cloud health</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-28 rounded-xl bg-gradient-to-t from-indigo-500 to-indigo-300" />
                    <p className="text-[10px] text-slate-500">AI insights</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-16 rounded-xl bg-gradient-to-t from-emerald-500 to-emerald-300" />
                    <p className="text-[10px] text-slate-500">Automation</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-24 rounded-xl bg-gradient-to-t from-amber-500 to-amber-300" />
                    <p className="text-[10px] text-slate-500">IoT signals</p>
                  </div>
                </div>
              </div>

              {/* Floating insight pill */}
              <div className="flex gap-3">
                <div className="flex-1 rounded-2xl bg-white/95 p-3 text-[11px] text-slate-600 shadow-md shadow-slate-200">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-700">
                      AI
                    </span>
                    <span className="font-medium text-slate-900">
                      Next best action
                    </span>
                  </div>
                  <p>Scale EU cluster + schedule maintenance window.</p>
                </div>
                <div className="hidden h-20 w-20 items-center justify-center rounded-2xl bg-slate-900/90 text-[10px] font-medium text-slate-50 shadow-md shadow-slate-300/40 sm:flex">
                  3 regions
                  <br />
                  120+ nodes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;