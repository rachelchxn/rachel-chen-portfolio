"use client";
import { useEffect, useRef, useState } from "react";

interface ProjectThumbnailProps {
  project: {
    slug: string;
    image: string;
    title: string;
  };
}

const projectColors: Record<string, string> = {
  earth: "#1351C9",
  pokergpt: "#7952E9",
  "1password": "#D9EAD5",
  RBC: "#0C72D9",
  linkedin: "#7FB9F5",
  chattin: "#D97555",
};

export default function ProjectThumbnail({ project }: ProjectThumbnailProps) {
  const [hasVideo, setHasVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if video exists
    fetch(`/projects/${project.slug}/${project.slug}.mov`)
      .then((response) => {
        if (response.ok) {
          setHasVideo(true);
        }
      })
      .catch(() => {
        setHasVideo(false);
      });
  }, [project.slug]);

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsVideoReady(true);
      });
    }
  };

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden">
      {hasVideo ? (
        <>
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              backgroundColor: projectColors[project.slug] || "#1A1A1A",
              opacity: isVideoReady ? 0 : 0.25,
            }}
          />
          <video
            ref={videoRef}
            src={`/projects/${project.slug}/${project.slug}.mov`}
            poster={`/projects/${project.slug}/${project.slug}.mov#t=0.1`}
            className={`w-full h-full object-cover scale-110 transition-opacity duration-500 ${
              isVideoReady ? "opacity-100" : "opacity-0"
            }`}
            loop
            muted
            autoPlay
            playsInline
            preload="metadata"
            onLoadedData={handleVideoLoad}
          />
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: projectColors[project.slug] || "#1A1A1A",
            opacity: 0.25,
          }}
        />
      )}
    </div>
  );
}
