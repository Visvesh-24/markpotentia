'use client';

import Counter from './ui/Counter';
import Reveal from './ui/Reveal';
import { heroStats } from '@/lib/data';

export default function HeroStats() {
  return (
    <section className="relative bg-base py-12 md:py-16">
      <div className="shell-wide">
        <Reveal variant="up">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center bg-base px-6 py-9 text-center md:py-11"
              >
                <div className="h-display text-3xl text-fg md:text-4xl">
                  {s.text ? (
                    <>
                      {s.text}
                      {s.suffix}
                    </>
                  ) : (
                    <Counter to={s.value} suffix={s.suffix} />
                  )}
                </div>
                <div className="mt-2 text-xs text-fg-dim md:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
