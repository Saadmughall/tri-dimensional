import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react'
import './style.css'
function ScrollTextAnim({text}) {
    gsap.registerPlugin(ScrollTrigger);
    const TextAnim = React.useRef(null)
    useEffect(() => {
        ScrollTrigger.refresh();
    
        const splitAndAnimate = (element) => {
          if (!element) return;
    
          // Split text into spans
          const text = element.textContent;
          const words = text.split(" ").map((word) =>
            word
              .split("")
              .map((letter) => `<span class="char">${letter}</span>`)
              .join("")
          );
          element.innerHTML = words
            .map((w) => `<span class="word">${w}&nbsp;</span>`)
            .join("");
    
          // Animate text
          const chars = element.querySelectorAll(".char");
          gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom center",
              scrub: 2,
            },
          })
          .fromTo(
            chars,
            { y: -50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              ease: "power2.out",
              duration: 1,
            }
          )
          
        };
    
        splitAndAnimate(TextAnim.current);
        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
      }, []);
  return (
    <span ref={TextAnim} className="scroll-text" style={{fontSize: '0.1rem'}}>
      {text}
    </span>
  )
}

export default ScrollTextAnim