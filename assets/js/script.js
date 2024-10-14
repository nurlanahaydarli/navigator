document.querySelector('.open_laws_btn')?.addEventListener('click', function () {
    document.querySelector('.law_category_list').classList.toggle('hide');
});

document.querySelector('.hide_category')?.addEventListener('click', function () {
    document.querySelector('.law_category_list').classList.add('hide');
});

document.querySelectorAll('.add_btn').forEach(function (button) {
    button.addEventListener('click', function () {
        // Find the closest #clone_container within the same section as the clicked button
        var container = this.closest('.cloned_inputs').querySelector('.clone_container');

        // Find the first .clone_box to clone
        var boxToClone = container.querySelector('.clone_box');

        // Clone the .clone_box element
        var clone = boxToClone.cloneNode(true);

        // Clear input fields in the cloned box
        var inputs = clone.querySelectorAll('input');
        inputs.forEach(input => input.value = '');

        // Append the cloned box to the container
        container.appendChild(clone);
    });
});

// Event delegation to handle the close button
document.addEventListener('click', function (e) {
    if (e.target.closest('.close_btn')) {
        e.target.closest('.clone_box').remove();
    }
});


document.querySelector('.check_plan')?.addEventListener('change', function () {
    document.querySelector('.additional_filter').classList.toggle('hide');
});
document.querySelector('.balance_report_input')?.addEventListener('change', function () {
    document.querySelector('.balance_report').classList.toggle('hide');
});
document.querySelector('.episode_top')?.addEventListener('click', function () {
    document.querySelector('.episode_list ul').classList.toggle('hide');
});

document.querySelector('.open_filter')?.addEventListener('click', function () {
    document.querySelector('.filter_bottom').classList.remove('hide');
    document.querySelector('.close_filter').classList.remove('hide');
    document.querySelector('.open_filter').classList.add('hide');
});
document.querySelector('.close_filter')?.addEventListener('click', function () {
    document.querySelector('.filter_bottom').classList.add('hide');
    document.querySelector('.close_filter').classList.add('hide');
    document.querySelector('.open_filter').classList.remove('hide');
});

document.querySelectorAll('input[name="radio_list"]')?.forEach((radio) => {
    radio.addEventListener('change', function () {
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