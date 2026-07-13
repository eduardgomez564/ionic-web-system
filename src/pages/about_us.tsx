import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import heroBg3 from "@/assets/hero-bg-3.jpg";

// ── Static imports so Vite fingerprints and bundles these in production ──
import p1A from "@/assets/ionic-partnerships/1A.png";
import p1B from "@/assets/ionic-partnerships/1B.png";
import p1C from "@/assets/ionic-partnerships/1C.png";
import p1D from "@/assets/ionic-partnerships/1D.png";
import p1E from "@/assets/ionic-partnerships/1E.png";
import p2A from "@/assets/ionic-partnerships/2A.png";
import p2B from "@/assets/ionic-partnerships/2B.png";
import p2C from "@/assets/ionic-partnerships/2C.png";
import p3A from "@/assets/ionic-partnerships/3A.png";
import p3B from "@/assets/ionic-partnerships/3B.png";
import p3C from "@/assets/ionic-partnerships/3C.png";
import p3D from "@/assets/ionic-partnerships/3D.png";
import p4A from "@/assets/ionic-partnerships/4A.png";
import p4D from "@/assets/ionic-partnerships/4D.png";
import p5C from "@/assets/ionic-partnerships/5C.png";
import p6A from "@/assets/ionic-partnerships/6A.png";
import p6B from "@/assets/ionic-partnerships/6B.png";
import p6C from "@/assets/ionic-partnerships/6C.png";

const whyChooseCards = [
  {
    title: "Proven Experience",
    description:
      "With nearly three decades of dedicated service in plant preventive maintenance and water treatment, we possess the deep technical expertise and industry experience required to solve your facility's most complex operational challenges.",
  },
  {
    title: "Comprehensive & Customized Solutions",
    description:
      "From chemical formulations to advanced equipment deployment, we deliver tailored programs designed around your facility's unique operational requirements.",
  },
  {
    title: "Trusted by Elite Entities",
    description:
      "Our high standards of performance and reliability make us the choice of prominent clients, including Malacañang, the National Museum, and major power generation networks..",
  },
  {
    title: "Eco-Conscious Excellence",
    description:
      "We integrate advanced wastewater management and innovative green technologies that optimize plant efficiency while prioritizing environmental care and regulatory compliance.",
  },
];

const trustedClients = [
  { name: "PNOC The Energy Comp.", img: p1A },
  { name: "San Miguel Global Power", img: p1B },
  { name: "DMCI Power Corp.", img: p1C },
  { name: "Semirara Mining & Power Corp.", img: p1D },
  { name: "CSi Malls", img: p1E },
  { name: "Office of the President of the Philippines", img: p2A },
  { name: "National Museum", img: p2B },
  { name: "Bangko Sentral ng Pilipinas", img: p2C },
  { name: "Carmelray Industrial Corp.", img: p3A },
  { name: "Southwest Luzon Power Generation Corp.", img: p3B },
  { name: "Continental AG", img: p3C },
  { name: "AG&P Refueled. To You.", img: p3D },
  { name: "Cultural Center of the Philippines", img: p4A },
  { name: "Magic Mall Urdaneta", img: p4D },
  { name: "Automated Technology Phil. Inc.", img: p5C },
  { name: "San Nicholas Lines, Inc.", img: p6A },
  { name: "Pherwin Shipping Corp.", img: p6B },
  { name: "Philippine Coast Guard", img: p6C },
];

