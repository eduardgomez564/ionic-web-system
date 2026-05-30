import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ionicLogo from "@/assets/ionic-logo.png";

const StickyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container-narrow flex items-center justify-between px-4 py-3 md:px-8">
        <img src={ionicLogo} alt="IONIC Logo" className="h-10 md:h-12 object-contain" />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about_us" className="hover:text-primary transition-colors">About Us</Link>
          <Link to="/what_we_offer" className="hover:text-primary transition-colors">What We Offer</Link>
          <Link to="/contact_us" className="hover:text-primary transition-colors">Contact Us</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => scrollTo("book")} className="hidden sm:inline-flex gradient-orange text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Book a Free Consultation
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-foreground">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-4 space-y-3">
          <Link onClick={() => setMenuOpen(false)} to="/" className="block w-full text-left text-foreground py-2">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about_us" className="block w-full text-left text-foreground py-2">About Us</Link>
          <Link onClick={() => setMenuOpen(false)} to="/what_we_offer" className="block w-full text-left text-foreground py-2">What We Offer</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact_us" className="block w-full text-left text-foreground py-2">Contact Us</Link>
          <button onClick={() => { setMenuOpen(false); scrollTo("book"); }} className="w-full gradient-orange text-accent-foreground px-5 py-3 rounded-lg text-sm font-semibold">
            Book a Free Consultation
          </button>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
