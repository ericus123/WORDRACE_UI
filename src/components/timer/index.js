import React from "react";
import { useState, useEffect } from "react";
import NotificationManager from "react-notifications/lib/NotificationManager";

export const Timer = ({
  initialSeconds,
  initialMinutes,
  timer,
  handleTimeOff,
  handleCurrentTime,
}) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    if (timer) {
      let myInterval = setInterval(() => {
        handleCurrentTime(minutes * 60 + seconds);
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            NotificationManager.error("Time is up, You failed!", "GAME OVER");
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        timer ? clearInterval(myInterval) : null;
      };
    }
  });

  useEffect |
    (() => {
      if (!timer) {
        console.log(minutes);
        handleTimeOff(minutes * 60 + seconds);
      }
    },
    [timer]);
  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <h1 className="txt-white">
          {minutes === 0 ? null : `${minutes}:`}{" "}
          {seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
    </div>
  );
};
