import Head from "next/head";
import Hero from "@/components/Hero";

import Pricing from "@/components/Pricing";
import Features from "@/components/NewFeatures";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/About";
export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Express - Lucas Giorgi</title>
      </Head>
      <main>
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <About />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}
