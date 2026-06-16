'use client';

import Image from 'next/image';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { leadership } from '@/lib/data';

export default function Leadership() {
  return (
    <section id="leadership" className="relative bg-base py-28 md:py-36">
      <div className="shell-wide">
        <SectionHeading
          eyebrow="Leadership"
          title="Owner-led, for the long term."
          intro="Mark Potentia is directed by founders with six decades of combined experience — present, accountable and invested in every client relationship."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {leadership.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1} variant="up">
              <article className="group flex h-full gap-6 rounded-2xl border border-line bg-surface-1 p-6 transition-colors hover:border-white/15 md:p-8">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-line bg-ink md:h-36 md:w-36">
                  <Image
                    src={`/images/${l.image}`}
                    alt={l.name}
                    fill
                    sizes="160px"
                    className="portrait-treat object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                </div>
                <div className="flex flex-col">
                  <div className="font-mono text-[10px] uppercase tracking-label text-accent-soft">
                    {l.role}
                  </div>
                  <h3 className="mt-1.5 h-display text-xl text-fg md:text-2xl">{l.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">{l.bio}</p>
                  <div className="mt-auto pt-4">
                    <span className="font-mono text-[11px] text-fg-dim">{l.focus}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
