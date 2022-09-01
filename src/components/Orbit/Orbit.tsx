import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

type OProps = {
  attach: string;
};

const Orbit = ({ attach }: OProps) => {
  const { camera, gl } = useThree();
  return <orbitControls attach={attach} args={[camera, gl.domElement]} />;
};

export default Orbit;
