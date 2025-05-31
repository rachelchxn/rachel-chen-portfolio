"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Initial check
    checkMobile();

    // Listen for window resize
    window.addEventListener("resize", checkMobile);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updatePointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorElement = target.closest('[data-cursor="pointer"]');
      const isClickable =
        target.closest('a, button, [role="button"], [type="button"]') !==
          null || cursorElement !== null;

      if (cursorElement) {
        console.log("Found cursor element:", cursorElement);
      }

      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", updatePointer);
    document.addEventListener("mouseout", updatePointer);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Log initial state
    console.log("Initial cursor state:", { position, isPointer });

    return () => {
      window.removeEventListener("resize", checkMobile);
      console.log("Cleaning up cursor event listeners");
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", updatePointer);
      document.removeEventListener("mouseout", updatePointer);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Log state changes
  useEffect(() => {
    console.log("Cursor state updated:", { position, isPointer });
  }, [position, isPointer]);

  // Don't render the cursor on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.2s ease-out",
      }}
    >
      <div
        style={{
          width: "16px",
          height: "16px",
          backgroundColor: "var(--primary)",
          borderRadius: "50%",
          transform: isMouseDown
            ? "scale(0.5)"
            : isPointer
            ? "scale(1.5)"
            : "scale(1)",
          opacity: isPointer ? "0.3" : "1",
          transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
        }}
      />
    </div>
  );
};

export default CustomCursor;
