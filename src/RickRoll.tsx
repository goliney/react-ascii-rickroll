import { useState, useEffect } from 'react';
import { RICKROLL_FRAMES } from './frames';

export type RickRollProps = {
  frameDurationMs?: number;
  className?: string;
};

/**
 * This component is responsible for rendering the Rickroll animation.
 */
export function RickRoll({ frameDurationMs = 100, className }: RickRollProps) {
  const [frameIndex, setFrameIndex] = useState(0);

  // Update the frame index every frameDurationMs
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => {
        const next = prev + 1;
        return next >= RICKROLL_FRAMES.length ? 0 : next;
      });
    }, frameDurationMs);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <pre className={className}>{RICKROLL_FRAMES[frameIndex]}</pre>;
}
