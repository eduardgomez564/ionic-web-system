import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Droplets,
  Factory,
  Fan,
  Recycle,
  ShieldCheck,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

type Division = {
  id: string;
  title: string;
  shortTitle: string;
  icon: typeof Factory;
  accent: string;
  description: string;
  services: string[];
  applications: string[];
  clients: string[];
  imageFile: string;
};

type MediaAsset = {
  fileName: string;
  src: string;
};

const divisions: Division[] = [
  {
    id: "industrial-cooling-boiler-ro-water-treatment-division",
    title: "Industrial Cooling, Boiler, and RO Water Treatment Division",
    shortTitle: "Industrial Cooling, Boiler, and RO Water Treatment",
    icon: Factory,
    accent: "from-ionic-blue to-ionic-orange",
    description:
      "Providing complete water treatment solutions that improve equipment efficiency, reduce downtime, and extend system lifespan across industrial facilities. This division combines performance chemistry and technical support to keep critical systems stable under demanding operating conditions.",
    services: [
      "Cooling Tower Treatment",
      "Boiler Water Treatment",
      "Reverse Osmosis Systems",
      "Water Quality Monitoring",
      "Corrosion Control",
    ],
    applications: [
      "Manufacturing",
      "Food Processing",
      "Power Generation",
      "Commercial Facilities",
      "Water Utilities",
    ],
    clients: [
      "Excellent Energy Resources, Inc. (EERI)",
      "Linseed Field Corporation",
      "PNOC",
      "San Miguel Global Power",
      "DMCI Power Corporation",
      "Semirara Mining & Power Corporation",
      "CSI Malls",
    ],
    imageFile: "Industrial Cooling, Boiler, and RO Water Treatment Division.png",
  },
  {
    id: "airconditioning-division",
    title: "Airconditioning Division",
    shortTitle: "Airconditioning",
    icon: Fan,
    accent: "from-ionic-orange to-ionic-blue",
    description:
      "Delivering end-to-end airconditioning support for industrial and commercial facilities. The team covers treatment, installation, and maintenance practices that sustain cooling reliability and reduce unexpected failures.",
    services: [
      "Cooling System Water Treatment",
      "Airconditioning Unit Installation",
      "System Cleaning and Chemical Descaling",
      "Parts Replacement and Repair",
      "Performance Maintenance Programs",
    ],
    applications: [
      "Manufacturing",
      "Commercial Facilities",
      "Government Buildings",
      "Museums",
      "Financial Institutions",
    ],
    clients: [
      "Office of the President of the Philippines",
      "National Museum Pambansang Museo",
      "Bangko Sentral ng Pilipinas",
    ],
    imageFile: "Airconditioning Division.png",
  },
  {
    id: "preventive-maintenance-chemicals-division",
    title: "Preventive Maintenance Chemicals Division",
    shortTitle: "Preventive Chemicals",
    icon: Wrench,
    accent: "from-ionic-blue to-sky-600",
    description:
      "Supplying preventive maintenance chemicals and treatment services that protect assets before breakdown happens. This division helps plants preserve uptime through strategic cleaning, conditioning, and commissioning support.",
    services: [
      "Pipe and Line Chemical Cleaning",
      "Passivation Programs",
      "Pre-operational Cleaning",
      "Start-up and Commissioning Chemicals",
      "Equipment Condition Stabilization",
    ],
    applications: [
      "Industrial Estates",
      "Energy Projects",
      "Automated Manufacturing",
      "Plant Maintenance",
      "Utilities",
    ],
    clients: [
      "Excellent Energy Resources, Inc. (EERI)",
      "Linseed Field Corporation",
      "Carmelray Industrial Corporation",
      "Southwest Luzon Power Generation Corporation",
      "Continental",
      "AG&P",
    ],
    imageFile: "Preventive Maintenance Chemicals Division.png",
  },
  {
    id: "wastewater-treatment-division",
    title: "Wastewater Treatment Division",
    shortTitle: "Wastewater Treatment",
    icon: Recycle,
    accent: "from-emerald-600 to-ionic-blue",
    description:
      "Designing and supporting wastewater treatment solutions for compliance, environmental protection, and operational sustainability. Programs are tailored per source profile to deliver consistent effluent quality outcomes.",
    services: [
      "Biological and Physico-chemical Treatment",
      "Filtration and Disinfection Systems",
      "Sludge Management Solutions",
      "Compliance Monitoring Support",
      "Effluent Quality Optimization",
    ],
    applications: [
      "Commercial Complexes",
      "Industrial Wastewater",
      "Municipal Support",
      "Process Facilities",
      "Public Utilities",
    ],
    clients: [
      "Cultural Center of the Philippines",
      "DMCI Power Corporation",
      "CSI Dagupan Mall",
      "Magic Mall Urdaneta",
    ],
    imageFile: "Wastewater Treatment Division.png",
  },
  {
    id: "oil-grease-and-lubricant-division",
    title: "Oil, Grease, and Lubricants Division",
    shortTitle: "Oil, Grease, and Lubricants",
    icon: Droplets,
    accent: "from-amber-500 to-ionic-orange",
    description:
      "Providing high-quality oils, greases, and lubricant solutions matched to specific machine loads and operating conditions. The goal is to lower wear rates, improve reliability, and protect equipment over longer duty cycles.",
    services: [
      "Industrial Oil Recommendations",
      "Grease Selection and Supply",
      "Lubrication Program Planning",
      "Wear and Corrosion Protection",
      "Reliability-focused Product Support",
    ],
    applications: [
      "Heavy Equipment",
      "Continuous Process Lines",
      "Manufacturing",
      "Plant Maintenance",
      "Utilities",
    ],
    clients: [
      "Carmelray Industrial Corporation",
      "Continental",
      "ATEC Automated Technology (Phil.) Inc.",
    ],
    imageFile: "Oil, Grease, and Lubricant Division.png",
  },
  {
    id: "oil-spill-supplies-division",
    title: "Oil Spill Supplies Division",
    shortTitle: "Oil Spill Supplies",
    icon: ShieldCheck,
    accent: "from-slate-700 to-ionic-blue",
    description:
      "Supporting rapid oil spill response with specialized chemicals, sorbents, and containment supplies. This division helps teams protect marine and coastal environments through practical and field-ready cleanup resources.",
    services: [
      "Sorbent Materials and Kits",
      "Marine Oil Dispersant Supply",
      "Containment and Cleanup Support",
      "Emergency Response Consumables",
      "Spill Mitigation Program Assistance",
    ],
    applications: [
      "Shipping and Ports",
      "Marine Operations",
      "Coastal Response Units",
      "Industrial Yards",
      "Environmental Teams",
    ],
    clients: ["San Nicholas Lines, Inc.", "Pherwin Shipping Corp.", "Philippine Coast Guard"],
    imageFile: "Oil Spill Supplies Division.png",
  },
];

