import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface PhoneProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
  className?: string;
}

const Phone: React.FC<PhoneProps> = ({ className, imgSrc, dark, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "relative overflow-hidden rounded-[2.1rem] pointer-events-none z-50",
        className
      )}
    >
      <Image
        width={600}
        height={600}
        alt="Phone Image"
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 w-full select-none"
      />
      <div className=" absolute -z-10 inset-0">
        <Image
          width={600}
          height={600}
          alt="Costum Case Design Image"
          src={imgSrc}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Phone;
