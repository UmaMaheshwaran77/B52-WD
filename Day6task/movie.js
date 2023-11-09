class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
  }
}

// Create an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example array of Movie instances
const movieArray = [
  new Movie("Movie A", "Studio A", "PG"),
  new Movie("Movie B", "Studio B", "PG-13"),
  new Movie("Movie C", "Studio C", "PG"),
  new Movie("Movie D", "Studio D", "R"),
];

// Call the getPG method to filter for "PG" rated movies
const pgRatedMovies = Movie.getPG(movieArray);

console.log(casinoRoyale); // Outputs the Casino Royale movie instance
console.log(pgRatedMovies); // Outputs an array with "PG" rated movies
