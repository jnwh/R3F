import { MeshProps } from "@react-three/fiber";

const Floor = (props: MeshProps) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 20]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Floor;
