import { NavBar } from "@/components/NavBar";
import { News } from "@/components/News";
export default function Page({ params }) {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <News />
    </main>
  );
}
