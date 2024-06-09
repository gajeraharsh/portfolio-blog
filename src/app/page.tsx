import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection"
import About from "@/components/About/About"
import Resume from "@/components/Resume/Resume";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="">
       <Header />
       <HeroSection />
       <About />
       <Resume />
       <Projects />
       <Contact />
    </main>
  );
}
