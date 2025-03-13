import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { VolumeX, Menu } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-[#3A7CA5] flex items-center justify-center">
            <VolumeX className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-primary">QuietSphere</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition">How It Works</a>
          <a href="#use-cases" className="text-sm font-medium hover:text-primary transition">Use Cases</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition">Pricing</a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition">FAQ</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="#waitlist" className="hidden md:block px-5 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-opacity-90 transition">
            Join Waitlist
          </a>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden p-4 pb-6 bg-white border-t">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#use-cases" 
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#waitlist" 
              className="px-5 py-2 rounded-md bg-primary text-white text-sm font-medium text-center hover:bg-opacity-90 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
