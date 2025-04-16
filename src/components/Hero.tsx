
import { useEffect, useRef } from "react";
import { Wrench, Workflow, BarChart3 } from "lucide-react";

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
        const depth = index * 10;
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
      {/* Background overlay with grain effect */}
      <div className="absolute inset-0 bg-industrial-dark bg-opacity-80 z-0">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      {/* Sparks animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div ref={parallaxRef} className="parallax-container container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="parallax-layer" data-depth="0.1">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Dokonalé </span>
                <span className="gold-text">svařování</span>
                <span className="text-white"> pro váš</span>
                <br />
                <span className="gold-text">průmysl</span>
              </h1>
            </div>
            
            <div className="parallax-layer" data-depth="0.2">
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Společnost zabývající se dodáváním kovových komponentů do průmyslu od roku 2007. 
                Zpracováváme malé i velké série v profesionální kvalitě.
              </p>
            </div>
            
            <div className="parallax-layer" data-depth="0.3">
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#services" 
                  className="px-6 py-3 bg-gold text-industrial-dark font-semibold rounded-md transition-all duration-300 hover:bg-gold-dark text-center"
                >
                  Naše služby
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 border-2 border-gold text-gold font-semibold rounded-md transition-all duration-300 hover:bg-gold/10 text-center"
                >
                  Kontaktujte nás
                </a>
              </div>
            </div>
          </div>
          
          <div className="parallax-layer" data-depth="0.4">
            <div className="glass p-6 md:p-10 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-4 bg-industrial-dark/50 rounded-lg">
                  <Wrench className="h-12 w-12 text-gold mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Precizní svařování</h3>
                  <p className="text-gray-400 text-center">Svařování oceli, nerezi a hliníku metodami MIG, TIG a plamenem</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-industrial-dark/50 rounded-lg">
                  <Workflow className="h-12 w-12 text-gold mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Zámečnické práce</h3>
                  <p className="text-gray-400 text-center">Komplexní zámečnické práce včetně vrtání, vystružování a závitování</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-industrial-dark/50 rounded-lg">
                  <BarChart3 className="h-12 w-12 text-gold mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Profesionální přístup</h3>
                  <p className="text-gray-400 text-center">Kvalita a spolehlivost ve všech aspektech našich služeb</p>
                </div>
                <div className="bg-gold-gradient p-[1px] rounded-lg">
                  <div className="flex flex-col items-center p-4 bg-industrial-dark rounded-lg h-full">
                    <h3 className="text-xl font-semibold text-gold mb-2">Od roku 2007</h3>
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
          className="flex flex-col items-center text-gold hover:text-gold-light transition-colors duration-300"
        >
          <span className="text-sm mb-2">Dozvědět se více</span>
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gold rounded-full animate-float"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
