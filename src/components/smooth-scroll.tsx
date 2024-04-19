"use client";

import Lenis from "@studio-freight/lenis";
import { PropsWithChildren, useEffect } from "react";

const SmoothScroll = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
};

export default SmoothScroll;
