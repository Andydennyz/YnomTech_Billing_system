/**
 * -----------------------------------------------------------------------------
 * Button Types
 * -----------------------------------------------------------------------------
 *
 * Defines the props accepted by the Button component.
 *
 * Keeping types in a separate file makes large components
 * much easier to maintain.
 * -----------------------------------------------------------------------------
 */

import type { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;

  onClick?: () => void;
}