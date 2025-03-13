/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/MacBook Pro.glb -o src/components/MacBookPro.jsx -r public
Laptop / MacBook Pro by Alex Safayan [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/27hcX_w47Jb)
*/

import { Html, useGLTF, useTexture } from "@react-three/drei";
import React from "react";

export function MacBookPro(props) {
  const { nodes, materials } = useGLTF("/models/MacBook Pro.glb");
  // const screenTexture = useTexture("textures/screen2.png");
  return (
    <group {...props} dispose={null}>
      {/* <mesh position={[0.02,0.85,-0.66]}>
        <planeGeometry args={[2.55,1.55]} />
        <meshBasicMaterial map={screenTexture} />
      </mesh> */}
      
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
      <Html
        position={[0.02, 0.85, -0.66]} // Adjust the position to match the screen
        transform
        occlude
      >
      <div>
        <iframe
          src="https://newyearfrontend.vercel.app/"
          style={{

            width: "100%",
            height: "100%",
            border: "none",
            // position:'absolute',
           
          }}
        >

        </iframe>
      </Html>
    </group>
  );
}
useGLTF.preload("/models/MacBook Pro.glb");
