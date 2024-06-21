import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative mx-auto flex-col items-center justify-center overflow-hidden bg-black px-5 md:px-10">
      <Hero />
      <Skills />
    </main>
  );
}
