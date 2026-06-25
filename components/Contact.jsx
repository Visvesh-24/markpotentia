'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { company } from '@/lib/data';

const fields = [
  { name: 'name', label: 'Full name', type: 'text', col: 'sm:col-span-1' },
  { name: 'company', label: 'Company', type: 'text', col: 'sm:col-span-1' },
  { name: 'email', label: 'Work email', type: 'email', col: 'sm:col-span-1' },
  { name: 'phone', label: 'Phone', type: 'tel', col: 'sm:col-span-1' },
];

const capacities = ['15–62.5 KVA', '75–160 KVA', '180–250 KVA', 'Not sure yet'];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [capacity, setCapacity] = useState(capacities[1]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28 md:py-36">
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[160px]" />
      <div className="shell-wide relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: details */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Get a Consultation"
              title="Let's engineer your power solution."
              intro="Share your load profile and site requirements. A Mark Potentia engineer will respond within one business day with a tailored recommendation."
            />

            <div className="mt-10 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {[
                ['Call', company.phone, company.phoneHref, 'M3 5c0 9 7 16 16 16l2-4-5-2-2 2a12 12 0 01-5-5l2-2-2-5z'],
                ['Email', company.emails[0], `mailto:${company.emails[0]}`, 'M3 6h18v12H3zM3 6l9 7 9-7'],
                ['Location', company.address, null, 'M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11zM12 10a2 2 0 100-4 2 2 0 000 4z'],
              ].map(([label, value, href, path]) => {
                const Inner = (
                  <div className="flex items-center gap-4 bg-surface-1 p-5 transition-colors hover:bg-surface-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-accent-soft">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={path} />
                      </svg>
                    </span>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-label text-fg-dim">{label}</div>
                      <div className="mt-0.5 text-sm text-fg">{value}</div>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="block">{Inner}</a>
                ) : (
                  <div key={label}>{Inner}</div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="relative mt-6 h-44 overflow-hidden rounded-2xl border border-line bg-surface-1">
              <div className="absolute inset-0 bg-grid-fade bg-[size:32px_32px] opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-signal/5" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="relative flex h-3 w-3 mx-auto">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                </span>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-label text-fg-muted">
                  {company.address}
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-surface-1 p-7 md:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                  </span>
                  <h3 className="mt-6 h-display text-2xl text-fg">Request received.</h3>
                  <p className="mt-3 max-w-sm text-sm text-fg-muted">
                    Thank you. A Mark Potentia engineer will be in touch within one business
                    day. For urgent requirements, call {company.phone}.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {fields.map((f) => (
                      <div key={f.name} className={f.col}>
                        <label className="font-mono text-[10px] uppercase tracking-label text-fg-dim">
                          {f.label}
                        </label>
                        <input
                          required
                          type={f.type}
                          name={f.name}
                          className="mt-2 w-full rounded-xl border border-line bg-base px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-dim focus:border-accent/60"
                          placeholder={f.label}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <label className="font-mono text-[10px] uppercase tracking-label text-fg-dim">
                      Capacity required
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {capacities.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setCapacity(c)}
                          className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                            capacity === c
                              ? 'border-accent/60 bg-accent/10 text-fg'
                              : 'border-line text-fg-muted hover:border-white/20'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="font-mono text-[10px] uppercase tracking-label text-fg-dim">
                      Project details
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      className="mt-2 w-full resize-none rounded-xl border border-line bg-base px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-dim focus:border-accent/60"
                      placeholder="Tell us about your site, load profile and timeline."
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
                    Submit request
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <p className="mt-4 text-[11px] text-fg-dim">
                    By submitting, you agree to be contacted regarding your enquiry. We never share your details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
