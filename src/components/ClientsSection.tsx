import { Card, CardContent } from '@/components/ui/card';
import { Store, MapPin, Briefcase, Laptop, Users } from 'lucide-react';

const ClientsSection = () => {
  const clientTypes = [
    {
      icon: <Store className="h-8 w-8" />,
      title: "Tiendas online",
      description: "E-commerce que necesita automatizar ventas y atención al cliente"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Negocios locales",
      description: "Empresas físicas que buscan optimizar sus procesos operativos"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Agencias o freelancers",
      description: "Profesionales que quieren escalar sin aumentar su carga de trabajo"
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Emprendedores digitales",
      description: "Startups y negocios digitales enfocados en crecimiento rápido"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Equipos comerciales",
      description: "Departamentos de ventas que necesitan eficiencia y seguimiento"
    }
  ];

  return (
    <section id="clientes" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Nexaflow es para ti si eres...
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Especializados en pequeñas y medianas empresas que buscan optimizar sus procesos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTypes.slice(0, 3).map((client, index) => (
              <Card 
                key={index} 
                className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-tech rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <div className="text-primary-foreground">
                      {client.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {client.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {client.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {clientTypes.slice(3).map((client, index) => (
              <Card 
                key={index + 3} 
                className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-tech rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <div className="text-primary-foreground">
                      {client.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {client.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {client.description}
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

export default ClientsSection;