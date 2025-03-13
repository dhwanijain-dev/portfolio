import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { config } from "./config";
import { MotionConfig, AnimatePresence, motion } from "framer-motion";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";

const ExpandableComponent = ({ onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-10 right-10 w-40 h-20 bg-blue-500 text-white flex items-center justify-center text-lg font-bold rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      Click Me
    </motion.div>
  );
};

const FullscreenComponent = ({ onClose }) => {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold z-50"
    >
      <motion.button
        onClick={onClose}
        className="absolute top-5 right-5 bg-white text-black p-3 rounded-lg shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Go Back
      </motion.button>
      Fullscreen View
    </motion.div>
  );
};

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <LoadingScreen />
      <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
        <color attach="background" args={["#f5f3ee"]} />
        <fog attach="fog" args={["#f5f3ee", 10, 50]} />
        <ScrollControls pages={config.sections.length} damping={0.1} maxSpeed={0.2}>
          <MotionConfig transition={{ duration: 0.6 }}>
            <group position-y={-1}>
              <Experience />
            </group>
          </MotionConfig>
          <Scroll html>
            <MotionConfig transition={{ duration: 1 }}>
              <Interface />
            </MotionConfig>
          </Scroll>
        </ScrollControls>
      </Canvas>

      <Menu />

      {/* AnimatePresence ensures smooth exit animation */}
      <AnimatePresence>
        {!isExpanded ? (
          <ExpandableComponent onClick={() => setIsExpanded(true)} />
        ) : (
          <FullscreenComponent onClose={() => setIsExpanded(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
