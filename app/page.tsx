import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import HowTo from "./components/HowTo";
import Footer from "./components/Footer";
import FairnessScale from "./components/FairnessScale";
import { cookies } from "next/headers";
import { decodeJwt, UserPayload } from "./utils/jwt";
import RefreshCache from "./components/refresh-cache";
import checkifCookieSet from "./checkIfCookieSet";

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value ?? null;

  let user: UserPayload | null = null;

  if (token) {
    user = decodeJwt(token);
  }
  return (
    <>
      <main className="container max-w-4xl mx-auto my-auto flex flex-col gap-16 md:gap-44 px-4">
        <RefreshCache check={checkifCookieSet} />
        <NavBar user={user} />
        <section id="hero">
          <Hero user={user} />
        </section>
        <section id="scale">
          <FairnessScale />
        </section>
        <section id="howto">
          <HowTo />
        </section>
        <section id="pricing">
          <Pricing user={user} />
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
