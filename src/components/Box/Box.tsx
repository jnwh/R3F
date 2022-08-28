import { MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Box = (props: MeshProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    //ref.current.rotation.x += 0.01;
    //ref.current.rotation.y += 0.01;
    //ref.current.rotation.z += 0.01;
  });
  return (
    <mesh ref={ref} {...props} castShadow receiveShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial
        color="white"
        fog={false}
        transparent
        opacity={1}
        metalness={1}
        roughness={0.5}
        clearcoat={1}
        transmission={1}
        reflectivity={1}
        //side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Box;
