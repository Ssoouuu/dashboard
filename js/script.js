// filling in the table 
Orders.forEach(order =>
{
    const tr = document.createElement('tr');
    const trContent =
    `
    <td data-label="Товар">${order.productName}</td>
    <td data-label="Артикул">${order.productNumber}</td>
    <td data-label="Статус">${order.orderStatus}</td>
    <td data-label="Оплата" class="${
        order.paymentStatus === 'Не оплачен' ? 'danger' :
        order.paymentStatus === 'В обработке' ? 'warning' :
        'success'}">${order.paymentStatus}
    </td>
    <td class='primary'>Подробнее</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

// open menu
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change mode
const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})