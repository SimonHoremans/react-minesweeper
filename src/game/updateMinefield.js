const copyMap = (map) => {
    return map.map(strip => strip.slice())
}

const updateMinefield = (minefield, selectedTile) => {

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

    const visible = copyMap(minefield.visible)
    const mineMap = minefield.mineMap

    if(mineMap[selectedTile[0]][selectedTile[1]] !== 0) {visible[selectedTile[0]][selectedTile[1]] = true; return visible}
    
    const zeroTileQueque = [selectedTile]

    while (zeroTileQueque.length > 0) {
        const currentTile = zeroTileQueque[0]
        
        const area = getAreaAroundTile(minefield.width, minefield.height, currentTile[0], currentTile[1])

        for(let x = area.x[0]; x < area.x[1]; x++) {
            for(let y = area.y[0]; y < area.y[1]; y++) {

                if(visible[x][y]) continue
                
                visible[x][y] = true

                if(mineMap[x][y] === 0) zeroTileQueque.push([x, y])  
            }
        }

        zeroTileQueque.shift()

    }

    return visible
}

export default updateMinefield