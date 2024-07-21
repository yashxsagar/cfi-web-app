import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProsCons from "./components/ProsCons";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import HowTo from "./components/HowTo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="container max-w-4xl mx-auto my-auto flex flex-col gap-16 md:gap-44 px-4">
        <NavBar />
        <Hero />
        <ProsCons />
        <HowTo />
        <Pricing />
        <FAQ />
        {/* <div className="flex-1 items-center align-middle text-center">
        <h1>TabX Pro</h1>
      </div> */}
      </main>
      <Footer />
    </>
  );
}
