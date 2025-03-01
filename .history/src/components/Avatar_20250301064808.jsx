javascript
// filepath: /D:/HTML/portfolio/24-portfolio-starter/src/components/Avatar.jsx
// ...existing code...
import { useThree } from '@react-three/fiber'

export function Avatar(props) {
  const { scene } = useGLTF('/models/DhwaniAvatar.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  // Suppose "HeadBone" is your actual head bone’s name:
  const headBoneRef = useRef()

  const mouse = useRef(new THREE.Vector2())
  useEffect(() => {
    function onPointerMove(e) {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('pointermove', onPointerMove)
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  const { camera } = useThree()
  useFrame(() => {
    // Convert NDC to 3D coordinates in front of the camera
    const vector = new THREE.Vector3(mouse.current.x, mouse.current.y, 0.5)
    vector.unproject(camera)
    if (headBoneRef.current) {
      headBoneRef.current.lookAt(vector)
    }
  })

  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      {/* ...existing code... */}
      <primitive
        object={nodes.HeadBone} // or your actual head bone
        ref={headBoneRef}
      />
      {/* ...existing code... */}
    </group>
  )
}
// ...existing code...