import { useEffect, useRef } from "react";
import { Cog, Wrench, Workflow, BarChart3 } from "lucide-react";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const layers = parallaxRef.current.querySelectorAll(".parallax-layer");
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
      
      const deltaX = (mouseX - centerX) / centerX;
      const deltaY = (mouseY - centerY) / centerY;
      
      layers.forEach((layer: Element, index) => {
        const depth = index * 15; // Increased depth for more dramatic effect
        const moveX = deltaX * depth;
        const moveY = deltaY * depth;
        
        (layer as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-industrial-dark overflow-hidden">
      {/* Background overlay with grain and glow effect */}
      <div className="absolute inset-0 bg-industrial-dark bg-opacity-80 z-0">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      {/* Rotating gears animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.1,
              transform: `rotate(${index * 30}deg)`,
              animation: `spin ${Math.random() * 20 + 20}s linear infinite${Math.random() > 0.5 ? ' reverse' : ''}`
            }}
          >
            <Cog className="w-16 h-16 text-gold/20" />
          </div>
        ))}
      </div>
      
      <div ref={parallaxRef} className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="parallax-layer relative" data-depth="0.1">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative z-20">
                <span className="text-white glow-text relative z-10">Dokonalé </span>
                <span className="text-gold glow-text-gold relative z-10">svařování</span>
                <br />
                <span className="text-white glow-text relative z-10">pro váš</span>
                <br />
                <span className="text-gold glow-text-gold relative z-10">průmysl</span>
                {/* Glowing underline effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 blur-sm"></div>
              </h1>
            </div>
            
            <div className="parallax-layer relative" data-depth="0.2">
              <p className="text-lg md:text-xl text-gray-300 mb-8 glow-text-subtle">
                Společnost zabývající se dodáváním kovových komponentů do průmyslu od roku 2007. 
                Zpracováváme malé i velké série v profesionální kvalitě.
              </p>
            </div>
            
            <div className="parallax-layer relative" data-depth="0.3">
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#services" 
                  className="relative px-8 py-4 bg-gradient-to-r from-gold via-gold/90 to-gold group overflow-hidden rounded-md transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 text-industrial-dark font-bold">Naše služby</span>
                  <div className="absolute inset-0 bg-white/25 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
                <a 
                  href="#contact" 
                  className="relative px-8 py-4 border-2 border-gold text-gold font-bold rounded-md overflow-hidden group transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10">Kontaktujte nás</span>
                  <div className="absolute inset-0 bg-gold/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="parallax-layer relative" data-depth="0.4">
            <div className="glass p-6 md:p-10 rounded-xl backdrop-blur-lg border border-gold/20 shadow-2xl relative overflow-hidden group">
              {/* Glowing corner effects */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gold/20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gold/20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-6 bg-industrial-dark/50 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 transform hover:scale-105">
                  <Wrench className="h-12 w-12 text-gold mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Precizní svařování</h3>
                  <p className="text-gray-400 text-center">Svařování oceli, nerezi a hliníku metodami MIG, TIG a plamenem</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-industrial-dark/50 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 transform hover:scale-105">
                  <Workflow className="h-12 w-12 text-gold mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Zámečnické práce</h3>
                  <p className="text-gray-400 text-center">Komplexní zámečnické práce včetně vrtání, vystružování a závitování</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-industrial-dark/50 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 transform hover:scale-105">
                  <BarChart3 className="h-12 w-12 text-gold mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Profesionální přístup</h3>
                  <p className="text-gray-400 text-center">Kvalita a spolehlivost ve všech aspektech našich služeb</p>
                </div>
                <div className="bg-gradient-to-r from-gold via-gold/90 to-gold p-[1px] rounded-lg group/item">
                  <div className="flex flex-col items-center p-6 bg-industrial-dark rounded-lg h-full transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gold mb-2">Od roku 2007</h3>
                    <p className="text-gray-400 text-center">Léta zkušeností a stovky spokojených zákazníků</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a 
          href="#about" 
          className="flex flex-col items-center text-gold hover:text-gold-light transition-colors duration-300 group"
        >
          <span className="text-sm mb-2 glow-text-gold">Dozvědět se více</span>
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center p-1 group-hover:border-gold-light transition-colors duration-300">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce group-hover:bg-gold-light transition-colors duration-300"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
