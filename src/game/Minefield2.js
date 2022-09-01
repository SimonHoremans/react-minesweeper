import Random from "./Random.js"

class Minefield {
    width
    height
    numberOfMines
    mineMap
    excludedTile

    constructor(width, height, numberOfMines, excludedTile) {
        this.width = width
        this.height = height
        this.numberOfMines = numberOfMines
        this.excludedTile = excludedTile
        this.#generate()
    }

    get() {
        return {
            'width': this.width,
            'height': this.height,
            'numberOfMines':this.numberOfMines,
            'mineMap':this.mineMap,
            'visible':this.#generateEmptyMap(false),
            'flags':this.#generateEmptyMap(false)
        }
    }


    #generate() {
        this.#generateEmptyMineMap()
        this.#addMinesToMineMap()
        this.#calculateNumberOfMinesPerTile()
    }

    static generateEmptyMap(width, height, content) {
        let emptyMap = []
    
        for(let x = 0; x < width; x++) {
            let strip = []
            for(let y = 0; y < height; y++) {
                strip.push(content)
            }
            emptyMap.push(strip)
        }
    
        return emptyMap
    }

    #generateEmptyMineMap() {
        this.mineMap = this.#generateEmptyMap(0)
    }

    #generateEmptyMap(content) {
        let emptyMap = []

        for(let x = 0; x < this.width; x++) {
            let strip = []
            for(let y = 0; y < this.height; y++) {
                strip.push(content)
            }
            emptyMap.push(strip)
        }

        return emptyMap
    }

    #getAllPointsInMap(initialZeroGroup) {
        const AllPoints = []

        for(let y = 0; y < this.height; y++) {
            for(let x = 0; x < this.width; x++) {
                if(initialZeroGroup[x][y]) continue
                AllPoints.push([x, y])
            }
        }

        return AllPoints
    }

    #addMinesToMineMap() {

        const initialZeroGroup = this.#generateInitialZeroGroup()

        const AllPoints = this.#getAllPointsInMap(initialZeroGroup)
        // const excludedTileIndex = (this.width*this.excludedTile[1]) + this.excludedTile[0]
        // AllPoints.splice(excludedTileIndex, 1)

        for(let i = 0; i < this.numberOfMines; i++) {
            const randomIndex = Random.range(0, AllPoints.length - 1)
            const randomPoint = AllPoints[randomIndex]
            
            this.mineMap[randomPoint[0]][randomPoint[1]] = -1

            AllPoints.splice(randomIndex, 1)
        }
    }

    #generateInitialZeroGroup() {
        const zeroGroup = this.#generateEmptyMap(false)
        const numberOfZeroTiles = this.width*this.height*Random.range(2, 8)/100
        const queque = [this.excludedTile]

        const _getOptions = (xTile, yTile) => {
            const area = this.#getAreaAroundTile(xTile, yTile)
            const options = []

            for(let x = area.x[0]; x < area.x[1]; x++) {
                for(let y = area.y[0]; y < area.y[1]; y++) {

                    if(x === xTile && y === yTile) continue

                    if(zeroGroup[x][y]) continue

                    options.push([x, y])

                }
            }

            return options
        }

        let counter = 0

        while (counter < numberOfZeroTiles) {
            const currentTileIndex = Random.range(0, queque.length - 1)
            const [xTile, yTile] = queque[currentTileIndex]

            const options = _getOptions(xTile, yTile)

            if(options.length < 1) {
                queque.splice(currentTileIndex, 1)
                continue
            }

            counter++

            const randomOptionIndex = Random.range(0, options.length - 1)
            const [xRand, yRand] = options[randomOptionIndex]
            zeroGroup[xRand][yRand] = true
            queque.push([xRand, yRand])


        }

        

        queque.forEach(
            tile => {
                
                const [xTile, yTile] = tile

                const area = this.#getAreaAroundTile(xTile, yTile)

                for(let x = area.x[0]; x < area.x[1]; x++) {
                    for(let y = area.y[0]; y < area.y[1]; y++) {
    
                        if(x === xTile && y === yTile) continue
    
                        if(zeroGroup[x][y] === 1) continue
    
                        zeroGroup[x][y] = true
    
                    }
                }

            }
        )
        
        // const numberOfCountedZeros = zeroGroup.reduce((total, column) => total + column.reduce((totalColumn, tile) => tile === 1 ? totalColumn + 1 : totalColumn, 0), 0)

        return zeroGroup
    }

    #calculateNumberOfMinesPerTile() {
        const calculateForTile = (xTile, yTile) => {

            const area = this.#getAreaAroundTile(xTile, yTile)
            

            let numberOfSurroundingMines = 0

            for(let x = area.x[0]; x < area.x[1]; x++) {
                for(let y = area.y[0]; y < area.y[1]; y++) {
                    if(this.mineMap[x][y] === -1) {
                        numberOfSurroundingMines++
                    }
                }
            }

            return numberOfSurroundingMines
        }


        for(let x = 0; x < this.width; x++) {
            for(let y = 0; y < this.height; y++) {

                if(this.mineMap[x][y] === -1) continue

                const numberOfSurroundingMines = calculateForTile(x, y)

                this.mineMap[x][y] = numberOfSurroundingMines
                
            }
        }

        
    }

    #getAreaAroundTile(x, y) {
        let xMin = x - 1
        let xMax = x + 2
        let yMin = y - 1
        let yMax = y + 2

        if(xMin < 0) {
            xMin = 0
        }

        if(xMax > this.width) {
            xMax = this.width
        }

        if(yMin < 0) {
            yMin = 0
        }

        if(yMax > this.height) {
            yMax = this.height
        }

        return {
            x: [xMin, xMax],
            y: [yMin, yMax]
        }
    }

    
}

export default Minefield