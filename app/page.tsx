import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import HowTo from "./components/HowTo";
import Footer from "./components/Footer";
import FairnessScale from "./components/FairnessScale";

export default function Home() {
  return (
    <>
      <main className="container max-w-4xl mx-auto my-auto flex flex-col gap-16 md:gap-44 px-4">
        <NavBar />
        <section id="hero">
          <Hero />
        </section>
        <section id="scale">
          <FairnessScale />
        </section>
        <section id="howto">
          <HowTo />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        {/* <div className="flex-1 items-center align-middle text-center">
        <h1>TabX Pro</h1>
      </div> */}
      </main>
      <Footer />
    </>
  );
}
