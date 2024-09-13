const wrapper = document.querySelector('.basket__card-box');
const basketCount = document.querySelector('.header__cart-count');

window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-basket')) {

        const card = event.target.closest('.card');

        const productInfo = {
            price: card.querySelector('.card__price').innerText,
            imgSrc: card.querySelector('.card__img').getAttribute('src'),
            title: card.querySelector('.card__name').innerText,
        }

        const cartItemHTML = `
        <div class="basket__card">
            <h1 class="basket__modal-title">${productInfo.title}</h1>
            <p class="basket__modal-price">${productInfo.price}</p> 
             <img src="${productInfo.imgSrc}">
        </div>
        `;

        wrapper.insertAdjacentHTML('beforeend', cartItemHTML);

        const countBasketProduct = this.document.querySelectorAll('.basket__card');


        if (countBasketProduct.length >= 1) {
            basketCount.classList.remove('off');
            basketCount.textContent = countBasketProduct.length;
        }
    }
})

