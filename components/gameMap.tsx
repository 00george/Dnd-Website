import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"
import { TextureLoader } from "three";

const GameMap = () => {

    const loader = new TextureLoader();
    const texture = loader.load("map.jpg");

    return (
        <div>
                <Canvas >
                <color attach="background" args={['#000000']} />
                    <sprite>
                        <spriteMaterial map={texture} />
                    </sprite>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.30} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <OrbitControls />
                </Canvas>
            </div>
    )
}

export default GameMap;