"use client";

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  endTime: string;
}

export function CountdownTimer({ endTime }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endTime) - +new Date();
      let timeLeft = {
        hours: '00',
        minutes: '00',
        seconds: '00',
      };

      if (difference > 0) {
        timeLeft = {
          hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation to avoid delay
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [endTime]);

  const renderTimeBlock = (value: string, label: string) => (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold text-foreground bg-background/50 rounded-lg px-3 py-2">
        {value}
      </div>
      <div className="text-xs font-medium text-muted-foreground mt-1">{label}</div>
    </div>
  );

  return (
    <div className="flex justify-center items-center gap-3 mt-3">
      {renderTimeBlock(timeLeft.hours, 'Horas')}
      <span className="text-3xl font-bold text-foreground">:</span>
      {renderTimeBlock(timeLeft.minutes, 'Minutos')}
      <span className="text-3xl font-bold text-foreground">:</span>
      {renderTimeBlock(timeLeft.seconds, 'Segundos')}
    </div>
  );
}
