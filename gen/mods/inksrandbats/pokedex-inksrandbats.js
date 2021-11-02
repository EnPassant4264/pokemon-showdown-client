"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Pokedex = {
	castforminksrandbats: {
		num: 351,
		name: "Castform-Inksrandbats",
		types: ["Normal"],
		baseStats: {hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70},
		abilities: {0: "Forecast", 1: "Ice Face"},
		heightm: 0.3,
		weightkg: 0.8,
		color: "Gray",
		eggGroups: ["Fairy", "Amorphous"],
		otherFormes: ["Castform-Sunny", "Castform-Rainy", "Castform-Snowy"],
		formeOrder: ["Castform", "Castform-Sunny", "Castform-Rainy", "Castform-Snowy"],
	},
	castformsnowyinksrandbats: {
		num: 351,
		name: "Castform-Snowy-Inksrandbats",
		baseSpecies: "Castform",
		forme: "Snowy",
		types: ["Ice"],
		baseStats: {hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70},
		abilities: {0: "Forecast", 1: "Ice Face"},
		heightm: 0.3,
		weightkg: 0.8,
		color: "White",
		eggGroups: ["Fairy", "Amorphous"],
		requiredAbility: "Forecast",
		battleOnly: "Castform",
	},
	
	galladeinksrandbats: {
		inherit: true,
		abilities: {0: "Steadfast", 1: "Trace", H: "Justified"}
	},
	
	arctozoltinksrandbats: {
		inherit: true,
		abilities: {0: "Volt Absorb", 1: "Static", H: "Flurry Rush"},
	},
	
	arctovishinksrandbats: {
		inherit: true,
		abilities: {0: "Water Absorb", 1: "Ice Body", H: "Flurry Rush"},
	},
}; exports.Pokedex = Pokedex;
