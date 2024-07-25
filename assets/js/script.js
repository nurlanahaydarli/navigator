document.querySelector('.episode_top')?.addEventListener('click', function() {
    document.querySelector('.episode_list ul').classList.toggle('hide');
});

document.querySelector('.open_filter')?.addEventListener('click', function() {
    document.querySelector('.filter_bottom').classList.remove('hide');
    document.querySelector('.close_filter').classList.remove('hide');
    document.querySelector('.open_filter').classList.add('hide');
});
document.querySelector('.close_filter')?.addEventListener('click', function() {
    document.querySelector('.filter_bottom').classList.add('hide');
    document.querySelector('.close_filter').classList.add('hide');
    document.querySelector('.open_filter').classList.remove('hide');
});

document.querySelectorAll('input[name="radio_list"]')?.forEach((radio) => {
    radio.addEventListener('change', function() {
        const targetId = this.getAttribute('data-target');
        document.querySelectorAll('.text_list').forEach((div) => {
            div.style.display = div.getAttribute('data-id') === targetId ? 'block' : 'none';
        });
    });
});
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