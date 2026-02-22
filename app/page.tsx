import Image from "next/image";
import Link from "next/link";
import FaqSection from "./components/FaqSection";
import StoriesCarousel from "./components/StoriesCarousel";
import IntoSection from "./components/into";

const services = [
  {
    title: "Usage Capture",
    description: "Normalize product events from any pipeline in minutes.",
    tag: "Event streams",
  },
  {
    title: "Billing Studio",
    description: "Model subscriptions, usage tiers, credits, and ramps.",
    tag: "Pricing logic",
  },
  {
    title: "Renewal Desk",
    description: "Coordinate renewals with health scoring and alerts.",
    tag: "Customer success",
  },
  {
    title: "Revenue Intelligence",
    description: "Forecast with a single view across CRM and product data.",
    tag: "Analytics",
  },
];

const solutions = [
  {
    title: "Revenue leaders",
    description:
      "Scenario plan pricing moves, forecast renewals, and keep every team aligned.",
  },
  {
    title: "Finance",
    description:
      "Automate compliance, revenue recognition, and multi-entity billing in one view.",
  },
  {
    title: "Product",
    description:
      "Turn usage into revenue without data silos or delayed handoffs.",
  },
  {
    title: "Customer success",
    description:
      "Surface expansion signals, mitigate churn, and run renewals with confidence.",
  },
];

const integrations = [
  "Salesforce",
  "HubSpot",
  "Stripe",
  "NetSuite",
  "Snowflake",
  "Segment",
  "Zendesk",
  "Slack",
  "Workday",
  "QuickBooks",
];

const stories = [
  {
    quote:
      "Cercli's customer support is excellent, providing quick responses. Their team has been incredibly responsive, ensuring that any issues are addressed promptly. This level of customer care has made a significant difference in our experience.",
    name: "Said El Imadi",
    role: "Human Resources Manager",
    company: "Supy",
  },
  {
    quote:
      "Cercli helped us unify payroll and HR workflows across regions. We cut manual follow-ups, improved compliance visibility, and empowered managers with real-time insights.",
    name: "Mariam Al-Khaled",
    role: "People Operations Lead",
    company: "Nexa",
  },
  {
    quote:
      "The onboarding experience was smooth, and our teams felt supported at every step. Cercli delivered faster payroll cycles with clear reporting and local expertise.",
    name: "Hassan Rahman",
    role: "Finance Director",
    company: "Lattice",
  },
];

const resources = [
  {
    image: "/assets/images/image18.avif",
    date: "Oct 21, 2025",
    title:
      "Cercli Raises $12M Series A for AI-Native Workforce Platform, Marking Picus Capital's First MENA Investment",
    description:
      "Picus Capital's first Middle East & North Africa investment signals major VC confidence in MENA tech ecosystem.",
  },
  {
    image: "/assets/images/image19.avif",
    date: "Aug 18, 2025",
    title: "Cercli Grows Rapidly as it Replaces Legacy ERP Systems",
    description:
      "Cercli is the MENA HR platform replacing legacy ERP systems. With 22% monthly growth, 48-country payroll, and AI-powered HR, it helps Middle East companies scale globally.",
  },
  {
    image: "/assets/images/image20.avif",
    date: "Jun 30, 2025",
    title: "What's New at Cercli: Product Updates for June 2025",
    description:
      "Cercli's June 2025 updates: automate compliant offboarding, manage and track assets, sync time off with your calendar, and generate salary certificates in one HRIS for MENA.",
  },
];

