function chunkString(str, chunkSize) {
    if (!str) return []; // Handle null or empty string

    let chunks = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        chunks.push(str.substring(i, i + chunkSize));
    }
    return chunks;
}

function processChunk() {
    const inputString = document.getElementById("inputString").value;
    const chunkSize = parseInt(document.getElementById("chunkSize").value, 10);
    const resultDiv = document.getElementById("result");

    if (!inputString) {
        resultDiv.textContent = "Please enter a valid string.";
        return;
    }

    if (isNaN(chunkSize) || chunkSize <= 0) {
        resultDiv.textContent = "Please enter a valid chunk size.";
        return;
    }

    const chunks = chunkString(inputString, chunkSize);
    resultDiv.textContent = "Chunks: " + JSON.stringify(chunks, null, 2);
}
