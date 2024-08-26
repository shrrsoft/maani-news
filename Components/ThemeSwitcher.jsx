// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mx-3">
      {theme === "light" ? (
        <IoMoon onClick={() => setTheme("dark")} />
      ) : (
        <MdOutlineLightMode onClick={() => setTheme("light")} />
      )}
    </div>
  );
}
