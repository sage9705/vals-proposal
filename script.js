var yesPressed = false;
var noCount = 0;

document.getElementById("yesButton").addEventListener("click", function() { 
    yesPressed = true; 
    updatePage(); 
});

document.getElementById("noButton").addEventListener("click", function() { 
    handleNoClick(); 
    updatePage(); 
});

function handleNoClick() {
    noCount++;
}

function calculateYesButtonSize() {
    return noCount * 20 + 16;
}

function getNoButtonText() {
    const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;(",
    ];

    const index = noCount % phrases.length;
    return phrases[index];
}

function updatePage() {
    document.getElementById("yesButton").style.fontSize = calculateYesButtonSize() + "px";
    
    if (yesPressed) {
        document.getElementById("yesButton").style.display = "none";
        document.getElementById("noButton").style.display = "none";
        document.getElementById("image").src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        // document.getElementById("resultText").innerHTML = "Ok yay!!!";
        document.getElementById("valentineText").innerHTML = "Ok yay!!!";
    } else {
        document.getElementById("noButton").innerHTML = getNoButtonText();
    }
}
