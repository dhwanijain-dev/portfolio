import { Text3D } from "@react-three/drei";

function SectionTitle({children,...props}) {
    return (  
<Text3D font={"fonts/Inter_"}>
    {children}
    <meshNormalMaterial  />
</Text3D>

    );
}

export default SectionTitle;