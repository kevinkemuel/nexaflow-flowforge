import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-nexaflow-dark/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/3704052f-9feb-423e-8366-f6f8fd5c9744.png" 
              alt="Nexaflow" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Inicio', id: 'inicio' },
              { label: '¿Quiénes somos?', id: 'quienes-somos' },
              { label: 'Problemas', id: 'problemas' },
              { label: 'Beneficios', id: 'beneficios' },
              { label: 'Metodología', id: 'metodologia' },
              { label: 'Inversión', id: 'inversion' },
              { label: 'Clientes', id: 'clientes' },
              { label: 'Contacto', id: 'contacto' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-primary-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => scrollToSection('contacto')}
            >
              Solicita una demo gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-nexaflow-dark/95 backdrop-blur-md border-t border-primary/20">
            <nav className="py-4 space-y-2">
              {[
                { label: 'Inicio', id: 'inicio' },
                { label: '¿Quiénes somos?', id: 'quienes-somos' },
                { label: 'Problemas', id: 'problemas' },
                { label: 'Beneficios', id: 'beneficios' },
                { label: 'Metodología', id: 'metodologia' },
                { label: 'Inversión', id: 'inversion' },
                { label: 'Clientes', id: 'clientes' },
                { label: 'Contacto', id: 'contacto' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-primary-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => scrollToSection('contacto')}
                  className="w-full"
                >
                  Solicita una demo gratuita
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;