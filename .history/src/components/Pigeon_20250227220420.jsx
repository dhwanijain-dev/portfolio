/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/Pigeon.gltf -o src/components/Pigeon.jsx -r public
Pigeon by Quaternius (https://poly.pizza/m/9NGlBTpDEr)
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";

export function Pigeon(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Pigeon.gltf");
  const {actions} = useAnimations(animations,group)
  const [animation, setAnimation] = useState("Flying_Idle")
  useEffect(()=>{
    actions[animation].reset()
  },[animation])

  return (
    <group {...props} dispose={null} ref={group}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Pigeon">
            <skinnedMesh
              name="Cube000"
              geometry={nodes.Cube000.geometry}
              material={materials.Pigeon_Main}
              skeleton={nodes.Cube000.skeleton}
            />
            <skinnedMesh
              name="Cube000_1"
              geometry={nodes.Cube000_1.geometry}
              material={materials.Pigeon_Secondary}
              skeleton={nodes.Cube000_1.skeleton}
            />
            <skinnedMesh
              name="Cube000_2"
              geometry={nodes.Cube000_2.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Cube000_2.skeleton}
            />
            <skinnedMesh
              name="Cube000_3"
              geometry={nodes.Cube000_3.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Cube000_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Pigeon.gltf");
