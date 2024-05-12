
import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './components/Scene'
import Configurator from './components/Configurator'
import { CustomizationProvider, useCustomization } from './contexts/Customization'
import Details from './components/Details'


import { Environment, OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei'
import { Camera } from 'three'
import { useEffect } from 'react'






function App() {
 const  { environment } = useCustomization()

  return (
    <>
    <CustomizationProvider>
      <div className = "App">
        <Canvas  >

          <OrbitControls  />
          <PerspectiveCamera makeDefault position={[20, 8, -20]} fov={60} />
          {/* <SpotLight position={[0,0,]} /> */}
          
          <color attach="background" args={["#000"]}/>
          {/* <fog attach="fog" args={['#101010', 10, 20]} /> */}
          <Scene/>
        </Canvas>
        <Configurator/>
        <Details/>
      </div>
      </CustomizationProvider>
    </>
  )
}

export default App
