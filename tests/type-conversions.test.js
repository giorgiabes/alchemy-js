const toNumber = require('../src/type-conversions/toNumber');
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
