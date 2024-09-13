const popupBasket = document.querySelector('.basket__modal');
const cardBtnPopupBasket = document.querySelectorAll('.header__cart-icon');
const closeModalBasket = document.querySelector('.basket__close-modal')
const bodyPopupBasket = document.querySelector('body');


cardBtnPopupBasket.forEach((item) => {
    item.addEventListener('click', function () {

        popupBasket.classList.add('open');
        
        if (popupBasket.classList.contains('open')) {
            bodyPopupBasket.classList.add('scroll-off')
        }
    })

    closeModalBasket.addEventListener('click', function () {
        popupBasket.classList.remove('open');
        bodyPopupBasket.classList.remove('scroll-off')

    })
})


