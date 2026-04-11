
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SalaojaProcess } from "./components/SalaojaProcess";
import ServiceArea from "./components/ServiceArea";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="">
      <main className=" bg-white">
        <Header/>
        <Hero/>
        <Services/>
       <SalaojaProcess/>
       <ServiceArea/>
       <Contact/>
       <Footer/>

      
      </main>
    </div>
  );
}
