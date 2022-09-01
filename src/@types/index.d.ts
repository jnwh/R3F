import { ReactThreeFiber } from "@react-three/fiber";
import { Material, Mesh, Vector3 } from "three";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
      dragControls: ReactThreeFiber.Object3DNode<
        DragControls,
        typeof DragControls
      >;
    }
  }
  namespace THREE {
    interface Object3D {
      active: boolean;
      material: MeshPhysicalMaterial;
      scale: Vector3;
    }
  }

  interface Window {
    activeMesh: THREE.Object3D;
  }
  interface EventTarget {
    style: React.CSSProperties;
  }
}

export {};
