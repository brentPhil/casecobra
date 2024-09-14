// components/ParagraphHighlight.tsx
import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

interface ParagraphHighlightProps {
  text?: string;
  textClass?: string;
  className?: string;
}

const ParagraphHighlight: React.FC<
  PropsWithChildren<ParagraphHighlightProps>
> = ({ text, textClass, children, className }) => {
  const highlightedText = (paragraph: string) => {
    const parts = paragraph.split(new RegExp(`(${text})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === text?.toLowerCase() ? (
        <span key={index} className={cn(textClass)}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return <p className={cn(className)}>{highlightedText(children as string)}</p>;
};

export default ParagraphHighlight;
