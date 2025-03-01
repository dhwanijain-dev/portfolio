export const MonitorScreen = () => {    
    return (
        <group>
            <mesh>
                <planeGeometry/>
                <meshBasicMaterial map={projectTexture}/>
            </mesh>
        </group>
    )
}