const divisionImageModules = import.meta.glob("../assets/ionic-divisions/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const partnershipImageModules = import.meta.glob("../assets/ionic-partnerships/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const divisionImages: MediaAsset[] = Object.entries(divisionImageModules).map(
  ([filePath, src]) => ({
    fileName: filePath.split("/").pop() ?? filePath,
    src,
  })
);

const partnershipImages: MediaAsset[] = Object.entries(partnershipImageModules)
  .sort(([leftPath], [rightPath]) =>
    leftPath.localeCompare(rightPath, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  )
  .map(([filePath, src]) => ({
    fileName: filePath.split("/").pop() ?? filePath,
    src,
  }));

const mobileTabContainerStyles =
  "-mx-3 flex snap-x snap-mandatory gap-2 overflow-x-auto px-3 pb-1 pt-1 md:mx-0 md:grid md:grid-cols-3 md:gap-2 md:overflow-visible md:px-0";

const partnerHoverLabelsByDivision: Record<string, string[]> = {
  "industrial-cooling-boiler-ro-water-treatment-division": [
    "PNOC",
    "San Miguel Global Power",
    "Carmelray Industrial Corporation",
    "Semirara Mining & Power Corporation",
    "CSI Malls",
  ],
  "preventive-maintenance-chemicals-division": [
    "DMCI Power Corporation",
    "Southwest Luzon Power Generation Corporation",
    "Continental",
    "AG&P",
  ],
};

const Divisions = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);
  const [showAllPartners, setShowAllPartners] = useState(false);

  const showcaseRef = useRef<HTMLElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeDivision = divisions[activeDivisionIndex];
  const activeDivisionImage = divisionImages.find(
    (image) => image.fileName === activeDivision.imageFile
  );

  const activePartnerImages = partnershipImages.filter((image) => {
    const match = image.fileName.match(/^(\d+)/);
    return Number.parseInt(match?.[1] ?? "0", 10) === activeDivisionIndex + 1;
  });

  const visiblePartners = showAllPartners
    ? activePartnerImages
    : activePartnerImages.slice(0, 8);
  const hasMorePartners = activePartnerImages.length > 8;
  const visiblePartnerNames = visiblePartners.map(
    (_, index) =>
      partnerHoverLabelsByDivision[activeDivision.id]?.[index] ??
      activeDivision.clients[index] ??
      `Client ${index + 1}`
  );

  const activateDivision = (index: number, options?: { updateHash?: boolean }) => {
    const updateHash = options?.updateHash ?? true;

    if (index === activeDivisionIndex) {
      return;
    }

    setShowAllPartners(false);
    setActiveDivisionIndex(index);

    if (updateHash) {
      navigate(`/divisions#${divisions[index].id}`, { replace: true });
    }
    // Ensure the page scrolls to the showcase (image + details) when a division is activated
    // so the user sees the division header and image instead of content below it.
    window.requestAnimationFrame(() => {
      const el = showcaseRef.current;
      if (!el) return;
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl?.getBoundingClientRect().height ?? 0;
      const extraOffset = 12; // little breathing room
      const target = el.getBoundingClientRect().top + window.scrollY - (headerHeight + extraOffset);
      window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
    });
  };

  const nextDivision = () => {
    const nextIndex = (activeDivisionIndex + 1) % divisions.length;
    activateDivision(nextIndex);
  };

  const previousDivision = () => {
    const prevIndex = (activeDivisionIndex - 1 + divisions.length) % divisions.length;
    activateDivision(prevIndex);
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const isHorizontal = window.matchMedia("(max-width: 767px)").matches;
    const nextKey = isHorizontal ? "ArrowRight" : "ArrowDown";
    const prevKey = isHorizontal ? "ArrowLeft" : "ArrowUp";

    let nextIndex = index;

    if (event.key === nextKey || event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % divisions.length;
    } else if (
      event.key === prevKey ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowUp"
    ) {
      nextIndex = (index - 1 + divisions.length) % divisions.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = divisions.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    tabRefs.current[nextIndex]?.focus();
    activateDivision(nextIndex, { updateHash: true });
  };

  useEffect(() => {
    if (!hash) {
      return;
    }

    const hashId = decodeURIComponent(hash.slice(1));
    const divisionIndex = divisions.findIndex((division) => division.id === hashId);
    if (divisionIndex === -1) {
      return;
    }

    setShowAllPartners(false);
    setActiveDivisionIndex(divisionIndex);

    const frame = window.requestAnimationFrame(() => {
      const el = showcaseRef.current;
      if (!el) return;
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl?.getBoundingClientRect().height ?? 0;
      const extraOffset = 12;
      const target = el.getBoundingClientRect().top + window.scrollY - (headerHeight + extraOffset);
      window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <>
      <StickyHeader />

      <section
        id="divisions-overview"
        className="bg-background px-4 pb-10 pt-24 md:px-8 md:pb-12 md:pt-28 scroll-mt-24"
      >
        <div className="container-narrow mx-auto w-full">
          <div className="mb-5 space-y-2.5 md:mb-6 text-center">
            <h1 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              Our <span className="text-gradient-blue">Divisions</span>
            </h1>
            <p className="max-w-none text-center text-sm leading-relaxed text-muted-foreground md:text-base">
              Our industrial solutions portfolio is organized into six focused
              divisions that support reliability, compliance, and operational
              performance.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-3 md:p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Select a Division to Explore
              </p>
            </div>

            <div role="tablist" aria-label="Company divisions" className={mobileTabContainerStyles}>
              {divisions.map((division, index) => {
                const isActive = index === activeDivisionIndex;
                const Icon = division.icon;

                return (
                  <button
                    key={division.id}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    id={`${division.id}-tab`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="division-showcase"
                    tabIndex={isActive ? 0 : -1}
                    type="button"
                    onClick={() => activateDivision(index, { updateHash: true })}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    className={`group min-w-[190px] min-h-[80px] snap-start rounded-xl border p-2.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card md:min-w-0 ${
                      isActive
                        ? "border-ionic-blue bg-white text-foreground shadow-elevated ring-1 ring-ionic-orange/20"
                        : "border-border bg-card text-foreground hover:border-ionic-blue/35"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-primary-foreground shadow-sm transition-transform ${
                          index % 2 === 0 ? "gradient-cta" : "gradient-hero"
                        } ${isActive ? "ring-2 ring-ionic-orange/20" : ""}`}
                      >
                        <Icon size={16} className="text-primary-foreground" />
                      </span>
                      <span className="min-w-0">
                        <span
                          className={`block text-[10px] font-semibold uppercase tracking-[0.18em] ${
                            isActive ? "text-ionic-blue" : "text-muted-foreground"
                          }`}
                        >
                          Division {index + 1}
                        </span>
                        <span className="block text-xs font-semibold leading-snug md:text-sm">
                          {division.title}
                        </span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <article
            ref={showcaseRef}
            id="division-showcase"
            role="tabpanel"
            aria-labelledby={`${activeDivision.id}-tab`}
            className="mt-4 rounded-2xl border border-border bg-background p-3 md:p-4 relative"
          >
            {/* Left Arrow */}
            <button
              onClick={previousDivision}
              className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-border text-muted-foreground hover:text-ionic-blue hover:border-ionic-blue transition-all duration-300 shadow-elevated hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextDivision}
              className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-border text-muted-foreground hover:text-ionic-blue hover:border-ionic-blue transition-all duration-300 shadow-elevated hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDivision.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.34, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className="grid gap-4 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] lg:items-stretch min-h-[600px]">
                  <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card lg:h-full">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${activeDivision.id}-hero`}
                        src={activeDivisionImage?.src}
                        alt={activeDivision.title}
                        loading="lazy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.34, ease: "easeInOut" }}
                        className="h-[240px] w-full object-cover md:h-[300px] lg:h-full lg:min-h-[600px]"
                      />
                    </AnimatePresence>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-4 md:p-5 lg:flex lg:flex-col lg:justify-between lg:h-full lg:min-h-[600px]">
                    <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                          Division {activeDivisionIndex + 1}
                        </p>
                        <h2 className="text-xl font-bold leading-tight text-foreground md:text-2xl">
                          {activeDivision.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-justify text-sm leading-relaxed text-muted-foreground md:text-base">
                      {activeDivision.description}
                    </p>

                    <div className="mt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        Key Services
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {activeDivision.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <Check size={15} className="mt-0.5 shrink-0 text-ionic-blue" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Trusted By moved into the right column so logos appear beside the image */}
                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        Trusted By
                      </p>

                      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3 py-1 justify-items-stretch overflow-visible">
                        {visiblePartners.map((partnerImage, index) => (
                          <figure
                            key={partnerImage.fileName}
                            className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-transparent p-2 min-h-[130px]"
                          >
                            <img
                              src={partnerImage.src}
                              alt={`${activeDivision.shortTitle} partner ${index + 1}`}
                              loading="lazy"
                              className="h-full w-full object-contain object-center"
                            />
                            <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold text-foreground opacity-0 shadow-elevated transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5">
                              {visiblePartnerNames[index]}
                            </span>
                          </figure>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trusted By moved into right column; bottom block removed */}
              </motion.div>
            </AnimatePresence>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Divisions;
