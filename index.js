// alert("Hello!");

// const result = confirm("ВЫ учите JS?");
// console.log(result);

// const answer = +prompt("Как Вас зовут?", "Введите Ваше имя");
// console.log(answer + 5);

// const answers = [];
// answers[0] = "Ivan";
// answers[1] = 123;
// answers[2] = true;
// console.log(answers);

// answers[3] = prompt('Как Ваше имя?', '');
// answers[4] = prompt('Как Ваша фамилия?', '');
// answers[5] = prompt('Как Ваше отчество?', '');
// answers[6] = prompt('Сколько Вам лет?', '');
// console.log(answers);

// console.log(typeof answers);

// const user = "Victoriia";
// alert(`Привет, ${user}`);

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5*2 === "10");


const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", " ");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt("Назовите один из последних просмотренных фильмов...", "");
let grade = prompt("На сколько Вы его оцениваете?", "");
let lastFilmTwo = prompt("Назовите один из последних просмотренных фильмов...", "");
let gradeTwo = prompt("На сколько Вы его оцениваете?", "");

personalMovieDB.movies[lastFilm] = grade;
personalMovieDB.movies[lastFilmTwo] = gradeTwo;

console.log(personalMovieDB);








