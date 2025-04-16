
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Index = () => {
  // Metadata for SEO optimization
  useEffect(() => {
    document.title = "Schöberle Industry - Profesionální svařování a zámečnické práce";
    
    // Add structured data for rich results
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Schöberle Industry",
      "url": "https://schoberle-industry.cz",
      "logo": "https://schoberle-industry.cz/logo.png",
      "description": "Profesionální svařování oceli, nerezi a hliníku. Zámečnické práce, vrtání, závitování. Zpracování malých i velkých sérií v profesionální kvalitě.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Děrenská 574",
        "addressLocality": "Fulnek",
        "postalCode": "742 45",
        "addressCountry": "CZ"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+420736678454",
        "contactType": "customer service",
        "email": "info@schoberle-industry.cz"
      },
      "sameAs": [
        "https://www.facebook.com/schoberle.industry",
        "https://www.instagram.com/schoberle.industry"
      ]
    };

    // Add structured data script to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-industrial-dark text-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
