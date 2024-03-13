/* 
framework voor lijst maken met:
    1. Lijst maken
    2. Item's toevoegen en verwijderen
    3. Item's sorteren 
*/

class List extends HTMLElement {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.method1(width, height);
    }

    method1(width, height) {
        this.style.width = width;
        this.style.height = height;
        this.style.display = 'block';
        this.style.backgroundColor = '#aaa';
    }

    method2(width, height) {
        const newEntry = document.createElement('div');
        newEntry.style.backgroundColor('white');
        newEntry.style.width = width / 10;
        newEntry.style.height = height / 10;
        this.append(newEntry);
    }
}
customElements.define('item-list', List);
// Example usage:
const instance = new List('1000px', '500px');
document.body.append(instance);

