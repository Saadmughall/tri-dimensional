import React, { useEffect } from "react";
import "./BIO.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dp from "../../assets/dp.jpg";
import Copy from "../Copy/Copy";

gsap.registerPlugin(ScrollTrigger);
export default function BIO() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "0% 0%",
        end: "60% 20%",
        scrub: 1,
        pin: true,
      },
    });

    tl1.fromTo(
      ".one",
      { scale: 1 },
      { scale: 0.7, duration: 1, ease: "power1.inOut" }
    );

    const overlay = gsap.timeline({
      scrollTrigger: {
        trigger: ".right-img",
        start: "top 40%",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    overlay.fromTo(
      ".overlay",
      { transform: "translate(0%, 0%)" },
      { transform: "translate(0%, 100%)", duration: 1, ease: "power4.inOut" }
    );
    // Cleanup
    return () => {
      tl1.kill();
      overlay.kill();
    };

    
  }, []);

  return (
    <section className="section1">
      <div className="container one">
        <div className="one-top">
          <Copy>
          <h1>
            Saad here! I <span>create turnkey websites</span> - from the development of
            <span> unique design</span> to accurate and <span>functional</span> implementation on React JS
          </h1>
          </Copy>
        </div>
        <div className="one-bottom">
          <div className="bottom-left">
            <h1>AVALIABLE FOR</h1>
            <h1>COLLABRATION</h1>
          </div>
          <div className="bottom-right">
            <div className="right-content">
              <Copy>
              <p>
                I help businesses and projects unlock their potential in the
                digital space.
              </p>
              </Copy>
              <Copy>
              <p>
                Unique details, adaptability, modern animations - all this makes
                websites not only aesthetically pleasing but also user-friendly.
                If you want a website that really works for you - write.
                Together we can create something worthwhile!
              </p>
              </Copy>
            </div>
            <div className="right-img">
              <img src={dp} alt="dp" />
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
