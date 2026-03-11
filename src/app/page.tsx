import Nav                  from "./components/Nav";
import Hero                 from "./components/Hero";
import Marquee              from "./components/Marquee";
import Collection           from "./components/Collection";
import Influences           from "./components/Influences";
import Objects              from "./components/Objects";
import Footer               from "./components/Footer";
import Cursor               from "./components/Cursor";
import ScrollRevealProvider from "./components/ScrollRevealProvider";

export default function Home() {
  return (
    <ScrollRevealProvider>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <Influences />
        <Objects />
      </main>
      <Footer />
    </ScrollRevealProvider>
  );
}
