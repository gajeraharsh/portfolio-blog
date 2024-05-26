import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection"
import About from "@/components/About/About"
import Resume from "@/components/Resume/Resume";

export default function Home() {
  return (
    <main className="">
       <Header />
       <HeroSection />
       <About />
       <Resume />
    </main>
  );
}
