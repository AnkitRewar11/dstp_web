import React from "react";

const services = [
  {
    title: "SaaS Product Development",
    description: "Design, build, and launch secure multi‑tenant SaaS products.",
    tags: ["Product Strategy", "Architecture", "Multi‑tenant"],
  },
  {
    title: "Cloud Computing & DevOps",
    description: "Cloud‑native infra, CI/CD pipelines, and always‑on observability.",
    tags: ["Kubernetes", "Terraform", "CI/CD"],
  },
  {
    title: "Cybersecurity by Design",
    description: "Identity, access, and data protection built into every layer.",
    tags: ["Zero Trust", "IAM", "Compliance"],
  },
  {
    title: "Data Analytics, BI & Big Data",
    description: "Modern data stacks, real‑time pipelines, and clear dashboards.",
    tags: ["Data Lakes", "ETL", "Dashboards"],
  },
  {
    title: "AI/ML & NLP Platforms",
    description: "Operational ML and NLP models wired into your workflows.",
    tags: ["MLOps", "NLP", "Recommendation"],
  },
  {
    title: "IoT, Robotics & Automation",
    description: "Smart devices and industrial automation that talk to the cloud.",
    tags: ["IoT Edge", "Industrial", "Robotics"],
  },
];

const serviceGradients = [
  "from-sky-500 via-sky-400 to-cyan-400",
  "from-indigo-500 via-sky-500 to-sky-300",
  "from-emerald-500 via-teal-400 to-sky-300",
  "from-amber-500 via-orange-400 to-rose-400",
  "from-fuchsia-500 via-purple-500 to-indigo-400",
  "from-cyan-500 via-emerald-400 to-lime-400",
];

function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            What we build
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cloud, data, and intelligent systems for modern enterprises.
          </p>
          <p className="mt-4 text-sm text-gray-600 sm:text-base">
            We combine SaaS engineering, cloud computing, cybersecurity, data
            analytics, AI/ML, IoT, robotics, and industrial automation to
            deliver platforms that are ready for real‑world scale and
            complexity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm shadow-slate-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                  serviceGradients[index % serviceGradients.length]
                } animate-pulse`}
              />

              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${
                    serviceGradients[index % serviceGradients.length]
                  } text-[11px] font-semibold text-white shadow-sm shadow-slate-300/40`}
                >
                  {index + 1}
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>

              <div className="mb-3 flex h-16 w-full items-center justify-between rounded-xl bg-slate-50 px-3 text-[10px] text-slate-500 ring-1 ring-slate-100">
                <div className="flex flex-col gap-1">
                  <span className="h-1.5 w-10 rounded-full bg-slate-200" />
                  <span className="h-1.5 w-16 rounded-full bg-slate-200" />
                </div>
                <div className="flex items-end gap-1">
                  <span className="h-6 w-2 rounded-full bg-gradient-to-t from-slate-300 to-sky-300" />
                  <span className="h-9 w-2 rounded-full bg-gradient-to-t from-slate-300 to-indigo-400" />
                  <span className="h-4 w-2 rounded-full bg-gradient-to-t from-slate-300 to-emerald-400" />
                  <span className="h-7 w-2 rounded-full bg-gradient-to-t from-slate-300 to-amber-400" />
                </div>
              </div>

              <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                {service.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-500 ring-1 ring-slate-200 transition-colors group-hover:bg-slate-900 group-hover:text-slate-50 group-hover:ring-slate-900/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;