const AboutUs = () => {
  const { hash } = useLocation();

  const [activeWhyChoose, setActiveWhyChoose] = useState(0);
  const whyChooseScrollRef = useRef<HTMLDivElement>(null);

  const [activeMissionCard, setActiveMissionCard] = useState(0);
  const missionScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;
    const frame = window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  const handleWhyChooseScroll = () => {
    const el = whyChooseScrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveWhyChoose(Math.min(Math.max(index, 0), whyChooseCards.length - 1));
  };

  const scrollToWhyChoose = (index: number) => {
    const el = whyChooseScrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  const handleMissionScroll = () => {
    const el = missionScrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveMissionCard(Math.min(Math.max(index, 0), 1));
  };

  const scrollToMissionCard = (index: number) => {
    const el = missionScrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
  <>
  <StickyHeader />

    {/* ── 1. WHO WE ARE — light bg. Not a repeating card list, so no carousel here:
        just tightened mobile spacing/sizing. Desktop untouched via md: overrides. ── */}
    <section
      id="who-we-are"
      className="section-padding min-h-[100dvh] md:min-h-screen bg-background flex items-center scroll-mt-24"
    >
      <div className="container-narrow pt-6 md:pt-10 w-full grid gap-6 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center align-middle">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-ionic-blue/15 via-transparent to-ionic-orange/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-elevated">
            <img
              src={heroBg3}
              alt="Industrial plant water system equipment"
              className="h-[200px] md:h-full w-full object-cover md:min-h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
          </div>
        </div>
        <div>
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 text-foreground leading-tight">
            Who <span className="text-gradient-blue">We</span> Are
          </h1>
          <div className="space-y-4 md:space-y-6 text-justify text-sm md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
            <p>
              Founded in 1996 as Ionic Chemicals & Industrial Corporation (ICIC)
              and rebranded as <strong>Impact One Nation Industrial Corporation (IONIC) </strong> 
              in 2015, we have established ourselves as one of the key players
              in the field of plant preventive maintenance and water treatment
              for boilers and cooling systems for nearly three decades. Now, we
              have added waste water treatment solution systems to our expertise
              to cater to a wider set of clients and their needs.
            </p>
            <p>
              At IONIC, we are committed to delivering comprehensive and
              innovative treatment programs tailored to each client's unique
              requirements. Our comprehensive range of services cater to
              different industries ranging from manufacturing to municipal
              sectors.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── 2. WHY CHOOSE IONIC — dark bg. Mobile: one full-width card at a time (swipe + dots),
        same pattern as the Solutions slider in Home.tsx. Desktop: exact original 4-col grid,
        untouched, in its own hidden md:grid block. ── */}
    <section
      id="why-choose-ionic"
      className="section-padding min-h-[100dvh] md:min-h-screen gradient-hero flex flex-col md:flex-row md:items-center scroll-mt-24"
    >
      <div className="container-narrow w-full flex-1 flex flex-col justify-center md:flex-none md:block">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-4xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
            Why Choose
            <span className="text-gradient-orange"> IONIC </span> ?
          </h2>
          <p className="text-primary-foreground/70 max-w-3xl mx-auto text-sm md:text-base">
            Our work is centered on practical results, strong technical support,
            and programs that help your operations stay stable over time.
          </p>
        </div>

        {/* Mobile-only slider */}
        <div className="md:hidden">
          <div
            ref={whyChooseScrollRef}
            onScroll={handleWhyChooseScroll}
            className="flex overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {whyChooseCards.map((card) => (
              <div key={card.title} className="w-full shrink-0 snap-center px-0.5">
                <div className="relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 pl-7 shadow-card min-h-[280px] justify-center">
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-ionic-blue to-ionic-orange" />
                  <h3 className="text-xl font-bold text-primary-foreground mb-3 text-center leading-snug">{card.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed text-justify text-base">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-5">
            {whyChooseCards.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToWhyChoose(index)}
                aria-label={`Go to reason ${index + 1}`}
                className={`h-2 rounded-full transition-all ${activeWhyChoose === index ? "w-6 bg-ionic-orange" : "w-2 bg-white/20"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop-only: exact original grid */}
        <div className="hidden md:grid gap-5 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
          {whyChooseCards.map((card) => (
            <div
              key={card.title}
              className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/5 p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="mb-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-ionic-blue to-ionic-orange" />
              <h3 className="text-lg font-bold text-primary-foreground mb-3 text-center leading-snug">
                {card.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed text-justify text-sm md:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── 3. MISSION & VISION — light bg. Mobile: swipe between Mission / Vision as one full-width
        card at a time. Desktop: exact original 2-col grid, untouched, in its own hidden md:grid block. ── */}
    <section
      id="mission"
      className="section-padding min-h-[100dvh] md:min-h-screen bg-background flex flex-col md:flex-row md:items-center scroll-mt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ionic-blue/5 via-transparent to-ionic-orange/5" />
      <div className="container-narrow w-full flex-1 flex flex-col justify-center md:flex-none md:block relative z-10">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            <span className="text-gradient-blue">Mission</span> &{" "}
            <span className="text-gradient-orange">Vision</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">The foundational values that define how we operate, serve our clients, and uphold our standards across every project and partnership.</p>
        </div>

        {/* Mobile-only slider: Mission, then Vision */}
        <div className="md:hidden">
          <div
            ref={missionScrollRef}
            onScroll={handleMissionScroll}
            className="flex overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="w-full shrink-0 snap-center px-0.5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card min-h-[300px] flex flex-col justify-center">
                <div className="mb-4 flex justify-center items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-ionic-blue to-ionic-blue/60 flex items-center justify-center shadow-lg shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Our <span className="text-gradient-blue">Mission</span>
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base text-justify">
                  Our mission is to provide comprehensive water treatment solutions
                  and proactive plant preventive maintenance services that ensure
                  the reliability, efficiency, and sustainability of our clients'
                  operations. Through comprehensive and innovative treatment
                  solutions, we strive to exceed expectations of our clients and
                  contribute to the well-being of communities and ecosystems
                  worldwide.
                </p>
              </div>
            </div>
            <div className="w-full shrink-0 snap-center px-0.5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card min-h-[300px] flex flex-col justify-center">
                <div className="mb-4 flex justify-center items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-ionic-orange to-ionic-orange/60 flex items-center justify-center shadow-lg shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Our <span className="text-gradient-orange">Vision</span>
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base text-justify">
                  Our vision is to be the premier provider of integrated water
                  treatment and plant preventive maintenance services, setting the
                  standard for excellence and innovation in our industry. By
                  leveraging innovative treatment solutions and fostering a culture
                  of continuous improvement, we strive to empower our clients to
                  thrive in a sustainable and resilient world, where the health of
                  our planet and our communities is prioritized for generations to
                  come.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-5">
            {[0, 1].map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToMissionCard(index)}
                aria-label={index === 0 ? "Go to Mission" : "Go to Vision"}
                className={`h-2 rounded-full transition-all ${activeMissionCard === index ? "w-6 bg-ionic-orange" : "w-2 bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop-only: exact original grid */}
        <div className="hidden md:grid gap-8 lg:grid-cols-2">
          <div
            id="mission-card"
            className="group relative rounded-2xl border border-border bg-card p-10 shadow-card"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-br from-ionic-blue/20 via-transparent to-transparent opacity-0" />
            <div className="mb-6 flex justify-center items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-ionic-blue to-ionic-blue/60 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Our <span className="text-gradient-blue">Mission</span>
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base text-justify">
              Our mission is to provide comprehensive water treatment solutions
              and proactive plant preventive maintenance services that ensure
              the reliability, efficiency, and sustainability of our clients'
              operations. Through comprehensive and innovative treatment
              solutions, we strive to exceed expectations of our clients and
              contribute to the well-being of communities and ecosystems
              worldwide.
            </p>
          </div>
          <div
            id="vision"
            className="group relative rounded-2xl border border-border bg-card p-10 shadow-card"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-br from-ionic-orange/20 via-transparent to-transparent opacity-0" />
            <div className="mb-6 flex justify-center items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-ionic-orange to-ionic-orange/60 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Our <span className="text-gradient-orange">Vision</span>
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base text-justify">
              Our vision is to be the premier provider of integrated water
              treatment and plant preventive maintenance services, setting the
              standard for excellence and innovation in our industry. By
              leveraging innovative treatment solutions and fostering a culture
              of continuous improvement, we strive to empower our clients to
              thrive in a sustainable and resilient world, where the health of
              our planet and our communities is prioritized for generations to
              come.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── 4. TRUSTED BY — dark bg. Already compact (horizontal marquee rows, not a stacked list),
        so just the min-h swap + a bit of mobile spacing tightened. Desktop untouched. ── */}
    <section
      id="trusted-by"
      className="section-padding min-h-[100dvh] md:min-h-screen gradient-hero flex items-center scroll-mt-24 overflow-hidden"
    >
      <div className="w-full">
        <div className="text-center mb-6 md:mb-12 container-narrow mx-auto">
          <h2 className="text-4xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
            <span className="text-gradient-orange">Trusted</span> By Industry Leaders
          </h2>
          <p className="text-primary-foreground/70 max-w-3xl mx-auto text-sm md:text-base">
            Our relationships are built on repeat service, dependable support,
            and a reputation for delivering results that keep clients coming back.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Row 1 — left */}
          <div className="flex gap-5 mb-5 animate-marquee" style={{ width: "max-content" }}>
            {[...trustedClients, ...trustedClients].map((client, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 w-60 hover:bg-white/10 transition-colors"
              >
                <img src={client.img} alt={client.name} style={{ height: "5rem" }} className="w-full object-contain" />
                <p className="text-primary-foreground/80 font-medium text-center text-sm leading-snug">{client.name}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — right */}
          <div className="flex gap-5 animate-marquee-reverse" style={{ width: "max-content" }}>
            {[...trustedClients.slice().reverse(), ...trustedClients.slice().reverse()].map((client, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 w-60 hover:bg-white/10 transition-colors"
              >
                <img src={client.img} alt={client.name} style={{ height: "5rem" }} className="w-full object-contain" />
                <p className="text-primary-foreground/80 font-medium text-center text-sm leading-snug">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
	<Footer />
    <BackToTop />
  </>
  );
};

export default AboutUs;