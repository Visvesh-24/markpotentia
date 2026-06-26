'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

const markers = [
  ['1,111+', 'Premium enterprise clients'],
  ['31 yrs', 'Unbroken operating record'],
];

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-base py-28 md:py-36">
      <div className="absolute inset-0">
        <Image
          src="/images/texture/powerlines.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/85 to-base" />
      </div>

      <div className="shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade">
            <span className="eyebrow">Market credibility</span>
          </Reveal>
          <Reveal>
            <p className="mt-6 h-display text-balance text-[clamp(1.6rem,3.6vw,2.8rem)] leading-tight text-fg">
              &ldquo;When power cannot fail, organisations choose engineering they can hold
              accountable. That standard is what we have manufactured for{' '}
              <span className="bg-accent-grad bg-clip-text text-transparent">31 years</span>.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-mono text-xs uppercase tracking-label text-fg-dim">
              Mark Potentia Pvt. Ltd. — Power Infrastructure
            </p>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 grid max-w-xl gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2"
        >
          {markers.map(([k, v]) => (
            <div key={v} className="bg-base/80 px-6 py-7 text-center backdrop-blur-sm">
              <div className="h-display text-2xl text-fg md:text-3xl">{k}</div>
              <div className="mt-2 text-xs text-fg-dim">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
