const Footer = () => {
  return (
    <footer className="bg-nexaflow-dark py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/c8e2a33d-a3c3-47f5-9e1c-9ac1a55bacbd.png" 
              alt="Nexaflow" 
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-primary">
              Nexaflow
            </span>
          </div>
          <p className="text-primary-foreground/80 text-sm">
            © 2025 Nexaflow. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;