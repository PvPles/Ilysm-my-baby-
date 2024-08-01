document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById("heart");
    const letter = document.getElementById("letter");
    const lines = letter.querySelectorAll(".line");
    const clickSound = document.getElementById("click-sound");

    heart.addEventListener("click", function() {
        letter.classList.add('show'); // Show the letter with animation
        let delay = 0;

        lines.forEach((line, index) => {
            delay += 1.5;
            setTimeout(() => {
                line.classList.add('visible');
            }, delay * 1000);
        });

        // Play click sound
        clickSound.play();

        // Add a heart beat effect when the letter is revealed
        heart.style.transform = "scale(0.9)";
        setTimeout(() => {
            heart.style.transform = "scale(1)";
        }, 500);
    });
});
