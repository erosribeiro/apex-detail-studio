"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

interface ImageComparisonSliderProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

export function ImageComparisonSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  className = "",
}: ImageComparisonSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback(
    (clientX: number) => {
      const container = document.getElementById("comparison-container");
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleContainerMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleContainerTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove]
  );

  return (
    <div
      id="comparison-container"
      className={`relative w-full aspect-[4/3] overflow-hidden rounded-2xl select-none ${className}`}
      onMouseMove={handleContainerMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleContainerTouchMove}
      onTouchEnd={handleMouseUp}
    >
      <div className="absolute inset-0">
        <Image
          src={after}
          alt={afterAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-surface"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-sm font-medium text-white">
        Before
      </div>
      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-gold/80 backdrop-blur-sm text-sm font-medium text-white">
        After
      </div>
    </div>
  );
}