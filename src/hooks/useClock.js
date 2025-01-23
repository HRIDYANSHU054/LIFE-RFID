import { useEffect, useState } from "react";

function useClock(initialTime = 5) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => (prevTime === 0 ? initialTime : prevTime - 1));
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [initialTime]);

  return { time, setTime };
}

export default useClock;
