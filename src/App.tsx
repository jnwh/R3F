import { Canvas, extend, ReactThreeFiber, useThree } from "@react-three/fiber";
import "./App.css";
import { Background, Box, Bulb, Floor } from "./components";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Suspense } from "react";
extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const App = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [3, 3, 3] }}
      >
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <Bulb position={[0, 3, 0]} />
          <Box position={[0, 1, 0]} />
          <Floor position={[0, -0.5, 0]} />
          <Orbit />
          <axesHelper args={[3]} />
          <Background />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
