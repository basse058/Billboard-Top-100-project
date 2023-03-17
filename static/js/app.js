
// creating listening event for when a user searches for a song
// function songSelect(e) {
//   const songName = e.target.value;
//   console.log(songName)
  // const url = `"https://api.spotify.com/v1/search?q="${songName}"type=track"`;
  // fetch(url)
  //   .then((res) => res.json())
  //   .then(console.log);
// };

// const songInput = document.getElementById("search-bar");

// songInput.addEventListener("change", songSelect);

const searchInput = document.querySelector('searchBar');

// input.addEventListener("search", () => {
//   console.log(`The term searched for was ${input.value}`);
// });

let searchQuery;

searchInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && searchBar.value != "") {
        searchQuery = searchBar.value;
        console.log(searchQuery)
    }
})

// creating listening event for decade input
// function decadeSelect(decade) {
//   const songName = decade.target.value;
//   const url = `"https://api.spotify.com/v1/search?q="${songName}"type=track"`;
//   fetch(url)
//     .then((res) => res.json())
//     .then(console.log);
// };

// const decadeInput = document.getElementById("decadeDropdown")

// decadeInput.addEventListener("change", decadeSelect);


// const selectElement = document.querySelector(".greet");

// selectElement.addEventListener("change", (event) => {
//   console.log(event.target.value)
//   // const result = document.querySelector(".result");
//   // result.textContent = `You selected ${event.target.value}`;
// });

// creating element that selects radar chart
var canvasElement = document.getElementById('radar-compare');

// starting out by pre-determing the song features to be measured on the radar chart
let songFeatures = [
  'danceability',
  'energy',
  'loudness',
  'speechiness',
  'acousticness',
  'liveness'
]

// create chart function

// dummy chart is to
// used called features and compare the keys with songFeatures and create a dataset just with that 


// function createChart(songSelection){
// retrieve the song data 

songData = []
let calledFeatures = {
  "danceability": 0.614,
  "energy": 0.809,
  "key": 9,
  "loudness": -4.749,
  "mode": 1,
  "speechiness": 0.0738,
  "acousticness": 0.0105,
  "instrumentalness": 0.000353,
  "liveness": 0.148,
  "valence": 0.354,
  "tempo": 112.023,
  "type": "audio_features",
  "id": "2oap3QptGISyIvwKpnJJId",
  "uri": "spotify:track:2oap3QptGISyIvwKpnJJId",
  "track_href": "https://api.spotify.com/v1/tracks/2oap3QptGISyIvwKpnJJId",
  "analysis_url": "https://api.spotify.com/v1/audio-analysis/2oap3QptGISyIvwKpnJJId",
  "duration_ms": 176774,
  "time_signature": 4
};

testFeat = ['danceability']
for (let k in songFeatures) {
  console.log(songFeatures[k])
  for (let j in calledFeatures){
    console.log(calledFeatures[j])
    if (j == songFeatures[k]) {
      songData.push(calledFeatures[j])
    }
  }
};
console.log(songData)


let decadeData = songData

// for (const value in calledFeatures) {
//   {
//   songData.push(value)
//   }
// };
// console.log(songData)
const data = {
  labels: songFeatures,
  datasets: [{
    label: 'songs',
    data: songData,
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'Decade Name',
    data: decadeData,
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};


var config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
};


var radarChart = new Chart(canvasElement, config)



// this activates when someone selects a spot from the dropdown
// function optionChanged(selectComparisons) {
//     chartCreate(spots);
// };


//13 features selection box selection

// textboxes to select values for features you care sbout with the values you care about



//initializing charts right off the bat so it is there when page loads
// function init() {
//   d3.json(url).then(function (data) {
//       chartCreate(data[0].spot);
//   })
// };
// init();