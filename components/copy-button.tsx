"use client";
import { Copy } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  message: string;
  className?: string;
}

export const CopyButton = ({ message, className }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(message);
  };
  return (
    <Button size={"icon"} variant={"ghost"} onClick={handleCopy} className={className}>
      <Copy />
    </Button>
  );
};
