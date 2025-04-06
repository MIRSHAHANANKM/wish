import React, { useState } from "react";
import "./App.css";
import { FaGift, FaEnvelope } from "react-icons/fa";
import CountdownTimer from "./CountdownTimer";
import GiftBox from "./GiftBox";
import LetterBox from "./LetterBox";

const App = () => {
  return (
    <div className="starry-bg min-h-screen text-center text-white">
      {/* Birthday Wish Section */}
      <div className="py-20">
        <h1 className="text-4xl font-serif mb-4">
          Happy Birthday, My Love! 💖
        </h1>
        <p className="text-xl">On this special day, I just want to remind you how deeply I love you.
Every moment with you feels like a beautiful dream I never want to wake up from.
You are the light in my life, the smile in my heart, and the warmth in my soul.
I’m so lucky to walk this journey with you — hand in hand, heart to heart.

Here’s to celebrating you — the one who makes my world brighter every single day.
May your birthday be filled with as much joy, magic, and love as you bring into my life.
I can’t wait to create a lifetime of memories with you.</p>
      </div>

      {/* Countdown Timer Section */}
      <CountdownTimer />

      {/* Gift Box Section */}
      <GiftBox />

      {/* Letter Box Section */}
      <LetterBox />

      {/* Romantic Animations */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default App;
