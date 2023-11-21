"use strict";

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов', ""),
      b = prompt('На сколько оцените его?', ""),
      c = prompt('один из последних просмотренных фильмов', ""),
      d = prompt('На сколько оцените его?',"");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

/* Далее работа с условиями */
if (4 == 9) {
    console.log('ok')
} else {
    console.log("not")
};

const num = 50;

if (num < 49) {
    console.log('error')
} else if (num > 100) {
    console.log('mnogo')
} else {
    console.log("ok!")
};

(num ===50) ? console.log("ok!") : console.log('error');

const num = 50;

switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 51:
        console.log('в точку');
        break;
    default:
        console.log('не в этот раз');
        break;
}