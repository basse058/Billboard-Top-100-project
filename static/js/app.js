
// defining a dummy json output when we search a song or click for a decade
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

let decadeRawData = {
  "danceability": 1.6,
  "energy": 2.809,
  "key": 1,
  "loudness": -1.749,
  "mode": 2,
  "speechiness": 0.0453,
  "acousticness": 0.0305,
  "instrumentalness": 0.0043,
  "liveness": 0.2,
  "valence": 0.1,
  "tempo": 112,
  "type": "audio_features",
  "id": "2oap3QptGISyIvwKpnJJId",
  "uri": "spotify:track:2oap3QptGISyIvwKpnJJId",
  "track_href": "https://api.spotify.com/v1/tracks/2oap3QptGISyIvwKpnJJId",
  "analysis_url": "https://api.spotify.com/v1/audio-analysis/2oap3QptGISyIvwKpnJJId",
  "duration_ms": 176774,
  "time_signature": 4
}


const clientID = "6b07ed63b9284ebb97bad5d40f6a4c61";
const clientSecret = "39a4fd794c48415daa2e8b77b6a501d3";

// function App() {
//   const [searchIng, setSearchInput] = useState("")

//   useEffect(() => {

//   }
//   )
// }

// creating dummy listening event for when a user searches for a song
let typedSong = ""
const searchInput = document.querySelector('#search');

searchInput.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    if (!e.currentTarget.value)
      console.log('cleared');
    else
    typedSong = e.currentTargetValue
    console.log()
    radarChart.data.datasets[0].data = songData;
    radarChart.update();
    console.log(songData)
  }
});
searchInput.addEventListener('input', (e) => {
  if (!e.currentTarget.value)
    console.log('cleared');
});

// adding dummy dropdown listener event
const decadeInput = document.querySelector('#greet');

decadeInput.addEventListener('change', (e) => {
  console.log(decadeData);
  radarChart.data.datasets[1].data = decadeData;
  radarChart.update();

});

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

// creating dummy song data as i expect the output to be like 
let songData = [];
for (let k in songFeatures) {
  for (let j in calledFeatures){
    if (j == songFeatures[k]) {
      songData.push(calledFeatures[j])
    };
  };
};

//creating dummy decade data as i expect the output to be like 
let decadeData = []
for (let k in songFeatures) {
  for (let v in decadeRawData){
    if (v == songFeatures[k]) {
      decadeData.push(decadeRawData[v])
    };
  };
};


// dummy chart
const data = {
  labels: songFeatures,
  datasets: [{
    label: 'songs',
    data: [1,2,3,4,5,6],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'Decade Name',
    data: [5,3,2,1,2,3],
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
var radarChart = new Chart(canvasElement, config);



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