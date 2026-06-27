'use client';

import Counter from './ui/Counter';
import Reveal from './ui/Reveal';
import { heroStats } from '@/lib/data';

export default function HeroStats() {
  return (
    <section className="relative border-b border-line bg-ink/70">
      <div className="shell-wide">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {heroStats.map((s, i) => (
            <Reveal
              key={s.label}
              variant="fade"
              delay={i * 0.08}
              className={`flex flex-col px-2 py-9 sm:px-8 md:py-11 ${
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
              <div className="mt-2 text-sm text-fg-dim">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
