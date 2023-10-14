document.getElementById("generate").addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("number").innerText = randomNumber;
});
