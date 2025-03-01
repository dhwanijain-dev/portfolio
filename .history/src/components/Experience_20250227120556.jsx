import { Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";
import SectionTitle from "./SectionTitle";
import { useRef } from "react";

const SECTION_DISTANCE =  10

export const Experience = () => {
  const sceneContainer = useRef()
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
        <group position-z={SECTION_DISTANCE}>
          <SectionTitle position-x={0.5}> projects </SectionTitle>

          </group>
          {/* contact */}
          <group>
          <SectionTitle position-x={0.5}> contact </SectionTitle>

          </group>
        </group>
    </>
  );
};
