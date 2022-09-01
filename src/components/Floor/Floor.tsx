import { MeshProps } from "@react-three/fiber";

const Floor = (props: MeshProps) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[500, 1, 500]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Floor;
