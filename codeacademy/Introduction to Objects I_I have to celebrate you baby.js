var movies = [
    {
        movieName:"Toy Story 2"
        , Review:"Great story. Mean prospector."
    }
    , {
        movieName:"Finding Nemo"
        , Review:"Cool animation, and funny turtles."
    }
    , {
        movieName:"The Lion King"
        , Review:"Great songs."
    }
];

var getReviewWithIfElse = function (movie) {
    for(var movieItem in movies) {
        var movieNameFromDictionary = movies[movieItem].movieName;
        var isMovieFound = (movieNameFromDictionary === movie) ? movieNameFromDictionary : "";
        (isMovieFound !== '') ? console.log(movies[movieItem].Review) : console.log("I don't know!");
    }
};

var getReview = function (movie) {
    var review = '';
    switch(movie) {
        case movies[0].movieName:
            review = movies[0].Review;
            break;
        case movies[1].movieName:
            review = movies[1].Review;
            break;
        case movies[2].movieName:
            review = movies[2].Review;
            break;
        default:
            review = "I don't know!";
    }
    return review;
};

getReview("Toy Story 2");
getReview("Finding Nemo");
getReview("Finding emo");
getReview("");
