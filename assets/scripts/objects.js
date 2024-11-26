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
    let text = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`;
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
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  renderMovie();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovie(filterTerm);
};

addMovieButton.addEventListener("click", addMovieHandler);
searchButton.addEventListener("click", searchMovieHandler);
