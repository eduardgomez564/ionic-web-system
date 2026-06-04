import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";



const products = [
	{
		title: "Reverse Osmosis (RO) & Filtration",
		desc: "Design, supply, and servicing of RO systems, multimedia filters, and cartridge filtration for process and potable water.",
	},
	{
		title: "Chemical Supply & Dosing Systems",
		desc: "Reliable supply of specialty treatment chemicals and automated dosing/skid systems for precise application.",
	},
	{
		title: "Modular Wastewater Treatment Units",
		desc: "Prefabricated and modular systems for wastewater treatment that simplify installation and scale with demand.",
	},
];

const services = [
	{
		title: "Boiler Water Treatment Programs",
		desc: "Custom chemical treatment and monitoring for steam and hot-water boiler systems to control scale, corrosion, and carryover.",
	},
	{
		title: "Cooling Tower Treatment",
		desc: "Comprehensive programs for cooling systems including biofouling control, scale prevention, and conductivity management.",
	},
	{
		title: "Preventive Maintenance & Mechanical Services",
		desc: "Pumps, valves, heat exchangers, and mechanical system maintenance to reduce downtime and extend equipment life.",
	},
	{
		title: "On-site Monitoring & Laboratory Testing",
		desc: "Routine sampling, on-site analysis, and interpretive reporting to keep plants compliant and operating optimally.",
	},
	{
		title: "Installation, Commissioning & Training",
		desc: "End-to-end installation, start-up, and operator training to ensure systems perform as specified.",
	},
	{
		title: "Wastewater Treatment Solutions",
		desc: "Modular and custom wastewater treatment systems, including biological, physico-chemical, and tertiary polishing stages.",
	},
];

const WhatWeOffer = () => {
	const { hash } = useLocation();

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

	return (
		<>
			<StickyHeader />
			<main className="container-narrow pt-28 pb-20 px-4 md:pt-32 md:pb-20 md:px-8 space-y-12">
				<header className="max-w-4xl scroll-mt-24">
					<h1 className="text-3xl font-extrabold mb-4">What We Offer</h1>
					<p className="text-muted-foreground max-w-2xl">Overview of services and offerings.</p>
				</header>

				<section id="products" className="max-w-6xl scroll-mt-24">
					<h2 className="text-2xl md:text-3xl font-bold mb-6">Products</h2>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{products.map((p) => (
							<div key={p.title} className="rounded-2xl border border-border bg-card p-6">
								<h3 className="text-lg font-semibold mb-2">{p.title}</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
							</div>
						))}
					</div>
				</section>

				<section id="services" className="max-w-6xl scroll-mt-24">
					<h2 className="text-2xl md:text-3xl font-bold mb-6">Services</h2>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{services.map((s) => (
							<div key={s.title} className="rounded-2xl border border-border bg-card p-6">
								<h3 className="text-lg font-semibold mb-2">{s.title}</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
							</div>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default WhatWeOffer;
