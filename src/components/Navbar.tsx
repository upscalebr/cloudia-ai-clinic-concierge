import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cloud className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-foreground">cloudia</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#funcionalidades" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Funcionalidades
          </a>
          <a href="#para-quem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Para quem
          </a>
          <a href="#depoimentos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Depoimentos
          </a>
          <a href="#planos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Planos
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground">
            Falar com consultor
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
