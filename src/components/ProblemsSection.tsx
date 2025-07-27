import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Clock, Users, TrendingDown, MessageSquareX } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      icon: <MessageSquareX className="h-8 w-8" />,
      title: "Pérdida de clientes por no responder a tiempo",
      description: "Los leads se van porque no hay respuesta inmediata"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Tareas repetitivas que quitan tiempo valioso",
      description: "Tu equipo pierde horas en trabajo manual"
    },
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: "Demora en la gestión de pedidos y seguimiento",
      description: "Procesos lentos afectan la satisfacción del cliente"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personal saturado o sobrecargado",
      description: "Tu equipo está quemado por exceso de trabajo operativo"
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Leads que se pierden por falta de atención",
      description: "Oportunidades de negocio se escapan por falta de seguimiento"
    }
  ];

  return (
    <section id="problemas" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Problemas que resolvemos
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Identificamos y solucionamos los puntos de dolor más comunes en pequeñas y medianas empresas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <Card 
                key={index} 
                className="group border-2 hover:border-destructive/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-destructive/20 transition-colors duration-300">
                    <div className="text-destructive">
                      {problem.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;