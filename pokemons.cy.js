describe('Покупка аватара', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/'); // открыть сайт
        cy.get(':nth-child(1) > .auth__input').type('QWRTP@mail.ru'); // ввела логин
        cy.get('#password').type('Prod123Psswrd'); // ввела пароль
        cy.get('.auth__button').click(); // нажимаю "Войти"
        cy.get('.header__btns > [href="/shop"]').click(); // нажимаю "Магазин"
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // выбрала аватар
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // ввела номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); // ввела срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввела cvv
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ELIZAVETA VETA'); // вела имя
        cy.get('.pay__main-v2').click(); // нажала на пустое пространство, чтобы кнопка "Оплатить" стала активна
        cy.get('.pay-btn').click(); // нажала "Оплатить"
        cy.get('#cardnumber').type('56456'); // ввела код из смс
        cy.get('.payment__submit-button').click(); // нажала "Отправить"
    })
})
