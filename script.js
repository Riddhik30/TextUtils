// Get HTML elements
const textInput = document.getElementById('textInput');
const output = document.getElementById('output');
const uppercaseBtn = document.getElementById('uppercaseBtn');
const lowercaseBtn = document.getElementById('lowercaseBtn');
const capitalizeBtn = document.getElementById('capitalizeBtn');
const countWordsBtn = document.getElementById('countWordsBtn');
const reverseBtn = document.getElementById('reverseBtn');

// Event listeners for text transformations
uppercaseBtn.addEventListener('click', () => {
    const inputText = textInput.value;
    output.textContent = inputText.toUpperCase();
});

lowercaseBtn.addEventListener('click', () => {
    const inputText = textInput.value;
    output.textContent = inputText.toLowerCase();
});

capitalizeBtn.addEventListener('click', () => {
    const inputText = textInput.value;
    const words = inputText.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    output.textContent = capitalizedWords.join(' ');
});

countWordsBtn.addEventListener('click', () => {
    const inputText = textInput.value;
    const words = inputText.split(' ');
    const wordCount = words.length;
    output.textContent = `Word Count: ${wordCount}`;
});

reverseBtn.addEventListener('click', () => {
    const inputText = textInput.value;
    output.textContent = inputText.split('').reverse().join('');
});

