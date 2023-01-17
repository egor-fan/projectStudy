"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
      while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
    },
    detectPersonalLevel: () => {
      if (personalMovieDB.count < '10' && personalMovieDB.count != null && personalMovieDB.count != 0) {
        alert('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count >= '10' && personalMovieDB.count <= '30') {
        alert('Вы классический зритель');
      } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');  
      } else {
        alert('Произошла ошибка!');
      }
    },
    rememberMyFilms: () => {
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
  },
  showMyDB: () => {
    if(personalMovieDB.privat == false) {
    console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
    personalMovieDB.privat = true;
    }
  },
  writeYourGenres: () => {
    for(let i = 1; i < 2; i++) {
      // let genres = prompt(`Ваш любимый жанр под номером ${i}`, '');
      // if(genres == '' || genres == null) {
      //   console.log('Вы ввели некорректные данные, повторите еще раз');
      //   i--;
      let genres = prompt(`Введите ваши любимые жанры через запятую`, '');
      if(genres == '' || genres == null) {
        console.log('Вы ввели некорректные данные, повторите еще раз');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};





