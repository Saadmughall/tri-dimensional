import React, { useEffect, useRef } from "react";
import "./ProjectCard.css";
import { Data } from "../../CardData/Data";
import gsap from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollTextAnim from "../ScrollTextAnim/ScrollTextAnim";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Clear previous ScrollTrigger (if remounting)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top+=30%",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.fromTo(
      cardsRef.current,
      { x: -200, y: 100, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 1,
        ease: "power2.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="project-section" ref={sectionRef}>
      {Data.map((item, index) => (
        <div
          className="project-card-container"
          key={item.id}
          ref={(el) => (cardsRef.current[index] = el)}
        >
          <div className="project-card-top">
            <div className="line"></div>
            <img src={item.img} alt={`Project ${item.id}`} onClick={()=>{window.open(item.link, "_blank")}} style={{cursor: 'pointer'}}/>
          </div>
          <div className="project-card-bottom">
            <div className="card-inner-left">
              <h1>0{item.id}.</h1>
              <div className="card-inner-left-text">
                <div className="scroll-text">
                  <h2>
                    <ScrollTextAnim text={item.title} />
                  </h2>
                </div>
                <span>{item.subtitle}</span>
              </div>
            </div>
            <div className="card-inner-right">
              <h1>{item.category}</h1>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
