import Image from 'next/image';

// Official Mark Potentia logo (metallic, full-colour) presented on a clean
// white "chip" so it keeps full contrast against the dark navbar / footer
// without altering the brand artwork.
const RATIO = 900 / 278; // intrinsic aspect of /images/brand/logo.png

export default function Logo({ className = '', height = 32, priority = false }) {
  const width = Math.round(height * RATIO);
  return (
    <span
      className={`inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.5)] ring-1 ring-black/5 ${className}`}
    >
      <Image
        src="/images/brand/logo.png"
        alt="Mark Potentia"
        width={width}
        height={height}
        priority={priority}
        className="block w-auto"
        style={{ height: `${height}px`, width: 'auto' }}
      />
    </span>
  );
}
