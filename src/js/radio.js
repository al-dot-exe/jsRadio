
// Radio Object will be written from server side above this comment 

changeRadioStation();

function changeRadioStation(stationChannel = 1) {
    stationChannel -= 1; // converts to zero index just to query channel
       const radioStationsArray = radioObj["radios"] //an array of the top 50 stations
      const currentStation = radioStationsArray[stationChannel]; // selects a radio station from the radio array
      const currentStationName = currentStation["name"]; // name of radio station to display
      const currentStationURI = currentStation["uri"]; // radio uri to listen in

      document.querySelector('#real-channel-number').innerText = stationChannel + 1; // adds current channel number
      document.querySelector('#station').innerText = currentStationName; // adds current station
      document.querySelector('audio').src = currentStationURI; // adds station
}

function turnRadioOff(){
  document.querySelector('audio').muted = true;
  document.querySelector('#station').innerText = 'Radio is turned off';
  document.querySelector('#on-button').removeAttribute('class'); // remove power status from ON
  document.querySelector('#off-button').setAttribute('class', 'power-status');
}

function turnRadioOn(){ 
  const realChannelNumber = +(document.querySelector('#real-channel-number').textContent);

  document.querySelector('#off-button').removeAttribute('class'); // remove power status from OFF
  document.querySelector('#on-button').setAttribute('class', 'power-status');
  changeRadioStation(realChannelNumber);
  document.querySelector('audio').muted = false;
}


export { changeRadioStation, turnRadioOff, turnRadioOn };
