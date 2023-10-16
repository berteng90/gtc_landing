import { NavBar } from "@/components/NavBar";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
export default function Page({ params }) {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <Blog />
      <Footer />
    </main>
  );
}
