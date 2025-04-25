import { useState, useEffect } from "react";

const useScrollGradient = () => {
  const [gradient, setGradient] = useState("linear-gradient(to bottom, #ff7e5f, #feb47b)");
  useEffect(() => {
    const updateGradient = () => {
      const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);

      // Generate color values dynamically based on scroll position
      const r1 = Math.round(255 - scrollPercentage * 100);
      const g1 = Math.round(126 + scrollPercentage * 50);
      const b1 = Math.round(95 + scrollPercentage * 50);

      const r2 = Math.round(254 - scrollPercentage * 80);
      const g2 = Math.round(180 + scrollPercentage * 40);
      const b2 = Math.round(123 + scrollPercentage * 40);

      setGradient(`linear-gradient(to bottom, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`);    
    };

    window.addEventListener("scroll", updateGradient);
    return () => window.removeEventListener("scroll", updateGradient);
  }, [])

  return {
    background: gradient,
    transition: "0.2s ease-in-out"
  }
}

export default useScrollGradient;
// This hook can be used in any component to apply a dynamic gradient background based on scroll position.