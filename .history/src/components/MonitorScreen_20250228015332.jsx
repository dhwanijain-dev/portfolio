export const MonitorScreen = () => {    
    return (
        <group>
            <mesh>
                <planeGeometry args={[1.14,0.]}/>
                <meshBasicMaterial map={projectTexture}/>
            </mesh>
        </group>
    )
}
