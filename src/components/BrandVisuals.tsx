import React from 'react';

export function KillaLambEmblem({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Emblema Chef Cordero Killa"
    >
      <circle cx="60" cy="60" r="56" stroke="#D4AF37" strokeWidth="2" fill="#1C0C0E" />
      <circle cx="60" cy="60" r="50" stroke="#D4AF37" strokeWidth="0.75" strokeDasharray="3 3" />
      {/* Chef Hat (Toque) */}
      <path
        d="M42 42C36 42 33 36 35 31C37 26 43 26 46 28C49 22 56 20 60 20C64 20 71 22 74 28C77 26 83 26 85 31C87 36 84 42 78 42L75 50H45L42 42Z"
        fill="#FBF7F0"
        stroke="#D4AF37"
        strokeWidth="2"
      />
      <path d="M45 46H75" stroke="#D4AF37" strokeWidth="1.5" />
      {/* Lamb Wool Crown */}
      <path
        d="M43 53C43 50 47 48 50 50C53 47 57 47 60 49C63 47 67 47 70 50C73 48 77 50 77 53C77 56 74 58 72 58H48C46 58 43 56 43 53Z"
        fill="#EFE6D5"
        stroke="#D4AF37"
        strokeWidth="1.5"
      />
      {/* Lamb Ears */}
      <path
        d="M43 57C35 56 30 60 29 64C32 67 38 66 44 63"
        fill="#EFE6D5"
        stroke="#D4AF37"
        strokeWidth="1.8"
      />
      <path
        d="M77 57C85 56 90 60 91 64C88 67 82 66 76 63"
        fill="#EFE6D5"
        stroke="#D4AF37"
        strokeWidth="1.8"
      />
      {/* Lamb Head */}
      <path
        d="M45 57H75L72 78C71 84 65 89 60 89C55 89 49 84 48 78L45 57Z"
        fill="#FBF7F0"
        stroke="#D4AF37"
        strokeWidth="2"
      />
      {/* Eyes & Snout */}
      <circle cx="53" cy="67" r="2" fill="#1C0C0E" />
      <circle cx="67" cy="67" r="2" fill="#1C0C0E" />
      <path d="M56 76L60 79L64 76" stroke="#7A1C24" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 79V83" stroke="#7A1C24" strokeWidth="1.8" strokeLinecap="round" />
      {/* Chef Jacket Collar */}
      <path
        d="M42 98L50 87L60 94L70 87L78 98"
        stroke="#D4AF37"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Los Perros de Cordero Killa'
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}) {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#3D1217] via-[#1C0E0C] to-[#0D0807] p-6 text-center ${className}`}
      >
        <KillaLambEmblem className="w-16 h-16 mb-3" />
        <p className="font-display text-sm font-bold text-[#D4AF37] tracking-wide">{fallbackTitle}</p>
        <p className="text-xs text-[#C8BBAE] mt-1">100% Cordero Gourmet · Barranquilla</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
