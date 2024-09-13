const btn = document.querySelectorAll('.cards__btn');
const tabsItems = document.querySelectorAll('.cards__product');

btn.forEach((item) => {
    item.addEventListener('click', function () {
        let currnetBtn = item;
        let tabId = currnetBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        console.log(tabId);

        btn.forEach((item) => {
            item.classList.remove('active');
        });

        tabsItems.forEach((item) => {
            item.classList.remove('on__cards')
            item.classList.add('off')
        });

        currnetBtn.classList.add('active');
        currentTab.classList.add('on__cards')
    });
})