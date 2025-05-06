import React, { useEffect } from 'react'
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
export default function Projects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects',
        start: '0% top+=90%',
        end: 'bottom-=100% top',
        scrub: 1,

      },
    });
    tl.fromTo('.right-inner h1', {y: 150, opacity: 0, }, {y: 0, opacity: 1 , ease: 'elastic.out'});
    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-container',
        start: 'top top',
        end: 'bottom center',
        scrub: true,
        pin: '.right-inner',
        pinSpacing: true,
      },
    });
    return () => {
      tl.kill();
      pinTl.kill();
    }
  }, [])
  
  return (
    <div className='projects' id='project-section'>
        <div className='projects-container'>
                <ProjectCard/>
            <div className="project-right">
                <div className="right-inner">
                <h1>Projects</h1>
                <button>View More</button>
                </div>
            </div>
        </div>
    </div>
  )
}
