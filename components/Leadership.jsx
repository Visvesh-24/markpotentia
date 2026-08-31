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
          title="The team at the helm."
          intro="Mark Potentia is led by a hands-on management team — present, accountable and personally invested in every client relationship."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {leadership.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1} variant="up">
              <article className="group flex h-full flex-col items-center gap-6 rounded-2xl border border-line bg-surface-1 p-6 text-center transition-colors hover:border-white/15 sm:flex-row sm:items-start sm:text-left md:p-8">
                <div className="relative aspect-square w-40 shrink-0 overflow-hidden rounded-2xl border border-line bg-ink sm:w-36 md:w-40">
                  <Image
                    src={`/images/${l.image}`}
                    alt={l.name}
                    fill
                    sizes="(min-width: 768px) 160px, 160px"
                    className="portrait-treat object-cover object-[center_25%] transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
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
