import { MeshProps, ThreeEvent, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import useR3fStore from "../../stores/r3fStore";

const Box = (props: MeshProps) => {
  const texture = useLoader(THREE.TextureLoader, "/crate.png");
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    //ref.current.rotation.x += 0.01;
    //ref.current.rotation.y += 0.01;
    //ref.current.rotation.z += 0.01;
  });

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.object.active = true;
    if (window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object;
    console.log(window.activeMesh);
  };

  const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
    e.object.scale.x = 2.5;
    e.object.scale.y = 2.5;
    e.object.scale.z = 2.5;
  };

  const handlePointerLeave = (e: ThreeEvent<PointerEvent>) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };

  const scaleDown = (object: THREE.Object3D) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };

  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      receiveShadow
      onPointerDown={(e) => handlePointerDown(e)}
      onPointerEnter={(e) => handlePointerEnter(e)}
      onPointerLeave={(e) => handlePointerLeave(e)}
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial
        color="white"
        fog={false}
        transparent
        opacity={1}
        //metalness={1}
        roughness={1}
        //clearcoat={1}
        //transmission={1}
        //reflectivity={1}
        //side={THREE.DoubleSide}
        map={texture}
      />
    </mesh>
  );
};

export default Box;
