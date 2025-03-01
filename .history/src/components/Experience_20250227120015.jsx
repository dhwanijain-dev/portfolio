import { Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  const sceneContainer = useRef()
  return (
    <>
      <Environment preset="sunset" />
      

      <Avatar/>
        <group ref={sceneContainer}>
          {/* home */}
          <group></group>
          {/* skills */}
          <group></group>
          {/* projects */}
          <group></group>
          {/*  */}
          <group></group>
        </group>
    </>
  );
};
