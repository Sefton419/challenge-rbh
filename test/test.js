
import { assert, expect } from "chai"
import indiciesOfSums from '../src/index.js'

describe('Robin Healthcate Challenge', function() {
    describe('indiciesOfSums()', function() {
        it('Should return an array', function() {
            assert.equal(Array.isArray(indiciesOfSums([], 0)), true)
            assert.equal(Array.isArray(indiciesOfSums([1,2,3,4], 5)), true)
        })
        it('Should throw an error if Array is not first argument', function() {
            const args = ['', true, false, {}, 4, NaN, undefined]
            args.forEach((arg) => {
                try {
                    indiciesOfSums(arg, 0);
                } catch(e) {
                    expect(e.message).to.equal('Argument 1 should be an array, argument 2 should be a number');
                }
            })
        })
        it('Should throw an error if number is not second argument', function() {
            const args = ['', true, false, {}, [], NaN, undefined]
            args.forEach((arg) => {
                try {
                    indiciesOfSums([], arg);
                } catch(e) {
                    expect(e.message).to.equal('Argument 1 should be an array, argument 2 should be a number');
                }
            })
        })
        it('Should NOT throw an error if correct argument types are passed', function() {
            const argPairs = [[[1,2,3,4], 5], [[4,4,4,4], 12], [[], 5], [[44,22,11], 66]]
            argPairs.forEach((args) => {
                try {
                    assert.equal(Array.isArray(indiciesOfSums(args[0], args[1])), true);
                    
                } catch(e) {
                    expect(e.message).to.not.equal('Argument 1 should be an array, argument 2 should be a number');
                }
            })
        })

        // function to check indicies, used in tests below
        const checkIndicies = (nums, sum, correctLength) => {
            const indicies = indiciesOfSums(nums, sum);
            const length = indicies.length;

            assert.equal(length, correctLength)
            if (length) {
                indicies.forEach((arr) => {
                    assert.equal(nums[arr[0]] + nums[arr[1]], sum)
                })
            }
        }

        it('Should pass basic case', function() {
            const nums = [1, 3, 4, 5, 6, 8, 10, 11, 13];
            const sum = 14;
            const length = 4;

            checkIndicies(nums, sum, length)
        })
        it('Should pass another case', function() {
            const nums = [-12, 0, -3, 22, 101, 32, 123121, -140];
            const sum = -3;
            const length = 1;

            checkIndicies(nums, sum, length)
        })

        it('Should be able to handle the same number repeted in array', function() {
            const nums = [1,1,1,1];
            const sum = 2;
            const length = 6;

            checkIndicies(nums, sum, length)
        })
    })
})