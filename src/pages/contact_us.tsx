import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Phone, Smartphone, Mail, Facebook } from "lucide-react";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const ContactUs = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;
    const frame = window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <>
      <StickyHeader />
      <main className="min-h-screen bg-background pt-28 pb-20 px-4 md:px-8">
        <div className="container-narrow mx-auto max-w-4xl space-y-10">

          {/* Header */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3">
              Contact <span className="text-gradient-blue">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Reach out for consultations, service requests, or product inquiries. Our team is ready to assist you.
            </p>
          </div>

          {/* Main Contact Container */}
          <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
            {/* Location */}
            <div className="mb-6 pb-6 border-b border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Location</p>
              <div className="flex gap-4">
                <div className="h-11 w-11 flex-shrink-0 rounded-xl bg-gradient-to-br from-ionic-blue to-ionic-blue/60 flex items-center justify-center shadow-md">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-0.5">Office Address</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Blk 9 Lot 6, Banuyo Rd, Pilar Village,<br />Las Piñas City
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="mb-6 pb-6 border-b border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Phone Numbers</p>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Landline */}
                <div className="flex gap-4">
                  <div className="h-11 w-11 flex-shrink-0 rounded-xl bg-gradient-to-br from-ionic-blue to-ionic-blue/60 flex items-center justify-center shadow-md">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Landline</p>
                    <div className="space-y-1">
                      {["(632) 8806 2048", "(632) 8805 2959", "(632) 8800 9104"].map((num) => (
                        <p key={num} className="text-muted-foreground">{num}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex gap-4">
                  <div className="h-11 w-11 flex-shrink-0 rounded-xl bg-gradient-to-br from-ionic-orange to-ionic-orange/60 flex items-center justify-center shadow-md">
                    <Smartphone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Mobile</p>
                    <div className="space-y-1">
                      {[{ network: "Globe", number: "0917 854 9790" }, { network: "Smart", number: "0947 801 7594" }].map((m) => (
                        <p key={m.number} className="text-muted-foreground">
                          <span className="font-medium text-foreground mr-2">{m.network}</span>{m.number}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Online & Social */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Online & Social</p>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="h-11 w-11 flex-shrink-0 rounded-xl bg-gradient-to-br from-ionic-orange to-ionic-orange/60 flex items-center justify-center shadow-md">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Email</p>
                    <a
                      href="mailto:impactonenation@gmail.com"
                      className="text-muted-foreground hover:text-ionic-blue transition-colors break-all"
                    >
                      impactonenation@gmail.com
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex gap-4">
                  <div className="h-11 w-11 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#1877F2] to-[#1877F2]/60 flex items-center justify-center shadow-md">
                    <Facebook className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Facebook</p>
                    <a
                      href="https://www.facebook.com/impactonenation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-ionic-blue transition-colors"
                    >
                      facebook.com/impactonenation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default ContactUs;
