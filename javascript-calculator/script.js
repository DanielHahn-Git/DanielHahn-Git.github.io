const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const delButton = document.querySelector('[data-del]');
const clearButton = document.querySelector('[data-clear]');
const previousText = document.querySelector('[data-previous]');
const currentText = document.querySelector('[data-current]');

class Calculator {
    constructor(previousText, currentText) {
        this.previousText = previousText
        this.currentText = currentText
        this.clear()
    }
}

