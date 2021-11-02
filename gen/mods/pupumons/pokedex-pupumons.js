"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Pokedex = {
	grizzealpupumons: {
		num: 1,
		name: "Grizzeal-Pupumons",
		types: ["Grass", "Dark"],
		baseStats: {hp: 120, atk: 70, def: 95, spa: 80, spd: 110, spe: 60},
		abilities: {0: "Overgrow", H: "Natural Cure"},
		weightkg: 200,
	},
	stampyropupumons: {
		num: 2,
		name: "Stampyro-Pupumons",
		types: ["Fire", "Steel"],
		baseStats: {hp: 89, atk: 105, def: 112, spa: 55, spd: 85, spe: 89},
		abilities: {0: "Blaze", H: "Levitate"},
		weightkg: 200,
	},
	hippothagoraspupumons: {
		num: 3,
		name: "Hippothagoras-Pupumons",
		types: ["Water", "Psychic"],
		baseStats: {hp: 77, atk: 105, def: 87, spa: 96, spd: 97, spe: 73},
		abilities: {0: "Torrent", H: "Drizzle"},
		weightkg: 200,
	},
	molederpupumons: {
		num: 4,
		name: "Moleder-Pupumons",
		types: ["Normal", "Rock"],
		baseStats: {hp: 74, atk: 102, def: 74, spa: 30, spd: 74, spe: 74},
		abilities: {0: "Run Away", 1: "Sand Force", H: "Adaptability"},
		weightkg: 50,
	},
	bombatrosspupumons: {
		num: 5,
		name: "Bombatross-Pupumons",
		types: ["Water", "Flying"],
		baseStats: {hp: 90, atk: 55, def: 110, spa: 100, spd: 65, spe: 60},
		abilities: {0: "Swift Swim", H: "Mega Launcher"},
		weightkg: 20,
	},
	galviapupumons: {
		num: 6,
		name: "Galvia-Pupumons",
		types: ["Electric", "Ground"],
		baseStats: {hp: 140, atk: 51, def: 62, spa: 53, spd: 64, spe: 50},
		abilities: {0: "Water Absorb"},
		weightkg: 3,
	},
	calistaijipupumons: {
		num: 7,
		name: "Calistaiji-Pupumons",
		types: ["Fighting"],
		baseStats: {hp: 90, atk: 55, def: 90, spa: 110, spd: 105, spe: 60},
		abilities: {0: "Berserk", 1: "Bulletproof", H: "No Guard"},
		weightkg: 400,
	},
	setstormpupumons: {
		num: 8,
		name: "Setstorm-Pupumons",
		types: ["Bug", "Rock"],
		baseStats: {hp: 84, atk: 50, def: 112, spa: 94, spd: 85, spe: 41},
		abilities: {0: "Swarm", 1: "Weak Armor", H: "Sand Stream"},
		weightkg: 10,
	},
	kheprisepupumons: {
		num: 9,
		name: "Kheprise-Pupumons",
		types: ["Bug", "Ground"],
		baseStats: {hp: 52, atk: 126, def: 55, spa: 59, spd: 60, spe: 114},
		abilities: {0: "Swarm", 1: "White Smoke", H: "Drought"},
		weightkg: 10,
	},
	weeplimpupumons: {
		num: 10,
		name: "Weeplim-Pupumons",
		types: ["Grass", "Normal"],
		baseStats: {hp: 80, atk: 72, def: 85, spa: 103, spd: 70, spe: 90},
		abilities: {0: "Poison Heal", H: "Grassy Surge"},
		weightkg: 20,
	},
	puddogrepupumons: {
		num: 11,
		name: "Puddogre-Pupumons",
		types: ["Rock", "Ghost"],
		baseStats: {hp: 104, atk: 50, def: 128, spa: 60, spd: 123, spe: 20},
		abilities: {0: "Storm Drain", H: "Intimidate"},
		weightkg: 500,
	},
	doderrorpupumons: {
		num: 12,
		name: "Doderror-Pupumons",
		types: ["Electric", "Flying"],
		baseStats: {hp: 70, atk: 130, def: 83, spa: 75, spd: 88, spe: 94},
		abilities: {0: "Early Bird", 1: "Run Away", H: "Heavy Air"},
		weightkg: 160,
	},
	strignightpupumons: {
		num: 13,
		name: "Strignight-Pupumons",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 100, atk: 65, def: 72, spa: 108, spd: 92, spe: 103},
		abilities: {0: "Insomnia", 1: "Keen Eye", H: "Tinted Lens"},
		weightkg: 40,
	},
	coowoopupumons: {
		num: 14,
		name: "Coowoo-Pupumons",
		types: ["Normal", "Flying"],
		baseStats: {hp: 60, atk: 98, def: 78, spa: 98, spd: 78, spe: 23},
		abilities: {0: "Normalize", H: "Multiscale"},
		weightkg: 5,
	},
	spectropapupumons: {
		num: 15,
		name: "Spectropa-Pupumons",
		types: ["Ghost", "Grass"],
		baseStats: {hp: 75, atk: 65, def: 70, spa: 125, spd: 65, spe: 90},
		abilities: {0: "Liquid Ooze", 1: "Damp", H: "Hydration"},
		weightkg: 10,
	},
	crikeripupumons: {
		num: 16,
		name: "Crikeri-Pupumons",
		types: ["Water", "Bug"],
		baseStats: {hp: 67, atk: 70, def: 61, spa: 108, spd: 70, spe: 62},
		abilities: {0: "Truant", 1: "Liquid Voice", H: "Punk Rock"},
		weightkg: 10,
	},
	boxettapupumons: {
		num: 17,
		name: "Boxetta-Pupumons",
		types: ["Water", "Fighting"],
		baseStats: {hp: 70, atk: 130, def: 81, spa: 62, spd: 62, spe: 79},
		abilities: {0: "Iron Fist", H: "Scrappy"},
		weightkg: 30,
	},
	kingphanpupumons: {
		num: 18,
		name: "Kingphan-Pupumons",
		types: ["Grass", "Fighting"],
		baseStats: {hp: 100, atk: 130, def: 120, spa: 60, spd: 80, spe: 50},
		abilities: {0: "Sturdy", 1: "Stamina", H: "Filter"},
		weightkg: 240,
	},
	skuntomicpupumons: {
		num: 19,
		name: "Skuntomic-Pupumons",
		types: ["Poison", "Water"],
		baseStats: {hp: 112, atk: 97, def: 84, spa: 80, spd: 83, spe: 84},
		abilities: {0: "Aftermath", 1: "Intimidate", H: "Corrosion"},
		weightkg: 80,
	},
	croantagionpupumons: {
		num: 20,
		name: "Croantagion-Pupumons",
		types: ["Poison", "Fire"],
		baseStats: {hp: 83, atk: 116, def: 90, spa: 96, spd: 75, spe: 80},
		abilities: {0: "Effect Spore", 1: "Anticipation", H: "Technician"},
		weightkg: 90,
	},
	gaggularpupumons: {
		num: 21,
		name: "Gaggular-Pupumons",
		types: ["Electric", "Dark"],
		baseStats: {hp: 67, atk: 101, def: 65, spa: 107, spd: 85, spe: 80},
		abilities: {0: "Prankster", H: "Electric Surge"},
		weightkg: 30,
	},
	ultranautpupumons: {
		num: 22,
		name: "Ultranaut-Pupumons",
		types: ["Steel", "Fairy"],
		baseStats: {hp: 70, atk: 115, def: 80, spa: 80, spd: 85, spe: 78},
		abilities: {0: "Lightning Rod", 1: "Klutz", H: "Magnet Pull"},
		weightkg: 250,
	},
	/*ultranautmechapupumons: {
		num: 22,
		name: "Ultranaut-V-Pupumons",
		baseSpecies: "Ultranaut",
		forme: "V",
		types: ["Steel", "Fairy"],
		baseStats: {hp: 80, atk: 155, def: 75, spa: 105, spd: 65, spe: 85},
		abilities: {0: "Ultramagnetic"},
		weightkg: 500,
		requiredMove: "Laser Sword",
		requiredItem: "Boazanian Metal",
		changesFrom: "Ultranaut",
	},*/
	/*dragutuspupumons: {
		num: 23,
		name: "Dragutus-Pupumons",
		types: ["Dragon"],
		baseStats: {hp: 90, atk: 70, def: 70, spa: 70, spd: 70, spe: 60},
		abilities: {0: "Regenerator"},
		evos: ["Dragulonimbus", "Dragulare", "Dragulanche"],
		weightkg: 120,
	},*/
	dragulonimbuspupumons: {
		num: 24,
		name: "Dragulonimbus-Pupumons",
		types: ["Dragon", "Electric"],
		baseStats: {hp: 80, atk: 115, def: 72, spa: 96, spd: 72, spe: 115},
		abilities: {0: "Levitate", H: "Sheer Force"},
		weightkg: 200,
		/*prevo: "Dragutus",
		evoLevel: 61,
		evoCondition: "with an Atk stat equal to its SpAtk stat",*/
	},
	dragularepupumons: {
		num: 25,
		name: "Dragulare-Pupumons",
		types: ["Dragon", "Fire"],
		baseStats: {hp: 90, atk: 122, def: 80, spa: 75, spd: 103, spe: 80},
		abilities: {0: "Levitate", H: "Rock Head"},
		weightkg: 400,
		/*prevo: "Dragutus",
		evoLevel: 61,
		evoCondition: "with an Atk stat > its SpAtk stat",*/
	},
	dragulanchepupumons: {
		num: 26,
		name: "Dragulanche-Pupumons",
		types: ["Dragon", "Ice"],
		baseStats: {hp: 90, atk: 80, def: 105, spa: 137, spd: 80, spe: 58},
		abilities: {0: "Levitate", H: "Magic Guard"},
		weightkg: 300,
		/*prevo: "Dragutus",
		evoLevel: 61,
		evoCondition: "with a SpAtk stat > its Atk stat",*/
	},
	scrittlepupumons: {
		num: 27,
		name: "Scrittle-Pupumons",
		types: ["Ghost", "Flying"],
		baseStats: {hp: 30, atk: 42, def: 30, spa: 90, spd: 33, spe: 150},
		abilities: {0: "Defeatist", H: "Shadow Tag"},
		weightkg: 1,
	},
	corruptrainpupumons: {
		num: 28,
		name: "Corruptrain-Pupumons",
		types: ["Steel", "Poison"],
		baseStats: {hp: 100, atk: 87, def: 100, spa: 55, spd: 66, spe: 72},
		abilities: {0: "Light Metal", 1: "Heavy Metal", H: "Steam Engine"},
		weightkg: 700,
	},
	pasdovopupumons: {
		num: 29,
		name: "Pasdovo-Pupumons",
		types: ["Flying", "Ice"],
		baseStats: {hp: 63, atk: 103, def: 83, spa: 53, spd: 103, spe: 103},
		abilities: {0: "Anticipation", 1: "Skill Link", H: "Snow Warning"},
		weightkg: 40,
	},
	glasiosaurpupumons: {
		num: 30,
		name: "Glasiosaur-Pupumons",
		types: ["Ice", "Water"],
		baseStats: {hp: 98, atk: 72, def: 80, spa: 130, spd: 80, spe: 75},
		abilities: {0: "Thick Fat", 1: "Soundproof", H: "Slush Rush"},
		weightkg: 300,
	},
	bellophuspupumons: {
		num: 31,
		name: "Bellophus-Pupumons",
		types: ["Rock", "Grass"],
		baseStats: {hp: 90, atk: 75, def: 130, spa: 70, spd: 107, spe: 43},
		abilities: {0: "Regenerator", 1: "Heatproof", H: "Contrary"},
		weightkg: 240,
	},
	velocustpupumons: {
		num: 32,
		name: "Velocust-Pupumons",
		types: ["Rock", "Steel"],
		baseStats: {hp: 65, atk: 107, def: 81, spa: 76, spd: 65, spe: 121},
		abilities: {0: "Tough Claws", 1: "Dry Skin", H: "Moxie"},
		weightkg: 50,
	},
	kuwengupupumons: {
		num: 33,
		name: "Kuwengu-Pupumons",
		types: ["Dark"],
		baseStats: {hp: 75, atk: 60, def: 70, spa: 112, spd: 85, spe: 60},
		abilities: {0: "Magic Bounce", 1: "Prankster", H: "Serene Grace"},
		weightkg: 10,
	},
	putangopupumons: {
		num: 34,
		name: "Putango-Pupumons",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 100, def: 102, spa: 55, spd: 70, spe: 60},
		abilities: {0: "Unaware", 1: "Guts", H: "Sand Rush"},
		weightkg: 80,
	},
	/*kuwengupupumons: {
		num: 33
		name: "Kuwengu-Pupumons",
		types: ["Dark"],
		baseStats: {hp: 65, atk: 60, def: 60, spa: 112, spd: 75, spe: 60},
		abilities: {0: "Magic Bounce", 1: "Prankster", H: "Serene Grace"},
		weightkg: 10,
		evos: ["Bagwugu"],
	},
	putangopupumons: {
		num: 34,
		name: "Putango-Pupumons",
		types: ["Normal"],
		baseStats: {hp: 65, atk: 100, def: 92, spa: 55, spd: 60, spe: 60},
		abilities: {0: "Unaware", 1: "Guts", H: "Sand Rush"},
		weightkg: 80,
		evos: ["Xeyongo"],
	},
	bagwuwupupumons: {
		num: 54,
		name: "Bagwugu-Pupumons",
		types: ["Dark"],
		baseStats: {hp: 81, atk: 81, def: 71, spa: 121, spd: 91, spe: 81},
		abilities: {0: "Magic Bounce", 1: "Prankster", H: "Serene Grace"},
		weightkg: 10,
		prevo: "Kuwengu",
		evoLevel: 42,
	},
	xeyongopupumons: {
		num: 55,
		name: "Xeyongo-Pupumons",
		types: ["Normal"],
		baseStats: {hp: 81, atk: 121, def: 111, spa: 61, spd: 71, spe: 81},
		abilities: {0: "Unaware", 1: "Guts", H: "Sand Rush"},
		weightkg: 80,
		prevo: "putango",
		evoLevel: 42,
	},*/
	risheliospupumons: {
		num: 35,
		name: "Rishelios-Pupumons",
		types: ["Grass", "Fire"],
		baseStats: {hp: 81, atk: 108, def: 81, spa: 108, spd: 81, spe: 81},
		abilities: {0: "Sundancer"},
		weightkg: 90,
	},
	odonagapupumons: {
		num: 36,
		name: "Odonaga-Pupumons",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 90, atk: 80, def: 90, spa: 130, spd: 110, spe: 100},
		abilities: {0: "Shell Armor", 1: "Sniper", H: "Compound Eyes"},
		weightkg: 50,
	},
	solrockapplepupumons: {
		num: 37,
		name: "Solrock-Apple-Pupumons",
		baseSpecies: "Solrock",
		forme: "Apple",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 105, atk: 120, def: 100, spa: 65, spd: 80, spe: 70},
		abilities: {0: "Solid Rock", 1: "Chlorophyll", H: "Misty Surge"},
		weightkg: 999,
	},
	lunatoneapplepupumons: {
		num: 38,
		name: "Lunatone-Apple-Pupumons",
		baseSpecies: "Lunatone",
		forme: "Apple",
		types: ["Ground", "Psychic"],
		baseStats: {hp: 105, atk: 65, def: 80, spa: 120, spd: 100, spe: 70},
		abilities: {0: "Hydration", 1: "Mirror Armor", H: "Psychic Surge"},
		weightkg: 999,
	},
	venomabpupumons: {
		num: 39,
		name: "Venomab-Pupumons",
		types: ["Fairy", "Poison"],
		baseStats: {hp: 82, atk: 96, def: 48, spa: 143, spd: 128, spe: 103},
		abilities: {0: "Trace", H: "Competitive"},
		weightkg: 20,
	},
	forganonpupumons: {
		num: 40,
		name: "Forganon-Pupumons",
		types: ["Steel", "Ghost"],
		baseStats: {hp: 105, atk: 140, def: 110, spa: 70, spd: 140, spe: 35},
		abilities: {0: "Flash Fire"},
		weightkg: 999,
	},
	isladonpupumons: {
		num: 41,
		name: "Isladon-Pupumons",
		types: ["Water", "Grass"],
		baseStats: {hp: 130, atk: 133, def: 90, spa: 113, spd: 90, spe: 84},
		abilities: {0: "Sap Sipper"},
		weightkg: 800,
	},
	ooreinapupumons: {
		num: 42,
		name: "Ooreina-Pupumons",
		baseForme: "Romance",
		types: ["Fairy", "Fighting"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Speed Boost"},
		weightkg: 15,
		otherFormes: ["Ooreina-Flare"],
		formeOrder: ["Ooreina", "Ooreina-Flare"],
	},
	ooreinaflarepupumons: {
		num: 42,
		name: "Ooreina-Flare-Pupumons",
		baseSpecies: "Ooreina",
		forme: "Flare",
		formeLetter: "F",
		types: ["Fairy", "Fire"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Speed Boost"},
		weightkg: 15,
		requiredAbility: "Speed Boost",
		battleOnly: "Ooreina",
	},
	rangdemospupumons: {
		num: 43,
		name: "Rangdemos-Pupumons",
		types: ["Psychic", "Poison"],
		baseStats: {hp: 75, atk: 120, def: 90, spa: 155, spd: 105, spe: 135},
		abilities: {0: "Fiendish"},
		weightkg: 100,
	},
	baronglaivpupumons: {
		num: 44,
		name: "Baronglaiv-Pupumons",
		types: ["Fighting", "Ground"],
		baseStats: {hp: 150, atk: 150, def: 120, spa: 78, spd: 110, spe: 72},
		abilities: {0: "Herculean"},
		weightkg: 700,
	},
	thundrapupumons: {
		num: 45,
		name: "Thundra-Pupumons",
		types: ["Ice", "Electric"],
		baseStats: {hp: 110, atk: 90, def: 90, spa: 126, spd: 100, spe: 84},
		abilities: {0: "Pressure", H: "Galvanize"},
		weightkg: 600,
	},
	eruptilpupumons: {
		num: 46,
		name: "Eruptil-Pupumons",
		types: ["Fire", "Dark"],
		baseStats: {hp: 80, atk: 115, def: 89, spa: 122, spd: 80, spe: 114},
		abilities: {0: "Pressure", H: "Defiant"},
		weightkg: 400,
	},
	amphikitspupumons: {
		num: 47,
		name: "Amphikits-Pupumons",
		types: ["Water"],
		baseStats: {hp: 83, atk: 105, def: 80, spa: 111, spd: 96, spe: 125},
		abilities: {0: "Mold Breaker", H: "Poison Heal"},
		weightkg: 30,
	},
	detectricepupumons: {
		num: 48,
		name: "Detectrice-Pupumons",
		types: ["Dark", "Dragon"],
		baseStats: {hp: 103, atk: 110, def: 116, spa: 100, spd: 97, spe: 74},
		abilities: {0: "Stakeout", H: "Intimidate"},
		weightkg: 25,
	},
	nosferoylepupumons: {
		num: 49,
		name: "Nosferoyle-Pupumons",
		types: ["Psychic", "Ghost"],
		baseStats: {hp: 50, atk: 110, def: 80, spa: 115, spd: 129, spe: 116},
		abilities: {0: "Unnerve", H: "Nefarious"},
		weightkg: 430,
	},
	amplifirepupumons: {
		num: 50,
		name: "Amplifire-Pupumons",
		types: ["Fire", "Electric"],
		baseStats: {hp: 60, atk: 80, def: 82, spa: 121, spd: 91, spe: 86},
		abilities: {0: "Turboblaze", H: "Punk Rock"},
		weightkg: 100,
	},
	lumberaxpupumons: {
		num: 51,
		name: "Lumberax-Pupumons",
		types: ["Grass", "Steel"],
		baseStats: {hp: 100, atk: 100, def: 110, spa: 85, spd: 65, spe: 70},
		abilities: {0: "Chlorophyll", H: "Tough Claws"},
		weightkg: 240,
	},
	batakalapupumons: {
		num: 52,
		name: "Batakala-Pupumons",
		types: ["Dark", "Ice"],
		baseStats: {hp: 90, atk: 129, def: 94, spa: 112, spd: 104, spe: 136},
		abilities: {0: "Gluttony"},
		weightkg: 550,
	},
	batambupupumons: {
		num: 53,
		name: "Batambu-Pupumons",
		types: ["Flying", "Steel"],
		baseStats: {hp: 100, atk: 80, def: 105, spa: 121, spd: 156, spe: 103},
		abilities: {0: "Copper Heart"},
		weightkg: 300,
	},
	anjamanispupumons: {
		num: 54,
		name: "Anjamanis-Pupumons",
		types: ["Ground"],
		baseStats: {hp: 90, atk: 118, def: 85, spa: 55, spd: 70, spe: 82},
		abilities: {0: "Burrower"},
		weightkg: 60,
	},
	bonfiperpupumons: {
		num: 55,
		name: "Bonfiper-Pupumons",
		types: ["Ghost", "Fire"],
		baseStats: {hp: 75, atk: 80, def: 60, spa: 115, spd: 104, spe: 91},
		abilities: {0: "Shed Skin", 1: "Swift Swim", H: "Infiltrator"},
		weightkg: 20,
	},
	/*sophisturnpupumons: {
		num: 56,
		name: "Sophisturn-Pupumons",
		types: ["Fairy"],
		baseStats: {hp: 83, atk: 90, def: 90, spa: 51, spd: 95, spe: 76},
		abilities: {0: "Invader"},
		weightkg: 10,
	},
	trestoobeepupumons: {
		num: 57,
		name: "Trestoobee-Pupumons",
		types: ["Dark"],
		baseStats: {hp: 80, atk: 140, def: 51, spa: 110, spd: 59, spe: 65},
		abilities: {0: "Invader"},
		weightkg: 10,
	},
	uratialpupumons: {
		num: 58,
		name: "Uratial-Pupumons",
		types: ["Ice"],
		baseStats: {hp: 51, atk: 100, def: 109, spa: 130, spd: 85, spe: 40},
		abilities: {0: "Invader"},
		weightkg: 10,
	},
	venusmogpupumons: {
		num: 59,
		name: "Venusmog-Pupumons",
		types: ["Poison"],
		baseStats: {hp: 80, atk: 120, def: 135, spa: 89, spd: 60, spe: 51},
		abilities: {0: "Invader"},
		weightkg: 10,
	},
	plutrapezepupumons: {
		num: 60,
		name: "Plutrapeze-Pupumons",
		types: ["Bug", "Ghost"],
		baseStats: {hp: 90, atk: 125, def: 75, spa: 125, spd: 51, spe: 104},
		abilities: {0: "Invader", H: "Foreign Gas"},
		weightkg: 10,
	},
	mercureignpupumons: {
		num: 61,
		name: "Mercureign-Pupumons",
		types: ["Flying"],
		baseStats: {hp: 70, atk: 130, def: 85, spa: 120, spd: 100, spe: 95},
		abilities: {0: "Foreign Gas"},
		weightkg: 10,
	},*/
}; exports.Pokedex = Pokedex;

