$(function() {
  function numberRandom(max, min) {
    var num = ( Math.random() * ( max - min ) + min ).toFixed( 2 )
    return num;
  }

  for (let index = 0; index < 200; index ++) {
    let wheat = document.createElement('div');
    wheat.className = 'wheat';
    wheat.style =
      'left:' +
        numberRandom(15.5, -0.5) +
      'vw; bottom: ' +
        numberRandom(5.5, -0.5) +
      'vw; animation: Wheatmove ' +
        numberRandom(3, 1) +
      's linear infinite;';
    let wheats = document.getElementById('wheats');
    wheats.appendChild(wheat);
  }

  for (let index = 0; index < 20; index ++) {
    let hairOne = document.createElement('div');
    hairOne.className = 'hair-one';
    hairOne.style =
      'left:' +
        (0.1 * index) +
      'vw; height:' +
        (2.6 - 0.1 * index) +
      'vw; transform: rotate('+ (22+2*index)+'deg)';
    let hair = document.getElementById('hair');
    hair.appendChild(hairOne);
  }

  for (let index = 0; index < 20; index ++) {
    let hairOne = document.createElement('div');
    hairOne.className = 'hair-one';
    hairOne.style =
      'left:' +
        (2 + 0.1 * index) +
      'vw; height:' +
        (0.5 + 0.1 * index) +
      'vw; transform: rotate('+ (-50+2*index)+'deg)';
    let hair = document.getElementById('hair');
    hair.appendChild(hairOne);
  }
})
