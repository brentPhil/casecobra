"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface StarRatingProps {
  readOnly?: boolean;
  defaultRating?: number;
  size?: "sm" | "md";
}

const sizeStyles = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
};

const StarRating: React.FC<StarRatingProps> = ({
  readOnly = false,
  defaultRating = 0,
  size = "sm",
}) => {
  const [rating, setRating] = useState<number>(defaultRating);
  const sizeClass = sizeStyles[size];

  const handleRating = (rate: number) => {
    if (!readOnly) setRating(rate);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          whileHover={{ scale: readOnly ? 1 : 1.2 }}
          onClick={() => handleRating(star)}
          className={`${
            !readOnly && "cursor-pointer"
          } transition-colors duration-200 ${
            star <= rating ? "text-primary" : "text-muted"
          }`}
        >
          <Star
            className={`${sizeClass} ${star <= rating ? "fill-current" : ""}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default StarRating;
