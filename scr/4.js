$(document).ready(function() {
    $('.catalog-element').click(function() {
        $(this).next('.catalog-list').slideToggle();
    });
});