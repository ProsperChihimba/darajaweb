import FaqSection from "./FaqSection";

const faqs = [
  {
    question: "Who is Daraja built for?",
    answer:
      "Daraja is built for SMEs and startups with roughly 2 to 50 employees that make frequent business payments through mobile money or bank transfer. If your team has outgrown founder-only spending and needs proper expense control, Daraja is for you.",
  },
  {
    question: "How is Daraja different from a bank or mobile money app?",
    answer:
      "Banks are built for large merchants and bigger transfers. Mobile money apps are built for individuals first, which leaves SMEs mixing personal and business spending. Daraja is built specifically for businesses — and is currently the only platform that lets you pay out directly to mobile money merchant accounts (Lipa Namba).",
  },
  {
    question: "Can I pay directly to Lipa Namba with Daraja?",
    answer:
      "Yes. Through our partnership with Selcom, businesses can disburse approved funds directly to verified merchant accounts (Lipa Namba), in addition to mobile money wallets and business bank accounts.",
  },
  {
    question: "How does Daraja help with TRA compliance?",
    answer:
      "Every payout generates a digital record showing who spent the money, why, and where it went. These records support TRA-compliant documentation by default — reducing penalties and building the financial history you need to access credit.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Daraja charges a transaction fee of 1% to 3% on each transaction processed, depending on the size. There are no large upfront subscriptions — you only pay as your business uses the platform.",
  },
];

export default function FaqsSection() {
  return <FaqSection items={faqs} />;
}
