const catalogElements = document.querySelectorAll('.catalog-element');

catalogElements.forEach(catalogElement => {
    catalogElement.addEventListener('click', () => {
        const catalogList = catalogElement.nextElementSibling;
        catalogList.classList.toggle('hidden');
    });
});