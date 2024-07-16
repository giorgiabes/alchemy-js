const toNumber = require('../src/type-conversions/toNumber');
const combineToString = require('../src/type-conversions/combineToString');
const { assert } = require('chai');

describe('toNumber', () => {
    describe('given a convertible number', () => {
        it('should convert it', () => {
            assert.strictEqual(toNumber("1"), 1);
            assert.strictEqual(toNumber("3"), 3);
            assert.strictEqual(toNumber("10"), 10);
        });
    });
    describe('given a non-convertible number', () => {
        it('should return zero', () => {
            assert.strictEqual(toNumber("a"), 0);
            assert.strictEqual(toNumber("pizza"), 0);
            assert.strictEqual(toNumber("abc123"), 0);
        });
    });
});

describe('combineToString', () => {
    describe('given two numbers', () => {
        it('should combine them', () => {
            assert.strictEqual(combineToString(1,1), "11");
            assert.strictEqual(combineToString(5,10), "510");
        });
    });
    describe('given a number and a string', () => {
        it('should combine them', () => {
            assert.strictEqual(combineToString(2, "2"), "22");
            assert.strictEqual(combineToString("5", 55), "555");
        });
    });
    describe('given a number and a boolean', () => {
        it('should combine them', () => {
            assert.strictEqual(combineToString(2, true), "2true");
            assert.strictEqual(combineToString(false, 55), "false55");
        });
    });
});
