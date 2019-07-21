
/*

Indicies of Sums

Write a function in JavaScript that accepts an array of integers and a number X as parameters, 
when invoked, returns an array of unique indices of two numbers whose sum is equal to X.

For example: [1, 3, 4, 5, 6, 8, 10, 11, 13], Sum: 14

Pairs of indices: [0, 8], [1, 7], [2, 6], [4, 5]

 */

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