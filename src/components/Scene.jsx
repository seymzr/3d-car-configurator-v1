import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Stage,
} from "@react-three/drei";

// import { useLoader } from '@react-three/fiber'
import { Suspense } from "react";
import Car1 from "./Car1";
import Car2 from "./Car2";
import { useCustomization } from "../contexts/Customization";
import { Bmw } from "./Bmw";

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function CarSelect({ carState }) {
  if (carState === "car1") {
    return <Bmw />;
  }
  return <Bmw />;
}

const Scene = () => {
  // const gltf = useLoader(GLTFLoader, './models/car.gltf')
  const { car, setCar,environment } = useCustomization();
  return (
    

       
        <>
        {environment=='env2'&&<Environment files={`./public/env2.hdr`} background ground />}
          {environment=='env'&&<Environment files={`./public/env.hdr`} background ground />}
          {environment=='env1'&&<Environment files={`./public/env1.hdr`} background ground />}
        <Suspense fallback={null}>
          <CarSelect carState={car} />
        </Suspense>
        </>

      

  );
};

export default Scene;
