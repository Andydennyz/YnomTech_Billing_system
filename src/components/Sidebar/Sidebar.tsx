import {
  LayoutDashboard,
  Users,
  Wifi,
  CreditCard,
  Receipt,
  Ticket,
  Router,
  Settings,
} from "lucide-react";

import SidebarItem from "./SidebarItems";

const items = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },

  {
    label: "Customers",
    icon: Users,
    href: "/customers",
  },

  {
    label: "Networks",
    icon: Wifi,
    href: "/networks",
  },

  {
    label: "Payments",
    icon: CreditCard,
    href: "/payments",
  },

  {
    label: "Invoices",
    icon: Receipt,
    href: "/invoices",
  },

  {
    label: "Tickets",
    icon: Ticket,
    href: "/tickets",
  },

  {
    label: "Routers",
    icon: Router,
    href: "/routers",
  },

  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
      flex
      h-full
      w-72
      flex-col

      border-r
      border-white/5

      bg-[#090909]
      "
    >
      <div
        className="
        border-b
        border-white/5

        p-8
        "
      >
        <h1
          className="
          text-2xl
          font-bold

          text-cyan-400
          "
        >
          YnomTech
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          ISP Billing Platform
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        {items.map((item) => (
          <SidebarItem
            key={item.label}
            {...item}
          />
        ))}
      </div>

      <div
        className="
        border-t
        border-white/5

        p-6
        "
      >
        <div className="rounded-xl bg-cyan-500/10 p-4">
          <p className="text-sm text-cyan-300">
            ● Radius Online
          </p>

          <p className="mt-2 text-xs text-zinc-500">
            Authentication Service Healthy
          </p>
        </div>
      </div>
    </aside>
  );
}