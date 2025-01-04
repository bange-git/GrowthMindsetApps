import React from "react";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import BannerReadbay from "../../components/Banner/BannerReadbay";
import BannerQuote from "../../components/Banner/BannerQuote";
import BannerBible from "../../components/Banner/BannerBible";
import BannerAffirm from "../../components/Banner/BannerAffirm";
import ContactForm from "../../components/Banner/ContactForm";


const Home = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <BannerReadbay />
      <BannerQuote />
      <BannerBible />
      <BannerAffirm />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;
