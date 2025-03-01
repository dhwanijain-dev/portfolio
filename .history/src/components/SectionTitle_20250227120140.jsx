import { Text3D } from "@react-three/drei";

function SectionTitle({children,...props}) {
    return (  
<Text3D>
    {children}
    <meshNormalMaterial attach="material" />
</Text3D>

    );
}

export default SectionTitle;