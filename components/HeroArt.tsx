// Placeholder hero graphic — swap this whole component for your own photo
// (e.g. an <Image src="/me.jpg" .../> from Cloudinary) whenever you're ready.
export default function HeroArt() {
  return (
    <svg
      viewBox="0 0 420 480"
      className="h-full w-full"
      role="img"
      aria-label="Abstract illustration representing building, thinking, and exploring"
    >
      {/* Build — a wireframe cube */}
      <g stroke="#1B1A17" strokeWidth="1.2" fill="none" opacity="0.85">
        <polygon points="70,120 170,90 270,120 170,150" />
        <polygon points="70,120 70,220 170,250 170,150" />
        <polygon points="270,120 270,220 170,250 170,150" />
      </g>

      {/* Think — concentric circles */}
      <g stroke="#1F6F63" fill="none">
        <circle cx="300" cy="290" r="46" strokeWidth="1.2" opacity="0.9" />
        <circle cx="300" cy="290" r="30" strokeWidth="1.2" opacity="0.6" />
        <circle cx="300" cy="290" r="4.5" fill="#1F6F63" stroke="none" />
      </g>

      {/* Explore — a compass mark */}
      <g stroke="#B4562F" fill="none" strokeWidth="1.2">
        <circle cx="120" cy="360" r="38" opacity="0.85" />
        <path d="M120 332 L132 358 L120 388 L108 358 Z" fill="#B4562F" opacity="0.9" stroke="none" />
      </g>

      {/* connecting line, evokes a single continuous path/journey */}
      <path
        d="M170,150 C220,190 260,230 300,244 C220,270 160,300 120,322"
        stroke="#1B1A17"
        strokeWidth="1"
        strokeDasharray="2 4"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}
