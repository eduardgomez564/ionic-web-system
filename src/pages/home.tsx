import { useEffect, useState } from "react";
import { Building, CalendarCheck, ClipboardCheck, Droplets, Fan, Factory, Hospital, Hotel, Recycle, Settings, ShieldCheck, Wrench, Zap } from "lucide-react";
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

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
        <div className="relative z-10 px-10 md:px-8 pt-24 pb-16 lg:px-24">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 text-center lg:text-left">
              Optimize Your Water Systems. <span className="text-gradient-orange">Prevent Costly Downtime.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl leading-relaxed text-center lg:text-left">
              End-to-end water treatment and industrial maintenance solutions tailored for your facility.
            </p>
            <div className="flex flex-col items-center lg:items-start sm:flex-row gap-4">
              <Link to="/appointment" className="gradient-orange w-[90%] text-accent-foreground px-8 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity shadow-elevated text-center">
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 px-4 md:px-8 bg-muted/50">
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

      <section id="solutions" className="section-padding min-h-screen scroll-mt-24">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-blue">Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive industrial solutions from chemicals and equipment to installation, maintenance, and compliance.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <section id="how-it-works" className="section-padding gradient-hero min-h-screen scroll-mt-24">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">How It <span className="text-gradient-orange">Works</span></h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Three simple steps to optimized water systems and reduced downtime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={step.num} className="relative text-center">
                <div className="w-20 h-20 rounded-full gradient-orange mx-auto mb-6 flex items-center justify-center shadow-elevated">
                  <step.icon className="text-accent-foreground" size={32} />
                </div>
                <span className="text-xs font-bold tracking-widest text-ionic-orange uppercase mb-2 block">Step {step.num}</span>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">{step.desc}</p>
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

      <section id="get-assessment" className="min-h-screen bg-background flex items-center scroll-mt-24">
        <div className="container-narrow px-4 md:px-8 py-16 md:py-24 lg:py-24 w-full grid gap-20 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <iframe
              title="Impact One Nation Industrial Corporation location"
              className="w-full h-[280px] md:h-[480px] rounded-2xl shadow-elevated"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Blk%209%20Lot%206,%20Banuyo%20Rd,%20Pilar%20Village,%20Las%20Pi%C3%B1as%20City&output=embed"
              allowFullScreen
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-center lg:text-left">Start With an <span className="text-gradient-blue">Assessment</span></h2>
            <p className="text-muted-foreground max-w-xl mb-10 text-lg text-center lg:text-left">
              Get a comprehensive assessment of your water treatment systems and a customized plan to reduce costs and improve efficiency.
            </p>
            <Link to="/appointment" className="gradient-blue text-accent-foreground px-10 py-5 rounded-xl text-lg font-bold hover:opacity-90 transition-opacity shadow-elevated inline-flex items-center gap-3">
              <CalendarCheck size={22} />
              Book Your Appointment Now!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
