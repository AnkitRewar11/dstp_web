import React from "react";

const cases = [
  {
    category: "Cloud · SaaS · Security",
    title: "Multi‑tenant SaaS with zero‑trust access",
    result: "Onboarding cut from weeks to days with full auditability.",
    highlights: ["Role‑based access", "Audit trails", "Encrypted data"],
  },
  {
    category: "AI/ML · NLP · Big Data",
    title: "Real‑time insight on billions of events",
    result: "Streams, models, and NLP working together in minutes.",
    highlights: ["Streaming pipelines", "Feature store", "NLP signals"],
  },
  {
    category: "IoT · Robotics · Automation",
    title: "Connected factory with smart robotics",
    result: "Higher uptime and safer, automated shop floors.",
    highlights: ["IoT gateways", "Robot orchestration", "Digital twins"],
  },
];

const caseGradients = [
  "from-sky-500 via-sky-400 to-indigo-400",
  "from-violet-500 via-fuchsia-500 to-sky-400",
  "from-emerald-500 via-teal-400 to-amber-400",
];

function Blog() {
  return (
    <section className="bg-slate-950 py-20 text-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Solutions in action
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to production‑ready systems.
            </p>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              We partner with teams to design, ship, and scale SaaS products,
              intelligent data platforms, and connected devices that run in the
              real world—not just in slide decks.
            </p>
          </div>
          <p className="max-w-sm text-xs text-slate-400 sm:text-sm">
            Each engagement blends cloud architecture, cybersecurity, data
            engineering, AI/ML, IoT, and automation to match your industry and
            regulatory landscape.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className="group relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-black/40 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(15,23,42,0.8)]"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                  caseGradients[index % caseGradients.length]
                } animate-pulse`}
              />
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-300">
                {item.category}
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-50 sm:text-lg">
                {item.title}
              </h3>
              <div className="mt-3 mb-3 flex h-16 w-full items-center justify-between rounded-xl bg-slate-900 px-3 text-[10px] text-slate-400 ring-1 ring-slate-700">
                <div className="flex flex-col gap-1">
                  <span className="h-1.5 w-16 rounded-full bg-slate-700" />
                  <span className="h-1.5 w-10 rounded-full bg-slate-700" />
                </div>
                <div className="flex items-end gap-1">
                  <span className="h-6 w-2 rounded-full bg-gradient-to-t from-slate-800 to-sky-400" />
                  <span className="h-9 w-2 rounded-full bg-gradient-to-t from-slate-800 to-indigo-400" />
                  <span className="h-4 w-2 rounded-full bg-gradient-to-t from-slate-800 to-emerald-400" />
                  <span className="h-7 w-2 rounded-full bg-gradient-to-t from-slate-800 to-amber-400" />
                </div>
              </div>
              <p className="text-xs text-slate-300 sm:text-sm">
                {item.result}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                {item.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-slate-800/70 px-2.5 py-1 text-slate-200 ring-1 ring-slate-700 transition-colors group-hover:bg-slate-50 group-hover:text-slate-900 group-hover:ring-slate-50"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;