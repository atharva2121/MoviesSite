import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {
  movies = [
    {
      "name": "Movie 1",
      "releaseDate": "2022-06-01",
      "cast": ["Actor 1", "Actor 2", "Actor 3"],
      "description": "This is Movie 1 description.",
      "type": "Trending",
      "genre": "Action",
      "duration": "2h 30m",
      "rating": 8.2,
      "poster": ""
    },
    {
      "name": "Movie 2",
      "releaseDate": "2021-12-15",
      "cast": ["Actor 4", "Actor 5"],
      "description": "This is Movie 2 description.",
      "type": "Popular",
      "genre": "Drama",
      "duration": "1h 45m",
      "rating": 7.9,
      "poster": ""
    },
    {
      "name": "Movie 3",
      "releaseDate": "2023-03-10",
      "cast": ["Actor 6", "Actor 7", "Actor 8"],
      "description": "This is Movie 3 description.",
      "type": "Recent",
      "genre": "Comedy",
      "duration": "2h 10m",
      "rating": 6.5,
      "poster": ""
    },
    {
      "name": "Movie 4",
      "releaseDate": "2022-09-20",
      "cast": ["Actor 9", "Actor 10"],
      "description": "This is Movie 4 description.",
      "type": "Trending",
      "genre": "Sci-Fi",
      "duration": "2h 15m",
      "rating": 8.7,
      "poster": ""
    },
    {
      "name": "Movie 5",
      "releaseDate": "2021-07-05",
      "cast": ["Actor 11", "Actor 12", "Actor 13"],
      "description": "This is Movie 5 description.",
      "type": "Popular",
      "genre": "Thriller",
      "duration": "2h 5m",
      "rating": 7.6,
      "poster": "https://1.bp.blogspot.com/-79vmCCwoZ_E/X4_artAUp7I/AAAAAAAAaO4/qsr-ZiGmgwcmsP72F_NAyWamwA2rsLhTwCLcBGAsYHQ/s595/Suraj-Pe-Mangal-Bhari-movie-poster-release-date.jpg"
    },
    {
      "name": "Movie 6",
      "releaseDate": "2023-01-12",
      "cast": ["Actor 14", "Actor 15"],
      "description": "This is Movie 6 description.",
      "type": "Recent",
      "genre": "Romance",
      "duration": "1h 50m",
      "rating": 6.9,
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1s4b_nMcaccAn7hBfF5ljxhl0CdgX5jY1pe5EmxkG2NI0e-WRdgGJsy0Ee6OTrOwdrU&usqp=CAU"
    },
    {
      "name": "Movie 7",
      "releaseDate": "2022-08-18",
      "cast": ["Actor 16", "Actor 17"],
      "description": "This is Movie 7 description.",
      "type": "Trending",
      "genre": "Action",
      "duration": "2h 20m",
      "rating": 7.8,
      "poster": "https://www.whoa.in/download/raees-shah-rukh-khan-bollywood-movies-poster"
    },
    {
      "name": "Movie 8",
      "releaseDate": "2021-11-03",
      "cast": ["Actor 18", "Actor 19", "Actor 20"],
      "description": "This is Movie 8 description.",
      "type": "Popular",
      "genre": "Comedy",
      "duration": "1h 55m",
      "rating": 7.2,
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmQK6t9e-2SW7cGE4hrPYN8DyoRuiLFk9CHvCAbDveZ-BVpBFnWgjXTIHF2eIFrBZlxg&usqp=CAU"
    },
    {
      "name": "Movie 9",
      "releaseDate": "2023-04-22",
      "cast": ["Actor 21", "Actor 22"],
      "description": "This is Movie 9 description.",
      "type": "Recent",
      "genre": "Drama",
      "duration": "2h 10m",
      "rating": 7.4,
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovJiDlMa-yTOahdIh3zK8FDmvbC5L3MPFI8z4yXLoDUC4WOSc6xfjhxYmZCcizUrbEG0&usqp=CAU"
    },
    {
      "name": "Movie 10",
      "releaseDate": "2022-03-08",
      "cast": ["Actor 23", "Actor 24", "Actor 25"],
      "description": "This is Movie 10 description.",
      "type": "Trending",
      "genre": "Thriller",
      "duration": "2h 5m",
      "rating": 8.1,
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PACinFT4a-rWs79fOXDboCAQ-x63EBcdIEk4Mk6Sk27rF-tBP9lwHW6CjGvLsXeGS8&usqp=CAU"
    },
    {
      "name": "Movie 11",
      "releaseDate": "2021-09-12",
      "cast": ["Actor 26", "Actor 27"],
      "description": "This is Movie 11 description.",
      "type": "Popular",
      "genre": "Action",
      "duration": "2h 30m",
      "rating": 7.7,
      "poster": ""
    },
    {
      "name": "Movie 12",
      "releaseDate": "2023-02-28",
      "cast": ["Actor 28", "Actor 29", "Actor 30"],
      "description": "This is Movie 12 description.",
      "type": "Recent",
      "genre": "Romance",
      "duration": "1h 50m",
      "rating": 6.8,
      "poster": ""
    },
    {
      "name": "Movie 13",
      "releaseDate": "2022-07-14",
      "cast": ["Actor 31", "Actor 32"],
      "description": "This is Movie 13 description.",
      "type": "Trending",
      "genre": "Sci-Fi",
      "duration": "2h 15m",
      "rating": 8.5,
      "poster": ""
    },
    {
      "name": "Movie 14",
      "releaseDate": "2021-10-01",
      "cast": ["Actor 33", "Actor 34", "Actor 35"],
      "description": "This is Movie 14 description.",
      "type": "Popular",
      "genre": "Comedy",
      "duration": "1h 55m",
      "rating": 7.1,
      "poster": ""
    },
    {
      "name": "Movie 15",
      "releaseDate": "2023-05-05",
      "cast": ["Actor 36", "Actor 37"],
      "description": "This is Movie 15 description.",
      "type": "Recent",
      "genre": "Drama",
      "duration": "2h 10m",
      "rating": 7.3,
      "poster": ""
    },
    {
      "name": "Movie 16",
      "releaseDate": "2022-04-10",
      "cast": ["Actor 38", "Actor 39", "Actor 40"],
      "description": "This is Movie 16 description.",
      "type": "Trending",
      "genre": "Thriller",
      "duration": "2h 5m",
      "rating": 8.0,
      "poster": ""
    },
    {
      "name": "Movie 17",
      "releaseDate": "2021-08-27",
      "cast": ["Actor 41", "Actor 42"],
      "description": "This is Movie 17 description.",
      "type": "Popular",
      "genre": "Action",
      "duration": "2h 30m",
      "rating": 7.5,
      "poster": ""
    },
    {
      "name": "Movie 18",
      "releaseDate": "2023-03-15",
      "cast": ["Actor 43", "Actor 44", "Actor 45"],
      "description": "This is Movie 18 description.",
      "type": "Recent",
      "genre": "Romance",
      "duration": "1h 50m",
      "rating": 6.7,
      "poster": ""
    },
    {
      "name": "Movie 19",
      "releaseDate": "2022-08-02",
      "cast": ["Actor 46", "Actor 47"],
      "description": "This is Movie 19 description.",
      "type": "Trending",
      "genre": "Sci-Fi",
      "duration": "2h 15m",
      "rating": 8.4,
      "poster": ""
    },
    {
      "name": "Movie 20",
      "releaseDate": "2021-11-19",
      "cast": ["Actor 48", "Actor 49", "Actor 50"],
      "description": "This is Movie 20 description.",
      "type": "Popular",
      "genre": "Comedy",
      "duration": "1h 55m",
      "rating": 7.0,
      "poster": ""
    },
    {
      "name": "Movie 21",
      "releaseDate": "2023-01-25",
      "cast": ["Actor 51", "Actor 52"],
      "description": "This is Movie 21 description.",
      "type": "Recent",
      "genre": "Drama",
      "duration": "2h 10m",
      "rating": 7.2,
      "poster": ""
    },
    {
      "name": "Movie 22",
      "releaseDate": "2022-06-11",
      "cast": ["Actor 53", "Actor 54", "Actor 55"],
      "description": "This is Movie 22 description.",
      "type": "Trending",
      "genre": "Thriller",
      "duration": "2h 5m",
      "rating": 8.3,
      "poster": ""
    },
    {
      "name": "Movie 23",
      "releaseDate": "2021-12-27",
      "cast": ["Actor 56", "Actor 57"],
      "description": "This is Movie 23 description.",
      "type": "Popular",
      "genre": "Action",
      "duration": "2h 30m",
      "rating": 7.4,
      "poster": ""
    },
    {
      "name": "Movie 24",
      "releaseDate": "2023-04-04",
      "cast": ["Actor 58", "Actor 59", "Actor 60"],
      "description": "This is Movie 24 description.",
      "type": "Recent",
      "genre": "Romance",
      "duration": "1h 50m",
      "rating": 6.6,
      "poster": ""
    }
  ]
  constructor() { }

  getMoviesData(){
    return this.movies.slice();
  }
}
