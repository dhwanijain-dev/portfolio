export const MonitorScreen = () => {    
    return (
        <group>
            <mesh>
                <planeGeometry args=/>
                <meshBasicMaterial map={projectTexture}/>
            </mesh>
        </group>
    )
}
