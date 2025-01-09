const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open the modal and set image and caption
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const imageSrc = item.getAttribute('data-src');
        const imageCaption = item.getAttribute('data-caption');
        if (imageSrc) {
            modal.style.display = 'flex';  // Use 'flex' for centering
            modalImage.src = imageSrc;
            modalCaption.textContent = imageCaption;
            currentIndex = index;
        }
    });
});

// Close the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Navigate through images (prev/next buttons)
const changeImage = (direction) => {
    do {
        currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
    } while (!galleryItems[currentIndex].getAttribute('data-src'));

    const nextImageSrc = galleryItems[currentIndex].getAttribute('data-src');
    const nextImageCaption = galleryItems[currentIndex].getAttribute('data-caption');
    modalImage.src = nextImageSrc;
    modalCaption.textContent = nextImageCaption;
};

nextBtn.addEventListener('click', () => changeImage(1));
prevBtn.addEventListener('click', () => changeImage(-1));

// Close modal when clicking outside the image
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Keyboard controls for slideshow navigation (Left and Right Arrows)
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);  // Previous image
        } else if (e.key === 'ArrowRight') {
            changeImage(1);   // Next image
        } else if (e.key === 'Escape') {
            modal.style.display = 'none';  // Close modal on Escape key
        }
    }
});
