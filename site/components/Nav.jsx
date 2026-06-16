'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './ui/Logo';
import { nav, company } from '@/lib/data';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.6, 0.35, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-line bg-base/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="shell-wide flex h-[72px] items-center justify-between">
          <a href="#top" aria-label="Mark Potentia home">
            <Logo />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative font-sans text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={company.phoneHref}
              className="hidden font-mono text-xs text-fg-muted transition-colors hover:text-fg xl:block"
            >
              {company.phone}
            </a>
            <a href="#contact" className="hidden btn-primary !px-5 !py-2.5 text-sm sm:inline-flex">
              Get a Consultation
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg lg:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-[5px]">
                <span className={`h-px w-5 bg-current transition-all ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
                <span className={`h-px w-5 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
                <span className={`h-px w-5 bg-current transition-all ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex h-full flex-col justify-center gap-2 px-8">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  className="h-display border-b border-line py-4 text-3xl text-fg"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-8 w-full"
              >
                Get a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
