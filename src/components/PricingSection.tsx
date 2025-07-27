import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingPlans = [
    {
      title: "Diagnóstico inicial",
      price: "Gratis",
      subtitle: "o desde $30 USD",
      features: [
        "Evaluación completa de tu negocio",
        "Identificación de oportunidades",
        "Reporte detallado",
        "Consulta personalizada"
      ],
      isPopular: false
    },
    {
      title: "Diseño de la solución",
      price: "$80 - $150",
      subtitle: "USD por flujo",
      features: [
        "Plan detallado de automatización",
        "Arquitectura del flujo",
        "Integración con herramientas",
        "Documentación completa"
      ],
      isPopular: true
    },
    {
      title: "Implementación técnica",
      price: "$150 - $400",
      subtitle: "USD por flujo",
      features: [
        "Desarrollo completo del flujo",
        "Configuración de integraciones",
        "Pruebas exhaustivas",
        "Capacitación del equipo"
      ],
      isPopular: false
    },
    {
      title: "Mantenimiento mensual",
      price: "Desde $25",
      subtitle: "USD/mes",
      features: [
        "Ajustes y mejoras continuas",
        "Soporte técnico",
        "Monitoreo del rendimiento",
        "Evolución de funcionalidades"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="inversion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Invierte en tu crecimiento
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Planes flexibles diseñados para acompañar tu crecimiento empresarial
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`border-2 transition-all duration-300 hover:shadow-card relative ${
                  plan.isPopular 
                    ? 'border-primary shadow-glow scale-105' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-tech text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Más popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-semibold text-foreground mb-2">
                    {plan.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.subtitle}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              *Costos de herramientas externas/API Keys corren por cuenta del cliente. 
              Todos los precios son estimados y pueden variar según la complejidad del proyecto.
            </p>
          </div>

          <Button 
            variant="cta" 
            size="lg"
            onClick={() => scrollToSection('contacto')}
          >
            Obtén un presupuesto personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;