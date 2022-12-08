import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={[
        "Cars",
        1500,
        "Suv's",
        1500,
        "Trucks",
        1500,
        "Slingshot",
        1500,
        "Vanderhall",

      ]}
      speed={40} // Custom Speed from 1-99 - Default Speed: 40
      wrapper="span" // Animation will be rendered as a <span>
      repeat={Infinity} // Repeat this Animation Sequence infinitely
      className="typing-text"
    />
  );
};

export default TypingText;
