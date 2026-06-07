import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
} from "lucide-react";

import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

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

  // Track which divisions are expanded. Start with the first one expanded by default.
  const [expandedDivisions, setExpandedDivisions] = useState<Record<string, boolean>>({
    "industrial-cooling-boiler-ro-water-treatment-division": true,
  });

  // Track showAllPartners state independently for each division
  const [showAllPartners, setShowAllPartners] = useState<Record<string, boolean>>({});

  const toggleDivision = (id: string) => {
    setExpandedDivisions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const togglePartners = (id: string) => {
    setShowAllPartners((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    if (!hash) {
      return;
    }

    const hashId = decodeURIComponent(hash.slice(1));
    const targetDivision = divisions.find((division) => division.id === hashId);
    if (!targetDivision) {
      return;
    }

    // Auto-expand the target division
    setExpandedDivisions((prev) => ({ ...prev, [hashId]: true }));

    const frame = window.requestAnimationFrame(() => {
      const el = document.getElementById(hashId);
      if (!el) return;
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl?.getBoundingClientRect().height ?? 0;
      const extraOffset = 20;
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
        className="bg-background px-4 pb-20 pt-24 md:px-8 md:pb-24 md:pt-28"
      >
        <div className="container-narrow mx-auto w-full space-y-12">
          {/* Header */}
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Our <span className="text-gradient-blue">Divisions</span>
            </h1>
            <p className="max-w-2xl mx-auto text-center text-sm leading-relaxed text-muted-foreground md:text-base">
              Our industrial solutions portfolio is organized into six focused divisions that support reliability, compliance, and operational performance. Explore each division below.
            </p>
          </div>

          {/* List of Divisions as Collapsible Containers */}
          <div className="space-y-6">
            {divisions.map((division, index) => {
              const isExpanded = !!expandedDivisions[division.id];
              const Icon = division.icon;

              const divisionImage = divisionImages.find(
                (image) => image.fileName === division.imageFile
              );

              const activePartnerImages = partnershipImages.filter((image) => {
                const match = image.fileName.match(/^(\d+)/);
                return Number.parseInt(match?.[1] ?? "0", 10) === index + 1;
              });

              const isShowingAllPartners = !!showAllPartners[division.id];
              const visiblePartners = isShowingAllPartners
                ? activePartnerImages
                : activePartnerImages.slice(0, 8);
              const hasMorePartners = activePartnerImages.length > 8;

              return (
                <div
                  key={division.id}
                  id={division.id}
                  className={`rounded-2xl border border-border bg-card shadow-card overflow-hidden transition-all duration-300 scroll-mt-24 ${
                    isExpanded ? "ring-1 ring-ionic-orange/10 shadow-elevated" : ""
                  }`}
                >
                  {/* Collapsible Header */}
                  <button
                    type="button"
                    onClick={() => toggleDivision(division.id)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 bg-white hover:bg-muted/10 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-primary-foreground shadow-md transition-transform ${
                          index % 2 === 0 ? "gradient-cta" : "gradient-hero"
                        } ${isExpanded ? "scale-105 ring-2 ring-ionic-orange/20" : ""}`}
                      >
                        <Icon size={20} className="text-primary-foreground" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-ionic-blue">
                          Division {index + 1}
                        </span>
                        <h2 className="text-base font-bold leading-snug md:text-xl text-foreground truncate">
                          {division.title}
                        </h2>
                      </div>
                    </div>
                    <span className="p-1.5 rounded-lg bg-muted text-muted-foreground transition-colors shrink-0">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {/* Collapsible Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden bg-card"
                      >
                        <div className="p-5 md:p-6 border-t border-border space-y-6">
                          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-stretch">
                            {/* Division Image */}
                            <div className="overflow-hidden rounded-2xl border border-border bg-muted flex items-stretch">
                              <img
                                src={divisionImage?.src}
                                alt={division.title}
                                loading="lazy"
                                className="w-full h-48 md:h-full object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </div>

                            {/* Details Column */}
                            <div className="rounded-2xl border border-border bg-background/50 p-5 md:p-6 flex flex-col justify-between space-y-6">
                              {/* Description */}
                              <div className="space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                                  Overview
                                </p>
                                <p className="text-justify text-sm leading-relaxed text-muted-foreground md:text-base">
                                  {division.description}
                                </p>
                              </div>

                              {/* Key Services */}
                              <div className="space-y-3">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                                  Key Services
                                </p>
                                <ul className="grid gap-2 sm:grid-cols-2">
                                  {division.services.map((service) => (
                                    <li
                                      key={service}
                                      className="flex items-start gap-2.5 text-sm text-foreground"
                                    >
                                      <Check size={15} className="mt-0.5 shrink-0 text-ionic-blue" />
                                      <span>{service}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Trusted By Partners */}
                              {activePartnerImages.length > 0 && (
                                <div className="space-y-3 pt-2">
                                  <div className="flex items-center justify-between">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                                      Trusted By
                                    </p>
                                    {hasMorePartners && (
                                      <button
                                        type="button"
                                        onClick={() => togglePartners(division.id)}
                                        className="text-xs font-bold text-ionic-blue hover:underline focus:outline-none"
                                      >
                                        {isShowingAllPartners ? "Show Less" : `Show All (${activePartnerImages.length})`}
                                      </button>
                                    )}
                                  </div>

                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1 justify-items-center">
                                    {visiblePartners.map((partnerImage, partnerIdx) => {
                                      const hoverLabel =
                                        partnerHoverLabelsByDivision[division.id]?.[partnerIdx] ??
                                        division.clients[partnerIdx] ??
                                        `Client ${partnerIdx + 1}`;

                                      return (
                                        <figure
                                          key={partnerImage.fileName}
                                          className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-2 min-h-[90px] shadow-sm hover:shadow transition-shadow"
                                        >
                                          <img
                                            src={partnerImage.src}
                                            alt={`${division.shortTitle} partner ${partnerIdx + 1}`}
                                            loading="lazy"
                                            className="h-full w-full object-contain object-center"
                                          />
                                          <span className="pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-background px-3 py-1.5 text-[10px] font-semibold text-foreground opacity-0 shadow-elevated transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5 z-20">
                                            {hoverLabel}
                                          </span>
                                        </figure>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Divisions;
