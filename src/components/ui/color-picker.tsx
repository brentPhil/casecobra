import React from "react";
import { RadioGroup, Radio } from "@headlessui/react";
import { Label } from "@/components/ui/label";
import { COLORS, Options } from "@/validators/option-validator";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ColorPicker {
  options: Options;
  setOptions: React.Dispatch<React.SetStateAction<Options>>;
}

const ColorPicker: React.FC<ColorPicker> = ({ options, setOptions }) => {
  return (
    <RadioGroup
      value={options.color}
      onChange={(val) => {
        setOptions((prev) => ({
          ...prev,
          color: val,
        }));
      }}
    >
      <Label>Color: {options.color.label}</Label>
      <div className="mt-3 flex items-center gap-3">
        {COLORS.map((color) => (
          <motion.div
            key={color.label}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.01 }} // Scale up on hover
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10, // Controls the spring's damping
            }}
          >
            <Radio
              value={color}
              className={cn(
                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent",
                options.color === color ? `border-${color.tw}` : ""
              )}
            >
              <motion.span
                className={cn(
                  `bg-${color.tw}`,
                  "h-6 w-6 rounded-full border border-black border-opacity-10"
                )}
                whileHover={{ scale: 1.2 }} // Scale up on hover
                transition={{ duration: 0.3 }}
              />
            </Radio>
          </motion.div>
        ))}
      </div>
    </RadioGroup>
  );
};

export default ColorPicker;
