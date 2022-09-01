import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  Background,
  Box,
  Bulb,
  ColorPicker,
  Drag,
  Floor,
  Orbit,
  Model,
} from "./components";
import { Suspense } from "react";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { OrthographicCamera } from "@react-three/drei";

const App = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <Canvas shadows style={{ background: "black" }}>
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <ambientLight intensity={0.7} />
        {/* <directionalLight color="white" intensity={0.1} position={[0, 30, 5]} /> */}
        <Bulb position={[-100, 50, 0]} />
        <Drag children={<></>} />
        <Suspense fallback={null}>
          <Box position={[0, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Box position={[4, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Floor position={[0, -11, 0]} />
        <Orbit attach="orbitControls" />
        <axesHelper args={[100]} />
        <Background />
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={10}
            bokehScale={3}
            height={480}
          />
          <Bloom
            luminanceThreshold={0.4}
            luminanceSmoothing={1}
            height={1000}
          />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={0.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default App;
