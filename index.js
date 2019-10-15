$(function() {
  function numberRandom(max, min) {
    var num = ( Math.random() * ( max - min ) + min ).toFixed( 2 )
    return num;
  }

  function createWheatSpike(time, wheat) {
    for (let index = 0; index < 6; index ++) {
      let grain = document.createElement('div');
      grain.className = 'grain';
      grain.style =
        'animation: SpikeMove ' +
          time +
        's linear infinite;';

        wheat.appendChild(grain);
    }
    return wheat;
  }

  // 麦子
  for (let index = 0; index < 100; index ++) {
    let wheat = document.createElement('div');
    let time = numberRandom(3, 1);
    wheat.className = 'wheat';
    wheat.style =
      'left:' +
        numberRandom(15.5, -0.5) +
      'vw; bottom: ' +
        numberRandom(5.5, -2) +
      'vw; animation: WheatMove ' +
        time +
      's linear infinite;';

    wheat = createWheatSpike(time, wheat);

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
