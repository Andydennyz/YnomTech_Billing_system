import Button from "@/components/ui/Button";
import Card from "@/components/ui/Cards";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505]">
      <Card>
        <h1 className="mb-6 text-4xl font-bold text-white">
          🚀 YnomTech ISP Billing
        </h1>

        <p className="mb-8 text-zinc-400">
          Enterprise ISP Billing & Network Management System
        </p>

        <Button>
          Launch Dashboard
        </Button>
      </Card>
    </div>
  );
}