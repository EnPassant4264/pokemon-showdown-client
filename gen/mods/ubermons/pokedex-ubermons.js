"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Pokedex = {
	shayminskyubermons: {
		inherit: true,
		abilities: {0: "Flower Veil"},
	},
	landorusubermons: {
		inherit: true,
		abilities: {0: "Sand Force", H: "Competitive"},
	},
	genesectubermons: {
		inherit: true,
		baseStats: {hp: 91, atk: 100, def: 95, spa: 120, spd: 95, spe: 99},
		abilities: {0: "Sniper"},
	},
	genesectdouseubermons: {
		inherit: true,
		baseStats: {hp: 91, atk: 100, def: 95, spa: 120, spd: 95, spe: 99},
		abilities: {0: "Sniper"},
	},
	genesectshockubermons: {
		inherit: true,
		baseStats: {hp: 91, atk: 100, def: 95, spa: 120, spd: 95, spe: 99},
		abilities: {0: "Sniper"},
	},
	genesectburnubermons: {
		inherit: true,
		baseStats: {hp: 91, atk: 100, def: 95, spa: 120, spd: 95, spe: 99},
		abilities: {0: "Sniper"},
	},
	genesectchillubermons: {
		inherit: true,
		baseStats: {hp: 91, atk: 100, def: 95, spa: 120, spd: 95, spe: 99},
		abilities: {0: "Sniper"},
	},
	marshadowubermons: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
	},
	spectrierubermons: {
		inherit: true,
		baseStats: {hp: 90, atk: 90, def: 85, spa: 90, spd: 95, spe: 130},
	},
	dragapultubermons: {
		inherit: true,
		baseStats: {hp: 119, atk: 91, def: 89, spa: 91, spd: 89, spe: 121},
		abilities: {0: "Clear Body", 1: "Infiltrator", H: "Sniper"},
	},
	kyogreubermons: {
		inherit: true,
		baseStats: {hp: 95, atk: 80, def: 90, spa: 110, spd: 120, spe: 75},
	},
	groudonubermons: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 125, spa: 100, spd: 70, spe: 65},
	},
	rayquazaubermons: {
		inherit: true,
		baseStats: {hp: 85, atk: 115, def: 75, spa: 115, spd: 75, spe: 105},
	},
	deoxysubermons: {
		inherit: true,
		baseStats: {hp: 50, atk: 110, def: 110, spa: 110, spd: 110, spe: 110},
	},
	deoxysattackubermons: {
		inherit: true,
		baseStats: {hp: 50, atk: 130, def: 100, spa: 130, spd: 100, spe: 90},
	},
	deoxysdefenseubermons: {
		inherit: true,
		baseStats: {hp: 50, atk: 70, def: 160, spa: 90, spd: 160, spe: 70},
	},
	deoxysspeedubermons: {
		inherit: true,
		baseStats: {hp: 50, atk: 90, def: 115, spa: 90, spd: 115, spe: 140},
	},
	kyuremblackubermons: {
		inherit: true,
		baseStats: {hp: 125, atk: 135, def: 105, spa: 85, spd: 65, spe: 85},
	},
	kyuremwhiteubermons: {
		inherit: true,
		baseStats: {hp: 125, atk: 80, def: 75, spa: 110, spd: 90, spe: 120},
	},
	hippowdonubermons: {
		inherit: true,
		abilities: {0: "Sand Stream", 1: "Arena Trap", H: "Sand Force"},
	},
	vibravaubermons: {
		inherit: true,
		abilities: {0: "Levitate", H: "Arena Trap"},
	},
	flygonubermons: {
		inherit: true,
		abilities: {0: "Levitate", H: "Arena Trap"},
	},
	krookodileubermons: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Moxie", H: "Arena Trap"},
	},
	rhyperiorubermons: {
		inherit: true,
		abilities: {0: "Arena Trap", 1: "Solid Rock", H: "Reckless"},
	},
	excadrillubermons: {
		inherit: true,
		abilities: {0: "Sand Rush", 1: "Arena Trap", H: "Mold Breaker"},
	},
	banetteubermons: {
		inherit: true,
		abilities: {0: "Shadow Tag", 1: "Frisk", H: "Cursed Body"},
	},
	dusknoirubermons: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Shadow Tag", H: "Frisk"},
	},
	cursolaubermons: {
		inherit: true,
		abilities: {0: "Weak Armor", 1: "Shadow Tag", H: "Perish Body"},
	},
	corsolagalarubermons: {
		inherit: true,
		abilities: {0: "Weak Armor", 1: "Shadow Tag", H: "Cursed Body"},
	},
	gengarmegaubermons: {
		inherit: true,
		baseStats: {hp: 60, atk: 95, def: 90, spa: 155, spd: 90, spe: 110},
	},
	dracovishubermons: {
		inherit: true,
		abilities: {0: "Water Absorb", 1: "Analytic", H: "Sand Rush"},
	},
	metagrossmegaubermons: {
		inherit: true,
		abilities: {0: "Heavy Metal"},
	},
	blastoisemegaubermons: {
		inherit: true,
		types: ["Water", "Fighting"],
		abilities: {0: "Technician"},
	},
	mewtwoubermons: {
		inherit: true,
		abilities: {0: "Pressure", H: "Neuroforce"},
		baseStats: {hp: 106, atk: 110, def: 85, spa: 124, spd: 85, spe: 90},
	},
	lugiaubermons: {
		inherit: true,
		abilities: {0: "Pressure", H: "Berserk"},
		baseStats: {hp: 86, atk: 70, def: 110, spa: 110, spd: 114, spe: 110},
	},
	hoohubermons: {
		inherit: true,
		baseStats: {hp: 101, atk: 135, def: 52, spa: 135, spd: 87, spe: 90},
	},
	magearnaubermons: {
		inherit: true,
		baseStats: {hp: 115, atk: 85, def: 115, spa: 85, spd: 115, spe: 85},
	},
	pheromosaubermons: {
		inherit: true,
		baseStats: {hp: 83, atk: 113, def: 67, spa: 113, spd: 67, spe: 127},
	},
	reshiramubermons: {
		inherit: true,
		baseStats: {hp: 90, atk: 70, def: 80, spa: 130, spd: 110, spe: 90},
	},
	zekromubermons: {
		inherit: true,
		baseStats: {hp: 90, atk: 105, def: 90, spa: 80, spd: 80, spe: 125},
	},
}; exports.Pokedex = Pokedex;

