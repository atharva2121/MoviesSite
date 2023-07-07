import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {
  movies = [
    {
      "id": 1,
      "name": "Movie 1",
      "releaseDate": "2022-06-01",
      "cast": ["Actor 1", "Actor 2", "Actor 3"],
      "description": "This is Movie 1 description.",
      "type": "Trending",
      "genre": "Action",
      "duration": "2h 30m",
      "rating": 8.2,
      "poster": "https://c8.alamy.com/comp/F762XE/film-movie-poster-of-titanic-F762XE.jpg"
    },
    {
      "id": 2,
      "name": "Movie 2",
      "releaseDate": "2021-12-15",
      "cast": ["Actor 4", "Actor 5"],
      "description": "This is Movie 2 description.",
      "type": "Popular",
      "genre": "Drama",
      "duration": "1h 45m",
      "rating": 7.9,
      "poster": "https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg"
    },
    {
      "id": 3,
      "name": "Movie 3",
      "releaseDate": "2023-03-10",
      "cast": ["Actor 6", "Actor 7", "Actor 8"],
      "description": "This is Movie 3 description.",
      "type": "Recent",
      "genre": "Comedy",
      "duration": "2h 10m",
      "rating": 6.5,
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBcui9sumhbzhduSzDcJcHf-vFmHKc_HVxWHyR-L55&s"
    },
    {
      "id": 4,
      "name": "Movie 4",
      "releaseDate": "2022-09-20",
      "cast": ["Actor 9", "Actor 10"],
      "description": "This is Movie 4 description.",
      "type": "Trending",
      "genre": "Sci-Fi",
      "duration": "2h 15m",
      "rating": 8.7,
      "poster": "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
    },
    {
      "id": 5,
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
      "id": 6,
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
      "id": 7,
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
      "id": 8,
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
      "id": 9,
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
      "id": 10,
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
      "id": 11,
      "name": "Movie 11",
      "releaseDate": "2021-09-12",
      "cast": ["Actor 26", "Actor 27"],
      "description": "This is Movie 11 description.",
      "type": "Popular",
      "genre": "Action",
      "duration": "2h 30m",
      "rating": 7.7,
      "poster": "https://imgcdn.ragalahari.com/jan2022/designs/nbk107-posters/nbk107-posters1t.jpg"
    },
    {
      "id": 12,
      "name": "Movie 12",
      "releaseDate": "2023-02-28",
      "cast": ["Actor 28", "Actor 29", "Actor 30"],
      "description": "This is Movie 12 description.",
      "type": "Recent",
      "genre": "Romance",
      "duration": "1h 50m",
      "rating": 6.8,
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWB151Hk7Na-r2EiiO0FqITnsAQ-EVLKRl6gchRyS&s"
    },
    {
      "id": 13,
      "name": "Movie 13",
      "releaseDate": "2022-07-14",
      "cast": ["Actor 31", "Actor 32"],
      "description": "This is Movie 13 description.",
      "type": "Trending",
      "genre": "Sci-Fi",
      "duration": "2h 15m",
      "rating": 8.5,
      "poster": "https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-ron-poster.jpg"
    },
    {
      "id": 14,
      "name": "Movie 14",
      "releaseDate": "2021-10-01",
      "cast": ["Actor 33", "Actor 34", "Actor 35"],
      "description": "This is Movie 14 description.",
      "type": "Popular",
      "genre": "Comedy",
      "duration": "1h 55m",
      "rating": 7.1,
      "poster": "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"
    },
    {
      "id": 15,
      "name": "Movie 15",
      "releaseDate": "2023-05-05",
      "cast": ["Actor 36", "Actor 37"],
      "description": "This is Movie 15 description.",
      "type": "Recent",
      "genre": "Drama",
      "duration": "2h 10m",
      "rating": 7.3,
      "poster": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
      "id": 16,
      "name": "Movie 16",
      "releaseDate": "2022-04-10",
      "cast": ["Actor 38", "Actor 39", "Actor 40"],
      "description": "This is Movie 16 description.",
      "type": "Trending",
      "genre": "Thriller",
      "duration": "2h 5m",
      "rating": 8.0,
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2Cd7V4svdNOtazdX7sOjlbIk481S4-RXCxXWRdPN&s"
    },
    {
      "id": 17,
      "name": "Movie 17",
      "releaseDate": "2021-08-27",
      "cast": ["Actor 41", "Actor 42"],
      "description": "This is Movie 17 description.",
      "type": "Popular",
      "genre": "Action",
      "duration": "2h 30m",
      "rating": 7.5,
      "poster": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054"
    },
    {
      "id": 18,
      "name": "Movie 18",
      "releaseDate": "2023-03-15",
      "cast": ["Actor 43", "Actor 44", "Actor 45"],
      "description": "This is Movie 18 description.",
      "type": "Recent",
      "genre": "Romance",
      "duration": "1h 50m",
      "rating": 6.7,
      "poster": "https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg"
    },
    {
      "id": 19,
      "name": "Movie 19",
      "releaseDate": "2022-08-02",
      "cast": ["Actor 46", "Actor 47"],
      "description": "This is Movie 19 description.",
      "type": "Trending",
      "genre": "Sci-Fi",
      "duration": "2h 15m",
      "rating": 8.4,
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgB-is3VWqvaQFBvvsMN-xaY8Js_UHhq-M2Bx8WII&s"
    },
    {
      "id": 20,
      "name": "Movie 20",
      "releaseDate": "2021-11-19",
      "cast": ["Actor 48", "Actor 49", "Actor 50"],
      "description": "This is Movie 20 description.",
      "type": "Popular",
      "genre": "Comedy",
      "duration": "1h 55m",
      "rating": 7.0,
      "poster": "https://marketplace.canva.com/EAE_E8rjFrI/1/0/1131w/canva-minimal-mystery-of-forest-movie-poster-ggHwd_WiPcI.jpg"
    },
    {
      "id": 21,
      "name": "Movie 21",
      "releaseDate": "2023-01-25",
      "cast": ["Actor 51", "Actor 52"],
      "description": "This is Movie 21 description.",
      "type": "Recent",
      "genre": "Drama",
      "duration": "2h 10m",
      "rating": 7.2,
      "poster": "https://images.indianexpress.com/2021/01/master.jpg?w=350"
    },
    {
      "id": 22,
      "name": "Movie 22",
      "releaseDate": "2022-06-11",
      "cast": ["Actor 53", "Actor 54", "Actor 55"],
      "description": "This is Movie 22 description.",
      "type": "Trending",
      "genre": "Thriller",
      "duration": "2h 5m",
      "rating": 8.3,
      "poster": "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5"
    },
    {
      "id": 23,
      "name": "Movie 23",
      "releaseDate": "2021-12-27",
      "cast": ["Actor 56", "Actor 57"],
      "description": "This is Movie 23 description.",
      "type": "Popular",
      "genre": "Action",
      "duration": "2h 30m",
      "rating": 7.4,
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHm-dAEkgvyu_RVKu7fh9HnabnzqDc73khagBWrU&s"
    },
    {
      "id": 24,
      "name": "Movie 24",
      "releaseDate": "2023-04-04",
      "cast": ["Actor 58", "Actor 59", "Actor 60"],
      "description": "This is Movie 24 description.",
      "type": "Recent",
      "genre": "Romance",
      "duration": "1h 50m",
      "rating": 6.6,
      "poster": "https://img.freepik.com/premium-psd/double-exposure-photo-effect-template_492987-352.jpg"
    }
  ]
  recentMoviesData: any = [];
  popularMoviesData: any = [];
  trendingMoviesData: any = [];
  

  constructor() { }

  getMoviesData(){
    return this.movies.slice();
  }

  getRecentMoviesData(){
    this.recentMoviesData = [];
    for (let i = 0; i < this.movies.length; i++) {
      const movie = this.movies[i];
      if(movie.type === "Recent"){
        this.recentMoviesData.push(movie);
      }
    }
    return this.recentMoviesData.slice();
  }

  getPopularMoviesData(){
    this.popularMoviesData = [];
    for (let i = 0; i < this.movies.length; i++) {
      const movie = this.movies[i];
      if(movie.type === "Popular"){
        this.popularMoviesData.push(movie);
      }
    }
    return this.popularMoviesData.slice();
  }

  getTrendingMoviesData(){
    this.trendingMoviesData = [];
    for (let i = 0; i < this.movies.length; i++) {
      const movie = this.movies[i];
      if(movie.type === "Trending"){
        this.trendingMoviesData.push(movie);
      }
    }
    return this.trendingMoviesData.slice();
  }
}
