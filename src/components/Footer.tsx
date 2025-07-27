const Footer = () => {
  return (
    <footer className="bg-nexaflow-dark py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/3704052f-9feb-423e-8366-f6f8fd5c9744.png" 
              alt="Nexaflow" 
              className="h-10 w-auto"
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