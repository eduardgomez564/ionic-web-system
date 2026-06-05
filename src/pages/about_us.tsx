import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const whyChooseCards = [
  {
    title: "Proven Experience",
    description:
      "Nearly three decades of work in preventive maintenance and water treatment gives us the depth to solve complex plant challenges.",
  },
  {
    title: "Tailored Programs",
    description:
      "We design treatment plans around your facility, operating conditions, and performance goals instead of forcing a one-size-fits-all approach.",
  },
  {
    title: "Broader Expertise",
    description:
      "From boilers and cooling systems to wastewater treatment, our scope covers the systems that keep operations running efficiently.",
  },
  {
    title: "Industry Reach",
    description:
      "Our services support clients across manufacturing, commercial, municipal, and other industrial environments.",
  },
];

const trustedClients = [
  "Manufacturing companies",
  "Commercial facilities",
  "Municipal sectors",
  "Plant operators",
  "Facility managers",
];

const AboutUs = () => (
  <>
  <StickyHeader />
    <section
      id="who-we-are"
      className="section-padding min-h-screen bg-background flex items-center scroll-mt-24"
    >
      <div className="container-narrow w-full grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-4">
            About Us
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-foreground leading-tight">
            Who We Are
          </h1>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
            <p>
              Founded in 1996 as Ionic Chemicals & Industrial Corporation (ICIC)
              and rebranded as Impact One Nation Industrial Corporation (IONIC)
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
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70 mb-1">
                Industrial Systems
              </p>
              <p className="text-sm md:text-base leading-relaxed text-primary-foreground/90">
                Delivering treatment, maintenance, and compliance support for
                facilities that need dependable water and wastewater performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── 2. WHY CHOOSE IONIC — dark bg ── */}
    <section
      id="why-choose-ionic"
      className="section-padding min-h-screen gradient-hero flex items-center scroll-mt-24"
    >
      <div className="container-narrow w-full">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/60 mb-3">
            Why Choose IONIC
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Built for performance,{" "}
            <span className="text-gradient-orange">reliability</span>, and
            long-term partnerships
          </h2>
          <p className="text-primary-foreground/70 max-w-3xl mx-auto">
            Our work is centered on practical results, strong technical support,
            and programs that help your operations stay stable over time.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
          {whyChooseCards.map((card) => (
            <div
              key={card.title}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="mb-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-ionic-blue to-ionic-orange" />
              <h3 className="text-lg font-bold text-primary-foreground mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed text-sm md:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── 3. MISSION & VISION — light bg ── */}
    <section
      id="mission"
      className="section-padding min-h-screen bg-background flex items-center scroll-mt-24"
    >
      <div className="container-narrow w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-gradient-blue">Mission</span> &{" "}
            <span className="text-gradient-orange">Vision</span>
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div
            id="mission-card"
            className="rounded-[2rem] border border-border bg-card p-8 shadow-card"
          >
            <div className="mb-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-ionic-blue to-ionic-blue/40" />
            <h3 className="text-xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-blue">Mission</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
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
            className="rounded-[2rem] border border-border bg-card p-8 shadow-card scroll-mt-24"
          >
            <div className="mb-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-ionic-orange to-ionic-orange/40" />
            <h3 className="text-xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-orange">Vision</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
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

    {/* ── 4. TRUSTED BY — dark bg ── */}
    <section
      id="trusted-by"
      className="section-padding min-h-screen gradient-hero flex items-center scroll-mt-24"
    >
      <div className="container-narrow w-full">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/60 mb-3">
            Trusted By
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Regular customers and{" "}
            <span className="text-gradient-orange">clients</span> of IONIC
          </h2>
          <p className="text-primary-foreground/70 max-w-3xl mx-auto">
            Our relationships are built on repeat service, dependable support,
            and a reputation for delivering results that keep clients coming
            back.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {trustedClients.map((client) => (
            <span
              key={client}
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
	<Footer />
  </>
);

export default AboutUs;