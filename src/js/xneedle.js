  /* 
  * We can update the channel needles position by percentage based off the value of the tuning knob
  * with the following formula. 
  * DO NOT CHANGE OR THE NEEDLE WILL NOT MOVE WITH THE TUNING KNOB
  */
function updateChannelNeedlePosition(){

  const tuningKnob = document.querySelector(".tuning-knob").value;
  const channelNeedle = document.querySelector("#channel-needle");
  const needlePosition = ((((tuningKnob * 100) + 48) / 1.92) * 1.95);
  needlePosition < 1.95 ? channelNeedle.style.left = "1.95%" : channelNeedle.style.left = `${needlePosition.toFixed(2)}%`;
}

// Finally export the module to connect with our xknob object
export { updateChannelNeedlePosition };
