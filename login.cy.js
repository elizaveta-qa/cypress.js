
describe('Автотесты на форму авторизации', function () {
    
    it('Верные логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); //ввела верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажимаю "Войти"
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что есть нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика и его видимость для ползователя
         })

    it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
       
        cy.get('#forgotEmailButton').click(); // нажимаю "Забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввела верную почту
        cy.get('#restoreEmailButton').click(); // нажимаю "Отправить код"
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю, что есть нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика и его видимость для ползователя
         })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); //ввела верный логин
        cy.get('#pass').type('iLoveqastudio123'); // ввела неверный пароль
        cy.get('#loginButton').click(); // нажимаю "Войти"
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что есть нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика и его видимость для ползователя
         })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@german.ru'); //ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажимаю "Войти"
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что есть нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика и его видимость для ползователя
         })

    it('Невалидный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru'); //ввела невалидный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажимаю "Войти"
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что есть нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика и его видимость для ползователя
         })

    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажимаю "Войти"
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что есть нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика и его видимость для ползователя
         })


})
