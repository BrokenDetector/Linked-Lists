class Node {
    constructor(value, next = null) {
        this.value = value,
            this.next = next
    };
};

class LinkedLists {
    constructor() {
        this.head = null,
            this.tail = null
    };

    append(value) {
        const node = new Node(value);

        if (this.tail) {
            this.tail.next = node;
        };

        if (!this.head) {
            this.head = node;
        };

        this.tail = node;
    };

    prepend(value) {
        const node = new Node(value, this.head);

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        };
    };

    toArray() {
        const output = [];
        let current = this.head;

        while (current) {
            output.push(current);

            current = current.next;
        };

        return output;
    };

    size() {
        let current = this.head;
        let size = 0;

        while (current) {
            size++;
            current = current.next;
        };

        return size;
    };

    HEAD() {
        return this.head.value;
    };

    TAIL() {
        return this.tail.value;
    };

    at(index) {
        const node = this.toArray()[index];
        if (node == undefined) {
            return 'There is no node for this index'
        }
        else {
            return node;
        }
    };

    pop() {
        let current = this.head;
        let secondToLastNode = this.head;
        while (current.next) {
            secondToLastNode = current;
            current = current.next;
        }
        secondToLastNode.next = null;
        this.tail = secondToLastNode;

        return list;
    };

    contains(value) {
        const newArray = [];
        this.toArray().forEach(el => {
            newArray.push(el.value);
        });
        return newArray.includes(value);
    };

    find(value) {
        const newArray = []
        this.toArray().forEach(el => {
            newArray.push(el.value);
        });
        const index = newArray.indexOf(newArray.find(el => el == value));
        if (index >= 0) {
            return index;
        }
        else {
            return null;
        };

    };

    toString() {
        let string = '';
        this.toArray().forEach(el => {
            string += '( ' + el.value + ' ) -> ';
        });
        return string + null;
    };

    insertAt(value, index) {
        if (index === 0) {
            return this.prepend(value);
        }
        if (index > this.size()) {
            this.append(value);
        }
        else {
            const node = new Node(value);

            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            };
            node.next = current.next;
            current.next = node;
            console.log('stop')
        };
    };

    removeAt(index) {
        const newArray = []
        this.toArray().forEach(el => {
            newArray.push(el.value);
        });

        const toRemove = newArray[index];

        let current = this.head;
        while (current.next) {
            if (current.value === toRemove) {
                current.value = current.next.value;
                current.next = current.next.next;
            }
            else {
                current = current.next;
            };
        };
    };
};

const list = new LinkedLists();

list.append('my');
list.append('name');
list.prepend('hi');
list.pop()
list.append('name');
console.log(list)
console.log(list.toArray())

module.exports = LinkedLists