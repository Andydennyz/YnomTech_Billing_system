import Sidebar from "@/components/Sidebar/Sidebar";
import type { DashboardLayoutProps } from "./DashboardLayout.types";

/**
 * -----------------------------------------------------------------------------
 * Dashboard Layout
 * -----------------------------------------------------------------------------
 *
 * This is the main layout used by all authenticated pages.
 *
 * Structure:
 *
 * ┌──────────────────────────────────────────────┐
 * │ Sidebar │ Header                            │
 * │         ├───────────────────────────────────┤
 * │         │                                   │
 * │         │          Main Content             │
 * │         │                                   │
 * └──────────────────────────────────────────────┘
 *
 * Later we'll replace the Header placeholder
 * with our own reusable Header component.
 * -----------------------------------------------------------------------------
 */

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-[var(--background)]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-16 items-center border-b border-[var(--border)] bg-[var(--surface)] px-6">
          <h2 className="text-lg font-semibold text-white">
            Dashboard
          </h2>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}