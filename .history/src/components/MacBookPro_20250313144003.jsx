import { Html, useGLTF, useTexture } from "@react-three/drei";
import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

export function MacBookPro(props) {
  const { nodes, materials } = useGLTF("/models/MacBook Pro.glb");
  const screenTexture = useTexture("textures/screen2.png");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlaneClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <group {...props} dispose={null}>
        <mesh position={[0.02, 0.85, -0.66]} onClick={handlePlaneClick}>
          <planeGeometry args={[2.55, 1.55]} />
          <meshBasicMaterial map={screenTexture} />
        </mesh>

        <mesh
          geometry={nodes.mesh485226736.geometry}
          material={materials.mat16}
        />
        <mesh
          geometry={nodes.mesh485226736_1.geometry}
          material={materials.mat23}
        />
        <mesh
          geometry={nodes.mesh485226736_2.geometry}
          material={materials.mat17}
        />
        <mesh
          geometry={nodes.mesh485226736_3.geometry}
          material={materials.mat15}
        />
        <mesh
          geometry={nodes.mesh256948792.geometry}
          material={materials.mat16}
        />
        <mesh
          geometry={nodes.mesh256948792_1.geometry}
          material={materials.mat23}
        />
        <mesh
          geometry={nodes.mesh256948792_2.geometry}
          material={materials.mat17}
        />
        <mesh
          geometry={nodes.mesh256948792_3.geometry}
          material={materials.mat25}
        />
      </group>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div>
            <h1>Modal Content</h1>
          </div>
          <button onClick={handleCloseModal}>Close</button>
        </Modal>
      )}
    </>
  );
}
useGLTF.preload("/models/MacBook Pro.glb");