import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Branches } from "@/components/Branches";
import { Statistics } from "@/components/Statistics";
import { Services } from "@/components/Services";
import { BlogSection } from "@/components/BlogSection";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <NavBar />
      <Hero />
      <Branches />
      <Statistics />
      <Services />
      <BlogSection />
      <Footer />
    </main>
  );
}
