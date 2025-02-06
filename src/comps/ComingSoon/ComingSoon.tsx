import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  // Set countdown target date to February 7, 2025, at 23:59:59
  const getTargetTime = () => new Date("February 7, 2025 23:59:59").getTime();

  const calculateTimeLeft = (dest) => {
    const now = new Date().getTime();
    let diff = dest - now; // Use the `dest` from function parameter

    if (diff <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
        expired: true,
      };
    }

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(
        Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0"),
      minutes: String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
      seconds: String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0"),
      expired: false,
    };
  };

  const [dest] = useState(getTargetTime());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(dest));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(dest));
    }, 1000);

    return () => clearInterval(timer);
  }, [dest]);

  return (
    <section className="relative flex items-center justify-center h-screen bg-orange-100">
      <div className="flex flex-col items-center gap-10 px-10 md:px-16 rounded-2xl">
        <div className="flex items-center">
          <img src="/assets/logo-main.png" alt="N-Mart logo" className="object-cover" />
          <span className="text-2xl font-bold ps-4">N-Mart</span>
        </div>
        <h2 className="text-5xl font-bold leading-normal text-center text-orange-500 md:text-6xl">
          Coming Soon
        </h2>
        <p className="text-base text-center text-gray-500">
          {timeLeft.expired ? "Launch happening now!" : `Just ${timeLeft.days} days remaining until the big reveal of our new product!`}
        </p>
        <div className="flex justify-center gap-3 text-2xl font-bold text-orange-500">
          <div className="text-center">
            <p>{timeLeft.days}</p>
            <span className="text-xs text-gray-500">DAYS</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <p>{timeLeft.hours}</p>
            <span className="text-xs text-gray-500">HRS</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <p>{timeLeft.minutes}</p>
            <span className="text-xs text-gray-500">MINS</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <p>{timeLeft.seconds}</p>
            <span className="text-xs text-gray-500">SECS</span>
          </div>
        </div>
        <h6 className="text-base font-semibold text-center text-orange-500">
          Launch Date: February 07, 2025
        </h6>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="text"
            className="w-80 focus:outline-none px-3.5 py-2 shadow-sm text-orange-500 placeholder-gray-400 text-sm bg-white rounded-lg border border-gray-200"
            placeholder="Type your mail..."
          />
          <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-500 hover:bg-orange-400 transition duration-700 rounded-lg shadow-sm">
            <span className="px-1.5 text-white text-sm font-medium">Notify Me</span>
          </button>
        </div>
        <p className="text-sm text-center text-gray-500">
          Get in touch with us:{" "}
          <a
            href="mailto:support@ngneit.com"
            className="transition duration-700 hover:text-gray-100"
          >
            support@ngneit.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;
