"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Pokedex = {
	asubakraken: {
		num: 1,
		name: "Asubakraken",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 151, atk: 106, def: 54, spa: 86, spd: 71, spe: 32},
		abilities: {0: "Debilitate", 1: "Sticky Hold", H: "Persistent"},
		weightkg: 235,
	},
	baradjur: {
		num: 2,
		name: "Barad-Jur",
		types: ["Ground"],
		baseStats: {hp: 90, atk: 125, def: 115, spa: 60, spd: 105, spe: 55},
		abilities: {0: "Honey Gather", 1: "Sand Spit", H: "Poison Heal"},
		weightkg: 42,
	},
	batana: {
		num: 3,
		name: "Batana",
		types: ["Grass", "Flying"],
		baseStats: {hp: 90, atk: 90, def: 90, spa: 90, spd: 90, spe: 90},
		abilities: {0: "Prankster", 1: "Trickster", H: "Banana Trap"},
		weightkg: 1.6,
	},
	boreastra: {
		num: 4,
		name: "Boreastra",
		types: ["Ice", "Fairy"],
		baseStats: {hp: 77, atk: 111, def: 77, spa: 99, spd: 55, spe: 111},
		abilities: {0: "Illuminate", 1: "Levitate", H: "Victory Star"},
		weightkg: 0.1,
	},
	burrodon: {
		num: 5,
		name: "Burrodon",
		types: ["Electric", "Ground"],
		baseStats: {hp: 90, atk: 123, def: 123, spa: 63, spd: 72, spe: 50},
		abilities: {0: "Strong Jaw", H: "Persistance"},
	},
	cachanaut: {
		num: 6,
		name: "Cachanaut",
		types: ["Steel", "Water"],
		baseStats: {hp: 120, atk: 131, def: 88, spa: 50, spd: 56, spe: 70},
		abilities: {0: "Guts", 1: "Filter", H: "Stalwart"},
		weightkg: 600,
	},
	casko: {
		num: 7,
		name: "Casko",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 99, atk: 27, def: 72, spa: 99, spd: 99, spe: 99},
		abilities: {0: "Fluffy", 1: "Merciful Sky", H: "Drought"},
	},
	dolphena: {
		num: 8,
		name: "Dolphena",
		types: ["Water", "Dragon"],
		baseStats: {hp: 79, atk: 60, def: 95, spa: 125, spd: 100, spe: 81},
		abilities: {0: "Hydration", H: "Mythical Presence"},
	},
	dolphure: {
		num: 9,
		name: "Dolphure",
		types: ["Water", "Psychic"],
		baseStats: {hp: 85, atk: 56, def: 90, spa: 104, spd: 100, spe: 100},
		abilities: {0: "Torrent", H: "Echolocation"},
	},
	drasapor: {
		num: 10,
		name: "Drasapor",
		types: ["Water", "Dragon"],
		baseStats: {hp: 90, atk: 90, def: 90, spa: 90, spd: 90, spe: 90},
		abilities: {0: "Sweet Veil", 1: "Aroma Veil", H: "Unaware"},
	},
	elbalfatross: {
		num: 11,
		name: "Elbalfatross",
		types: ["Flying"],
		baseStats: {hp: 70, atk: 109, def: 105, spa: 80, spd: 75, spe: 101},
		abilities: {0: "Pickup", H: "Fluffy"},
	},
	faerosion: {
		num: 12,
		name: "Faerosion",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 50, atk: 50, def: 130, spa: 110, spd: 85, spe: 85},
		abilities: {0: "Stamina", H: "Drought"},
		weightkg: 59,
	},
	firenra: {
		num: 13,
		name: "Firenra",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 98, atk: 85, def: 70, spa: 125, spd: 115, spe: 72},
		abilities: {0: "Fairy Aura", 1: "Shadow Shield", H: "Immolate"},
	},
	frozalisk: {
		num: 14,
		name: "Frozalisk",
		types: ["Ice", "Grass"],
		baseStats: {hp: 100, atk: 110, def: 85, spa: 65, spd: 112, spe: 91},
		abilities: {0: "Soundproof", 1: "Slush Rush", H: "Speed Boost"},
	},
	gammaroo: {
		num: 15,
		name: "Gammaroo",
		types: ["Fighting", "Psychic"],
		baseStats: {hp: 70, atk: 93, def: 68, spa: 112, spd: 75, spe: 112},
		abilities: {0: "Filter", 1: "No Guard", H: "Static"},
	},
	gloriode: {
		num: 16,
		name: "Gloriode",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 46, atk: 81, def: 166, spa: 90, spd: 169, spe: 48},
		abilities: {0: "Clear Body", H: "Colored Jewel"},
	},
	headrake: {
		num: 17,
		name: "Headrake",
		types: ["Normal", "Dragon"],
		baseStats: {hp: 80, atk: 90, def: 100, spa: 60, spd: 100, spe: 80},
		abilities: {0: "Adaptability", 1: "Reckless", H: "Rock Head"},
	},
	idk: {
		num: 18,
		name: "idk",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 90, atk: 72, def: 85, spa: 128, spd: 95, spe: 110},
		abilities: {0: "Mythic Swordsman"},
	},
	lunoccyx: {
		num: 19,
		name: "Lunoccyx",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 64, atk: 95, def: 87, spa: 78, spd: 75, spe: 136},
		abilities: {0: "Run Away", 1: "Sand Veil", H: "Oblivious"},
	},
	minocharge: {
		num: 20,
		name: "Minocharge",
		types: ["Normal", "Electric"],
		baseStats: {hp: 80, atk: 110, def: 115, spa: 40, spd: 75, spe: 80},
		abilities: {0: "Reckless", 1: "Stamina", H: "Guts"},
	},
	neuroboxin: {
		num: 21,
		name: "Neuroboxin",
		types: ["Poison", "Fighting"],
		baseStats: {hp: 114, atk: 72, def: 96, spa: 85, spd: 81, spe: 109},
		abilities: {0: "Infiltrator", 1: "Sticky Hold", H: "Trace"},
	},
	nixlean: {
		num: 22,
		name: "Nixlean",
		types: ["Water", "Fairy"],
		baseStats: {hp: 85, atk: 95, def: 70, spa: 60, spd: 95, spe: 100},
		abilities: {0: "Sap Sipper", 1: "Motor Drive", H: "Toxic Armor"},
	},
	niyang: {
		num: 23,
		name: "Niyang",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 77, atk: 113, def: 77, spa: 113, spd: 77, spe: 113},
		abilities: {0: "Balanced Out"},
	},
	ruinastle: {
		num: 24,
		name: "Ruinastle",
		types: ["Rock", "Ground"],
		baseStats: {hp: 110, atk: 115, def: 92, spa: 60, spd: 77, spe: 82},
		abilities: {0: "Sand Spit", 1: "Castles Proud", H: "Sheer Force"},
	},
	parakinesis: {
		num: 25,
		name: "Parakinesis",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 124, atk: 130, def: 66, spa: 79, spd: 72, spe: 109},
		abilities: {0: "Prankster", 1: "Big Pecks", H: "Iron Fist"},
	},
	poultergeistbaseform: {
		num: 26,
		name: "Poultergeist Base Form",
		types: ["Fire", "Flying"],
		baseStats: {hp: 105, atk: 65, def: 85, spa: 105, spd: 85, spe: 73},
		abilities: {0: "Chicken Out"},
		weightkg: 2.6,
	},
	poultergeistheadlessform: {
		num: 27,
		name: "Poultergeist Headless Form",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 1, atk: 65, def: 85, spa: 105, spd: 85, spe: 113},
		abilities: {0: "Wonder Guard"},
		weightkg: 2.2,
	},
	puremaid: {
		num: 28,
		name: "Puremaid",
		types: ["Water", "Fairy"],
		baseStats: {hp: 124, atk: 41, def: 52, spa: 103, spd: 80, spe: 95},
		abilities: {0: "Water Absorb", 1: "Healer", H: "Cute Charm"},
	},
	rosereve: {
		num: 29,
		name: "Rosereve",
		types: ["Fire", "Fairy"],
		baseStats: {hp: 70, atk: 75, def: 60, spa: 125, spd: 100, spe: 111},
		abilities: {0: "Competitive", 1: "Flash Fire", H: "Flameboyant"},
	},
	salava: {
		num: 30,
		name: "Salava",
		types: ["Fire"],
		baseStats: {hp: 105, atk: 60, def: 95, spa: 75, spd: 65, spe: 55},
		abilities: {0: "Flame Body", H: "Magma Armor"},
	},
	saltidan: {
		num: 31,
		name: "Saltidan",
		types: ["Rock"],
		baseStats: {hp: 70, atk: 115, def: 80, spa: 60, spd: 80, spe: 125},
		abilities: {0: "Water Absorb", H: "Heatproof"},
	},
	scorpiost: {
		num: 32,
		name: "Scorpiost",
		types: ["Ice", "Poison"],
		baseStats: {hp: 110, atk: 115, def: 100, spa: 80, spd: 90, spe: 35},
		abilities: {0: "No Guard", 1: "Poison Touch", H: "Freezing"},
		weightkg: 354,
	},
	spexel: {
		num: 33,
		name: "Spexel",
		types: ["Fairy", "Ghost"],
		baseStats: {hp: 137, atk: 117, def: 34, spa: 127, spd: 117, spe: 38},
		abilities: {0: "Cursed Body", 1: "Fairy Aura", H: "Illusion"},
	},
	tactavalanchor: {
		num: 34,
		name: "Tactaval",
		types: ["Water", "Steel"],
		baseStats: {hp: 60, atk: 60, def: 120, spa: 60, spd: 120, spe: 130},
		abilities: {0: "Stance Change"},
		weightkg: 41,
	},
	tactavaltorpedo: {
		num: 35,
		name: "Tactaval",
		types: ["Water", "Steel"],
		baseStats: {hp: 60, atk: 150, def: 75, spa: 150, spd: 75, spe: 40},
		abilities: {0: "Stance Change"},
		weightkg: 41,
	},
	wendigoul: {
		num: 36,
		name: "Wendigoul",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 72, atk: 92, def: 88, spa: 100, spd: 74, spe: 111},
		abilities: {0: "Sheer Force", 1: "Scrappy", H: "Defiant"},
	},
	vesuvenge: {
		num: 37,
		name: "Vesuvenge",
		types: ["Fire", "Rock"],
		baseStats: {hp: 90, atk: 86, def: 74, spa: 82, spd: 78, spe: 120},
		abilities: {0: "Magma Armor", 1: "Anger Point", H: "Revolution"},
		weightkg: 50,
	},
	vipier: {
		num: 38,
		name: "Vipier",
		types: ["Poison", "Steel"],
		baseStats: {hp: 70, atk: 140, def: 85, spa: 70, spd: 65, spe: 110},
		abilities: {0: "Corrosion", 1: "Intimidate", H: "No Guard"},
		weightkg: 112.2,
	},
	zawa: {
		num: 39,
		name: "Zawa",
		types: ["Psychic", "Fighting"],
		baseStats: {hp: 144, atk: 143, def: 58, spa: 49, spd: 58, spe: 66},
		abilities: {0: "Inner Focus", 1: "Scrappy", H: "Zen Mode"},
		weightkg: 61.2,
	},
	zawazen: {
		num: 40,
		name: "Zawa-Zen",
		types: ["Psychic", "Steel"],
		baseStats: {hp: 144, atk: 49, def: 108, spa: 143, spd: 108, spe: 26},
		abilities: {0: "Zen Mode"},
		weightkg: 108,
	},
}; exports.Pokedex = Pokedex;
