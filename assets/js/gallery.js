document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const thumbnailsContainer = document.querySelector('.thumbnails-container');
    let isDragging = false;
    let startX, scrollLeft;

    function changeMainImage(src) {
        mainImage.src = src;
        mainImage.parentElement.classList.remove('zoom');
        currentZoom = false;
    }

    const initialActiveThumbnail = document.querySelector('.thumbnail.active');
    if (initialActiveThumbnail) {
        changeMainImage(initialActiveThumbnail.dataset.fullsize);
    }

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            this.classList.add('active');
            changeMainImage(this.dataset.fullsize);
        });
    });

    mainImage.addEventListener('click', function() {
        currentZoom = !currentZoom;
        if (currentZoom) {
            this.parentElement.classList.add('zoom');
        } else {
            this.parentElement.classList.remove('zoom');
        }
    });

    thumbnailsContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - thumbnailsContainer.offsetLeft;
        scrollLeft = thumbnailsContainer.scrollLeft;
        thumbnailsContainer.classList.add('active');
    });

    thumbnailsContainer.addEventListener('mouseleave', () => {
        isDragging = false;
        thumbnailsContainer.classList.remove('active');
    });

    thumbnailsContainer.addEventListener('mouseup', () => {
        isDragging = false;
        thumbnailsContainer.classList.remove('active');
    });

    thumbnailsContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - thumbnailsContainer.offsetLeft;
        const walk = (x - startX) * 3; // Scroll-fast factor
        thumbnailsContainer.scrollLeft = scrollLeft - walk;
    });
});