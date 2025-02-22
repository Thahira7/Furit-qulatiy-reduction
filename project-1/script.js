function detectFruitQuality() {
    // This function simulates detecting fruit quality.
    // For real implementation, you would need to integrate deep learning API here.
    
    const resultElement = document.getElementById("result");
    const fileInput = document.getElementById("fruitImage");
    
    if (fileInput.files.length == 0) {
        alert("Please upload an image first!");
        return;
    }
    
    // Simulate detection process
    const randomQuality = Math.random();
    let resultText = "Analyzing the fruit...";
    
    if (randomQuality < 0.3) {
        resultText = "The fruit is Rotten!";
    } else if (randomQuality < 0.7) {
        resultText = "The fruit is Slightly Spoiled.";
    } else {
        resultText = "The fruit is Fresh!";
    }

    resultElement.textContent = resultText;
}
