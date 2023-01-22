const menuItem = document.querySelectorAll('.menu-items');

menuItem.forEach(item =>
    item.addEventListener('click', (e) => {
        menuItem.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
    })
)