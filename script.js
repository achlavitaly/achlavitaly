document.addEventListener('DOMContentLoaded', function() {
    var affirmations = [
        "You are enough.",
        "Be kind to yourself.",
        "You can achieve your goals.",
        "Breathe and be patient.",
        "You are worthy of good things.",
        "Embrace the journey, not just the destination.",
        "You are strong and capable.",
        "Positive energy surrounds you.",
            "Your voice matters.",
    "Confidence grows within you every day.",
    "You radiate with self-assurance.",
    "Every challenge is an opportunity to grow.",
    "You deserve happiness and peace.",
    "Your potential is limitless.",
    "Believe in yourself and your abilities.",
    "You create your own success.",
    "Your dreams are within reach.",
    "You have the power to change your story.",
    "Let go of what no longer serves you.",
    "Today, you choose joy.",
    "Your courage inspires those around you.",
    "You are the architect of your life; build its foundation with love.",
    "Kindness is your strength.",
    "Every day is a fresh start.",
    "You have the power to create change.",
    "Your mind is a powerful thing; fill it with positive thoughts.",
    "Your life is a celebration of your achievements.",
    "Trust the timing of your life.",

// Add as many more phrases as you want here
    ];

    var affirmationElement = document.getElementById('affirmation');
    affirmationElement.textContent = affirmations[Math.floor(Math.random() * affirmations.length)];
});
