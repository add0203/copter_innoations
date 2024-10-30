"use client";

import PageWrapper from "@/components/wrapper/page-wrapper";
import Servies from "@/components/homepage/services-section";
export default function Products() {
  return (
    <PageWrapper>
      <div className="mt-[3rem] flex flex-col justify-center items-center lg:w-[90%]">
        <Servies />
      </div>
    </PageWrapper>
  );
}
