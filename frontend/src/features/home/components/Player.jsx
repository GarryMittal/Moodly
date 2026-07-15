import { useEffect, useRef, useState } from "react";
import "./player.scss";
import { useSong } from "../hooks/useSong";

const Player = () => {
  const { song } = useSong();

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  // useEffect(() => {
  //     if (!song) return;

  //     setIsPlaying(false);
  //     setCurrentTime(0);

  //     if (audioRef.current) {
  //         audioRef.current.load();
  //     }
  // }, [song]);

  useEffect(() => {
    if (!song || !audioRef.current) return;

    const audio = audioRef.current;

    setCurrentTime(0);

    audio.load();

    const handleCanPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error(err.response?.data?.message || err.message);
      }
    };

    audio.addEventListener("canplay", handleCanPlay);

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
    };
  }, [song]);

  const playPause = async () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error(err.response?.data?.message || err.message);
      }
    }
  };

  const updateProgress = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const time = Number(e.target.value);

    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolume = (e) => {
    const value = Number(e.target.value);

    setVolume(value);

    audioRef.current.volume = value;
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";

    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);

    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  if (!song) {
    return (
      <div className="player">
        <h2>No song selected</h2>
      </div>
    );
  }

  return (
    <div className="player">
      <div className="song-info">
        <h2>{song.title}</h2>
        <p>Mood : {song.mood}</p>
      </div>

      <div className="progress">
        <span>{formatTime(currentTime)}</span>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
        />

        <span>{formatTime(duration)}</span>
      </div>

      <div className="controls">
        <button onClick={playPause}>{isPlaying ? "⏸ Pause" : "▶ Play"}</button>
      </div>

      <div className="volume">
        <span>🔊</span>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
        />
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={updateProgress}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={song.url} type="audio/mpeg" />
        Your browser does not support audio.
      </audio>
    </div>
  );
};

export default Player;
