import { useEffect, useRef } from "react";
import { Cog, Wrench, Workflow, BarChart3, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import Translate from "./ui/Translate";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-industrial-dark overflow-hidden pt-20 md:pt-24">
      {/* Struktura pozadí */}
      <div className="absolute inset-0 bg-industrial-dark bg-opacity-80 z-0">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      {/* Rotující ozubená kola */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.05,
              transform: `rotate(${index * 30}deg)`,
              animation: `spin ${Math.random() * 30 + 20}s linear infinite${Math.random() > 0.5 ? ' reverse' : ''}`
            }}
          >
            <Cog className="w-16 h-16 text-gold/20" />
          </div>
        ))}
      </div>
      
      {/* Světelné paprsky */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/4 bg-gradient-radial from-gold/20 via-transparent to-transparent"></div>
      </div>
      
      <div ref={parallaxRef} className="container mx-auto px-4 md:px-6 z-10 relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 mt-8 md:mt-0">
            <div className="relative" data-depth="0.1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 relative z-20">
                <span className="text-white glow-text relative z-10">{t('hero.intro_text')} </span>
                <span className="text-gold glow-text-gold relative z-10">{t('hero.title')}</span>
                <br />
                <span className="text-white glow-text relative z-10">{t('hero.for_your')}</span>
                <br />
                <span className="text-gold glow-text-gold relative z-10">{t('hero.industry')}</span>
                {/* Efekt podtržení */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 animate-pulse"></div>
              </h1>
            </div>
            
            <div className="relative" data-depth="0.2">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 glow-text-subtle">
                {t('hero.description')}
              </p>
              
              {/* Statický text místo animovaného */}
              <div className="h-8 relative">
                <p className="text-gold font-mono text-lg">
                  {t('hero.subtitle')}
                </p>
              </div>
            </div>
            
            <div className="relative" data-depth="0.3">
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#services" 
                  className="relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gold via-gold/90 to-gold overflow-hidden rounded-md transition-all duration-500 transform text-center"
                >
                  <span className="relative z-10 text-industrial-dark font-bold">{t('services.title')}</span>
                  <div className="absolute inset-0 bg-white/25 origin-left -translate-x-full animate-pulse-slow"></div>
                </a>
                <a 
                  href="#contact" 
                  className="relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-gold text-gold font-bold rounded-md overflow-hidden text-center"
                >
                  <span className="relative z-10">{t('contact.title')}</span>
                  <div className="absolute inset-0 bg-gold/10 origin-left -translate-x-full animate-pulse-slow"></div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0" data-depth="0.4">
            <div className="glass p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl backdrop-blur-lg border border-gold/20 shadow-2xl relative overflow-hidden">
              {/* Světelné efekty v rozích */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gold/20 blur-2xl rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gold/20 blur-2xl rounded-full animate-pulse-slow"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col items-center p-4 sm:p-6 bg-industrial-dark/50 rounded-lg border border-gold/10 transition-all duration-500">
                  <Wrench className="h-10 w-10 md:h-12 md:w-12 text-gold mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{t('hero.services_info.welding')}</h3>
                  <p className="text-gray-400 text-center text-sm md:text-base">{t('hero.services_info.welding_desc')}</p>
                </div>
                <div className="flex flex-col items-center p-4 sm:p-6 bg-industrial-dark/50 rounded-lg border border-gold/10 transition-all duration-500">
                  <Workflow className="h-10 w-10 md:h-12 md:w-12 text-gold mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{t('hero.services_info.locksmith')}</h3>
                  <p className="text-gray-400 text-center text-sm md:text-base">{t('hero.services_info.locksmith_desc')}</p>
                </div>
                <div className="flex flex-col items-center p-4 sm:p-6 bg-industrial-dark/50 rounded-lg border border-gold/10 transition-all duration-500">
                  <BarChart3 className="h-10 w-10 md:h-12 md:w-12 text-gold mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{t('hero.services_info.approach')}</h3>
                  <p className="text-gray-400 text-center text-sm md:text-base">{t('hero.services_info.approach_desc')}</p>
                </div>
                <div className="bg-gradient-to-r from-gold via-gold/90 to-gold p-[1px] rounded-lg relative overflow-hidden">
                  <div className="flex flex-col items-center p-4 sm:p-6 bg-industrial-dark rounded-lg h-full transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 animate-slide"></div>
                    <h3 className="text-lg md:text-xl font-bold text-gold mb-2">{t('hero.services_info.since')}</h3>
                    <p className="text-gray-400 text-center text-sm md:text-base">{t('hero.services_info.experience_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Jen ikonka šipky dolů - bez textu */}
      <div className="absolute bottom-8 left-0 right-0 mx-auto w-max z-10 animate-bounce">
        <a 
          href="#about" 
          className="flex flex-col items-center transition-colors duration-300"
        >
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center p-1">
            <ChevronDown className="w-4 h-4 text-gold animate-bounce"/>
          </div>
        </a>
      </div>
      
      {/* Částicový efekt */}
      <div className="particles-container absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={`particle-${index}`}
            className="absolute rounded-full bg-gold/10"
            style={{
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${Math.random() * 10 + 10}s linear infinite alternate`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
