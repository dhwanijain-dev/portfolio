import { Environment, Float, useScroll } from "@react-three/drei";
import { Avatar } from "./Avatar";
import SectionTitle from "./SectionTitle";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {Star} from "./Star"

import { MacBookPro } from "./MacBookPro";
import
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
          <Star position-z={0} position-y={2.2} scale={0.3} />
          <Float floatIntensity={2} speed={2}>
            <MacBookPro
              position-x={-1}
              position-y={0.5}
              position-z={0}
              scale={0.3}
              rotation-y={Math.PI / 4}
            />
          </Float>
          <PalmTree
            scale={0.018}
            rotation-y={THREE.MathUtils.degToRad(140)}
            position={[4, 0, -5]}
          />
          <Float floatIntensity={0.6}>
            <Center disableY disableZ>
              <SectionTitle
                size={0.8}
                position-y={1.6}
                position-z={-3}
                bevelEnabled
                bevelThickness={0.3}
              >
                {config.home.title}
              </SectionTitle>
            </Center>
          </Float>
          <Center disableY disableZ>
            <SectionTitle
              size={1.2}
              position-x={-2.6}
              position-z={-3}
              bevelEnabled
              bevelThickness={0.3}
              rotation-y={Math.PI / 10}
            >
              {config.home.subtitle}
            </SectionTitle>
          </Center>
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
