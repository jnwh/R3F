import { MeshProps } from "@react-three/fiber";

const Bulb = (props: MeshProps) => {
  return (
    <mesh {...props}>
      <pointLight
        intensity={0.9}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-radius={5}
      />
      <sphereBufferGeometry args={[5]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

export default Bulb;
