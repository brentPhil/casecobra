import React from "react";
import { MODELS, Options } from "@/validators/option-validator";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { Label } from "./label";

interface ModelPickerProps {
  options: Options;
  setOptions: React.Dispatch<React.SetStateAction<Options>>;
}

const ModelPicker: React.FC<ModelPickerProps> = ({ options, setOptions }) => {
  return (
    <div className="relative flex flex-col gap-3 w-full">
      <Label>Model</Label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-fit min-w-44 justify-between"
          >
            {options.model.label}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {MODELS.options.map((model) => (
            <DropdownMenuItem
              key={model.label}
              className={cn(
                "flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100",
                {
                  "bg-zinc-100": model.label === options.model.label,
                }
              )}
              onClick={() => {
                setOptions((prev) => ({ ...prev, model }));
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  model.label === options.model.label
                    ? "opacity-100"
                    : "opacity-0"
                )}
              />
              {model.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ModelPicker;
