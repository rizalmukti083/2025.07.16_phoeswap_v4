
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  endTime: number; // Unix timestamp in seconds
  prefix?: string;
}

const Countdown: React.FC<CountdownProps> = ({ endTime, prefix }) => {
  const calculateTimeLeft = () => {
    const difference = endTime * 1000 - new Date().getTime();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center">
      {prefix && <p className="text-phoenix-text-secondary mb-2">{prefix}</p>}
      <div className="flex justify-center gap-4 text-white">
        <div><span className="font-bold text-2xl">{String(timeLeft.days).padStart(2, '0')}</span><span className="text-xs block">Days</span></div>
        <div><span className="font-bold text-2xl">{String(timeLeft.hours).padStart(2, '0')}</span><span className="text-xs block">Hours</span></div>
        <div><span className="font-bold text-2xl">{String(timeLeft.minutes).padStart(2, '0')}</span><span className="text-xs block">Mins</span></div>
        <div><span className="font-bold text-2xl">{String(timeLeft.seconds).padStart(2, '0')}</span><span className="text-xs block">Secs</span></div>
      </div>
    </div>
  );
};

export default Countdown;
