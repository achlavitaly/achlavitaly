document.addEventListener('DOMContentLoaded', function() {
    var affirmations = [
        "You are enough.",
        "Be kind to yourself.",
        "You can achieve your goals.",
        "Breathe and be patient.",
        // Add more affirmations as needed
    ];

    var affirmationElement = document.getElementById('affirmation');
    affirmationElement.textContent = affirmations[Math.floor(Math.random() * affirmations.length)];
});
