import { Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";
import SectionTitle from "./SectionTitle";
import { useRef } from "react";

const SECTION_DISTANCE =  10

export const Experience = () => {
  const sceneContainer = useRef()
  const scrollData = useScroll()

  useFrame(()=)
  return (
    <>
      <Environment preset="sunset" />
      

      <Avatar/>
        <group ref={sceneContainer}>
          {/* home */}
          <group>
            <SectionTitle position-x={0.5}> Dhwani </SectionTitle>
          </group>
          {/* skills */}
          <group position-z ={SECTION_DISTANCE}>
          <SectionTitle position-x={0.5}> SKills </SectionTitle>

          </group>
          {/* projects */}
        <group position-z={2 *SECTION_DISTANCE}>
          <SectionTitle position-x={0.5}> projects </SectionTitle>

          </group>
          {/* contact */}
        <group position-z={3 * SECTION_DISTANCE}>
          <SectionTitle position-x={0.5}> contact </SectionTitle>

          </group>
        </group>
    </>
  );
};
