import { Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";
import SectionTitle from "./SectionTitle";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const SECTION_DISTANCE =  10

export const Experience = () => {
  const sceneContainer = useRef()
  const scrollData = useScroll()

  useFrame(()=>{
    sceneContainer.current.position.z = -scrollData.offset * SECTION_DISTANCE * (scrollData.pages-1)
  })
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
