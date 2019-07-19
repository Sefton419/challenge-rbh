
const indiciesOfSums = (arr, num) => {
    if (!(Array.isArray(arr) || typeof num === 'number'))
        throw new Error("Argument 1 should be an array, argument 2 should be a number")

    return []
}

export default indiciesOfSums;