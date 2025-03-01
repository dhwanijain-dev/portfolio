import { Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";
import SectionTitle from "./SectionTitle";

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
          <group>
            
          </group>
          {/* projects */}
          <group></group>
          {/* contact */}
          <group></group>
        </group>
    </>
  );
};
