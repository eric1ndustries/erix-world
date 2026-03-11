"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const PLAYLIST_URL = "https://soundcloud.com/rojax-829938206/sets/erixworldep";
const SC_WIDGET_API = "https://w.soundcloud.com/player/api.js";

type Track = {
  title: string;
  user: { username: string };
  artwork_url: string | null;
};

declare global {
  interface Window {
    SC: {
      Widget: ((iframe: HTMLIFrameElement) => SCWidget) & {
        Events: {
          READY: string;
          PLAY: string;
          PAUSE: string;
          FINISH: string;
          PLAY_PROGRESS: string;
        };
      };
    };
  }
}

type SCWidget = {
  play: () => void;
  pause: () => void;
  next: () => void;
  prev: () => void;
  bind: (event: string, callback: (e?: unknown) => void) => void;
  getCurrentSoundIndex: (cb: (i: number) => void) => void;
  getSounds: (cb: (sounds: Track[]) => void) => void;
  getPosition: (cb: (pos: number) => void) => void;
  getDuration: (cb: (dur: number) => void) => void;
};

export default function VinylPlayer() {
  const iframeRef   = useRef<HTMLIFrameElement>(null);
  const widgetRef   = useRef<SCWidget | null>(null);
  const rotationRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  const [isPlaying,     setIsPlaying]     = useState(false);
  const [isReady,       setIsReady]       = useState(false);
  const [tracks,        setTracks]        = useState<Track[]>([]);
  const [currentIndex,  setCurrentIndex]  = useState(0);
  const [progress,      setProgress]      = useState(0); // 0–1
  const [rotation,      setRotation]      = useState(0);
  const [isDragging,    setIsDragging]    = useState(false);
  const [lastAngle,     setLastAngle]     = useState<number | null>(null);
  const [spinVelocity,  setSpinVelocity]  = useState(0);
  const accumulatedRef  = useRef(0);

  // ── Load SoundCloud Widget API script ──
  useEffect(() => {
    if (document.querySelector(`script[src="${SC_WIDGET_API}"]`)) return;
    const script = document.createElement("script");
    script.src = SC_WIDGET_API;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // ── Init widget once iframe + SC script are ready ──
  useEffect(() => {
    const init = () => {
      if (!iframeRef.current || !window.SC) return;

      const widget = window.SC.Widget(iframeRef.current);
      widgetRef.current = widget;

      widget.bind(window.SC.Widget.Events.READY, () => {
        setIsReady(true);
        widget.getSounds((sounds) => setTracks(sounds));
      });

      widget.bind(window.SC.Widget.Events.PLAY, () => {
        setIsPlaying(true);
        widget.getCurrentSoundIndex((i) => setCurrentIndex(i));
      });

      widget.bind(window.SC.Widget.Events.PAUSE,  () => setIsPlaying(false));
      widget.bind(window.SC.Widget.Events.FINISH, () => setIsPlaying(false));

      widget.bind(window.SC.Widget.Events.PLAY_PROGRESS, () => {
        widget.getPosition((pos) =>
          widget.getDuration((dur) =>
            setProgress(dur > 0 ? pos / dur : 0)
          )
        );
        widget.getCurrentSoundIndex((i) => setCurrentIndex(i));
      });
    };

    // Poll until SC is available
    const interval = setInterval(() => {
      if (window.SC) { clearInterval(interval); init(); }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // ── Vinyl spin animation ──
  useEffect(() => {
    if (isPlaying) {
      const tick = () => {
        rotationRef.current += 0.4;
        setRotation(rotationRef.current);
        animFrameRef.current = requestAnimationFrame(tick);
      };
      animFrameRef.current = requestAnimationFrame(tick);
    } else {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    }
    return () => { if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current); };
  }, [isPlaying]);

  // ── Drag to spin ──
  const getAngle = (e: React.PointerEvent, el: HTMLDivElement) => {
    const rect   = el.getBoundingClientRect();
    const cx     = rect.left + rect.width  / 2;
    const cy     = rect.top  + rect.height / 2;
    return Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    setLastAngle(getAngle(e, e.currentTarget));
    accumulatedRef.current = 0;
  };

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || lastAngle === null) return;

    const angle = getAngle(e, e.currentTarget);
    let delta   = angle - lastAngle;

    // Handle wrap-around
    if (delta >  180) delta -= 360;
    if (delta < -180) delta += 360;

    rotationRef.current += delta;
    setRotation(rotationRef.current);
    setLastAngle(angle);
    setSpinVelocity(delta);
    accumulatedRef.current += delta;

    // Every 360° of spin = next/prev track
    if (accumulatedRef.current >= 360) {
      accumulatedRef.current -= 360;
      widgetRef.current?.next();
    } else if (accumulatedRef.current <= -360) {
      accumulatedRef.current += 360;
      widgetRef.current?.prev();
    }
  }, [isDragging, lastAngle]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    setLastAngle(null);
    // If spun fast enough, trigger play
    if (Math.abs(spinVelocity) > 8 && !isPlaying) {
      widgetRef.current?.play();
    }
  }, [spinVelocity, isPlaying]);

  const togglePlay = () => {
    if (!isReady) return;
    if (isPlaying) {
      widgetRef.current?.pause();
    } else {
      widgetRef.current?.play();
    }
  };

  const currentTrack = tracks[currentIndex];

  return (
    <div className="flex flex-col items-center gap-8">

      {/* Hidden SoundCloud iframe */}
      <iframe
        ref={iframeRef}
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(PLAYLIST_URL)}&auto_play=false&buying=false&liking=false&download=false&sharing=false&show_artwork=false&show_comments=false&show_playcount=false&show_user=false&hide_related=true&visual=false&color=%23c17f3a`}
        width="1"
        height="1"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
        allow="autoplay"
        title="SoundCloud Player"
        aria-hidden="true"
      />

      {/* Accessible live region */}
      <div aria-live="polite" className="sr-only">
        {isPlaying && currentTrack
          ? `Now playing: ${currentTrack.title} by ${currentTrack.user.username}`
          : "Paused"}
      </div>

      {/* Vinyl record — draggable */}
      <div
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? "Pause music" : "Play music — drag to spin and change tracks"}
        className="relative w-[280px] h-[280px] select-none"
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          touchAction: "none",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClick={togglePlay}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") togglePlay(); }}
      >
        <svg
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ transform: `rotate(${rotation}deg)`, willChange: "transform" }}
        >
          {/* Outer disc */}
          <circle cx="140" cy="140" r="136" fill="#1c1208" />

          {/* Grooves */}
          {[134,128,122,116,110,104,98,92,86,80].map((r) => (
            <circle key={r} cx="140" cy="140" r={r}
              stroke="#2a1e10" strokeWidth="0.35" fill="none" />
          ))}

          {/* Highlight sheen */}
          <ellipse cx="110" cy="100" rx="40" ry="20"
            fill="white" opacity="0.03"
            transform="rotate(-30 110 100)" />

          {/* Label */}
          <circle cx="140" cy="140" r="52" fill="#e8d5a3" />
          <circle cx="140" cy="140" r="38" fill="#dfc98a" />
          <circle cx="140" cy="140" r="46" stroke="#c17f3a" strokeWidth="0.5" fill="none" />
          <line x1="110" y1="130" x2="170" y2="130" stroke="#9e3d2b" strokeWidth="0.6" opacity="0.6" />
          <line x1="115" y1="148" x2="165" y2="148" stroke="#9e3d2b" strokeWidth="0.4" opacity="0.4" />

          {/* Spindle */}
          <circle cx="140" cy="140" r="5" fill="#1c1208" />
        </svg>

        {/* Static label text — sits on top, doesn't rotate */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ paddingBottom: 4 }}>
          <span className="font-mono text-[6px] tracking-[3px] text-rust opacity-90 uppercase">
            ERIX WORLD
          </span>
          <span className="font-mono text-[5px] tracking-[2px] text-faded opacity-70 mt-1 uppercase">
            {currentTrack ? `SIDE ${currentIndex % 2 === 0 ? "A" : "B"}` : "SIDE A"}
          </span>
          <span className="font-mono text-[4.5px] tracking-[1.5px] text-faded opacity-50 mt-1">
            2024
          </span>
        </div>

        {/* Play/pause indicator — fades in on hover */}
        {!isDragging && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`
              w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center
              bg-ink/40 backdrop-blur-sm transition-opacity duration-300
              ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-60"}
            `}>
              {isPlaying ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="2" y="2" width="3" height="8" fill="#e8e0d0" opacity="0.8"/>
                  <rect x="7" y="2" width="3" height="8" fill="#e8e0d0" opacity="0.8"/>
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 2l7 4-7 4V2z" fill="#e8e0d0" opacity="0.8"/>
                </svg>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Track info */}
      <div className="flex flex-col items-center gap-2 text-center min-h-[48px]">
        {isReady && currentTrack ? (
          <>
            <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-amber/70">
              {`Track ${currentIndex + 1} of ${tracks.length}`}
            </p>
            <p className="font-display italic text-ink/80 leading-tight"
              style={{ fontSize: "clamp(14px, 1.4vw, 17px)", fontWeight: 400 }}>
              {currentTrack.title}
            </p>
            <p className="font-body italic text-faded/50 text-[12px]">
              {currentTrack.user.username}
            </p>
          </>
        ) : (
          <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-faded/30">
            {isReady ? "Ready" : "Loading..."}
          </p>
        )}
      </div>

      {/* Progress bar */}
      <div className="w-[280px] flex flex-col gap-2">
        <div className="w-full h-px bg-ink/10 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-amber transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Prev / Next */}
        { isReady && (
<div className="flex justify-between items-center">
          <button
            onClick={(e) => { e.stopPropagation(); widgetRef.current?.prev(); }}
            aria-label="Previous track"
            className="font-mono text-[8px] tracking-[0.25em] uppercase text-faded/50
              hover:text-ink disabled:opacity-20 transition-colors cursor-none"
          >
            ← Prev
          </button>

          <span className="font-mono text-[7px] tracking-[0.2em] text-faded/30 uppercase">
            Drag to spin
          </span>

          <button
            onClick={(e) => { e.stopPropagation(); widgetRef.current?.next(); }}
            disabled={!isReady}
            aria-label="Next track"
            className="font-mono text-[8px] tracking-[0.25em] uppercase text-faded/50
              hover:text-ink disabled:opacity-20 transition-colors cursor-none"
          >
            Next →
          </button>
        </div>
        )}
      </div>

      {/* Catalog number */}
      <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-faded/40">
        Cat. No. EW-001
      </p>
    </div>
  );
}
