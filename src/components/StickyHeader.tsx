import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ionicLogo from "@/assets/ionic-logo.png";
import { NavLink } from "@/components/NavLink";

const navItems = [
  {
    label: "Home",
    to: "/",
    end: true,
    sections: [
      { label: "Our Solutions", to: "/#solutions" },
      { label: "How It Works", to: "/#how-it-works" },
      { label: "Get Assessment", to: "/#get-assessment" },
    ],
  },
  {
    label: "About Us",
    to: "/about_us",
    sections: [
      { label: "Who We Are", to: "/about_us#who-we-are" },
      { label: "Why Choose IONIC", to: "/about_us#why-choose-ionic" },
      { label: "Our Mission", to: "/about_us#mission" },
      { label: "Our Vision", to: "/about_us#vision" },
      { label: "Trusted By", to: "/about_us#trusted-by" },
    ],
  },
  {
    label: "Divisions",
    to: "/divisions",
    sections: [],
  },
  {
    label: "What We Offer",
    to: "/what_we_offer",
    sections: [
      { label: "Products", to: "/what_we_offer#products" },
      { label: "Services", to: "/what_we_offer#services" },
    ],
  },
  {
    label: "Contact Us",
    to: "/contact_us",
    sections: [
      { label: "Company Details", to: "/contact_us#company-details" },
      { label: "Key Contacts", to: "/contact_us#key-contacts" },
    ],
  },
];

const navLinkClassName =
  "relative pb-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-ionic-orange after:transition-transform";

const mobileNavLinkClassName =
  "block py-1 text-base font-semibold text-foreground transition-colors hover:text-primary";

const StickyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const closeMenu = () => setMenuOpen(false);
  const setHoveredItem = (label: string) => setOpenItem(label);
  const clearHoveredItem = () => setOpenItem(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container-narrow flex items-center justify-between px-4 py-3 md:px-8">
        <img src={ionicLogo} alt="IONIC Logo" className="h-10 md:h-12 object-contain" />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground overflow-visible">
          {navItems.map((item) => (
            <div key={item.label} className="relative flex flex-col items-center pt-0.5" onMouseEnter={() => setHoveredItem(item.label)} onMouseLeave={clearHoveredItem}>
              <NavLink
                to={item.to}
                end={item.end}
                className={navLinkClassName}
                activeClassName="text-foreground after:scale-x-100"
              >
                {item.label}
              </NavLink>
              {openItem === item.label && item.sections?.length ? (
                <div className={`absolute left-1/2 top-full z-50 -translate-x-1/2 rounded-2xl border border-border bg-white p-2 shadow-xl ${item.label === "Divisions" ? "w-80" : "w-48"}`}>
                  {item.sections.map((section) => (
                    <Link
                      key={section.to}
                      to={section.to}
                      onClick={clearHoveredItem}
                      className="block rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {section.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="flex items-center p-3">
          <Link
            to="/#get-assessment"
            className="hidden sm:inline-flex gradient-orange text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Free Consultation
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-foreground">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-background/70 p-3">
              <NavLink
                to={item.to}
                end={item.end}
                className={mobileNavLinkClassName}
                activeClassName="text-primary"
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
              {item.sections?.length ? (
                <div className="mt-2 grid gap-1 border-l border-border pl-4">
                  {item.sections.map((section) => (
                    <Link
                      key={section.to}
                      to={section.to}
                      onClick={closeMenu}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {section.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Link
            onClick={closeMenu}
            to="/#get-assessment"
            className="inline-flex w-full items-center justify-center gradient-orange text-accent-foreground px-5 py-3 rounded-lg text-sm font-semibold"
          >
            Book a Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
