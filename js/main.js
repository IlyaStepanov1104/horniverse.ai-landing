$(document).ready(function () {
    const $burgerMenu = $('.burger-menu'),
        $burgerOpen = $('.burger-menu-icon'),
        $burgerClose = $('.burger-close');

    $burgerMenu.hide();

    $burgerOpen.on('click', () => $burgerMenu.show());
    $burgerClose.on('click', () => $burgerMenu.hide());


    $('[data-copy]').click(function () {
        var copyText = $(this).data('copy');
        const buttonElement = $(this);
        navigator.clipboard.writeText(copyText).then(function () {
            const copiedElement = buttonElement.parent().children('.copied');
            copiedElement.show();
            setTimeout(() => copiedElement.hide(), 2000);
        }).catch(function (err) {
            alert('Failed to copy text: ', err);
        });
    });

    $('.leaderboard-icon').click(function () {
        $(this).toggleClass('active');
    });

    const attemptTypes = ['bronze', 'silver', 'gold'];
    attemptTypes.forEach((type) => $.ajax({
        url: 'https://horniverse.ai/game/get-config',  // Адрес эндпоинта
        method: 'GET',            // Метод запроса
        data: {key: `${type}_attempts`},  // Параметры запроса
        success: function (response) {
            if (response && response.value) {
                $(`.js-${type}-attempts`).text(response.value);
            } else {
                console.error('Ошибка: Не удалось получить данные');
            }
        },
        error: function (xhr, status, error) {
            console.error('Ошибка запроса: ' + error);
        }
    }));
    $.ajax({
        url: 'https://horniverse.ai/game/leaderboard',
        method: 'GET',
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status, error) {
            console.error('Ошибка запроса: ' + error);
        }
    })

});

