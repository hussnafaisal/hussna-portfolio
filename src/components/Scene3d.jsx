import {
  Canvas,
  useFrame
} from "@react-three/fiber";

import {
  Float,
  Sphere,
  Box,
  Torus,
  Stars
} from "@react-three/drei";

import {
  useRef
} from "react";


function Core() {

  const core = useRef();

  useFrame((state) => {

    if (!core.current) return;

    core.current.rotation.x =
      state.clock.elapsedTime * 0.18;

    core.current.rotation.y =
      state.clock.elapsedTime * 0.25;

  });


  return (

    <group ref={core}>

      {/* Main sphere */}

      <Sphere args={[1.05, 48, 48]}>

        <meshStandardMaterial

          color="#111b4c"

          emissive="#087dff"

          emissiveIntensity={1.4}

          metalness={0.8}

          roughness={0.18}

          transparent

          opacity={0.9}

        />

      </Sphere>


      {/* Inner sphere */}

      <Sphere args={[0.78, 32, 32]}>

        <meshBasicMaterial

          color="#00d9ff"

          transparent

          opacity={0.12}

          wireframe

        />

      </Sphere>


      {/* Ring */}

      <Torus

        args={[
          1.45,
          0.018,
          16,
          100
        ]}

        rotation={[
          Math.PI / 2.5,
          0,
          0
        ]}

      >

        <meshBasicMaterial
          color="#00d9ff"
        />

      </Torus>


      <Torus

        args={[
          1.65,
          0.012,
          16,
          100
        ]}

        rotation={[
          Math.PI / 2,
          0.5,
          0
        ]}

      >

        <meshBasicMaterial
          color="#8b5cf6"
        />

      </Torus>

    </group>

  );
}



function FloatingObjects() {

  const group = useRef();


  useFrame((state) => {

    if (!group.current) return;

    group.current.rotation.y =
      state.clock.elapsedTime * 0.08;

  });


  return (

    <group ref={group}>

      {/* Purple cube */}

      <Float
        speed={2}
        rotationIntensity={1.5}
        floatIntensity={1.5}
      >

        <Box
          args={[0.75, 0.75, 0.75]}
          position={[2.2, 1.4, 0]}
        >

          <meshStandardMaterial

            color="#703cff"

            emissive="#703cff"

            emissiveIntensity={1.4}

            metalness={0.7}

            roughness={0.2}

          />

        </Box>

      </Float>


      {/* Cyan sphere */}

      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={2}
      >

        <Sphere
          args={[0.38, 32, 32]}
          position={[-2.1, 1.5, 0]}
        >

          <meshStandardMaterial

            color="#00c8ff"

            emissive="#00c8ff"

            emissiveIntensity={1.8}

            metalness={0.5}

            roughness={0.15}

          />

        </Sphere>

      </Float>


      {/* Pink sphere */}

      <Float
        speed={2}
        rotationIntensity={1.5}
        floatIntensity={2}
      >

        <Sphere
          args={[0.3, 32, 32]}
          position={[2.1, -1.5, 0]}
        >

          <meshStandardMaterial

            color="#d946ef"

            emissive="#d946ef"

            emissiveIntensity={1.8}

          />

        </Sphere>

      </Float>


      {/* Small blue sphere */}

      <Float
        speed={1.7}
        rotationIntensity={1}
        floatIntensity={1}
      >

        <Sphere
          args={[0.18, 24, 24]}
          position={[-2.2, -1.2, 0]}
        >

          <meshStandardMaterial

            color="#1877ff"

            emissive="#1877ff"

            emissiveIntensity={2}

          />

        </Sphere>

      </Float>

    </group>

  );
}



function Scene() {

  return (

    <>

      <ambientLight intensity={1.5} />


      <pointLight
        position={[3, 3, 5]}
        intensity={8}
        color="#00c8ff"
      />


      <pointLight
        position={[-4, -2, 3]}
        intensity={7}
        color="#7c3cff"
      />


      <pointLight
        position={[0, 0, 4]}
        intensity={4}
        color="#ffffff"
      />


      <Stars
        radius={8}
        depth={5}
        count={100}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />


      <Core />

      <FloatingObjects />

    </>

  );
}



export default function Scene3D() {

  return (

    <Canvas

      camera={{
        position: [0, 0, 7],
        fov: 45
      }}

      dpr={[1, 2]}

    >

      <Scene />

    </Canvas>

  );
}