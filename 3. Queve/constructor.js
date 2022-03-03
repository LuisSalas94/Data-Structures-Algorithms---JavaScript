class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queve {
	constructor(value) {
		const newNode = new Node(value);
		this.first = newNode;
		this.last = newNode;
		this.length = 1;
	}

	enqueve(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}

	dequeve() {
		if (this.length === 0) return undefined;
		let temp = this.first;
		if (this.length === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
			temp.next = null;
		}
		this.length--;
		return temp;
	}
}

let myQueve = new Queve(11);
myQueve.enqueve(3);
myQueve.enqueve(23);
myQueve.enqueve(7);
