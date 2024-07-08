const headers = document.querySelectorAll('.accordion-header');
const firstHeader = document.querySelector('.accordion-header:first-child');

firstHeader.classList.add('active');
firstHeader.nextElementSibling.style.maxHeight = firstHeader.nextElementSibling.scrollHeight + 'px';

headers.forEach((header) => {
    header.addEventListener('click', () => {
        const isActive = header.classList.contains('active');

        // Cerrar todos los acordeones
        headers.forEach((header) => {
            header.classList.remove('active');
            header.nextElementSibling.style.maxHeight = 0;
            const img = header.querySelector('.accordion-item img');
            img.src = 'assets/images/icon-plus.svg';
        });

        // Si el acordeón originalmente no estaba activo, ábrelo
        if (!isActive) {
            const accordionContent = header.nextElementSibling;
            const img = header.querySelector('.accordion-item img');
            header.classList.add('active');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            img.src = 'assets/images/icon-minus.svg';
        }
    });
});