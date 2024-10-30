import { AccordionComponent } from "@/components/homepage/accordion-component";
import Features from "@/components/homepage/features";
import HeroSection from "@/components/homepage/hero-section";
import Servies from "@/components/homepage/services-section";
import SideBySide from "@/components/homepage/side-by-side";
import PageWrapper from "@/components/wrapper/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
        <HeroSection />
      </div>
      <div className="flex my-[7rem] w-full justify-center items-center">
        <SideBySide />
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <Servies />
      </div>
      <div className="max-w-[1150px] mt-[2rem] lg:mt-[6rem] lg:mb-[1rem] m-[2rem]">
        <Features />
      </div>
      <div className="flex justify-center items-center w-full my-[8rem]">
        <AccordionComponent />
      </div>
    </PageWrapper>
  );
}
