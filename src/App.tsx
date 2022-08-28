import {
  Canvas,
  extend,
  MeshProps,
  ReactThreeFiber,
  useThree,
} from "@react-three/fiber";
import "./App.css";
import { Box } from "./components";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
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

const Floor = (props: MeshProps) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 20]} />
      <meshStandardMaterial />
    </mesh>
  );
};

const Bulb = (props: MeshProps) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

const App = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [1, 5, 1] }}
      >
        <fog attach="fog" args={["white", 1, 10]} />
        <ambientLight intensity={0.2} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <Bulb position={[0, 3, 0]} />
        <Box position={[0, 1, 0]} />
        <Floor position={[0, -0.5, 0]} />
        <Orbit />
        <axesHelper args={[3]} />
      </Canvas>
    </div>
  );
};

export default App;
