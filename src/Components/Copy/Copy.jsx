import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);
export default function Copy({ children, animateOnScroll = true, delay = 0 }) {
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const splitRef = useRef([]);
  const linesRef = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      splitRef.current = [];
      elementRef.current = [];
      linesRef.current = [];

      let elements = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);

        const split = new SplitText(element, {
          type: "lines",
          mask: "lines",
          linesClass: "lines++",
        });
        splitRef.current.push(split);
        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            split.lines[0].style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0";
        }
        linesRef.current.push(...split.lines);
      });
      gsap.set(linesRef.current, {
        y: "100%",
      });
      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
        
      };

      if(animateOnScroll){
        gsap.to(linesRef.current, {
            ...animationProps,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        });
      } else {
        gsap.to(linesRef.current, animationProps);
      }

      return () => {
        splitRef.current.forEach((split) => {
          if(split) {
            split.revert();
          }
        });
        linesRef.current.forEach((line) => {
          line.style.transform = "none";
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    }
  );
  if(React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }
  return (
    <div ref={containerRef} data-copy-wrapper="true">
        {children}
    </div>
  )
}
