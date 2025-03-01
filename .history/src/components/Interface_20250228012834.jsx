import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

import {motion } from 'framer-motion-3d'

export const Interface = () => {
    const [hasScrolled,setHasScrolled] = useState(false);
    const scrollData = useScroll()
    useFrame(()=>{
        setHasScrolled(scrollData.offset.y > 0 )
    })
    return (
        <div className="interface">
            <div className="sections">
                {/* HOME */}
                <section className="section section--bottom">
                    <motion.div
                    className="scroll-down"
                    initial={{
                        opacity:0,
                    }}
                    animate={{
                        opacity:hasScrolled ? 0 : 1
                    }}
                    >
                    <motion.div
                    className="scroll-down__wheel"
                    initial={{
                        translateY:0,

                    }}
                    animate={{
                        translateY:4
                    }}
                    transition={{
                        duration:0.4,
                        repeatDelay:0.5,
                        repeatType:"reverse",
                        repeat:Infinity
                    }}
                    >

                    </motion.div>

                    </motion.div>
                </section>
                {/* SKILLS */}
                <section className="section section--right">
                <motion.div
                className="skills"
                whileInView={"visible"}
                initial={{
                    opacity:0,

                }}
                var
                >

                </motion.div>
                </section>
                {/* PROJECTS */}
                <section className="section section--left">PROJECTS</section>
                {/* CONTACT */}
                <section className="section section--left">CONTACT</section>
            </div>
        </div>
    );
};