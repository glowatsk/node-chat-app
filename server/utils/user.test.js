const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Frank',
            room: 'Node'
        },{
            id: '2',
            name: 'Brandon',
            room: 'Node'
        },{
            id: '3',
            name: 'Steph',
            room: 'React'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 123,
            name: 'Brandon',
            room: 'Room One'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        compareUser = users.users[0];
        var removedUser = users.removeUser('1');

        expect(removedUser).toBe(compareUser);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        users.removeUser('4');
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        findUser = users.getUser('1');
        expect(findUser).toBe(users.users[0]);
    });

    it('should not find user', () => {
        findUser = users.getUser('4');
        expect(findUser).toBeFalsy();
    });

    it('should return users in Node room', () => {
        var userList = users.getUserList('Node');

        expect(userList).toEqual(['Frank', 'Brandon'])
    });

    it('should return users in React room', () => {
        var userList = users.getUserList('React');

        expect(userList).toEqual(['Steph'])
    });
    

});