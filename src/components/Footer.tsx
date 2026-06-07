import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import ionicLogo from "@/assets/ionic-logo-short.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const siteMap = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about_us" },
    { label: "Divisions", to: "/divisions" },
    { label: "What We Offer", to: "/what_we_offer" },
    { label: "Contact Us", to: "/contact_us" },
  ];

  const products = [
    "Scale & Corrosion Inhibitors",
    "Algaecides & Microbiocides",
    "Boiler Treatment Chemicals",
    "RO Systems & Filters",
    "Industrial Lubricants",
    "VCI Corrosion Protection",
  ];

  const distributedBrands = [
    "VAPRO",
    "Magna",
    "LENNTECH",
    "Italmatch Chemicals",
    "LUPROMAX",
    "Castrol",
    "BWA",
  ];

  const materialSupplies = [
    "Reverse Osmosis Membranes and Filters",
    "Filtration Systems",
    "UV Disinfection Equipment",
    "Replacement or Spare Parts for Cooling Towers and Boilers",
    "Equipment for Waste Water Treatment",
    "Laboratory Equipment",
  ];

  const services = [
    "Plant Preventive Maintenance",
    "Cooling Tower & Airconditioning",
    "Water Treatment",
    "Waste Water Treatment",
    "Electrochlorination",
  ];

  return (
    <footer className="gradient-dark-blue px-4 pb-1 pt-8 md:px-8">
      <div className="container-narrow">
        <div className="grid gap-10 md:gap-8 md:grid-cols-4 items-start md:justify-items-start">
          {/* Logo Column */}
          <div className="flex items-center gap-5 md:justify-self-start">
            <img src={ionicLogo} alt="IONIC Logo" className="h-40 w-40" />
          </div>

          {/* Site Map */}
          <div className="text-primary-foreground">
            <h3 className="text-base font-semibold mb-4">Site Map</h3>
            <ul className="grid gap-2 text-sm text-primary-foreground/80">
              {siteMap.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={scrollToTop}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services */}
          <div className="text-primary-foreground">
            <h3 className="text-base font-semibold mb-4">Products & Services</h3>
            <ul className="grid gap-2 text-sm text-primary-foreground/80">
              <li>
                <Link
                  to="/what_we_offer#products"
                  onClick={scrollToTop}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/what_we_offer#distributors"
                  onClick={scrollToTop}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Distributed Brands
                </Link>
              </li>
              <li>
                <Link
                  to="/what_we_offer#supply"
                  onClick={scrollToTop}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Material Supplies
                </Link>
              </li>
              <li>
                <Link
                  to="/what_we_offer#services"
                  onClick={scrollToTop}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
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
                <a
                  href="https://www.facebook.com/impactonenation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  facebook.com/impactonenation
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-primary-foreground/50 text-xs text-center">
            © {new Date().getFullYear()} Impact One Nation Industrial Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
