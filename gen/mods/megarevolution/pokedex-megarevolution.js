"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Pokedex = {
	venusaurmegarevolution: {
		inherit: true,
		evos: ["Arbosaur"],
	},
	arbosaurmegarevolution: {
		num: 270001,
		name: "Arbosaur-Megarevolution",
		types: ["Grass","Dragon"],
		baseStats: {hp: 85, atk: 93, def: 85, spa: 115, spd: 110, spe: 88},
		abilities: {0: "Overgrow", H: "Thick Fat"},
		heightm: 2.4,
		weightkg: 155.5,
		prevo: "venusaur",
	},
	charizard:  {
		inherit: true,
		evos: ["Charbarian", "Chargaryen"],
	},
	charbarianmegarevolution: {
		num: 270002,
		name: "Charbarian-Megarevolution",
		types: ["Fire","Dragon"],
		baseStats: {hp: 93, atk: 114, def: 83, spa: 109, spd: 85, spe: 100},
		abilities: {0: "Blaze", H: "Tough Claws"},
		heightm: 1.7,
		weightkg: 110.5,
		prevo: "charizard",
	},
	chargaryenmegarevolution: {
		num: 270003,
		name: "Chargaryen-Megarevolution",
		types: ["Fire","Flying"],
		baseStats: {hp: 83, atk: 89, def: 93, spa: 124, spd: 95, spe: 100},
		abilities: {0: "Blaze", H: "Drought"},
		heightm: 1.7,
		weightkg: 100.5,
		prevo: "charizard",
	},
	blastoisemegarevolution: {
		inherit: true,
		evos: ["Galapagon"],
	},
	galapagonmegarevolution: {
		num: 270004,
		name: "Galapagon-Megarevolution",
		types: ["Water","Rock"],
		baseStats: {hp: 89, atk: 93, def: 110, spa: 100, spd: 120, spe: 68},
		abilities: {0: "Torrent", H: "Mega Launcher"},
		heightm: 1.6,
		weightkg: 101.1,
		prevo: "blastoise",
	},
	pinsirmegarevolution: {
		inherit: true,
		evos: ["Coleoptyran"],
	},
	coleoptyranmegarevolution: {
		num: 270005,
		name: "Coleoptyran-Megarevolution",
		types: ["Bug","Flying"],
		baseStats: {hp: 75, atk: 155, def: 70, spa: 65, spd: 95, spe: 90},
		abilities: {0: "Hyper Cutter", 1: "Unnerve", H: "Aerilate"},
		heightm: 1.7,
		weightkg: 59,
		prevo: "pinsir",
	},
	heracrossmegarevolution: {
		inherit: true,
		evos: ["Herascarab"],
	},
	herascarabmegarevolution: {
		num: 270006,
		name: "Herascarab-Megarevolution",
		types: ["Bug","Fighting"],
		baseStats: {hp: 90, atk: 165, def: 75, spa: 50, spd: 115, spe: 55},
		abilities: {0: "Swarm", 1: "Justified", H: "Skill Link"},
		heightm: 1.7,
		weightkg: 62.5,
		prevo: "heracross",
	},
	scythermegarevolution: {
		inherit: true,
		evos: ["Scizor", "Scibrawl"],
	},
	scibrawlmegarevolution: {
		num: 270007,
		name: "Scibrawl-Megarevolution",
		types: ["Bug","Dark"],
		baseStats: {hp: 70, atk: 130, def: 60, spa: 55, spd: 60, spe: 125},
		abilities: {0: "Swarm", 1: "Technician", H: "Defiant"},
		heightm: 2,
		weightkg: 125,
		prevo: "scyther",
	},
	ampharosmegarevolution: {
		inherit: true,
		evos: ["Ramjestic"],
	},
	ramjesticmegarevolution: {
		num: 270008,
		name: "Ramjestic-Megarevolution",
		types: ["Electric","Fairy"],
		baseStats: {hp: 95, atk: 95, def: 100, spa: 125, spd: 90, spe: 45},
		abilities: {0: "Fluffy", H: "Mold Breaker"},
		heightm: 1.4,
		weightkg: 61.5,
		prevo: "ampharos",
	},
	houndoommegarevolution: {
		inherit: true,
		evos: ["Houndread"],
	},
	houndreadmegarevolution: {
		num: 270009,
		name: "Houndread-Megarevolution",
		types: ["Dark","Fire"],
		baseStats: {hp: 85, atk: 100, def: 50, spa: 120, spd: 80, spe: 105},
		abilities: {0: "Strong Jaw", 1: "Flash Fire", H: "Solar Power"},
		heightm: 1.9,
		weightkg: 49.5,
		prevo: "houndoom",
	},
	banettemegarevolution: {
		inherit: true,
		evos: ["Zipette"],
	},
	zipettemegarevolution: {
		num: 270010,
		name: "Zipette-Megarevolution",
		types: ["Ghost","Dark"],
		baseStats: {hp: 74, atk: 115, def: 75, spa: 93, spd: 93, spe: 75},
		abilities: {0: "Prankster", 1: "Frisk", H: "Cursed Body"},
		heightm: 1.2,
		weightkg: 13,
		prevo: "banette",
	},
	medichammegarevolution: {
		inherit: true,
		evos: ["Mediscend"],
	},
	mediscendmegarevolution: {
		num: 270011,
		name: "Mediscend-Megarevolution",
		types: ["Fighting","Psychic"],
		baseStats: {hp: 70, atk: 75, def: 80, spa: 65, spd: 80, spe: 100},
		abilities: {0: "Pure Power", H: "Telepathy"},
		heightm: 1.3,
		weightkg: 31.5,
		prevo: "medicham",
	},
	pupitarmegarevolution: {
		inherit: true,
		evos: ["Tyranitar", "Stalagmitar"],
	},
	stalagmitarmegarevolution: {
		num: 270012,
		name: "Stalagmitar-Megarevolution",
		types: ["Rock","Ground"],
		baseStats: {hp: 100, atk: 100, def: 95, spa: 134, spd: 120, spe: 51},
		abilities: {0: "Sand Stream", H: "Sturdy"},
		heightm: 2.5,
		weightkg: 255,
		prevo: "pupitar",
	},
	shelgonmegarevolution: {
		inherit: true,
		evos: ["Salamence", "Starietta"],
	},
	stariettamegarevolution: {
		num: 270013,
		name: "Starietta-Megarevolution",
		types: ["Dragon","Flying"],
		baseStats: {hp: 95, atk: 80, def: 105, spa: 95, spd: 125, spe: 100},
		abilities: {0: "Aerilate", H: "Overcoat"},
		heightm: 1.8,
		weightkg: 112.6,
		prevo: "shelgon",
	},
	metangmegarevolution: {
		inherit: true,
		evos: ["Metagross", "Metamalgam"],
	},
	metamalgammegarevolution: {
		num: 270014,
		name: "Metamalgam-Megarevolution",
		types: ["Steel","Psychic"],
		baseStats: {hp: 95, atk: 105, def: 110, spa: 105, spd: 130, spe: 55},
		abilities: {0: "Tough Claws", H: "Analytic"},
		heightm: 2.5,
		weightkg: 942.9,
		prevo: "metang",
	},
	gabitemegarevolution: {
		inherit: true,
		evos: ["Garchomp", "Scawsert"],
	},
	scawsertmegarevolution: {
		num: 270015,
		name: "Scawsert-Megarevolution",
		types: ["Dragon","Fighting"],
		baseStats: {hp: 90, atk: 100, def: 70, spa: 130, spd: 109, spe: 101},
		abilities: {0: "Sand Force", H: "Tough Claws"},
		heightm: 1.9,
		weightkg: 95,
		prevo: "gabite",
	},
	slowpokemegarevolution: {
		inherit: true,
		evos: ["Slowbro", "Slowking", "Slowclone"],
	},
	slowclonemegarevolution: {
		num: 270016,
		name: "Slowclone-Megarevolution",
		types: ["Water"],
		baseStats: {hp: 120, atk: 100, def: 100, spa: 75, spd: 75, spe: 20},
		abilities: {0: "Shell Armor", 1: "Oblivious", H: "Water Veil"},
		heightm: 2,
		weightkg: 120,
		prevo: "slowpoke",
	},
	gyaradosmegarevolution: {
		inherit: true,
		evos: ["Lordiathan"],
	},
	lordiathanmegarevolution: {
		num: 270017,
		name: "Lordiathan-Megarevolution",
		types: ["Water","Flying"],
		baseStats: {hp: 100, atk: 135, def: 100, spa: 55, spd: 90, spe: 90},
		abilities: {0: "Mold Breaker", H: "Dragon's Maw"},
		heightm: 6.5,
		weightkg: 305,
		prevo: "gyarados",
	},
	sharpedomegarevolution: {
		inherit: true,
		evos: ["Gnashark"],
	},
	gnasharkmegarevolution: {
		num: 270018,
		name: "Gnashark-Megarevolution",
		types: ["Water","Dark"],
		baseStats: {hp: 75, atk: 124, def: 45, spa: 111, spd: 45, spe: 110},
		abilities: {0: "Strong Jaw", H: "No Guard"},
		heightm: 2.5,
		weightkg: 130.3,
		prevo: "sharpedo",
	},
	gengarmegarevolution: {
		inherit: true,
		evos: ["Dimster"],
	},
	dimstermegarevolution: {
		num: 270019,
		name: "Dimster-Megarevolution",
		types: ["Ghost","Steel"],
		baseStats: {hp: 70, atk: 65, def: 70, spa: 130, spd: 85, spe: 110},
		abilities: {0: "Shadow Tag", H: "Emergency Exit"},
		heightm: 1.4,
		weightkg: 40.5,
		prevo: "gengar",
	},
	kangatwomegarevolution: {
		num: 270020,
		name: "Kangatwo-Megarevolution",
		types: ["Normal","Ground"],
		baseStats: {hp: 120, atk: 108, def: 81, spa: 30, spd: 90, spe: 91},
		abilities: {0: "Early Bird", 1: "Sap Sipper", H: "Parental Bond"},
		heightm: 2.2,
		weightkg: 100,
	},
	lucariomegarevolution: {
		inherit: true,
		evos: ["Kylario"],
	},
	kylariomegarevolution: {
		num: 270021,
		name: "Kylario-Megarevolution",
		types: ["Fighting","Steel"],
		baseStats: {hp: 75, atk: 120, def: 105, spa: 105, spd: 70, spe: 80},
		abilities: {0: "Steadfast", 1: "Inner Focus", H: "Adaptability"},
		heightm: 1.3,
		weightkg: 57.5,
		prevo: "lucario",
	},
	glaliemegarevolution: {
		inherit: true,
		evos: ["Horrfrost"],
	},
	horrfrostmegarevolution: {
		num: 270022,
		name: "Horrfrost-Megarevolution",
		types: ["Ice","Ground"],
		baseStats: {hp: 80, atk: 95, def: 75, spa: 95, spd: 65, spe: 110},
		abilities: {0: "Inner Focus", 1: "Ice Body", H: "Refrigerate"},
		heightm: 2.1,
		weightkg: 350.2,
		prevo: "glalie",
	},
	abomasnowmegarevolution: {
		inherit: true,
		evos: ["Blizzarex"],
	},
	blizzarexmegarevolution: {
		num: 270023,
		name: "Blizzarex-Megarevolution",
		types: ["Grass","Ice"],
		baseStats: {hp: 90, atk: 130, def: 85, spa: 99, spd: 85, spe: 55},
		abilities: {0: "Snow Warning", H: "Grassy Surge"},
		heightm: 2.7,
		weightkg: 185.0,
		prevo: "abomasnow",
	},
	audinomegarevolution: {
		inherit: true,
		evos: ["Nurseheary"],
	},
	nursehearymegarevolution: {
		num: 270024,
		name: "Nurseheary-Megarevolution",
		types: ["Normal","Fairy"],
		baseStats: {hp: 105, atk: 75, def: 90, spa: 75, spd: 90, spe: 60},
		abilities: {0: "Healer", 1: "Regenerator", H: "Triage"},
		heightm: 1.5,
		weightkg: 32.0,
		prevo: "audino",
	},
	aggronmegarevolution: {
		inherit: true,
		evos: ["Pulgasaron"],
	},
	pulgasaronmegarevolution: {
		num: 270025,
		name: "Pulgasaron-Megarevolution",
		types: ["Steel"],
		baseStats: {hp: 80, atk: 115, def: 185, spa: 60, spd: 60, spe: 70},
		abilities: {0: "Sturdy", 1: "Filter", H: "Heavy Metal"},
		heightm: 2.2,
		weightkg: 395.0,
		prevo: "aggron",
	},
	onixmegarevolution: {
		inherit: true,
		evos: ["Steelix", "Orichalix"],
	},
	orichalixmegarevolution: {
		num: 270026,
		name: "Orichalix-Megarevolution",
		types: ["Steel","Dragon"],
		baseStats: {hp: 75, atk: 75, def: 160, spa: 75, spd: 65, spe: 110},
		abilities: {0: "Sand Force", 1: "Sturdy", H: "Rough Skin"},
		heightm: 10.5,
		weightkg: 740.0,
		prevo: "onix",
	},
	cameruptmegarevolution: {
		inherit: true,
		evos: ["Humpeii"],
	},
	humpeiimegarevolution: {
		num: 270027,
		name: "Humpeii-Megarevolution",
		types: ["Fire","Ground"],
		baseStats: {hp: 100, atk: 100, def: 70, spa: 110, spd: 75, spe: 55},
		abilities: {0: "Magma Armor", 1: "Solid Rock", H: "Sheer Force"},
		heightm: 2.5,
		weightkg: 320.5,
		prevo: "camerupt",
	},
	sableyemegarevolution: {
		inherit: true,
		evos: ["Sabsidian"],
	},
	sabsidianmegarevolution: {
		num: 270028,
		name: "Sabsidian-Megarevolution",
		types: ["Dark","Ghost"],
		baseStats: {hp: 70, atk: 85, def: 130, spa: 75, spd: 75, spe: 25},
		abilities: {0: "Keen Eye", 1: "Stall", H: "Magic Bounce"},
		heightm: 0.5,
		weightkg: 161.0,
		prevo: "sableye",
	},	
	gardevoirmegarevolution: {
		inherit: true,
		evos: ["Gracefuld"],
	},
	gracefuldmegarevolution: {
		num: 270029,
		name: "Gracefuld-Megarevolution",
		types: ["Psychic","Fairy"],
		baseStats: {hp: 70, atk: 55, def: 78, spa: 130, spd: 125, spe: 100},
		abilities: {0: "Pixilate", 1: "Trace", H: "Queenly Majesty"},
		heightm: 1.6,
		weightkg: 48.4,
		prevo: "gardevoir",
	},	
	altariamegarevolution: {
		inherit: true,
		evos: ["Baritaria"],
	},
	baritariamegarevolution: {
		num: 270030,
		name: "Baritaria-Megarevolution",
		types: ["Dragon","Fairy"],
		baseStats: {hp: 75, atk: 100, def: 95, spa: 60, spd: 130, spe: 80},
		abilities: {0: "Natural Cure", H: "Pixilate"},
		heightm: 1.5,
		weightkg: 20.6,
		prevo: "altaria",
	},
	mawilemegarevolution: {
		inherit: true,
		evos: ["Mawtale"],
	},
	mawtalemegarevolution: {
		num: 270031,
		name: "Mawtale-Megarevolution",
		types: ["Fairy","Dark"],
		baseStats: {hp: 70, atk: 60, def: 125, spa: 110, spd: 70, spe: 25},
		abilities: {0: "Sheer Force", 1: "Intimidate", H: "Huge Power"},
		heightm: 1.0,
		weightkg: 23.5,
		prevo: "mawile",
	},
	beedrillmegarevolution: {
		inherit: true,
		evos: ["Abhornet"],
	},
	abhornetmegarevolution: {
		num: 270032,
		name: "Abhornet-Megarevolution",
		types: ["Bug","Poison"],
		baseStats: {hp: 65, atk: 120, def: 50, spa: 15, spd: 80, spe: 135},
		abilities: {0: "Adaptability", H: "Sniper"},
		heightm: 1.4,
		weightkg: 40.5,
		prevo: "beedrill",
	},
	pidgeotmegarevolution: {
		inherit: true,
		evos: ["Pidgeastroph"],
	},
	pidgeastrophmegarevolution: {
		num: 270033,
		name: "Pidgeastroph-Megarevolution",
		types: ["Fire","Flying"],
		baseStats: {hp: 83, atk: 75, def: 75, spa: 110, spd: 75, spe: 121},
		abilities: {0: "No Guard", 1: "Tangled Feet", H: "Gale Wings"},
		heightm: 2.2,
		weightkg: 50.5,
		prevo: "pidgeot",
	},
	alakazammegarevolution: {
		inherit: true,
		evos: ["Hocusfocus"],
	},
	hocusfocusmegarevolution: {
		num: 270034,
		name: "Hocusfocus-Megarevolution",
		types: ["Psychic"],
		baseStats: {hp: 66, atk: 51, def: 46, spa: 137, spd: 108, spe: 122},
		abilities: {0: "Trace", 1: "Levitate", H: "Magic Guard"},
		heightm: 1.2,
		weightkg: 48.0,
		prevo: "alakazam",
	},
	aerodactylmegarevolution: {
		inherit: true,
		evos: ["Lophodactylus"],
	},
	lophodactylusmegarevolution: {
		num: 270035,
		name: "Lophodactylus-Megarevolution",
		types: ["Rock","Flying"],
		baseStats: {hp: 80, atk: 105, def: 75, spa: 60, spd: 75, spe: 140},
		abilities: {0: "Rock Head", 1: "Unnerve", H: "Tough Claws"},
		heightm: 2.1,
		weightkg: 79.0,
		prevo: "aerodactyl",
	},
	manectricmegarevolution: {
		inherit: true,
		evos: ["Veloshock"],
	},
	veloshockmegarevolution: {
		num: 270036,
		name: "Veloshock-Megarevolution",
		types: ["Electric","Fire"],
		baseStats: {hp: 70, atk: 65, def: 90, spa: 110, spd: 60, spe: 130},
		abilities: {0: "Static", 1: "Lightning Rod", H: "Intimidate"},
		heightm: 1.8,
		weightkg: 44.0,
		prevo: "manectric",
	},
	absolmegarevolution: {
		inherit: true,
		evos: ["Abyssoil"],
	},
	abyssoilmegarevolution: {
		num: 270037,
		name: "Abyssoil-Megarevolution",
		types: ["Dark","Ground"],
		baseStats: {hp: 70, atk: 125, def: 60, spa: 100, spd: 60, spe: 110},
		abilities: {0: "Magic Bounce", 1: "Unaware", H: "Justified"},
		heightm: 1.2,
		weightkg: 49.0,
		prevo: "absol",
	},
	lopunnymegarevolution: {
		inherit: true,
		evos: ["Harelock"],
	},
	harelockmegarevolution: {
		num: 270038,
		name: "Harelock-Megarevolution",
		types: ["Normal"],
		baseStats: {hp: 90, atk: 120, def: 55, spa: 54, spd: 96, spe: 110},
		abilities: {0: "Scrappy", 1: "Limber", H: "Fur Coat"},
		heightm: 1.3,
		weightkg: 28.3,
		prevo: "lopunny",
	},
	gallademegarevolution: {
		inherit: true,
		evos: ["Valiadin"],
	},
	valiadinmegarevolution: {
		num: 270039,
		name: "Valiadin-Megarevolution",
		types: ["Psychic","Fighting"],
		baseStats: {hp: 68, atk: 135, def: 75, spa: 65, spd: 115, spe: 100},
		abilities: {0: "Justified", 1: "Inner Focus", H: "Technician"},
		heightm: 1.6,
		weightkg: 56.4,
		prevo: "gallade",
	},
	celariasmegarevolution: {
		num: 270040,
		name: "Celarias-Megarevolution",
		types: ["Dragon","Water"],
		baseStats: {hp: 80, atk: 80, def: 130, spa: 90, spd: 110, spe: 110},
		abilities: {0: "Levitate"},
		heightm: 1.8,
		weightkg: 52.0,
	},
	celariosmegarevolution: {
		num: 270041,
		name: "Celarios-Megarevolution",
		types: ["Dragon","Electric"],
		baseStats: {hp: 80, atk: 110, def: 80, spa: 110, spd: 90, spe: 130},
		abilities: {0: "Levitate"},
		heightm: 2.3,
		weightkg: 70.0,
	},
	diachessmegarevolution: {
		num: 270042,
		name: "Diachess-Megarevolution",
		types: ["Rock","Fairy"],
		baseStats: {hp: 90, atk: 100, def: 100, spa: 125, spd: 90, spe: 95},
		abilities: {0: "Magic Bounce"},
		heightm: 1.1,
		weightkg: 27.8,
	},
	sceptilemegarevolution: {
		inherit: true,
		evos: ["Jungyle"],
	},
	jungylemegarevolution: {
		num: 270043,
		name: "Jungyle-Megarevolution",
		types: ["Grass","Dragon"],
		baseStats: {hp: 70, atk: 110, def: 75, spa: 140, spd: 75, spe: 110},
		abilities: {0: "Overgrow", H: "Lightning Rod"},
		heightm: 1.9,
		weightkg: 55.2,
		prevo: "sceptile",
	},
	blazikenmegarevolution: {
		inherit: true,
		evos: ["Conflagraken"],
	},
	conflagrakenmegarevolution: {
		num: 270044,
		name: "Conflagraken-Megarevolution",
		types: ["Fire","Fighting"],
		baseStats: {hp: 80, atk: 125, def: 75, spa: 135, spd: 80, spe: 80},
		abilities: {0: "Blaze", H: "Speed Boost"},
		heightm: 1.9,
		weightkg: 52.0,
		prevo: "blaziken",
	},
	swampertmegarevolution: {
		inherit: true,
		evos: ["Burrowcean"],
	},
	burrowceanmegarevolution: {
		num: 270045,
		name: "Burrowcean-Megarevolution",
		types: ["Water","Ground"],
		baseStats: {hp: 110, atk: 130, def: 95, spa: 85, spd: 95, spe: 70},
		abilities: {0: "Torrent", H: "Swift Swim"},
		heightm: 1.9,
		weightkg: 102.0,
		prevo: "swampert",
	},
	cerebrawnmegarevolution: {
		num: 270046,
		name: "Cerebrawn-Megarevolution",
		types: ["Psychic","Fighting"],
		baseStats: {hp: 106, atk: 165, def: 135, spa: 139, spd: 95, spe: 90},
		abilities: {0: "Steadfast", H: "Stamina"},
		heightm: 2.3,
		weightkg: 127.0,
	},
	corruptoomegarevolution: {
		num: 270046,
		name: "Corruptoo-Megarevolution",
		types: ["Psychic","Poison"],
		baseStats: {hp: 106, atk: 90, def: 90, spa: 160, spd: 125, spe: 159},
		abilities: {0: "Insomnia", H: "Corrosion"},
		heightm: 1.5,
		weightkg: 33.0,
	},
	deltraymegarevolution: {
		num: 270047,
		name: "Deltray-Megarevolution",
		types: ["Dragon","Flying"],
		baseStats: {hp: 115, atk: 160, def: 90, spa: 160, spd: 90, spe: 115},
		abilities: {0: "Delta Stream"},
		heightm: 10.8,
		weightkg: 392.0,
	},
}; exports.Pokedex = Pokedex;
