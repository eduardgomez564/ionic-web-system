import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

const whyChooseCards = [
	{
		title: "Proven Experience",
		description: "Nearly three decades of work in preventive maintenance and water treatment gives us the depth to solve complex plant challenges.",
	},
	{
		title: "Tailored Programs",
		description: "We design treatment plans around your facility, operating conditions, and performance goals instead of forcing a one-size-fits-all approach.",
	},
	{
		title: "Broader Expertise",
		description: "From boilers and cooling systems to wastewater treatment, our scope covers the systems that keep operations running efficiently.",
	},
	{
		title: "Industry Reach",
		description: "Our services support clients across manufacturing, commercial, municipal, and other industrial environments.",
	},
];

const trustedClients = ["Manufacturing companies", "Commercial facilities", "Municipal sectors", "Plant operators", "Facility managers"];

const AboutUs = () => (
	<>
		<StickyHeader />
		<main className="container-narrow py-20 px-4 md:px-8 space-y-20">
			<div className="max-w-4xl mx-auto">
				<p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-4">About Us</p>
				<h1 className="text-3xl md:text-4xl font-extrabold mb-8">Who We Are</h1>
				<div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
					<p>
						Founded in 1996 as Ionic Chemicals & Industrial Corporation (ICIC) and rebranded as Impact One Nation Industrial Corporation (IONIC) in 2015, we have established ourselves as one of the key players in the field of plant preventive maintenance and water treatment for boilers and cooling systems for nearly three decades. Now, we have added waste water treatment solution systems to our expertise to cater to a wider set of clients and their needs.
					</p>
					<p>
						At IONIC, we are committed to delivering comprehensive and innovative treatment programs tailored to each client's unique requirements. Our comprehensive range of services cater to different industries ranging from manufacturing to municipal sectors.
					</p>
				</div>
			</div>

			<section className="max-w-6xl mx-auto">
				<div className="text-center mb-10">
					<p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">Why Choose IONIC</p>
					<h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Built for performance, reliability, and long-term partnerships</h2>
					<p className="text-muted-foreground max-w-3xl mx-auto">
						Our work is centered on practical results, strong technical support, and programs that help your operations stay stable over time.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-2">
					{whyChooseCards.map((card) => (
						<div key={card.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
							<h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
							<p className="text-muted-foreground leading-relaxed">{card.description}</p>
						</div>
					))}
				</div>
			</section>

			<section className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
				<div className="rounded-2xl border border-border bg-muted/40 p-8">
					<p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">Our Mission</p>
					<h2 className="text-2xl font-bold text-foreground mb-4">Deliver dependable treatment solutions that protect operations and improve efficiency.</h2>
					<p className="text-muted-foreground leading-relaxed">
						We aim to provide comprehensive, innovative, and practical treatment programs that help clients maintain clean, efficient, and compliant systems.
					</p>
				</div>
				<div className="rounded-2xl border border-border bg-muted/40 p-8">
					<p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">Our Vision</p>
					<h2 className="text-2xl font-bold text-foreground mb-4">Be a trusted partner for industries seeking sustainable water and wastewater treatment excellence.</h2>
					<p className="text-muted-foreground leading-relaxed">
						We envision being recognized for consistent quality, technical expertise, and lasting value across every sector we serve.
					</p>
				</div>
			</section>

			<section className="max-w-6xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card">
				<p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">Trusted By</p>
				<h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Regular customers and clients of IONIC</h2>
				<p className="text-muted-foreground mb-6 max-w-3xl">
					Our relationships are built on repeat service, dependable support, and a reputation for delivering results that keep clients coming back.
				</p>
				<div className="flex flex-wrap gap-3">
					{trustedClients.map((client) => (
						<span key={client} className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground">
							{client}
						</span>
					))}
				</div>
			</section>
		</main>
		<Footer />
	</>
);

export default AboutUs;
