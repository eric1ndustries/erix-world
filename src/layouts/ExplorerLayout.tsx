"use client";

import { useState } from "react";
import NavbarButton from "@/components/nav/NavbarButton";
import NavOverlay from "@/components/nav/NavOverlay";

export default function ExplorerLayout({ children }) {
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
