document.addEventListener('DOMContentLoaded', function() {
    // Change text content dynamically
    const dynamicTextElement = document.getElementById('dynamicText');
    setTimeout(() => {
        dynamicTextElement.textContent = 'The text has been updated dynamically by JavaScript!';
    }, 2000); // Change after 2 seconds

    // Modify CSS styles via JavaScript
    const styleButton = document.getElementById('styleButton');
    styleButton.addEventListener('click', function() {
        dynamicTextElement.classList.toggle('styled');
    });

    // Add or remove an element when a button is clicked
    const addElementButton = document.getElementById('addElementButton');
    const removeElementButton = document.getElementById('removeElementButton');
    const elementContainer = document.getElementById('elementContainer');

    addElementButton.addEventListener('click', function() {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'A new element added by JavaScript!';
        newParagraph.classList.add('new-element');
        elementContainer.appendChild(newParagraph);
    });

    removeElementButton.addEventListener('click', function() {
        const removableElement = document.querySelector('.removable');
        if (removableElement) {
            elementContainer.removeChild(removableElement);
        } else {
            alert('No removable element found!');
        }
    });
});