
import { assert } from "chai"
import indiciesOfSums from '../src/index.js'

describe('Robin Healthcate Challenge', function() {
    describe('indiciesOfSums()', function() {
        it('Should return an array', function() {
            assert.equal(Array.isArray(indiciesOfSums([], 0)), true)
            assert.equal(Array.isArray(indiciesOfSums([1,2,3,4], 5)), true)
        })
        it('should throw an error if Array is not first argument', function() {
            assert.throws(indiciesOfSums, Error, /Argument 1 should be an array, argument 2 should be a number/)
        })
    })
})