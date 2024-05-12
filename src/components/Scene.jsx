import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Stage,
} from "@react-three/drei";

// import { useLoader } from '@react-three/fiber'
import { Suspense } from "react";


import { useCustomization } from "../contexts/Customization";
import { Bmw } from "./Bmw";

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function CarSelect({ carState }) {
  
  return <Bmw />;
}

const Scene = () => {
  // const gltf = useLoader(GLTFLoader, './models/car.gltf')
  const { car, setCar,environment } = useCustomization();
  return (
    

       
        <>
        {environment=='env2'&&<Environment files={`./public/environments/env2.hdr`} background ground />}
          {environment=='env'&&<Environment files={`./public/environments/env.hdr`} background ground />}
          {environment=='env1'&&<Environment files={`./public/environments/env1.hdr`} background ground />}
        <Suspense fallback={null}>
          <CarSelect carState={car} />
        </Suspense>
        </>

      

  );
};

export default Scene;
