"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: FaqItem[];
};

export default function FaqSection({ items }: FaqSectionProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section id="faqs" className="bg-white py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <div className="mb-11 text-center">
          <h2 className="mx-auto max-w-3xl text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.02em] max-[900px]:text-[2rem]">
            Daraja: Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto grid max-w-[820px] gap-5">
          {items.map((faq, index) => {
            const panelId = `faq-panel-${index}`;
            const isExpanded = expanded === panelId;
            return (
              <Accordion
                key={faq.question}
                expanded={isExpanded}
                onChange={handleChange(panelId)}
                disableGutters
                elevation={0}
                square={false}
                sx={{
                  borderRadius: "1.5rem",
                  border: "1px solid",
                  borderColor: isExpanded ? "#e2e2e2" : "#efefef",
                  backgroundColor: isExpanded ? "#f5f5f4" : "#ffffff",
                  boxShadow: isExpanded
                    ? "0 18px 40px -30px rgba(20,20,20,0.25)"
                    : "0 12px 30px -26px rgba(20,20,20,0.18)",
                  "&::before": { display: "none" },
                  "&.MuiAccordion-root": { margin: 0 },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        fontSize: 20,
                        color: isExpanded ? "#222222" : "#6d6d6d",
                      }}
                    />
                  }
                  aria-controls={`${panelId}-content`}
                  id={`${panelId}-header`}
                  sx={{
                    px: 3,
                    py: 2,
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                      alignItems: "center",
                    },
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 200ms ease",
                    },
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#222222",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Typography
                    component="p"
                    sx={{
                      color: "#4f4f4f",
                      lineHeight: 1.7,
                      fontSize: { xs: "0.875rem", md: "1rem" },
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
}
