"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const FormatsData = {
	bulbasaurroseredirisblue: {
		randomBattleMoves: ["sleeppowder", "bodyslam"],
		essentialMove: "razorleaf",
		exclusiveMoves: ["megadrain", "swordsdance", "swordsdance"],
		tier: "Roseredirisblue LC",
	},
	ivysaurroseredirisblue: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "bodyslam"],
		essentialMove: "razorleaf",
		tier: "Roseredirisblue NFE",
	},
	venusaurroseredirisblue: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "bodyslam", "hyperbeam"],
		essentialMove: "razorleaf",
		tier: "Roseredirisblue UU",
	},
	charmanderroseredirisblue: {
		randomBattleMoves: ["bodyslam", "slash"],
		essentialMove: "fireblast",
		exclusiveMoves: ["counter", "seismictoss"],
		comboMoves: ["swordsdance", "bodyslam", "submission", "fireblast"],
		tier: "Roseredirisblue LC",
	},
	charmeleonroseredirisblue: {
		randomBattleMoves: ["bodyslam", "slash"],
		essentialMove: "fireblast",
		exclusiveMoves: ["counter", "swordsdance"],
		comboMoves: ["swordsdance", "bodyslam", "submission", "fireblast"],
		tier: "Roseredirisblue NFE",
	},
	charizardroseredirisblue: {
		randomBattleMoves: ["earthquake", "bodyslam", "slash"],
		essentialMove: "fireblast",
		comboMoves: ["swordsdance", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	squirtleroseredirisblue: {
		randomBattleMoves: ["blizzard", "seismictoss", "surf", "hydropump"],
		exclusiveMoves: ["counter", "bodyslam"],
		tier: "Roseredirisblue LC",
	},
	wartortleroseredirisblue: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam", "hydropump"],
		exclusiveMoves: ["counter", "rest", "seismictoss"],
		tier: "Roseredirisblue NFE",
	},
	blastoiseroseredirisblue: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam", "hydropump"],
		exclusiveMoves: ["earthquake", "rest"],
		tier: "Roseredirisblue UU",
	},
	caterpieroseredirisblue: {
		randomBattleMoves: ["stringshot", "tackle"],
		tier: "Roseredirisblue LC",
	},
	metapodroseredirisblue: {
		randomBattleMoves: ["stringshot", "tackle", "harden"],
		tier: "Roseredirisblue NFE",
	},
	butterfreeroseredirisblue: {
		randomBattleMoves: ["psychic", "sleeppowder", "stunspore"],
		exclusiveMoves: ["megadrain", "psywave"],
		tier: "Roseredirisblue UU",
	},
	weedleroseredirisblue: {
		randomBattleMoves: ["poisonsting", "stringshot"],
		tier: "Roseredirisblue LC",
	},
	kakunaroseredirisblue: {
		randomBattleMoves: ["poisonsting", "stringshot", "harden"],
		tier: "Roseredirisblue NFE",
	},
	beedrillroseredirisblue: {
		randomBattleMoves: ["twineedle", "megadrain", "swordsdance"],
		exclusiveMoves: ["doubleedge", "doubleedge", "hyperbeam"],
		comboMoves: ["twineedle", "hyperbeam", "swordsdance", "agility"],
		tier: "Roseredirisblue UU",
	},
	pidgeyroseredirisblue: {
		randomBattleMoves: ["agility", "skyattack", "doubleedge"],
		exclusiveMoves: ["reflect", "sandattack", "mirrormove", "mimic", "toxic", "substitute"],
		tier: "Roseredirisblue LC",
	},
	pidgeottoroseredirisblue: {
		randomBattleMoves: ["agility", "skyattack", "doubleedge"],
		exclusiveMoves: ["reflect", "sandattack", "mirrormove", "mimic", "toxic", "substitute"],
		tier: "Roseredirisblue NFE",
	},
	pidgeotroseredirisblue: {
		randomBattleMoves: ["agility", "hyperbeam", "doubleedge"],
		exclusiveMoves: ["reflect", "sandattack", "mirrormove", "mimic", "toxic", "skyattack", "skyattack", "substitute"],
		tier: "Roseredirisblue UU",
	},
	rattataroseredirisblue: {
		randomBattleMoves: ["bodyslam", "blizzard", "thunderbolt"],
		essentialMove: "superfang",
		tier: "Roseredirisblue LC",
	},
	raticateroseredirisblue: {
		randomBattleMoves: ["bodyslam", "hyperbeam", "blizzard"],
		essentialMove: "superfang",
		tier: "Roseredirisblue UU",
	},
	spearowroseredirisblue: {
		randomBattleMoves: ["drillpeck", "doubleedge", "agility"],
		exclusiveMoves: ["leer", "toxic", "mirrormove", "mimic", "substitute"],
		tier: "Roseredirisblue LC",
	},
	fearowroseredirisblue: {
		randomBattleMoves: ["drillpeck", "doubleedge", "hyperbeam", "agility"],
		eventPokemon: [
			{"generation": 1, "level": 20, "moves": ["growl", "leer", "furyattack", "payday"]},
		],
		tier: "Roseredirisblue UU",
	},
	ekansroseredirisblue: {
		randomBattleMoves: ["glare", "earthquake", "bodyslam", "rockslide"],
		tier: "Roseredirisblue LC",
	},
	arbokroseredirisblue: {
		randomBattleMoves: ["earthquake", "glare", "hyperbeam"],
		exclusiveMoves: ["bodyslam", "rockslide"],
		tier: "Roseredirisblue UU",
	},
	pikachuroseredirisblue: {
		randomBattleMoves: ["thunderwave", "surf"],
		essentialMove: "thunderbolt",
		exclusiveMoves: ["bodyslam", "thunder", "agility", "seismictoss"],
		eventPokemon: [
			{"generation": 1, "level": 5, "moves": ["surf"]},
			{"generation": 1, "level": 5, "moves": ["fly"]},
			{"generation": 1, "level": 5, "moves": ["thundershock", "growl", "surf"]},
		],
		tier: "Roseredirisblue LC",
	},
	raichuroseredirisblue: {
		randomBattleMoves: ["thunderwave", "surf"],
		essentialMove: "thunderbolt",
		exclusiveMoves: ["bodyslam", "thunder", "agility", "seismictoss", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	sandshrewroseredirisblue: {
		randomBattleMoves: ["swordsdance", "bodyslam", "rockslide"],
		essentialMove: "earthquake",
		tier: "Roseredirisblue LC",
	},
	sandslashroseredirisblue: {
		randomBattleMoves: ["swordsdance", "bodyslam", "rockslide"],
		essentialMove: "earthquake",
		tier: "Roseredirisblue UU",
	},
	nidoranfroseredirisblue: {
		randomBattleMoves: ["bodyslam", "blizzard", "thunderbolt"],
		exclusiveMoves: ["doubleedge", "doublekick"],
		tier: "Roseredirisblue LC",
	},
	nidorinaroseredirisblue: {
		randomBattleMoves: ["bodyslam", "blizzard", "thunderbolt"],
		exclusiveMoves: ["bubblebeam", "doublekick", "doubleedge"],
		tier: "Roseredirisblue NFE",
	},
	nidoqueenroseredirisblue: {
		randomBattleMoves: ["blizzard", "thunderbolt", "bodyslam"],
		essentialMove: "earthquake",
		tier: "Roseredirisblue UU",
	},
	nidoranmroseredirisblue: {
		randomBattleMoves: ["bodyslam", "blizzard", "thunderbolt"],
		exclusiveMoves: ["doubleedge", "doublekick"],
		tier: "Roseredirisblue LC",
	},
	nidorinoroseredirisblue: {
		randomBattleMoves: ["bodyslam", "blizzard", "thunderbolt"],
		exclusiveMoves: ["bubblebeam", "doublekick", "doubleedge"],
		tier: "Roseredirisblue NFE",
	},
	nidokingroseredirisblue: {
		randomBattleMoves: ["blizzard", "bodyslam"],
		essentialMove: "earthquake",
		exclusiveMoves: ["thunder", "thunderbolt", "rockslide"],
		tier: "Roseredirisblue UU",
	},
	clefairyroseredirisblue: {
		randomBattleMoves: ["bodyslam", "thunderwave", "thunderbolt"],
		essentialMove: "blizzard",
		exclusiveMoves: ["counter", "sing", "sing", "psychic", "seismictoss"],
		tier: "Roseredirisblue LC",
	},
	clefableroseredirisblue: {
		randomBattleMoves: ["bodyslam", "thunderwave", "thunderbolt"],
		essentialMove: "blizzard",
		exclusiveMoves: ["counter", "sing", "sing", "psychic", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	vulpixroseredirisblue: {
		randomBattleMoves: ["bodyslam", "confuseray", "fireblast"],
		exclusiveMoves: ["flamethrower", "reflect", "substitute"],
		tier: "Roseredirisblue LC",
	},
	ninetalesroseredirisblue: {
		randomBattleMoves: ["bodyslam", "confuseray", "fireblast"],
		exclusiveMoves: ["flamethrower", "reflect", "hyperbeam", "substitute"],
		tier: "Roseredirisblue UU",
	},
	jigglypuffroseredirisblue: {
		randomBattleMoves: ["thunderwave", "bodyslam", "seismictoss", "blizzard"],
		exclusiveMoves: ["counter", "sing"],
		tier: "Roseredirisblue LC",
	},
	wigglytuffroseredirisblue: {
		randomBattleMoves: ["thunderwave", "bodyslam", "blizzard"],
		exclusiveMoves: ["counter", "sing", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	zubatroseredirisblue: {
		randomBattleMoves: ["screech", "confuseray", "doubleedge", "megadrain"],
		tier: "Roseredirisblue LC",
	},
	golbatroseredirisblue: {
		randomBattleMoves: ["confuseray", "doubleedge", "hyperbeam", "megadrain"],
		tier: "Roseredirisblue UU",
	},
	oddishroseredirisblue: {
		randomBattleMoves: ["sleeppowder", "doubleedge"],
		essentialMove: "megadrain",
		exclusiveMoves: ["swordsdance", "stunspore", "stunspore"],
		tier: "Roseredirisblue LC",
	},
	gloomroseredirisblue: {
		randomBattleMoves: ["sleeppowder", "doubleedge"],
		essentialMove: "megadrain",
		exclusiveMoves: ["swordsdance", "stunspore", "stunspore"],
		tier: "Roseredirisblue NFE",
	},
	vileplumeroseredirisblue: {
		randomBattleMoves: ["sleeppowder", "bodyslam", "stunspore", "swordsdance"],
		essentialMove: "megadrain",
		tier: "Roseredirisblue UU",
	},
	parasroseredirisblue: {
		randomBattleMoves: ["bodyslam", "megadrain"],
		essentialMove: "spore",
		exclusiveMoves: ["stunspore", "stunspore", "swordsdance", "growth", "slash"],
		tier: "Roseredirisblue LC",
	},
	parasectroseredirisblue: {
		randomBattleMoves: ["bodyslam", "megadrain"],
		essentialMove: "spore",
		exclusiveMoves: ["stunspore", "stunspore", "swordsdance", "growth", "slash", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	venonatroseredirisblue: {
		randomBattleMoves: ["psychic", "sleeppowder", "stunspore"],
		exclusiveMoves: ["megadrain", "psywave", "doubleedge"],
		tier: "Roseredirisblue LC",
	},
	venomothroseredirisblue: {
		randomBattleMoves: ["psychic", "sleeppowder", "stunspore"],
		exclusiveMoves: ["megadrain", "megadrain", "doubleedge"],
		tier: "Roseredirisblue UU",
	},
	diglettroseredirisblue: {
		randomBattleMoves: ["slash", "rockslide", "bodyslam"],
		essentialMove: "earthquake",
		tier: "Roseredirisblue LC",
	},
	dugtrioroseredirisblue: {
		randomBattleMoves: ["slash", "rockslide", "bodyslam"],
		essentialMove: "earthquake",
		tier: "Roseredirisblue UU",
	},
	meowthroseredirisblue: {
		randomBattleMoves: ["bubblebeam", "bodyslam"],
		essentialMove: "slash",
		exclusiveMoves: ["thunder", "thunderbolt"],
		tier: "Roseredirisblue LC",
	},
	persianroseredirisblue: {
		randomBattleMoves: ["bubblebeam", "bodyslam"],
		essentialMove: "slash",
		exclusiveMoves: ["thunderbolt", "thunder", "hyperbeam", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	psyduckroseredirisblue: {
		randomBattleMoves: ["blizzard", "amnesia"],
		essentialMove: "surf",
		exclusiveMoves: ["bodyslam", "seismictoss", "rest", "hydropump"],
		tier: "Roseredirisblue LC",
	},
	golduckroseredirisblue: {
		randomBattleMoves: ["blizzard", "amnesia"],
		essentialMove: "surf",
		exclusiveMoves: ["bodyslam", "seismictoss", "rest", "hydropump"],
		tier: "Roseredirisblue UU",
	},
	mankeyroseredirisblue: {
		randomBattleMoves: ["submission", "rockslide", "bodyslam"],
		exclusiveMoves: ["counter", "megakick"],
		tier: "Roseredirisblue LC",
	},
	primeaperoseredirisblue: {
		randomBattleMoves: ["submission", "rockslide", "bodyslam"],
		exclusiveMoves: ["counter", "hyperbeam", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	growlitheroseredirisblue: {
		randomBattleMoves: ["fireblast", "bodyslam", "flamethrower", "reflect"],
		tier: "Roseredirisblue LC",
	},
	arcanineroseredirisblue: {
		randomBattleMoves: ["fireblast", "bodyslam", "hyperbeam"],
		exclusiveMoves: ["flamethrower", "reflect"],
		tier: "Roseredirisblue UU",
	},
	poliwagroseredirisblue: {
		randomBattleMoves: ["blizzard", "surf"],
		essentialMove: "amnesia",
		exclusiveMoves: ["psychic", "hypnosis", "hypnosis"],
		tier: "Roseredirisblue LC",
	},
	poliwhirlroseredirisblue: {
		randomBattleMoves: ["blizzard", "surf"],
		essentialMove: "amnesia",
		exclusiveMoves: ["psychic", "hypnosis", "hypnosis", "counter"],
		tier: "Roseredirisblue NFE",
	},
	poliwrathroseredirisblue: {
		randomBattleMoves: ["bodyslam", "earthquake", "submission", "blizzard"],
		essentialMove: "surf",
		exclusiveMoves: ["psychic", "hypnosis", "hypnosis"],
		comboMoves: ["amnesia", "blizzard"],
		tier: "Roseredirisblue UU",
	},
	abraroseredirisblue: {
		randomBattleMoves: ["psychic", "thunderwave", "seismictoss"],
		exclusiveMoves: ["reflect", "counter"],
		tier: "Roseredirisblue LC",
	},
	kadabraroseredirisblue: {
		randomBattleMoves: ["psychic", "thunderwave", "recover"],
		exclusiveMoves: ["reflect", "reflect", "counter", "seismictoss", "seismictoss"],
		tier: "Roseredirisblue UU",
	},
	alakazamroseredirisblue: {
		randomBattleMoves: ["psychic", "thunderwave", "recover"],
		exclusiveMoves: ["reflect", "reflect", "counter", "seismictoss", "seismictoss"],
		tier: "Roseredirisblue OU",
	},
	machoproseredirisblue: {
		randomBattleMoves: ["bodyslam", "earthquake", "submission"],
		exclusiveMoves: ["counter", "rockslide", "rockslide"],
		tier: "Roseredirisblue LC",
	},
	machokeroseredirisblue: {
		randomBattleMoves: ["bodyslam", "earthquake", "submission"],
		exclusiveMoves: ["counter", "rockslide", "rockslide"],
		tier: "Roseredirisblue NFE",
	},
	machamproseredirisblue: {
		randomBattleMoves: ["bodyslam", "earthquake", "submission"],
		exclusiveMoves: ["counter", "rockslide", "rockslide", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	bellsproutroseredirisblue: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "doubleedge", "stunspore"],
		essentialMove: "razorleaf",
		tier: "Roseredirisblue LC",
	},
	weepinbellroseredirisblue: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "doubleedge", "stunspore"],
		essentialMove: "razorleaf",
		tier: "Roseredirisblue NFE",
	},
	victreebelroseredirisblue: {
		randomBattleMoves: ["sleeppowder", "bodyslam", "stunspore"],
		essentialMove: "razorleaf",
		comboMoves: ["swordsdance", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	tentacoolroseredirisblue: {
		randomBattleMoves: ["barrier", "hydropump", "surf"],
		essentialMove: "blizzard",
		exclusiveMoves: ["megadrain", "megadrain"],
		comboMoves: ["surf", "hydropump"],
		tier: "Roseredirisblue LC",
	},
	tentacruelroseredirisblue: {
		randomBattleMoves: ["blizzard", "hydropump", "surf", "hyperbeam"],
		essentialMove: "swordsdance",
		tier: "Roseredirisblue UU",
	},
	geoduderoseredirisblue: {
		randomBattleMoves: ["bodyslam", "earthquake", "rockslide", "explosion"],
		tier: "Roseredirisblue LC",
	},
	gravelerroseredirisblue: {
		randomBattleMoves: ["bodyslam", "earthquake", "rockslide", "explosion"],
		tier: "Roseredirisblue UU",
	},
	golemroseredirisblue: {
		randomBattleMoves: ["explosion", "bodyslam", "earthquake", "rockslide"],
		tier: "Roseredirisblue OU",
	},
	ponytaroseredirisblue: {
		randomBattleMoves: ["fireblast", "agility", "bodyslam", "reflect"],
		tier: "Roseredirisblue LC",
	},
	rapidashroseredirisblue: {
		randomBattleMoves: ["fireblast", "agility", "bodyslam", "hyperbeam"],
		eventPokemon: [
			{"generation": 1, "level": 40, "moves": ["ember", "firespin", "stomp", "payday"]},
		],
		tier: "Roseredirisblue UU",
	},
	slowpokeroseredirisblue: {
		randomBattleMoves: ["earthquake", "surf"],
		essentialMove: "thunderwave",
		exclusiveMoves: ["blizzard", "psychic", "rest"],
		comboMoves: ["amnesia", "surf"],
		tier: "Roseredirisblue LC",
	},
	slowbroroseredirisblue: {
		randomBattleMoves: ["amnesia", "surf", "thunderwave"],
		exclusiveMoves: ["rest", "rest", "psychic", "blizzard"],
		tier: "Roseredirisblue OU",
	},
	magnemiteroseredirisblue: {
		randomBattleMoves: ["thunderwave", "thunder", "thunderbolt"],
		exclusiveMoves: ["mimic", "doubleedge", "toxic", "substitute"],
		tier: "Roseredirisblue LC",
	},
	magnetonroseredirisblue: {
		randomBattleMoves: ["thunderwave", "thunder", "thunderbolt"],
		exclusiveMoves: ["mimic", "doubleedge", "toxic", "hyperbeam", "hyperbeam", "substitute"],
		tier: "Roseredirisblue UU",
	},
	farfetchdroseredirisblue: {
		randomBattleMoves: ["agility", "swordsdance", "bodyslam"],
		essentialMove: "slash",
		tier: "Roseredirisblue UU",
	},
	doduoroseredirisblue: {
		randomBattleMoves: ["drillpeck", "bodyslam", "agility", "doubleedge"],
		tier: "Roseredirisblue LC",
	},
	dodrioroseredirisblue: {
		randomBattleMoves: ["drillpeck", "bodyslam", "agility", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	seelroseredirisblue: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam"],
		exclusiveMoves: ["rest", "mimic"],
		tier: "Roseredirisblue LC",
	},
	dewgongroseredirisblue: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam"],
		exclusiveMoves: ["rest", "rest", "mimic", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	grimerroseredirisblue: {
		randomBattleMoves: ["sludge", "bodyslam"],
		essentialMove: "explosion",
		exclusiveMoves: ["megadrain", "megadrain", "fireblast", "screech"],
		tier: "Roseredirisblue LC",
	},
	mukroseredirisblue: {
		randomBattleMoves: ["sludge", "bodyslam"],
		essentialMove: "explosion",
		exclusiveMoves: ["megadrain", "megadrain", "fireblast", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	shellderroseredirisblue: {
		randomBattleMoves: ["surf", "blizzard", "doubleedge", "explosion"],
		tier: "Roseredirisblue LC",
	},
	cloysterroseredirisblue: {
		randomBattleMoves: ["surf", "blizzard", "explosion"],
		exclusiveMoves: ["hyperbeam", "hyperbeam", "doubleedge"],
		tier: "Roseredirisblue OU",
	},
	gastlyroseredirisblue: {
		randomBattleMoves: ["explosion", "megadrain", "nightshade", "psychic"],
		essentialMove: "thunderbolt",
		exclusiveMoves: ["hypnosis", "hypnosis", "confuseray"],
		tier: "Roseredirisblue LC",
	},
	haunterroseredirisblue: {
		randomBattleMoves: ["explosion", "megadrain", "nightshade", "psychic"],
		essentialMove: "thunderbolt",
		exclusiveMoves: ["hypnosis", "hypnosis", "confuseray"],
		tier: "Roseredirisblue NFE",
	},
	gengarroseredirisblue: {
		randomBattleMoves: ["explosion", "megadrain", "nightshade", "psychic"],
		essentialMove: "thunderbolt",
		exclusiveMoves: ["hypnosis", "hypnosis", "confuseray"],
		tier: "Roseredirisblue OU",
	},
	onixroseredirisblue: {
		randomBattleMoves: ["earthquake", "explosion", "rockslide", "bodyslam"],
		tier: "Roseredirisblue UU",
	},
	drowzeeroseredirisblue: {
		randomBattleMoves: ["hypnosis", "psychic", "thunderwave"],
		exclusiveMoves: ["seismictoss", "seismictoss", "counter", "reflect", "rest"],
		tier: "Roseredirisblue LC",
	},
	hypnoroseredirisblue: {
		randomBattleMoves: ["hypnosis", "psychic", "thunderwave"],
		exclusiveMoves: ["seismictoss", "seismictoss", "counter", "rest", "rest", "reflect"],
		tier: "Roseredirisblue UU",
	},
	krabbyroseredirisblue: {
		randomBattleMoves: ["bodyslam", "crabhammer", "swordsdance", "blizzard"],
		tier: "Roseredirisblue LC",
	},
	kinglerroseredirisblue: {
		randomBattleMoves: ["bodyslam", "hyperbeam", "swordsdance", "crabhammer"],
		tier: "Roseredirisblue UU",
	},
	voltorbroseredirisblue: {
		randomBattleMoves: ["thunderbolt", "thunderwave", "explosion"],
		exclusiveMoves: ["thunder", "screech", "toxic"],
		tier: "Roseredirisblue LC",
	},
	electroderoseredirisblue: {
		randomBattleMoves: ["thunderbolt", "thunderwave", "explosion"],
		exclusiveMoves: ["thunder", "screech", "toxic", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	exeggcuteroseredirisblue: {
		randomBattleMoves: ["sleeppowder", "stunspore"],
		essentialMove: "psychic",
		exclusiveMoves: ["explosion", "explosion", "doubleedge"],
		tier: "Roseredirisblue LC",
	},
	exeggutorroseredirisblue: {
		randomBattleMoves: ["psychic", "explosion", "sleeppowder"],
		exclusiveMoves: ["stunspore", "stunspore", "stunspore", "megadrain", "megadrain", "eggbomb", "doubleedge", "hyperbeam"],
		tier: "Roseredirisblue OU",
	},
	cuboneroseredirisblue: {
		randomBattleMoves: ["earthquake", "blizzard", "bodyslam", "seismictoss"],
		tier: "Roseredirisblue LC",
	},
	marowakroseredirisblue: {
		randomBattleMoves: ["earthquake", "blizzard", "bodyslam", "seismictoss"],
		tier: "Roseredirisblue UU",
	},
	hitmonleeroseredirisblue: {
		randomBattleMoves: ["bodyslam", "highjumpkick", "seismictoss"],
		exclusiveMoves: ["counter", "counter", "meditate"],
		tier: "Roseredirisblue UU",
	},
	hitmonchanroseredirisblue: {
		randomBattleMoves: ["bodyslam", "submission", "seismictoss"],
		exclusiveMoves: ["counter", "counter", "agility"],
		tier: "Roseredirisblue UU",
	},
	lickitungroseredirisblue: {
		randomBattleMoves: ["swordsdance", "hyperbeam"],
		essentialMove: "bodyslam",
		exclusiveMoves: ["earthquake", "earthquake", "earthquake", "blizzard"],
		tier: "Roseredirisblue UU",
	},
	koffingroseredirisblue: {
		randomBattleMoves: ["sludge", "explosion", "thunderbolt", "fireblast"],
		tier: "Roseredirisblue LC",
	},
	weezingroseredirisblue: {
		randomBattleMoves: ["sludge", "explosion", "thunderbolt", "fireblast"],
		tier: "Roseredirisblue UU",
	},
	rhyhornroseredirisblue: {
		randomBattleMoves: ["earthquake", "rockslide", "substitute", "bodyslam"],
		tier: "Roseredirisblue LC",
	},
	rhydonroseredirisblue: {
		randomBattleMoves: ["earthquake", "rockslide", "bodyslam"],
		exclusiveMoves: ["substitute", "substitute", "hyperbeam"],
		tier: "Roseredirisblue OU",
	},
	chanseyroseredirisblue: {
		randomBattleMoves: ["icebeam", "thunderwave"],
		essentialMove: "softboiled",
		exclusiveMoves: ["counter", "sing", "reflect", "thunderbolt", "thunderbolt", "thunderbolt", "seismictoss"],
		tier: "Roseredirisblue OU",
	},
	tangelaroseredirisblue: {
		randomBattleMoves: ["sleeppowder", "bodyslam", "swordsdance"],
		essentialMove: "megadrain",
		comboMoves: ["growth", "stunspore"],
		tier: "Roseredirisblue UU",
	},
	kangaskhanroseredirisblue: {
		randomBattleMoves: ["bodyslam", "hyperbeam", "earthquake"],
		exclusiveMoves: ["surf", "rockslide", "rockslide", "counter"],
		tier: "Roseredirisblue UU",
	},
	horsearoseredirisblue: {
		randomBattleMoves: ["agility", "blizzard"],
		essentialMove: "surf",
		exclusiveMoves: ["doubleedge", "smokescreen", "hydropump"],
		tier: "Roseredirisblue LC",
	},
	seadraroseredirisblue: {
		randomBattleMoves: ["agility", "blizzard"],
		essentialMove: "surf",
		exclusiveMoves: ["doubleedge", "smokescreen", "hyperbeam", "hydropump"],
		tier: "Roseredirisblue UU",
	},
	goldeenroseredirisblue: {
		randomBattleMoves: ["surf", "blizzard", "agility", "doubleedge"],
		tier: "Roseredirisblue LC",
	},
	seakingroseredirisblue: {
		randomBattleMoves: ["surf", "blizzard", "doubleedge"],
		exclusiveMoves: ["hyperbeam", "agility", "agility"],
		tier: "Roseredirisblue UU",
	},
	staryuroseredirisblue: {
		randomBattleMoves: ["blizzard", "thunderbolt", "thunderwave"],
		essentialMove: "recover",
		exclusiveMoves: ["surf", "surf", "hydropump"],
		tier: "Roseredirisblue LC",
	},
	starmieroseredirisblue: {
		randomBattleMoves: ["blizzard", "thunderbolt", "thunderwave"],
		essentialMove: "recover",
		exclusiveMoves: ["surf", "hydropump", "psychic", "surf"],
		tier: "Roseredirisblue OU",
	},
	mrmimeroseredirisblue: {
		randomBattleMoves: ["psychic", "thunderwave", "thunderbolt", "seismictoss"],
		tier: "Roseredirisblue UU",
	},
	scytherroseredirisblue: {
		randomBattleMoves: ["slash", "swordsdance", "agility", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	jynxroseredirisblue: {
		randomBattleMoves: ["lovelykiss", "blizzard", "psychic"],
		exclusiveMoves: ["mimic", "bodyslam", "seismictoss", "counter", "counter"],
		tier: "Roseredirisblue OU",
	},
	electabuzzroseredirisblue: {
		randomBattleMoves: ["thunderbolt", "thunderwave", "psychic", "seismictoss"],
		tier: "Roseredirisblue UU",
	},
	magmarroseredirisblue: {
		randomBattleMoves: ["confuseray", "fireblast", "bodyslam"],
		exclusiveMoves: ["psychic", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	pinsirroseredirisblue: {
		randomBattleMoves: ["swordsdance", "hyperbeam", "bodyslam"],
		exclusiveMoves: ["submission", "submission", "seismictoss"],
		tier: "Roseredirisblue UU",
	},
	taurosroseredirisblue: {
		randomBattleMoves: ["bodyslam", "hyperbeam", "earthquake"],
		exclusiveMoves: ["blizzard", "blizzard", "blizzard", "thunderbolt"],
		tier: "Roseredirisblue OU",
	},
	magikarproseredirisblue: {
		randomBattleMoves: ["tackle", "dragonrage"],
		eventPokemon: [
			{"generation": 1, "level": 5, "moves": ["dragonrage"]},
		],
		tier: "Roseredirisblue LC",
	},
	gyaradosroseredirisblue: {
		randomBattleMoves: ["blizzard", "thunderbolt", "bodyslam", "hyperbeam"],
		exclusiveMoves: ["surf", "hydropump"],
		tier: "Roseredirisblue UU",
	},
	laprasroseredirisblue: {
		randomBattleMoves: ["surf", "bodyslam", "sing", "rest", "confuseray"],
		essentialMove: "blizzard",
		exclusiveMoves: ["thunderbolt", "thunderbolt"],
		tier: "Roseredirisblue OU",
	},
	dittoroseredirisblue: {
		randomBattleMoves: ["transform"],
		tier: "Roseredirisblue UU",
	},
	eeveeroseredirisblue: {
		randomBattleMoves: ["doubleedge", "reflect", "quickattack"],
		essentialMove: "bodyslam",
		exclusiveMoves: ["mimic", "sandattack", "tailwhip", "bide"],
		tier: "Roseredirisblue LC",
	},
	vaporeonroseredirisblue: {
		randomBattleMoves: ["rest", "blizzard"],
		essentialMove: "surf",
		exclusiveMoves: ["bodyslam", "mimic", "hydropump"],
		tier: "Roseredirisblue UU",
	},
	jolteonroseredirisblue: {
		randomBattleMoves: ["thunderwave", "bodyslam", "thunderbolt"],
		exclusiveMoves: ["pinmissile", "pinmissile", "doublekick", "agility", "agility"],
		tier: "Roseredirisblue OU",
	},
	flareonroseredirisblue: {
		randomBattleMoves: ["fireblast", "bodyslam", "hyperbeam", "quickattack"],
		tier: "Roseredirisblue UU",
	},
	porygonroseredirisblue: {
		randomBattleMoves: ["thunderwave", "blizzard"],
		essentialMove: "recover",
		exclusiveMoves: ["psychic", "thunderbolt", "triattack", "doubleedge"],
		tier: "Roseredirisblue UU",
	},
	omanyteroseredirisblue: {
		randomBattleMoves: ["hydropump", "surf", "bodyslam"],
		essentialMove: "seismictoss",
		exclusiveMoves: ["blizzard", "blizzard"],
		comboMoves: ["surf", "hydropump"],
		tier: "Roseredirisblue LC",
	},
	omastarroseredirisblue: {
		randomBattleMoves: ["hydropump", "surf", "seismictoss", "blizzard"],
		exclusiveMoves: ["bodyslam", "rest"],
		tier: "Roseredirisblue UU",
	},
	kabutoroseredirisblue: {
		randomBattleMoves: ["blizzard", "bodyslam", "surf", "slash"],
		tier: "Roseredirisblue LC",
	},
	kabutopsroseredirisblue: {
		randomBattleMoves: ["swordsdance", "surf", "hyperbeam"],
		exclusiveMoves: ["bodyslam", "slash"],
		tier: "Roseredirisblue UU",
	},
	aerodactylroseredirisblue: {
		randomBattleMoves: ["skyattack", "fireblast", "doubleedge", "hyperbeam"],
		tier: "Roseredirisblue UU",
	},
	snorlaxroseredirisblue: {
		randomBattleMoves: ["rest", "thunderbolt", "bodyslam", "selfdestruct"],
		essentialMove: "amnesia",
		exclusiveMoves: ["blizzard", "blizzard"],
		comboMoves: ["earthquake", "hyperbeam", "bodyslam", "selfdestruct"],
		tier: "Roseredirisblue OU",
	},
	articunoroseredirisblue: {
		randomBattleMoves: ["hyperbeam", "agility", "mimic", "reflect", "icebeam"],
		essentialMove: "blizzard",
		comboMoves: ["icebeam", "rest", "reflect"],
		tier: "Roseredirisblue UU",
	},
	zapdosroseredirisblue: {
		randomBattleMoves: ["thunderbolt", "drillpeck", "thunderwave", "agility"],
		tier: "Roseredirisblue OU",
	},
	moltresroseredirisblue: {
		randomBattleMoves: ["agility", "hyperbeam", "fireblast"],
		exclusiveMoves: ["doubleedge", "reflect", "skyattack"],
		tier: "Roseredirisblue UU",
	},
	dratiniroseredirisblue: {
		randomBattleMoves: ["hyperbeam", "thunderbolt", "bodyslam", "thunderwave"],
		essentialMove: "blizzard",
		tier: "Roseredirisblue LC",
	},
	dragonairroseredirisblue: {
		randomBattleMoves: ["hyperbeam", "thunderbolt", "bodyslam", "thunderwave"],
		essentialMove: "blizzard",
		tier: "Roseredirisblue NFE",
	},
	dragoniteroseredirisblue: {
		randomBattleMoves: ["hyperbeam", "thunderbolt", "bodyslam", "thunderwave"],
		essentialMove: "blizzard",
		tier: "Roseredirisblue UU",
	},
	mewtworoseredirisblue: {
		randomBattleMoves: ["thunderbolt", "blizzard", "recover"],
		essentialMove: "amnesia",
		exclusiveMoves: ["psychic", "psychic"],
		comboMoves: ["rest", "barrier"],
		tier: "Roseredirisblue OU",
	},
	mewroseredirisblue: {
		randomBattleMoves: ["thunderwave", "thunderbolt", "blizzard", "earthquake"],
		essentialMove: "psychic",
		exclusiveMoves: ["softboiled", "softboiled", "explosion"],
		comboMoves: ["swordsdance", "earthquake", "hyperbeam"],
		eventPokemon: [
			{"generation": 1, "level": 5, "moves": ["pound"]},
		],
		eventOnly: true,
		tier: "Roseredirisblue OU",
	},
	ampharosroseredirisblue: {
		randomBattleMoves: ["thunderbolt", "thunderwave", "hyperfang", "firepunch"],
		tier: "Roseredirisblue Uber",
	},
	forretressroseredirisblue: {
		randomBattleMoves: ["leechlife", "rockslide", "explosion", "megadrain"],
		tier: "Roseredirisblue Uber",
	},
	zangooseroseredirisblue: {
		randomBattleMoves: ["slash","submission","thunderwave","seismictoss"],
		tier: "Roseredirisblue Uber",
	},
	seviperroseredirisblue: {
		randomBattleMoves: ["swordsdance","glare","poisonsting","earthquake"],
		tier: "Roseredirisblue Uber",
	},
	gogoatroseredirisblue: {
		randomBattleMoves: ["razorleaf","earthquake","rockslide","bodyslam"],
		tier: "Roseredirisblue Uber",
	},
	sceptileroseredirisblue: {
		randomBattleMoves: ["razorleaf","swordsdance","hyperbeam","earthquake"],
		tier: "Roseredirisblue Uber",
	},
	breloomroseredirisblue: {
		randomBattleMoves: ["spore","swordsdance","submission","rockslide"],
		tier: "Roseredirisblue Uber",
	},
}; exports.FormatsData = FormatsData;