const faqs = [
  {
    question: "Who can use Cercli? Is it only for MENA-based companies?",
    answer:
      "Cercli supports global teams hiring in and beyond MENA. You can manage local employees, contractors, and cross-border payroll from one platform.",
  },
  {
    question: "What makes Cercli different from other payroll and HR platforms?",
    answer:
      "Cercli is built for MENA compliance first, with localized payroll, HR, and benefits in a single system. It consolidates onboarding, payroll, and workforce management into a fast, guided workflow with responsive local support.",
  },
  {
    question:
      "Does Cercli support WPS, DEWS, GOSI, and other MENA-specific compliance requirements?",
    answer:
      "Yes. Cercli provides built-in coverage for MENA compliance programs, statutory reporting, and regulatory updates so payroll stays audit-ready.",
  },
  {
    question: "Can Cercli handle both local employees and international contractors?",
    answer:
      "Absolutely. Cercli centralizes payroll for local employees while supporting contractor payments and documentation in the same workspace.",
  },
  {
    question: "How long does onboarding and implementation take?",
    answer:
      "Most teams go live in a few weeks. We migrate your payroll data, validate compliance, and configure approvals with a dedicated launch team.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntoSection />
      <ServicesSection />
      <CtaSection />
      <SolutionsSection />
      <CountingsSection />
      <WhyUsSection />
      <NoFragmentationsSection />
      <IntegrationsSection />
      <SwitchSection />
      <StoriesCarousel items={stories} />
      <ResourcesSection />
      <FaqSection items={faqs} />
      <EmpowerSection />
    </>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="site-container hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Unified platform for people,
            <br />
            payroll, and finance teams.
          </h1>
          <p className="hero-subtitle">
            The AI-powered solution to hire, manage and pay your entire
            workforce.
          </p>
          <Link className="hero-button" href="/pricing">
            Get Started
          </Link>
        </div>
        <div className="hero-visual">
          <Image
            src="/assets/images/heroImage.avif"
            alt="Cercli platform preview"
            width={1400}
            height={760}
            priority
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="site-container">
        <p className="eyebrow">Services</p>
        <h2 className="headline">Every revenue task, in one flow.</h2>
        <p className="subhead">
          Capture usage, design pricing, and run renewals without switching
          between disconnected tools.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="card">
              <span className="pill">{service.tag}</span>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta" className="section">
      <div className="site-container">
        <div className="cta-panel">
          <p className="eyebrow text-white/80">Pilot</p>
          <h2 className="headline text-white">Launch a Cercil pilot in 30 days.</h2>
          <p className="subhead text-white/80">
            Start with one product line, validate pricing, and expand when the
            workflows are proven.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link className="btn btn-light" href="/pricing">
              Start the pilot
            </Link>
            <Link className="btn btn-outline" href="/company">
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="section">
      <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <p className="eyebrow">Solutions</p>
          <h2 className="headline">Built for every revenue team.</h2>
          <p className="subhead">
            Cercil gives every stakeholder the same revenue narrative, from
            product usage to renewal readiness.
          </p>
          <Link className="btn btn-ghost" href="/use-cases">
            See all use cases
          </Link>
        </div>
        <div className="grid gap-5">
          {solutions.map((solution) => (
            <div key={solution.title} className="card card-muted">
              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <p className="mt-2 text-muted">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountingsSection() {
  return (
    <section id="countings" className="section bg-white">
      <div className="site-container">
        <h2 className="text-center text-[clamp(2rem,3.8vw,3rem)] font-bold text-[#2c2c2c]">
          Global HR System by the Numbers
        </h2>

        <div className="mt-10 grid gap-10 lg:max-w-4xl mx-auto text-center md:grid-cols-3">
          <div>
            <p className="text-[clamp(2.6rem,5vw,4rem)] font-bold text-[#b79a73]">
              150+
            </p>
            <p className="mt-2 text-sm text-[#3f3f3f]">
              Countries where we process multi-currency payroll
            </p>
          </div>
          <div>
            <p className="text-[clamp(2.6rem,5vw,4rem)] font-bold text-[#b79a73]">
              92%
            </p>
            <p className="mt-2 text-sm text-[#3f3f3f]">
              Customer queries resolved on the first contact
            </p>
          </div>
          <div>
            <p className="text-[clamp(2.6rem,5vw,4rem)] font-bold text-[#b79a73]">
              22,900
            </p>
            <p className="mt-2 text-sm text-[#3f3f3f]">
              Hours saved annually, saving companies $780,000
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[28px] bg-[#d9efc5] px-6 py-12 text-center md:px-12">
          <p className="text-sm text-[#2f2f2f]">Our purpose</p>
          <h3 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] tracking-tighter font-bold text-[#2c2c2c]">
            To unlock the true potential of
            <br />
            organisations and their people
          </h3>
          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#2c2c2c] shadow">
            Join us
          </button>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section id="why-us" className="section bg-[#fbf6ef]">
      <div className="site-container">
        <h2 className="text-center text-[clamp(2rem,3.8vw,3rem)] font-bold text-[#2c2c2c]">
          Why Cercli?
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-6">
            <article className="rounded-[22px] bg-[#d7c2a2] pb-5 pt-1 px-1">
              <div className="overflow-hidden rounded-[18px] bg-white">
                <Image
                  src="/assets/images/image9.webp"
                  alt="Customer support experience"
                  width={900}
                  height={520}
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-5 mx-3">
                <h3 className="text-xl font-bold text-[#2c2c2c]">
                  Intuitively Designed for You
                </h3>
                <p className="mt-2 text-sm text-[#3d3d3d]">
                  Built around customer feedback to create an experience that
                  truly works for you.
                </p>
              </div>
            </article>

            <article className="rounded-[22px] bg-[#d9efc5] p-6">
              <h3 className="text-xl font-bold text-[#2c2c2c]">
                Unmatched Customer Care
              </h3>
              <p className="mt-2 text-sm text-[#3d3d3d]">
                Six real-time customer support channels, including direct access
                to our payroll and engineering, with 24/7 support available
                through WhatsApp and Slack.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="/assets/images/slack.svg"
                  alt="Slack"
                  width={52}
                  height={52}
                  className=" w-auto h-12  rounded-2xl"
                />
               
              </div>
            </article>
          </div>

          <div className="grid gap-6">
            <article className="rounded-[22px] bg-[#f7c67b] p-6">
              <h3 className="text-xl font-bold text-[#2c2c2c]">
                Enterprise-level security
              </h3>
              <p className="mt-2 text-sm text-[#3d3d3d]">
                Protecting your data and ensuring security with our certified,
                monitored, and rigorously tested enterprise-grade platform.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {[
                  { src: "/assets/images/circle1.webp", alt: "GDPR" },
                  { src: "/assets/images/circle2.webp", alt: "ISO" },
                  { src: "/assets/images/circle3.webp", alt: "SOC" },
                ].map((badge) => (
                  <span
                    key={badge.alt}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70"
                  >
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={44}
                      height={44}
                    />
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[22px] bg-[#d7f3f5] pb-5 pt-1 px-1">
              <div className="overflow-hidden rounded-[18px] bg-white">
                <Image
                  src="/assets/images/image10.webp"
                  alt="MENA compliance"
                  width={900}
                  height={520}
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-5 mx-3">
                <h3 className="text-xl font-bold text-[#2c2c2c]">
                  Expertise in MENA Compliance
                </h3>
                <p className="mt-2 text-sm text-[#3d3d3d]">
                  From DEWS and GOSI to country-specific labor laws and pension
                  contributions, our platform ensures compliance by default to
                  align with local regulations.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function NoFragmentationsSection() {
  return (
    <section id="no-fragmentations" className="section bg-[#fbf6ef]">
      <div className="site-container">
        <h2 className="text-center text-[clamp(2rem,3.8vw,3rem)] font-bold text-[#2c2c2c]">
          One Solution, No Fragmentation
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[24px] border border-[#eadfce] bg-[#fbf6ef] p-5 text-center">
            <div className="overflow-hidden rounded-[20px] bg-[#f3eadc]">
              <Image
                src="/assets/images/image12.webp"
                alt="Fragmented workflow before Cercli"
                width={900}
                height={720}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 font-semibold text-[#3b3b3b]">Before</p>
          </article>
          <article className="rounded-[24px] border border-[#eadfce] bg-[#fbf6ef] p-5 text-center">
            <div className="overflow-hidden rounded-[20px] bg-[#f3eadc]">
              <Image
                src="/assets/images/image13.webp"
                alt="Unified workflow after Cercli"
                width={900}
                height={720}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 font-semibold text-[#3b3b3b]">After</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section id="integrations" className="section integration-section">
      <div className="site-container">
        <h2 className="headline text-center">
          Integrates with your favourite tools
        </h2>
        <div className="integration-visual">
          <Image
            src="/assets/images/image14.webp"
            alt="Integrations map"
            width={1280}
            height={680}
            className="integration-image"
          />
        </div>
        <div className="integration-cta">
          <Link className="integration-button" href="/resources">
            How Cercli works
          </Link>
        </div>
      </div>
    </section>
  );
}

function SwitchSection() {
  return (
    <section id="switch" className="bg-[#fbf6ef] py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[clamp(2rem,3.6vw,3rem)] font-bold text-[#2c2c2c]">
            Switch to Cercli in a Few Hours
          </h2>
          <p className="mt-3 text-[16px] max-w-lg mx-auto text-[#3f3f3f]">
            Your success is our priority: fast, committed, and fully tailored
            migration from any provider.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[22px] border border-[#e6d8c3] bg-white overflow-hidden pb-4  shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="rounded-[16px] bg-[#e9f7ec]">
              <Image
                src="/assets/images/image15.webp"
                alt="Customised implementation"
                width={520}
                height={360}
                className="h-auto w-full"
              />
            </div>
            <h3 className="mt-0 text-xl font-bold text-[#2c2c2c] mx-7">
              Customised Implementation
            </h3>
            <p className="mt-2 text-sm text-[#3f3f3f] mx-7">
              A tailored plan designed to ensure smooth integration, so you can
              start seeing results right away.
            </p>
          </article>

          <article className="rounded-[22px] border border-[#e6d8c3] bg-white overflow-hidden pb-4   shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="rounded-[16px] bg-[#e9f7ec]">
              <Image
                src="/assets/images/image16.webp"
                alt="Hassle-free data migration"
                width={520}
                height={360}
                className="h-auto w-full"
              />
            </div>
            <h3 className="mt-0 text-xl font-bold text-[#2c2c2c] mx-7">
              Hassle-Free Data Migration
            </h3>
            <p className="mt-2 text-sm text-[#3f3f3f] mx-7">
              Our dedicated team takes care of the complexities of data
              migration, end to end.
            </p>
          </article>

          <article className="rounded-[22px] border border-[#e6d8c3] bg-white overflow-hidden pb-4   shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="rounded-[16px] bg-[#e9f7ec]">
              <Image
                src="/assets/images/image17.webp"
                alt="White-glove onboarding"
                width={520}
                height={360}
                className="h-auto w-full"
              />
            </div>
            <h3 className="mt-0 text-xl font-bold text-[#2c2c2c] mx-7">
              White-Glove Onboarding
            </h3>
            <p className="mt-2 text-sm text-[#3f3f3f] mx-7">
              From day one, receive personalised, hands-on support with a
              dedicated point of contact at every step for a stress-free
              transition.
            </p>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-[#cfe9ea] px-6 py-2 text-sm font-semibold text-[#2c2c2c] shadow"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section id="resources" className="section">
      <div className="site-container">
        <h2 className="headline text-center">Resources</h2>
        <div className="resource-grid">
          {resources.map((resource) => (
            <article key={resource.title} className="resource-card">
              <div className="resource-image">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className="resource-body">
                <div className="resource-date">
                  <span className="resource-dot" aria-hidden="true" />
                  <span>{resource.date}</span>
                </div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <Link className="resource-link" href="/resources">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmpowerSection() {
  return (
    <section id="empower" className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 900 700"
          aria-hidden="true"
          className="absolute -left-[22%] -top-[20%] h-[140%] w-[60%]"
        >
          <path
            d="M40,60 C140,220 240,220 340,360 C420,470 420,560 360,660"
            fill="none"
            stroke="#3f5b4b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20,520 C200,430 320,440 480,520"
            fill="none"
            stroke="#3f5b4b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="240" cy="420" r="8" fill="#3f5b4b" />
        </svg>
        <svg
          viewBox="0 0 900 700"
          aria-hidden="true"
          className="absolute -right-[18%] -top-[10%] h-[120%] w-[55%]"
        >
          <path
            d="M520,80 C700,130 720,220 620,280 C520,340 520,430 620,500"
            fill="none"
            stroke="#3f5b4b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M520,300 C700,300 780,300 880,300"
            fill="none"
            stroke="#3f5b4b"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-bold text-[#2c2c2c] leading-tight">
          Empower your team
          <br />
          with Cercli
        </h2>
        <p className="mt-4 text-sm text-[#3f3f3f]">
          Discover how Cercli can streamline your HR, payroll, and compliance
          processes.
          <br />
          Start your journey with us today.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-[#3f5b4b] px-6 py-2 text-sm font-semibold text-white shadow"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}
