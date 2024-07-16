const throwError = require('../src/exceptions/throwError.js')
const catchError = require('../src/exceptions/catchError.js')
const startError = require('../src/exceptions/startError.js')
const { assert } = require('chai');

describe('throwError', () => {
    it('should throw an error', () => {
        let ex;
        try { 
            throwError();
        }
        catch(_ex) {
            ex = _ex;
        }
        assert(ex, "did not throw an error");
        assert.equal(ex.constructor, Error);
    });
});

describe('catchError', () => {
    it('should catch a thrown error', () => {
        let ex;
        try {
            catchError(() => {
                throw new Error();
            });
        }
        catch(_ex) {
            ex = _ex;
        }
        assert(!ex, "the error should have been caught");
    });

    it('should return the thrown error', () => {
        let expected = new Error();
        let actual = catchError(() => {
            throw expected;
        });
        assert.equal(actual, expected, "Should have returned the same error that was caught");
    });

    it('should return false when no error is thrown', () => {
        let ex = catchError(() => {});
        assert.equal(ex, false);
    });
});

describe('startError', () => {
    it('should throw a subclass of error', () => {
        let ex;
        try {
            startError();
        }
        catch (_ex) {
            ex = _ex;
        }
        assert(ex, "did not throw an error");
        console.log(ex);
        assert.equal(ex.__proto__.__proto__.constructor, Error);
    });
});
