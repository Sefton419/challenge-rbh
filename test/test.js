import { assert, expect } from "chai"
import indicesOfSums from '../src/index.js'

describe('Robin Healthcare Challenge', function() {
    describe('indicesOfSums()', function() {
        it('Should return an array', function() {
            assert.equal(Array.isArray(indicesOfSums([], 0)), true);
            assert.equal(Array.isArray(indicesOfSums([1,2,3,4], 5)), true);
        })
        it('Should throw an error if Array is not first argument', function() {
            const args = ['', true, false, {}, 4, NaN, undefined];
            args.forEach((arg) => {
                try {
                    indicesOfSums(arg, 0);
                    assert.equal(true, false)
                } catch(e) {
                    expect(e.message).to.equal('Argument 1 should be an array, argument 2 should be a number');
                }
            })
        })
        it('Should throw an error if number is not second argument', function() {
            const args = ['', true, false, {}, [], NaN, undefined];
            args.forEach((arg) => {
                try {
                    indicesOfSums([], arg);
                    assert.equal(true, false)
                } catch(e) {
                    expect(e.message).to.equal('Argument 1 should be an array, argument 2 should be a number');
                }
            })
        })

        // function to check indices, used in tests below
        const checkIndices = (nums, sum, correctLength) => {
            const indices = indicesOfSums(nums, sum);
            const length = indices.length;

            assert.equal(length, correctLength)
            if (length) {
                indices.forEach((arr) => {
                    assert.equal(nums[arr[0]] + nums[arr[1]], sum)
                })
            }
        }

        it('Should pass basic case', function() {
            const nums = [1, 3, 4, 5, 6, 8, 10, 11, 13];
            const sum = 14;
            const length = 4;

            checkIndices(nums, sum, length)
        })
        it('Should pass another case', function() {
            const nums = [-12, 0, -3, 22, 101, 32, 123121, -140];
            const sum = -3;
            const length = 1;

            checkIndices(nums, sum, length)
        })

        it('Should be able to handle the same number repeated in array', function() {
            const nums = [1,1,1,1];
            const sum = 2;
            const length = 6;

            checkIndices(nums, sum, length)
        })

        it('Should be able to handle a result that contains no sums', function() {
            const nums = [1,1,1,1];
            const sum = 3;
            const length = 0;

            checkIndices(nums, sum, length)
        })
    })
})