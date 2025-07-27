import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Target, Users } from 'lucide-react';

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="quienes-somos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            ¿Quiénes somos?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Nexaflow es una empresa especializada en crear soluciones tecnológicas automatizadas 
            para pequeñas y medianas empresas. Diseñamos flujos inteligentes que eliminan tareas 
            manuales, aceleran tus procesos y te permiten enfocarte en crecer.
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Automatización Inteligente</h3>
                <p className="text-muted-foreground">
                  Eliminamos tareas repetitivas con IA avanzada
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enfoque Estratégico</h3>
                <p className="text-muted-foreground">
                  Te ayudamos a enfocar tu equipo en lo que realmente importa
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Para PyMEs</h3>
                <p className="text-muted-foreground">
                  Soluciones diseñadas específicamente para pequeñas y medianas empresas
                </p>
              </CardContent>
            </Card>
          </div>

          <Button 
            variant="cta" 
            size="lg"
            onClick={() => scrollToSection('contacto')}
          >
            Conoce más sobre nuestros servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;