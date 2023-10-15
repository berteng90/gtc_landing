import { NavBar } from "@/components/NavBar";
import { Blog } from "@/components/Blog";
export default function Page({ params }) {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <Blog />
    </main>
  );
}
