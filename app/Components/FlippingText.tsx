"use client";

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

type customInput = {
  textData: string[];
  interval: number;
};
const FlippingText = ({ textData, interval = 3000 }: customInput) => {
  const index = 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentText = textData[currentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textData.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [textData, interval]);

  const props = useSpring({
    from: { transform: "translateY(-100px)" },
    to: { transform: "translateY(0px)" },
    config: { duration: 500 },
    delay: index * 200, // Optional delay for each character
    onStart: () => console.log("Animation started"),
    onRest: () => console.log("Animation finished"),
  });

  // Split text into individual characters for flipping effect
  const chars = currentText.split("");

  return (
    <div className="text-center">
      {chars.map((char, index) => (
        <animated.span
          key={index}
          style={props}
          className="text-4xl font-semibold "
        >
          {char}
        </animated.span>
      ))}
    </div>
  );
};

export default FlippingText;
