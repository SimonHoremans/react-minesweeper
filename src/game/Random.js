class Random {
    static range(min, max) {
        const diff = max - min
        return Math.round(Math.random()*diff) + min
    }
}

export default Random