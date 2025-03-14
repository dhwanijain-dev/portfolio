export const MonitorScreen = ({...props}) => {    
    return (
        <group {...prop}>
            <mesh>
                <planeGeometry args={[1.14,0.66]}/>
                <meshBasicMaterial map={projectTexture}/>
            </mesh>
        </group>
    )
}
