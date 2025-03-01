export const MonitorScreen = ({...props}) => {    
    const [project]  = useAtom(projectAt)
    return (
        <group {...props}>
            <mesh>
                <planeGeometry args={[1.14,0.66]}/>
                <meshBasicMaterial map={projectTexture}/>
            </mesh>
        </group>
    )
}
