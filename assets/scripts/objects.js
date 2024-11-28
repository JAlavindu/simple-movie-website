// const movieList = document.getElementById("movie-list");
// movieList.style["background-Color"] = "red";
// movieList.style.display = "block";

// const userChosenKeyName = "level";

// let person = {
//   name: "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   [userChosenKeyName]: "...",
//   greet: function () {
//     alert("Hi there!");
//   },
//   1.5: "hello",
// };

// const keyName = "name";

// // person.age=31;
// //delete person.age;
// person.isAdmin = true;
// console.log(person);
// //console.log(person["name"]);
// console.log(person[keyName]);
// console.log(person[1.5]);
// console.log(person["level"]);

// const person = {name: 'Max', hobbies:['Sports', 'Cooking']};
// const anotherPerson = person;
// person.age = 31
// person.hobbies.push('coding')
// const person3 = { ...person, age: 29, hobbies: [...person.hobbies]}

//another copying method
// const person2 = {name:"max"};
// const person3 = Object.assign({}, person2);

const addMovieButton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("search-btn");

const movies = [];

const renderMovie = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filterdMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filterdMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    if ("info" in movie) {
    }
    const { info, ...otherProps } = movie;
    //const { title: movieTitle } = info;
    //let text = movie.info.title + " - ";___1
    //we can use 2 instead of 1
    let { getFormattedTitle } = movie;
    //getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.call(movie) + " - "; //___2
    console.log(otherProps);
    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });

  //   movies.forEach((movie) => {
  //     const movieEl = document.createElement("li");
  //     let text = movie.info.title + " - ";
  //     for (const key in movie.info) {
  //       if (key !== "title") {
  //         text = text + `${key}: ${movie.info[key]}`;
  //       }
  //     }
  //     movieEl.textContent = text;
  //     movieList.append(movieEl);
  //   });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    //title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      //title,
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULT";
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };
  movies.push(newMovie);
  renderMovie();
};

newMovie.info.title = title;

const searchMovieHandler = () => {
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;
  renderMovie(filterTerm);
};

addMovieButton.addEventListener("click", addMovieHandler);
searchButton.addEventListener("click", searchMovieHandler);
