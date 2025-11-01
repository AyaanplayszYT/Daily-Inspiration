 // Function to get a new random quote with animation
 function getNewQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.style.opacity = 0; // Start fade-out

    setTimeout(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = `"${randomQuote}"`;
        quoteElement.style.opacity = 1; // Start fade-in
    }, 500); // Delay to match fade-out duration
}

// Handle dark mode toggle
document.getElementById('darkModeToggle').addEventListener('change', (e) => {
    document.body.classList.toggle('dark-mode', e.target.checked);
});

// Quotes array
const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "It is not the mountain we conquer, but ourselves.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The best way to predict your future is to create it.",
    "You do not find the happy life. You make it.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Work hard in silence, let your success be your noise.",
    "You can waste your lives drawing lines. Or you can live your life crossing them.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Success is not in what you have, but who you are.",
    "Success is the sum of small efforts, repeated day-in and day-out.",
    "Success is achieved and maintained by those who try and keep trying.",
    "Motivation gets you going, but discipline keeps you growing.",
    "If you’re not willing to risk the usual, you’ll have to settle for the ordinary."
];
    