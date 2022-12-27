"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < '10' && personalMovieDB.count != null && personalMovieDB.count != 0) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= '10' && personalMovieDB.count <= '30') {
  alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман!');  
} else {
  alert('Произошла ошибка!');
}

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


console.log(personalMovieDB);





