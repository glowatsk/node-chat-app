const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const testLocation = {
            latitude: 20,
            longitude: 20
        }
        const newLocation = generateLocationMessage('Admin', testLocation.latitude, testLocation.longitude);
        expect(newLocation.url).toBe('https://www.google.com/maps?q=20,20')
    });
});