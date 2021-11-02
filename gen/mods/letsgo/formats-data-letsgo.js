"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const FormatsData = {
	bulbasaurletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	ivysaurletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	venusaurletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	venusaurmegaletsgo: {
		inherit: true,
		randomBattleMoves: ["leechseed", "sludgebomb", "megadrain", "sleeppowder", "earthquake"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	charmanderletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	charmeleonletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	charizardletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	charizardmegaxletsgo: {
		inherit: true,
		randomBattleMoves: ["roost", "flareblitz", "outrage", "earthquake", "willowisp"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	charizardmegayletsgo: {
		inherit: true,
		randomBattleMoves: ["airslash", "roost", "dragonpulse", "flamethrower", "fireblast"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	squirtleletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	wartortleletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	blastoiseletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	blastoisemegaletsgo: {
		inherit: true,
		randomBattleMoves: ["icebeam", "scald", "darkpulse", "toxic", "hydropump"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	caterpieletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	metapodletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	butterfreeletsgo: {
		inherit: true,
		randomBattleMoves: ["bugbuzz", "quiverdance", "airslash", "sleeppowder"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	weedleletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	kakunaletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	beedrillletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	beedrillmegaletsgo: {
		inherit: true,
		randomBattleMoves: ["drillrun", "poisonjab", "uturn", "xscissor", "brickbreak"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	pidgeyletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	pidgeottoletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	pidgeotletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	pidgeotmegaletsgo: {
		inherit: true,
		randomBattleMoves: ["airslash", "heatwave", "roost", "uturn", "toxic"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	rattataletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	rattataalolaletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	raticateletsgo: {
		inherit: true,
		randomBattleMoves: ["swordsdance", "doubleedge", "suckerpunch", "crunch", "irontail"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	raticatealolaletsgo: {
		inherit: true,
		randomBattleMoves: ["suckerpunch", "crunch", "swordsdance", "uturn", "doubleedge"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	spearowletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	fearowletsgo: {
		inherit: true,
		randomBattleMoves: ["drillpeck", "drillrun", "quickattack", "uturn", "roost"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	ekansletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	arbokletsgo: {
		inherit: true,
		randomBattleMoves: ["poisonjab", "earthquake", "glare", "suckerpunch", "crunch"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	pikachuletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	pikachustarterletsgo: {
		inherit: true,
		randomBattleMoves: ["zippyzap", "splishysplash", "thunderbolt", "calmmind", "substitute"],
		isNonstandard: null,
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	raichuletsgo: {
		inherit: true,
		randomBattleMoves: ["thunderbolt", "fakeout", "brickbreak", "irontail", "substitute"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	raichualolaletsgo: {
		inherit: true,
		randomBattleMoves: ["psychic", "thunderbolt", "calmmind", "encore", "substitute"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	sandshrewletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	sandshrewalolaletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	sandslashletsgo: {
		inherit: true,
		randomBattleMoves: ["earthquake", "rockslide", "stealthrock", "swordsdance", "toxic"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	sandslashalolaletsgo: {
		inherit: true,
		randomBattleMoves: ["earthquake", "iceshard", "icepunch", "swordsdance", "stealthrock", "irontail"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	nidoranfletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	nidorinaletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	nidoqueenletsgo: {
		inherit: true,
		randomBattleMoves: ["earthquake", "stealthrock", "icebeam", "poisonjab", "dragontail"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	nidoranmletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	nidorinoletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	nidokingletsgo: {
		inherit: true,
		randomBattleMoves: ["earthquake", "poisonjab", "stealthrock", "icepunch", "megahorn"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	clefairyletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	clefableletsgo: {
		inherit: true,
		randomBattleMoves: ["moonblast", "calmmind", "flamethrower", "stealthrock", "thunderwave", "icebeam"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	vulpixletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	vulpixalolaletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	ninetalesletsgo: {
		inherit: true,
		randomBattleMoves: ["flamethrower", "darkpulse", "nastyplot", "willowisp", "fireblast"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	ninetalesalolaletsgo: {
		inherit: true,
		randomBattleMoves: ["dazzlinggleam", "icebeam", "nastyplot", "darkpulse", "substitute"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	jigglypuffletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	wigglytuffletsgo: {
		inherit: true,
		randomBattleMoves: ["dazzlinggleam", "fireblast", "stealthrock", "icebeam", "bodyslam"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	zubatletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	golbatletsgo: {
		inherit: true,
		randomBattleMoves: ["toxic", "roost", "taunt", "sludgebomb", "whirlwind", "airslash", "uturn"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	oddishletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	gloomletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	vileplumeletsgo: {
		inherit: true,
		randomBattleMoves: ["sludgebomb", "moonblast", "sleeppowder", "megadrain", "stunspore"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	parasletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	parasectletsgo: {
		inherit: true,
		randomBattleMoves: ["leechlife", "spore", "leechseed", "substitute", "brickbreak"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	venonatletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	venomothletsgo: {
		inherit: true,
		randomBattleMoves: ["quiverdance", "bugbuzz", "sleeppowder", "sludgebomb", "psychic"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	diglettletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	diglettalolaletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	dugtrioletsgo: {
		inherit: true,
		randomBattleMoves: ["earthquake", "rockslide", "suckerpunch", "stealthrock", "toxic"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	dugtrioalolaletsgo: {
		inherit: true,
		randomBattleMoves: ["earthquake", "suckerpunch", "stealthrock", "rockslide", "toxic"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	meowthletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	meowthalolaletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	persianletsgo: {
		inherit: true,
		randomBattleMoves: ["fakeout", "uturn", "taunt", "headbutt", "playrough"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	persianalolaletsgo: {
		inherit: true,
		randomBattleMoves: ["darkpulse", "thunderbolt", "uturn", "taunt", "nastyplot"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	psyduckletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	golduckletsgo: {
		inherit: true,
		randomBattleMoves: ["icebeam", "psychic", "hydropump", "scald", "calmmind"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	mankeyletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	primeapeletsgo: {
		inherit: true,
		randomBattleMoves: ["uturn", "brickbreak", "earthquake", "bulkup", "rockslide"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	growlitheletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	arcanineletsgo: {
		inherit: true,
		randomBattleMoves: ["flareblitz", "willowisp", "crunch", "playrough", "superpower"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	poliwagletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	poliwhirlletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	poliwrathletsgo: {
		inherit: true,
		randomBattleMoves: ["waterfall", "bulkup", "superpower", "icepunch", "brickbreak", "earthquake"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	abraletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	kadabraletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	alakazamletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	alakazammegaletsgo: {
		inherit: true,
		randomBattleMoves: ["psychic", "shadowball", "calmmind", "dazzlinggleam", "recover"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	machopletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	machokeletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	machampletsgo: {
		inherit: true,
		randomBattleMoves: ["superpower", "earthquake", "icepunch", "bulkup", "rockslide", "brickbreak"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	bellsproutletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	weepinbellletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	victreebelletsgo: {
		inherit: true,
		randomBattleMoves: ["powerwhip", "suckerpunch", "poisonjab", "swordsdance", "sleeppowder"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	tentacoolletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	tentacruelletsgo: {
		inherit: true,
		randomBattleMoves: ["sludgebomb", "scald", "icebeam", "haze"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	geodudeletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	geodudealolaletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	gravelerletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	graveleralolaletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	golemletsgo: {
		inherit: true,
		randomBattleMoves: ["earthquake", "rockslide", "stealthrock", "explosion", "toxic"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	golemalolaletsgo: {
		inherit: true,
		randomBattleMoves: ["thunderpunch", "rockslide", "earthquake", "stealthrock", "explosion"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	ponytaletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	rapidashletsgo: {
		inherit: true,
		randomBattleMoves: ["flareblitz", "drillrun", "megahorn", "willowisp", "irontail"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	slowpokeletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	slowbroletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	slowbromegaletsgo: {
		inherit: true,
		randomBattleMoves: ["scald", "psychic", "calmmind", "icebeam", "toxic"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	magnemiteletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	magnetonletsgo: {
		inherit: true,
		randomBattleMoves: ["thunderbolt", "flashcannon", "thunderwave", "lightscreen", "reflect"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	farfetchdletsgo: {
		inherit: true,
		randomBattleMoves: ["swordsdance", "quickattack", "fly", "razorleaf", "poisonjab"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	doduoletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	dodrioletsgo: {
		inherit: true,
		randomBattleMoves: ["drillpeck", "jumpkick", "swordsdance", "quickattack", "roost"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	seelletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	dewgongletsgo: {
		inherit: true,
		randomBattleMoves: ["icebeam", "aquajet", "iceshard", "surf", "megahorn"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	grimerletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	grimeralolaletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	mukletsgo: {
		inherit: true,
		randomBattleMoves: ["poisonjab", "firepunch", "brickbreak", "toxic", "protect"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	mukalolaletsgo: {
		inherit: true,
		randomBattleMoves: ["crunch", "poisonjab", "toxic", "firepunch", "megadrain"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	shellderletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	cloysterletsgo: {
		inherit: true,
		randomBattleMoves: ["shellsmash", "icebeam", "hydropump", "surf", "iceshard"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	gastlyletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	haunterletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	gengarletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	gengarmegaletsgo: {
		inherit: true,
		randomBattleMoves: ["shadowball", "sludgebomb", "thunderbolt", "willowisp", "substitute", "dazzlinggleam"],
		tier: "Letsgo Uber",
		doublesTier: "DOU",
	},
	onixletsgo: {
		inherit: true,
		randomBattleMoves: ["stealthrock", "rockslide", "earthquake", "toxic", "dragontail"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	drowzeeletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	hypnoletsgo: {
		inherit: true,
		randomBattleMoves: ["psychic", "calmmind", "dazzlinggleam", "shadowball", "thunderwave"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	krabbyletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	kinglerletsgo: {
		inherit: true,
		randomBattleMoves: ["crabhammer", "agility", "rockslide", "xscissor", "superpower"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	voltorbletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	electrodeletsgo: {
		inherit: true,
		randomBattleMoves: ["thunderbolt", "taunt", "thunderwave", "explosion", "reflect", "lightscreen"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	exeggcuteletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	exeggutorletsgo: {
		inherit: true,
		randomBattleMoves: ["psychic", "megadrain", "sleeppowder", "leechseed", "sludgebomb"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	exeggutoralolaletsgo: {
		inherit: true,
		randomBattleMoves: ["megadrain", "dragonpulse", "flamethrower", "stunspore", "earthquake"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	cuboneletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	marowakletsgo: {
		inherit: true,
		randomBattleMoves: ["earthquake", "stealthrock", "swordsdance", "bonemerang", "rockslide", "doubleedge"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	marowakalolaletsgo: {
		inherit: true,
		randomBattleMoves: ["earthquake", "flareblitz", "willowisp", "bonemerang", "swordsdance", "stealthrock", "rockslide"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	hitmonleeletsgo: {
		inherit: true,
		randomBattleMoves: ["highjumpkick", "earthquake", "bulkup", "rockslide", "poisonjab"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	hitmonchanletsgo: {
		inherit: true,
		randomBattleMoves: ["icepunch", "thunderpunch", "brickbreak", "firepunch", "earthquake", "bulkup"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	lickitungletsgo: {
		inherit: true,
		randomBattleMoves: ["facade", "fireblast", "icebeam", "shadowball", "toxic"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	koffingletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	weezingletsgo: {
		inherit: true,
		randomBattleMoves: ["willowisp", "sludgebomb", "toxic", "flamethrower", "fireblast", "explosion"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	rhyhornletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	rhydonletsgo: {
		inherit: true,
		randomBattleMoves: ["earthquake", "rockslide", "stealthrock", "toxic", "megahorn"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	chanseyletsgo: {
		inherit: true,
		randomBattleMoves: ["softboiled", "seismictoss", "toxic", "stealthrock", "teleport"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	tangelaletsgo: {
		inherit: true,
		randomBattleMoves: ["leechseed", "megadrain", "sleeppowder", "protect", "toxic"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	kangaskhanletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	kangaskhanmegaletsgo: {
		inherit: true,
		randomBattleMoves: ["fakeout", "earthquake", "suckerpunch", "facade", "brickbreak"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	horsealetsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	seadraletsgo: {
		inherit: true,
		randomBattleMoves: ["icebeam", "scald", "dragonpulse", "agility", "toxic", "hydropump"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	goldeenletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	seakingletsgo: {
		inherit: true,
		randomBattleMoves: ["scald", "poisonjab", "megahorn", "drillrun", "icebeam"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	staryuletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	starmieletsgo: {
		inherit: true,
		randomBattleMoves: ["psychic", "thunderbolt", "icebeam", "recover", "scald", "hydropump"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	mrmimeletsgo: {
		inherit: true,
		randomBattleMoves: ["psychic", "dazzlinggleam", "calmmind", "shadowball", "encore"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	scytherletsgo: {
		inherit: true,
		randomBattleMoves: ["swordsdance", "xscissor", "wingattack", "brickbreak", "uturn"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	jynxletsgo: {
		inherit: true,
		randomBattleMoves: ["icebeam", "psychic", "lovelykiss", "calmmind", "shadowball"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	electabuzzletsgo: {
		inherit: true,
		randomBattleMoves: ["thunderbolt", "icepunch", "psychic", "thunderwave", "brickbreak"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	magmarletsgo: {
		inherit: true,
		randomBattleMoves: ["psychic", "flamethrower", "fireblast", "willowisp", "clearsmog", "thunderpunch"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	pinsirletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	pinsirmegaletsgo: {
		inherit: true,
		randomBattleMoves: ["xscissor", "earthquake", "swordsdance", "rockslide", "superpower"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	taurosletsgo: {
		inherit: true,
		randomBattleMoves: ["earthquake", "doubleedge", "rockslide", "fireblast", "toxic"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	magikarpletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	gyaradosletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	gyaradosmegaletsgo: {
		inherit: true,
		randomBattleMoves: ["waterfall", "crunch", "earthquake", "thunderwave", "substitute"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	laprasletsgo: {
		inherit: true,
		randomBattleMoves: ["icebeam", "thunderbolt", "surf", "hydropump", "toxic"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	dittoletsgo: {
		inherit: true,
		randomBattleMoves: ["transform"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	eeveeletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	eeveestarterletsgo: {
		inherit: true,
		randomBattleMoves: ["sparklyswirl", "sizzlyslide", "sappyseed", "protect", "buzzybuzz", "bouncybubble"],
		isNonstandard: null,
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	vaporeonletsgo: {
		inherit: true,
		randomBattleMoves: ["scald", "toxic", "icebeam", "protect", "rest"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	jolteonletsgo: {
		inherit: true,
		randomBattleMoves: ["thunderbolt", "shadowball", "thunderwave", "toxic", "substitute"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	flareonletsgo: {
		inherit: true,
		randomBattleMoves: ["flareblitz", "superpower", "quickattack", "toxic", "irontail"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	porygonletsgo: {
		inherit: true,
		randomBattleMoves: ["triattack", "recover", "icebeam", "toxic", "psychic"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	omanyteletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	omastarletsgo: {
		inherit: true,
		randomBattleMoves: ["shellsmash", "icebeam", "hydropump", "scald", "rockslide"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	kabutoletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	kabutopsletsgo: {
		inherit: true,
		randomBattleMoves: ["aquajet", "swordsdance", "rockslide", "waterfall", "superpower", "stealthrock"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	aerodactylletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	aerodactylmegaletsgo: {
		inherit: true,
		randomBattleMoves: ["rockslide", "earthquake", "stealthrock", "taunt", "crunch", "roost"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	snorlaxletsgo: {
		inherit: true,
		randomBattleMoves: ["earthquake", "bodyslam", "rest", "crunch", "toxic"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	articunoletsgo: {
		inherit: true,
		randomBattleMoves: ["icebeam", "roost", "toxic", "uturn", "substitute"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	zapdosletsgo: {
		inherit: true,
		randomBattleMoves: ["thunderbolt", "roost", "uturn", "toxic", "drillpeck"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	moltresletsgo: {
		inherit: true,
		randomBattleMoves: ["roost", "airslash", "flamethrower", "fireblast", "willowisp", "uturn"],
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	dratiniletsgo: {
		inherit: true,
		tier: "Letsgo LC",
	},
	dragonairletsgo: {
		inherit: true,
		tier: "Letsgo NFE",
	},
	dragoniteletsgo: {
		inherit: true,
		randomBattleMoves: ["outrage", "earthquake", "agility", "roost", "fireblast"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	mewtwoletsgo: {
		inherit: true,
		randomBattleMoves: [],
		tier: "Letsgo Uber",
		doublesTier: "DUber",
	},
	mewtwomegaxletsgo: {
		inherit: true,
		randomBattleMoves: ["bulkup", "substitute", "brickbreak", "earthquake", "icepunch"],
		tier: "Letsgo Uber",
		doublesTier: "DUber",
	},
	mewtwomegayletsgo: {
		inherit: true,
		randomBattleMoves: ["calmmind", "psychic", "fireblast", "icebeam", "shadowball", "recover"],
		tier: "Letsgo Uber",
		doublesTier: "DUber",
	},
	mewletsgo: {
		inherit: true,
		randomBattleMoves: ["roost", "psychic", "willowisp", "flamethrower", "stealthrock", "nastyplot"],
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
	meltanletsgo: {
		inherit: true,
		randomBattleMoves: ["flashcannon", "thunderbolt", "toxic", "protect"],
		isNonstandard: null,
		tier: "Letsgo UU",
		doublesTier: "DOU",
	},
	melmetalletsgo: {
		inherit: true,
		randomBattleMoves: ["doubleironbash", "earthquake", "rockslide", "icepunch", "thunderwave"],
		isNonstandard: null,
		tier: "Letsgo OU",
		doublesTier: "DOU",
	},
}; exports.FormatsData = FormatsData;

