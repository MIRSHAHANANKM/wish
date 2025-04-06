import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CountdownTimer = () => {
  // Set the target date for the next meeting
  const targetDate = new Date("2025-07-20T00:00:00");

  // Calculate the difference in milliseconds
  // eslint-disable-next-line no-unused-vars
  const getRemainingTime = () => {
    const now = new Date();
    const difference = targetDate - now;
    // eslint-disable-next-line no-unused-vars
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    // eslint-disable-next-line no-unused-vars
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // eslint-disable-next-line no-unused-vars
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    // eslint-disable-next-line no-unused-vars
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  // Get the initial remaining time
  const { days, hours, minutes, seconds } = getRemainingTime();

  return (
    <div className="flex justify-center items-center py-20">
      <div className="text-center">
        <h2 className="text-white text-2xl mb-4">Counting down to our next meet...</h2>
        <CountdownCircleTimer
          isPlaying
          duration={targetDate / 1000} // Total time in seconds
          colors={[["#00FF00", 0.33], ["#FFFF00", 0.33], ["#FF0000", 0.33]]}
        >
          {({ remainingTime }) => {
            const timeLeft = getRemainingTime();
            return remainingTime === 0 ? (
              <div className="text-xl font-bold text-white">It's time!</div>
            ) : (
              <div className="text-xl font-bold text-white">
                <div>{timeLeft.days} Days</div>
                <div>{timeLeft.hours} Hours</div>
                <div>{timeLeft.minutes} Minutes</div>
                <div>{timeLeft.seconds} Seconds</div>
              </div>
            );
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default CountdownTimer;
