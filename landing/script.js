window.addEventListener("scroll", () => {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        if (cardPosition < window.innerHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});
