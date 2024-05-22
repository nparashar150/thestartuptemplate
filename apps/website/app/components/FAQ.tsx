import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/ui/components/ui/accordion";
import { FC } from "react";
import type { FrequentlyAskedQuestions as FAQProps } from "../../types";

const FAQ: FC<FAQProps> = ({ title, subtitle, contactEmail, items }) => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-muted-foreground text-start mt-4 mb-8">{subtitle}</p>
      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {items.map(({ question, answer, key }) => (
          <AccordionItem key={key} value={key} className="border-b-0">
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a rel="noreferrer noopener" href={`mailto:${contactEmail}`} className="text-primary transition-all border-primary hover:border-b-2">
          Contact me
        </a>
      </h3>
    </section>
  );
};

export default FAQ;
