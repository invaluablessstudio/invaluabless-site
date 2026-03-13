"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { Beat } from "@/data/beats";

type BeatPlayerContextType = {
  currentBeat: Beat | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playBeat: (beat: Beat) => void;
  togglePlayPause: () => void;
  seekTo: (time: number) => void;
  closePlayer: () => void;
};

const BeatPlayerContext = createContext<BeatPlayerContextType | undefined>(
  undefined
);

export function BeatPlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentBeat, setCurrentBeat] = useState<Beat | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const playBeat = async (beat: Beat) => {
    const audio = audioRef.current;
    if (!audio) return;

    const isSameBeat = currentBeat?.slug === beat.slug;

    if (isSameBeat) {
      if (audio.paused) {
        try {
          await audio.play();
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      } else {
        audio.pause();
      }
      return;
    }

    setCurrentBeat(beat);
    setCurrentTime(0);
    setDuration(0);

    audio.src = beat.audioUrl;
    audio.load();

    try {
      await audio.play();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio || !currentBeat) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Error resuming audio:", error);
      }
    } else {
      audio.pause();
    }
  };

  const seekTo = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = time;
    setCurrentTime(time);
  };

  const closePlayer = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.removeAttribute("src");
    audio.load();

    setCurrentBeat(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  };

  return (
    <BeatPlayerContext.Provider
      value={{
        currentBeat,
        isPlaying,
        currentTime,
        duration,
        playBeat,
        togglePlayPause,
        seekTo,
        closePlayer,
      }}
    >
      {children}
    </BeatPlayerContext.Provider>
  );
}

export function useBeatPlayer() {
  const context = useContext(BeatPlayerContext);

  if (!context) {
    throw new Error("useBeatPlayer must be used inside BeatPlayerProvider");
  }

  return context;
}