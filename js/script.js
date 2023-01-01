"use strict";

let numberOfFilms;

function start () {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
  if (personalMovieDB.count < '10' && personalMovieDB.count != null && personalMovieDB.count != 0) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= '10' && personalMovieDB.count <= '30') {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    alert('Вы киноман!');  
  } else {
    alert('Произошла ошибка!');
  }
}
detectPersonalLevel();

function rememberMyFilms () {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

      if(a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('ERROR!');
        i--;
      }
  }
}
rememberMyFilms();


function showMyDB () {
  if(personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDB();

function writeYourGenres () {
  for(let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
  }
}
writeYourGenres();







