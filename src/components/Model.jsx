import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/logoGlobe.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.TH001.geometry}
        material={materials["TH.001"]}
        position={[0, 0.3, 0.4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        geometry={nodes.TH.geometry}
        material={materials.TH}
        position={[0, 0.3, -0.4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1}
      />
    </group>
  );
}

useGLTF.preload("/logoGlobe.glb");
