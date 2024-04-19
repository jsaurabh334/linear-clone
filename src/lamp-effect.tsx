import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../hooks/window-dimensions";

const LampEffect = ({ color = "#352a4f" }) => {
    const lampRef = useRef<HTMLDivElement | null>(null);
    const isLampInView = useInView(lampRef, { margin: "-50%", once: false });

    const { width } = useWindowDimensions();

    const [lampWidth, setLampWidth] = useState(width >= 1024 ? 65 : 20);
    const [lampExpandDiff, setLampExpandDiff] = useState(
        width > 1024 ? 10 : 30
    );

    useEffect(() => {
        if (width >= 1024) {
            setLampWidth(65);
            setLampExpandDiff(10);
        } else {
            setLampWidth(20);
            setLampExpandDiff(30);
        }
    }, [width]);

    return (
        <div className="flex relative w-full" ref={lampRef}>
            <div className="w-full [mask-image:linear-gradient(to_top,white,transparent)] h-40 absolute bg-slate-950 left-0 z-10 bottom-0"></div>
            <motion.div
                initial={{
                    backgroundImage: `conic-gradient(from 90deg at ${
                        lampWidth + lampExpandDiff
                    }% 0%, ${color}50 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
                }}
                animate={
                    isLampInView
                        ? {
                              backgroundImage: `conic-gradient(from 90deg at ${lampWidth}% 0%, ${color} 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
                          }
                        : {}
                }
                transition={{
                    duration: 0.7,
                }}
                className="flex-1 h-96 bg-[0px_0px] [background-size:100%_100%]"
            ></motion.div>
            <motion.div
                initial={{
                    backgroundImage: `conic-gradient(from 90deg at ${
                        lampWidth + lampExpandDiff
                    }% 0%, ${color}50 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
                }}
                animate={
                    isLampInView
                        ? {
                              backgroundImage: `conic-gradient(from 90deg at ${lampWidth}% 0%, ${color} 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
                          }
                        : {}
                }
                transition={{
                    duration: 0.7,
                }}
                className="flex-1 h-96 bg-[0px_0px] [background-size:100%_100%] [transform:scale(-1,1)]"
            ></motion.div>
            <div className="absolute flex justify-center w-full h-fit z-20 top-20">
                <motion.h1
                    initial={{
                        y: 50,
                    }}
                    animate={isLampInView ? { y: 0 } : {}}
                    transition={{
                        duration: 0.7,
                    }}
                    className="text-[40px] lg:text-[80px] font-medium pb-4 text-center [background:radial-gradient(40%_70%_at_50%_100%,rgba(255,255,255,0.4),rgb(255,255,255))_text] [-webkit-box-decoration-break:clone] [-webkit-text-fill-color:transparent] text-[unset] tracking-[-0.01em] leading-[0.9]"
                >
                    Issue tracking <br /> you'll enjoy using
                </motion.h1>
            </div>
        </div>
    );
};

export default LampEffect;
