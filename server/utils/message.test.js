const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Brandon';
        var text = 'This test better pass';
        var newMessage = generateMessage(from, text);
        expect(newMessage.from).toBe(from);
        expect(newMessage.text).toBe(text);
        expect(newMessage.createdAt).toBe(newMessage.createdAt);
    });
});