/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/Star.gltf -o src/components/Star.jsx -r public
Star by Kay Lousberg (https://market.pmnd.rs/model/star)
*/

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export function Star(props) {
  const { nodes, materials } = useGLTF("/models/Star.gltf");
  const ref = useRef()
  useFrame()=>{
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes.star.geometry}
        material={materials["Yellow.030"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/Star.gltf");
