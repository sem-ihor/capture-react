import React from "react"
import home1 from "../img/home1.png"
// Styled
import { About, Description, Image, Hide } from "../styles"
import { motion } from "framer-motion"
import Wave from "./Wave"

const AboutSection = () => {
    /*
        const titleAnim = {
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 2 } }
        }
        const container = {
            hidden: { x: 100 },
            show: {
                x: 0,
                transition: {
                    duration: 0.75,
                    ease: "easeOut",
                    staggerChildren: 1,
                    when: "afterChildren"
                }
            }
        }
        */
    return (
        <About>
            <Description>
                <motion.div>
                    <div className="hide">
                        <motion.h2>We work to make</motion.h2>
                    </div>
                    <Hide>
                        <motion.h2>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <div className="hide">
                        <motion.h2>true</motion.h2>
                    </div>
                </motion.div>
                <p>Contact us fro any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contacy Us</button>
            </Description>
            <Image className="image">
                <img src={home1} alt="guy with a camera" />
            </Image>
            <Wave />
        </About>
    )
}

export default AboutSection