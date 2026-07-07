import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "@/pages/dashboard/DashboardPage";

/**
 * -----------------------------------------------------------------------------
 * Root Application
 * -----------------------------------------------------------------------------
 *
 * Temporary application entry.
 *
 * React Router will replace this later.
 * -----------------------------------------------------------------------------
 */

export default function App() {
  return (
    <DashboardLayout>
      <DashboardPage />
    </DashboardLayout>
  );
}