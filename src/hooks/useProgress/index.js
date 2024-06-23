import { useState, useEffect } from "react";

const useProgress = (intervalDuration = 10000) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    let step = 100 / (intervalDuration / 100); // Calculate the step size

    const startProgress = () => {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + step;
        });
      }, 100);
    };

    startProgress();

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [intervalDuration]);

  return progress;
};

export default useProgress;
