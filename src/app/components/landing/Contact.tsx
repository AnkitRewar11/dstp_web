import React from "react";
import { Phone, Mail, Globe2 } from "lucide-react";

function Contact() {
  return (
    <section className="bg-emerald-50/80 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Have a project in mind? Send a message or reach out through the
            contact links.
          </p>
        </div>

        <div className="rounded-3xl bg-white/95 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left: form */}
            <div className="space-y-5">
              <h3 className="text-base font-semibold text-slate-900">
                Send a message
              </h3>

              <form className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700">
                    Full name <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-emerald-500/40 transition focus:border-emerald-500 focus:ring"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700">
                    Email <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-emerald-500/40 transition focus:border-emerald-500 focus:ring"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="SaaS platform, cloud migration, automation…"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-emerald-500/40 transition focus:border-emerald-500 focus:ring"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share a brief overview of your project, timelines, and goals."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-emerald-500/40 transition focus:border-emerald-500 focus:ring"
                  />
                </div>

                <button
                  type="button"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-700 sm:w-auto"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Right: contact links */}
            <div className="space-y-5">
              <h3 className="text-base font-semibold text-slate-900">
                Contact links
              </h3>

              <div className="space-y-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-900">
                        Call
                      </p>
                      <p className="text-xs text-slate-600">+91 98765 43210</p>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-slate-200" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-900">
                        Email
                      </p>
                      <p className="text-xs text-slate-600">
                        contact@dstpweb.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-slate-200" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Globe2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-900">
                        Socials
                      </p>
                      <p className="text-xs text-slate-600">
                        LinkedIn, GitHub, X and more
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/60 p-4 text-[11px] text-emerald-800 sm:text-xs">
                We usually respond within one business day. Share as much
                context as you can so we can come back with a concrete next
                step.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;