import { useEffect, useState } from "react";

export default function Timer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 text-center justify-center
    ">
      <div>
        <p className=" text-15 font-bold border-3 border-primary rounded-full p-4 w-16 h-16 sm:w-25 sm:h-25 sm:text-4xl">{timeLeft.days || 0}</p>
        <span className="text-sm">Days</span>
      </div>
      <div>
        <p className=" text-15 font-bold border-3 border-primary rounded-full p-4 w-16 h-16 sm:w-25 sm:h-25 sm:text-4xl">{timeLeft.hours || 0}</p>
        <span className="text-sm">Hours</span>
      </div>
      <div>
        <p className=" text-15 font-bold border-3 border-primary rounded-full p-4 w-16 h-16 sm:w-25 sm:h-25 sm:text-4xl">{timeLeft.minutes || 0}</p>
        <span className="text-sm">Minutes</span>
      </div>
      <div>
        <p className=" text-15 font-bold border-3 border-primary rounded-full p-4 w-16 h-16 sm:w-25 sm:h-25 sm:text-4xl">{timeLeft.seconds || 0}</p>
        <span className="text-sm">Seconds</span>
      </div>
    </div>
  );
};


