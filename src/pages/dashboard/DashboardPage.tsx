import Card from "@/components/ui/Cards";

/**
 * -----------------------------------------------------------------------------
 * Dashboard Page
 * -----------------------------------------------------------------------------
 *
 * Temporary dashboard page.
 *
 * Later it will display:
 * - Statistics
 * - Revenue
 * - Router Health
 * - Radius Status
 * - Notifications
 * -----------------------------------------------------------------------------
 */

export default function DashboardPage() {
  return (
    <Card>
      <h1 className="mb-4 text-4xl font-bold text-white">
        Dashboard
      </h1>

      <p className="text-[var(--text-muted)]">
        Welcome to the YnomTech ISP Billing System.
      </p>
    </Card>
  );
}