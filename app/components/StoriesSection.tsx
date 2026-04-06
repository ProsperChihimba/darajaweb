import StoriesCarousel from "./StoriesCarousel";

const stories = [
  {
    quote:
      "Daraja replaced the spreadsheets and WhatsApp approvals we used to track expenses. Today every payment is logged with a clear reason, and our finance team finally has a real audit trail.",
    name: "Operations Lead",
    role: "Startup Customer",
    company: "Swahilies",
  },
  {
    quote:
      "Most of our company spending now flows through Daraja. Being able to pay directly to Lipa Namba and have everything reconciled saves us hours every week.",
    name: "Finance Manager",
    role: "Startup Customer",
    company: "Medikea",
  },
  {
    quote:
      "We needed proper records for compliance without slowing the team down. Daraja made it simple — requests, approvals, and receipts all in one place.",
    name: "Founder",
    role: "Startup Customer",
    company: "Neurotech",
  },
];

export default function StoriesSection() {
  return <StoriesCarousel items={stories} />;
}
