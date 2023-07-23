import Box from '@/game/components/box'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

export default function Map() {

    return (
        <div>
            Map
            <div id="canvas-container">
                <Canvas >
                    <color attach="background" args={['#000000']} />
                    <ambientLight intensity={0.1} />
                    <spotLight position={[10, 10, 10]} angle={0.30} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Box position={[-1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <OrbitControls />
                </Canvas>
            </div>
        </div>
    )
}