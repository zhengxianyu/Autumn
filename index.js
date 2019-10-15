$(function() {
  function numberRandom(max, min) {
    var num = ( Math.random() * ( max - min ) + min ).toFixed( 2 )
    return num;
  }

  // 麦子
  for (let index = 0; index < 200; index ++) {
    let wheat = document.createElement('div');
    let time = numberRandom(3, 1);
    wheat.className = 'wheat';
    wheat.style =
      'left:' +
        numberRandom(15.5, -0.5) +
      'vw; bottom: ' +
        numberRandom(5.5, -2) +
      'vw; animation: Wheatmove ' +
        time +
      's linear infinite;';

    let wheatSpike = document.createElement('div');
    wheatSpike.className = 'wheat-spike';
    wheatSpike.style =
      'animation: SpikeMove ' +
        time +
      's linear infinite;';
    wheat.appendChild(wheatSpike);

    // let wheatSpikeTwo = document.createElement('div');
    // wheatSpikeTwo.className = 'wheat-spike';
    // wheatSpikeTwo.style =
    //   'animation: SpikeMove ' +
    //     time +
    //   's linear infinite; top: 0.6vw; left: 0.2vw;';
    // wheat.appendChild(wheatSpikeTwo);

    let wheats = document.getElementById('wheats');
    wheats.appendChild(wheat);
  }

  // 头发
  for (let index = 0; index < 40; index ++) {
    let hairOne = document.createElement('div');
    hairOne.className = 'hair-one';
    if (index < 20) {
      hairOne.style =
        'left:' +
          (0.1 * index) +
        'vw; height:' +
          (2.6 - 0.1 * index) +
        'vw; transform: rotate(' +
          (22 + 2 * index) +
        'deg)';
    } else {
      hairOne.style =
        'left:' +
          (1.9 + 0.05 * index) +
        'vw; height:' +
          (0.5 + 0.05 * index) +
        'vw; transform: rotate(' +
          (-50 + index) +
        'deg)';
    }
    
    let hair = document.getElementById('hair');
    hair.appendChild(hairOne);
  }
})
