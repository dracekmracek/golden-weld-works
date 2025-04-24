import { Cog, Zap, Drill, Settings, Scissors, Waves, Mic, DivideSquare, Hammer, Wrench, Wand2, ChevronRight, Check, ArrowRight, PackageCheck, Shield, Truck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ScrollAnimation } from './ScrollAnimation';
import Translate from './ui/Translate';
import { useEffect, useState } from 'react';

// Moderní karta s 3D efektem pro DetailCard
interface DetailCardProps {
  icon: React.ElementType;
  titleKey: string;
  descriptionKey: string;
  variant?: 'gold' | 'light' | 'dark';
  className?: string;
}

const DetailCard: React.FC<DetailCardProps> = ({ 
  icon: Icon, 
  titleKey, 
  descriptionKey, 
  variant = 'dark',
  className = '' 
}) => {
  const { t } = useTranslation();
  const baseStyles = "p-6 rounded-xl transition-all duration-500 border overflow-hidden relative";
  const variantStyles = {
    'gold': "bg-gradient-to-br from-gold/10 to-gold/5 border-gold/30 shadow-md shadow-gold/10 hover:shadow-lg hover:shadow-gold/20",
    'light': "bg-white/5 border-white/10 shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/20", 
    'dark': "bg-industrial-dark/80 border-industrial-light/10 shadow-md shadow-black/20 hover:shadow-lg hover:shadow-industrial/30"
  };
  
  return (
    <div className={`group ${baseStyles} ${variantStyles[variant]} ${className} hover:-translate-y-2 hover:scale-[1.02]`}>
      {/* Decorative element in background */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-industrial-dark/30 mb-4 border border-gold/20 transform group-hover:rotate-[10deg] transition-transform duration-500">
          <Icon className="h-7 w-7 text-gold transform transition-all duration-500 group-hover:scale-110" />
        </div>
        
        <h4 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-gold">{t(titleKey)}</h4>
        <p className="text-gray-400 text-sm leading-relaxed"><Translate i18nKey={descriptionKey} /></p>
      </div>
    </div>
  );
};

// Nová komponenta pro hlavní kartu služby
interface ServiceBlockProps {
  iconComponent: React.ElementType;
  titleKey: string;
  descriptionKey: string;
  children: React.ReactNode;
  variant?: 'left-accent' | 'right-accent' | 'top-accent';
  highlighted?: boolean;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({
  iconComponent: IconComponent,
  titleKey,
  descriptionKey,
  children,
  variant = 'left-accent',
  highlighted = false
}) => {
  const { t } = useTranslation();
  
  const baseClass = "p-10 rounded-xl overflow-hidden relative transition-all duration-500";
  
  const variantClasses = {
    'left-accent': "border-l-4 border-gold",
    'right-accent': "border-r-4 border-gold",
    'top-accent': "border-t-4 border-gold"
  };
  
  const highlightClass = highlighted 
    ? "bg-gradient-to-br from-industrial via-industrial-dark to-industrial/80 shadow-xl" 
    : "bg-gradient-to-br from-industrial-dark/90 via-industrial/90 to-industrial-dark/90 shadow-lg";
    
  return (
    <div className={`${baseClass} ${variantClasses[variant]} ${highlightClass} hover:shadow-2xl hover:scale-[1.01]`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[linear-gradient(60deg,var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-industrial-dark/60 border border-gold/20 mr-5">
            <IconComponent className="h-9 w-9 text-gold" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white">{t(titleKey)}</h3>
        </div>
        
        <p className="text-gray-300 mb-12 text-lg max-w-3xl">
          <Translate i18nKey={descriptionKey} />
        </p>
        
        {children}
      </div>
    </div>
  );
};

// Nová komponenta pro výhodu CNC
interface BenefitItemProps {
  benefitKey: string;
  number: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ benefitKey, number }) => {
  const { t } = useTranslation();
  
  // Rozdělení textu na titulek a popis (podle dvojtečky)
  const text = t(benefitKey);
  const parts = text.split(': ');
  const title = parts[0];
  const description = parts.length > 1 ? parts[1] : '';
  
  return (
    <div className="flex items-start mb-8 last:mb-0 group">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mt-0.5 mr-4 transition-all duration-300 group-hover:bg-gold/20">
        <span className="text-gold font-bold">{number}</span>
      </div>
      <div>
        <h5 className="text-white font-semibold mb-1 group-hover:text-gold transition-colors duration-300">{title}</h5>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

// Modrní CTA tlačítko s animací
const CtaButton: React.FC<{href: string, textKey: string}> = ({href, textKey}) => {
  const { t } = useTranslation();
  
  return (
    <a 
      href={href}
      className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium text-industrial-dark transition duration-300 ease-out bg-gold rounded-md shadow-md hover:shadow-xl"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gold-dark group-hover:translate-x-0 ease">
        <ArrowRight className="h-6 w-6" />
      </span>
      <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">{t(textKey)}</span>
      <span className="relative invisible">{t(textKey)}</span>
    </a>
  );
};

const Services = () => {
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInView(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="services" className="py-28 bg-industrial-dark relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-industrial-dark via-industrial/90 to-industrial-dark"></div>
      
      {/* Improved pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-industrial-pattern mix-blend-overlay"></div>
      
      {/* Diagonal gold accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full" style={{
          backgroundImage: "linear-gradient(45deg, rgba(212, 175, 55, 0.06) 25%, transparent 25%, transparent 50%, rgba(212, 175, 55, 0.06) 50%, rgba(212, 175, 55, 0.06) 75%, transparent 75%, transparent)",
          backgroundSize: "120px 120px"
        }}></div>
      </div>
      
      {/* Enhanced decoration - subtle rays from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[30%] opacity-20 bg-gradient-radial from-gold/30 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-24">
            {/* Enhanced section label */}
            <div className="inline-block mb-5 px-6 py-1.5 rounded-full bg-gradient-to-r from-gold/20 to-gold/5 backdrop-blur-sm border border-gold/30 shadow-sm">
              <span className="text-gold font-semibold tracking-wide">{t('services.section_subtitle')}</span>
            </div>
            
            {/* Enhanced title with better typography */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="text-white">{t('services.section_title_part1')}</span>
              <span className="block mt-1 gold-text">{t('services.section_title_part2')}</span>
            </h2>
            
            {/* Enhanced intro paragraphs */}
            <p className="text-gray-300 text-lg md:text-xl mb-5 leading-relaxed">
              <Translate i18nKey="services.intro_main" />
            </p>
            <p className="text-gray-300 text-lg italic">
              <Translate i18nKey="services.intro_partner" />
            </p>
          </div>
        </ScrollAnimation>

        {/* Service Blocks - Enhanced layout and visual treatment */}
        <div className="space-y-20">
          {/* Welding Section - Left accent */}
          <ScrollAnimation>
            <ServiceBlock 
              iconComponent={Hammer} 
              titleKey="services.welding.title" 
              descriptionKey="services.welding.description"
              variant="left-accent"
              highlighted={true}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <DetailCard 
                  icon={Zap} 
                  titleKey="services.welding.mig_title" 
                  descriptionKey="services.welding.mig_desc"
                  variant="gold" 
                />
                <DetailCard 
                  icon={Cog} 
                  titleKey="services.welding.tig_title" 
                  descriptionKey="services.welding.tig_desc"
                  variant="dark" 
                />
                <DetailCard 
                  icon={Settings} 
                  titleKey="services.welding.resistance_title" 
                  descriptionKey="services.welding.resistance_desc"
                  variant="light" 
                />
              </div>
            </ServiceBlock>
          </ScrollAnimation>

          {/* Machining Section - Right accent */}
          <ScrollAnimation delay={150}>
            <ServiceBlock 
              iconComponent={Wrench} 
              titleKey="services.machining.title" 
              descriptionKey="services.machining.description"
              variant="right-accent"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <DetailCard 
                  icon={Drill} 
                  titleKey="services.machining.drilling_title" 
                  descriptionKey="services.machining.drilling_desc"
                  variant="dark" 
                />
                <DetailCard 
                  icon={Waves} 
                  titleKey="services.machining.tumbling_title" 
                  descriptionKey="services.machining.tumbling_desc"
                  variant="gold" 
                />
                <DetailCard 
                  icon={Mic} 
                  titleKey="services.machining.marking_title" 
                  descriptionKey="services.machining.marking_desc"
                  variant="light" 
                />
              </div>
            </ServiceBlock>
          </ScrollAnimation>

          {/* Cutting Section - Top accent with better layout for benefits */}
          <ScrollAnimation delay={300}>
            <ServiceBlock 
              iconComponent={DivideSquare} 
              titleKey="services.cutting.title" 
              descriptionKey="services.cutting.intro"
              variant="top-accent"
              highlighted={true}
            >
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-gold mb-8 inline-flex items-center">
                  <Wand2 className="h-6 w-6 mr-3" />
                  {t('services.cutting.benefits_title')}
                </h4>
              </div>
              
              {/* Nové formátování pro výhody CNC */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <BenefitItem benefitKey="services.cutting.benefit1" number={1} />
                <BenefitItem benefitKey="services.cutting.benefit2" number={2} />
                <BenefitItem benefitKey="services.cutting.benefit3" number={3} />
                <BenefitItem benefitKey="services.cutting.benefit4" number={4} />
              </div>
            </ServiceBlock>
          </ScrollAnimation>
          
          {/* Nová sekce Finalizace & Expedice */}
          <ScrollAnimation delay={400}>
            <ServiceBlock 
              iconComponent={PackageCheck} 
              titleKey="services.finishing.title" 
              descriptionKey="services.finishing.description"
              variant="left-accent"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <DetailCard 
                  icon={Factory} 
                  titleKey="services.finishing.quality_title" 
                  descriptionKey="services.finishing.quality_desc"
                  variant="light" 
                />
                <DetailCard 
                  icon={Shield} 
                  titleKey="services.finishing.inspection_title" 
                  descriptionKey="services.finishing.inspection_desc"
                  variant="dark" 
                />
                <DetailCard 
                  icon={Truck} 
                  titleKey="services.finishing.logistics_title" 
                  descriptionKey="services.finishing.logistics_desc"
                  variant="gold" 
                />
              </div>
            </ServiceBlock>
          </ScrollAnimation>
        </div>

        {/* Enhanced CTA Section */}
        <ScrollAnimation delay={500}>
          <div className="relative mt-28 py-16 px-8 md:px-12 rounded-2xl overflow-hidden">
            {/* Background with enhanced gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-industrial-dark/95 via-industrial/80 to-industrial-dark/90"></div>
            
            {/* Subtle decorative lines */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute w-full h-full" style={{
                backgroundImage: "linear-gradient(45deg, rgba(212, 175, 55, 0.1) 25%, transparent 25%, transparent 50%, rgba(212, 175, 55, 0.1) 50%, rgba(212, 175, 55, 0.1) 75%, transparent 75%, transparent)",
                backgroundSize: "60px 60px"
              }}></div>
            </div>
            
            {/* Left-side decorative element */}
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-gold/30 via-gold/10 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">{t('services.cta.title')}</h3>
              <p className="text-gray-300 text-lg md:text-xl mb-10">
                <Translate i18nKey="services.cta.description" />
              </p>
              
              {/* Modern sliding CTA button */}
              <CtaButton href="#contact" textKey="contact.title" />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Services;
