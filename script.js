const messages = [
    "Are you sure about that?",
    "Think again...",
    "I really need this leave...",
    "Please reconsider...",
    "Come on, boss!",
    "Pretty please?",
    "I've been working so hard...",
    "Just a few days off...",
    "I promise I'll work extra hard when I'm back!",
    "Please, I really need a break! 🙏"
];

const images = [
    "main.png",
    "no1.gif",
    "no2.gif",
    "no3.jpg",
    "no4.png",
    "no5.gif"
];

let messageIndex = 0;
let imageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const mainImage = document.getElementById('main-image');
    
    // Update the message on the No button
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Make the Yes button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
    
    // Change the image
    imageIndex = (imageIndex + 1) % images.length;
    mainImage.src = images[imageIndex];
}

function handleYesClick() {
    window.location.href = "yes.html";
}
