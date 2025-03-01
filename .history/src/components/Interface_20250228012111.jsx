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
                    
                    >

                    </motion.div>

                    </motion.div>
                </section>
                {/* SKILLS */}
                <section className="section section--right">SKILLS</section>
                {/* PROJECTS */}
                <section className="section section--left">PROJECTS</section>
                {/* CONTACT */}
                <section className="section section--left">CONTACT</section>
            </div>
        </div>
    );
};