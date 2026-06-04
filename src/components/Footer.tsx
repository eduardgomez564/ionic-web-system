import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { ArrowUp } from "lucide-react";

import ionicLogo from "@/assets/ionic-logo-short.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="gradient-dark-blue px-4 pb-1 pt-8 md:px-8">
      <div className="container-narrow">
      <div className="grid gap-10 md:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] items-start md:justify-items-start">
        <div className="flex items-center gap-5 md:justify-self-start">
          <img src={ionicLogo} alt="IONIC Logo" className="h-40 w-40" />
          <p className="text-primary-foreground/80 text-xl font-medium">
            Impact One Nation <br />Industrial Corporation
          </p>
        </div>

        <div className="text-primary-foreground">
          <h3 className="text-base font-semibold mb-4">Contact Details</h3>
          <div className="grid gap-3 text-sm text-primary-foreground/80">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-primary-foreground/70" />
              <span>Blk 9 Lot 6, Banuyo Rd, Pilar Village, Las Piñas City</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-primary-foreground/70" />
              <div>
                <div className="font-semibold text-primary-foreground/90">Landline</div>
                <div>(632) 8806 2048</div>
                <div>(632) 8805 2959</div>
                <div>(632) 8800 9104</div>
                <div className="mt-2 font-semibold text-primary-foreground/90">Mobile</div>
                <div>Globe 0917 854 9790</div>
                <div>Smart 0947 801 7594</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-primary-foreground/70" />
              <span>impactonenation@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Facebook size={18} className="text-primary-foreground/70" />
              <span>https://www.facebook.com/impactonenation/</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
        >
          <ArrowUp size={16} />
          Back to Top
        </button>
        <p className="text-primary-foreground/50 text-xs text-center">
          © {new Date().getFullYear()} Impact One Nation Industrial Corporation. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
