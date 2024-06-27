import React from "react";
import Card from "./card";
import Linear from "@/lib/svgs/linear";
import ChevronRight from "@/lib/svgs/chevron-right";

const DesignedForModernSoftwareTeams = () => {
  return (
    <Card className="col-[auto/span_4] lg:col-[auto/span_2]">
      <Linear />
      <h3 className="text-center text-[26px] leading-[1.2] tracking-[-0.01em]">
        AT AREANA 
      </h3>
      <p className="mt-4 max-w-[480px] text-balance text-center leading-[1.3] text-[#b4bcd0]">
        : battle tested tactic for market mastery 
      </p>
      <div className="absolute bottom-[200px] flex h-7 cursor-pointer items-center gap-1 whitespace-nowrap rounded-full border border-white/5 bg-white/10 px-3 text-[13px] font-medium leading-7 backdrop-blur-md">
        <span className=" capitalize rounded-full bg-white/5 px-2">Linear Method</span>
        Product Principles
        <ChevronRight />
      </div>
    </Card>
  );
};

export default DesignedForModernSoftwareTeams;
