'use client';

import Counter from './ui/Counter';
import Reveal from './ui/Reveal';
import { heroStats } from '@/lib/data';

export default function HeroStats() {
  return (
    <section className="relative bg-base py-12 md:py-16">
      <div className="shell">
        <Reveal variant="up">
          <div className="mx-auto grid max-w-3xl grid-cols-1 overflow-hidden rounded-2xl border border-line bg-ink/40 sm:grid-cols-3">
            {heroStats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center px-6 py-10 text-center md:py-12 ${
                  i > 0 ? 'border-t border-line sm:border-l sm:border-t-0' : ''
                }`}
              >
                <div className="h-display text-4xl text-fg md:text-5xl">
                  {s.text ? (
                    <>
                      {s.text}
                      {s.suffix}
                    </>
                  ) : (
                    <Counter to={s.value} suffix={s.suffix} />
                  )}
                </div>
                <div className="mt-2.5 text-sm text-fg-dim">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
