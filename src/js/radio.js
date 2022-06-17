function changeRadioStation(stationChannel = 1, cc = 'us') {
    stationChannel -= 1; // converts to zero index just to query channel
       const radioStationsArray = radioObj["radios"] //an array of the top 50 stations
      const currentStation = radioStationsArray[stationChannel]; // selects a radio station from the radio array
      const currentStationName = currentStation["name"]; // name of radio station to display
      const currentStationURI = currentStation["uri"]; // radio uri to listen in

      // adding stuff to the dom
      document.querySelector('#real-channel-number').innerText = stationChannel + 1; // adds current channel number
      document.querySelector('#station').innerText = currentStationName; // adds current station
      document.querySelector('audio').src = currentStationURI; // adds station
}

changeRadioStation();

export { changeRadioStation };
