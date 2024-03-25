const api= "api_key=3dba80a6e24465166544fd74714248ea";

const base_url="https://api.themoviedb.org/3";

const banner_url="https://image.tmdb.org/t/p/original";
const img_url="https://image.tmdb.org/t/p/w500";


const requests = {

    fetchTrending:`${base_url}/trending/all/weeks?${api}&language=en-US`,
    fetchNetflixOriginal:`${base_url}/discover/tv?${api}&with_network=213`,
    fetchActionMovies:`${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies:`${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies:`${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies:`${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries:`${base_url}/discover/movie?${api}&with_genres=99`,
};

function truncate(str, n) {
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
}


// request generate
fetch(requests.fetchNetflixOriginal)
    .then((res) => res.json())

    .then((data) => {
        console.log(data.results);

        const setMovie= data.results[Math.floor(Math.random() * data.results.length -1)];


        var banner= document.querySelector("#banner");
        var banner_title=document.querySelector("#banner-title");
        var banner_desc= document.querySelector("#banner-desc");


        banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
        banner_desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText= setMovie.name;

    });


fetch(requests.fetchNetflixOriginal)
    .then((res) => res.json())

    .then((data) => {
        const head= document.querySelector("#head");
        const row= document.createElement("div");

        row.className="row";
        row.classList.add("netflixrow");

        head.appendChild(row);


        const title= document.createElement("h2");
        
        title.className="row-title";
        title.innerText = "NETFLIX ORIGINALS";


        row.appendChild(title);

        const row_poster= document.createElement("div");
        row_poster.className="row-poster";
        row.appendChild(row_poster);



        data.results.forEach((movie) => {
            const poster= document.createElement("img");
            poster.className = "row-posterLarge";

            var s= movie.name.replace(/\s+/g, "");


            poster.id = s;
            poster.src = img_url+ movie.poster_path;
            row_poster.appendChild(poster);
        });
    });



fetch(requests.fetchActionMovies)
    .then((res) => res.json())

    .then((data) => {
        const head= document.querySelector("#head");
        const row= document.createElement("div");

        row.className="row";
        row.classList.add("netflixrow");

        head.appendChild(row);


        const title= document.createElement("h2");
        
        title.className="row-title";
        title.innerText = "Top Rated";


        row.appendChild(title);

        const row_poster= document.createElement("div");
        row_poster.className="row-poster";
        row.appendChild(row_poster);



        data.results.forEach((movie) => {
            // console.log(movie);

            const poster= document.createElement("img");
            poster.className="row-posterLarge";

            var s2= movie.id;
            poster.id= s2;
            poster.src= img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });


fetch(requests.fetchComedyMovies)
    .then((res) => res.json())

    .then((data) => {
        const head= document.querySelector("#head");
        const row= document.createElement("div");

        row.className="row";
        row.classList.add("netflixrow");

        head.appendChild(row);


        const title= document.createElement("h2");
        
        title.className="row-title";
        title.innerText = "Comedy Movies";


        row.appendChild(title);

        const row_poster= document.createElement("div");
        row_poster.className="row-poster";
        row.appendChild(row_poster);



        data.results.forEach((movie) => {
            // console.log(movie);

            const poster= document.createElement("img");
            poster.className="row-posterLarge";

            var s2= movie.id;
            poster.id= s2;
            poster.src= img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });


fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())

    .then((data) => {
        const head= document.querySelector("#head");
        const row= document.createElement("div");

        row.className="row";
        row.classList.add("netflixrow");

        head.appendChild(row);


        const title= document.createElement("h2");
        
        title.className="row-title";
        title.innerText = "Horror Movies";


        row.appendChild(title);

        const row_poster= document.createElement("div");
        row_poster.className="row-poster";
        row.appendChild(row_poster);



        data.results.forEach((movie) => {
            // console.log(movie);

            const poster= document.createElement("img");
            poster.className="row-posterLarge";

            var s2= movie.id;
            poster.id= s2;
            poster.src= img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });




fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())

    .then((data) => {
        const head= document.querySelector("#head");
        const row= document.createElement("div");

        row.className="row";
        row.classList.add("netflixrow");

        head.appendChild(row);


        const title= document.createElement("h2");
        
        title.className="row-title";
        title.innerText = "Romance Movies";


        row.appendChild(title);

        const row_poster= document.createElement("div");
        row_poster.className="row-poster";
        row.appendChild(row_poster);



        data.results.forEach((movie) => {
            // console.log(movie);

            const poster= document.createElement("img");
            poster.className="row-posterLarge";

            var s2= movie.id;
            poster.id= s2;
            poster.src= img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });





fetch(requests.fetchDocumentaries)
    .then((res) => res.json())

    .then((data) => {
        const head= document.querySelector("#head");
        const row= document.createElement("div");

        row.className="row";
        row.classList.add("netflixrow");

        head.appendChild(row);


        const title= document.createElement("h2");
        
        title.className="row-title";
        title.innerText = "Documentaries";


        row.appendChild(title);

        const row_poster= document.createElement("div");
        row_poster.className="row-poster";
        row.appendChild(row_poster);



        data.results.forEach((movie) => {
            // console.log(movie);

            const poster= document.createElement("img");
            poster.className="row-posterLarge";

            var s2= movie.id;
            poster.id= s2;
            poster.src= img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });