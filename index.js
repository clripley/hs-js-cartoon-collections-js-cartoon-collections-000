function dwarfRollCall(dwarves) {
	let output = [];
	for(let i = 0; i < dwarves.length; i++) {
			output += (i + 1) + ". " + dwarves[i] + " ";
		}
  return output;
}

function summonCaptainPlanet(planeteerCalls){
  let uppercasePlaneteerCalls = [];
  for(let i = 0; i < planeteerCalls.length; i++){
    let exlemation = "!";
    uppercasePlaneteerCalls.push(`${planeteerCalls[i]}${exlemation}`.toUpperCase());
  }
  return uppercasePlaneteerCalls;
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
    if(words.length > 4){
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] ===  'gouda'|| foods[i]===  'cheddar' || foods[i]==='camembert') {
      return foods[i];
    }
  }
  return 'no cheese!'
}

function wordsWithB(words) {
  let barray = []
  for ( var i = 0; i < words.length; i++) {
    if ()
  }
}









