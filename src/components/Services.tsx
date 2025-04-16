
import { Hammer, Wrench, PackageCheck } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  points 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  points: string[] 
}) => {
  return (
    <div className="glass group hover:border-gold/50 transition-all duration-300 h-full">
      <div className="p-6">
        <div className="w-16 h-16 bg-industrial-dark flex items-center justify-center rounded-lg mb-4 border border-gold/30 group-hover:border-gold transition-all duration-300">
          <Icon className="h-8 w-8 text-gold" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        
        <p className="text-gray-300 mb-6">{description}</p>
        
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-2"></span>
              <span className="text-gray-300">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: "Svařování",
      description: "Profesionální svařovací služby s využitím nejmodernějších technologií a postupů.",
      points: [
        "Svařování oceli, nerezi a hliníku",
        "Metody MIG, TIG a také svařování plamenem",
        "Odporové svařování – lineární odporový lis TECNA",
        "Výpuskové svařování – navařování matic na výpalky"
      ]
    },
    {
      icon: Wrench,
      title: "Zámečnické práce",
      description: "Komplexní zámečnické služby pro průmyslové aplikace s přesností a kvalitou.",
      points: [
        "Vrtání a vystružování",
        "Zahlubování pro šrouby",
        "Závitování od M3 do M26",
        "Značení mikroúderem",
        "Kontrola kalibrovanými měřidly"
      ]
    },
    {
      icon: PackageCheck,
      title: "Finalizace a expedice",
      description: "Kompletní služby dokončení a dodání produktů přímo k vašim dveřím.",
      points: [
        "Dokončovací práce",
        "Povrchová úprava",
        "Finální kontrola",
        "Balení a logistika",
        "Komunikace s klientem"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-industrial relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(18,18,18,0.5),rgba(18,18,18,0.8))]"></div>
      
      {/* Diagonal lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full" style={{
          backgroundImage: "linear-gradient(45deg, rgba(212, 175, 55, 0.05) 25%, transparent 25%, transparent 50%, rgba(212, 175, 55, 0.05) 50%, rgba(212, 175, 55, 0.05) 75%, transparent 75%, transparent)",
          backgroundSize: "100px 100px"
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gold/10 border border-gold/20">
            <span className="text-gold font-medium">Čím se zabýváme</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Profesionální </span>
            <span className="gold-text">průmyslové služby</span>
          </h2>
          
          <p className="text-gray-300 text-lg">
            Naše služby zahrnují celou škálu průmyslového zpracování kovů - od svařování 
            přes zámečnické práce až po finalizaci a expedici hotových výrobků.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                points={service.points}
              />
            </ScrollAnimation>
          ))}
        </div>
        
        <ScrollAnimation delay={450}>
          <div className="mt-16 glass p-8 rounded-xl">
            <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Komplexní přístup k vaším potřebám</h3>
            <p className="text-gray-300 mb-8">
              Celkově se jedná o komplexní proces, který zajišťuje, že každý výrobek opustí naši 
              společnost v nejlepší možné kvalitě a bude bezpečně doručen k zákazníkovi.
            </p>
            
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-gold hover:bg-gold-dark text-industrial-dark font-semibold rounded-md transition-all duration-300"
            >
              Získejte nabídku
            </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Services;
