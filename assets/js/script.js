document.addEventListener('DOMContentLoaded', function () {
    const accordionSpans = document.querySelectorAll('.accordion_top span');

    accordionSpans.forEach(span => {
        span.addEventListener('click', function (e) {
            const top = span.parentElement;
            const body = top.nextElementSibling;
            top.classList.toggle('active');
            if (body.style.display === 'block') {
                body.style.display = 'none';
            } else {
                body.style.display = 'block';
            }
            e.stopPropagation(); // Prevent the event from bubbling up
        });
    });
});
// header slider
const swiper = new Swiper('.swiper.swiper_header', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});