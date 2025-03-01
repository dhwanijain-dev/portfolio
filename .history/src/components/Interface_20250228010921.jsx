import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Interface = () => {
    const scrollData = useScroll();
    const [hasScrolled, setHasScrolled] = useState(false);
    useFrame(() => {
        setHasScrolled(scrollData.offset > 0);
    });
    return (
        <div className="interface">
            <div className="sections">
                {/* HOME */}
                
                {/* SKILLS */}
                <section className="section section--right">SKILLS</section>
                {/* PROJECTS */}
                <section className="section section--left">PROJECTS</section>
                {/* CONTACT */}
                <section className="section section--left">CONTACT</section>
            </div>
        </div>
    );
};