import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import heroBg3 from "@/assets/hero-bg-3.jpg";

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
		<main className="container-narrow pt-28 pb-20 px-4 md:pt-32 md:pb-20 md:px-8 space-y-24">
			<section id="who-we-are" className="max-w-6xl mx-auto scroll-mt-24 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-4">About Us</p>
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-foreground leading-tight">
						Who We Are
					</h1>
					<div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
						<p>
							Founded in 1996 as Ionic Chemicals & Industrial Corporation (ICIC) and rebranded as Impact One Nation Industrial Corporation (IONIC) in 2015, we have established ourselves as one of the key players in the field of plant preventive maintenance and water treatment for boilers and cooling systems for nearly three decades. Now, we have added waste water treatment solution systems to our expertise to cater to a wider set of clients and their needs.
						</p>
						<p>
							At IONIC, we are committed to delivering comprehensive and innovative treatment programs tailored to each client's unique requirements. Our comprehensive range of services cater to different industries ranging from manufacturing to municipal sectors.
						</p>
					</div>
				</div>
				<div className="relative">
					<div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-ionic-blue/15 via-transparent to-ionic-orange/15 blur-2xl" />
					<div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-elevated">
						<img
							src={heroBg3}
							alt="Industrial plant water system equipment"
							className="h-full w-full object-cover min-h-[320px] md:min-h-[420px]"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
						<div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md text-primary-foreground">
							<p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70 mb-1">Industrial Systems</p>
							<p className="text-sm md:text-base leading-relaxed text-primary-foreground/90">
								Delivering treatment, maintenance, and compliance support for facilities that need dependable water and wastewater performance.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="why-choose-ionic" className="max-w-6xl mx-auto scroll-mt-24">
				<div className="text-center mb-10">
					<p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">Why Choose IONIC</p>
					<h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Built for performance, reliability, and long-term partnerships</h2>
					<p className="text-muted-foreground max-w-3xl mx-auto">
						Our work is centered on practical results, strong technical support, and programs that help your operations stay stable over time.
					</p>
				</div>
				<div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
					{whyChooseCards.map((card) => (
						<div key={card.title} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
							<div className="mb-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-ionic-blue to-ionic-orange" />
							<h3 className="text-lg font-bold text-foreground mb-3 leading-snug">{card.title}</h3>
							<p className="text-muted-foreground leading-relaxed text-sm md:text-base">{card.description}</p>
						</div>
					))}
				</div>
			</section>

			<section className="max-w-6xl mx-auto scroll-mt-24">
				<div className="text-center mb-10">
					<p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">Mission & Vision</p>
					<h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">A clearer direction for the work we do</h2>
					<p className="text-muted-foreground max-w-3xl mx-auto">
						Our mission and vision now sit in a more balanced, premium layout that reads better on desktop and mobile.
					</p>
				</div>
				<div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
					<div id="mission" className="relative overflow-hidden rounded-[2rem] border border-border bg-slate-950 p-8 text-primary-foreground shadow-elevated scroll-mt-24">
						<div className="absolute inset-0 bg-gradient-to-br from-ionic-blue/35 via-slate-950 to-slate-950" />
						<div className="relative flex h-full flex-col justify-between gap-8">
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70 mb-3">Our Mission</p>
								<h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">Deliver dependable treatment solutions that protect operations and improve efficiency.</h3>
								<p className="text-primary-foreground/75 leading-relaxed">
									We aim to provide comprehensive, innovative, and practical treatment programs that help clients maintain clean, efficient, and compliant systems.
								</p>
							</div>
							<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-sm">
								<div className="h-10 w-10 rounded-full bg-ionic-orange/15 flex items-center justify-center text-ionic-orange font-bold">01</div>
								<p className="text-sm text-primary-foreground/80">Focused on results, reliability, and day-to-day plant performance.</p>
							</div>
						</div>
					</div>
					<div id="vision" className="rounded-[2rem] border border-border bg-card p-8 shadow-card scroll-mt-24">
						<p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">Our Vision</p>
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">Be a trusted partner for industries seeking sustainable water and wastewater treatment excellence.</h3>
						<p className="text-muted-foreground leading-relaxed mb-8">
							We envision being recognized for consistent quality, technical expertise, and lasting value across every sector we serve.
						</p>
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="rounded-2xl border border-border bg-muted/40 p-5">
								<p className="text-sm font-semibold text-foreground mb-2">Long-term value</p>
								<p className="text-sm text-muted-foreground leading-relaxed">Solutions designed to stay useful beyond the initial install.</p>
							</div>
							<div className="rounded-2xl border border-border bg-muted/40 p-5">
								<p className="text-sm font-semibold text-foreground mb-2">Technical trust</p>
								<p className="text-sm text-muted-foreground leading-relaxed">Support built around consistent performance and clear expertise.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="trusted-by" className="max-w-6xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card scroll-mt-24">
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
