$(document).ready(function() {
    const $burgerMenu = $('.burger-menu'),
    $burgerOpen = $('.burger-menu-icon'),
    $burgerClose = $('.burger-close');

    $burgerMenu.hide();

    $burgerOpen.on('click', () => $burgerMenu.show());
    $burgerClose.on('click', () => $burgerMenu.hide());



    $('[data-copy]').click(function() {
        var copyText = $(this).data('copy');
        const buttonElement = $(this);
        navigator.clipboard.writeText(copyText).then(function() {
            const copiedElement = buttonElement.parent().children('.copied');
            copiedElement.show();
            setTimeout(() => copiedElement.hide(), 2000);
        }).catch(function(err) {
            alert('Failed to copy text: ', err);
        });
    });

    $('.leaderboard-icon').click(function() {
        $(this).toggleClass('active');
    });
});