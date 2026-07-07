import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

/**
 * -----------------------------------------------------------------------------
 * Glass Card
 * -----------------------------------------------------------------------------
 *
 * Reusable card used throughout the application.
 * -----------------------------------------------------------------------------
 */

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
        rounded-2xl

        border
        border-white/5

        bg-[#0b0b0b]

        p-6

        shadow-lg

        transition-all
        duration-300

        hover:border-cyan-500/30
        hover:shadow-[0_0_25px_rgba(0,245,255,0.15)]
      "
    >
      {children}
    </div>
  );
}