"use client";

import { useEffect, useState } from "react";
import { Eye, ArrowUpRight, Mail } from "lucide-react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const [isCaseStudy, setIsCaseStudy] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [isDevpost, setIsDevpost] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const [isGithub, setIsGithub] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isSite, setIsSite] = useState(false);
  const [isOverview, setIsOverview] = useState(false);

  const isPill =
    isCaseStudy ||
    isVideo ||
    isDevpost ||
    isBlog ||
    isGithub ||
    isEmail ||
    isSite ||
    isOverview;
  const pillOffset = isPill ? 12 : 8;

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
      if (!isInitialized) {
        setIsInitialized(true);
        setIsVisible(true);
      }
    };

    const updatePointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorElement = target.closest('[data-cursor="pointer"]');
      const isClickable =
        target.closest('a, button, [role="button"], [type="button"]') !==
          null || cursorElement !== null;
      const isCase = target.closest('[data-cursor="case-study"]') !== null;
      const isVideo = target.closest('[data-cursor="video"]') !== null;
      const isDevpost = target.closest('[data-cursor="devpost"]') !== null;
      const isBlog = target.closest('[data-cursor="blog"]') !== null;
      const isGithub = target.closest('[data-cursor="github"]') !== null;
      const isEmail = target.closest('[data-cursor="email"]') !== null;
      const isSite = target.closest('[data-cursor="site"]') !== null;
      const isOverview = target.closest('[data-cursor="overview"]') !== null;

      setIsPointer(isClickable);
      setIsCaseStudy(isCase);
      setIsVideo(isVideo);
      setIsDevpost(isDevpost);
      setIsBlog(isBlog);
      setIsGithub(isGithub);
      setIsEmail(isEmail);
      setIsSite(isSite);
      setIsOverview(isOverview);

      // Reset email copied state when hovering over a new element
      if (!isEmail) {
        setIsEmailCopied(false);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add click handler for email copying
    const handleClick = async (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const emailElement = target.closest('[data-cursor="email"]');

      if (emailElement) {
        e.preventDefault();
        try {
          await navigator.clipboard.writeText("rachelc0715@gmail.com");
          setIsEmailCopied(true);
          setTimeout(() => setIsEmailCopied(false), 3000);
        } catch (err) {
          console.error("Failed to copy email:", err);
        }
      }
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", updatePointer);
    document.addEventListener("mouseout", updatePointer);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", updatePointer);
      document.removeEventListener("mouseout", updatePointer);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Don't render the cursor on mobile
  if (isMobile) {
    return null;
  }

  // Morphing cursor (circle <-> pill)
  return (
    <div
      className="fixed pointer-events-none z-[9999] flex items-center"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isPill
          ? `translate(-${pillOffset}px, -50%)`
          : "translateY(-50%)",
        opacity: isVisible && isInitialized ? 1 : 0,
        transition: "opacity 0.3s ease-out, transform 0.1s ease-out",
        visibility: isInitialized ? "visible" : "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "var(--primary)",
          color: "#fff",
          borderRadius: isPill ? 32 : 999,
          width:
            isCaseStudy || isDevpost
              ? 172
              : isVideo
              ? 132
              : isBlog
              ? 122
              : isGithub
              ? 164
              : isEmailCopied
              ? 154
              : isEmail
              ? 130
              : isSite
              ? 148
              : isOverview
              ? 156
              : 16,
          height: isPill ? 30 : 16,
          fontWeight: 500,
          fontSize: "0.875rem",
          padding: isPill ? "0 10px" : 0,
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          boxShadow: isPill ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
          transition:
            "width 0.2s ease-out, height 0.2s ease-out, border-radius 0.2s ease-out, gap 0.2s ease-out, box-shadow 0.2s ease-out, color 0.2s ease-out, transform 0.1s ease-out, padding 0.2s ease-out, opacity 0.2s ease-out",
          justifyContent: "flex-start",
          transform: isMouseDown
            ? "scale(0.75)"
            : isPointer && !isPill
            ? "scale(1.5)"
            : "scale(1)",
          opacity: isPointer && !isPill ? 0.35 : 1,
        }}
      >
        <span
          style={{
            opacity: isPill ? 1 : 0,
            transition: "opacity 0.2s ease-out, margin 0.2s ease-out",
            display: "flex",
            alignItems: "center",
            marginRight: isPill ? 8 : 0,
            width: 16,
            overflow: "hidden",
          }}
        >
          {isCaseStudy || isOverview ? (
            <Eye style={{ width: 16, height: 16 }} />
          ) : isVideo || isDevpost || isBlog || isGithub || isSite ? (
            <ArrowUpRight style={{ width: 16, height: 16 }} />
          ) : isEmail ? (
            <Mail style={{ width: 16, height: 16 }} />
          ) : (
            <></>
          )}
        </span>
        <span
          style={{
            opacity: isPill ? 1 : 0,
            transition: "opacity 0.2s ease-out, width 0.2s ease-out",
            width: isPill ? "auto" : 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
          className="font-mono"
        >
          {isCaseStudy
            ? "VIEW CASE STUDY"
            : isVideo
            ? "VIEW VIDEO"
            : isDevpost
            ? "VIEW ON DEVPOST"
            : isBlog
            ? "VIEW BLOG"
            : isGithub
            ? "VIEW ON GITHUB"
            : isSite
            ? "VIEW WEBSITE"
            : isOverview
            ? "VIEW OVERVIEW"
            : isEmail
            ? isEmailCopied
              ? "EMAIL COPIED!"
              : "COPY EMAIL"
            : ""}
        </span>
      </div>
    </div>
  );
};

export default CustomCursor;
