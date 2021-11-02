"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const FormatsData = {
	sandshrewalolainksrandbats: {
		randomBattleMoves: ["earthquake", "ironhead", "knockoff", "rapidspin", "honeclaws", "tripleaxel", "snowfort"],
		tier: "Inksrandbats LC",
	},
	sandslashalolainksrandbats: {
 //---------------------		randomBattleMoves: ["earthquake", "ironhead", "knockoff", "rapidspin", "honeclaws", "tripleaxel"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["drillrun", "ironhead", "protect", "swordsdance", "tripleaxel"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	nidoqueeninksrandbats: {
		randomBattleMoves: ["earthpower", "icebeam", "sludgewave", "stealthrock", "toxicspikes"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["earthpower", "icebeam", "protect", "sludgebomb", "stealthrock"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	vulpixinksrandbats: {
		randomBattleMoves: ["fireblast", "nastyplot", "scorchingsands", "willowisp"],
		tier: "Inksrandbats LC",
	},
	vulpixalolainksrandbats: {
		randomBattleMoves: ["auroraveil", "blizzard", "encore", "freezedry", "moonblast", "nastyplot", "snowfort"],
		tier: "Inksrandbats LC Uber",
	},
	ninetalesinksrandbats: {
  //---------------------		randomBattleMoves: ["fireblast", "nastyplot", "scorchingsands", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["heatwave", "nastyplot", "protect", "scorchingsands", "solarbeam"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats PU",
		doublesTier: "DUU",
	},
	ninetalesalolainksrandbats: {
  //---------------------		randomBattleMoves: ["auroraveil", "blizzard", "encore", "freezedry", "moonblast", "nastyplot"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["auroraveil", "blizzard", "encore", "freezedry", "moonblast"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats RU",
		doublesTier: "DUU",
	},
	wigglytuffinksrandbats: {
		randomBattleMoves: ["dazzlinggleam", "fireblast", "healbell", "lightscreen", "reflect", "stealthrock"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["dazzlinggleam", "healpulse", "helpinghand", "hypervoice", "thunderwave"],
		randomDoubleBattleLevel: 90,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	golduckinksrandbats: {
		randomBattleMoves: ["calmmind", "focusblast", "icebeam", "psyshock", "scald", "substitute"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["calmmind", "encore", "icebeam", "muddywater", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	rapidashgalarinksrandbats: {
		randomBattleMoves: ["highhorsepower", "morningsun", "playrough", "swordsdance", "zenheadbutt"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["highhorsepower", "playrough", "protect", "swordsdance", "zenheadbutt"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	dewgonginksrandbats: {
		randomBattleMoves: ["surf", "icebeam", "perishsong", "encore", "toxic", "protect"],
		randomDoubleBattleMoves: ["liquidation", "icebeam", "protect", "helpinghand", "fakeout", "encore", "icywind", "toxic"],
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	cloysterinksrandbats: {
		randomBattleMoves: ["explosion", "hydropump", "iciclespear", "rockblast", "shellsmash"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["iceshard", "iciclespear", "liquidation", "protect", "rockblast", "shellsmash"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	starmieinksrandbats: {
		randomBattleMoves: ["hydropump", "psyshock", "rapidspin", "recover", "scald", "thunderbolt"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["flipturn", "hydropump", "icebeam", "protect", "psyshock", "thunderbolt"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	mrmimeinksrandbats: {
		randomBattleMoves: ["dazzlinggleam", "focusblast", "healingwish", "nastyplot", "psychic", "snowfort"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["dazzlinggleam", "fakeout", "icywind", "lightscreen", "psychic", "reflect"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	mrmimegalarinksrandbats: {
		randomBattleMoves: ["focusblast", "freezedry", "nastyplot", "psychic", "rapidspin", "snowfort"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["fakeout", "focusblast", "freezedry", "nastyplot", "protect", "psychic"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats NFE",
	},
	mrrimeinksrandbats: {
		randomBattleMoves: ["focusblast", "freezedry", "psychic", "rapidspin", "slackoff", "trick", "snowfort"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["fakeout", "focusblast", "freezedry", "icywind", "protect", "psychic", "rapidspin"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	jynxinksrandbats: {
		randomBattleMoves: ["focusblast", "icebeam", "lovelykiss", "nastyplot", "psyshock", "trick"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["focusblast", "icebeam", "lovelykiss", "nastyplot", "psychic"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	laprasinksrandbats: {
		randomBattleMoves: ["icebeam", "thunderbolt", "healbell", "toxic", "hydropump", "substitute"],
		randomDoubleBattleMoves: ["freezedry", "hydropump", "helpinghand", "protect", "iceshard", "icywind"],
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	glaceoninksrandbats: {
		randomBattleMoves: ["freezedry", "protect", "shadowball", "toxic", "wish", "snowfort"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["blizzard", "freezedry", "helpinghand", "protect", "shadowball", "wish"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	sylveoninksrandbats: {
		randomBattleMoves: ["calmmind", "hypervoice", "mysticalfire", "protect", "psyshock", "shadowball", "wish"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["calmmind", "hypervoice", "mysticalfire", "protect", "psyshock"],
		randomDoubleBattleLevel: 80,
		tier: "Inksrandbats RU",
		doublesTier: "DUU",
	},
	omastarinksrandbats: {
		randomBattleMoves: ["earthpower", "hydropump", "icebeam", "shellsmash", "spikes", "stealthrock"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["earthpower", "icebeam", "muddywater", "shellsmash"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	vaporeoninksrandbats: {
		randomBattleMoves: ["healbell", "icebeam", "protect", "scald", "toxic", "wish"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["healbell", "icywind", "protect", "scald", "toxic", "wish"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	snorlaxinksrandbats: {
		randomBattleMoves: ["darkestlariat", "doubleedge", "earthquake", "facade", "heatcrash"],
		randomBattleLevel: 84,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	articunoinksrandbats: {
		randomBattleMoves: ["defog", "freezedry", "healbell", "roost", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["freezedry", "healbell", "hurricane", "icebeam", "roost", "toxic"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	articunogalarinksrandbats: {
		randomBattleMoves: ["airslash", "calmmind", "freezingglare", "recover"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["calmmind", "freezingglare", "hurricane", "recover", "tailwind"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats RU",
		doublesTier: "DUU",
	},
	dragonairinksrandbats: {
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	togekissinksrandbats: {
		randomBattleMoves: ["airslash", "aurasphere", "fireblast", "nastyplot", "roost", "thunderwave", "trick"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["airslash", "dazzlinggleam", "followme", "heatwave", "protect", "tailwind"],
		randomDoubleBattleLevel: 80,
		tier: "Inksrandbats RU",
		doublesTier: "DUU",
	},
	jumpluffinksrandbats: {
		randomBattleMoves: ["swordsdance", "sleeppowder", "uturn", "encore", "toxic", "acrobatics", "leechseed", "seedbomb", "substitute", "strengthsap", "snowfort"],
		randomDoubleBattleMoves: ["encore", "sleeppowder", "uturn", "helpinghand", "leechseed", "energyball", "ragepowder", "protect", "strengthsap"],
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	heracrossinksrandbats: {
		randomBattleMoves: ["closecombat", "facade", "knockoff", "megahorn", "spikes", "stoneedge"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["closecombat", "facade", "knockoff", "megahorn", "protect", "swordsdance"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	weavileinksrandbats: {
		randomBattleMoves: ["iceshard", "iciclecrash", "knockoff", "lowkick", "swordsdance"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["fakeout", "iceshard", "knockoff", "swordsdance", "tripleaxel"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats UUBL",
		doublesTier: "DUU",
	},
	mamoswineinksrandbats: {
		randomBattleMoves: ["earthquake", "iceshard", "iciclecrash", "knockoff", "stealthrock", "superpower"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["highhorsepower", "iceshard", "iciclecrash", "protect", "rockslide"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats UU",
		doublesTier: "DUU",
	},
	delibirdinksrandbats: {
		randomBattleMoves: ["freezedry", "memento", "rapidspin", "spikes", "snowfort"],
		randomBattleLevel: 100,
		randomDoubleBattleMoves: ["bravebird", "defog", "fakeout", "helpinghand", "icepunch", "memento", "tailwind"],
		randomDoubleBattleLevel: 100,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	suicuneinksrandbats: {
		randomBattleMoves: ["airslash", "calmmind", "icebeam", "rest", "scald", "sleeptalk"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["icebeam", "scald", "snarl", "tailwind", "toxic"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats RU",
		doublesTier: "DUU",
	},
	obstagooninksrandbats: {
		randomBattleMoves: ["bulkup", "closecombat", "facade", "knockoff", "partingshot"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "facade", "knockoff", "obstruct", "partingshot", "taunt"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	gardevoirinksrandbats: {
		randomBattleMoves: ["calmmind", "moonblast", "mysticalfire", "psyshock", "substitute", "trick", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["calmmind", "dazzlinggleam", "moonblast", "mysticalfire", "protect", "psyshock", "trick"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	galladeinksrandbats: {
		randomBattleMoves: ["closecombat", "knockoff", "shadowsneak", "swordsdance", "trick", "zenheadbutt"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["closecombat", "feint", "knockoff", "protect", "swordsdance", "tripleaxel", "zenheadbutt"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	masqueraininksrandbats: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "airslash", "hydropump", "stickyweb"],
		randomDoubleBattleMoves: ["hydropump", "bugbuzz", "airslash", "quiverdance", "tailwind", "stickyweb", "strugglebug", "protect"],
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	delcattyinksrandbats: {
		randomBattleMoves: ["doubleedge", "suckerpunch", "wildcharge", "fakeout", "thunderwave", "healbell", "snowfort"],
		randomDoubleBattleMoves: ["doubleedge", "suckerpunch", "fakeout", "thunderwave", "protect", "helpinghand"],
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	mawileinksrandbats: {
		randomBattleMoves: ["ironhead", "playrough", "stealthrock", "suckerpunch", "swordsdance"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["firefang", "ironhead", "playrough", "protect", "suckerpunch", "swordsdance"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	aggroninksrandbats: {
		randomBattleMoves: ["bodypress", "earthquake", "headsmash", "heavyslam", "rockpolish", "stealthrock"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["aquatail", "bodypress", "headsmash", "heavyslam", "highhorsepower", "rockpolish"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	altariainksrandbats: {
		randomBattleMoves: ["defog", "dracometeor", "earthquake", "fireblast", "roost", "toxic"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["defog", "dracometeor", "fireblast", "roost", "tailwind", "toxic"],
		randomDoubleBattleLevel: 90,
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	lunatoneinksrandbats: {
		randomBattleMoves: ["earthpower", "icebeam", "nastyplot", "powergem", "psychic", "rockpolish", "stealthrock"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["earthpower", "icebeam", "meteorbeam", "protect", "psychic", "trickroom"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	miloticinksrandbats: {
		randomBattleMoves: ["haze", "icebeam", "recover", "scald", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["coil", "hypnosis", "muddywater", "recover"],
		randomDoubleBattleLevel: 80,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	castforminksrandbats: {
		randomBattleMoves: ["weatherball", "blizzard", "thunderbolt", "fireblast"],
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	chinglinginksrandbats: {
		randomBattleMoves: ["psychic", "yawn", "recover", "calmmind", "shadowball", "healingwish", "healbell", "taunt"],
		tier: "Inksrandbats LC",
	},
	chimechoinksrandbats: {
		randomBattleMoves: ["psychic", "yawn", "recover", "calmmind", "shadowball", "healingwish", "healbell", "taunt"],
		randomDoubleBattleMoves: ["protect", "psychic", "thunderwave", "recover", "trickroom", "helpinghand", "taunt"],
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	absolinksrandbats: {
		randomBattleMoves: ["closecombat", "knockoff", "playrough", "suckerpunch", "swordsdance"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["closecombat", "knockoff", "protect", "suckerpunch", "swordsdance"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	glalieinksrandbats: {
		randomBattleMoves: ["disable", "earthquake", "freezedry", "protect", "substitute"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["disable", "earthquake", "freezedry", "protect", "substitute"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	froslassinksrandbats: {
		randomBattleMoves: ["destinybond", "poltergeist", "spikes", "taunt", "tripleaxel", "willowisp"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["destinybond", "icebeam", "icywind", "protect", "shadowball", "willowisp"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	walreininksrandbats: {
		randomBattleMoves: ["icebeam", "protect", "surf", "toxic"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["brine", "icebeam", "icywind", "superfang"],
		randomDoubleBattleLevel: 90,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	salamenceinksrandbats: {
		randomBattleMoves: ["defog", "dragondance", "earthquake", "hurricane", "outrage", "roost"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["dragonclaw", "fireblast", "hurricane", "protect", "tailwind"],
		randomDoubleBattleLevel: 82,
		tier: "Inksrandbats UU",
		doublesTier: "DUU",
	},
	metagrossinksrandbats: {
		randomBattleMoves: ["agility", "bulletpunch", "earthquake", "explosion", "meteormash", "stealthrock", "thunderpunch"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["agility", "bulletpunch", "icepunch", "meteormash", "stompingtantrum", "trick", "zenheadbutt"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats RU",
		doublesTier: "DOU",
	},
	regirockinksrandbats: {
		randomBattleMoves: ["bodypress", "curse", "earthquake", "explosion", "rest", "rockslide", "stoneedge"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["bodypress", "curse", "rest", "rockslide"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	regiceinksrandbats: {
		randomBattleMoves: ["focusblast", "icebeam", "rest", "rockpolish", "sleeptalk", "thunderbolt"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["focusblast", "icebeam", "icywind", "rockpolish", "thunderbolt"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	registeelinksrandbats: {
		randomBattleMoves: ["protect", "rest", "seismictoss", "sleeptalk", "stealthrock", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["bodypress", "curse", "ironhead", "rest", "toxic"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	empoleoninksrandbats: {
		randomBattleMoves: ["hydropump", "flashcannon", "grassknot", "defog", "icebeam", "scald", "toxic", "roar", "stealthrock"],
		randomDoubleBattleMoves: ["icywind", "scald", "protect", "grassknot", "flashcannon", "defog"],
		tier: "Inksrandbats UU",
		doublesTier: "(DUU)",
	},
	lopunnyinksrandbats: {
		randomBattleMoves: ["closecombat", "facade", "healingwish", "switcheroo"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["closecombat", "fakeout", "switcheroo", "uturn"],
		randomDoubleBattleLevel: 92,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	bronzonginksrandbats: {
		randomBattleMoves: ["earthquake", "ironhead", "protect", "stealthrock", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["allyswitch", "bodypress", "explosion", "ironhead", "trickroom"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	lucarioinksrandbats: {
		randomBattleMoves: ["closecombat", "extremespeed", "icepunch", "meteormash", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["closecombat", "darkpulse", "extremespeed", "icepunch", "meteormash", "protect", "swordsdance"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	snoverinksrandbats: {
		randomBattleMoves: ["auroraveil", "blizzard", "earthquake", "iceshard", "woodhammer", "snowfort"],
		tier: "Inksrandbats LC",
	},
	abomasnowinksrandbats: {
		randomBattleMoves: ["auroraveil", "blizzard", "earthquake", "iceshard", "woodhammer"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["auroraveil", "blizzard", "focusblast", "iceshard", "protect", "woodhammer"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	rotomfrostinksrandbats: {
		randomBattleMoves: ["blizzard", "nastyplot", "thunderbolt", "voltswitch", "willowisp"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["blizzard", "nastyplot", "protect", "thunderbolt", "willowisp"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats PUBL",
		doublesTier: "(DUU)",
	},
	uxieinksrandbats: {
		randomBattleMoves: ["healbell", "knockoff", "psychic", "stealthrock", "uturn", "yawn"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["helpinghand", "knockoff", "psychic", "stealthrock", "thunderwave", "yawn"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	mespritinksrandbats: {
		randomBattleMoves: ["energyball", "healingwish", "icebeam", "nastyplot", "psychic", "stealthrock", "thunderwave", "uturn"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["dazzlinggleam", "knockoff", "nastyplot", "psychic", "thunderbolt", "thunderwave"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	azelfinksrandbats: {
		randomBattleMoves: ["dazzlinggleam", "fireblast", "nastyplot", "psyshock", "stealthrock", "taunt", "uturn"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["energyball", "fireblast", "nastyplot", "protect", "psychic", "shadowball", "uturn"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats UU",
		doublesTier: "(DUU)",
	},
	regigigasinksrandbats: {
		randomBattleMoves: ["bodyslam", "protect", "substitute", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["bodyslam", "knockoff", "protect", "thunderwave"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	stoutlandinksrandbats: {
		randomBattleMoves: ["crunch", "facade", "playrough", "superpower", "wildcharge", "snowfort"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["crunch", "facade", "helpinghand", "protect", "superpower", "thunderwave"],
		randomDoubleBattleLevel: 90,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	throhinksrandbats: {
		randomBattleMoves: ["bulkup", "circlethrow", "icepunch", "knockoff", "rest", "sleeptalk", "stormthrow"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["facade", "knockoff", "poisonjab", "protect", "stoneedge", "stormthrow", "wideguard"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	sawkinksrandbats: {
		randomBattleMoves: ["bulkup", "closecombat", "knockoff", "poisonjab", "stoneedge"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["closecombat", "helpinghand", "knockoff", "poisonjab", "protect", "rockslide"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats PUBL",
		doublesTier: "(DUU)",
	},
	whimsicottinksrandbats: {
		randomBattleMoves: ["defog", "energyball", "leechseed", "moonblast", "stunspore", "taunt", "uturn", "snowfort"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["encore", "energyball", "helpinghand", "moonblast", "tailwind", "taunt"],
		randomDoubleBattleLevel: 82,
		tier: "Inksrandbats NU",
		doublesTier: "DOU",
	},
	darmanitaninksrandbats: {
		randomBattleMoves: ["earthquake", "flareblitz", "rockslide", "superpower", "uturn", "snowfort"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["earthquake", "flareblitz", "rockslide", "superpower", "uturn"],
		randomDoubleBattleLevel: 82,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	darmanitangalarinksrandbats: {
		randomBattleMoves: ["earthquake", "flareblitz", "iciclecrash", "superpower", "uturn"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["earthquake", "flareblitz", "iciclecrash", "rockslide", "superpower", "uturn"],
		randomDoubleBattleLevel: 80,
		tier: "Inksrandbats Uber",
		doublesTier: "(DUU)",
	},
	darmanitangalarzeninksrandbats: {
		randomBattleMoves: ["bellydrum", "earthquake", "firepunch", "iciclecrash", "substitute"],
		randomBattleLevel: 78,
	},
	cinccinoinksrandbats: {
		randomBattleMoves: ["bulletseed", "knockoff", "rockblast", "tailslap", "uturn", "snowfort"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["bulletseed", "knockoff", "protect", "rockblast", "tailslap", "tripleaxel", "uturn"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	swannainksrandbats: {
		randomBattleMoves: ["bravebird", "roost", "hurricane", "icebeam", "fly", "defog", "scald"],
		randomDoubleBattleMoves: ["bravebird", "hurricane", "icebeam", "tailwind", "scald", "protect"],
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	vanilluxeinksrandbats: {
		randomBattleMoves: ["auroraveil", "blizzard", "explosion", "flashcannon", "freezedry"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["auroraveil", "blizzard", "freezedry", "iceshard", "protect"],
		randomDoubleBattleLevel: 82,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	chandelureinksrandbats: {
		randomBattleMoves: ["calmmind", "energyball", "fireblast", "shadowball", "substitute", "trick"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["calmmind", "energyball", "heatwave", "overheat", "protect", "shadowball", "trick"],
		randomDoubleBattleLevel: 80,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	bearticinksrandbats: {
		randomBattleMoves: ["aquajet", "iciclecrash", "superpower", "swordsdance", "throatchop"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["aquajet", "iciclecrash", "protect", "rockslide", "superpower", "swordsdance", "throatchop"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	cryogonalinksrandbats: {
		randomBattleMoves: ["freezedry", "haze", "rapidspin", "recover", "toxic"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["freezedry", "icebeam", "icywind", "haze", "rapidspin", "recover", "toxic"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	golettinksrandbats: {
		randomBattleMoves: ["snowfort", "earthquake", "poltergeist", "rockpolish", "stoneedge"],
		tier: "Inksrandbats LC",
	},
	golurkinksrandbats: {
		randomBattleMoves: ["dynamicpunch", "earthquake", "poltergeist", "rockpolish", "stoneedge"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["dynamicpunch", "earthquake", "highhorsepower", "icepunch", "poltergeist", "protect"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	bouffalantinksrandbats: {
		randomBattleMoves: ["closecombat", "earthquake", "headcharge", "megahorn", "swordsdance"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["closecombat", "headcharge", "lashout", "protect", "wildcharge"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	cobalioninksrandbats: {
		randomBattleMoves: ["closecombat", "ironhead", "stealthrock", "stoneedge", "swordsdance", "voltswitch"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "ironhead", "protect", "stoneedge", "swordsdance", "thunderwave"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats UU",
		doublesTier: "(DUU)",
	},
	thundurusinksrandbats: {
		randomBattleMoves: ["grassknot", "knockoff", "nastyplot", "sludgewave", "superpower", "thunderbolt", "thunderwave"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["grassknot", "knockoff", "nastyplot", "protect", "sludgebomb", "thunderbolt", "thunderwave"],
		randomDoubleBattleLevel: 82,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	thundurustherianinksrandbats: {
		randomBattleMoves: ["agility", "focusblast", "nastyplot", "psychic", "thunderbolt", "voltswitch"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["agility", "focusblast", "grassknot", "nastyplot", "sludgebomb", "thunderbolt", "voltswitch"],
		randomDoubleBattleLevel: 82,
		tier: "Inksrandbats UU",
		doublesTier: "DUU",
	},
	kyureminksrandbats: {
		randomBattleMoves: ["dracometeor", "earthpower", "freezedry", "icebeam", "roost", "substitute"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["dracometeor", "earthpower", "freezedry", "glaciate", "protect", "roost"],
		randomDoubleBattleLevel: 80,
		tier: "Inksrandbats RU",
		doublesTier: "DUU",
	},
	kyuremblackinksrandbats: {
		randomBattleMoves: ["dragondance", "fusionbolt", "iciclespear", "outrage"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["dragonclaw", "dragondance", "fusionbolt", "iciclespear", "protect", "roost"],
		randomDoubleBattleLevel: 72,
		tier: "Inksrandbats Uber",
		doublesTier: "DOU",
	},
	kyuremwhiteinksrandbats: {
		randomBattleMoves: ["dracometeor", "earthpower", "freezedry", "fusionflare", "icebeam"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "earthpower", "freezedry", "fusionflare", "icebeam", "protect", "roost"],
		randomDoubleBattleLevel: 72,
		tier: "Inksrandbats Uber",
		doublesTier: "DUber",
	},
	meloettainksrandbats: {
		randomBattleMoves: ["uturn", "calmmind", "psyshock", "hypervoice", "shadowball", "focusblast"],
		randomDoubleBattleMoves: ["calmmind", "psyshock", "hypervoice", "shadowball", "focusblast", "protect"],
		tier: "Inksrandbats RUBL",
		doublesTier: "(DUU)",
	},
	meloettapirouetteinksrandbats: {
		randomBattleMoves: ["relicsong", "closecombat", "knockoff", "return"],
		randomDoubleBattleMoves: ["relicsong", "closecombat", "knockoff", "return", "protect"],
	},
	frogadierinksrandbats: {
		randomBattleMoves: ["hydropump", "icebeam", "gunkshot", "uturn", "spikes", "toxicspikes", "taunt", "snowfort"],
		randomDoubleBattleMoves: ["hydropump", "uturn", "gunkshot", "icebeam", "matblock", "taunt", "darkpulse", "protect"],
		tier: "Inksrandbats OU",
		doublesTier: "DUU",
	},
	delphoxinksrandbats: {
		randomBattleMoves: ["calmmind", "fireblast", "psyshock", "grassknot", "switcheroo", "shadowball"],
		randomDoubleBattleMoves: ["calmmind", "fireblast", "psyshock", "grassknot", "switcheroo", "heatwave", "protect"],
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	vivilloninksrandbats: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "hurricane", "energyball", "substitute"],
		randomDoubleBattleMoves: ["sleeppowder", "quiverdance", "hurricane", "bugbuzz", "protect"],
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	furfrouinksrandbats: {
		randomBattleMoves: ["return", "cottonguard", "thunderwave", "substitute", "toxic", "suckerpunch", "uturn", "rest", "snowfort"],
		randomDoubleBattleMoves: ["return", "cottonguard", "uturn", "thunderwave", "snarl", "protect"],
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	meowsticinksrandbats: {
		randomBattleMoves: ["lightscreen", "psychic", "reflect", "thunderwave", "yawn", "snowfort"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["fakeout", "lightscreen", "psychic", "reflect", "thunderwave"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	meowsticfinksrandbats: {
		randomBattleMoves: ["energyball", "nastyplot", "psychic", "shadowball", "thunderbolt"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["fakeout", "nastyplot", "psychic", "shadowball", "thunderbolt"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	tyrantruminksrandbats: {
		randomBattleMoves: ["closecombat", "dragondance", "earthquake", "headsmash", "outrage", "stealthrock"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["closecombat", "dragonclaw", "dragondance", "headsmash", "highhorsepower"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	aurorusinksrandbats: {
		randomBattleMoves: ["ancientpower", "blizzard", "earthpower", "freezedry", "stealthrock", "thunderwave"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["blizzard", "earthpower", "freezedry", "protect", "thunderwave"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	carbinkinksrandbats: {
		randomBattleMoves: ["bodypress", "lightscreen", "moonblast", "reflect", "stealthrock", "snowfort"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["bodypress", "irondefense", "moonblast", "stealthrock"],
		randomDoubleBattleLevel: 90,
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	avalugginksrandbats: {
		randomBattleMoves: ["avalanche", "bodypress", "curse", "rapidspin", "recover"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["avalanche", "bodypress", "curse", "highhorsepower", "protect", "recover"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	noiverninksrandbats: {
		randomBattleMoves: ["defog", "dracometeor", "flamethrower", "hurricane", "roost", "switcheroo"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["boomburst", "dracometeor", "flamethrower", "hurricane", "protect", "tailwind"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	xerneasinksrandbats: {
		randomBattleMoves: ["focusblast", "geomancy", "moonblast", "psyshock", "thunderbolt"],
		randomBattleLevel: 72,
		randomDoubleBattleMoves: ["dazzlinggleam", "focusblast", "geomancy", "moonblast", "thunderbolt"],
		randomDoubleBattleLevel: 72,
		tier: "Inksrandbats Uber",
		doublesTier: "DUber",
	},
	crabominableinksrandbats: {
		randomBattleMoves: ["icehammer", "closecombat", "earthquake", "stoneedge"],
		randomDoubleBattleMoves: ["icehammer", "closecombat", "stoneedge", "protect", "wideguard", "earthquake"],
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	oricoriosensuinksrandbats: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	lycanrocinksrandbats: {
		randomBattleMoves: ["accelerock", "closecombat", "psychicfangs", "stoneedge", "swordsdance"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["accelerock", "closecombat", "drillrun", "protect", "rockslide", "swordsdance"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	miniorinksrandbats: {
		randomBattleMoves: ["shellsmash", "powergem", "acrobatics", "earthquake"],
		randomDoubleBattleMoves: ["shellsmash", "powergem", "acrobatics", "earthquake", "protect"],
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	miniormeteorinksrandbats: {
},	drampainksrandbats: {
		randomBattleMoves: ["dracometeor", "fireblast", "glare", "hypervoice", "roost", "thunderbolt", "snowfort"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "glare", "heatwave", "hurricane", "hypervoice", "protect", "roost"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	eldegossinksrandbats: {
		randomBattleMoves: ["charm", "energyball", "leechseed", "pollenpuff", "rapidspin", "sleeppowder"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["charm", "energyball", "helpinghand", "pollenpuff", "protect", "sleeppowder"],
		randomDoubleBattleLevel: 90,
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	dubwoolinksrandbats: {
		randomBattleMoves: ["bodypress", "cottonguard", "rest", "sleeptalk"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["doubleedge", "protect", "swordsdance", "thunderwave", "wildcharge", "zenheadbutt"],
		randomDoubleBattleLevel: 90,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	hattereneinksrandbats: {
		randomBattleMoves: ["calmmind", "dazzlinggleam", "mysticalfire", "psychic", "psyshock", "trickroom"],
		tier: "Inksrandbats UU",
		doublesTier: "DOU",
	},
	alcremieinksrandbats: {
		randomBattleMoves: ["calmmind", "dazzlinggleam", "mysticalfire", "psychic", "recover", "snowfort"],
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	frosmothinksrandbats: {
		randomBattleMoves: ["bugbuzz", "gigadrain", "hurricane", "icebeam", "quiverdance"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["bugbuzz", "gigadrain", "hurricane", "icebeam", "protect", "quiverdance", "wideguard"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats PU",
		doublesTier: "(DUU)",
	},
	stonjournerinksrandbats: {
		randomBattleMoves: ["earthquake", "heatcrash", "rockpolish", "stealthrock", "stoneedge"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["bodypress", "heatcrash", "heavyslam", "protect", "rockpolish", "stoneedge", "wideguard"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	eiscueinksrandbats: {
		randomBattleMoves: ["bellydrum", "iciclecrash", "liquidation", "reversal", "zenheadbutt"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["bellydrum", "iciclecrash", "liquidation", "protect", "zenheadbutt"],
		randomDoubleBattleLevel: 86,
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	copperajahinksrandbats: {
		randomBattleMoves: ["earthquake", "ironhead", "playrough", "rockslide", "stealthrock"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["heatcrash", "highhorsepower", "ironhead", "playrough", "powerwhip", "protect", "stoneedge"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	arctozoltinksrandbats: {
		randomBattleMoves: ["boltbeak", "freezedry", "iciclecrash", "stompingtantrum", "thunderwave"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["blizzard", "boltbeak", "iciclecrash", "lowkick", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	arctovishinksrandbats: {
		randomBattleMoves: ["bodyslam", "fishiousrend", "freezedry", "iciclecrash", "psychicfangs"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["blizzard", "fishiousrend", "iciclecrash", "protect", "superfang"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	duraludoninksrandbats: {
		randomBattleMoves: ["bodypress", "dracometeor", "flashcannon", "stealthrock", "thunderbolt"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["bodypress", "dracometeor", "dragonpulse", "flashcannon", "protect", "snarl", "thunderbolt"],
		randomDoubleBattleLevel: 88,
		tier: "Inksrandbats NU",
		doublesTier: "(DUU)",
	},
	glastrierinksrandbats: {
		randomBattleMoves: ["closecombat", "highhorsepower", "iciclecrash", "swordsdance"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["avalanche", "closecombat", "highhorsepower", "protect"],
		randomDoubleBattleLevel: 84,
		tier: "Inksrandbats UU",
		doublesTier: "DOU",
	},
	florgesinksrandbats: {
		randomBattleMoves: ["calmmind", "moonblast", "synthesis", "aromatherapy", "wish", "toxic", "protect", "defog"],
		randomDoubleBattleMoves: ["moonblast", "dazzlinggleam", "psychic", "protect", "calmmind", "defog", "helpinghand"],
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	sawsbuckinksrandbats: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "protect"],
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	shaymininksrandbats: {
		randomBattleMoves: ["seedflare", "earthpower", "airslash", "psychic", "rest", "substitute", "leechseed", "snowfort"],
		randomDoubleBattleMoves: ["seedflare", "earthpower", "airslash", "rest", "substitute", "leechseed", "tailwind", "protect"],
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	shayminskyinksrandbats: {
		randomBattleMoves: ["seedflare", "airslash", "earthpower", "hiddenpowerice", "substitute", "leechseed"],
		randomDoubleBattleMoves: ["seedflare", "earthpower", "airslash", "rest", "tailwind", "protect", "hiddenpowerice"],
		tier: "Inksrandbats Uber",
		doublesTier: "DUU",
	},
	
	/*
	
	Past here are the Pokemon i dont want in the format 
	If I just delete them, it'll automatically inherit the sets from the base sheet
	So I just have to manually tell it that every single one of these is illegal
	=__=
	
	*/
	
	// Looks like I deleted some on accident, too. Putting those here
	maractusinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	dittoinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	genesectinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	genesectchillinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	haxorusinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	
	bulbasaurinksrandbats: {
		tier: "Inksrandbats LC",
	},
	ivysaurinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	venusaurinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	venusaurmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	venusaurgmaxinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	charmanderinksrandbats: {
		tier: "Inksrandbats LC",
	},
	charmeleoninksrandbats: {
		tier: "Inksrandbats NFE",
	},
	charizardinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	charizardmegaxinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	charizardmegayinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	charizardgmaxinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	squirtleinksrandbats: {
		tier: "Inksrandbats LC",
	},
	wartortleinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	blastoiseinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	blastoisemegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	blastoisegmaxinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	caterpieinksrandbats: {
		tier: "Inksrandbats LC",
	},
	metapodinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	butterfreeinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	butterfreegmaxinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	weedleinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	kakunainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	beedrillinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	beedrillmegainksrandbats: {
		isNonstandard: "Past",
	},
	pidgeyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pidgeottoinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pidgeotinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pidgeotmegainksrandbats: {
		isNonstandard: "Past",
	},
	rattatainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	rattataalolainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	raticateinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	raticatealolainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	raticatealolatoteminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	spearowinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	fearowinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	ekansinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	arbokinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pichuinksrandbats: {
		tier: "Inksrandbats LC",
	},
	pichuspikyearedinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pikachuinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pikachucosplayinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pikachurockstarinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pikachubelleinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pikachupopstarinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pikachuphdinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pikachulibreinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pikachuoriginalinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pikachuhoenninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pikachusinnohinksrandbats: {
		tier: "Inksrandbats (PU)",
		doublesTier: "(DUU)",
	},
	pikachuunovainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pikachukalosinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pikachualolainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pikachupartnerinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pikachustarterinksrandbats: {
		isNonstandard: "LGPE",
		tier: "Inksrandbats Illegal",
	},
	pikachugmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pikachuworldinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	raichuinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	raichualolainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	sandshrewinksrandbats: {
		tier: "Inksrandbats LC",
	},
	sandslashinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	nidoranfinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	nidoranminksrandbats: {
		tier: "Inksrandbats LC",
	},
	nidorinoinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	nidokinginksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	cleffainksrandbats: {
		tier: "Inksrandbats LC",
	},
	clefairyinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	clefableinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	igglybuffinksrandbats: {
		tier: "Inksrandbats LC",
	},
	jigglypuffinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	zubatinksrandbats: {
		tier: "Inksrandbats LC",
	},
	golbatinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	crobatinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	oddishinksrandbats: {
		tier: "Inksrandbats LC",
	},
	gloominksrandbats: {
		tier: "Inksrandbats NFE",
	},
	vileplumeinksrandbats: {
			isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	bellossominksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	parasinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	parasectinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	venonatinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	venomothinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	diglettinksrandbats: {
		tier: "Inksrandbats LC",
	},
	diglettalolainksrandbats: {
		tier: "Inksrandbats LC",
	},
	dugtrioinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	dugtrioalolainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	meowthinksrandbats: {
		tier: "Inksrandbats LC",
	},
	meowthalolainksrandbats: {
		tier: "Inksrandbats LC",
	},
	meowthgalarinksrandbats: {
		tier: "Inksrandbats LC",
	},
	meowthgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	persianinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	persianalolainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	perrserkerinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	psyduckinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	mankeyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	growlitheinksrandbats: {
		tier: "Inksrandbats LC",
	},
	arcanineinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	poliwaginksrandbats: {
		tier: "Inksrandbats LC",
	},
	poliwhirlinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	poliwrathinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	politoedinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	abrainksrandbats: {
		tier: "Inksrandbats LC",
	},
	kadabrainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	alakazaminksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	alakazammegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	machopinksrandbats: {
		tier: "Inksrandbats LC",
	},
	machokeinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	machampinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	machampgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	bellsproutinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	weepinbellinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	victreebelinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	tentacoolinksrandbats: {
		tier: "Inksrandbats LC",
	},
	tentacruelinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	geodudeinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	geodudealolainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	gravelerinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	graveleralolainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	goleminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	golemalolainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	ponytainksrandbats: {
		tier: "Inksrandbats LC",
	},
	ponytagalarinksrandbats: {
		tier: "Inksrandbats LC",
	},
	rapidashinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	slowpokeinksrandbats: {
		tier: "Inksrandbats LC",
	},
	slowpokegalarinksrandbats: {
		tier: "Inksrandbats LC",
	},
	slowbroinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	slowbromegainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	slowbrogalarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	slowkinginksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	slowkinggalarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	magnemiteinksrandbats: {
		tier: "Inksrandbats LC",
	},
	magnetoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	magnezoneinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	farfetchdinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	farfetchdgalarinksrandbats: {
		tier: "Inksrandbats LC",
	},
	sirfetchdinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	doduoinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	dodrioinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	grimerinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	grimeralolainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	mukinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	mukalolainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	shellderinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	gastlyinksrandbats: {
		tier: "Inksrandbats LC Uber",
	},
	haunterinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	gengarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	gengarmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	gengargmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	onixinksrandbats: {
		tier: "Inksrandbats LC",
	},
	steelixinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	steelixmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	drowzeeinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	hypnoinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	krabbyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	kinglerinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	kinglergmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	voltorbinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	electrodeinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	exeggcuteinksrandbats: {
		tier: "Inksrandbats LC",
	},
	exeggutorinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	exeggutoralolainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	cuboneinksrandbats: {
		tier: "Inksrandbats LC",
	},
	marowakinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	marowakalolainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	marowakalolatoteminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	tyrogueinksrandbats: {
		tier: "Inksrandbats LC",
	},
	hitmonleeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	hitmonchaninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	hitmontopinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	lickitunginksrandbats: {
		tier: "Inksrandbats LC",
	},
	lickilickyinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	koffinginksrandbats: {
		tier: "Inksrandbats LC",
	},
	weezinginksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	weezinggalarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	rhyhorninksrandbats: {
		tier: "Inksrandbats LC",
	},
	rhydoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	rhyperiorinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	happinyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	chanseyinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	blisseyinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tangelainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tangrowthinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	kangaskhaninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	kangaskhanmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	horseainksrandbats: {
		tier: "Inksrandbats LC",
	},
	seadrainksrandbats: {
		tier: "Inksrandbats NFE",
	},
	kingdrainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	goldeeninksrandbats: {
		tier: "Inksrandbats LC",
	},
	seakinginksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	staryuinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	
	mimejrinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	scytherinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	scizorinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	scizormegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	smoochuminksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	elekidinksrandbats: {
		tier: "Inksrandbats LC",
	},
	electabuzzinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	electivireinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	magbyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	magmarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	magmortarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pinsirinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pinsirmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	taurosinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	magikarpinksrandbats: {
		tier: "Inksrandbats LC",
	},
	gyaradosinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	gyaradosmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	laprasgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	eeveeinksrandbats: {
		tier: "Inksrandbats LC",
	},
	eeveestarterinksrandbats: {
		isNonstandard: "LGPE",
		tier: "Inksrandbats Illegal",
	},
	eeveegmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	jolteoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	flareoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	espeoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	umbreoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	leafeoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	
	porygoninksrandbats: {
		tier: "Inksrandbats LC",
	},
	porygon2inksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	porygonzinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	omanyteinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	kabutoinksrandbats: {
		tier: "Inksrandbats LC",
	},
	kabutopsinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	aerodactylinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	aerodactylmegainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	munchlaxinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	snorlaxgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	zapdosinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zapdosgalarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	moltresinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	moltresgalarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	dratiniinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	dragoniteinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	mewtwoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	mewtwomegaxinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	mewtwomegayinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	mewinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	chikoritainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	bayleefinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	meganiuminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	cyndaquilinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	quilavainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	typhlosioninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	totodileinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	croconawinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	feraligatrinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	sentretinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	furretinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	hoothootinksrandbats: {
		tier: "Inksrandbats LC",
	},
	noctowlinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	ledybainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	ledianinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	spinarakinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	ariadosinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	chinchouinksrandbats: {
		tier: "Inksrandbats LC",
	},
	lanturninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	togepiinksrandbats: {
		tier: "Inksrandbats LC",
	},
	togeticinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	natuinksrandbats: {
		tier: "Inksrandbats LC",
	},
	xatuinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	mareepinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	flaaffyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	ampharosinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	ampharosmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	azurillinksrandbats: {
		tier: "Inksrandbats LC",
	},
	marillinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	azumarillinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	bonslyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	sudowoodoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	hoppipinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	skiploominksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	aipominksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	ambipominksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	sunkerninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	sunflorainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	yanmainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	yanmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	wooperinksrandbats: {
		tier: "Inksrandbats LC",
	},
	quagsireinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	murkrowinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	honchkrowinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	misdreavusinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	mismagiusinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	unowninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	wynautinksrandbats: {
		tier: "Inksrandbats LC",
	},
	wobbuffetinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	girafariginksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pinecoinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	forretressinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	dunsparceinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	gligarinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	gliscorinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	snubbullinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	granbullinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	qwilfishinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	shuckleinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	heracrossmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	sneaselinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	teddiursainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	ursaringinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	slugmainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	magcargoinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	swinubinksrandbats: {
		tier: "Inksrandbats LC",
	},
	piloswineinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	corsolainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	corsolagalarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	cursolainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	remoraidinksrandbats: {
		tier: "Inksrandbats LC",
	},
	octilleryinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	mantykeinksrandbats: {
		tier: "Inksrandbats LC",
	},
	mantineinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	skarmoryinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	houndourinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	houndoominksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	houndoommegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	phanpyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	donphaninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	stantlerinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	smeargleinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	miltankinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	raikouinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	enteiinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	larvitarinksrandbats: {
		tier: "Inksrandbats LC",
	},
	pupitarinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	tyranitarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tyranitarmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	lugiainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	hoohinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	celebiinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	treeckoinksrandbats: {
		tier: "Inksrandbats LC",
	},
	grovyleinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	sceptileinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	sceptilemegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	torchicinksrandbats: {
		tier: "Inksrandbats LC",
	},
	combuskeninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	blazikeninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	blazikenmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	mudkipinksrandbats: {
		tier: "Inksrandbats LC",
	},
	marshtompinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	swampertinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	swampertmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	poochyenainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	mightyenainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	zigzagooninksrandbats: {
		tier: "Inksrandbats LC",
	},
	zigzagoongalarinksrandbats: {
		tier: "Inksrandbats LC",
	},
	linooneinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	linoonegalarinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	wurmpleinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	silcooninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	beautiflyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	cascooninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	dustoxinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	lotadinksrandbats: {
		tier: "Inksrandbats LC",
	},
	lombreinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	ludicoloinksrandbats: {
			isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	seedotinksrandbats: {
		tier: "Inksrandbats LC",
	},
	nuzleafinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	shiftryinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	taillowinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	swellowinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	wingullinksrandbats: {
		tier: "Inksrandbats LC",
	},
	pelipperinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	raltsinksrandbats: {
		tier: "Inksrandbats LC",
	},
	kirliainksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	gardevoirmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	gallademegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	surskitinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	shroomishinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	breloominksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	slakothinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	vigorothinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	slakinginksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	nincadainksrandbats: {
		tier: "Inksrandbats LC",
	},
	ninjaskinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	shedinjainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	whismurinksrandbats: {
		tier: "Inksrandbats LC",
	},
	loudredinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	exploudinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	makuhitainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	hariyamainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	nosepassinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	probopassinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	skittyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	sableyeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	sableyemegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	mawilemegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	aroninksrandbats: {
		tier: "Inksrandbats LC",
	},
	laironinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	aggronmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	medititeinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	medichaminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	medichammegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	electrikeinksrandbats: {
		tier: "Inksrandbats LC",
	},
	manectricinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	manectricmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	plusleinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	minuninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	volbeatinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	illumiseinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	budewinksrandbats: {
		tier: "Inksrandbats LC",
	},
	roseliainksrandbats: {
		tier: "Inksrandbats NFE",
	},
	roseradeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	gulpininksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	swalotinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	carvanhainksrandbats: {
		tier: "Inksrandbats LC",
	},
	sharpedoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	sharpedomegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	wailmerinksrandbats: {
		tier: "Inksrandbats LC",
	},
	wailordinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	numelinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	cameruptinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	cameruptmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	torkoalinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	spoinkinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	grumpiginksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	spindainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	trapinchinksrandbats: {
		tier: "Inksrandbats LC",
	},
	vibravainksrandbats: {
		tier: "Inksrandbats NFE",
	},
	flygoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	cacneainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	cacturneinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	swabluinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	altariamegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	zangooseinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	seviperinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	solrockinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	barboachinksrandbats: {
		tier: "Inksrandbats LC",
	},
	whiscashinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	corphishinksrandbats: {
		tier: "Inksrandbats LC",
	},
	crawdauntinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	baltoyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	claydolinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	lileepinksrandbats: {
		tier: "Inksrandbats LC",
	},
	cradilyinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	anorithinksrandbats: {
		tier: "Inksrandbats LC",
	},
	armaldoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	feebasinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	
	
	kecleoninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	shuppetinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	banetteinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	banettemegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	duskullinksrandbats: {
		tier: "Inksrandbats LC",
	},
	dusclopsinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	dusknoirinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tropiusinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	chinglinginksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	absolmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	snoruntinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	glaliemegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	sphealinksrandbats: {
		tier: "Inksrandbats LC",
	},
	sealeoinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	clamperlinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	huntailinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	gorebyssinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	relicanthinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	luvdiscinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	bagoninksrandbats: {
		tier: "Inksrandbats LC",
	},
	shelgoninksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	salamencemegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	belduminksrandbats: {
		tier: "Inksrandbats LC",
	},
	metanginksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	metagrossmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	latiasinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	latiasmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	latiosinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	latiosmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	kyogreinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	kyogreprimalinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	groudoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	groudonprimalinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	rayquazainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	rayquazamegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	jirachiinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	deoxysinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	deoxysattackinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	deoxysdefenseinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	deoxysspeedinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	turtwiginksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	grotleinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	torterrainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	chimcharinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	monfernoinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	infernapeinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	piplupinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	prinplupinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	starlyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	staraviainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	staraptorinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	bidoofinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	bibarelinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	kricketotinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	kricketuneinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	shinxinksrandbats: {
		tier: "Inksrandbats LC",
	},
	luxioinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	luxrayinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	cranidosinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	rampardosinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	shieldoninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	bastiodoninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	burmyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	wormadaminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	wormadamsandyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	wormadamtrashinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	mothiminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	combeeinksrandbats: {
		tier: "Inksrandbats LC",
	},
	vespiqueninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pachirisuinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	buizelinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	floatzelinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	cherubiinksrandbats: {
		tier: "Inksrandbats LC Uber",
	},
	cherriminksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	cherrimsunshineinksrandbats: {
	},
	shellosinksrandbats: {
		tier: "Inksrandbats LC",
	},
	gastrodoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	driflooninksrandbats: {
		tier: "Inksrandbats LC Uber",
	},
	drifbliminksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	bunearyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	lopunnymegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	glameowinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	puruglyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	stunkyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	skuntankinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	bronzorinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	chatotinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	spiritombinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	gibleinksrandbats: {
		tier: "Inksrandbats LC",
	},
	gabiteinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	garchompinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	garchompmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	rioluinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	lucariomegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	hippopotasinksrandbats: {
		tier: "Inksrandbats LC",
	},
	hippowdoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	skorupiinksrandbats: {
		tier: "Inksrandbats LC",
	},
	drapioninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	croagunkinksrandbats: {
		tier: "Inksrandbats LC",
	},
	toxicroakinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	carnivineinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	finneoninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	lumineoninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	abomasnowmegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	rotominksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	rotomheatinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	rotomwashinksrandbats: {
		tier: "Inksrandbats UU",
		doublesTier: "(DUU)",
	},
	
	rotomfaninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	rotommowinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	dialgainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	palkiainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	heatraninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	giratinainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	giratinaorigininksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	cresseliainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	phioneinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	manaphyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	darkraiinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	arceusinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	arceusbuginksrandbats: {
		isNonstandard: "Past",
	},
	arceusdarkinksrandbats: {
		isNonstandard: "Past",
	},
	arceusdragoninksrandbats: {
		isNonstandard: "Past",
	},
	arceuselectricinksrandbats: {
		isNonstandard: "Past",
	},
	arceusfairyinksrandbats: {
		isNonstandard: "Past",
	},
	arceusfightinginksrandbats: {
		isNonstandard: "Past",
	},
	arceusfireinksrandbats: {
		isNonstandard: "Past",
	},
	arceusflyinginksrandbats: {
		isNonstandard: "Past",
	},
	arceusghostinksrandbats: {
		isNonstandard: "Past",
	},
	arceusgrassinksrandbats: {
		isNonstandard: "Past",
	},
	arceusgroundinksrandbats: {
		isNonstandard: "Past",
	},
	arceusiceinksrandbats: {
		isNonstandard: "Past",
	},
	arceuspoisoninksrandbats: {
		isNonstandard: "Past",
	},
	arceuspsychicinksrandbats: {
		isNonstandard: "Past",
	},
	arceusrockinksrandbats: {
		isNonstandard: "Past",
	},
	arceussteelinksrandbats: {
		isNonstandard: "Past",
	},
	arceuswaterinksrandbats: {
		isNonstandard: "Past",
	},
	victiniinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	snivyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	servineinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	serperiorinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	tepiginksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pigniteinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	emboarinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	oshawottinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	dewottinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	samurottinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	patratinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	watchoginksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	lillipupinksrandbats: {
		tier: "Inksrandbats LC",
	},
	herdierinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	purrloininksrandbats: {
		tier: "Inksrandbats LC",
	},
	liepardinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pansageinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	simisageinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pansearinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	simisearinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	panpourinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	simipourinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	munnainksrandbats: {
		tier: "Inksrandbats LC",
	},
	musharnainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pidoveinksrandbats: {
		tier: "Inksrandbats LC",
	},
	tranquillinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	unfezantinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	blitzleinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	zebstrikainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	roggenrolainksrandbats: {
		tier: "Inksrandbats LC",
	},
	boldoreinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	gigalithinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	woobatinksrandbats: {
		tier: "Inksrandbats LC",
	},
	swoobatinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	drilburinksrandbats: {
		tier: "Inksrandbats LC",
	},
	excadrillinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	audinoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	audinomegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	timburrinksrandbats: {
		tier: "Inksrandbats LC",
	},
	gurdurrinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	conkeldurrinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tympoleinksrandbats: {
		tier: "Inksrandbats LC",
	},
	palpitoadinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	seismitoadinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	sewaddleinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	swadlooninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	leavannyinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	venipedeinksrandbats: {
		tier: "Inksrandbats LC",
	},
	whirlipedeinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	scolipedeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	cottoneeinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	petililinksrandbats: {
		tier: "Inksrandbats LC",
	},
	lilligantinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	basculininksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	basculinbluestripedinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	sandileinksrandbats: {
		tier: "Inksrandbats LC",
	},
	krokorokinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	krookodileinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	darumakainksrandbats: {
		tier: "Inksrandbats LC",
	},
	darumakagalarinksrandbats: {
		tier: "Inksrandbats LC",
	},

	dwebbleinksrandbats: {
		tier: "Inksrandbats LC",
	},
	crustleinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	scraggyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	scraftyinksrandbats: {
		tier: "Inksrandbats RU",
		doublesTier: "DUU",
	},
	sigilyphinksrandbats: {
		tier: "Inksrandbats RU",
		doublesTier: "(DUU)",
	},
	yamaskinksrandbats: {
		tier: "Inksrandbats LC",
	},
	yamaskgalarinksrandbats: {
		tier: "Inksrandbats LC",
	},
	cofagrigusinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	runerigusinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tirtougainksrandbats: {
		tier: "Inksrandbats LC",
	},
	carracostainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	archeninksrandbats: {
		tier: "Inksrandbats LC",
	},
	archeopsinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	trubbishinksrandbats: {
		tier: "Inksrandbats LC",
	},
	garbodorinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	garbodorgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zoruainksrandbats: {
		tier: "Inksrandbats LC",
	},
	zoroarkinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	minccinoinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	gothitainksrandbats: {
		tier: "Inksrandbats LC Uber",
	},
	gothoritainksrandbats: {
		tier: "Inksrandbats NFE",
	},
	gothitelleinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	solosisinksrandbats: {
		tier: "Inksrandbats LC",
	},
	duosioninksrandbats: {
		tier: "Inksrandbats NFE",
	},
	reuniclusinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	ducklettinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	vanilliteinksrandbats: {
		tier: "Inksrandbats LC",
	},
	vanillishinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	deerlinginksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	emolgainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	karrablastinksrandbats: {
		tier: "Inksrandbats LC",
	},
	escavalierinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	foongusinksrandbats: {
		tier: "Inksrandbats LC",
	},
	amoongussinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	frillishinksrandbats: {
		tier: "Inksrandbats LC",
	},
	jellicentinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	alomomolainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	joltikinksrandbats: {
		tier: "Inksrandbats LC",
	},
	galvantulainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	ferroseedinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	ferrothorninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	klinkinksrandbats: {
		tier: "Inksrandbats LC",
	},
	klanginksrandbats: {
		tier: "Inksrandbats NFE",
	},
	klinklanginksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tynamoinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	eelektrikinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	eelektrossinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	elgyeminksrandbats: {
		tier: "Inksrandbats LC",
	},
	beheeyeminksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	litwickinksrandbats: {
		tier: "Inksrandbats LC",
	},
	lampentinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	axewinksrandbats: {
		tier: "Inksrandbats LC",
	},
	fraxureinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	cubchooinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	shelmetinksrandbats: {
		tier: "Inksrandbats LC",
	},
	accelgorinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	stunfiskinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	stunfiskgalarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	mienfooinksrandbats: {
		tier: "Inksrandbats LC",
	},
	mienshaoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	druddigoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	golettinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	pawniardinksrandbats: {
		tier: "Inksrandbats LC",
	},
	bisharpinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	ruffletinksrandbats: {
		tier: "Inksrandbats LC Uber",
	},
	braviaryinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	vullabyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	mandibuzzinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	heatmorinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	durantinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	deinoinksrandbats: {
		tier: "Inksrandbats LC",
	},
	zweilousinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	hydreigoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	larvestainksrandbats: {
		tier: "Inksrandbats LC",
	},
	volcaronainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	terrakioninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	virizioninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tornadusinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tornadustherianinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	reshiraminksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zekrominksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	landorusinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	landorustherianinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	
	keldeoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	keldeoresoluteinksrandbats: {
				isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	
	genesectburninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	genesectdouseinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	genesectshockinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	chespininksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	quilladininksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	chesnaughtinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	fennekininksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	braixeninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	froakieinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	greninjainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	greninjaashinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	bunnelbyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	diggersbyinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	fletchlinginksrandbats: {
		tier: "Inksrandbats LC",
	},
	fletchinderinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	talonflameinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	scatterbuginksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	spewpainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	vivillonfancyinksrandbats: {
		isNonstandard: "Past",
	},
	
	litleoinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	pyroarinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	flabebeinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	floetteinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	floetteeternalinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	skiddoinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	gogoatinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	panchaminksrandbats: {
		tier: "Inksrandbats LC",
	},
	pangoroinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	espurrinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	honedgeinksrandbats: {
		tier: "Inksrandbats LC",
	},
	doubladeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	aegislashinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	aegislashbladeinksrandbats: {
				isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	spritzeeinksrandbats: {
		tier: "Inksrandbats LC",
	},
	aromatisseinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	swirlixinksrandbats: {
		tier: "Inksrandbats LC Uber",
	},
	slurpuffinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	inkayinksrandbats: {
		tier: "Inksrandbats LC",
	},
	malamarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	binacleinksrandbats: {
		tier: "Inksrandbats LC",
	},
	barbaracleinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	skrelpinksrandbats: {
		tier: "Inksrandbats LC",
	},
	dragalgeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	clauncherinksrandbats: {
		tier: "Inksrandbats LC",
	},
	clawitzerinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	helioptileinksrandbats: {
		tier: "Inksrandbats LC",
	},
	helioliskinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tyruntinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	amaurainksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	hawluchainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	dedenneinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	goomyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	sliggooinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	goodrainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	klefkiinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	phantumpinksrandbats: {
		tier: "Inksrandbats LC",
	},
	trevenantinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pumpkabooinksrandbats: {
		tier: "Inksrandbats LC",
	},
	pumpkaboosmallinksrandbats: {
		tier: "Inksrandbats LC",
	},
	pumpkaboolargeinksrandbats: {
		tier: "Inksrandbats LC",
	},
	pumpkaboosuperinksrandbats: {
		tier: "Inksrandbats LC",
	},
	gourgeistinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	gourgeistsmallinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	gourgeistlargeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	gourgeistsuperinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	bergmiteinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	noibatinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	yveltalinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zygardeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zygarde10inksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zygardecompleteinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	diancieinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	dianciemegainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	hoopainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	hoopaunboundinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	volcanioninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	rowletinksrandbats: {
		tier: "Inksrandbats LC",
	},
	dartrixinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	decidueyeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	litteninksrandbats: {
		tier: "Inksrandbats LC",
	},
	torracatinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	incineroarinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	popplioinksrandbats: {
		tier: "Inksrandbats LC",
	},
	brionneinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	primarinainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pikipekinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	trumbeakinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	toucannoninksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	yungoosinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	gumshoosinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	gumshoostoteminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	grubbininksrandbats: {
		tier: "Inksrandbats LC",
	},
	charjabuginksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	vikavoltinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	vikavolttoteminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	crabrawlerinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	oricorioinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	oricoriopompominksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	oricoriopauinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	cutieflyinksrandbats: {
		tier: "Inksrandbats LC Uber",
	},
	ribombeeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	ribombeetoteminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	rockruffinksrandbats: {
		tier: "Inksrandbats LC",
	},
	rockruffduskinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	lycanrocmidnightinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	lycanrocduskinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	wishiwashiinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	wishiwashischoolinksrandbats: {
				isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	mareanieinksrandbats: {
		tier: "Inksrandbats LC",
	},
	toxapexinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	mudbrayinksrandbats: {
		tier: "Inksrandbats LC",
	},
	mudsdaleinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	dewpiderinksrandbats: {
		tier: "Inksrandbats LC",
	},
	araquanidinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	araquanidtoteminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	fomantisinksrandbats: {
		tier: "Inksrandbats LC",
	},
	lurantisinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	lurantistoteminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	morelullinksrandbats: {
		tier: "Inksrandbats LC",
	},
	shiinoticinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	salanditinksrandbats: {
		tier: "Inksrandbats LC",
	},
	salazzleinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	salazzletoteminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	stuffulinksrandbats: {
		tier: "Inksrandbats LC",
	},
	bewearinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	bounsweetinksrandbats: {
		tier: "Inksrandbats LC",
	},
	steeneeinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	tsareenainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	comfeyinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	oranguruinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	passimianinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	wimpodinksrandbats: {
		tier: "Inksrandbats LC",
	},
	golisopodinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	sandygastinksrandbats: {
		tier: "Inksrandbats LC",
	},
	palossandinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pyukumukuinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	typenullinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallyinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallybuginksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallydarkinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallydragoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallyelectricinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallyfairyinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallyfightinginksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallyfireinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallyflyinginksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallyghostinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallygrassinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallygroundinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallyice: {		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallypoisoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallypsychicinksrandbats: {
				isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallyrockinksrandbats: {
				isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallysteelinksrandbats: {
				isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silvallywaterinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	komalainksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	turtonatorinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	togedemaruinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	togedemarutoteminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	mimikyuinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	mimikyutoteminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	mimikyubustedtoteminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	bruxishinksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	
	dhelmiseinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	jangmooinksrandbats: {
		tier: "Inksrandbats LC",
	},
	hakamooinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	kommooinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	kommoototeminksrandbats: {
		isNonstandard: "Past",
		tier: "Inksrandbats Illegal",
	},
	tapukokoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tapuleleinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tapubuluinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	tapufiniinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	cosmoginksrandbats: {
		tier: "Inksrandbats LC",
	},
	cosmoeminksrandbats: {
		tier: "Inksrandbats NFE",
	},
	solgaleoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	lunalainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	nihilegoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	buzzwoleinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pheromosainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	xurkitreeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	celesteelainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	kartanainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	guzzlordinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	necrozmainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	necrozmaduskmaneinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	necrozmadawnwingsinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	necrozmaultrainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	magearnainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	magearnaoriginalinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	marshadowinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	poipoleinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	naganadelinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	stakatakainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	blacephaloninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zeraorainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	meltaninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	melmetalinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	melmetalgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	grookeyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	thwackeyinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	rillaboominksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	rillaboomgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	scorbunnyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	rabootinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	cinderaceinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	cinderacegmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	sobbleinksrandbats: {
		tier: "Inksrandbats LC",
	},
	drizzileinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	inteleoninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	inteleongmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	skwovetinksrandbats: {
		tier: "Inksrandbats LC",
	},
	greedentinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	rookideeinksrandbats: {
		tier: "Inksrandbats LC",
	},
	corvisquireinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	corviknightinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	corviknightgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	blipbuginksrandbats: {
		tier: "Inksrandbats LC",
	},
	dottlerinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	orbeetleinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	orbeetlegmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	nickitinksrandbats: {
		tier: "Inksrandbats LC",
	},
	thievulinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	gossifleurinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	woolooinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	chewtleinksrandbats: {
		tier: "Inksrandbats LC",
	},
	drednawinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	drednawgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	yamperinksrandbats: {
		tier: "Inksrandbats LC",
	},
	boltundinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	rolycolyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	carkolinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	coalossalinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	coalossalgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	applininksrandbats: {
		tier: "Inksrandbats LC",
	},
	flappleinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	flapplegmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	appletuninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	appletungmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	silicobrainksrandbats: {
		tier: "Inksrandbats LC",
	},
	sandacondainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	sandacondagmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	cramorantinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	arrokudainksrandbats: {
		tier: "Inksrandbats LC",
	},
	barraskewdainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	toxelinksrandbats: {
		tier: "Inksrandbats LC",
	},
	toxtricityinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	toxtricitylowkeyinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	toxtricitygmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	toxtricitylowkeygmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	sizzlipedeinksrandbats: {
		tier: "Inksrandbats LC",
	},
	centiskorchinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	centiskorchgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	clobbopusinksrandbats: {
		tier: "Inksrandbats LC",
	},
	grapploctinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	sinisteainksrandbats: {
		tier: "Inksrandbats LC",
	},
	polteageistinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	hatennainksrandbats: {
		tier: "Inksrandbats LC",
	},
	hattreminksrandbats: {
		tier: "Inksrandbats NFE",
	},
	
	hatterenegmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	impidimpinksrandbats: {
		tier: "Inksrandbats LC",
	},
	morgreminksrandbats: {
		tier: "Inksrandbats NFE",
	},
	grimmsnarlinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	grimmsnarlgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	milceryinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	alcremiegmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	falinksinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pincurchininksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	snominksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	indeedeeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	indeedeefinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	morpekoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	cufantinksrandbats: {
		tier: "Inksrandbats LC",
	},
	
	copperajahgmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	dracozoltinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	dracovishinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	duraludongmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	dreepyinksrandbats: {
		tier: "Inksrandbats LC",
	},
	drakloakinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	dragapultinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zacianinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zaciancrownedinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zamazentainksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zamazentacrownedinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	eternatusinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	eternatuseternamaxinksrandbats: {
		isNonstandard: "Unobtainable",
		tier: "Inksrandbats Illegal",
	},
	kubfuinksrandbats: {
		tier: "Inksrandbats NFE",
	},
	urshifuinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	urshifurapidstrikeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	urshifugmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	urshifurapidstrikegmaxinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zarudeinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	zarudedadainksrandbats: {
		isNonstandard: "Unobtainable",
		tier: "Inksrandbats Unreleased",
	},
	regielekiinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	regidragoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	
	spectrierinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	calyrexinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	calyrexiceinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	calyrexshadowinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	missingnoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	syclarinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	syclantinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	revenankhinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	embirchinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	flarelminksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP NFE",
	},
	pyroakinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	breeziinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	fidgitinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	rebbleinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	tactiteinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP NFE",
	},
	stratageminksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	privatykeinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	arghonautinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	kitsunohinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	cyclohminksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	colossoilinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	krilowattinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	voodollinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	voodoominksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	scratchetinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	tomohawkinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	necturineinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	necturnainksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	molluxinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	cuprainksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	argalisinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP NFE",
	},
	aurumothinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	brattlerinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	malacondainksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	cawdetinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	cawmodoreinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	volkritterinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	volkrakeninksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	snugglowinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	plasmantainksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	floatoyinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	caimanoeinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP NFE",
	},
	naviathaninksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	crucibelleinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	crucibellemegainksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	pluffleinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	kerfluffleinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	pajantominksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	mumbaoinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	jumbaoinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	fawniferinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	electrelkinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP NFE",
	},
	cariboltinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	smogeckoinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	smoguanainksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP NFE",
	},
	smokomodoinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	swirlpoolinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	coribalisinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP NFE",
	},
	snaelstrominksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	justykeinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	equilibrainksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	solotlinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP LC",
	},
	astrolotlinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	miasmawinksrandbats: {
		isNonstandard: "CAP",
		tier: "Inksrandbats CAP",
	},
	pokestarsmeargleinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarufoinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarufo2inksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarbrycenmaninksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarmtinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarmt2inksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestartransportinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestargiantinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestargiant2inksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarhumanoidinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarmonsterinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarf00inksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarf002inksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarspiritinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarblackdoorinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarwhitedoorinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarblackbeltinksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestargiantpropo2inksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
	pokestarufopropu2inksrandbats: {
		isNonstandard: "Custom",
		tier: "Inksrandbats Illegal",
	},
}; exports.FormatsData = FormatsData;

