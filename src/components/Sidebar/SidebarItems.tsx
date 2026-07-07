import type { SidebarItemType } from "./Sidebar.types";

export default function SidebarItem({
  icon: Icon,
  label,
}: SidebarItemType) {
  return (
    <button
      className="
      flex
      w-full
      items-center
      gap-3

      rounded-xl

      px-4
      py-3

      text-zinc-400

      transition-all
      duration-300

      hover:bg-cyan-500/10
      hover:text-cyan-300
      hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]
      "
    >
      <Icon size={20} />

      <span>{label}</span>
    </button>
  );
}