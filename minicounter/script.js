"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const countElement = document.getElementById('count');
let count = 0;
incrementButton?.addEventListener('click', () => {
    count++;
    if (countElement) {
        countElement.textContent = count.toString();
    }
});
decrementButton?.addEventListener('click', () => {
    count--;
    if (countElement) {
        countElement.textContent = count.toString();
    }
});
//# sourceMappingURL=script.js.map