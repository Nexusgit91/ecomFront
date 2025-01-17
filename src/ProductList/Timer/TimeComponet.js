import React, { useEffect, useState } from "react";
import "./TimeComponent.css";

function TimeComponent() {
  const [timeLeft, setTimeLeft] = useState({
    hours: "12",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      //change the time here
      const saleEnd = new Date("2023-04-28T00:00:00Z").getTime();
      const timeDiff = saleEnd - now;

      if (timeDiff <= 0) {
        setTimeLeft({
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        clearInterval(interval);
      } else {
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft({
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="time-component mx-auto"
      style={{
        height: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="countdown" style={{ fontSize: "40px" }}>
        <div className="countdown-item">
          <span id="hours">{timeLeft.hours}</span>
          <div className="countdown-label" style={{ fontSize: "30px" }}>
            hrs
          </div>
        </div>
        <div className="countdown-item">
          <span id="minutes">{timeLeft.minutes}</span>
          <div className="countdown-label" style={{ fontSize: "30px" }}>
            mins
          </div>
        </div>
        <div className="countdown-item">
          <span id="seconds">{timeLeft.seconds}</span>
          <div className="countdown-label" style={{ fontSize: "30px" }}>
            sec
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeComponent;
