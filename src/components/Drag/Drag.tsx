import { DragControls } from "three/examples/jsm/controls/DragControls";
import { extend, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { Group } from "three";
extend({ DragControls });

type DProps = {
  children: JSX.Element;
};

const Drag = ({ children }: DProps) => {
  const groupRef = useRef<Group>(null);
  const dragControlsRef = useRef<DragControls>(null);
  const [child, setChild] = useState([]);
  const { camera, gl } = useThree();

  useEffect(() => {
    setChild(groupRef.current?.children);
  }, []);

  return (
    <group ref={groupRef}>
      <dragControls
        ref={dragControlsRef}
        args={[child, camera, gl.domElement]}
      />
      {children}
    </group>
  );
};
export default Drag;
