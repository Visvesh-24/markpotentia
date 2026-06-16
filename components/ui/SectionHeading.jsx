import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : 'items-start';
  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignCls} ${className}`}>
      {eyebrow && (
        <Reveal variant="fade">
          <span className="flex items-center gap-3 eyebrow">
            <span className="h-px w-8 bg-accent/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal>
        <h2
          className={`h-display text-balance text-[clamp(2rem,4.6vw,3.5rem)] ${
            light ? 'text-ink' : 'text-fg'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.08}>
          <p
            className={`text-balance text-base leading-relaxed md:text-lg ${
              light ? 'text-ink/60' : 'text-fg-muted'
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
