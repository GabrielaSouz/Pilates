import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Benefits from "@/components/Benefits";
import Cards from "@/components/Cards";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Treatments from "@/components/Treatments";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFAF9]">
      <Header />

      <Hero />

      <Benefits />

      <Treatments />

 <HowItWorks />
 
      <Services />

      <About />

     

      <Testimonials />

      <Faq />

      <Contact />

      <Footer />
    </main>
  );
}
