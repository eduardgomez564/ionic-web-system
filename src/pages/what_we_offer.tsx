import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Droplets, FlaskConical, ShieldCheck, Sparkles, Thermometer, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

const products = [
	{
		title: "Scale & Corrosion Inhibitors",
		subtitle: "AQUATRACT CT Series",
		icon: ShieldCheck,
	},
	{
		title: "Algaecides & Microbiocides",
		subtitle: "AQUATRACT CT-4000/4210",
		icon: FlaskConical,
	},
	{
		title: "Boiler Treatment Chemicals",
		subtitle: "AQUATRACT BT-2100",
		icon: Droplets,
	},
	{
		title: "RO Systems & Filters",
		subtitle: "CSM Membranes & ANOW Filters",
		icon: Thermometer,
	},
	{
		title: "Industrial Lubricants",
		subtitle: "LUPROMAX Series",
		icon: Wrench,
	},
	{
		title: "VCI Corrosion Protection",
		subtitle: "VAPPRO Products",
		icon: Sparkles,
	},
];

const services = [
  {
    title: "A. Plant Preventive Maintenance",
    items: [
      "Cleaning, Disinfection, and Repainting of Tanks",
      "Cleaning, Descaling, and Passivation of Pipes",
      "Industrial Paint Job"
    ],
    image: "../assets/services-images/Plant Preventive Maintenance.png"
  },
  {
    title: "B. Cooling Tower and Airconditioning",
    items: [
      "Cooling System Treatment, Installation, and Repair",
      "Installation and Maintenance of Centralized Air-Conditioning Units"
    ],
    image: "../assets/services-images/Cooling Tower and Airconditioning.png"
  },
  {
    title: "C. Water Treatment",
    items: [
      "Water Analysis and Testing",
      "Installation and Maintenance of Pre-water and Water Treatment Equipment and Facilities",
      "Installation and Maintenance of Reverse Osmosis Water System",
      "Installation and Maintenance of Boiler Water System",
      "Installation of Chlorinator for Potable Water System",
      "Integration of Monitoring and Control Systems to Continuously Assess Water Quality"
    ],
    image: "../assets/services-images/Water_Treatment.png"
  },
  {
    title: "D. Waste Water Treatment",
    items: [
      "Consultation and Designing Appropriate Waste Water Treatment System",
      "Installation, and Rehabilitation of Waste Water Treatment System",
      "Integration of Monitoring and Control Systems to Continuously Assess Water Quality"
    ],
    image: "../assets/services-images/Waste_Water_Treatment.png"
  },
  {
    title: "E. Electrochlorination",
    items: [
      "Consultation and Designing Appropriate Electrochlorination System",
      "Installation, Rehabilitation, and Optimization of Electrochlorination System",
      "Integration of Monitoring and Control Systems to Continuously Assess Quality"
    ],
    image: "../assets/services-images/Electrochlorination.png"
  }
];

const productLogoModules = import.meta.glob("../assets/product-logos/*.png", {
	eager: true,
	import: "default",
}) as Record<string, string>;

const serviceImageModules = import.meta.glob("../assets/services-images/*.png", {
	eager: true,
	import: "default",
}) as Record<string, string>;

const productDistributors = [
	{ name: "VAPPRO", logoFile: "1.png" },
	{ name: "Magna", logoFile: "2.png" },
	{ name: "LUPROMAX", logoFile: "3.png" },
	{ name: "Castrol", logoFile: "4.png" },
	{ name: "LENNTECH", logoFile: "5.png" },
	{ name: "Italmatch Chemicals", logoFile: "6.png" },
	{ name: "BWA Water Additives", logoFile: "7.png" },
];

const supplyItems = [
	"Reverse Osmosis Membranes and Filters",
	"Replacement or Spare Parts for Cooling Towers and Boilers",
	"Filtration Systems",
	"Equipment for Waste Water Treatment",
	"UV Disinfection Equipment",
	"Laboratory Equipment",
];

