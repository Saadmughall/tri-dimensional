import React, { useEffect } from "react";
import "./Capabilities.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CubeShape,
  HexagonShape,
  SphereShape,
  TorusShape,
} from "../React Three Fiber/Shapes";
import Copy from "../Copy/Copy";
export default function Capabilities() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "0% 0%",
        end: "60% 20%",
        pin: true,
        scrub: 1,
      },
    });

    tl2.fromTo(
      ".two",
      { scale: 0.7 },
      { scale: 1, duration: 1, ease: "power1.inOut" }
    );
    // Cleanup
    return () => {
      tl2.kill();
    };
  }, []);
  return (
    <section className="section2">
      <div className="two">
        <div className="two-top">
          <h2> <div className="dot"></div> CAPABILITIES</h2>
          <Copy delay={0.5}>
          <p>
            Web design is changing rapidly, and I'm trying to keep up. New tools
            and technologies help me make sites that look cool and work smoothly
          </p>
          </Copy>
          <h1>GET in Touch {':)'}</h1>
        </div>
        <div className="two-bottom">
        <div className="grid">
          <div className="box">
            <div className="box-text">
              <h3>01.</h3>
              <p>React JS</p>
            </div>
            <CubeShape />
          </div>
          <div className="box">
          <div className="box-text">
              <h3>02.</h3>
              <p>GSAP</p>
            </div>
            <SphereShape />
          </div>
          <div className="box">
          <div className="box-text">
              <h3>03.</h3>
              <p>React Three Fiber</p>
            </div>
            <TorusShape />
          </div>
          <div className="box">
          <div className="box-text">
              <h3>04.</h3>
              <p>3D</p>
            </div>
            <HexagonShape />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
