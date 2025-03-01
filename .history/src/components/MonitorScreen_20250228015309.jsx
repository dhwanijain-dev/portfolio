export const MonitorScreen = () => {    
    return (
        <group>
            <mesh>
                <planeGeometry/>
                <meshBasicMaterial map={proje}/>
            </mesh>
        </group>
    )
}
