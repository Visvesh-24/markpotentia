import Image from 'next/image';

// Official Mark Potentia logo (full-colour, transparent background),
// placed directly on the dark navbar / footer.
const RATIO = 900 / 277; // intrinsic aspect of /images/brand/logo.png

export default function Logo({ className = '', height = 34, priority = false }) {
  const width = Math.round(height * RATIO);
  return (
    <Image
      src="/images/brand/logo.png"
      alt="Mark Potentia"
      width={width}
      height={height}
      priority={priority}
      className={`w-auto select-none ${className}`}
      style={{ height: `${height}px`, width: 'auto' }}
    />
  );
}
