
const indiciesOfSums = (arr, sum, results = [], startingIndex = 0) => {
    if (!Array.isArray(arr) || typeof sum !== 'number')
        throw new Error("Argument 1 should be an array, argument 2 should be a number")

    if (arr.length - 1 < startingIndex) return results;

    const newIndicies = arr.reduce((acc, curr, i) => {
        if (i < startingIndex + 1)
            return acc;
            
        const currSum = arr[startingIndex] + curr;

        if (currSum === sum)
            acc.push([startingIndex, i]);

        return acc;
    }, [])

    const newResults = [...results, ...newIndicies];

    return indiciesOfSums(arr, sum, newResults, startingIndex + 1);     
}

export default indiciesOfSums;