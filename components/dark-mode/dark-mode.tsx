"use client";

import * as React from "react";
import { useTheme } from "next-themes";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function DarkMode({ children, className }: Props) {
  const { setTheme, theme } = useTheme();

  return (
    <li
      role="button"
      className={className}
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      {children}
    </li>
  );
}
