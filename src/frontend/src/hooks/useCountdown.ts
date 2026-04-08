import { useEffect, useState } from "react";
import type { CountdownTime } from "../types";

function getTimeUntilMidnight(): CountdownTime {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight.getTime() - now.getTime();

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
}

export function useCountdown(): CountdownTime {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(getTimeUntilMidnight);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeUntilMidnight());
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}
