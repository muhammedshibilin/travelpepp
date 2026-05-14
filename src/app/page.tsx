import { Hero } from "@/components/sections/hero";
import { Destinations } from "@/components/sections/destinations";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { TravelAgencySchema, FAQSchema } from "@/components/seo/json-ld";

const homeFaqs = [
  {
    question: "How do I book a luxury tour with TravelPepp?",
    answer: "You can book directly through our website by selecting a package or by contacting our luxury concierge team via WhatsApp or phone."
  },
  {
    question: "Are the tours customizable?",
    answer: "Absolutely. We specialize in bespoke travel. Every itinerary can be tailored to your specific preferences."
  }
];

export default function Home() {
  return (
    <div className="relative w-full">
      <TravelAgencySchema />
      <FAQSchema faqs={homeFaqs} />
      <Hero />
      <WhyChooseUs />
      <Destinations limit={3} />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
