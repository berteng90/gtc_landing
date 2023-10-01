import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Branches } from "@/components/Branches";
import { Statistics } from "@/components/Statistics";
import { Services } from "@/components/Services";
export default function Home() {
  return (
    <main className="w-full h-full overflow-hidden">
      <NavBar />
      <Hero />
      <Branches />
      <Statistics />
      <Services />
      <Footer />
    </main>
  );
}
