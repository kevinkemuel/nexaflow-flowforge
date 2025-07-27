import { Card, CardContent } from '@/components/ui/card';
import { Search, PenTool, Cog, Wrench } from 'lucide-react';

const MethodologySection = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="h-8 w-8" />,
      title: "Diagnóstico",
      description: "Evaluamos tu situación actual y detectamos oportunidades de mejora."
    },
    {
      number: "02",
      icon: <PenTool className="h-8 w-8" />,
      title: "Diseño de la solución",
      description: "Creamos un plan detallado de cómo funcionará tu flujo automatizado."
    },
    {
      number: "03",
      icon: <Cog className="h-8 w-8" />,
      title: "Implementación técnica",
      description: "Desarrollamos el flujo, lo conectamos con tus herramientas y realizamos pruebas."
    },
    {
      number: "04",
      icon: <Wrench className="h-8 w-8" />,
      title: "Mantenimiento mensual",
      description: "Ajustes, mejoras, soporte y evolución continua."
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Cómo trabajamos
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Un proceso probado y estructurado para garantizar el éxito de tu automatización
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-card relative overflow-hidden"
              >
                {/* Step number background */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-tech opacity-10 rounded-bl-3xl"></div>
                
                <CardContent className="p-6 text-center relative">
                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-2xl font-bold text-primary/30">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-tech rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <div className="text-primary-foreground">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Process flow indicators */}
          <div className="hidden lg:flex justify-center items-center mt-8 space-x-4">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/30 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;