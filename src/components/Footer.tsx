import { Facebook, Mail, MapPin, Phone, Download } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import ionicLogo from "@/assets/ionic-logo-short.png";
import ionicFullName from "@/assets/ionic-fullname.png";
import brochurePdf from "@/assets/company-profile/IONIC-Brochure.pdf";
import companyProfilePdf from "@/assets/company-profile/IONIC-Company Profile.pdf";

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
    { label: "Privacy Policy", to: "/privacy_policy" },
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
        <div className="grid gap-10 md:gap-8 md:grid-cols-2 lg:grid-cols-5 items-start md:justify-items-start">
          {/* Logo Column */}
          <div className="flex flex-col items-center md:justify-self-start">
            <img src={ionicLogo} alt="IONIC Logo" className="h-24 md:h-32 lg:h-40 w-auto" />
            <img src={ionicFullName} alt="IONIC Full Name" className="w-28 md:w-36 lg:w-44 h-auto" />
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

          {/* Resources */}
          <div className="text-primary-foreground w-full">
            <h3 className="text-base font-semibold mb-4">Resources</h3>
            <ul className="grid gap-3 text-sm text-primary-foreground/80">
              <li className="flex items-center justify-between gap-2 max-w-[200px]">
                <span>Company Brochure</span>
                <a
                  href={brochurePdf}
                  download="IONIC-Brochure.pdf"
                  className="p-1.5 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors flex items-center justify-center shadow-sm"
                  title="Download Company Brochure"
                >
                  <Download size={14} />
                </a>
              </li>
              <li className="flex items-center justify-between gap-2 max-w-[200px]">
                <span>Company Profile</span>
                <a
                  href={companyProfilePdf}
                  download="IONIC-Company Profile.pdf"
                  className="p-1.5 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors flex items-center justify-center shadow-sm"
                  title="Download Company Profile"
                >
                  <Download size={14} />
                </a>
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

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6">
          <p className="text-primary-foreground/50 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Impact One Nation Industrial Corporation. All rights reserved.
          </p>
          <Link
            to="/privacy_policy"
            onClick={scrollToTop}
            className="text-primary-foreground/50 hover:text-primary-foreground text-xs transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