const WhatWeOffer = () => {
	const { hash } = useLocation();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	useEffect(() => {
		if (!hash) {
			return;
		}

		const target = document.getElementById(decodeURIComponent(hash.slice(1)));
		if (!target) {
			return;
		}

		const frame = window.requestAnimationFrame(() => {
			const headerEl = document.querySelector("header");
			const headerHeight = headerEl?.getBoundingClientRect().height ?? 0;
			const extraOffset = 12;
			const targetPosition = target.getBoundingClientRect().top + window.scrollY - (headerHeight + extraOffset);
			window.scrollTo({ top: Math.max(0, targetPosition), behavior: "smooth" });
		});

		return () => window.cancelAnimationFrame(frame);
	}, [hash]);

	useEffect(() => {
		if (!isAutoPlaying) return;
		
		const interval = window.setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % productDistributors.length);
		}, 3000);

		return () => window.clearInterval(interval);
	}, [isAutoPlaying]);

	const nextSlide = () => {
		setIsAutoPlaying(false);
		setCurrentIndex((prev) => (prev + 1) % productDistributors.length);
	};

	const prevSlide = () => {
		setIsAutoPlaying(false);
		setCurrentIndex((prev) => (prev - 1 + productDistributors.length) % productDistributors.length);
	};

	const getVisibleSlides = () => {
		const slides = [];
		for (let i = -2; i <= 2; i++) {
			const index = (currentIndex + i + productDistributors.length) % productDistributors.length;
			slides.push({ ...productDistributors[index], offset: i });
		}
		return slides;
	};

	return (
		<>
			<StickyHeader />
			<main className="bg-background pt-24 pb-16 md:pt-28 md:pb-20">
				<section id="products" className="px-4 md:px-8 scroll-mt-24">
					<div className="mx-auto max-w-7xl">
						<div className="text-center mb-10">
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Products & <span className="text-gradient-blue">Capabilities</span>
							</h2>
							<p className="text-muted-foreground max-w-2xl mx-auto">
								Industry-leading chemicals, equipment, and treatment programs from trusted global partners.
							</p>
						</div>

						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{products.map((product) => {
								const Icon = product.icon;

								return (
									<div key={product.title} className="bg-card rounded-lg p-4 shadow-card hover:shadow-elevated transition-all group border border-border">
										<div className="flex items-center gap-3 mb-2">
											<div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center group-hover:scale-110 transition-transform">
												<Icon className="text-primary-foreground" size={20} />
											</div>
											<div className="min-w-0">
												<h3 className="text-base font-semibold text-foreground">{product.title}</h3>
												<p className="text-muted-foreground text-sm">{product.subtitle}</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section id="distributors" className="px-4 md:px-8 scroll-mt-24 mt-12 bg-white py-8 md:py-12">
					<div className="mx-auto max-w-7xl">
						<div className="text-center mb-10">
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Product <span className="text-gradient-orange">Distributor</span> of
							</h2>
						</div>

						<div className="relative overflow-hidden">
							<div className="flex items-center justify-between">
								<button
									onClick={prevSlide}
									onMouseEnter={() => setIsAutoPlaying(false)}
									className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all duration-300 z-10"
								>
									<ChevronLeft size={20} />
								</button>

								<div className="flex-1 flex items-center justify-center min-h-[200px] md:min-h-[240px]">
									<div className="flex items-center justify-center gap-2 md:gap-4">
										{getVisibleSlides().map((distributor) => {
											const logoPath = Object.keys(productLogoModules).find((path) =>
												path.includes(distributor.logoFile)
											);
											const logoSrc = logoPath ? productLogoModules[logoPath] : "/placeholder.svg";
											const isCenter = distributor.offset === 0;

											return (
												<div
													key={`${distributor.name}-${distributor.offset}`}
													className={`flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isCenter ? "z-20" : "z-10"}`}
													style={{
														transform: isCenter ? "scale(1.5)" : "scale(0.6)",
														opacity: isCenter ? 1 : 0.3,
														minWidth: isCenter ? "200px" : "90px",
													}}
												>
													<div className="flex h-24 w-32 md:h-32 md:w-44 items-center justify-center">
														<img
															src={logoSrc}
															alt={distributor.name}
															loading="lazy"
															className="h-full w-full object-contain object-center"
														/>
													</div>
												</div>
											);
										})}
									</div>
								</div>

								<button
									onClick={nextSlide}
									onMouseEnter={() => setIsAutoPlaying(false)}
									className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all duration-300 z-10"
								>
									<ChevronRight size={20} />
								</button>
							</div>
						</div>
					</div>
				</section>

				<section id="supply" className="px-4 md:px-8 scroll-mt-24 mt-12">
					<div className="mx-auto max-w-7xl">
						<div className="text-center mb-10">
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								We can <span className="text-gradient-blue">supply</span> the following:
							</h2>
						</div>

						<div className="grid gap-4 md:gap-6 md:grid-cols-2">
							{supplyItems.map((item) => (
								<div
									key={item}
									className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 md:p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
								>
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gradient-blue text-white">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<h3 className="text-base md:text-lg font-semibold leading-snug text-foreground">{item}</h3>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="services" className="px-4 md:px-8 scroll-mt-24 mt-12">
					<div className="mx-auto max-w-7xl">
						<div className="text-center mb-10">
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Our <span className="text-gradient-orange">Services</span>
							</h2>
						</div>

						<div className="grid gap-8 md:grid-cols-3 items-start">
							{/* Left Column - A & B */}
							<div className="flex flex-col gap-8">
								{[services[0], services[1]].map((service) => {
									const serviceLetter = service.title.substring(0, 1);
									const imagePath = Object.keys(serviceImageModules).find((path) =>
										path.includes(`${serviceLetter}.png`)
									);
									const imageSrc = imagePath ? serviceImageModules[imagePath] : "";
									
									return (
										<div key={service.title} className="bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-all border border-border">
											{imageSrc && (
												<div className="mb-6 overflow-hidden rounded-lg">
													<img 
														src={imageSrc} 
														alt={service.title} 
														className="w-full h-40 md:h-52 object-cover transition-transform hover:scale-105"
													/>
												</div>
											)}
											<h3 className="text-2xl font-semibold mb-6 text-foreground">{service.title}</h3>
											<ul className="space-y-4">
												{service.items.map((item, idx) => (
												<li key={idx} className="flex items-center gap-4">
													<div className="w-7 h-7 rounded-full gradient-orange flex items-center justify-center flex-shrink-0">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-4 w-4 text-white"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															strokeWidth="2"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M5 13l4 4L19 7"
															/>
														</svg>
													</div>
													<span className="text-base md:text-lg text-foreground">{item}</span>
												</li>
											))}
											</ul>
										</div>
									);
								})}
							</div>

							{/* Middle Column - C */}
							<div className="flex flex-col">
								<div className="bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-all border border-border">
									{(() => {
										const serviceLetter = services[2].title.substring(0, 1);
										const imagePath = Object.keys(serviceImageModules).find((path) =>
											path.includes(`${serviceLetter}.png`)
										);
										const imageSrc = imagePath ? serviceImageModules[imagePath] : "";
										return (
											<>
												{imageSrc && (
													<div className="mb-6 overflow-hidden rounded-lg">
														<img 
															src={imageSrc} 
															alt={services[2].title} 
															className="w-full h-40 md:h-52 object-cover transition-transform hover:scale-105"
														/>
													</div>
												)}
												<h3 className="text-2xl font-semibold mb-6 text-foreground">{services[2].title}</h3>
												<ul className="space-y-4">
													{services[2].items.map((item, idx) => (
														<li key={idx} className="flex items-center gap-4">
															<div className="w-7 h-7 rounded-full gradient-orange flex items-center justify-center flex-shrink-0">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	className="h-4 w-4 text-white"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																	strokeWidth="2"
																>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		d="M5 13l4 4L19 7"
																	/>
																</svg>
															</div>
															<span className="text-base md:text-lg text-foreground">{item}</span>
														</li>
													))}
												</ul>
											</>
										);
									})()}
								</div>
							</div>

							{/* Right Column - D & E */}
							<div className="flex flex-col gap-8">
								{[services[3], services[4]].map((service) => {
									const serviceLetter = service.title.substring(0, 1);
									const imagePath = Object.keys(serviceImageModules).find((path) =>
										path.includes(`${serviceLetter}.png`)
									);
									const imageSrc = imagePath ? serviceImageModules[imagePath] : "";
									
									return (
										<div key={service.title} className="bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-all border border-border">
											{imageSrc && (
												<div className="mb-6 overflow-hidden rounded-lg">
													<img 
														src={imageSrc} 
														alt={service.title} 
														className="w-full h-40 md:h-52 object-cover transition-transform hover:scale-105"
													/>
												</div>
											)}
											<h3 className="text-2xl font-semibold mb-6 text-foreground">{service.title}</h3>
											<ul className="space-y-4">
												{service.items.map((item, idx) => (
													<li key={idx} className="flex items-center gap-4">
														<div className="w-7 h-7 rounded-full gradient-orange flex items-center justify-center flex-shrink-0">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="h-4 w-4 text-white"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																strokeWidth="2"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	d="M5 13l4 4L19 7"
																/>
															</svg>
														</div>
														<span className="text-base md:text-lg text-foreground">{item}</span>
													</li>
												))}
											</ul>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default WhatWeOffer;
