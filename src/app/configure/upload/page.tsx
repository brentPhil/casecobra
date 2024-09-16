"use client";
import React from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { cn } from "@/lib/utils";

const Page = () => {

  return (
    <div
      className={cn(
        "flex-1 relative flex flex-col my-16 items-center justify-center w-full h-full min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg"
      )}
    >
      <FileUpload />
    </div>
  );
};

export default Page;
