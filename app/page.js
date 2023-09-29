import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Branches } from "@/components/Branches";
import { Statistics } from "@/components/Statistics";
export default function Home() {
  return (
    <main className="w-full h-full overflow-hidden">
      <NavBar />
      <Hero />
      <Branches />
      <Statistics />
      <Footer />
    </main>
  );
}
