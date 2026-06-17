import Image from 'next/image';

// Official Mark Potentia wordmark rendered as a flat white silhouette on a
// transparent background — sits directly on the dark navbar / footer for a
// clean, premium finish (no enclosing chip).
const RATIO = 900 / 281; // intrinsic aspect of /images/brand/logo-white.png

export default function Logo({ className = '', height = 32, priority = false }) {
  const width = Math.round(height * RATIO);
  return (
    <Image
      src="/images/brand/logo-white.png"
      alt="Mark Potentia"
      width={width}
      height={height}
      priority={priority}
      className={`w-auto select-none ${className}`}
      style={{ height: `${height}px`, width: 'auto' }}
    />
  );
}
