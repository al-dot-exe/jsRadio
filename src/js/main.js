// main client side javascript

// Fill frequency window with lines instead of hardcoding them into html document
// const frequencyWindow = document.getElementsByClassName('frequency');
// for (let i = 50; i > 0; i--) {
// }

// Radio API Request Function
function changeRadioStation(stationChannel = 2, cc = 'us') {
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'radio-world-50-000-radios-stations.p.rapidapi.com',
      'X-RapidAPI-Key': '10b2e5a21cmshbad5454826f4cb8p112f65jsn6fe0bd9f4951'
    }
  };

  // Grabs Top 50 Stations of current country from api, country selection will be added soon.
  fetch(`https://radio-world-50-000-radios-stations.p.rapidapi.com/v1/radios/searchByCountry?query=${cc}`, options)
  .then(res => res.json())

  .then(radioObj => {
       const radioStationsArray = radioObj["radios"] //an array of the top 50 stations
      const currentStation = radioStationsArray[stationChannel]; // selects a radio station from the radio array 
      const currentStationName = currentStation["name"]; // name of radio station to display
      const currentStationURI = currentStation["uri"]; // radio uri to listen in

      // adding stuff to the dom
      document.querySelector('#station').innerText = currentStationName; // adds current station 
      document.querySelector('audio').src = currentStationURI; // adds station
  })

  .catch(err => console.log(`Received error ${err}`));
}


// let cc = document.querySelector('#cc'); // will add functionality for other countries later
// let channel = 1 // picks the station out of the Top 50 of that country
changeRadioStation();
