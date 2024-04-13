const catalogElements = document.querySelectorAll('.catalog-element');

catalogElements.forEach(catalogElement => {
    catalogElement.addEventListener('click', () => {
        const catalog = catalogElement.closest('.catalog');
        const catalogList = catalog.querySelector('.catalog-list');
        catalogList.classList.toggle('hidden');
    });
});