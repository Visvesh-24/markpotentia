'use client';

import SectionHeading from './ui/SectionHeading';
import { Stagger, StaggerItem } from './ui/Reveal';
import { industries } from '@/lib/data';

const icons = {
  Manufacturing: 'M3 21V9l6-4 6 4v12M9 21v-6h0M15 21V9l6-3v15',
  Healthcare: 'M12 5v14M5 12h14',
  'Data Centers': 'M4 6h16v4H4zM4 14h16v4H4zM7 8h.01M7 16h.01',
  Construction: 'M3 21h18M5 21V11l7-5 7 5v10M9 21v-5h6v5',
  Hospitality: 'M3 21V8l9-5 9 5v13M9 21v-6h6v6',
  Education: 'M12 4L2 9l10 5 10-5-10-5zM6 11v5c0 1 3 3 6 3s6-2 6-3v-5',
  Telecom: 'M12 20v-6M8 14a4 4 0 018 0M5 11a8 8 0 0114 0',
  Infrastructure: 'M4 20h16M6 20V8l6-4 6 4v12M9 12h6',
  Commercial: 'M4 21V5l8-2 8 2v16M9 9h.01M9 13h.01M15 9h.01M15 13h.01',
};

export default function Industries() {
  return (
    <section id="industries" className="relative bg-base py-28 md:py-36">
      <div className="shell-wide">
        <SectionHeading
          eyebrow="Industries Served"
          title="Power that nine sectors build on."
          intro="The same engineering discipline, adapted to the duty profile, noise constraints and redundancy needs of each environment we serve."
        />

        <Stagger className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {industries.map((ind) => (
            <StaggerItem
              key={ind.name}
              className="group relative bg-base p-7 transition-colors hover:bg-surface-1 md:p-9"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-accent-soft transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[ind.name]} />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-lg text-fg">{ind.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-fg-dim">{ind.detail}</p>
              <span className="pointer-events-none absolute right-6 top-7 font-mono text-[10px] text-fg-dim opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
