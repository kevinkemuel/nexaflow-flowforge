const Footer = () => {
  return (
    <footer className="bg-nexaflow-dark py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/791b1c95-1545-49e2-8788-44a9a31d9efc.png" 
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