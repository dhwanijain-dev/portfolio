import { Text3D } from "@react-three/drei";

function SectionTitle({children,...props}) {
    return (  
<Text3D font={"fonts/Inter_Bold.json"} size = {0.3} {..pro}>
    {children}
    <meshNormalMaterial  />
</Text3D>

    );
}

export default SectionTitle;