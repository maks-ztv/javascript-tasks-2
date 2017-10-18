'use strict';

var phoneBook = []; // Здесь вы храните записи как хотите


function checkName(name) {
    var regExp = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
    return regExp.test(name);
}

function checkPhone(phone) {
    var regExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    return regExp.test(phone);
}

function checkEmail(email) {
    var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email);
}

function samePhone(phone) {
    return phoneBook.some(function (el) {
        return el.phone === phone;
    });
}

/*
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/
module.exports.add = function add(name, phone, email) {

    if (!checkName(name) || !checkEmail(email) || samePhone(phone)) {
        return;
    }
    phoneBook.push({name: name, phone: phone, email: email});
    console.log('добавлено записей', phoneBook);
};

/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {

    return phoneBook.filter(function (el) {
        return Object.keys(el).some(function (key) {
            return el[key].includes(query);
        });
    });
};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {

    var oldLength = phoneBook.length;
    phoneBook = phoneBook.filter(function (el) {

        return !Object.keys(el).some(function (key) {
            return el[key].includes(query);
        });

    });
    var newLength = phoneBook.length;
    console.log('удалено записей', oldLength - newLength);

};

/*
   Функция импорта записей из файла (задача со звёздочкой!).
*/
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
