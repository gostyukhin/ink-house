const popup = document.querySelector('.modal');
const cardBtnPopup = document.querySelectorAll('.card__btn');
const closeModal = document.querySelector('.close__modal')
const bodyPopup = document.querySelector('body');


cardBtnPopup.forEach((item) => {
    item.addEventListener('click', function (event) {

        popup.classList.add('open')
        if (popup.classList.contains('open')) {
            bodyPopup.classList.add('scroll-off')
        }
    })

    closeModal.addEventListener('click', function () {
        popup.classList.remove('open');
        bodyPopup.classList.remove('scroll-off')

    })
})











