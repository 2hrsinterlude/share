const catalogElements = document.querySelectorAll('.catalog-element');

catalogElements.forEach(catalogElement => {
    catalogElement.addEventListener('click', () => {
        const catalog = catalogElement.parentElement;
        const catalogList = catalog.querySelector('.catalog-list');
        catalogList.classList.toggle('hidden');
    });
});