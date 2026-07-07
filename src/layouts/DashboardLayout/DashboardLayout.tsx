import type { DashboardLayoutProps } from "./DashboardLayout.types";

/**
 * -----------------------------------------------------------------------------
 * Dashboard Layout
 * -----------------------------------------------------------------------------
 *
 * This is the application's primary layout.
 *
 * Every authenticated page
 * (Dashboard, Customers, Payments, Reports...)
 * will render inside this layout.
 *
 * Current Structure:
 *
 * Sidebar
 * Header
 * Content
 *
 * Later we'll replace the placeholders
 * with reusable components.
 * -----------------------------------------------------------------------------
 */

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-[var(--background)]">

      {/* Sidebar */}
      <aside className="w-72 border-r border-[var(--border)] bg-[var(--surface)]">
        Sidebar
      </aside>

      <div className="flex flex-1 flex-col">

        {/* Header */}
        <header className="flex h-16 items-center border-b border-[var(--border)] bg-[var(--surface)] px-6">
          Header
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>

      </div>

    </div>
  );
}