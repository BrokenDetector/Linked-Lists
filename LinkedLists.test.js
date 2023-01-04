const LinkedLists = require('./LinkedLists');

const list = new LinkedLists();

describe('#append(value)', () => {
    test('Adds a new node containing value to the end of the list', () => {

        list.append('my');
        list.append('name');

        expect(list.HEAD()).toBe('my');
        expect(list.TAIL()).toBe('name');
    });
});

describe('#prepend(value)', () => {
    test('Adds a new node containing value to the start of the list', () => {

        list.prepend('hi')

        expect(list.HEAD()).toBe('hi');
    });
});

describe('#size', () => {
    test('Returns the total number of nodes in the list', () => {
        expect(list.size()).toBe(3);
    });
});

describe('#at(index)', () => {
    test('Returns the node at the given index', () => {
        expect(list.at(1).value).toBe('my');
        expect(list.at(9)).toBe('There is no node for this index');
    });
});

describe('#pop', () => {
    test('Removes the last element from the list', () => {
        list.pop();
        expect(list.TAIL()).toBe('my');
        expect(list.size()).toBe(2);
    });
});

describe('#contains(value)', () => {
    test('Returns true if the passed in value is in the list and otherwise returns false.', () => {
        list.append('name');
        expect(list.contains('name')).toBe(true);
        expect(list.contains('node')).toBe(false);
    });
});

describe('#find(value)', () => {
    test('Returns the index of the node containing value, or null if not found.', () => {
        expect(list.find('my')).toBe(1);
        expect(list.find('name')).toBe(2);
        expect(list.find('node')).toBe(null);
    });
});

describe('#toString()', () => {
    test('Represents your LinkedList objects as strings', () => {
        expect(list.size()).toBe(3);
        expect(list.toString()).toBe('( hi ) -> ( my ) -> ( name ) -> null');
    });
});

describe('#insertAt(value, index)', () => {
    test('That inserts a new node with the provided value at the given index.', () => {
        list.insertAt('ayo', 1);
        expect(list.size()).toBe(4);
        expect(list.toString()).toBe('( hi ) -> ( my ) -> ( ayo ) -> ( name ) -> null');
    });
});

describe('#removeAt(index)', () => {
    test('That removes the node at the given index.', () => {
        list.removeAt(1);
        expect(list.size()).toBe(3);
        expect(list.toString()).toBe('( hi ) -> ( ayo ) -> ( name ) -> null');
        list.removeAt(-1);
        expect(list.size()).toBe(3);
        expect(list.toString()).toBe('( hi ) -> ( ayo ) -> ( name ) -> null');
    });
});