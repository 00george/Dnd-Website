import React from 'react'
import dynamic from 'next/dynamic'
const GameMap = dynamic(() => import('@/components/gameMap'), {
    ssr: false
})

export default function Map() {



    return (
        <div>
            Map
            <div id="canvas-container">
                <GameMap />
            </div>
        </div>
    )
}