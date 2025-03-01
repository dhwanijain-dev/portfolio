import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

export const Interface = () => {
    const [hasScrolled,setHasScroller] = useState(false);
    const scrollDate
    return (
        <div className="interface">
            <div className="sections">
                {/* HOME */}
                <section className="section section--bottom">HOME</section>
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