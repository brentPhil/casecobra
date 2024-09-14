"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface LinkItem {
  title: string;
  href: string;
}

interface LinksProps {
  links: LinkItem[];
}

const HoverLinks: React.FC<LinksProps> = ({ links }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {links.map(({ title, href }, i) => (
        <div
          key={i}
          className="relative cursor-pointer group z-30 py-3 px-3 text-sm font-medium"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.span
                className="absolute left-3 right-6 h-[3px] bottom-2 bg-primary rounded-full"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Link href={href}>{title}</Link>
        </div>
      ))}
    </>
  );
};

export default HoverLinks;
