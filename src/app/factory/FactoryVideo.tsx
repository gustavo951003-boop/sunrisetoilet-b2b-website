"use client";

import { useRef, useState } from "react";

export function FactoryVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    try {
      await video.play();
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="factory-video-frame">
      <video
        ref={videoRef}
        controls
        preload="metadata"
        poster="/images/factory/production-line.webp"
        src="/videos/sunrise-factory-video.mp4"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
      </video>
      {!isPlaying ? (
        <button
          type="button"
          className="factory-video-play"
          aria-label="Play factory video"
          onClick={handlePlayClick}
        />
      ) : null}
    </div>
  );
}
