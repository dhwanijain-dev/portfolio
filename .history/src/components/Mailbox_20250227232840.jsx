/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/Mailbox v2.glb -o src/components/Mailbox.jsx -r public
Mailbox v2 by sirkitree [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/6Y4sEKDNxcP)
*/

import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import * as THREE from 'three'
export function Mailbox(props) {
  const { nodes, materials } = useGLTF("/models/Mailbox v2.glb");
  const [mailboxHovered, setMailboxHovered] = useState(second)
  useEffect(()=>{

    const emmisiveColor = THREE.Color("ffc527")
    Object.values(materials).forEach((material)=>{
      if(material.emissive){
        material.emissive = emmisiveColor
      }
    }
    )
  },[])

  useFrame
  return (
    <group {...props}
     dispose={null}
     onPointerEnter={()=>setMailboxHovered(true)}
      onPointerLeave={()=>setMailboxHovered(false)}
     >
      <mesh
        geometry={nodes.group2028911354.geometry}
        material={materials.mat17}
      />
      <mesh
        geometry={nodes.group513383197.geometry}
        material={materials.mat17}
      />
      <mesh
        geometry={nodes.group1044609393.geometry}
        material={materials.mat17}
      />
      <mesh geometry={nodes.group62313567.geometry} material={materials.mat8} />
      <mesh
        geometry={nodes.group1018199070.geometry}
        material={materials.mat20}
      />
      <mesh
        geometry={nodes.group1855928084.geometry}
        material={materials.mat16}
      />
      <mesh
        geometry={nodes.group2114715230.geometry}
        material={materials.mat16}
      />
      <mesh
        geometry={nodes.group961800690.geometry}
        material={materials.mat16}
      />
      <mesh
        geometry={nodes.group2098010904.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1048902298.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group698486446.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group513376890.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group2003878409.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1278976230.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group823787471.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1640785644.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group774986514.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group163990428.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group502275761.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1083102086.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1169220911.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group819034674.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group2122795285.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1086767079.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1548836198.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1787203505.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group781068275.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1179346883.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group731433140.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1547746947.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1121282222.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group480589545.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group796041224.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1339086745.geometry}
        material={materials.mat10}
      />
      <mesh geometry={nodes.group195866.geometry} material={materials.mat10} />
      <mesh
        geometry={nodes.group1743123278.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group1580040935.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.group804677075.geometry}
        material={materials.mat20}
      />
    </group>
  );
}

useGLTF.preload("/models/Mailbox v2.glb");
