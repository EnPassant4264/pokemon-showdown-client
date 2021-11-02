"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const FormatsData = {
	bulbasaur: {
		tier: "LC",
	},
	ivysaur: {
		tier: "NFE",
	},
	venusaur: {
		randomBattleMoves: ["curse", "earthquake", "hiddenpowerrock", "leechseed", "sleeppowder", "sludgebomb", "swordsdance", "synthesis"],
		tier: "UU",
	},
	charmander: {
		tier: "LC",
	},
	charmeleon: {
		tier: "NFE",
	},
	charizard: {
		randomBattleMoves: ["bellydrum", "dragondance", "earthquake", "fireblast", "hiddenpowerflying", "substitute"],
		tier: "UU",
	},
	squirtle: {
		tier: "LC",
	},
	wartortle: {
		tier: "NFE",
	},
	blastoise: {
		randomBattleMoves: ["earthquake", "icebeam", "mirrorcoat", "rest", "roar", "sleeptalk", "surf", "toxic"],
		tier: "UU",
	},
	caterpie: {
		tier: "LC",
	},
	metapod: {
		tier: "NFE",
	},
	butterfree: {
		randomBattleMoves: ["gigadrain", "hiddenpowerfire", "morningsun", "psychic", "sleeppowder", "stunspore", "toxic"],
		tier: "NU",
	},
	weedle: {
		tier: "LC",
	},
	kakuna: {
		tier: "NFE",
	},
	beedrill: {
		randomBattleMoves: ["brickbreak", "doubleedge", "endure", "hiddenpowerbug", "sludgebomb", "swordsdance"],
		tier: "NU",
	},
	pidgey: {
		tier: "LC",
	},
	pidgeotto: {
		tier: "NFE",
	},
	pidgeot: {
		randomBattleMoves: ["aerialace", "hiddenpowerground", "quickattack", "return", "substitute", "toxic"],
		tier: "NU",
	},
	rattata: {
		tier: "LC",
	},
	raticate: {
		randomBattleMoves: ["endeavor", "hiddenpowerground", "quickattack", "return", "reversal", "shadowball", "substitute"],
		tier: "NU",
	},
	spearow: {
		tier: "LC",
	},
	fearow: {
		randomBattleMoves: ["agility", "batonpass", "drillpeck", "hiddenpowerground", "quickattack", "return", "substitute"],
		tier: "UU",
	},
	ekans: {
		tier: "LC",
	},
	arbok: {
		randomBattleMoves: ["doubleedge", "earthquake", "hiddenpowerfire", "rest", "rockslide", "sleeptalk", "sludgebomb"],
		tier: "NU",
	},
	pichu: {
		tier: "LC",
	},
	pikachu: {
		randomBattleMoves: ["hiddenpowerice", "substitute", "surf", "thunderbolt"],
		tier: "NU",
	},
	raichu: {
		randomBattleMoves: ["encore", "focuspunch", "hiddenpowergrass", "hiddenpowerice", "substitute", "surf", "thunderbolt"],
		tier: "UU",
	},
	sandshrew: {
		tier: "LC",
	},
	sandslash: {
		randomBattleMoves: ["earthquake", "hiddenpowerbug", "rapidspin", "rockslide", "swordsdance", "toxic"],
		tier: "UU",
	},
	nidoranf: {
		tier: "LC",
	},
	nidorina: {
		tier: "NFE",
	},
	nidoqueen: {
		randomBattleMoves: ["earthquake", "fireblast", "icebeam", "shadowball", "sludgebomb", "superpower"],
		tier: "UU",
	},
	nidoranm: {
		tier: "LC",
	},
	nidorino: {
		tier: "NFE",
	},
	nidoking: {
		randomBattleMoves: ["earthquake", "fireblast", "icebeam", "megahorn", "shadowball", "sludgebomb", "thunderbolt"],
		tier: "UU",
	},
	cleffa: {
		tier: "LC",
	},
	clefairy: {
		tier: "NFE",
	},
	clefable: {
		randomBattleMoves: ["calmmind", "counter", "icebeam", "return", "thunderbolt", "shadowball", "softboiled", "thunderwave"],
		tier: "UU",
	},
	vulpix: {
		tier: "LC",
	},
	ninetales: {
		randomBattleMoves: ["fireblast", "flamethrower", "hiddenpowergrass", "hypnosis", "substitute", "willowisp"],
		tier: "UU",
	},
	igglybuff: {
		tier: "LC",
	},
	jigglypuff: {
		tier: "NFE",
	},
	wigglytuff: {
		randomBattleMoves: ["fireblast", "icebeam", "protect", "return", "thunderbolt", "toxic", "wish"],
		tier: "NU",
	},
	zubat: {
		tier: "LC",
	},
	golbat: {
		tier: "NU",
	},
	crobat: {
		randomBattleMoves: ["aerialace", "haze", "hiddenpowerground", "shadowball", "sludgebomb", "taunt", "toxic"],
		tier: "UU",
	},
	oddish: {
		tier: "LC",
	},
	gloom: {
		tier: "NFE",
	},
	vileplume: {
		randomBattleMoves: ["aromatherapy", "hiddenpowerfire", "sleeppowder", "sludgebomb", "solarbeam", "sunnyday", "synthesis"],
		tier: "UU",
	},
	bellossom: {
		randomBattleMoves: ["hiddenpowerfire", "hiddenpowergrass", "moonlight", "sleeppowder", "sludgebomb", "solarbeam", "stunspore", "sunnyday"],
		tier: "NU",
	},
	paras: {
		tier: "LC",
	},
	parasect: {
		randomBattleMoves: ["aromatherapy", "gigadrain", "hiddenpowerbug", "return", "spore", "swordsdance"],
		tier: "NU",
	},
	venonat: {
		tier: "LC",
	},
	venomoth: {
		randomBattleMoves: ["batonpass", "hiddenpowerground", "signalbeam", "sleeppowder", "sludgebomb", "substitute"],
		tier: "NU",
	},
	diglett: {
		tier: "NU",
	},
	dugtrio: {
		randomBattleMoves: ["aerialace", "earthquake", "hiddenpowerbug", "rockslide", "substitute"],
		tier: "OU",
	},
	meowth: {
		tier: "LC",
	},
	persian: {
		randomBattleMoves: ["hiddenpowerground", "hypnosis", "irontail", "return", "shadowball", "substitute"],
		tier: "UU",
	},
	psyduck: {
		tier: "LC",
	},
	golduck: {
		randomBattleMoves: ["calmmind", "hiddenpowergrass", "hydropump", "hypnosis", "icebeam", "substitute", "surf"],
		tier: "UU",
	},
	mankey: {
		tier: "LC",
	},
	primeape: {
		randomBattleMoves: ["bulkup", "crosschop", "earthquake", "hiddenpowerghost", "reversal", "rockslide", "substitute"],
		tier: "UU",
	},
	growlithe: {
		tier: "LC",
	},
	arcanine: {
		randomBattleMoves: ["fireblast", "flamethrower", "extremespeed", "hiddenpowergrass", "rest", "sleeptalk", "toxic"],
		tier: "UU",
	},
	poliwag: {
		tier: "LC",
	},
	poliwhirl: {
		tier: "NFE",
	},
	poliwrath: {
		randomBattleMoves: ["brickbreak", "bulkup", "hiddenpowerghost", "hydropump", "hypnosis", "icebeam", "substitute"],
		tier: "UU",
	},
	politoed: {
		randomBattleMoves: ["counter", "hiddenpowergrass", "hypnosis", "icebeam", "surf", "toxic"],
		tier: "UU",
	},
	abra: {
		tier: "NU",
	},
	kadabra: {
		tier: "UU",
	},
	alakazam: {
		randomBattleMoves: ["calmmind", "encore", "firepunch", "psychic", "recover", "substitute", "thunderpunch"],
		tier: "UU",
	},
	machop: {
		tier: "LC",
	},
	machoke: {
		tier: "NFE",
	},
	machamp: {
		randomBattleMoves: ["bulkup", "crosschop", "earthquake", "hiddenpowerghost", "rest", "rockslide", "sleeptalk"],
		tier: "UU",
	},
	bellsprout: {
		tier: "LC",
	},
	weepinbell: {
		tier: "NFE",
	},
	victreebel: {
		randomBattleMoves: ["hiddenpowerfire", "sleeppowder", "sludgebomb", "solarbeam", "sunnyday"],
		tier: "UU",
	},
	tentacool: {
		tier: "LC",
	},
	tentacruel: {
		randomBattleMoves: ["gigadrain", "haze", "hydropump", "icebeam", "rapidspin", "surf", "toxic"],
		tier: "UU",
	},
	geodude: {
		tier: "LC",
	},
	graveler: {
		tier: "NU",
	},
	golem: {
		randomBattleMoves: ["doubleedge", "earthquake", "explosion", "hiddenpowerbug", "rockblast", "toxic"],
		tier: "UU",
	},
	ponyta: {
		tier: "LC",
	},
	rapidash: {
		randomBattleMoves: ["batonpass", "fireblast", "flamethrower", "hiddenpowergrass", "hypnosis", "solarbeam", "substitute", "sunnyday"],
		tier: "UU",
	},
	slowpoke: {
		tier: "LC",
	},
	slowbro: {
		randomBattleMoves: ["calmmind", "icebeam", "psychic", "rest", "sleeptalk", "surf", "thunderwave"],
		tier: "UU",
	},
	slowking: {
		randomBattleMoves: ["calmmind", "flamethrower", "icebeam", "psychic", "surf", "rest", "sleeptalk", "thunderwave"],
		tier: "UU",
	},
	magnemite: {
		tier: "LC",
	},
	magneton: {
		randomBattleMoves: ["hiddenpowergrass", "hiddenpowerice", "rest", "sleeptalk", "substitute", "thunderbolt", "thunderwave", "toxic"],
		tier: "OU",
	},
	farfetchd: {
		randomBattleMoves: ["agility", "batonpass", "hiddenpowerflying", "slash", "swordsdance"],
		tier: "NU",
	},
	doduo: {
		tier: "LC",
	},
	dodrio: {
		randomBattleMoves: ["drillpeck", "flail", "hiddenpowerground", "quickattack", "return", "substitute"],
		tier: "UU",
	},
	seel: {
		tier: "LC",
	},
	dewgong: {
		randomBattleMoves: ["encore", "hiddenpowergrass", "icebeam", "rest", "sleeptalk", "surf", "toxic"],
		tier: "NU",
	},
	grimer: {
		tier: "LC",
	},
	muk: {
		randomBattleMoves: ["curse", "explosion", "focuspunch", "hiddenpowerghost", "rest", "sludgebomb", "substitute"],
		tier: "UU",
	},
	shellder: {
		tier: "LC",
	},
	cloyster: {
		randomBattleMoves: ["explosion", "icebeam", "surf", "rapidspin", "spikes", "toxic"],
		tier: "OU",
	},
	gastly: {
		tier: "LC",
	},
	haunter: {
		tier: "NU",
	},
	gengar: {
		randomBattleMoves: ["destinybond", "explosion", "firepunch", "hypnosis", "icepunch", "substitute", "thunderbolt", "willowisp"],
		tier: "OU",
	},
	onix: {
		tier: "LC",
	},
	steelix: {
		randomBattleMoves: ["doubleedge", "earthquake", "explosion", "hiddenpowerrock", "irontail", "rest", "roar", "toxic"],
		tier: "UU",
	},
	drowzee: {
		tier: "LC",
	},
	hypno: {
		randomBattleMoves: ["batonpass", "calmmind", "firepunch", "hypnosis", "protect", "psychic", "toxic", "wish"],
		tier: "UU",
	},
	krabby: {
		tier: "LC",
	},
	kingler: {
		randomBattleMoves: ["doubleedge", "endure", "flail", "hiddenpowerghost", "hiddenpowerground", "surf", "swordsdance"],
		tier: "NU",
	},
	voltorb: {
		tier: "LC",
	},
	electrode: {
		randomBattleMoves: ["explosion", "hiddenpowergrass", "hiddenpowerice", "substitute", "thunderbolt", "thunderwave", "toxic"],
		tier: "UU",
	},
	exeggcute: {
		tier: "LC",
	},
	exeggutor: {
		randomBattleMoves: ["explosion", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "leechseed", "psychic", "sleeppowder", "solarbeam", "sunnyday"],
		tier: "UU",
	},
	cubone: {
		tier: "LC",
	},
	marowak: {
		randomBattleMoves: ["bonemerang", "doubleedge", "earthquake", "rockslide", "swordsdance"],
		tier: "UU",
	},
	tyrogue: {
		tier: "LC",
	},
	hitmonlee: {
		randomBattleMoves: ["bulkup", "earthquake", "hiddenpowerghost", "highjumpkick", "machpunch", "reversal", "rockslide", "substitute"],
		tier: "OU",
	},
	hitmonchan: {
		randomBattleMoves: ["bulkup", "earthquake", "hiddenpowerghost", "machpunch", "rapidspin", "skyuppercut", "toxic"],
		tier: "NU",
	},
	hitmontop: {
		randomBattleMoves: ["bulkup", "earthquake", "endeavor", "endure", "hiddenpowerghost", "highjumpkick", "machpunch", "rockslide", "toxic"],
		tier: "UU",
	},
	lickitung: {
		randomBattleMoves: ["healbell", "protect", "return", "seismictoss", "toxic", "wish"],
		tier: "NU",
	},
	koffing: {
		tier: "LC",
	},
	weezing: {
		randomBattleMoves: ["explosion", "fireblast", "flamethrower", "haze", "painsplit", "sludgebomb", "willowisp"],
		tier: "UU",
	},
	rhyhorn: {
		tier: "LC",
	},
	rhydon: {
		randomBattleMoves: ["doubleedge", "earthquake", "megahorn", "rockslide", "substitute", "swordsdance"],
		tier: "UU",
	},
	chansey: {
		tier: "UU",
	},
	blissey: {
		randomBattleMoves: ["aromatherapy", "calmmind", "icebeam", "seismictoss", "softboiled", "thunderbolt", "thunderwave", "toxic"],
		tier: "OU",
	},
	tangela: {
		randomBattleMoves: ["hiddenpowerfire", "hiddenpowergrass", "leechseed", "morningsun", "sleeppowder", "solarbeam", "stunspore", "sunnyday"],
		tier: "NU",
	},
	kangaskhan: {
		randomBattleMoves: ["earthquake", "fakeout", "focuspunch", "rest", "return", "shadowball", "substitute", "toxic"],
		tier: "UU",
	},
	horsea: {
		tier: "LC",
	},
	seadra: {
		tier: "NU",
	},
	kingdra: {
		randomBattleMoves: ["hiddenpowergrass", "hydropump", "icebeam", "raindance", "substitute", "surf"],
		tier: "UU",
	},
	goldeen: {
		tier: "LC",
	},
	seaking: {
		randomBattleMoves: ["hiddenpowergrass", "hydropump", "icebeam", "megahorn", "raindance"],
		tier: "NU",
	},
	staryu: {
		tier: "LC",
	},
	starmie: {
		randomBattleMoves: ["hydropump", "icebeam", "psychic", "recover", "surf", "thunderbolt"],
		tier: "OU",
	},
	mrmime: {
		randomBattleMoves: ["barrier", "batonpass", "calmmind", "encore", "firepunch", "hypnosis", "psychic", "substitute", "thunderbolt"],
		tier: "UU",
	},
	scyther: {
		randomBattleMoves: ["aerialace", "batonpass", "hiddenpowerground", "hiddenpowerrock", "quickattack", "silverwind", "swordsdance"],
		tier: "UU",
	},
	scizor: {
		randomBattleMoves: ["agility", "batonpass", "hiddenpowerground", "hiddenpowerrock", "morningsun", "silverwind", "steelwing", "swordsdance"],
		tier: "UU",
	},
	smoochum: {
		tier: "LC",
	},
	jynx: {
		randomBattleMoves: ["calmmind", "hiddenpowerfire", "icebeam", "lovelykiss", "psychic", "substitute"],
		tier: "UU",
	},
	elekid: {
		tier: "LC",
	},
	electabuzz: {
		randomBattleMoves: ["crosschop", "firepunch", "focuspunch", "hiddenpowergrass", "icepunch", "substitute", "thunderbolt"],
		tier: "UU",
	},
	magby: {
		tier: "NU",
	},
	magmar: {
		randomBattleMoves: ["crosschop", "fireblast", "flamethrower", "hiddenpowergrass", "psychic", "thunderpunch"],
		tier: "UU",
	},
	pinsir: {
		randomBattleMoves: ["earthquake", "hiddenpowerbug", "return", "rockslide", "swordsdance"],
		tier: "UU",
	},
	tauros: {
		randomBattleMoves: ["doubleedge", "earthquake", "hiddenpowerghost", "hiddenpowerrock", "return"],
		tier: "UU",
	},
	magikarp: {
		tier: "LC",
	},
	gyarados: {
		randomBattleMoves: ["doubleedge", "dragondance", "earthquake", "hiddenpowerflying", "hydropump", "taunt"],
		tier: "UU",
	},
	lapras: {
		randomBattleMoves: ["healbell", "hydropump", "icebeam", "rest", "sleeptalk", "thunderbolt", "toxic"],
		tier: "UU",
	},
	ditto: {
		randomBattleMoves: ["transform"],
		tier: "NU",
	},
	eevee: {
		tier: "LC",
	},
	vaporeon: {
		randomBattleMoves: ["icebeam", "protect", "roar", "surf", "toxic", "wish"],
		tier: "UU",
	},
	jolteon: {
		randomBattleMoves: ["batonpass", "hiddenpowerice", "substitute", "thunderbolt", "toxic", "wish"],
		tier: "OU",
	},
	flareon: {
		randomBattleMoves: ["doubleedge", "fireblast", "hiddenpowergrass", "protect", "shadowball", "toxic", "wish"],
		tier: "NU",
	},
	espeon: {
		randomBattleMoves: ["batonpass", "calmmind", "hiddenpowerfire", "morningsun", "psychic", "reflect"],
		tier: "UU",
	},
	umbreon: {
		randomBattleMoves: ["batonpass", "hiddenpowerdark", "meanlook", "moonlight", "protect", "toxic", "wish"],
		tier: "UU",
	},
	porygon: {
		tier: "LC",
	},
	porygon2: {
		randomBattleMoves: ["icebeam", "recover", "return", "thunderbolt", "thunderwave", "toxic"],
		tier: "UU",
	},
	omanyte: {
		tier: "LC",
	},
	omastar: {
		randomBattleMoves: ["hiddenpowergrass", "hydropump", "icebeam", "raindance", "spikes", "surf"],
		tier: "UU",
	},
	kabuto: {
		tier: "LC",
	},
	kabutops: {
		randomBattleMoves: ["brickbreak", "doubleedge", "hiddenpowerground", "rockslide", "surf", "swordsdance"],
		tier: "UU",
	},
	aerodactyl: {
		randomBattleMoves: ["doubleedge", "earthquake", "hiddenpowerflying", "rockslide", "substitute"],
		tier: "OU",
	},
	snorlax: {
		randomBattleMoves: ["bodyslam", "curse", "earthquake", "return", "rest", "selfdestruct", "shadowball", "sleeptalk"],
		tier: "OU",
	},
	articuno: {
		randomBattleMoves: ["healbell", "hiddenpowerfire", "icebeam", "protect", "rest", "roar", "sleeptalk", "toxic"],
		tier: "UU",
	},
	zapdos: {
		randomBattleMoves: ["agility", "batonpass", "hiddenpowerice", "substitute", "thunderbolt", "thunderwave", "toxic"],
		tier: "OU",
	},
	moltres: {
		randomBattleMoves: ["fireblast", "flamethrower", "hiddenpowergrass", "morningsun", "substitute", "toxic", "willowisp"],
		tier: "OU",
	},
	dratini: {
		tier: "LC",
	},
	dragonair: {
		tier: "NFE",
	},
	dragonite: {
		randomBattleMoves: ["doubleedge", "dragondance", "earthquake", "flamethrower", "healbell", "hiddenpowerflying", "icebeam", "substitute"],
		tier: "UU",
	},
	mewtwo: {
		randomBattleMoves: ["calmmind", "flamethrower", "icebeam", "psychic", "recover", "selfdestruct", "substitute", "thunderbolt"],
		tier: "Uber",
	},
	mew: {
		randomBattleMoves: ["calmmind", "explosion", "flamethrower", "icebeam", "psychic", "softboiled", "thunderbolt", "thunderwave", "transform"],
		tier: "Uber",
	},
	chikorita: {
		tier: "LC",
	},
	bayleef: {
		tier: "NFE",
	},
	meganium: {
		randomBattleMoves: ["counter", "hiddenpowergrass", "leechseed", "lightscreen", "synthesis", "toxic"],
		tier: "UU",
	},
	cyndaquil: {
		tier: "LC",
	},
	quilava: {
		tier: "NFE",
	},
	typhlosion: {
		randomBattleMoves: ["fireblast", "flamethrower", "focuspunch", "hiddenpowergrass", "hiddenpowerice", "substitute", "thunderpunch"],
		tier: "UU",
	},
	totodile: {
		tier: "LC",
	},
	croconaw: {
		tier: "NFE",
	},
	feraligatr: {
		randomBattleMoves: ["earthquake", "hiddenpowerflying", "hydropump", "rockslide", "swordsdance"],
		tier: "UU",
	},
	sentret: {
		tier: "LC",
	},
	furret: {
		randomBattleMoves: ["doubleedge", "quickattack", "return", "reversal", "shadowball", "substitute", "trick"],
		tier: "NU",
	},
	hoothoot: {
		tier: "LC",
	},
	noctowl: {
		randomBattleMoves: ["hypnosis", "psychic", "reflect", "toxic", "whirlwind"],
		tier: "NU",
	},
	ledyba: {
		tier: "LC",
	},
	ledian: {
		randomBattleMoves: ["agility", "batonpass", "lightscreen", "reflect", "silverwind", "swordsdance"],
		tier: "OU",
	},
	spinarak: {
		tier: "LC",
	},
	ariados: {
		randomBattleMoves: ["agility", "batonpass", "signalbeam", "sludgebomb", "spiderweb"],
		tier: "NU",
	},
	chinchou: {
		tier: "LC",
	},
	lanturn: {
		randomBattleMoves: ["confuseray", "icebeam", "rest", "sleeptalk", "surf", "thunderbolt", "thunderwave"],
		tier: "UU",
	},
	togepi: {
		tier: "LC",
	},
	togetic: {
		randomBattleMoves: ["charm", "encore", "flamethrower", "seismictoss", "softboiled", "thunderwave", "toxic"],
		tier: "NU",
	},
	natu: {
		tier: "LC",
	},
	xatu: {
		randomBattleMoves: ["batonpass", "calmmind", "hiddenpowerfire", "psychic", "reflect", "wish"],
		tier: "UU",
	},
	mareep: {
		tier: "LC",
	},
	flaaffy: {
		tier: "NFE",
	},
	ampharos: {
		randomBattleMoves: ["firepunch", "healbell", "hiddenpowergrass", "hiddenpowerice", "thunderbolt", "thunderwave"],
		tier: "UU",
	},
	azurill: {
		tier: "LC",
	},
	marill: {
		tier: "NFE",
	},
	azumarill: {
		randomBattleMoves: ["encore", "focuspunch", "hiddenpowerghost", "hydropump", "return", "substitute"],
		tier: "UU",
	},
	sudowoodo: {
		randomBattleMoves: ["brickbreak", "doubleedge", "earthquake", "explosion", "rockslide", "toxic"],
		tier: "NU",
	},
	hoppip: {
		tier: "LC",
	},
	skiploom: {
		tier: "NFE",
	},
	jumpluff: {
		randomBattleMoves: ["encore", "hiddenpowerflying", "leechseed", "sleeppowder", "substitute", "toxic"],
		tier: "UU",
	},
	aipom: {
		randomBattleMoves: ["batonpass", "doubleedge", "focuspunch", "shadowball", "substitute", "thunderwave"],
		tier: "NU",
	},
	sunkern: {
		tier: "LC",
	},
	sunflora: {
		randomBattleMoves: ["hiddenpowerfire", "leechseed", "razorleaf", "solarbeam", "sunnyday", "synthesis"],
		tier: "OU",
	},
	yanma: {
		randomBattleMoves: ["hiddenpowerflying", "hypnosis", "reversal", "shadowball", "substitute"],
		tier: "NU",
	},
	wooper: {
		tier: "LC",
	},
	quagsire: {
		randomBattleMoves: ["counter", "curse", "earthquake", "hiddenpowerrock", "icebeam", "rest", "surf", "toxic"],
		tier: "UU",
	},
	murkrow: {
		randomBattleMoves: ["doubleedge", "drillpeck", "hiddenpowerfighting", "hiddenpowerground", "meanlook", "perishsong", "protect", "shadowball", "substitute"],
		tier: "NU",
	},
	misdreavus: {
		randomBattleMoves: ["calmmind", "hiddenpowerice", "meanlook", "perishsong", "protect", "substitute", "thunderbolt"],
		tier: "UU",
	},
	unown: {
		randomBattleMoves: ["hiddenpowerpsychic"],
		tier: "NU",
	},
	wynaut: {
		tier: "Uber",
	},
	wobbuffet: {
		randomBattleMoves: ["counter", "destinybond", "encore", "mirrorcoat"],
		tier: "Uber",
	},
	girafarig: {
		randomBattleMoves: ["agility", "batonpass", "calmmind", "psychic", "substitute", "thunderbolt", "wish"],
		tier: "OU",
	},
	pineco: {
		tier: "LC",
	},
	forretress: {
		randomBattleMoves: ["counter", "explosion", "hiddenpowerbug", "rapidspin", "spikes", "toxic"],
		tier: "OU",
	},
	dunsparce: {
		randomBattleMoves: ["bodyslam", "curse", "headbutt", "rockslide", "rest", "shadowball", "thunderwave"],
		tier: "NU",
	},
	gligar: {
		randomBattleMoves: ["earthquake", "hiddenpowerflying", "irontail", "quickattack", "rockslide", "substitute", "swordsdance"],
		tier: "UU",
	},
	snubbull: {
		tier: "LC",
	},
	granbull: {
		randomBattleMoves: ["bulkup", "earthquake", "healbell", "overheat", "rest", "return", "shadowball", "thunderwave"],
		tier: "UU",
	},
	qwilfish: {
		randomBattleMoves: ["destinybond", "hydropump", "selfdestruct", "shadowball", "sludgebomb", "spikes", "swordsdance"],
		tier: "UU",
	},
	shuckle: {
		randomBattleMoves: ["encore", "protect", "rest", "sleeptalk", "toxic", "wrap"],
		tier: "NU",
	},
	heracross: {
		randomBattleMoves: ["brickbreak", "facade", "megahorn", "rest", "reversal", "rockslide", "sleeptalk", "substitute", "swordsdance"],
		tier: "OU",
	},
	sneasel: {
		randomBattleMoves: ["brickbreak", "doubleedge", "hiddenpowerflying", "shadowball", "substitute", "swordsdance"],
		tier: "UU",
	},
	teddiursa: {
		tier: "LC",
	},
	ursaring: {
		randomBattleMoves: ["earthquake", "focuspunch", "hiddenpowerghost", "return", "swordsdance"],
		tier: "UU",
	},
	slugma: {
		tier: "LC",
	},
	magcargo: {
		randomBattleMoves: ["fireblast", "flamethrower", "hiddenpowergrass", "rest", "sleeptalk", "toxic", "yawn"],
		tier: "NU",
	},
	swinub: {
		tier: "LC",
	},
	piloswine: {
		randomBattleMoves: ["doubleedge", "earthquake", "icebeam", "protect", "rockslide", "toxic"],
		tier: "NU",
	},
	corsola: {
		randomBattleMoves: ["calmmind", "confuseray", "icebeam", "recover", "surf", "toxic"],
		tier: "NU",
	},
	remoraid: {
		tier: "LC",
	},
	octillery: {
		randomBattleMoves: ["fireblast", "hiddenpowergrass", "icebeam", "rockblast", "surf", "thunderwave"],
		tier: "NU",
	},
	delibird: {
		randomBattleMoves: ["aerialace", "focuspunch", "hiddenpowerground", "icebeam", "quickattack"],
		tier: "NU",
	},
	mantine: {
		randomBattleMoves: ["haze", "hiddenpowergrass", "icebeam", "surf", "raindance", "rest", "sleeptalk", "toxic"],
		tier: "UU",
	},
	skarmory: {
		randomBattleMoves: ["drillpeck", "protect", "rest", "roar", "sleeptalk", "spikes", "toxic"],
		tier: "OU",
	},
	houndour: {
		tier: "LC",
	},
	houndoom: {
		randomBattleMoves: ["crunch", "fireblast", "flamethrower", "hiddenpowergrass", "pursuit", "willowisp"],
		tier: "OU",
	},
	phanpy: {
		tier: "LC",
	},
	donphan: {
		randomBattleMoves: ["earthquake", "hiddenpowerbug", "rapidspin", "rest", "roar", "rockslide", "sleeptalk", "toxic"],
		tier: "UU",
	},
	stantler: {
		randomBattleMoves: ["earthquake", "hypnosis", "return", "shadowball", "thunderbolt"],
		tier: "UU",
	},
	smeargle: {
		randomBattleMoves: ["batonpass", "encore", "explosion", "spiderweb", "spikes", "spore", "substitute"],
		tier: "UU",
	},
	miltank: {
		randomBattleMoves: ["bodyslam", "curse", "earthquake", "healbell", "milkdrink", "toxic"],
		tier: "UU",
	},
	raikou: {
		randomBattleMoves: ["calmmind", "crunch", "hiddenpowergrass", "hiddenpowerice", "rest", "sleeptalk", "substitute", "thunderbolt"],
		tier: "UU",
	},
	entei: {
		randomBattleMoves: ["bodyslam", "calmmind", "fireblast", "flamethrower", "hiddenpowergrass", "hiddenpowerice", "solarbeam", "substitute", "sunnyday"],
		tier: "UU",
	},
	suicune: {
		randomBattleMoves: ["calmmind", "hydropump", "icebeam", "rest", "sleeptalk", "substitute", "surf", "toxic"],
		tier: "OU",
	},
	larvitar: {
		tier: "LC",
	},
	pupitar: {
		tier: "NU",
	},
	tyranitar: {
		randomBattleMoves: ["dragondance", "earthquake", "fireblast", "focuspunch", "hiddenpowerbug", "icebeam", "pursuit", "rockslide", "substitute"],
		tier: "OU",
	},
	lugia: {
		randomBattleMoves: ["aeroblast", "calmmind", "earthquake", "icebeam", "recover", "substitute", "thunderbolt", "toxic"],
		tier: "Uber",
	},
	hooh: {
		randomBattleMoves: ["calmmind", "earthquake", "hiddenpowerrock", "sacredfire", "shadowball", "thunderbolt", "recover", "substitute", "toxic"],
		tier: "Uber",
	},
	celebi: {
		randomBattleMoves: ["batonpass", "calmmind", "healbell", "hiddenpowergrass", "leechseed", "psychic", "recover"],
		tier: "OU",
	},
	treecko: {
		tier: "LC",
	},
	grovyle: {
		tier: "NFE",
	},
	sceptile: {
		randomBattleMoves: ["focuspunch", "hiddenpowerice", "leafblade", "leechseed", "substitute", "thunderpunch"],
		tier: "UU",
	},
	torchic: {
		tier: "LC",
	},
	combusken: {
		tier: "NFE",
	},
	blaziken: {
		randomBattleMoves: ["endure", "fireblast", "hiddenpowerice", "reversal", "rockslide", "skyuppercut", "swordsdance", "thunderpunch"],
		tier: "UU",
	},
	mudkip: {
		tier: "LC",
	},
	marshtomp: {
		tier: "NFE",
	},
	swampert: {
		randomBattleMoves: ["earthquake", "hydropump", "icebeam", "protect", "rest", "rockslide", "sleeptalk", "surf", "toxic"],
		tier: "OU",
	},
	poochyena: {
		tier: "LC",
	},
	mightyena: {
		randomBattleMoves: ["crunch", "doubleedge", "healbell", "hiddenpowerfighting", "protect", "shadowball", "toxic"],
		tier: "NU",
	},
	zigzagoon: {
		tier: "LC",
	},
	linoone: {
		randomBattleMoves: ["bellydrum", "extremespeed", "flail", "hiddenpowerground", "shadowball", "substitute"],
		tier: "UU",
	},
	wurmple: {
		tier: "LC",
	},
	silcoon: {
		tier: "NFE",
	},
	beautifly: {
		randomBattleMoves: ["hiddenpowerbug", "hiddenpowerflying", "morningsun", "stunspore", "substitute", "toxic"],
		tier: "NU",
	},
	cascoon: {
		tier: "NFE",
	},
	dustox: {
		randomBattleMoves: ["hiddenpowerground", "lightscreen", "moonlight", "sludgebomb", "toxic", "whirlwind"],
		tier: "NU",
	},
	lotad: {
		tier: "LC",
	},
	lombre: {
		tier: "NFE",
	},
	ludicolo: {
		randomBattleMoves: ["hiddenpowergrass", "icebeam", "leechseed", "raindance", "substitute", "surf"],
		tier: "UU",
	},
	seedot: {
		tier: "LC",
	},
	nuzleaf: {
		tier: "NFE",
	},
	shiftry: {
		randomBattleMoves: ["brickbreak", "explosion", "hiddenpowerfire", "quickattack", "shadowball", "solarbeam", "sunnyday", "swordsdance"],
		tier: "UU",
	},
	taillow: {
		tier: "LC",
	},
	swellow: {
		randomBattleMoves: ["aerialace", "doubleedge", "hiddenpowerfighting", "hiddenpowerground", "quickattack", "return"],
		tier: "UU",
	},
	wingull: {
		tier: "LC",
	},
	pelipper: {
		randomBattleMoves: ["icebeam", "protect", "rest", "sleeptalk", "surf", "toxic"],
		tier: "NU",
	},
	ralts: {
		tier: "LC",
	},
	kirlia: {
		tier: "NFE",
	},
	gardevoir: {
		randomBattleMoves: ["calmmind", "destinybond", "firepunch", "hypnosis", "psychic", "substitute", "thunderbolt", "willowisp"],
		tier: "UU",
	},
	surskit: {
		tier: "LC",
	},
	masquerain: {
		randomBattleMoves: ["hydropump", "icebeam", "stunspore", "substitute", "toxic"],
		tier: "NU",
	},
	shroomish: {
		tier: "LC",
	},
	breloom: {
		randomBattleMoves: ["focuspunch", "hiddenpowerghost", "hiddenpowerrock", "leechseed", "machpunch", "spore", "substitute", "swordsdance"],
		tier: "OU",
	},
	slakoth: {
		tier: "LC",
	},
	vigoroth: {
		randomBattleMoves: ["bulkup", "earthquake", "focuspunch", "return", "shadowball", "slackoff"],
		tier: "NU",
	},
	slaking: {
		randomBattleMoves: ["doubleedge", "earthquake", "focuspunch", "return", "shadowball"],
		tier: "UU",
	},
	nincada: {
		tier: "LC",
	},
	ninjask: {
		randomBattleMoves: ["aerialace", "batonpass", "hiddenpowerrock", "protect", "silverwind", "substitute", "swordsdance"],
		tier: "UU",
	},
	shedinja: {
		randomBattleMoves: ["agility", "batonpass", "hiddenpowerground", "shadowball", "silverwind", "toxic"],
		tier: "NU",
	},
	whismur: {
		tier: "LC",
	},
	loudred: {
		tier: "NFE",
	},
	exploud: {
		randomBattleMoves: ["earthquake", "flamethrower", "icebeam", "overheat", "return", "shadowball", "substitute"],
		tier: "UU",
	},
	makuhita: {
		tier: "LC",
	},
	hariyama: {
		randomBattleMoves: ["bulkup", "crosschop", "fakeout", "focuspunch", "hiddenpowerghost", "rockslide", "substitute", "rest", "sleeptalk"],
		tier: "UU",
	},
	nosepass: {
		randomBattleMoves: ["earthquake", "explosion", "rockslide", "thunderbolt", "thunderwave", "toxic"],
		tier: "NU",
	},
	skitty: {
		tier: "LC",
	},
	delcatty: {
		randomBattleMoves: ["batonpass", "doubleedge", "healbell", "thunderwave", "wish"],
		tier: "NU",
	},
	sableye: {
		randomBattleMoves: ["knockoff", "recover", "seismictoss", "shadowball", "toxic"],
		tier: "OU",
	},
	mawile: {
		randomBattleMoves: ["batonpass", "brickbreak", "focuspunch", "hiddenpowersteel", "rockslide", "substitute", "swordsdance"],
		tier: "NU",
	},
	aron: {
		tier: "LC",
	},
	lairon: {
		tier: "NFE",
	},
	aggron: {
		randomBattleMoves: ["counter", "doubleedge", "earthquake", "focuspunch", "irontail", "rockslide", "substitute", "thunderwave"],
		tier: "UU",
	},
	meditite: {
		tier: "LC",
	},
	medicham: {
		randomBattleMoves: ["brickbreak", "bulkup", "fakeout", "recover", "reversal", "rockslide", "shadowball", "substitute"],
		tier: "UU",
	},
	electrike: {
		tier: "LC",
	},
	manectric: {
		randomBattleMoves: ["crunch", "hiddenpowergrass", "hiddenpowerice", "substitute", "thunderbolt", "thunderwave"],
		tier: "UU",
	},
	plusle: {
		randomBattleMoves: ["agility", "batonpass", "encore", "hiddenpowergrass", "substitute", "thunderbolt"],
		tier: "OU",
	},
	minun: {
		randomBattleMoves: ["batonpass", "encore", "lightscreen", "substitute", "thunderbolt", "wish"],
		tier: "NU",
	},
	volbeat: {
		randomBattleMoves: ["batonpass", "icepunch", "tailglow", "thunderbolt"],
		tier: "NU",
	},
	illumise: {
		randomBattleMoves: ["batonpass", "encore", "icepunch", "substitute", "thunderwave", "wish"],
		tier: "NU",
	},
	roselia: {
		randomBattleMoves: ["aromatherapy", "gigadrain", "hiddenpowerfire", "spikes", "stunspore", "synthesis"],
		tier: "NU",
	},
	gulpin: {
		tier: "LC",
	},
	swalot: {
		randomBattleMoves: ["encore", "explosion", "hiddenpowerground", "icebeam", "sludgebomb", "toxic", "yawn"],
		tier: "NU",
	},
	carvanha: {
		tier: "LC",
	},
	sharpedo: {
		randomBattleMoves: ["crunch", "earthquake", "endure", "hiddenpowerflying", "hydropump", "icebeam", "return"],
		tier: "UU",
	},
	wailmer: {
		tier: "LC",
	},
	wailord: {
		randomBattleMoves: ["hiddenpowergrass", "hydropump", "icebeam", "rest", "selfdestruct", "sleeptalk", "surf", "toxic"],
		tier: "NU",
	},
	numel: {
		tier: "LC",
	},
	camerupt: {
		randomBattleMoves: ["earthquake", "explosion", "fireblast", "rest", "rockslide", "sleeptalk", "toxic"],
		tier: "UU",
	},
	torkoal: {
		randomBattleMoves: ["amnesia", "explosion", "fireblast", "flamethrower", "hiddenpowergrass", "rest", "toxic", "yawn"],
		tier: "NU",
	},
	spoink: {
		tier: "LC",
	},
	grumpig: {
		randomBattleMoves: ["calmmind", "firepunch", "icywind", "psychic", "substitute", "taunt"],
		tier: "UU",
	},
	spinda: {
		randomBattleMoves: ["bodyslam", "encore", "focuspunch", "shadowball", "substitute", "teeterdance"],
		tier: "NU",
	},
	trapinch: {
		tier: "LC",
	},
	vibrava: {
		tier: "NFE",
	},
	flygon: {
		randomBattleMoves: ["dragonclaw", "earthquake", "fireblast", "hiddenpowerbug", "rockslide", "toxic"],
		tier: "OU",
	},
	cacnea: {
		tier: "LC",
	},
	cacturne: {
		randomBattleMoves: ["focuspunch", "hiddenpowerdark", "leechseed", "needlearm", "spikes", "substitute", "thunderpunch"],
		tier: "NU",
	},
	swablu: {
		tier: "LC",
	},
	altaria: {
		randomBattleMoves: ["dragonclaw", "dragondance", "earthquake", "fireblast", "flamethrower", "haze", "hiddenpowerflying", "rest", "toxic"],
		tier: "UU",
	},
	zangoose: {
		randomBattleMoves: ["brickbreak", "quickattack", "return", "shadowball", "swordsdance"],
		tier: "UU",
	},
	seviper: {
		randomBattleMoves: ["crunch", "doubleedge", "earthquake", "flamethrower", "hiddenpowergrass", "sludgebomb"],
		tier: "NU",
	},
	lunatone: {
		randomBattleMoves: ["batonpass", "calmmind", "explosion", "hypnosis", "icebeam", "psychic"],
		tier: "UU",
	},
	solrock: {
		randomBattleMoves: ["earthquake", "explosion", "overheat", "reflect", "rockslide", "shadowball"],
		tier: "UU",
	},
	barboach: {
		tier: "LC",
	},
	whiscash: {
		randomBattleMoves: ["earthquake", "hiddenpowerbug", "icebeam", "rockslide", "rest", "sleeptalk", "spark", "surf", "toxic"],
		tier: "NU",
	},
	corphish: {
		tier: "LC",
	},
	crawdaunt: {
		randomBattleMoves: ["brickbreak", "crunch", "doubleedge", "hiddenpowerghost", "icebeam", "surf"],
		tier: "NU",
	},
	baltoy: {
		tier: "LC",
	},
	claydol: {
		randomBattleMoves: ["earthquake", "explosion", "icebeam", "psychic", "rapidspin", "toxic"],
		tier: "OU",
	},
	lileep: {
		tier: "LC",
	},
	cradily: {
		randomBattleMoves: ["barrier", "earthquake", "hiddenpowergrass", "mirrorcoat", "recover", "rockslide", "toxic"],
		tier: "UU",
	},
	anorith: {
		tier: "LC",
	},
	armaldo: {
		randomBattleMoves: ["doubleedge", "earthquake", "hiddenpowerbug", "rockslide", "swordsdance"],
		tier: "UU",
	},
	feebas: {
		tier: "LC",
	},
	milotic: {
		randomBattleMoves: ["icebeam", "mirrorcoat", "recover", "rest", "sleeptalk", "surf", "toxic"],
		tier: "UU",
	},
	castform: {
		randomBattleMoves: ["flamethrower", "icebeam", "substitute", "thunderbolt", "thunderwave"],
		tier: "NU",
	},
	castformsunny: {
		tier: "NU",
	},
	castformrainy: {
		tier: "NU",
	},
	castformsnowy: {
		tier: "NU",
	},
	kecleon: {
		randomBattleMoves: ["brickbreak", "return", "shadowball", "thunderwave", "trick"],
		tier: "NU",
	},
	shuppet: {
		tier: "LC",
	},
	banette: {
		randomBattleMoves: ["destinybond", "endure", "hiddenpowerfighting", "knockoff", "shadowball", "willowisp"],
		tier: "UU",
	},
	duskull: {
		tier: "LC",
	},
	dusclops: {
		randomBattleMoves: ["focuspunch", "icebeam", "painsplit", "rest", "shadowball", "sleeptalk", "substitute", "willowisp"],
		tier: "UU",
	},
	tropius: {
		randomBattleMoves: ["earthquake", "hiddenpowerfire", "solarbeam", "sunnyday", "synthesis"],
		tier: "NU",
	},
	chimecho: {
		randomBattleMoves: ["calmmind", "healbell", "hiddenpowerfire", "lightscreen", "psychic", "reflect", "toxic", "yawn"],
		tier: "NU",
	},
	absol: {
		randomBattleMoves: ["batonpass", "hiddenpowerfighting", "quickattack", "shadowball", "swordsdance"],
		tier: "UU",
	},
	snorunt: {
		tier: "LC",
	},
	glalie: {
		randomBattleMoves: ["earthquake", "explosion", "icebeam", "spikes", "toxic"],
		tier: "NU",
	},
	spheal: {
		tier: "LC",
	},
	sealeo: {
		tier: "NFE",
	},
	walrein: {
		randomBattleMoves: ["encore", "hiddenpowergrass", "icebeam", "rest", "sleeptalk", "surf", "toxic"],
		tier: "UU",
	},
	clamperl: {
		tier: "LC",
	},
	huntail: {
		randomBattleMoves: ["doubleedge", "hiddenpowergrass", "hydropump", "icebeam", "raindance", "surf"],
		tier: "NU",
	},
	gorebyss: {
		randomBattleMoves: ["hiddenpowerelectric", "hiddenpowergrass", "hydropump", "icebeam", "raindance", "surf"],
		tier: "UU",
	},
	relicanth: {
		randomBattleMoves: ["doubleedge", "earthquake", "hiddenpowerflying", "rest", "rockslide", "sleeptalk", "toxic"],
		tier: "NU",
	},
	luvdisc: {
		randomBattleMoves: ["icebeam", "protect", "surf", "sweetkiss", "toxic"],
		tier: "NU",
	},
	bagon: {
		tier: "LC",
	},
	shelgon: {
		tier: "NU",
	},
	salamence: {
		randomBattleMoves: ["brickbreak", "dragondance", "earthquake", "fireblast", "hiddenpowerflying", "rockslide"],
		tier: "OU",
	},
	beldum: {
		tier: "LC",
	},
	metang: {
		tier: "NU",
	},
	metagross: {
		randomBattleMoves: ["agility", "earthquake", "explosion", "meteormash", "psychic", "rockslide"],
		tier: "OU",
	},
	regirock: {
		randomBattleMoves: ["curse", "earthquake", "explosion", "rest", "rockslide", "superpower", "thunderwave"],
		tier: "UU",
	},
	regice: {
		randomBattleMoves: ["explosion", "icebeam", "rest", "sleeptalk", "thunderbolt", "thunderwave", "toxic"],
		tier: "UU",
	},
	registeel: {
		randomBattleMoves: ["counter", "protect", "rest", "seismictoss", "sleeptalk", "toxic"],
		tier: "UU",
	},
	latias: {
		randomBattleMoves: ["calmmind", "dragonclaw", "hiddenpowerfire", "recover", "refresh", "toxic"],
		tier: "Uber",
	},
	latios: {
		randomBattleMoves: ["calmmind", "dragonclaw", "hiddenpowerfire", "recover", "refresh", "thunderbolt"],
		tier: "Uber",
	},
	kyogre: {
		randomBattleMoves: ["calmmind", "icebeam", "rest", "sleeptalk", "surf", "thunder", "waterspout"],
		tier: "Uber",
	},
	groudon: {
		randomBattleMoves: ["earthquake", "hiddenpowerghost", "overheat", "rockslide", "substitute", "swordsdance", "thunderwave"],
		tier: "Uber",
	},
	rayquaza: {
		randomBattleMoves: ["dragondance", "earthquake", "extremespeed", "hiddenpowerflying", "overheat", "rockslide"],
		tier: "Uber",
	},
	jirachi: {
		randomBattleMoves: ["bodyslam", "calmmind", "firepunch", "protect", "psychic", "substitute", "thunderbolt", "wish"],
		tier: "OU",
	},
	deoxys: {
		randomBattleMoves: ["extremespeed", "firepunch", "icebeam", "psychoboost", "shadowball", "superpower"],
		tier: "Uber",
	},
	deoxysattack: {
		randomBattleMoves: ["extremespeed", "firepunch", "psychoboost", "shadowball", "superpower"],
		tier: "Uber",
	},
	deoxysdefense: {
		randomBattleMoves: ["nightshade", "recover", "spikes", "taunt", "toxic"],
		tier: "Uber",
	},
	deoxysspeed: {
		randomBattleMoves: ["calmmind", "icebeam", "psychic", "recover", "shadowball", "spikes", "superpower", "taunt", "toxic"],
		tier: "OU",
	},
	snover: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	abomasnow: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	gliscor: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	frillish: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	jellicent: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	tynamo: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	eelektrik: {
		isNonstandard: null,
		gen: 3,
		tier: "NFE",
	},
	eelektross: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	cryogonal: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	typenull: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	silvally: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	silvallybug: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	silvallydark: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	silvallydragon: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	silvallyelectric: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	silvallyfighting: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	silvallyfire: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	silvallyflying: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	silvallyghost: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	silvallygrass: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	silvallyground: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	silvallyice: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	silvallypoison: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	silvallypsychic: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	silvallyrock: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	silvallysteel: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	silvallywater: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	golett: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	golurk: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	geodudealola: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	graveleralola: {
		isNonstandard: null,
		gen: 3,
		tier: "NFE",
	},
	golemalola: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	croagunk: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	toxicroak: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	crabrawler: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	crabominable: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	starly: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	staravia: {
		isNonstandard: null,
		gen: 3,
		tier: "NFE",
	},
	staraptor: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	stunky: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	skuntank: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	fletchling: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	fletchinder: {
		isNonstandard: null,
		gen: 3,
		tier: "NFE",
	},
	talonflame: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	sylveon: {
		isNonstandard: null,
		gen: 3,
		tier: "UU",
	},
	zarude: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	zarudedada: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	buneary: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	lopunny: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	chespin: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	quilladin: {
		isNonstandard: null,
		gen: 3,
		tier: "NFE",
	},
	chesnaught: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	cramorant: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	guzzlord: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	litten: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	torracat: {
		isNonstandard: null,
		gen: 3,
		tier: "NFE",
	},
	incineroar: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	mimejr: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	mrmimegalar: {
		isNonstandard: null,
		gen: 3,
		tier: "NFE",
	},
	mrrime: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	glaceon: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	uxie: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	marowakalola: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	marowakalolatotem: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	dracovish: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	slowkinggalar: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	slowpokegalar: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	milcery: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	alcremie: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	regieleki: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	mamoswine: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	roserade: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	dusknoir: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	leafeon: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	slowbrogalar: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	mismagius: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	honchkrow: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	budew: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	bonsly: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	mantyke: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	chingling: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	happiny: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	ambipom: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	weavile: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	magnezone: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	porygonz: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	lickilicky: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	rhyperior: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	tangrowth: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	probopass: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	electivire: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	magmortar: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	togekiss: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	yanmega: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	gallade: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	froslass: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	raticatealola: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	rattataalola: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	raichualola: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	sandshrewalola: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	sandslashalola: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},	
	vulpixalola: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	ninetalesalola: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	diglettalola: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	dugtrioalola: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	persianalola: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	meowthalola: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	meowthgalar: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	perrserker: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	mukalola: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	grimeralola: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	exeggutoralola: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	ponytagalar: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	rapidashgalar: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},	
	farfetchdgalar: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	sirfetchd: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	cursola: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	corsolagalar: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	weezinggalar: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	articunogalar: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	zapdosgalar: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	moltresgalar: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	zigzagoongalar: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	linoonegalar: {
		isNonstandard: null,
		gen: 3,
		tier: "NFE",
	},
	obstagoon: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	munchlax: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	impidimp: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	sandile: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	wimpod: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	skrelp: {
		isNonstandard: null,
		gen: 3,
		tier: "LC",
	},
	krokorok: {
		isNonstandard: null,
		gen: 3,
		tier: "NFE",
	},
	morgrem: {
		isNonstandard: null,
		gen: 3,
		tier: "NFE",
	},
	grimmsnarl: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	golisopod: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	dragalge: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	krookodile: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	pincurchin: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	regidrago: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	stunfisk: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
	stunfiskgalar: {
		isNonstandard: null,
		gen: 3,
		tier: "OU",
	},
}; exports.FormatsData = FormatsData;
