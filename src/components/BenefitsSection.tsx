import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, UserMinus, Target, TrendingUp } from 'lucide-react';

const BenefitsSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Leads atendidos al instante sin personal extra",
      description: "Respuesta automática 24/7 sin contratar más gente"
    },
    {
      icon: <UserMinus className="h-8 w-8" />,
      title: "Menos personas haciendo tareas manuales",
      description: "Reduce costos operativos eliminando trabajo repetitivo"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Equipo enfocado en lo estratégico, no en lo operativo",
      description: "Tu gente trabaja en crecimiento, no en tareas rutinarias"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Procesos más rápidos, eficientes y rentables",
      description: "Mejora drástica en velocidad y calidad de servicio"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Beneficios reales para tu negocio
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Resultados tangibles que impactan directamente en tu rentabilidad y crecimiento
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-card text-left"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                      <div className="text-primary-foreground">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button 
            variant="cta" 
            size="lg"
            onClick={() => scrollToSection('contacto')}
          >
            Empieza a transformar tu negocio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;