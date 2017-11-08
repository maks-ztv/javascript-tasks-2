'use strict';



var phoneBook = [];
var numberValidationExp = /\b(\d+)\b/;
var emailValidationExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/*
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/
module.exports.add = function add(name, phone, email) {
    var phoneBookValue = {
        name: name,
        phone: phone,
        email: email
    };

    if (name.length && phone.match(numberValidationExp) && email.match(emailValidationExp)) {
        phoneBook.push(phoneBookValue);
    } else {
        console.log('false');
    }
    console.log(phoneBook, 'add');

    // Ваша невероятная магия здесь

};

/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {

    return phoneBook.filter(function (element) {
        for (var prop in element) {
            if (element[prop].includes(query)) {
                console.log(element, 'find elements');
                return element;
            }
        }
    });
    // Ваша удивительная магия здесь

};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {
    phoneBook = phoneBook.filter(function (element) {
        var result = false;
        for (var prop in element) {
            if (element[prop].includes(query)) {
                result = true;
            }
        }
        return result ? null : element;
    });
    // Ваша необьяснимая магия здесь

};

/* Функция импорта записей из файла (задача со звёздочкой!).  */
module.exports.importFromCsv = function importFromCsv(filename) {
    var data = require('fs').readFileSync(filename, 'utf-8');

    // Ваша чёрная магия:
    // - Разбираете записи из `data`
    // - Добавляете каждую запись в книгу
};

/*
   Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).
*/
module.exports.showTable = function showTable() {

    // Ваша чёрная магия здесь

};
