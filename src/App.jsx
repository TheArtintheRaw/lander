import React, { Suspense, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";
import { Model } from "./components/Model";
import { styles } from "./styles.js";
import { Instances, Burger } from "./components/Burger";

const HtmlContent = () => {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const width = viewport.width * aspect;
  const height = viewport.height * aspect;
  const margin = 10;

  return (
    <Html>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: `calc(50% - ${height / 2}px - ${margin}px)`,
          left: `calc(50% - ${width / 2}px - ${margin}px)`,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr, 2fr, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          gap: `${margin}px`,
          padding: `${margin}px`,
        }}
      >
        <div
          style={{
            gridColumn: 1,
            gridRow: 1,
          }}
          className='grid1'
        />
        <div
          style={{
            gridColumn: 2,
            gridRow: 1,
          }}
          className='grid2 col-start-2 col-span-2'
        >
          <h1 className={`${styles.heroHeadText}`}>Your Resto Name</h1>
        </div>
        <div
          style={{
            gridColumn: 3,
            gridRow: 1,
          }}
          className='grid3'
        />

        <div
          style={{
            gridColumn: 1,
            gridRow: 2,
          }}
          className='grid4'
        ></div>
        <div
          style={{
            gridColumn: 2,
            gridRow: 2,
          }}
          className='grid5'
        />
        <div
          style={{
            gridColumn: 3,
            gridRow: 2,
          }}
          className='grid6'
        ></div>
        <div
          style={{
            gridColumn: 1,
            gridRow: 3,
          }}
          className='grid7'
        />
        <div
          style={{
            gridColumn: 2,
            gridRow: 3,
          }}
          className='grid8'
        >
          <button className='button-82-pushable' role='button'>
            <span className='button-82-shadow'></span>
            <span className='button-82-edge'></span>
            <span className='button-82-front text'>PICK UP</span>
          </button>

          <button className='button-82-pushable' role='button'>
            <span className='button-82-shadow'></span>
            <span className='button-82-edge'></span>
            <span className='button-82-front text'>ORDER</span>
          </button>
        </div>
        <div
          style={{
            gridColumn: 3,
            gridRow: 3,
          }}
          className='grid9'
        />
        <div
          style={{
            gridColumn: 1,
            gridRow: 4,
          }}
          className='grid10'
        />
        <div
          style={{
            gridColumn: 2,
            gridRow: 4,
          }}
          className='grid11'
        >
          <button className='button-82-pushable' role='button'>
            <span className='button-82-shadow'></span>
            <span className='button-82-edge'></span>
            <span className='button-82-front text'>ENTER SITE</span>
          </button>
        </div>
        <div
          style={{
            gridColumn: 3,
            gridRow: 4,
          }}
          className='grid12'
        />
      </div>
    </Html>
  );
};

export default function Viewer() {
  const ref = useRef();
  return (
    <Canvas>
      <HtmlContent className='z-2' />
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 3, 3]} fov={50}>
          <ambientLight intensity={0.1} />
          <pointLight position={[0, 1, 3]} />
          <directionalLight intensity={0.5} position={[0, 0, -1]} />
        </PerspectiveCamera>
        <Model />
        <Instances>
          <Burger />
        </Instances>
      </Suspense>
      <OrbitControls
        autoRotate
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
