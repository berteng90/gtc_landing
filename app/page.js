import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Branches } from "@/components/Branches";
import { Services } from "@/components/Services";
import { BlogSection } from "@/components/BlogSection";
import { Statistics } from "@/components/Statistics";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden ">
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
