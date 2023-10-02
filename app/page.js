import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Branches } from "@/components/Branches";
import { Statistics } from "@/components/Statistics";
import { Services } from "@/components/Services";
import { News } from "@/components/News";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <Branches />
        <Statistics />
        <Services />
        <News />
      </main>
      <Footer />
    </div>
  );
}
