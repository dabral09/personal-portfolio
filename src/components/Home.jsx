import React, {useRef} from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/me.png";

const Home = ({ratio}) => {
const projectCount = useRef(null);



const animationProjectsCount = () =>{
  animate(0,10,{
    duration:1,
    onUpdate:(v)=>(projectCount.current.textContent =v.toFixed())
  })
}

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    //Here we use id as we have used anchor tag in nav in place of link as anchor tag will redirect to the connected id -> home
    <div id="home">
      <section>
        {/* framer motion is used to give animation in the h1 using motion.h1 */}
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Shubham Dabral
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:shubhamdabral.in@gmail.com"> Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

         
          <aside>
            <article>
              <p>
                +{ratio <2.5 && (<motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>)}
              </p>
              <span>Projects Done</span>
            </article>
           
            <article data-special>
              <p> Contact</p>
              <span>shubhamdabral.in@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Shubham" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
