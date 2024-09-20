function generateCombinations(inputString, combinationLength) {
    let combinations = new Set();
    let chars = Array.from(inputString);

    function helper(prefix, length) {
        if (length === 0) {
            combinations.add(prefix);
            return;
        }
        for (let char of chars) {
            helper(prefix + char, length - 1);
        }
    }

    helper('', combinationLength);
    return Array.from(combinations);
}

function copyToClipboard() {
    const combinationsText = document.getElementById('combinations').textContent;
    navigator.clipboard.writeText(combinationsText).then(() => {
        showCopiedMessage();
    }).catch(err => {
        alert('Failed to copy text: ' + err);
    });
}

function showCopiedMessage() {
    const copiedMessage = document.getElementById('copiedMessage');
    copiedMessage.style.top = '20px';
    setTimeout(() => {
        hideCopiedMessage();
    }, 2000);
}

function hideCopiedMessage() {
    const copiedMessage = document.getElementById('copiedMessage');
    copiedMessage.style.top = '-50px';
}

function generateAndShowCombinations() {
    const inputString = document.getElementById('inputString').value;
    const combinationLength = parseInt(document.getElementById('combinationLength').value);

    if (!inputString || isNaN(combinationLength) || combinationLength <= 0) {
        alert('Please enter valid input.');
        return;
    }

    const combinations = generateCombinations(inputString, combinationLength);
    document.getElementById('combinations').textContent = combinations.join('\n');
    document.getElementById('copyButton').style.display = 'block';
    document.getElementById('downloadButton').style.display = 'block';
}

function downloadCombinations() {
    const inputString = document.getElementById('inputString').value;
    const combinationsText = document.getElementById('combinations').textContent;
    const blob = new Blob([combinationsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${inputString}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}
