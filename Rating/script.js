const bigStar = document.querySelector('.big-star i');
const stars = document.querySelectorAll('.star');
const ratingText = document.querySelector('.selected-rating');
const feedbackMessage = document.querySelector('.feedback-message');
const btn = document.querySelector(".rating button");

stars.forEach(star => {
    star.addEventListener('mouseenter', handleHover);
    star.addEventListener('mouseleave', handleLeave);
    star.addEventListener('click', handleClick);
});

let rating = 0;

function highlightStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

function getFeedbackMessage(rating) {
    switch (rating) {
        case '1':
            return `
                <h2>Terrible!</h2>
                <p>We're sorry to hear that you had a bad experience.</p>`;
        case '2':
            return `
                <h2>Not good.</h2>
                <p>We'll do better next time to meet your expectations.</p>`;
        case '3':
            return `
                <h2>It's Okay</h2>
                <p>We appreciate your feedback and will use it to improve.</p>`;
        case '4':
            return `
                <h2>Good!</h2>
                <p>We're glad to hear that you enjoyed your experience.</p>`;
        case '5':
            return `
                <h2>Excellent!</h2>
                <p>We're thrilled to hear that you had a great experience with us.</p>`;
        default:
            return ``;
    }
}

function handleHover(e) {
    const tempRating = e.currentTarget.getAttribute('data-value');
    highlightStars(tempRating);
}

function handleLeave() {
    highlightStars(rating);
}

function handleClick(e) {
    btn.style.display = "block";
    rating = e.currentTarget.getAttribute('data-value');
    bigStar.style.fontSize = `${1 + rating * 0.1}em`;
    ratingText.textContent = rating;
    feedbackMessage.innerHTML = getFeedbackMessage(rating);
    feedbackMessage.style.visibility = 'visible';
    feedbackMessage.style.opacity = '1';
}
