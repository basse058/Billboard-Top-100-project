const url = "https://developer.spotify.com/console/get-search-item/"

// appending songs from URL to dropdown 
d3.json(url).then(function(data) {
    let selected = d3.select("#selDataset");
    console.log(data)
    for (let i = 0; i < data.length; i++) {
          selected.append('option').text(data[i].spot);
  }});

// add some code here for when you select a song to load the top 10-25 songs of the decade

// code that loads in selections to index.html





// code for chart
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/radar


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.



// this activates when someone selects a spot from the dropdown
function optionChanged(spots) {
    chartCreate(spots);
};


//13 featurwes selection

// textboxes to select values for features you care sbout with the values you care about



//initializing charts right off the bat so it is there when page loads
function init() {
  d3.json(url).then(function (data) {
      chartCreate(data[0].spot);
  })
};
init();