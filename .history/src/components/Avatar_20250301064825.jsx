import React, { useEffect, useRef, useState } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useAnimations, useFBX, useGLTF, useScroll } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'

export function Avatar(props) {
  const { scene } = useGLTF('/models/DhwaniAvatar.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { animations: idleAnimation } = useFBX("/animations/Idle.fbx")
  const { animations: walkingAnimation } = useFBX("/animations/Walking.fbx")

  const group = useRef()
  idleAnimation[0].name = "Idle"
  walkingAnimation[0].name = "Walking"

  const { actions } = useAnimations([idleAnimation[0], walkingAnimation[0]], group)
  const [animation, setAnimation] = useState("Idle")

  // Track the head bone and cursor
  const headBoneRef = useRef()
  const mouse = useRef(new THREE.Vector2())

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play()
    return () => actions[animation].fadeOut(0.5)
  }, [animation, actions])

  useEffect(() => {
    function onPointerMove(e) {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('pointermove', onPointerMove)
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  const scrollData = useScroll()
  const lastScroll = useRef(0)
  useFrame(({ camera }) => {
    // Walk or idle based on scroll
    const scrollDelta = scrollData.offset - lastScroll.current
    let rotationTarget = 0

    if (Math.abs(scrollDelta) > 0.00001) {
      setAnimation("Walking")
      rotationTarget = scrollDelta > 0 ? 0 : Math.PI
    } else {
      setAnimation("Idle")
    }
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, rotationTarget, 0.1)
    lastScroll.current = scrollData.offset

    // Make head bone look toward cursor
    const lookPos = new THREE.Vector3(mouse.current.x, mouse.current.y, 0.5).unproject(camera)
    if (headBoneRef.current) {
      headBoneRef.current.lookAt(lookPos)
    }
  })

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      {/* Replace "ActualHeadBoneName" below with the bone node controlling the head */}
      <primitive object={nodes.ActualHeadBoneName} ref={headBoneRef} />
      <skinnedMesh
        name="Wolf3D_Hair"
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      {/* ...existing meshes... */}
    </group>
  )
}

useGLTF.preload('/models/DhwaniAvatar.glb')
useFBX.preload("/animations/Idle.fbx")
useFBX.preload("/animations/Walking.fbx")