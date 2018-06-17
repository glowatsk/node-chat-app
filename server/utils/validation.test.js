const expect = require('expect');
const {isRealString} = require('./validation.js');

describe('Username and room validation', () => {
    it('should reject a blank name and room', () => {
        expect(isRealString('')).toBeFalsy()
    });

    it('should reject non string values', () => {
        expect(isRealString(1234)).toBeFalsy()
    });

    it('should reject a name of only spaces', () => {
        expect(isRealString('       ')).toBeFalsy()
    });

    it('should accept a valid name string', () => {
        expect(isRealString('Brandon')).toBeTruthy()
    });
});