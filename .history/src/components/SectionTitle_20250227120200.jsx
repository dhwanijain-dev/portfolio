import { Text3D } from "@react-three/drei";

function SectionTitle({children,...props}) {
    return (  
<Text3D font={"fon"}>
    {children}
    <meshNormalMaterial  />
</Text3D>

    );
}

export default SectionTitle;