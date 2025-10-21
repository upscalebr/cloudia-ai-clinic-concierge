import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'rgb(0, 167, 231)' }} className="relative top-0 left-0 right-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="https://imgur.com/SQYG7BC.png" alt="Doctoriza" className="h-10 w-auto" />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link to="/funcionalidades" className="text-base text-white hover:text-white/80 transition-colors font-semibold">
            Funcionalidades
          </Link>
          <a href="#para-quem" className="text-base text-white hover:text-white/80 transition-colors font-semibold">
            Para quem
          </a>
          <a href="#depoimentos" className="text-base text-white hover:text-white/80 transition-colors font-semibold">
            Depoimentos
          </a>
          <Link to="/planos" className="text-base text-white hover:text-white/80 transition-colors font-semibold">
            Planos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
