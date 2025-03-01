import { Text3D } from "@react-three/drei";

function SectionTitle({children,...props}) {
    return (  
<Text3D font={"fonts/"}>
    {children}
    <meshNormalMaterial  />
</Text3D>

    );
}

export default SectionTitle;