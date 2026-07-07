import type { ButtonProps } from "./Button.types";

/**
 * -----------------------------------------------------------------------------
 * YnomTech Button
 * -----------------------------------------------------------------------------
 *
 * Reusable button used throughout the application.
 *
 * Every button in the system should use this component.
 * -----------------------------------------------------------------------------
 */

export default function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        rounded-xl
        border
        border-cyan-500/20
        bg-cyan-500/10

        px-6
        py-3

        font-semibold
        text-cyan-300

        transition-all
        duration-300

        hover:border-cyan-400
        hover:bg-cyan-400/20
        hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]

        active:scale-95
      "
    >
      {children}
    </button>
  );
}