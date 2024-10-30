import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TITLE_TAILWIND_CLASS } from "@/utils/constants";

// Array of frequently asked questions
const faqs = [
  {
    id: 1,
    question:
      "What sets Copter Innovations apart from other drone manufacturers?",
    answer:
      "Copter Innovations stands out due to our deep understanding of customer requirements and our unwavering commitment to quality and craftsmanship.",
  },
  {
    id: 2,
    question: "How are your drone frames designed and tested?",
    answer:
      "Each frame is meticulously designed and rigorously tested to withstand the demands of various applications, ensuring top performance.",
  },
  {
    id: 3,
    question: "What types of customers do you cater to?",
    answer:
      "We collaborate closely with filmmakers needing robust frames for high-quality aerial shots and racing enthusiasts seeking lightweight designs for optimal speed.",
  },
  {
    id: 4,
    question: "What benefits do your innovative designs provide?",
    answer:
      "Our innovative designs enhance flight performance and allow for easy assembly and maintenance, making our drones user-friendly.",
  },
];

export function AccordionComponent() {
  return (
    <div className="flex flex-col w-[70%] lg:w-[50%]">
      <h2
        className={`${TITLE_TAILWIND_CLASS} mt-1 font-semibold text-center tracking-tight dark:text-white text-gray-900`}
      >
        Why Choose Us?
      </h2>
      <Accordion type="single" collapsible className="w-full mt-2">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`}>
            <AccordionTrigger>
              <span className="font-medium">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent>
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
