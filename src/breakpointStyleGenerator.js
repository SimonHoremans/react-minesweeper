export const breakpointStyleGenerator = (breakpoints, propertiesToStyle) => {

    const allStyles = []

    for(const [key, value] of Object.entries(breakpoints)) {
        const currentStyle = []
        propertiesToStyle.forEach((property) => {
            const values = property.values
            const processor = property.processor

            if(values === 'relative') {
                const style = processor(value, key)
                if(style !== undefined) {
                    currentStyle.push(style)
                } 
            }

            else if(key in values[0]) {
                currentStyle.push(processor(values[0][key], values[1], value, key))
            }
        })

        if(currentStyle.length === 0) continue

        allStyles.push(`
            @media(min-width: ${value}px) {
                ${currentStyle.join('\n')}
            }
        `)
    }

    return allStyles.join('\n')
}

export const getBreakpointStyleGenerator = (breakpoints) => {
    return (propertiesToStyle) => breakpointStyleGenerator(breakpoints, propertiesToStyle)
}

export const styleString = (value) => {
    return value[0] + value[1]
}