const copyMap = (map) => {
    return map.map(strip => strip.slice())
}

const updateMinefield = (state, selectedTile) => {

    state.visible = copyMap(state.visible)
    state.flags = copyMap(state.flags)

    const flags = state.flags
    const mineMap = state.mineMap
    const visible = state.visible


    const getAreaAroundTile = (width, height, x, y) => {
        let xMin = x - 1
        let xMax = x + 2
        let yMin = y - 1
        let yMax = y + 2
    
        if(xMin < 0) {
            xMin = 0
        }
    
        if(xMax > width) {
            xMax = width
        }
    
        if(yMin < 0) {
            yMin = 0
        }
    
        if(yMax > height) {
            yMax = height
        }
    
        return {
            x: [xMin, xMax],
            y: [yMin, yMax]
        }
    }

    const gameOver = () => {

        mineMap.forEach((column, x) => {
            column.forEach((tile, y) => {
                if(tile === -1) {
                    if(!flags[x][y]) visible[x][y] = true
                }
                else {
                    if(flags[x][y]) flags[x][y] = false
                }
            })
        })

        return flags
    }
    

    // const visible = copyMap(minefield.visible)
    // let numberOfExposedTiles = minefield.numberOfExposedTiles
    // let flags = null
    // const mineMap = minefield.mineMap
    const [xTile, yTile] = selectedTile
    const tileValue = mineMap[xTile][yTile]





    if(tileValue === -1) {
        gameOver()
        return
    }

    if(tileValue !== 0) {
        visible[xTile][yTile] = true
        state.numberOfExposedTiles += 1
        return
    }
    
    const zeroTileQueque = [selectedTile]

    while (zeroTileQueque.length > 0) {
        const currentTile = zeroTileQueque[0]
        
        const area = getAreaAroundTile(state.width, state.height, currentTile[0], currentTile[1])

        for(let x = area.x[0]; x < area.x[1]; x++) {
            for(let y = area.y[0]; y < area.y[1]; y++) {

                if(visible[x][y]) continue
                
                visible[x][y] = true
                state.numberOfExposedTiles += 1

                if(mineMap[x][y] === 0) zeroTileQueque.push([x, y])  
            }
        }

        zeroTileQueque.shift()

    }


    return
}

export default updateMinefield