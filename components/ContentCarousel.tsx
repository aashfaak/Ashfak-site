"use client";

import { ReactNode, useRef } from "react";

export default function ContentCarousel({ children }: { children: ReactNode }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={carouselRef}
      className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {children}
    </div>
  );
}
