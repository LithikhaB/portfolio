"use client";
import { useState, useEffect } from "react";

export default function TypewriterText({
  text,
  speed = 30,
  onDone,
}: {
  text: string;
  speed?: number;
  onDone?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        onDone?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onDone]);

  return <span>{displayed}</span>;
}