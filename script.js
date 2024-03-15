
document.getElementById("check-btn").addEventListener("click", function(event) {
    
    const textInput = document.getElementById("text-input").value;
    if (!textInput.trim()) {
        alert('Please input a value');
        return;
    }

    const resultText = isPalindrome(textInput) ? `${textInput} is a palindrome.` : `${textInput} is not a palindrome.`;
    document.getElementById("result-text").textContent = resultText;
});

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
