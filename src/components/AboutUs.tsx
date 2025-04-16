
import { Users } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-industrial-dark relative">
      {/* Background overlay with industrial pattern */}
      <div className="absolute inset-0 opacity-10 bg-industrial-pattern mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <ScrollAnimation>
            <div className="inline-block mb-6">
              <div className="flex items-center bg-industrial p-2 rounded-lg">
                <Users className="h-5 w-5 text-gold mr-2" />
                <span className="text-gold-light font-medium">Kdo jsme</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Zkušený tým </span>
              <span className="gold-text">průmyslových profesionálů</span>
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Společnost zabývající se dodáváním kovových komponentů do průmyslu od roku 2007. 
              Zpracováváme malé (i kusové) série, ale také velké série v tisících kusech. 
              Díly dodáváme jako hotový výrobek, ale také děláme dílčí operace.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="glass p-4">
                <h3 className="text-gold text-xl font-semibold mb-2">Zkušenosti</h3>
                <p className="text-gray-300">Více než 15 let zkušeností v oboru průmyslového svařování</p>
              </div>
              <div className="glass p-4">
                <h3 className="text-gold text-xl font-semibold mb-2">Profesionalita</h3>
                <p className="text-gray-300">Tým vysoce kvalifikovaných odborníků a svářečů</p>
              </div>
            </div>
            
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
            <div className="flex items-center">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-industrial-light border-2 border-gold flex items-center justify-center text-white font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <div className="ml-6">
                <p className="text-white">Spolupracujeme s předními firmami v oboru</p>
              </div>
            </div>
          </ScrollAnimation>
          </div>
          
          <div className="md:w-1/2">
            <ScrollAnimation delay={300}>
            <div className="relative">
              <div className="bg-industrial border-2 border-gold-dark/30 rounded-xl overflow-hidden aspect-video relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-industrial to-industrial"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Průmyslové svařování" 
                    className="w-3/4 h-3/4 object-contain opacity-90"
                  />
                </div>
              </div>
              
              <div className="glass absolute -bottom-6 -right-6 p-4 max-w-xs">
                <div className="flex items-start">
                  <span className="text-4xl font-bold text-gold mr-2">15+</span>
                  <p className="text-white">
                    let zkušeností v dodávání kvalitních kovových komponentů
                  </p>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
