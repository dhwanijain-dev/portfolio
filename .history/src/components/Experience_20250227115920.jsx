import { Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  const sceneContainer = useRef()
  return (
    <>
      <Environment preset="sunset" />
      

      <Avatar/>
      
    </>
  );
};
