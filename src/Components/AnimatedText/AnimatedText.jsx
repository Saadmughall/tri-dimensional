import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedText({ text }) {
  const spanRef = useRef(null);

  useEffect(() => {
    const element = spanRef.current;
    if (!element) return;

    const originalText = text;
    const words = originalText.split(" ").map(word =>
      word
        .split("")
        .map(char => `<span class="char">${char}</span>`)
        .join("")
    );

    element.innerHTML = words
      .map(w => `<span class="word">${w}&nbsp;</span>`)
      .join("");

    const chars = element.querySelectorAll(".char");

    const handleEnter = () => {
      gsap.to(chars, {
        y: -10,
        stagger: 0.1,
        ease: "expo",
        duration: 0,
      });
    };

    const handleLeave = () => {
      gsap.to(chars, {
        y: 0,
        stagger: 0.1,
        ease: "expo",
        duration: 0,
      });
    };

    element.addEventListener("mouseenter", handleEnter);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mouseenter", handleEnter);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [text]);

  return (
    <span ref={spanRef} style={{ display: 'inline-block', cursor: 'default' }}></span>
  );
}
