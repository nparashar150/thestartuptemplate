import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/ui/components/ui/accordion";
import { FREQUENTLY_ASKED_QUESTIONS } from "../../config";

const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{FREQUENTLY_ASKED_QUESTIONS.title}</h2>
      <p className="text-xl text-muted-foreground text-start mt-4 mb-8">{FREQUENTLY_ASKED_QUESTIONS.subtitle}</p>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FREQUENTLY_ASKED_QUESTIONS?.items.map(({ question, answer, key }) => (
          <AccordionItem key={key} value={key} className="border-b-0">
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a rel="noreferrer noopener" href={`mailto:${FREQUENTLY_ASKED_QUESTIONS.contactEmail}`} className="text-primary transition-all border-primary hover:border-b-2">
          Contact me
        </a>
      </h3>
    </section>
  );
};

export default FAQ;
