"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Pokedex = {
	inteleonoptimons: {
		inherit: true,
		types: ["Water", "Normal"],
		baseStats: {hp: 70, atk: 70, def: 75, spa: 125, spd: 85, spe: 120},
		abilities: {0: "Torrent", H: "Infiltrator"},
	},
	inteleongmaxoptimons: {
		inherit: true,
		types: ["Water", "Normal"],
		baseStats: {hp: 70, atk: 70, def: 75, spa: 125, spd: 85, spe: 120},
		abilities: {0: "Torrent", H: "Infiltrator"},
	},
	falinksoptimons: {
		inherit: true,
		types: ["Fighting", "Ground"],
		baseStats: {hp: 95, atk: 120, def: 110, spa: 70, spd: 60, spe: 95},
		abilities: {0: "Skill Link", 1: "Defiant", H: "Technician"},
	},
	cramorantoptimons: {
		inherit: true,
		baseStats: {hp: 115, atk: 85, def: 75, spa: 85, spd: 95, spe: 80},
	},
	cramorantgulpingoptimons: {
		inherit: true,
		baseStats: {hp: 115, atk: 85, def: 75, spa: 85, spd: 95, spe: 80},
	},
	cramorantgorgingoptimons: {
		inherit: true,
		baseStats: {hp: 115, atk: 85, def: 75, spa: 85, spd: 95, spe: 80},
	},
	eiscueoptimons: {
		inherit: true,
		types: ["Ice", "Water"],
		baseStats: {hp: 95, atk: 80, def: 120, spa: 65, spd: 110, spe: 50},
	},
	eiscuenoiceoptimons: {
		inherit: true,
		types: ["Ice", "Water"],
		baseStats: {hp: 95, atk: 90, def: 70, spa: 85, spd: 50, spe: 130},
		abilities: {0: "Swift Swim"},
	},
	perrserkeroptimons: {
		inherit: true,
		baseStats: {hp: 90, atk: 110, def: 120, spa: 50, spd: 80, spe: 80},
	},
	mrrimeoptimons: {
		inherit: true,
		baseStats: {hp: 90, atk: 75, def: 95, spa: 110, spd: 100, spe: 70},
		abilities: {0: "Tangled Feet", 1: "Screen Cleaner", H: "Unaware"},
	},
	cursolaoptimons: {
		inherit: true,
		types: ["Ghost", "Dark"],
		baseStats: {hp: 80, atk: 70, def: 85, spa: 145, spd: 130, spe: 30},
		abilities: {0: "Regenerator", 1: "Filter", H: "Perish Body"},
	},
	rapidashgalaroptimons: {
		inherit: true,
		baseStats: {hp: 85, atk: 80, def: 75, spa: 100, spd: 80, spe: 105},
		abilities: {0: "Pastel Veil", 1: "Misty Surge", H: "Psychic Surge"},
	},
	weezinggalaroptimons: {
		inherit: true,
		baseStats: {hp: 95, atk: 80, def: 120, spa: 100, spd: 80, spe: 60},
	},
	stunfiskgalaroptimons: {
		inherit: true,
		baseStats: {hp: 119, atk: 91, def: 99, spa: 66, spd: 84, spe: 32},
		abilities: {0: "Mimicry", H: "Water Absorb"},
	},
	boltundoptimons: {
		inherit: true,
		types: ["Electric", "Normal"],
		baseStats: {hp: 89, atk: 105, def: 60, spa: 105, spd: 60, spe: 146},
		abilities: {0: "Strong Jaw", 1: "Competitive", H: "Scrappy"},
	},
	eldegossoptimons: {
		inherit: true,
		baseStats: {hp: 90, atk: 50, def: 90, spa: 110, spd: 120, spe: 60},
		abilities: {0: "Cotton Down", 1: "Regenerator", H: "Fluffy"},
	},
	greedentoptimons: {
		inherit: true,
		baseStats: {hp: 160, atk: 105, def: 105, spa: 55, spd: 75, spe: 20},
		abilities: {0: "Cheek Pouch", 1: "Ripen", H: "Sticky Hold"},
	},
	thievuloptimons: {
		inherit: true,
		types: ["Dark", "Ground"],
		baseStats: {hp: 90, atk: 58, def: 78, spa: 107, spd: 92, spe: 95},
		abilities: {0: "Unburden", 1: "Sheer Force", H: "Stakeout"},
	},
	grapploctoptimons: {
		inherit: true,
		types: ["Fighting", "Water"],
		baseStats: {hp: 115, atk: 118, def: 90, spa: 70, spd: 80, spe: 42},
		abilities: {0: "Technician", H: "Poison Heal"},
	},
	coalossaloptimons: {
		inherit: true,
		baseStats: {hp: 110, atk: 100, def: 130, spa: 80, spd: 100, spe: 30},
	},
	sandacondaoptimons: {
		inherit: true,
		types: ["Ground", "Dragon"],
		baseStats: {hp: 82, atk: 107, def: 125, spa: 65, spd: 90, spe: 75},
	},
	flappleoptimons: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 90, spa: 95, spd: 80, spe: 100},
	},
	appletunoptimons: {
		inherit: true,
		baseStats: {hp: 120, atk: 85, def: 90, spa: 110, spd: 85, spe: 45},
	},
	magmortaroptimons: {
		inherit: true,
		types: ["Fire", "Fighting"],
		baseStats: {hp: 75, atk: 95, def: 67, spa: 125, spd: 95, spe: 83},
		abilities: {0: "Flame Body", 1: "Sheer Force"},
	},
	electivireoptimons: {
		inherit: true,
		types: ["Electric", "Fighting"],
		baseStats: {hp: 75, atk: 123, def: 87, spa: 105, spd: 85, spe: 95},
		abilities: {0: "Motor Drive", 1: "Vital Spirit", H: "Sheer Force"},
	},
	yanmegaoptimons: {
		inherit: true,
		types: ["Bug", "Dragon"],
	},
	dusknoiroptimons: {
		inherit: true,
		types: ["Ghost", "Dark"],
		baseStats: {hp: 80, atk: 135, def: 100, spa: 65, spd: 100, spe: 65},
		abilities: {0: "Pressure", 1: "Iron Fist"},
	},
	xatuoptimons: {
		inherit: true,
		baseStats: {hp: 90, atk: 70, def: 90, spa: 115, spd: 90, spe: 75},
	},
	sudowoodooptimons: {
		inherit: true,
		types: ["Rock", "Grass"],
		baseStats: {hp: 80, atk: 125, def: 125, spa: 50, spd: 80, spe: 50},
	},
	oranguruoptimons: {
		inherit: true,
		baseStats: {hp: 90, atk: 60, def: 90, spa: 110, spd: 110, spe: 50},
		abilities: {0: "Oblivious", 1: "Telepathy", H: "Sheer Force"},
	},
	bellossomoptimons: {
		inherit: true,
		types: ["Grass", "Fairy"],
		baseStats: {hp: 75, atk: 60, def: 95, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Dancer", 1: "Own Tempo", H: "Triage"},
	},
	garbodoroptimons: {
		inherit: true,
		types: ["Poison", "Steel"],
		baseStats: {hp: 100, atk: 60, def: 102, spa: 95, spd: 102, spe: 55},
		abilities: {0: "Stench", 1: "Corrosion", H: "Aftermath"},
	},
	druddigonoptimons: {
		inherit: true,
		types: ["Dragon", "Steel"],
		baseStats: {hp: 77, atk: 130, def: 120, spa: 60, spd: 90, spe: 68},
		abilities: {0: "Mold Breaker", 1: "Rough Skin", H: "Sheer Force"},
	},
	flygonoptimons: {
		inherit: true,
		baseStats: {hp: 100, atk: 70, def: 90, spa: 115, spd: 90, spe: 100},
		abilities: {0: "Levitate", 1: "Adaptability", H: "Berserk"},
	},
}; exports.Pokedex = Pokedex;

