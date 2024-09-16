"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
const STEPS = [
  {
    name: "Step 1: Add image",
    description: "Choose an image for your case",
    url: "/upload",
  },
  {
    name: "Step 2: Cutomize design",
    description: "Make then case yours",
    url: "/design",
  },
  {
    name: "Step 3: Summary",
    description: "Review your final design",
    url: "/preview",
  },
];

const Steps = () => {
  const pathname = usePathname();

  return (
    <ol className="rounded-md bg-background lg:flex lg:rounded-none lg:border-l lg:border-r lg:border">
      {STEPS.map((step, i) => {
        const isCurrent = pathname.endsWith(step.url);
        const isCompleted = STEPS.slice(i + 1).some((step) =>
          pathname.endsWith(step.url)
        );

        const imgPath = `/snake-${i + 1}.png`;

        return (
          <li
            key={step.name}
            className={`relative overflow-hidden lg:flex-1 ${
              pathname === step.url ? "bg-primary text-white" : "bg-background"
            }`}
          >
            <div className="">
              <span
                className={cn(
                  " absolute left-0 top-0 h-full w-1 bg-muted lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
                  {
                    "bg-muted-foreground": isCurrent,
                    "bg-primary": isCompleted,
                  }
                )}
                aria-hidden="true"
              />

              <span
                className={cn(
                  i !== 0 ? "lg:pl-9" : "",
                  "flex items-center px-6 py-4 text-sm font-medium"
                )}
              >
                <span className="flex-shrink-0">
                  <Image
                    width={200}
                    height={100}
                    src={imgPath}
                    alt={step.name}
                    className={cn(
                      "flex h-20 w-20 object-contain items-center justify-center",
                      {
                        "border-none": isCompleted,
                        "border-muted-foreground": isCurrent,
                      }
                    )}
                  />
                </span>
                <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                  <span
                    className={cn(
                      "text-sm font-semibold text-muted-foreground",
                      {
                        "text-none": isCompleted,
                        "text-muted-foreground": isCurrent,
                      }
                    )}
                  >
                    {step.name}
                  </span>
                  <span className="text-sm text-muted-foreground/60">
                    {step.description}
                  </span>
                </span>
              </span>
              {/* separator */}
              {i != 0 ? (
                <div className=" absolute inset-0 w-3 hidden lg:block">
                  <svg
                    className="h-full w-full text-border"
                    viewBox="0 0 12 82"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0V31L10.5 41L0.5 51V82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Steps;
