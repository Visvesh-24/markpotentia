'use client';

import Image from 'next/image';
import { clients } from '@/lib/data';

export default function TrustBar() {
  const loop = [...clients, ...clients];
  return (
    <section className="relative border-y border-line bg-base py-14">
      <div className="shell-wide">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="eyebrow text-fg-dim">Trusted by industry leaders</span>
          <p className="max-w-xl text-sm text-fg-muted">
            Powering operations for multinational manufacturers, energy majors and
            critical-infrastructure operators across Tamil Nadu, Kerala and beyond.
          </p>
        </div>
      </div>

      <div className="mask-fade-x relative mt-11 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-5 pr-5">
          {loop.map((c, i) => (
            <div
              key={`${c.file}-${i}`}
              className="flex h-[76px] w-[176px] shrink-0 items-center justify-center rounded-xl border border-line bg-white px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Image
                src={`/images/clients/${c.file}`}
                alt={c.name}
                width={176}
                height={52}
                className="max-h-[46px] w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
