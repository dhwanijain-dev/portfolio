/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/models/easel.glb -o src/components/easel.jsx -k -r public 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Easel(props) {
  const { nodes, materials } = useGLTF('/models/easel.glb')
  return (
    <group {...props} dispose={null}>
      <mesh name="group1441049998" geometry={nodes.group1441049998.geometry} material={materials.mat21} />
      <mesh name="group1958263894" geometry={nodes.group1958263894.geometry} material={materials.mat20} />
    </group>
  )
}

useGLTF.preload('/models/easel.glb')
