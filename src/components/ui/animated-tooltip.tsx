"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    name: string;
    quote: string;
    profile: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, i) => (
        <div
          className={` -mr-4 relative group`}
          key={item.name}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === i && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-14 -inset-x-1/2 h-fit w-fit flex flex-col items-center justify-center rounded-md bg-primary z-50 shadow-xl px-4 py-2"
              >
                <div className="w-full flex flex-col items-center justify-center z-30 absolute inset-x-0 -bottom-px">
                  <div className="w-[40%] bg-gradient-to-r from-transparent via-teal-500 to-transparent h-px " />
                  <div className="w-[20%] -translate-y-[1px] bg-gradient-to-r from-transparent via-primary to-transparent h-px " />
                </div>
                <div className="font-bold text-primary-foreground relative z-30 text-base">
                  {item.name}
                </div>
                {/* <div className="text-primary-foreground">{item.quote}</div> */}
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.profile}
            alt={item.name}
            className="object-cover !m-0 border object-top rounded-full h-12 w-12 group-hover:scale-105 group-hover:z-30 bg-card relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};
