import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'


const Backdrop = () => {
  const shadows = useRef();
  return (
   <AccumulativeShadows 
   ref={shadows}
   temporal
   frames={60}
   scale={10}
   rotation={[Math.PI/2, 0, 0]}
   position={[0, 0, -0.14]} 
   >
    
      <RandomizedLight
      ammount={4}
      radius={9}
      intensity={2.2}
      ambient={0.25}
      position={[3, 5, -7]}
      /> 
   </AccumulativeShadows>
  )
}

export default Backdrop