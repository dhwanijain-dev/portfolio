export const MonitorScreen = () => {    
    return (
        <group>
            <mesh>
                <planeGeometry args={[1,]}/>
                <meshBasicMaterial map={projectTexture}/>
            </mesh>
        </group>
    )
}
