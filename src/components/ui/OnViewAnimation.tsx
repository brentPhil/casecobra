'use client'
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OnViewAnimationProps extends HTMLMotionProps<"div"> {
  id?: string;
  children: React.ReactNode;
  once?: boolean;
  className?: string;
  delay?: number;
  startFrom?: "top" | "bottom" | "left" | "right";
}

const OnViewAnimation: React.FC<OnViewAnimationProps> = ({
  children,
  once = true,
  className,
  delay = 0,
  id,
  startFrom = "bottom",
  ...props
}) => {
  const fadeInAnimation = {
    top: { y: -20, opacity: 0 },
    bottom: { y: 20, opacity: 0 },
    left: { x: -20, opacity: 0 },
    right: { x: 20, opacity: 0 },

    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 * index,
        ease: "easeOut",
        once: true,
      },
    }),
  };

  return (
    <motion.div
      id={id}
      variants={fadeInAnimation}
      initial={startFrom}
      whileInView="animate"
      viewport={{
        once: once,
      }}
      custom={1 + delay}
      className={(cn(), className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default OnViewAnimation;
