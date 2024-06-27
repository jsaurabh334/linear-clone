"use client";

import ChevronRight from "@/lib/svgs/chevron-right";
import DashboardMock from "./dashboard-mock";
import { animate, motion } from "framer-motion";

const easeDownVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), hsla(0,0%,100%,0)",
      }}
    >
      <div className="container-lg flex flex-col items-center pt-28 text-center lg:pt-24">
        <motion.button
          initial="initial"
          animate="animate"
          variants={easeDownVariants}
          transition={{
            duration: 0.5,
            type: "just",
            ease: "easeInOut",
          }}
          className="flex h-7 items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 text-xs font-medium leading-7 backdrop-blur-md"
        >
          {/* Linear Mobile v0.1 <ChevronRight /> */}
          {" "}
        </motion.button>
        <motion.h1
          initial="initial"
          animate="animate"
          variants={easeDownVariants}
          transition={{
            duration: 0.5,
            type: "just",
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="my-6 text-balance pb-0.5 text-[44px] font-medium leading-[1] -tracking-[0.01em]  [-webkit-text-fill-color:transparent] [color:unset] lg:text-[80px] lg:tracking-tight"
          style={{
            background:
              "linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38)) text",
          }}
        >
          unlease your inner financial warrior
        </motion.h1>
        <motion.p
          initial="initial"
          animate="animate"
          variants={easeDownVariants}
          transition={{
            duration: 0.5,
            type: "just",
            ease: "easeInOut",
            delay: 0.4,
          }}
          className="mb-12 text-balance capitalize text-lg font-normal leading-[1.3] text-[#b4bcd0] lg:text-[22px]"
        >
         trusted by over 5000+ traders
        </motion.p>
        <motion.button
          initial="initial"
          animate="animate"
          variants={easeDownVariants}
          transition={{
            duration: 0.5,
            type: "just",
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="flex h-12 items-center gap-2 rounded-full bg-[#5e6ad2] px-4 font-medium leading-[48px]"
        >
          Get started <ChevronRight />
        </motion.button>

        <DashboardMock />
      </div>
    </div>
  );
};

export default Hero;
