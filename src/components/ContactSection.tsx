import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Instagram, Mail, MessageCircle, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "¡Mensaje enviado con éxito!",
      description: "Te contactaremos pronto.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      value: "@nexaflow.ia",
      href: "https://instagram.com/nexaflow.ia",
      color: "from-pink-500 to-orange-500"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Correo",
      value: "nexaflow.servicio@gmail.com",
      href: "mailto:nexaflow.servicio@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      label: "WhatsApp",
      value: "+812 4233944",
      href: "https://wa.me/8124233944",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              ¿Listo para automatizar tu negocio? Hablemos sobre cómo podemos ayudarte
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary-foreground mb-6">
                Múltiples formas de contactarnos
              </h3>
              
              {contactMethods.map((method, index) => (
                <Card key={index} className="border-2 border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <a 
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div>
                        <div className="text-primary-foreground font-semibold">
                          {method.label}
                        </div>
                        <div className="text-primary-foreground/80">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="border-2 border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-foreground">
                  Envíanos un mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary-foreground">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary-foreground">Correo electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-primary-foreground">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary-foreground">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/60"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                  >
                    Enviar mensaje
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;