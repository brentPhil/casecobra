"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";
import StarRating from "./StarRating";
import { Check } from "lucide-react";
import Image from "next/image";
import ParagraphHighlight from "./ParagraphHighlight";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    profile: string;
    quote: string;
    name: string;
    rating: number;
    highLight?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }

    addAnimation();
  }, [getDirection, getSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, i) => (
          <li
            className="w-[350px] max-w-full relative rounded-md border bg-background flex-shrink-0 py-6 px-8 md:w-[450px]"
            key={i}
          >
            <blockquote className="flex flex-col h-full gap-4">
              <StarRating readOnly size="sm" defaultRating={item.rating} />

              <ParagraphHighlight
                text={item.highLight}
                textClass="text-primary font-bold"
                className="h-full relative z-20 text-xs sm:text-sm leading-[1.6] text-foreground font-normal"
              >
                {item.quote}
              </ParagraphHighlight>

              <div className="relative z-20 mt-6 flex flex-row items-center gap-3">
                <Image
                  width={100}
                  height={100}
                  alt={item.name}
                  src={item.profile}
                  className="w-12 aspect-square rounded-full object-cover"
                />
                <span className="flex flex-col">
                  <span className=" text-md text-muted-foreground font-bold">
                    {item.name}
                  </span>
                  <div className="flex gap-1.5 items-center text-muted-foreground">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
