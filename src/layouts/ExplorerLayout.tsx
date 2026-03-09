"use client";

import { useState } from "react";
import NavbarButton from "@/components/Nav/NavbarButton";
import NavOverlay from "@/components/Nav/NavOverlay";
import { ReactNode } from "react";

type ExplorerLayoutProps = {
  children: ReactNode;
};

export default function ExplorerLayout({ children }: ExplorerLayoutProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* floating persistent nav */}
      <NavbarButton onClick={() => setOpen(true)} />

      {/* fullscreen overlay */}
      <NavOverlay open={open} onClose={() => setOpen(false)} />

      {/* world content */}
      {children}

    </div>
  );
}
