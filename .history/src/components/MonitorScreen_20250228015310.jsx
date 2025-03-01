export const MonitorScreen = () => {    
    return (
        <group>
            <mesh>
                <planeGeometry/>
                <meshBasicMaterial map={projectTe}/>
            </mesh>
        </group>
    )
}
