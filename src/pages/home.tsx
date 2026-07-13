import { useEffect, useRef, useState } from "react";
import { Building, CalendarCheck, ClipboardCheck, Droplets, Fan, Factory, Hospital, Hotel, MapPin, Recycle, Settings, ShieldCheck, Wrench, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const heroSlides = [
  { image: heroBg1, alt: "Industrial water treatment facility" },
  { image: heroBg2, alt: "Water system maintenance and corrosion control equipment" },
  { image: heroBg3, alt: "Commercial water treatment and filtration infrastructure" },
  { image: heroBg4, alt: "Industrial operations and facility protection services" },
];

const clients = [
  { icon: Factory, label: "Manufacturing Plants" },
  { icon: Building, label: "Commercial Buildings" },
  { icon: Zap, label: "Power Plants" },
  { icon: Hotel, label: "Hotels & Resorts" },
  { icon: Hospital, label: "Hospitals" },
];

const solutions = [
  {
    icon: Droplets,
    title: "Water treatment, done right",
    desc: "Cooling towers, boilers, and RO systems treated with precision chemicals, keeping your water clean, safe, and efficient.",
    color: "gradient-cta",
  },
  {
    icon: ShieldCheck,
    title: "Corrosion stopped before it starts",
    desc: "Our VCI and chemical inhibitor programs protect metal surfaces, pipes, and equipment from rust and corrosion. No shutdowns needed.",
    color: "gradient-hero",
  },
  {
    icon: Recycle,
    title: "Wastewater that meets compliance",
    desc: "From design to installation to monitoring, we build wastewater systems that meet regulatory discharge standards and protect the environment.",
    color: "gradient-cta",
  },
  {
    icon: Wrench,
    title: "Preventive maintenance on autopilot",
    desc: "Tank cleaning, pipe passivation, pre-operational chemical cleaning. We keep your plant running before problems ever arise.",
    color: "gradient-hero",
  },
  {
    icon: Fan,
    title: "Air conditioning that stays reliable",
    desc: "Installation, servicing, and water treatment of centralized AC and cooling systems for commercial and industrial facilities of any scale.",
    color: "gradient-cta",
  },
  {
    icon: Factory,
    title: "Lubrication and oil spill response",
    desc: "Premium greases, oils, and lubricants for heavy industry plus specialized marine oil dispersants for fast, effective spill containment.",
    color: "gradient-hero",
  },
];

const steps = [
  { num: "01", icon: CalendarCheck, title: "Book Consultation", desc: "Schedule a free consultation with our water treatment experts." },
  { num: "02", icon: ClipboardCheck, title: "Site Assessment & Proposal", desc: "We conduct a thorough on-site assessment and deliver a customized proposal." },
  { num: "03", icon: Settings, title: "Implementation & Support", desc: "We implement the solution and provide ongoing maintenance and support." },
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSolution, setActiveSolution] = useState(0);
  const solutionsScrollRef = useRef<HTMLDivElement>(null);
  const { hash } = useLocation();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!hash) {
      return;
    }

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSolutionsScroll = () => {
    const el = solutionsScrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveSolution(Math.min(Math.max(index, 0), solutions.length - 1));
  };

  const scrollToSolution = (index: number) => {
    const el = solutionsScrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <>
      {/* Marquee keyframes for the mobile "Trusted across industries" ticker */}
      <style>{`
        @keyframes ionic-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ionic-marquee-track {
          animation: ionic-marquee 20s linear infinite;
        }
      `}</style>

      {/* HERO — now min-h-[100dvh] on mobile (true one-screen fit, was 90vh which left a gap).
          Desktop keeps the exact original 90vh via md:min-h-[90vh]. */}
      <section className="relative min-h-[100dvh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              aria-hidden={index !== activeSlide}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
              width={1920}
              height={1080}
            />
          ))}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(8, 15, 31, 1) 0%, rgba(8, 15, 31, 0.96) 20%, rgba(8, 15, 31, 0.78) 40%, rgba(8, 15, 31, 0.4) 95%, rgba(8, 15, 31, 0) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 px-10 md:px-8 pt-24 pb-24 md:pb-16 lg:px-24">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 text-center lg:text-left">
              Optimize Your Water Systems. <span className="text-gradient-orange">Prevent Costly Downtime.</span>
            </h1>
            <p className="text-lg text-justify md:text-xl text-primary-foreground/80 mb-10 max-w-xl leading-relaxed lg:text-left">
              End-to-end water treatment and industrial maintenance solutions tailored for your facility.
            </p>
            <div className="flex flex-col items-center lg:items-start sm:flex-row gap-4">
              <Link to="/appointment" className="gradient-orange w-[90%] text-accent-foreground px-8 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity shadow-elevated text-center">
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile-only: trusted-industries marquee, merged into the hero visually */}
        <div className="md:hidden absolute inset-x-0 bottom-0 z-20 overflow-hidden bg-[#080f1f]/90 backdrop-blur-sm border-t border-white/10 py-2.5">
          <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-1.5">
            Trusted across industries
          </p>
          <div className="overflow-hidden">
            <div className="flex w-max gap-8 ionic-marquee-track">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="flex items-center gap-1.5 text-white/90 shrink-0">
                  <client.icon size={16} />
                  <span className="text-xs font-medium whitespace-nowrap">{client.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desktop-only: original static trusted-industries section, unchanged */}
      <section className="hidden md:block py-3 px-4 md:px-8 bg-muted/50">
        <div className="container-narrow">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Trusted across industries</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {clients.map((client) => (
              <div key={client.label} className="flex items-center gap-2 text-muted-foreground">
                <client.icon size={20} />
                <span className="text-sm font-medium">{client.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS — mobile: one full-width card at a time (no partial card poking past the edge),
          swipeable, with dot indicators, vertically centered to fill the 100dvh screen.
          Desktop: exact original grid, untouched, in its own hidden md:grid block. */}
      <section id="solutions" className="section-padding min-h-[100dvh] md:min-h-screen flex flex-col md:block scroll-mt-24">
        <div className="container-narrow w-full flex-1 flex flex-col justify-center md:flex-none md:block">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-4xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Our <span className="text-gradient-blue">Solutions</span>
            </h2>
            <p className="text-base md:text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive industrial solutions from chemicals and equipment to installation, maintenance, and compliance.
            </p>
          </div>

          {/* Mobile-only slider */}
          <div className="md:hidden">
            <div
              ref={solutionsScrollRef}
              onScroll={handleSolutionsScroll}
              className="flex overflow-x-auto snap-x snap-mandatory"
              style={{ scrollbarWidth: "none" }}
            >
              {solutions.map((solution) => (
                <div key={solution.title} className="w-full shrink-0 snap-center px-0.5">
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border min-h-[260px] flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-14 h-14 rounded-lg ${solution.color} flex items-center justify-center shrink-0`}>
                        <solution.icon className="text-primary-foreground" size={26} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground leading-snug">{solution.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base text-justify">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-5">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollToSolution(index)}
                  aria-label={`Go to solution ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${activeSolution === index ? "w-6 bg-ionic-orange" : "w-2 bg-muted-foreground/30"}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop-only: exact original grid */}
          <div className="hidden md:grid gap-4 text-justify sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div key={solution.title} className="bg-card rounded-lg p-4 shadow-card hover:shadow-elevated transition-all group border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <solution.icon className="text-primary-foreground" size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{solution.title}</h3>
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — mobile uses stacked cards with full descriptions; desktop keeps the original grid. */}
      <section id="how-it-works" className="section-padding gradient-hero md:min-h-screen scroll-mt-24">
        <div className="container-narrow w-full">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-4xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
              How It <span className="text-gradient-orange">Works</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Three simple steps to optimized water systems and reduced downtime.
            </p>
          </div>

          <div className="md:hidden space-y-4 mb-8">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-elevated backdrop-blur-sm"
              >
                <div className="flex items-start gap-4 pl-2">
                  <div className="w-14 h-14 rounded-2xl gradient-orange flex items-center justify-center shadow-elevated shrink-0">
                    <step.icon className="text-accent-foreground w-7 h-7" size={28} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-ionic-orange uppercase">
                        Step {step.num}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary-foreground leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:grid gap-6 md:grid-cols-3 md:gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={step.num} className="relative flex items-center gap-4 text-left md:block md:text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-orange flex items-center justify-center shadow-elevated shrink-0 md:mx-auto md:mb-6">
                  <step.icon className="text-accent-foreground w-8 h-8 md:w-8 md:h-8" size={32} />
                </div>
                <div className="md:contents">
                  <span className="text-xs font-bold tracking-widest text-ionic-orange uppercase mb-1 md:mb-2 block">Step {step.num}</span>
                  <h3 className="text-lg md:text-lg font-bold text-primary-foreground md:mb-2">{step.title}</h3>
                  <p className="hidden md:block text-sm text-primary-foreground/60 leading-relaxed">{step.desc}</p>
                </div>
                {index < 2 && <div className="hidden md:block absolute top-10 -right-4 w-8 text-primary-foreground/20 text-3xl">→</div>}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/appointment" className="gradient-orange text-accent-foreground px-8 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity shadow-elevated inline-flex items-center gap-2">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* START WITH AN ASSESSMENT — unchanged from previous revision */}
      <section id="get-assessment" className="min-h-screen bg-background flex items-center scroll-mt-24">
        <div className="container-narrow px-4 md:px-8 py-10 md:py-24 lg:py-24 w-full">
          <div className="md:hidden text-center">
            <h2 className="text-4xl font-extrabold text-foreground mb-3">
              Start With an <span className="text-gradient-blue">Assessment</span>
            </h2>
            <p className="text-muted-foreground text-justify text-base leading-relaxed mb-5">
              Get a comprehensive assessment of your water treatment systems and a customized plan.
            </p>
            <iframe
              title="Impact One Nation Industrial Corporation location"
              className="w-full h-[336px] rounded-2xl shadow-elevated mb-5"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Blk%209%20Lot%206,%20Banuyo%20Rd,%20Pilar%20Village,%20Las%20Pi%C3%B1as%20City&output=embed"
              allowFullScreen
            />
            <div className="grid gap-3 text-left">
              <div className="flex gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pinned h-4 w-4 shrink-0 mt-0.5" aria-hidden="true"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path><circle cx="12" cy="8" r="2"></circle><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path></svg>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700/80">Our Office</p>
                  <h3 className="text-base font-semibold text-foreground">Impact One Nation Industrial Corporation</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">Blk 9 Lot 6, Banuyo Rd, Pilar Village, Las Piñas City</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock3 lucide-clock-3 h-4 w-4 shrink-0 mt-0.5" aria-hidden="true"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700/80">Office Hours</p>
                  <h3 className="text-base font-semibold text-foreground">Monday to Friday</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">8:00 AM to 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:grid gap-20 md:grid-cols-2 items-center">
            <div className="order-1">
              <iframe
                title="Impact One Nation Industrial Corporation location"
                className="w-full h-[480px] rounded-2xl shadow-elevated"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Blk%209%20Lot%206,%20Banuyo%20Rd,%20Pilar%20Village,%20Las%20Pi%C3%B1as%20City&output=embed"
                allowFullScreen
              />
            </div>
            <div className="order-2 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 lg:text-left">
                Start With an <span className="text-gradient-blue">Assessment</span>
              </h2>
              <p className="text-muted-foreground text-justify max-w-xl mb-10 text-lg lg:text-left">
                Get a comprehensive assessment of your water treatment systems and a customized plan.
              </p>
              <div className="grid gap-4 text-left">
                <div className="flex gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pinned h-4 w-4" aria-hidden="true"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path><circle cx="12" cy="8" r="2"></circle><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path></svg>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700/80">Our Office</p>
                    <h3 className="text-lg font-semibold text-foreground">Impact One Nation Industrial Corporation</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">Blk 9 Lot 6, Banuyo Rd, Pilar Village, Las Piñas City</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock3 lucide-clock-3 h-4 w-4" aria-hidden="true"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700/80">Office Hours</p>
                    <h3 className="text-lg font-semibold text-foreground">Monday to Friday</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">8:00 AM to 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;