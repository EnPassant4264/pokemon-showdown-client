"use strict";Object.defineProperty(exports, "__esModule", {value: true});  
 const FormatsData = {
	/* Commenting these out because they are not functional in the current version
	sawsbuckautumnsylvemonstest: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
		tier: "Sylvemonstest RU",
		doublesTier: "DUU",
	},
	sawsbuckwintersylvemonstest: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
		tier: "Sylvemonstest RU",
		doublesTier: "DUU",
	},
	sawsbucksummersylvemonstest: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
		tier: "Sylvemonstest RU",
		doublesTier: "DUU",
	},
	sawsbuckspringsylvemonstest: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
		tier: "Sylvemonstest RU",
		doublesTier: "DUU",
	},
	deerlingautumnsylvemonstest: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
		tier: "Sylvemonstest LC",
		doublesTier: "DUU",
	},
	deerlingwintersylvemonstest: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
		tier: "Sylvemonstest LC",
		doublesTier: "DUU",
	},
	deerlingsummersylvemonstest: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
		tier: "Sylvemonstest LC",
		doublesTier: "DUU",
	},
	deerlingspringsylvemonstest: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
		tier: "Sylvemonstest LC",
		doublesTier: "DUU",
	},
	*/
	articunosylvemonstest: {
		randomBattleMoves: ["blizzard", "roost", "uturn", "freezedry", "hiddenpowerfire"],
		tier: "Sylvemonstest OU",
	},
	aegislashsylvemonstest: {
		randomBattleMoves: ["kingsshield", "shadowclaw", "stalwartsword", "closecombat", "psychocut", "swordsdance", "shadowsneak"],
		tier: "Sylvemonstest OU",
	},
	aerodactylmegasylvemonstest: {
		randomBattleMoves: ["dualwingbeat", "stoneedge", "icefang", "earthquake", "dragondance", "roost"],
		tier: "Sylvemonstest OU",
	},
	blacephalonsylvemonstest: {
		randomBattleMoves: ["shadowball", "fireblast", "calmmind", "psychic", "hiddenpowerground", "substitute"],
		tier: "Sylvemonstest OU",
	},
	blisseysylvemonstest: {
		randomBattleMoves: ["seismictoss", "teleport", "softboiled", "toxic", "incinerate", "thunderwave", "stealthrock"],
		tier: "Sylvemonstest OU",
	},
	chanseysylvemonstest: {
		randomBattleMoves: ["seismictoss", "teleport", "softboiled", "aromatherapy", "toxic", "thunderwave", "incinerate"],
		tier: "Sylvemonstest OU",
	},
	charizardmegaysylvemonstest: {
		randomBattleMoves: ["flamebullet", "fireblast", "scorchingsands", "airslash", "focusblast", "solarbeam", "roost"],
		tier: "Sylvemonstest OU",
	},
	cinderacesylvemonstest: {
		randomBattleMoves: ["pyroball", "thunderpunch", "gunkshot", "suckerpunch", "hottag", "highjumpkick", "courtchange"],
		tier: "Sylvemonstest OU",
	},
	corviknightsylvemonstest: {
		randomBattleMoves: ["shieldslam", "irondefense", "roost", "bodypress", "slipstream", "defog", "taunt"],
		tier: "Sylvemonstest OU",
	},
	deoxysdefensesylvemonstest: {
		randomBattleMoves: ["sludgebomb", "knockoff", "spikes", "recover", "teleport", "toxicspikes", "taunt", "hiddenpowerfire"],
		tier: "Sylvemonstest UUBL",
	},
	dracozoltsylvemonstest: {
		randomBattleMoves: ["boltbeak", "voltswitch", "firefang", "icepunch", "dragonfang", "earthquake", "dracometeor"],
		tier: "Sylvemonstest OU",
	},
	dragapultsylvemonstest: {
		randomBattleMoves: ["dragondance", "dragondarts", "shadowcharge", "willowisp", "steelwing", "uturn", "fireblast"],
		tier: "Sylvemonstest OU",
	},
	emolgasylvemonstest: {
		randomBattleMoves: ["wildcharge", "slipstream", "knockoff", "seedbomb", "dualwingbeat", "hiddenpowerice"],
		tier: "Sylvemonstest OU",
	},
	espeonsylvemonstest: {
		randomBattleMoves: ["psychic", "psyshock", "trick", "dazzlinggleam", "aurasphere", "shadowball", "hiddenpowerfire"],
		tier: "Sylvemonstest OU",
	},
	excadrillsylvemonstest: {
		randomBattleMoves: ["earthquake", "ironhead", "rockslide", "stealthrock", "rapidspin", "swordsdance", "mudslap"],
		tier: "Sylvemonstest OU",
	},
	ferrothornsylvemonstest: {
		randomBattleMoves: ["seedbomb", "gyroball", "bodypress", "stealthrock", "knockoff", "thunderwave", "spikes"],
		tier: "Sylvemonstest OU",
	},
	gallademegasylvemonstest: {
		randomBattleMoves: ["psychocut", "closecombat", "nightslash", "stalwartsword", "swordsdance", "xscissor"],
		tier: "Sylvemonstest OU",
	},
	garchompsylvemonstest: {
		randomBattleMoves: ["swordsdance", "dualchop", "earthquake", "firefang", "stealthrock", "stoneedge"],
		tier: "Sylvemonstest OU",
	},
	garchompmegasylvemonstest: {
		randomBattleMoves: ["swordsdance", "scaleshot", "earthquake", "firefang", "mudslap", "stoneedge"],
		tier: "Sylvemonstest OU",
	},
	gengarsylvemonstest: {
		randomBattleMoves: ["hauntingscream", "sludgebomb", "focusblast", "dazzlinggleam", "nastyplot", "destinybond"],
		tier: "Sylvemonstest OU",
	},
	gliscorsylvemonstest: {
		randomBattleMoves: ["swordsdance", "earthquake", "facade", "slipstream", "moonlight", "toxic", "taunt"],
		tier: "Sylvemonstest OU",
	},
	goodrasylvemonstest: {
		randomBattleMoves: ["rinseoff", "sludgebomb", "incinerate", "icebeam", "dracometeor", "thunderbolt"],
		tier: "Sylvemonstest OU",
	},
	greninjasylvemonstest: {
		randomBattleMoves: ["hydropump", "gunkshot", "icebeam", "spikes", "riverstream", "hiddenpowerfire", "grassknot"],
		tier: "Sylvemonstest OU",
	},
	heatransylvemonstest: {
		randomBattleMoves: ["magmastorm", "metalsound", "taunt", "toxic", "stealthrock", "earthpower"],
		tier: "Sylvemonstest OU",
	},
	hydreigonsylvemonstest: {
		randomBattleMoves: ["nastyplot", "darkpulse", "dragonpulse", "fireblast", "roost", "flashcannon", "uturn"],
		tier: "Sylvemonstest OU",
	},
	infernapesylvemonstest: {
		randomBattleMoves: ["nastyplot", "flamethrower", "focusblast", "grassknot", "hiddenpowerice", "uturn", "vacuumwave"],
		tier: "Sylvemonstest OU",
	},
	jirachisylvemonstest: {
		randomBattleMoves: ["moonblast", "uturn", "hiddenpowerfire", "wish", "protect", "doomdesire"],
		tier: "Sylvemonstest OU",
	},
	kartanasylvemonstest: {
		randomBattleMoves: ["stalwartsword", "leafblade", "sacredsword", "swordsdance", "knockoff", "psychocut"],
		tier: "Sylvemonstest OU",
	},
	keldeosylvemonstest: {
		randomBattleMoves: ["hydropump", "secretsword", "icywind", "airslash", "hiddenpowerelectric", "flipturn", "taunt"],
		tier: "Sylvemonstest OU",
	},
	kommoosylvemonstest: {
		randomBattleMoves: ["bodypress", "irondefense", "earthquake", "stealthrock", "toxic", "dragonrage"],
		tier: "Sylvemonstest OU",
	},
	landorustheriansylvemonstest: {
		randomBattleMoves: ["earthquake", "stoneedge", "uturn", "swordsdance", "stealthrock", "explosion"],
		tier: "Sylvemonstest OU",
	},
	lopunnymegasylvemonstest: {
		randomBattleMoves: ["closecombat", "return", "hottag", "fakeout", "tripleaxel", "poweruppunch"],
		tier: "Sylvemonstest OU",
	},
	magearnasylvemonstest: {
		randomBattleMoves: ["flashcannon", "fleurcannon", "icebeam", "thunderbolt", "dazzlinggleam", "aurasphere", "calmmind"],
		tier: "Sylvemonstest OU",
	},
	magnezonesylvemonstest: {
		randomBattleMoves: ["thunderbolt", "metalsound", "hiddenpowerfire", "voltswitch", "magnetrise", "bodypress"],
		tier: "Sylvemonstest UUBL",
	},
	manaphysylvemonstest: {
		randomBattleMoves: ["tailglow", "surf", "moonblast", "icebeam", "psychic", "energyball"],
		tier: "Sylvemonstest OU",
	},
	mawilemegasylvemonstest: {
		randomBattleMoves: ["suckerpunch", "swordsdance", "knockoff", "fairycharge", "firefang", "icefang"],
		tier: "Sylvemonstest OU",
	},
	melmetalsylvemonstest: {
		randomBattleMoves: ["doubleironbash", "earthquake", "icepunch", "superpower", "thunderpunch", "acidarmor"],
		tier: "Sylvemonstest OU",
	},
	meloettapirouettesylvemonstest: {
		randomBattleMoves: ["doublehit", "doublekick", "uturn", "knockoff", "thunderpunch", "quickattack"],
		tier: "Sylvemonstest OU",
	},
	palossandsylvemonstest: {
		randomBattleMoves: ["shoreup", "scorchingsands", "toxic", "stealthrock", "souldrain", "irondefense"],
		tier: "Sylvemonstest OU",
	},
	parasectsylvemonstest: {
		randomBattleMoves: ["spore", "bugbite", "shadowcharge", "synthesis", "leechseed", "shadowsneak", "swordsdance"],
		tier: "Sylvemonstest OU",
	},
	raichusylvemonstest: {
		randomBattleMoves: ["ionabsorb", "focusblast", "hiddenpowerice", "voltswitch", "knockoff", "surf"],
		tier: "Sylvemonstest OU",
	},
	scizormegasylvemonstest: {
		randomBattleMoves: ["uturn", "bulletpunch", "swordsdance", "morningsun", "brickbreak", "defog"],
		tier: "Sylvemonstest OU",
	},
	serperiorsylvemonstest: {
		randomBattleMoves: ["leafstorm", "dracometeor", "hiddenpowerfire", "synthesis", "leechseed"],
		tier: "Sylvemonstest OU",
	},
	slowbrosylvemonstest: {
		randomBattleMoves: ["scald", "slackoff", "teleport", "toxic", "incinerate", "futuresight"],
		tier: "Sylvemonstest OU",
	},
	slowbromegasylvemonstest: {
		randomBattleMoves: ["hydropump", "teleport", "icebeam", "bodypress", "slackoff", "psyshock"],
		tier: "Sylvemonstest OU",
	},
	stakatakasylvemonstest: {
		randomBattleMoves: ["trickroom", "stoneedge", "shadowsneak", "earthquake", "gyroball", "bodypress"],
		tier: "Sylvemonstest OU",
	},
	swampertmegasylvemonstest: {
		randomBattleMoves: ["aquaticassault", "earthquake", "icepunch", "flipturn", "raindance", "bulkup"],
		tier: "Sylvemonstest OU",
	},
	tangrowthsylvemonstest: {
		randomBattleMoves: ["gigadrain", "leaftornado", "hiddenpowerfire", "synthesis", "sleeppowder", "earthquake", "knockoff"],
		tier: "Sylvemonstest OU",
	},
	tapubulusylvemonstest: {
		randomBattleMoves: ["woodhammer", "hornleech", "fairycharge", "closecombat", "swordsdance", "stoneedge"],
		tier: "Sylvemonstest OU",
	},
	tapufinisylvemonstest: {
		randomBattleMoves: ["rinseoff", "scald", "calmmind", "drainingkiss", "taunt", "naturesmadness"],
		tier: "Sylvemonstest OU",
	},
	tapukokosylvemonstest: {
		randomBattleMoves: ["thunderclap", "bravebird", "uturn", "roost", "toxic", "hiddenpowerice"],
		tier: "Sylvemonstest OU",
	},
	tapulelesylvemonstest: {
		randomBattleMoves: ["psychic", "psyshock", "moonblast", "focusblast", "calmmind", "thunderbolt"],
		tier: "Sylvemonstest OU",
	},
	tornadustheriansylvemonstest: {
		randomBattleMoves: ["hurricane", "sludgewave", "focusblast", "nastyplot", "uturn", "taunt"],
		tier: "Sylvemonstest OU",
	},
	toxapexsylvemonstest: {
		randomBattleMoves: ["scald", "recover", "toxicspikes", "knockoff", "haze", "banefulbunker"],
		tier: "Sylvemonstest OU",
	},
	tyranitarsylvemonstest: {
		randomBattleMoves: ["crunch", "pursuit", "stoneedge", "earthquake", "stealthrock", "incinerate"],
		tier: "Sylvemonstest OU",
	},
	tyranitarmegasylvemonstest: {
		randomBattleMoves: ["dragondance", "crunch", "stormstrike", "earthquake", "firefang", "icefang", "pursuit"],
		tier: "Sylvemonstest OU",
	},
	victinisylvemonstest: {
		randomBattleMoves: ["vcreate", "boltstrike", "playrough", "hottag", "brickbreak", "flamewheel"],
		tier: "Sylvemonstest OU",
	},
	volcanionsylvemonstest: {
		randomBattleMoves: ["fireblast", "steameruption", "flamebullet", "sludgebomb", "rinseoff", "earthpower"],
		tier: "Sylvemonstest OU",
	},
	volcaronasylvemonstest: {
		randomBattleMoves: ["quiverdance", "fireblast", "psychic", "gigadrain", "bugbuzz", "roost"],
		tier: "Sylvemonstest OU",
	},
	zapdossylvemonstest: {
		randomBattleMoves: ["voltswitch", "ionabsorb", "roost", "toxic", "hurricane", "defog"],
		tier: "Sylvemonstest OU",
	},
	zeraorasylvemonstest: {
		randomBattleMoves: ["wildcharge", "closecombat", "icepunch", "voltswitch", "knockoff", "bulkup"],
		tier: "Sylvemonstest OU",
	},
	alakazamsylvemonstest: {
		randomBattleMoves: ["nastyplot", "psychic", "teleport", "shadowball", "focusblast", "dazzlinggleam"],
		tier: "Sylvemonstest UUBL",
	},
	azumarillsylvemonstest: {
		randomBattleMoves: ["aquajet", "fairycharge", "aquaticassault", "superpower", "knockoff", "bellydrum", "icepunch"],
		tier: "Sylvemonstest UUBL",
	},
	blazikenmegasylvemonstest: {
		randomBattleMoves: ["flareblitz", "highjumpkick", "earthquake", "hottag", "bravebird", "swordsdance"],
		tier: "Sylvemonstest UUBL",
	},
	charizardmegaxsylvemonstest: {
		randomBattleMoves: ["dragondance", "flareblitz", "dualchop", "earthquake", "thunderpunch", "roost"],
		tier: "Sylvemonstest OU",
	},
	dragonitesylvemonstest: {
		randomBattleMoves: ["riverstream", "roost", "dualwingbeat", "healbell", "defog", "haze", "extremespeed"],
		tier: "Sylvemonstest UUBL",
	},
	flygonsylvemonstest: {
		randomBattleMoves: ["firstimpression", "stickyweb", "twineedle", "uturn", "earthquake", "thunderclap", "dragondance"],
		tier: "Sylvemonstest UU",
	},
	hawluchasylvemonstest: {
		randomBattleMoves: ["swordsdance", "closecombat", "taunt", "acrobatics", "roost", "icepunch"],
		tier: "Sylvemonstest UUBL",
	},
	hoopaunboundsylvemonstest: {
		randomBattleMoves: ["darkpulse", "psychic", "focusblast", "gunkshot", "hyperspacefury", "firepunch"],
		tier: "Sylvemonstest UUBL",
	},
	klinklangsylvemonstest: {
		randomBattleMoves: ["shiftgear", "geargrind", "facade", "magnetrise", "wildcharge", "substitute"],
		tier: "Sylvemonstest UUBL",
	},
	kyuremsylvemonstest: {
		randomBattleMoves: ["sheercold", "freezedry", "roost", "dracometeor", "earthpower", "hiddenpowerfire"],
		tier: "Sylvemonstest UUBL",
	},
	latiasmegasylvemonstest: {
		randomBattleMoves: ["storedpower", "calmmind", "roost", "aurasphere"],
		tier: "Sylvemonstest UUBL",
	},
	latiossylvemonstest: {
		randomBattleMoves: ["psychic", "dracometeor", "mysticalfire", "aurasphere", "icebeam", "slipstream"],
		tier: "Sylvemonstest UUBL",
	},
	latiosmegasylvemonstest: {
		randomBattleMoves: ["psyshock", "aurasphere", "roost", "calmmind", "mysticalfire", "agility", "icebeam"],
		tier: "Sylvemonstest UUBL",
	},
	lycanrocdusksylvemonstest: {
		randomBattleMoves: ["firelash", "stoneedge", "accelerock", "playrough", "closecombat", "swordsdance"],
		tier: "Sylvemonstest OU",
	},
	marowakalolasylvemonstest: {
		randomBattleMoves: ["astonish", "poltergeist", "flareblitz", "bonemerang", "stealthrock", "flamewheel"],
		tier: "Sylvemonstest UUBL",
	},
	medichammegasylvemonstest: {
		randomBattleMoves: ["highjumpkick", "fakeout", "bulletpunch", "psychocut", "icepunch", "thunderpunch"],
		tier: "Sylvemonstest UUBL",
	},
	metagrosssylvemonstest: {
		randomBattleMoves: ["bulletpunch", "meteormash", "psychocut", "stompingtantrum", "pragmastrike", "icepunch", "agility"],
		tier: "Sylvemonstest UUBL",
	},
	mewsylvemonstest: {
		randomBattleMoves: ["bravebird", "closecombat", "dragondance", "flareblitz", "psychicfangs", "swordsdance"],
		tier: "Sylvemonstest UUBL",
	},
	nihilegosylvemonstest: {
		randomBattleMoves: ["meteorshower", "acidmelt", "thunderbolt", "psychic", "stealthrock", "sludgebomb"],
		tier: "Sylvemonstest UUBL",
	},
	pinsirmegasylvemonstest: {
		randomBattleMoves: ["quickattack", "closecombat", "swordsdance", "doublehit", "fellstinger", "earthquake"],
		tier: "Sylvemonstest RUBL",
	},
	scolipedesylvemonstest: {
		randomBattleMoves: ["swordsdance", "poisonjab", "megahorn", "earthquake", "aquatail", "protect"],
		tier: "Sylvemonstest UUBL",
	},
	scythersylvemonstest: {
		randomBattleMoves: ["dualwingbeat", "uturn", "brickbreak", "knockoff", "roost", "swordsdance"],
		tier: "Sylvemonstest UUBL",
	},
	slakingsylvemonstest: {
		randomBattleMoves: ["doubleedge", "earthquake", "suckerpunch", "slackoff", "bulkup", "firepunch"],
		tier: "Sylvemonstest UUBL",
	},
	staraptorsylvemonstest: {
		randomBattleMoves: ["bravebird", "closecombat", "skyuppercut", "slipstream", "pursuit", "roost"],
		tier: "Sylvemonstest UUBL",
	},
	terrakionsylvemonstest: {
		randomBattleMoves: ["stoneedge", "sacredsword", "swordsdance", "earthquake", "psychocut", "stalwartsword"],
		tier: "Sylvemonstest UUBL",
	},
	tornadussylvemonstest: {
		randomBattleMoves: ["hurricane", "weatherball", "uturn", "nastyplot", "focusblast", "taunt"],
		tier: "Sylvemonstest UUBL",
	},
	thundurussylvemonstest: {
		randomBattleMoves: ["wildcharge", "icepunch", "firepunch", "voltswitch", "superpower", "knockoff"],
		tier: "Sylvemonstest UUBL",
	},
	thundurustheriansylvemonstest: {
		randomBattleMoves: ["ionabsorb", "voltswitch", "focusblast", "hiddenpowerice", "incinerate", "grassknot"],
		tier: "Sylvemonstest UU",
	},
	wishiwashisylvemonstest: {
		randomBattleMoves: ["scald", "earthquake", "icebeam", "uturn", "protect", "toxic"],
		tier: "Sylvemonstest UUBL",
	},
	absolmegasylvemonstest: {
		randomBattleMoves: ["knockoff", "closecombat", "swordsdance", "playrough", "suckerpunch", "irontail"],
		tier: "Sylvemonstest RU",
	},
	ambipomsylvemonstest: {
		randomBattleMoves: ["doublehit", "fakeout", "uturn", "knockoff", "poweruppunch", "dualchop"],
		tier: "Sylvemonstest RU",
	},
	altariamegasylvemonstest: {
		randomBattleMoves: ["dragondance", "return", "earthquake", "roost", "fireblast", "cottonguard"],
		tier: "Sylvemonstest RUBL",
	},
	amoongusssylvemonstest: {
		randomBattleMoves: ["spore", "gigadrain", "toxic", "sludgebomb", "synthesis", "hiddenpowerfire"],
		tier: "Sylvemonstest UU",
	},
	archeopssylvemonstest: {
		randomBattleMoves: ["bravebird", "headsmash", "dragondance", "earthquake", "uturn", "heatwave"],
		tier: "Sylvemonstest UU",
	},
	articunogalarsylvemonstest: {
		randomBattleMoves: ["freezingglare", "hurricane", "shadowball", "teleport", "jetstream", "recover", "calmmind"],
		tier: "Sylvemonstest UU",
	},
	azelfsylvemonstest: {
		randomBattleMoves: ["zenheadbutt", "knockoff", "stealthrock", "partingshot", "firepunch", "explosion", "taunt"],
		tier: "Sylvemonstest UU",
	},
	banettemegasylvemonstest: {
		randomBattleMoves: ["shadowcharge", "return", "copycat", "swordsdance", "playrough", "drainpunch"],
		tier: "Sylvemonstest RU",
	},
	barraskewdasylvemonstest: {
		randomBattleMoves: ["aquaticassault", "icefang", "closecombat", "riverstream", "psychicfangs"],
		tier: "Sylvemonstest UU",
	},
	beedrillmegasylvemonstest: {
		randomBattleMoves: ["twineedle", "uturn", "poisonjab", "bugbite", "drillrun", "brickbreak"],
		tier: "Sylvemonstest UU",
	},
	beheeyemsylvemonstest: {
		randomBattleMoves: ["psyshock", "darkpulse", "signalbeam", "teleport", "nastyplot", "thunderbolt", "meteorshower"],
		tier: "Sylvemonstest UU",
	},
	blastoisesylvemonstest: {
		randomBattleMoves: ["scald", "rapidspin", "rinseoff", "icebeam", "toxic", "refresh", "bodypress"],
		tier: "Sylvemonstest RU",
	},
	boltundsylvemonstest: {
		randomBattleMoves: ["thunderfang", "icefang", "firefang", "psychicfangs", "crunch", "voltswitch"],
		tier: "Sylvemonstest UU",
	},
	breloomsylvemonstest: {
		randomBattleMoves: ["spore", "bulletseed", "skyuppercut", "machpunch", "rocktomb", "swordsdance"],
		tier: "Sylvemonstest RU",
	},
	buzzwolesylvemonstest: {
		randomBattleMoves: ["leechlife", "drainpunch", "roost", "toxic", "vampirebite", "bulkup"],
		tier: "Sylvemonstest UU",
	},
	celebisylvemonstest: {
		randomBattleMoves: ["moonblast", "gigadrain", "psychic", "earthpower", "stealthrock", "uturn"],
		tier: "Sylvemonstest UU",
	},
	celesteelasylvemonstest: {
		randomBattleMoves: ["heavyslam", "airslash", "protect", "leechseed", "flamethrower", "earthquake"],
		tier: "Sylvemonstest UU",
	},
	chandeluresylvemonstest: {
		randomBattleMoves: ["souldrain", "overheat", "energyball", "willowisp", "psychic"],
		tier: "Sylvemonstest UU",
	},
	cinccinosylvemonstest: {
		randomBattleMoves: ["tailslap", "heartbeat", "bonerush", "uturn", "knockoff", "bulletseed"],
		tier: "Sylvemonstest UU",
	},
	clefablesylvemonstest: {
		randomBattleMoves: ["moonblast", "moonlight", "teleport", "incinerate", "stealthrock", "aromatherapy"],
		tier: "Sylvemonstest UU",
	},
	cobalionsylvemonstest: {
		randomBattleMoves: ["stalwartsword", "sacredsword", "psychocut", "voltswitch", "stealthrock", "swordsdance"],
		tier: "Sylvemonstest UU",
	},
	cofagrigussylvemonstest: {
		randomBattleMoves: ["bodypress", "hex", "willowisp", "recrystalize", "toxicspikes", "irondefense"],
		tier: "Sylvemonstest UU",
	},
	crawdauntsylvemonstest: {
		randomBattleMoves: ["aquaticassault", "knockoff", "closecombat", "aquajet", "swordsdance"],
		tier: "Sylvemonstest RU",
	},
	cresseliasylvemonstest: {
		randomBattleMoves: ["moonblast", "calmmind", "moonlight", "hiddenpowerfire", "psyshock", "toxic"],
		tier: "Sylvemonstest UU",
	},
	cryogonalsylvemonstest: {
		randomBattleMoves: ["auroraveil", "blizzard", "freezedry", "recover", "defog", "hiddenpowerfire"],
		tier: "Sylvemonstest UU",
	},
	delphoxsylvemonstest: {
		randomBattleMoves: ["fireblast", "psychic", "grassknot", "calmmind", "dazzlinggleam"],
		tier: "Sylvemonstest RU",
	},
	dianciemegasylvemonstest: {
		randomBattleMoves: ["powergem", "moonblast", "mysticalfire", "earthpower", "stealthrock", "moonlight"],
		tier: "Sylvemonstest UU",
	},
	diggersbysylvemonstest: {
		randomBattleMoves: ["return", "earthquake", "mudslap", "uturn", "icepunch", "swordsdance"],
		tier: "Sylvemonstest RU",
	},
	donphansylvemonstest: {
		randomBattleMoves: ["earthquake", "knockoff", "iceshard", "rinseoff", "stealthrock", "rapidspin"],
		tier: "Sylvemonstest RU",
	},
	durantsylvemonstest: {
		randomBattleMoves: ["firstimpression", "bugbite", "ironhead", "superpower", "thunderfang", "honeclaws"],
		tier: "Sylvemonstest UU",
	},
	empoleonsylvemonstest: {
		randomBattleMoves: ["scald", "rinseoff", "icebeam", "defog", "stealthrock", "flashcannon"],
		tier: "Sylvemonstest UU",
	},
	escavaliersylvemonstest: {
		randomBattleMoves: ["bugbite", "stalwartsword", "closecombat", "razorshell", "drillrun", "shieldslam"],
		tier: "Sylvemonstest UU",
	},
	floatzelsylvemonstest: {
		randomBattleMoves: ["aquaticassault", "riverstream", "doublekick", "pragmastrike", "icefang", "skyuppercut"],
		tier: "Sylvemonstest UU",
	},
	floetteeternalsylvemonstest: {
		randomBattleMoves: ["lightofruin", "fairywind", "hiddenpowerfire", "energyball", "calmmind", "synthesis"],
		tier: "Sylvemonstest RU",
	},
	gardevoirmegasylvemonstest: {
		randomBattleMoves: ["psychic", "hypervoice", "mysticalfire", "calmmind", "shadowball", "thunderbolt"],
		tier: "Sylvemonstest UU",
	},
	gigalithsylvemonstest: {
		randomBattleMoves: ["stoneedge", "recrystalize", "bodypress", "stealthrock", "earthquake", "irondefense"],
		tier: "Sylvemonstest UU",
	},
	glastriersylvemonstest: {
		randomBattleMoves: ["closecombat", "iciclecrash", "highhorsepower", "heavyslam", "megahorn", "swordsdance"],
		tier: "Sylvemonstest RU",
	},
	golisopodsylvemonstest: {
		randomBattleMoves: ["firstimpression", "aquaticassault", "spikes", "swordsdance", "closecombat", "aquajet", "leechlife"],
		tier: "Sylvemonstest UU",
	},
	grimmsnarlsylvemonstest: {
		randomBattleMoves: ["reflect", "lightscreen", "fairycharge", "taunt", "thunderwave", "vampirebite"],
		tier: "Sylvemonstest RU",
	},
	gyaradossylvemonstest: {
		randomBattleMoves: ["dragondance", "aquaticassault", "icefang", "earthquake", "powerwhip", "crunch"],
		tier: "Sylvemonstest UU",
	},
	gyaradosmegasylvemonstest: {
		randomBattleMoves: ["dragondance", "aquaticassault", "icefang", "earthquake", "powerwhip", "crunch"],
		tier: "Sylvemonstest UU",
	},
	hatterenesylvemonstest: {
		randomBattleMoves: ["teleport", "trickroom", "dazzlinggleam", "mysticalfire", "moonlight", "psyshock"],
		tier: "Sylvemonstest UU",
	},
	haxorussylvemonstest: {
		randomBattleMoves: ["dragondance", "dualchop", "poisonjab", "earthquake", "firstimpression", "closecombat"],
		tier: "Sylvemonstest UU",
	},
	heracrosssylvemonstest: {
		randomBattleMoves: ["bugbite", "closecombat", "earthquake", "facade", "swordsdance", "pursuit"],
		tier: "Sylvemonstest UU",
	},
	heracrossmegasylvemonstest: {
		randomBattleMoves: ["pinmissile", "armthrust", "swordsdance", "earthquake", "knockoff", "spikes"],
		tier: "Sylvemonstest UU",
	},
	hippowdonsylvemonstest: {
		randomBattleMoves: ["earthquake", "slackoff", "firefang", "whirlwind", "stealthrock", "stoneedge"],
		tier: "Sylvemonstest UU",
	},
	houndoommegasylvemonstest: {
		randomBattleMoves: ["nastyplot", "darkpulse", "suckerpunch", "fireblast", "sludgebomb", "hiddenpowergrass"],
		tier: "Sylvemonstest UU",
	},
	huntailsylvemonstest: {
		randomBattleMoves: ["shellsmash", "aquaticassault", "icefang", "vampirebite", "suckerpunch"],
		tier: "Sylvemonstest UU",
	},
	jolteonsylvemonstest: {
		randomBattleMoves: ["risingvoltage", "hiddenpowerice", "signalbeam", "voltswitch", "toxic"],
		tier: "Sylvemonstest UU",
	},
	kingdrasylvemonstest: {
		randomBattleMoves: ["hydropump", "flipturn", "dracometeor", "hurricane", "scald", "flashcannon"],
		tier: "Sylvemonstest UU",
	},
	krookodilesylvemonstest: {
		randomBattleMoves: ["earthquake", "knockoff", "closecombat", "taunt", "firefang", "stealthrock"],
		tier: "Sylvemonstest UU",
	},
	latiassylvemonstest: {
		randomBattleMoves: ["dracometeor", "psychic", "mysticalfire", "roost", "slipstream", "defog", "icebeam"],
		tier: "Sylvemonstest UU",
	},
	leafeonsylvemonstest: {
		randomBattleMoves: ["grassyglide", "leafblade", "doublekick", "knockoff", "swordsdance"],
		tier: "Sylvemonstest UU",
	},
	lycanrocsylvemonstest: {
		randomBattleMoves: ["headsmash", "extremespeed", "icefang", "closecombat", "firefang", "swordsdance", "stealthrock"],
		tier: "Sylvemonstest UU",
	},
	mamoswinesylvemonstest: {
		randomBattleMoves: ["icefang", "earthquake", "stealthrock", "iceshard", "knockoff", "freezedry"],
		tier: "Sylvemonstest UU",
	},
	mandibuzzsylvemonstest: {
		randomBattleMoves: ["pluck", "roost", "defog", "uturn", "foulplay", "toxic"],
		tier: "Sylvemonstest UU",
	},
	manectricmegasylvemonstest: {
		randomBattleMoves: ["ionabsorb", "flamethrower", "voltswitch", "thunderwave", "hiddenpowerice"],
		tier: "Sylvemonstest UU",
	},
	meloettasylvemonstest: {
		randomBattleMoves: ["hypervoice", "psychic", "focusblast", "uturn", "signalbeam", "shadowball"],
		tier: "Sylvemonstest UU",
	},
	mienshaosylvemonstest: {
		randomBattleMoves: ["fakeout", "return", "closecombat", "hottag", "stoneedge", "knockoff"],
		tier: "Sylvemonstest UU",
	},
	miloticsylvemonstest: {
		randomBattleMoves: ["scald", "recover", "toxic", "haze", "flipturn", "moonblast", "icebeam"],
		tier: "Sylvemonstest UU",
	},
	mismagiussylvemonstest: {
		randomBattleMoves: ["nastyplot", "hauntingscream", "moonblast", "mysticalfire", "thunderbolt", "powergem"],
		tier: "Sylvemonstest UU",
	},
	moltressylvemonstest: {
		randomBattleMoves: ["incinerate", "roost", "scorchingsands", "uturn", "solarbeam", "willowisp"],
		tier: "Sylvemonstest UU",
	},
	morpekosylvemonstest: {
		randomBattleMoves: ["aurawheel", "wildcharge", "protect", "partingshot", "icefang", "rapidspin"],
		tier: "Sylvemonstest UU",
	},
	oricoriopompomsylvemonstest: {
		randomBattleMoves: ["revelationdance", "quiverdance", "fierydance", "airslash"],
		tier: "Sylvemonstest UU",
	},
	pelippersylvemonstest: {
		randomBattleMoves: ["scald", "hurricane", "roost", "uturn", "knockoff", "jetstream", "defog"],
		tier: "Sylvemonstest UU",
	},
	pidgeotmegasylvemonstest: {
		randomBattleMoves: ["hurricane", "aurasphere", "roost", "slipstream", "workup", "heatwave"],
		tier: "Sylvemonstest UU",
	},
	porygonzsylvemonstest: {
		randomBattleMoves: ["nastyplot", "triattack", "shadowball", "thunderbolt", "icebeam", "recover"],
		tier: "Sylvemonstest UU",
	},
	registeelsylvemonstest: {
		randomBattleMoves: ["shieldslam", "irondefense", "stealthrock", "toxic", "bodypress", "protect"],
		tier: "Sylvemonstest UU",
	},
	rhyperiorsylvemonstest: {
		randomBattleMoves: ["stoneedge", "earthquake", "icefang", "stealthrock", "mudslap", "swordsdance", "megahorn"],
		tier: "Sylvemonstest RU",
	},
	ribombeesylvemonstest: {
		randomBattleMoves: ["stickyweb", "bugbuzz", "drainingkiss", "stunspore", "magiccoat", "uturn"],
		tier: "Sylvemonstest RU",
	},
	rillaboomsylvemonstest: {
		randomBattleMoves: ["drumbeating", "thunderclap", "earthquake", "swordsdance", "leafage", "uturn"],
		tier: "Sylvemonstest RU",
	},
	roseradesylvemonstest: {
		randomBattleMoves: ["gigadrain", "venoshock", "hiddenpowerfire", "toxicspikes", "extrasensory", "sleeppowder"],
		tier: "Sylvemonstest UU",
	},
	rotomfansylvemonstest: {
		randomBattleMoves: ["metalsound", "voltswitch", "willowisp", "defog", "painsplit", "ionabsorb"],
		tier: "Sylvemonstest UU",
	},
	rotomheatsylvemonstest: {
		randomBattleMoves: ["nastyplot", "ionabsorb", "overheat", "toxic", "voltswitch", "painsplit"],
		tier: "Sylvemonstest UU",
	},
	rotomwashsylvemonstest: {
		randomBattleMoves: ["nastyplot", "ionabsorb", "hydropump", "voltswitch", "willowisp", "defog", "painsplit"],
		tier: "Sylvemonstest UU",
	},
	sableyemegasylvemonstest: {
		randomBattleMoves: ["knockoff", "recover", "willowisp", "taunt", "astonish"],
		tier: "Sylvemonstest UU",
	},
	salamencesylvemonstest: {
		randomBattleMoves: ["dualwingbeat", "outrage", "firefang", "dragondance", "earthquake", "roost"],
		tier: "Sylvemonstest UU",
	},
	sandslashalolasylvemonstest: {
		randomBattleMoves: ["swordsdance", "spikyshield", "tripleaxel", "earthquake", "ironhead"],
		tier: "Sylvemonstest UU",
	},
	sceptilemegasylvemonstest: {
		randomBattleMoves: ["gigadrain", "dracometeor", "leafstorm", "focusblast", "hiddenpowerfire"],
		tier: "Sylvemonstest UU",
	},
	scizorsylvemonstest: {
		randomBattleMoves: ["swordsdance", "bulletpunch", "uturn", "roost", "brickbreak", "knockoff"],
		tier: "Sylvemonstest UU",
	},
	sharpedomegasylvemonstest: {
		randomBattleMoves: ["aquaticassault", "protect", "crunch", "poisonfang", "riverstream", "psychicfangs"],
		tier: "Sylvemonstest UU",
	},
	sirfetchdsylvemonstest: {
		randomBattleMoves: ["meteorassault", "firstimpression", "skyattack", "knockoff", "swordsdance", "stalwartsword"],
		tier: "Sylvemonstest UU",
	},
	skarmorysylvemonstest: {
		randomBattleMoves: ["bodypress", "bravebird", "roost", "stealthrock", "spikes", "whirlwind"],
		tier: "Sylvemonstest UU",
	},
	slowbrogalarsylvemonstest: {
		randomBattleMoves: ["shellsidearm", "psychic", "flamebullet", "fireblast", "hydropump", "teleport"],
		tier: "Sylvemonstest RU",
	},
	slowkingsylvemonstest: {
		randomBattleMoves: ["scald", "futuresight", "slackoff", "icebeam", "teleport", "thunderwave"],
		tier: "Sylvemonstest RU",
	},
	slowkinggalarsylvemonstest: {
		randomBattleMoves: ["acidmelt", "teleport", "futuresight", "earthquake", "psyshock", "scald"],
		tier: "Sylvemonstest UU",
	},
	starmiesylvemonstest: {
		randomBattleMoves: ["hydropump", "psychic", "icebeam", "thunderbolt", "teleport", "rapidspin"],
		tier: "Sylvemonstest UU",
	},
	steelixmegasylvemonstest: {
		randomBattleMoves: ["shieldslam", "bodypress", "earthquake", "recrystalize", "irondefense", "stealthrock"],
		tier: "Sylvemonstest UU",
	},
	suicunesylvemonstest: {
		randomBattleMoves: ["scald", "icebeam", "calmmind", "rest", "sleeptalk", "airslash"],
		tier: "Sylvemonstest UU",
	},
	togekisssylvemonstest: {
		randomBattleMoves: ["nastyplot", "airslash", "morningsun", "incinerate", "thunderwave", "dazzlinggleam"],
		tier: "Sylvemonstest UU",
	},
	toxtricitysylvemonstest: {
		randomBattleMoves: ["shiftgear", "gunkshot", "thunderclap", "drainpunch", "firepunch", "icepunch"],
		tier: "Sylvemonstest RU",
	},
	toxtricitylowkeysylvemonstest: {
		randomBattleMoves: ["acidmelt", "overdrive", "metalsound", "boomburst", "voltswitch", "snarl"],
		tier: "Sylvemonstest RU",
	},
	typhlosionsylvemonstest: {
		randomBattleMoves: ["eruption", "focusblast", "extrasensory", "fireblast", "hiddenpowergrass"],
		tier: "Sylvemonstest RU",
	},
	unfezantsylvemonstest: {
		randomBattleMoves: ["pluck", "brickbreak", "slipstream", "quickattack", "facade", "nightslash"],
		tier: "Sylvemonstest UU",
	},
	urshifurapidstrikesylvemonstest: {
		randomBattleMoves: ["bulkup", "drainpunch", "surgingstrikes", "substitute"],
		tier: "Sylvemonstest RU",
	},
	uxiesylvemonstest: {
		randomBattleMoves: ["hex", "willowisp", "recover", "uturn", "stealthrock", "knockoff"],
		tier: "Sylvemonstest RU",
	},
	vaporeonsylvemonstest: {
		randomBattleMoves: ["scald", "flipturn", "wish", "protect", "icebeam"],
		tier: "Sylvemonstest UU",
	},
	venusaurmegasylvemonstest: {
		randomBattleMoves: ["gigadrain", "sleeppowder", "sludgebomb", "leechseed", "synthesis", "hiddenpowerfire"],
		tier: "Sylvemonstest UU",
	},
	weavilesylvemonstest: {
		randomBattleMoves: ["knockoff", "tripleaxel", "iceshard", "pursuit", "swordsdance", "lowkick"],
		tier: "Sylvemonstest UU",
	},
	zapdosgalarsylvemonstest: {
		randomBattleMoves: ["thunderouskick", "bravebird", "slipstream", "stompingtantrum", "throatchop", "swordsdance"],
		tier: "Sylvemonstest UU",
	},
	alomomolasylvemonstest: {
		randomBattleMoves: ["riverstream", "toxic", "wish", "protect", "scald", "knockoff"],
		tier: "Sylvemonstest RU",
	},
	ampharosmegasylvemonstest: {
		randomBattleMoves: ["ionabsorb", "dragonpulse", "focusblast", "cottonguard", "voltswitch"],
		tier: "Sylvemonstest RU",
	},
	arctozoltsylvemonstest: {
		randomBattleMoves: ["boltbeak", "icefang", "iceshard", "voltswitch", "recrystalize", "pluck", "lowkick"],
		tier: "Sylvemonstest NU",
	},
	braviarysylvemonstest: {
		randomBattleMoves: ["closecombat", "bravebird", "uturn", "shadowclaw", "ironhead", "honeclaws"],
		tier: "Sylvemonstest RUBL",
	},
	cloystersylvemonstest: {
		randomBattleMoves: ["shellsmash", "bubblebeam", "iciclespear", "rockblast", "hiddenpowerfire"],
		tier: "Sylvemonstest RU",
	},
	conkeldurrsylvemonstest: {
		randomBattleMoves: ["knockoff", "closecombat", "icepunch", "machpunch", "poisonjab", "hottag"],
		tier: "Sylvemonstest RU",
	},
	electabuzzsylvemonstest: {
		randomBattleMoves: ["wildcharge", "icepunch", "voltswitch", "psychic", "focusblast", "firepunch"],
		tier: "Sylvemonstest PUBL",
	},
	electiviresylvemonstest: {
		randomBattleMoves: ["wildcharge", "icepunch", "earthquake", "teleport", "firepunch", "crosschop"],
		tier: "Sylvemonstest PU",
	},
	exeggutorsylvemonstest: {
		randomBattleMoves: ["allterrainblast", "psyshock", "teleport", "hiddenpowerfire", "sleeppowder", "synthesis"],
		tier: "Sylvemonstest RU",
	},
	forretresssylvemonstest: {
		randomBattleMoves: ["shieldslam", "bugbite", "voltswitch", "rapidspin", "spikes", "stealthrock"],
		tier: "Sylvemonstest UU",
	},
	gorebysssylvemonstest: {
		randomBattleMoves: ["shellsmash", "drainingkiss", "hydropump", "psychic", "hiddenpowergrass", "batonpass"],
		tier: "Sylvemonstest RU",
	},
	heliolisksylvemonstest: {
		randomBattleMoves: ["ionabsorb", "hypervoice", "surf", "voltswitch", "darkpulse", "grassknot"],
		tier: "Sylvemonstest NU",
	},
	lanturnsylvemonstest: {
		randomBattleMoves: ["scald", "rinseoff", "ionabsorb", "voltswitch", "toxic", "protect"],
		tier: "Sylvemonstest RU",
	},
	maractussylvemonstest: {
		randomBattleMoves: ["weatherball", "spikes", "gigadrain", "spikyshield", "synthesis"],
		tier: "Sylvemonstest NUBL",
	},
	mimikyusylvemonstest: {
		randomBattleMoves: ["swordsdance", "shadowcharge", "shadowsneak", "fairylock", "drainpunch", "woodhammer"],
		tier: "Sylvemonstest RU",
	},
	moltresgalarsylvemonstest: {
		randomBattleMoves: ["fierywrath", "hurricane", "jetstream", "nastyplot", "morningsun"],
		tier: "Sylvemonstest UU",
	},
	mrmimegalarsylvemonstest: {
		randomBattleMoves: ["teleport", "freezedry", "iceshard", "hiddenpowerfire", "signalbeam", "nastyplot"],
		tier: "Sylvemonstest RU",
	},
	ninetalesalolasylvemonstest: {
		randomBattleMoves: ["auroraveil", "blizzard", "freezedry", "moonblast", "nastyplot", "encore"],
		tier: "Sylvemonstest RUBL",
	},
	pluslesylvemonstest: {
		randomBattleMoves: ["ionabsorb", "nastyplot", "hiddenpowerice", "grassknot", "hottag", "encore"],
		tier: "Sylvemonstest NUBL",
	},
	porygon2sylvemonstest: {
		randomBattleMoves: ["foulplay", "triattack", "teleport", "recover", "thunderwave", "trickroom"],
		tier: "Sylvemonstest RU",
	},
	regidragosylvemonstest: {
		randomBattleMoves: ["dragonenergy", "psychicfangs", "dragonfang", "firefang", "dragondance", "icefang"],
		tier: "Sylvemonstest RU",
	},
	regirocksylvemonstest: {
		randomBattleMoves: ["bodypress", "irondefense", "stoneedge", "firepunch", "stealthrock", "icepunch"],
		tier: "Sylvemonstest RU",
	},
	sceptilesylvemonstest: {
		randomBattleMoves: ["leafstorm", "focusblast", "hiddenpowerice", "energyball", "dragonpulse"],
		tier: "Sylvemonstest RU",
	},
	shayminsylvemonstest: {
		randomBattleMoves: ["seedflare", "leechseed", "earthpower", "substitute", "psychic", "healingwish"],
		tier: "Sylvemonstest RU",
	},
	zebstrikasylvemonstest: {
		randomBattleMoves: ["thunderclap", "doublekick", "flamecharge", "voltswitch"],
		tier: "Sylvemonstest NU",
	},
	blazikensylvemonstest: {
		randomBattleMoves: ["blazekick", "doublekick", "hottag", "earthquake", "swordsdance", "knockoff"],
		tier: "Sylvemonstest NU",
	},
	beedrillsylvemonstest: {
		randomBattleMoves: ["twineedle", "uturn", "toxicspikes", "poisonjab", "roost", "tailwind"],
		tier: "Sylvemonstest PU",
	},
	venomothsylvemonstest: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "sludgebomb", "sleeppowder", "gigadrain"],
		tier: "Sylvemonstest NU",
	},
	lediansylvemonstest: {
		randomBattleMoves: ["closecombat", "bugbite", "uturn", "knockoff", "swordsdance", "machpunch"],
		tier: "Sylvemonstest PU",
	},
	ariadossylvemonstest: {
		randomBattleMoves: ["stickyweb", "poisonjab", "suckerpunch", "bugbite", "swordsdance", "shadowsneak"],
		tier: "Sylvemonstest PU",
	},
	beautiflysylvemonstest: {
		randomBattleMoves: ["quiverdance", "gigadrain", "bugbuzz", "drainingkiss", "aircutter"],
		tier: "Sylvemonstest PU",
	},
	dustoxsylvemonstest: {
		randomBattleMoves: ["poisonfang", "uturn", "toxic", "moonlight", "whirlwind", "bugbite"],
		tier: "Sylvemonstest PU",
	},
	masquerainsylvemonstest: {
		randomBattleMoves: ["quiverdance", "stickyweb", "hydropump", "bugbuzz", "hurricane", "icebeam"],
		tier: "Sylvemonstest PU",
	},
	volbeatsylvemonstest: {
		randomBattleMoves: ["uturn", "moonlight", "bugbite", "thunderwave", "encore", "tailwind"],
		tier: "Sylvemonstest PU",
	},
	wormadamsylvemonstest: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "gigadrain", "synthesis", "hiddenpowerfire", "earthpower"],
		tier: "Sylvemonstest PU",
	},
	wormadamsandysylvemonstest: {
		randomBattleMoves: ["bugbite", "spikes", "synthesis", "fissure", "mudslap", "encore"],
		tier: "Sylvemonstest PU",
	},
	wormadamtrashsylvemonstest: {
		randomBattleMoves: ["bugbite", "stealthrock", "synthesis", "toxic", "metalsound", "mudslap"],
		tier: "Sylvemonstest PU",
	},
	mothimsylvemonstest: {
		randomBattleMoves: ["uturn", "bugbuzz", "airslash", "hiddenpowerground", "quiverdance", "roost"],
		tier: "Sylvemonstest PU",
	},
	arceussylvemonstest: {
		randomBattleMoves: ["swordsdance", "extremespeed", "pragmastrike", "recover", "earthquake"],
		tier: "Sylvemonstest Uber",
	},
	yanmegasylvemonstest: {
		randomBattleMoves: ["dracometeor", "bugbuzz", "gigadrain", "psychic", "protect", "uturn"],
		tier: "Sylvemonstest NU",
	},
	leavannysylvemonstest: {
		randomBattleMoves: ["stickyweb", "bugbite", "leafblade", "magiccoat", "leafage"],
		tier: "Sylvemonstest PU",
	},
	vivillonsylvemonstest: {
		randomBattleMoves: ["sleeppowder", "bugbuzz", "hurricane", "gigadrain", "roost", "substitute"],
		tier: "Sylvemonstest PU",
	},
	togedemarutotemsylvemonstest: {
		randomBattleMoves: ["zingzap", "ironhead", "uturn", "fellstinger", "poisonjab"],
		tier: "Sylvemonstest OU",
	},
	togedemarusylvemonstest: {
		randomBattleMoves: ["zingzap", "ironhead", "uturn", "fakeout", "fairylock", "encore"],
		tier: "Sylvemonstest OU",
	},
	blazikensylvemonstest: {
		randomBattleMoves: ["blazekick", "doublekick", "hottag", "earthquake", "swordsdance", "knockoff"],
		tier: "Sylvemonstest NU",
	},
	raticatealolasylvemonstest: {
		randomBattleMoves: ["knockoff", "suckerpunch", "uturn", "doubleedge", "pluck", "irontail"],
		tier: "Sylvemonstest PU",
	},
	mukalolasylvemonstest: {
		randomBattleMoves: ["poisonfang", "knockoff", "pursuit", "shadowsneak", "firepunch", "icepunch"],
		tier: "Sylvemonstest NU",
	},
	murkrowsylvemonstest: {
		randomBattleMoves: ["roost", "pluck", "pragmastrike", "thunderwave", "heatwave", "haze"],
		tier: "Sylvemonstest PU",
	},
	honchkrowsylvemonstest: {
		randomBattleMoves: ["pragmastrike", "suckerpunch", "bravebird", "superpower", "mudslap"],
		tier: "Sylvemonstest NU",
	},
	granbullsylvemonstest: {
		randomBattleMoves: ["fairycharge", "crunch", "firefang", "suckerpunch", "bulkup", "taunt"],
		tier: "Sylvemonstest PU",
	},
	houndoomsylvemonstest: {
		randomBattleMoves: ["nastyplot", "darkpulse", "fireblast", "sludgebomb", "hiddenpowergrass", "flamecharge"],
		tier: "Sylvemonstest PU",
	},
	mightyenasylvemonstest: {
		randomBattleMoves: ["crunch", "firefang", "irontail", "suckerpunch", "playrough", "facade"],
		tier: "Sylvemonstest PU",
	},
	cacturnesylvemonstest: {
		randomBattleMoves: ["suckerpunch", "seedbomb", "pragmastrike", "drainpunch", "swordsdance", "spikes"],
		tier: "Sylvemonstest PU",
	},
	darkraisylvemonstest: {
		randomBattleMoves: ["darkpulse", "hypnosis", "incinerate", "sludgebomb", "psychic", "thunderbolt"],
		tier: "Sylvemonstest Uber",
	},
	greninjashsylvemonstest: {
		randomBattleMoves: ["hydropump", "riverstream", "darkpulse", "icebeam", "spikes", "scald"],
		tier: "Sylvemonstest Uber",
	},
	arboksylvemonstest: {
		randomBattleMoves: ["poisonfang", "dragonfang", "coil", "suckerpunch", "firefang", "icefang"],
		tier: "Sylvemonstest NU",
	},
	servinesylvemonstest: {
		randomBattleMoves: ["leafstorm", "dracometeor", "flamethrower", "hiddenpowerground"],
		tier: "Sylvemonstest PU",
	},
	golemalolasylvemonstest: {
		randomBattleMoves: ["wildcharge", "rockblast", "firepunch", "earthquake", "icepunch", "voltswitch"],
		tier: "Sylvemonstest PU",
	},
	electrodesylvemonstest: {
		randomBattleMoves: ["thunderbolt", "lightscreen", "reflect", "teleport", "hiddenpowerice", "taunt"],
		tier: "Sylvemonstest NU",
	},
	ampharossylvemonstest: {
		randomBattleMoves: ["thunderbolt", "focusblast", "hiddenpowerice", "agility", "voltswitch"],
		tier: "Sylvemonstest PU",
	},
	minunsylvemonstest: {
		randomBattleMoves: ["thunderbolt", "hiddenpowerice", "hottag", "grassknot", "nastyplot", "voltswitch"],
		tier: "Sylvemonstest NU",
	},
	pachirisusylvemonstest: {
		randomBattleMoves: ["uturn", "nuzzle", "firepunch", "ionabsorb", "superfang", "seedbomb"],
		tier: "Sylvemonstest PU",
	},
	eelektrosssylvemonstest: {
		randomBattleMoves: ["riverstream", "thunderclap", "drainpunch", "firepunch", "knockoff", "aquaticassault"],
		tier: "Sylvemonstest PU",
	},
	furretsylvemonstest: {
		randomBattleMoves: ["doubleedge", "uturn", "knockoff", "firepunch", "coil", "quickattack"],
		tier: "Sylvemonstest PU",
	},
	misdreavussylvemonstest: {
		randomBattleMoves: ["hex", "willowisp", "taunt", "moonlight"],
		tier: "Sylvemonstest NU",
	},
	phionesylvemonstest: {
		randomBattleMoves: ["aquaticassault", "fairylock", "knockoff", "uturn"],
		tier: "Sylvemonstest PU",
	},
	audinosylvemonstest: {
		randomBattleMoves: ["knockoff", "return", "wish", "protect", "thunderwave", "healbell"],
		tier: "Sylvemonstest PU",
	},
	sawsbucksylvemonstest: {
		randomBattleMoves: ["fairycharge", "swordsdance", "leafblade", "earthquake", "wildcharge"],
		tier: "Sylvemonstest PU",
	},
	florgessylvemonstest: {
		randomBattleMoves: ["moonblast", "synthesis", "defog", "psychic", "healbell", "calmmind"],
		tier: "Sylvemonstest NUBL",
	},
	primeapesylvemonstest: {
		randomBattleMoves: ["closecombat", "gunkshot", "earthquake", "icepunch", "hottag", "throatchop"],
		tier: "Sylvemonstest PUBL",
	},
	hariyamasylvemonstest: {
		randomBattleMoves: ["closecombat", "bulletpunch", "knockoff", "earthquake", "hottag", "thunderclap"],
		tier: "Sylvemonstest PU",
	},
	medichamsylvemonstest: {
		randomBattleMoves: ["highjumpkick", "psychocut", "fakeout", "icepunch", "bulletpunch", "drainpunch"],
		tier: "Sylvemonstest PU",
	},
	monfernosylvemonstest: {
		tier: "Sylvemonstest NFE",
	},
	samurottsylvemonstest: {
		randomBattleMoves: ["razorshell", "sacredsword", "stalwartsword", "swordsdance", "aquajet", "xscissor"],
		tier: "Sylvemonstest NU",
	},
	chesnaughtsylvemonstest: {
		randomBattleMoves: ["seedbomb", "shieldslam", "synthesis", "hottag", "spikes", "drainpunch"],
		tier: "Sylvemonstest RU",
	},
	crabrawlersylvemonstest: {
		tier: "Sylvemonstest LC",
	},
	crabominablesylvemonstest: {
		randomBattleMoves: ["poweruppunch", "icehammer", "drainpunch", "ironhead", "earthquake", "crabhammer"],
		tier: "Sylvemonstest PU",
	},
	pidgeotsylvemonstest: {
		randomBattleMoves: ["slipstream", "gigaimpact", "steelwing", "skyattack", "quickattack"],
		tier: "Sylvemonstest PU",
	},
	fearowsylvemonstest: {
		randomBattleMoves: ["uturn", "doubleedge", "plumecannon", "drillrun", "quickattack"],
		tier: "Sylvemonstest PU",
	},
	dodriosylvemonstest: {
		randomBattleMoves: ["swordsdance", "facade", "bravebird", "jumpkick", "quickattack", "knockoff"],
		tier: "Sylvemonstest NU",
	},
	jumpluffsylvemonstest: {
		randomBattleMoves: ["slipstream", "sleeppowder", "synthesis", "seedbomb", "swordsdance", "acrobatics"],
		tier: "Sylvemonstest PU",
	},
	gligarsylvemonstest: {
		randomBattleMoves: ["slipstream", "earthquake", "defog", "bugbite", "moonlight", "stealthrock", "toxic"],
		tier: "Sylvemonstest NU",
	},
	swellowsylvemonstest: {
		randomBattleMoves: ["slipstream", "boomburst", "hurricane", "heatwave"],
		tier: "Sylvemonstest NU",
	},
	tropiussylvemonstest: {
		randomBattleMoves: ["leaftornado", "synthesis", "toxic", "whirlwind", "leechseed", "defog"],
		tier: "Sylvemonstest PU",
	},
	chatotsylvemonstest: {
		randomBattleMoves: ["boomburst", "nastyplot", "chatter", "heatwave", "hauntingscream"],
		tier: "Sylvemonstest PU",
	},
	swannasylvemonstest: {
		randomBattleMoves: ["riverstream", "hurricane", "scald", "defog", "icebeam", "roost"],
		tier: "Sylvemonstest PU",
	},
	shayminskysylvemonstest: {
		randomBattleMoves: ["seedflare", "airslash", "earthpower", "psychic", "dazzlinggleam", "synthesis"],
		tier: "Sylvemonstest Uber",
	},
	toucannonsylvemonstest: {
		randomBattleMoves: ["flamecharge", "plumecannon", "bulletseed", "rockblast", "swordsdance", "roost"],
		tier: "Sylvemonstest PU",
	},
	oricoriosylvemonstest: {
		randomBattleMoves: ["fierydance", "airslash", "roost", "hiddenpowergrass", "quiverdance"],
		tier: "Sylvemonstest NU",
	},
	oricoriopausylvemonstest: {
		randomBattleMoves: ["revelationdance", "airslash", "roost", "fierydance", "quiverdance"],
		tier: "Sylvemonstest NU",
	},
	oricoriosensusylvemonstest: {
		randomBattleMoves: ["revelationdance", "airslash", "roost", "fierydance", "quiverdance", "substitute"],
		tier: "Sylvemonstest NUBL",
	},
	miniorsylvemonstest: {
		randomBattleMoves: ["shellsmash", "acrobatics", "stoneedge", "earthpower", "explosion", "ironhead"],
		tier: "Sylvemonstest PU",
	},
	banettesylvemonstest: {
		randomBattleMoves: ["swordsdance", "shadowpunch", "doubleedge", "drainpunch", "willowisp", "shadowsneak"],
		tier: "Sylvemonstest PU",
	},
	hoopasylvemonstest: {
		randomBattleMoves: ["psychic", "thunderbolt", "shadowball", "energyball", "nastyplot", "astonish"],
		tier: "Sylvemonstest NU",
	},
	victreebelsylvemonstest: {
		randomBattleMoves: ["gigadrain", "acidmelt", "strengthsap", "sleeppowder", "hiddenpowerice"],
		tier: "Sylvemonstest NU",
	},
	meganiumsylvemonstest: {
		randomBattleMoves: ["curse", "seedbomb", "earthquake", "synthesis"],
		tier: "Sylvemonstest NU",
	},
	sunflorasylvemonstest: {
		randomBattleMoves: ["solarbeam", "earthpower", "hiddenpowerfire", "synthesis"],
		tier: "Sylvemonstest PU",
	},
	torterrasylvemonstest: {
		randomBattleMoves: ["seedbomb", "stoneedge", "stealthrock", "synthesis", "earthquake", "roar"],
		tier: "Sylvemonstest PU",
	},
	carnivinesylvemonstest: {
		randomBattleMoves: ["gigadrain", "acidmelt", "synthesis", "growth", "sleeppowder", "hiddenpowerice"],
		tier: "Sylvemonstest PU",
	},
	simisagesylvemonstest: {
		randomBattleMoves: ["swordsdance", "seedbomb", "return", "earthquake", "stoneedge", "icepunch", "fakeout"],
		tier: "Sylvemonstest PU",
	},
	simisearsylvemonstest: {
		randomBattleMoves: ["nastyplot", "fireblast", "hypervoice", "earthpower", "thunderbolt", "flamebullet"],
		tier: "Sylvemonstest PU",
	},
	simipoursylvemonstest: {
		randomBattleMoves: ["riverstream", "hydropump", "thunderbolt", "icebeam", "firepledge", "glare"],
		tier: "Sylvemonstest PU",
	},
	gogoatsylvemonstest: {
		randomBattleMoves: ["bulkup", "seedbomb", "synthesis", "leafage", "wildcharge", "rockslide"],
		tier: "Sylvemonstest PU",
	},
	komalasylvemonstest: {
		randomBattleMoves: ["uturn", "woodhammer", "rapidspin", "knockoff", "slackoff", "yawn"],
		tier: "Sylvemonstest NU",
	},
	raichualolasylvemonstest: {
		randomBattleMoves: ["ionabsorb", "psyshock", "focusblast", "voltswitch", "surf", "hiddenpowerice"],
		tier: "Sylvemonstest OU",
	},
	regicesylvemonstest: {
		randomBattleMoves: ["auroraveil", "blizzard", "recrystalize", "thunderbolt", "freezedry", "hiddenpowerfire"],
		tier: "Sylvemonstest OU",
	},
	metagrossmegasylvemonstest: {
		randomBattleMoves: ["bulletpunch", "meteormash", "psychocut", "earthquake", "icepunch", "thunderpunch"],
		tier: "Sylvemonstest Uber",
	},
	alakazammegasylvemonstest: {
		randomBattleMoves: ["nastyplot", "psyshock", "recover", "focusblast", "shadowball", "teleport"],
		tier: "Sylvemonstest Uber",
	},
	blastoisemegasylvemonstest: {
		randomBattleMoves: ["shellsmash", "hydropump", "focusblast", "flashcannon", "darkpulse", "icebeam"],
		tier: "Sylvemonstest Uber",
	},
	gengarmegasylvemonstest: {
		randomBattleMoves: ["nastyplot", "hauntingscream", "sludgebomb", "focusblast", "destinybond", "dazzlinggleam"],
		tier: "Sylvemonstest Uber",
	},
	lucariomegasylvemonstest: {
		randomBattleMoves: ["nastyplot", "vacuumwave", "aurasphere", "darkpulse", "metalsound", "hiddenpowerice"],
		tier: "Sylvemonstest Uber",
	},
	salamencemegasylvemonstest: {
		randomBattleMoves: ["dragondance", "doubleedge", "roost", "earthquake", "firefang", "dragonfang"],
		tier: "Sylvemonstest Uber",
	},
	kangaskhanmegasylvemonstest: {
		randomBattleMoves: ["fakeout", "rockslide", "return", "icepunch", "firepunch", "earthquake"],
		tier: "Sylvemonstest OU",
	},
	pikachustartersylvemonstest: {
		randomBattleMoves: ["pikapapow", "splishysplash", "floatyfall", "doublekick"],
		tier: "Sylvemonstest Uber",
	},
	eeveestartersylvemonstest: {
		randomBattleMoves: ["veeveevolley", "sizzlyslide", "buzzybuzz", "doublekick", "sparklyswirl", "sappyseed"],
		tier: "Sylvemonstest Uber",
	},
	golemsylvemonstest: {
		randomBattleMoves: ["stoneedge", "earthquake", "suckerpunch", "icepunch", "thunderpunch", "stealthrock"],
		tier: "Sylvemonstest PU",
	},
	cameruptsylvemonstest: {
		randomBattleMoves: ["incinerate", "stealthrock", "earthpower", "hiddenpowergrass", "willowisp", "roar"],
		tier: "Sylvemonstest PU",
	},
	glaliemegasylvemonstest: {
		randomBattleMoves: ["doubleedge", "earthquake", "freezedry", "explosion", "spikes", "iceshard"],
		tier: "Sylvemonstest NU",
	},
	dewgongsylvemonstest: {
		randomBattleMoves: ["riverstream", "waterfall", "iciclespear", "drillrun", "fakeout", "aquajet", "megahorn"],
		tier: "Sylvemonstest PU",
	},
	abomasnowmegasylvemonstest: {
		randomBattleMoves: ["auroraveil", "stormstrike", "woodhammer", "synthesis", "iceshard", "earthquake"],
		tier: "Sylvemonstest NU",
	},
	raticatesylvemonstest: {
		randomBattleMoves: ["facade", "uturn", "pluck", "wildcharge", "swordsdance", "stompingtantrum", "quickattack"],
		tier: "Sylvemonstest PU",
	},
	aipomsylvemonstest: {
		randomBattleMoves: ["tailslap", "armthrust", "knockoff", "uturn", "fakeout"],
		tier: "Sylvemonstest PU",
	},
	girafarigsylvemonstest: {
		randomBattleMoves: ["nastyplot", "hypervoice", "psychic", "thunderbolt", "shadowball", "hiddenpowerfire"],
		tier: "Sylvemonstest PU",
	},
	ursaringsylvemonstest: {
		randomBattleMoves: ["facade", "closecombat", "riverstream", "earthquake", "firepunch", "swordsdance"],
		tier: "Sylvemonstest PU",
	},
	stantlersylvemonstest: {
		randomBattleMoves: ["doubleedge", "earthquake", "doublekick", "suckerpunch", "thunderwave", "workup"],
		tier: "Sylvemonstest PU",
	},
	smearglesylvemonstest: {
		randomBattleMoves: ["spore", "stickyweb", "stealthrock", "taunt"],
		tier: "Sylvemonstest PU",
	},
	vigorothsylvemonstest: {
		randomBattleMoves: ["bulkup", "return", "shadowclaw", "slackoff"],
		tier: "Sylvemonstest PU",
	},
	swalotsylvemonstest: {
		randomBattleMoves: ["acidmelt", "icebeam", "toxic", "stockpile", "swallow", "encore"],
		tier: "Sylvemonstest PU",
	},
	spindasylvemonstest: {
		randomBattleMoves: ["doubleedge", "superpower", "suckerpunch", "rapidspin", "psychocut"],
		tier: "Sylvemonstest PU",
	},
	zangoosesylvemonstest: {
		randomBattleMoves: ["facade", "closecombat", "knockoff", "quickattack", "swordsdance", "firepunch"],
		tier: "Sylvemonstest PU",
	},
	castformsylvemonstest: {
		randomBattleMoves: ["weatherball", "thunder", "hurricane", "icebeam"],
		tier: "Sylvemonstest PU",
	},
	kecleonsylvemonstest: {
		randomBattleMoves: ["thunderpunch", "drainpunch", "knockoff", "shadowsneak"],
		tier: "Sylvemonstest PU",
	},
	bibarelsylvemonstest: {
		randomBattleMoves: ["swordsdance", "aquajet", "return", "liquidation", "pluck"],
		tier: "Sylvemonstest PU",
	},
	puruglysylvemonstest: {
		randomBattleMoves: ["fakeout", "return", "uturn", "knockoff", "playrough"],
		tier: "Sylvemonstest PU",
	},
	watchogsylvemonstest: {
		randomBattleMoves: ["swordsdance", "knockoff", "return", "firepunch", "gunkshot"],
		tier: "Sylvemonstest PU",
	},
	pyroarsylvemonstest: {
		randomBattleMoves: ["fireblast", "hypervoice", "incinerate", "overheat", "darkpulse", "hiddenpowergrass"],
		tier: "Sylvemonstest PU",
	},
	gumshoossylvemonstest: {
		randomBattleMoves: ["trickoom", "uturn", "hyperfang", "firefang", "crunch", "earthquake"],
		tier: "Sylvemonstest PU",
	},
	muksylvemonstest: {
		randomBattleMoves: ["curse", "poisonjab", "firepunch", "rest", "sleeptalk"],
		tier: "Sylvemonstest PU",
	},
	sevipersylvemonstest: {
		randomBattleMoves: ["glare", "sludgewave", "flamethrower", "morningsun", "gigadrain", "darkpulse"],
		tier: "Sylvemonstest PU",
	},
	deoxysattacksylvemonstest: {
		randomBattleMoves: ["sludgebomb", "focusblast", "teleport", "psychoboost", "extremespeed", "hiddenpowerfire"],
		tier: "Sylvemonstest Uber",
	},
	deoxysspeedsylvemonstest: {
		randomBattleMoves: ["spikes", "stealthrock", "taunt", "teleport", "knockoff"],
		tier: "Sylvemonstest Uber",
	},
	hypnosylvemonstest: {
		randomBattleMoves: ["swagger", "thunderwave", "zenheadbutt", "drainpunch"],
		tier: "Sylvemonstest PU",
	},
	unownsylvemonstest: {
		randomBattleMoves: ["hiddenpower", "inverseroom"],
		tier: "Sylvemonstest PU",
	},
	grumpigsylvemonstest: {
		randomBattleMoves: ["thunderwave", "psychic", "calmmind", "shadowball", "focusblast", "energyball"],
		tier: "Sylvemonstest PU",
	},
	chimechosylvemonstest: {
		randomBattleMoves: ["moonlight", "defog", "knockoff", "psychic", "taunt", "thunderwave"],
		tier: "Sylvemonstest PU",
	},
	bruxishsylvemonstest: {
		randomBattleMoves: ["aquaticassault", "icefangs", "psychicfangs", "riverstream", "swordsdance", "aquajet"],
		tier: "Sylvemonstest NUBL",
	},
	magcargosylvemonstest: {
		randomBattleMoves: ["fireblast", "earthpower", "recover", "willowisp", "stealthrock", "solarbeam"],
		tier: "Sylvemonstest PU",
	},
	probopasssylvemonstest: {
		randomBattleMoves: ["voltswitch", "stealthrock", "metalsound", "toxic", "taunt", "earthpower"],
		tier: "Sylvemonstest PU",
	},
	rampardossylvemonstest: {
		randomBattleMoves: ["headsmash", "firepunch", "icepunch", "thunderpunch", "mudslap", "zenheadbutt", "stealthrock"],
		tier: "Sylvemonstest PU",
	},
	bastiodonsylvemonstest: {
		randomBattleMoves: ["shieldslam", "stealthrock", "irondefense", "rest", "sleeptalk", "toxic"],
		tier: "Sylvemonstest PU",
	},
	emboarsylvemonstest: {
		randomBattleMoves: ["accelerock", "flareblitz", "headsmash", "earthquake", "thunderpunch", "stealthrock", "hottag"],
		tier: "Sylvemonstest NU",
	},
	aggronmegasylvemonstest: {
		randomBattleMoves: ["bodypress", "heavyslam", "curse", "stealthrock", "earthquake"],
		tier: "Sylvemonstest NU",
	},
	feraligatrsylvemonstest: {
		randomBattleMoves: ["dragondance", "liquidation", "icefang", "earthquake", "aquajet", "riverstream"],
		tier: "Sylvemonstest NU",
	},
	frogadiersylvemonstest: {
		randomBattleMoves: ["hydropump", "riverstream", "icebeam", "darkpulse", "grassknot", "hiddenpowerfire"],
		tier: "Sylvemonstest PU",
	},
	luvdiscsylvemonstest: {
		randomBattleMoves: ["sweetkiss", "attract", "whirlpool", "toxic"],
		tier: "Sylvemonstest PU",
	},
	prinplupsylvemonstest: {
		tier: "Sylvemonstest PU",
	},
	lumineonsylvemonstest: {
		randomBattleMoves: ["defog", "riverstream", "scald", "rinseoff"],
		tier: "Sylvemonstest PU",
	},
	inteleonsylvemonstest: {
		randomBattleMoves: ["hydropump", "riverstream", "frostbreath", "flamebullet", "snipeshot", "focusenergy"],
		tier: "Sylvemonstest RU",
	},
	spectriersylvemonstest: {
		randomBattleMoves: ["shadowball", "taunt", "willowisp", "nastyplot", "substitute", "darkpulse"],
		tier: "Sylvemonstest OU",
	},
	primarinasylvemonstest: {
		randomBattleMoves: ["hydropump", "moonblast", "psychic", "flipturn", "energyball", "hiddenpowerfire"],
		tier: "Sylvemonstest UU",
	},
	urshifusylvemonstest: {
		randomBattleMoves: ["suckerpunch", "wickedblow", "closecombat", "uturn", "icepunch"],
		tier: "Sylvemonstest Uber",
	},
	audinomegasylvemonstest: {
		randomBattleMoves: ["incinerate", "drainingkiss", "calmmind", "wish", "protect", "thunderwave"],
		tier: "Sylvemonstest RU",
	},
	cameruptmegasylvemonstest: {
		randomBattleMoves: ["stealthrock", "fireblast", "earthpower", "rockslide", "naturepower", "hiddenpowergrass"],
		tier: "Sylvemonstest RU",
	},
	nidokingsylvemonstest: {
		randomBattleMoves: ["poisonjab", "earthquake", "icepunch", "suckerpunch", "thunderpunch", "stealthrock", "firepunch"],
		tier: "Sylvemonstest RU",
	},
	nidoqueensylvemonstest: {
		randomBattleMoves: ["sludgewave", "earthpower", "icebeam", "moonlight", "flamethrower", "toxicspikes", "hottag"],
		tier: "Sylvemonstest NU",
	},
	pheromosasylvemonstest: {
		randomBattleMoves: ["highjumpkick", "tripleaxel", "uturn", "bugbite", "rapidspin", "drillrun"],
		tier: "Sylvemonstest Uber",
	},
	arctovishsylvemonstest: {
		randomBattleMoves: ["fishiousrend", "icefang", "iceshard", "riverstream", "rinseoff", "psychicfangs"],
		tier: "Sylvemonstest PU",
	},
	bisharpsylvemonstest: {
		randomBattleMoves: ["knockoff", "stalwartsword", "suckerpunch", "swordsdance", "stealthrock", "taunt"],
		tier: "Sylvemonstest RU",
	},
	dracovishsylvemonstest: {
		randomBattleMoves: ["fishiousrend", "riverstream", "dragonfang", "earthquake", "crunch", "psychicfangs"],
		tier: "Sylvemonstest OU",
  },
	xurkitreesylvemonstest: {
		randomBattleMoves: ["sleeppowder", "ionabsorb", "energyball", "tailglow", "dazzlinggleam"],
		tier: "Sylvemonstest UUBL",
	},
	regigigassylvemonstest: {
		randomBattleMoves: ["crushgrip", "icepunch", "thunderpunch", "stoneedge", "poweruppunch", "knockoff"],
		tier: "Sylvemonstest Uber",
	},
	delcattysylvemonstest: {
		randomBattleMoves: ["batonpass", "moonlight", "thunderwave", "bodyslam"],
		tier: "Sylvemonstest PU",
	},
	regielekisylvemonstest: {
		randomBattleMoves: ["wildcharge", "voltswitch", "rapidspin", "thunderbolt", "lightscreen", "reflect"],
		tier: "Sylvemonstest UUBL",
	},
	kricketunesylvemonstest: {
		randomBattleMoves: ["stickyweb", "bugbite", "brickbreak", "knockoff", "fellstinger"],
		tier: "Sylvemonstest PU",
	},
	araquanidtotemsylvemonstest: {
		randomBattleMoves: ["lunge", "liquidation", "rest", "sleeptalk"],
		tier: "Sylvemonstest NU",
	},
	gumshoostotemsylvemonstest: {
		randomBattleMoves: ["return", "earthquake", "firepunch", "uturn", "crunch", "zenheadbutt"],
		tier: "Sylvemonstest NU",
	},
	kommoototemsylvemonstest: {
		randomBattleMoves: ["dragondance", "dualchop", "closecombat", "poisonjab", "icepunch"],
		tier: "Sylvemonstest OU",
	},
	lurantistotemsylvemonstest: {
		randomBattleMoves: ["swordsdance", "petalblizzard", "brickbreak", "knockoff", "morningsun", "leafage"],
		tier: "Sylvemonstest PU",
	},
	marowakalolatotemsylvemonstest: {
		randomBattleMoves: ["stealthrock", "shadowbone", "flareblitz", "bonemerang", "swordsdance", "thunderpunch"],
		tier: "Sylvemonstest UUBL",
	},
	mimikyutotemsylvemonstest: {
		randomBattleMoves: ["swordsdance", "shadowclaw", "playrough", "drainpunch", "woodhammer"],
		tier: "Sylvemonstest RU",
	},
	raticatealolatotemsylvemonstest: {
		randomBattleMoves: ["swordsdance", "knockoff", "suckerpunch", "doubleedge", "pluck", "quickattack"],
		tier: "Sylvemonstest PU",
	},
	ribombeetotemsylvemonstest: {
		randomBattleMoves: ["quiverdance", "drainingkiss", "psychic", "bugbuzz", "stunspore", "hiddenpowerfire"],
		tier: "Sylvemonstest RU",
	},
	salazzletotemsylvemonstest: {
		randomBattleMoves: ["nastyplot", "fireblast", "sludgewave", "dragonpulse", "hiddenpowergrass"],
		tier: "Sylvemonstest NUBL",
	},
	vikavolttotemsylvemonstest: {
		randomBattleMoves: ["bugbuzz", "thunderbolt", "roost", "voltswitch", "flashcannon", "hiddenpowerice"],
		tier: "Sylvemonstest NU",
	},
	absolsylvemonstest: {
		randomBattleMoves: ["knockoff", "suckerpunch", "closecombat", "psychocut", "stoneedge", "swordsdance"],
		tier: "Sylvemonstest PU",
	},
	aggronsylvemonstest: {
		randomBattleMoves: ["heavyslam", "bodypress", "headsmash", "earthquake", "icepunch", "aquatail"],
		tier: "Sylvemonstest PU",
	},
	aromatissesylvemonstest: {
		randomBattleMoves: ["moonblast", "sludgebomb", "wish", "protect"],
		tier: "Sylvemonstest NU",
	},
	aurorussylvemonstest: {
		randomBattleMoves: ["hypervoice", "thunderbolt", "recrystalize", "earthpower", "freezedry", "powdersnow"],
		tier: "Sylvemonstest PU",
	},
	centiskorchsylvemonstest: {
		randomBattleMoves: ["flamewheel", "firelash", "bugbite", "powerwhip", "coil"],
		tier: "Sylvemonstest PU",
	},
	clawitzersylvemonstest: {
		randomBattleMoves: ["hydropump", "focusblast", "flamebullet", "riverstream", "sludgebomb", "shadowball"],
		tier: "Sylvemonstest PU",
	},
	claydolsylvemonstest: {
		randomBattleMoves: ["stealthrock", "rapidspin", "teleport", "earthpower", "icebeam", "toxic"],
		tier: "Sylvemonstest NU",
	},
	coalossalsylvemonstest: {
		randomBattleMoves: ["rapidspin", "incinerate", "willowisp", "stealthrock", "bodypress"],
		tier: "Sylvemonstest PU",
	},
	comfeysylvemonstest: {
		randomBattleMoves: ["drainingkiss", "calmmind", "synthesis", "hiddenpowerground"],
		tier: "Sylvemonstest NU",
	},
	cradilysylvemonstest: {
		randomBattleMoves: ["stealthrock", "synthesis", "seedbomb", "earthquake", "toxic"],
		tier: "Sylvemonstest PU",
	},
	cramorantsylvemonstest: {
		randomBattleMoves: ["surf", "riverstream", "jetstream", "roost", "hurricane", "defog"],
		tier: "Sylvemonstest PU",
	},
	druddigonsylvemonstest: {
		randomBattleMoves: ["stealthrock", "dragontail", "firepunch", "morningsun", "glare", "gunkshot"],
		tier: "Sylvemonstest NU",
	},
	duraludonsylvemonstest: {
		randomBattleMoves: ["stealthrock", "metalsound", "dracometeor", "thunderbolt", "bodypress"],
		tier: "Sylvemonstest NU",
	},
	eldegosssylvemonstest: {
		randomBattleMoves: ["slipstream", "gigadrain", "synthesis", "rapidspin", "sleeppowder", "leechseed"],
		tier: "Sylvemonstest NU",
	},
	exeggutoralolasylvemonstest: {
		randomBattleMoves: ["trickroom", "sleeppowder", "leafstorm", "dracometeor", "flamethrower"],
		tier: "Sylvemonstest NU",
	},
	froslasssylvemonstest: {
		randomBattleMoves: ["spikes", "tripleaxel", "poltergeist", "willowisp", "taunt", "iceshard", "destinybond"],
		tier: "Sylvemonstest NU",
	},
	galladesylvemonstest: {
		randomBattleMoves: ["bulkup", "drainpunch", "psychocut", "knockoff", "tripleaxel", "willowisp"],
		tier: "Sylvemonstest NU",
	},
	gastrodonsylvemonstest: {
		randomBattleMoves: ["recover", "scald", "earthpower", "toxic", "icebeam", "yawn"],
		tier: "Sylvemonstest NU",
	},
	gurdurrsylvemonstest: {
		randomBattleMoves: ["bulkup", "drainpunch", "machpunch", "knockoff", "icepunch", "hottag"],
		tier: "Sylvemonstest NU",
	},
	hauntersylvemonstest: {
		randomBattleMoves: ["hauntingscream", "sludgewave", "willowisp", "dazzlinggleam", "destinybond"],
		tier: "Sylvemonstest PU",
	},
	hitmontopsylvemonstest: {
		randomBattleMoves: ["doublekick", "machpunch", "rapidspin", "tripleaxel", "suckerpunch"],
		tier: "Sylvemonstest NU",
	},
	jellicentsylvemonstest: {
		randomBattleMoves: ["strengthsap", "scald", "willowisp", "hex"],
		tier: "Sylvemonstest NU",
	},
	magmortarsylvemonstest: {
		randomBattleMoves: ["flamebullet", "fireblast", "focusblast", "thunderbolt"],
		tier: "Sylvemonstest NU",
	},
	magnetonsylvemonstest: {
		randomBattleMoves: ["metalsound", "thunderbolt", "voltswitch", "hiddenpowerfire"],
		tier: "Sylvemonstest NU",
	},
	malamarsylvemonstest: {
		randomBattleMoves: ["superpower", "knockoff", "psychocut", "pluck"],
		tier: "Sylvemonstest PU",
	},
	mespritsylvemonstest: {
		randomBattleMoves: ["uturn", "icebeam", "psychic", "moonblast", "nastyplot", "hiddenpowerfire"],
		tier: "Sylvemonstest NU",
	},
	miltanksylvemonstest: {
		randomBattleMoves: ["bodyslam", "bodypress", "thunderwave", "milkdrink", "firepunch"],
		tier: "Sylvemonstest NU",
	},
	mudsdalesylvemonstest: {
		randomBattleMoves: ["highhorsepower", "stealthrock", "toxic", "bodypress", "thunderclap"],
		tier: "Sylvemonstest PU",
	},
	ninjasksylvemonstest: {
		randomBattleMoves: ["swordsdance", "dualwingbeat", "leechlife", "batonpass"],
		tier: "Sylvemonstest PU",
	},
	piloswinesylvemonstest: {
		randomBattleMoves: ["stealthrock", "earthquake", "icefang", "iceshard", "freezedry"],
		tier: "Sylvemonstest PU",
	},
	rotomsylvemonstest: {
		randomBattleMoves: ["nastyplot", "ionabsorb", "hex", "willowisp"],
		tier: "Sylvemonstest PU",
	},
	salazzlesylvemonstest: {
		randomBattleMoves: ["toxic", "substitute", "flamethrower", "protect", "sludgebomb"],
		tier: "Sylvemonstest NUBL",
	},
	silvallysylvemonstest: {
		randomBattleMoves: ["swordsdance", "multiattack", "earthquake", "knockoff"],
		tier: "Sylvemonstest PU",
	},
	silvallybugsylvemonstest: {
		randomBattleMoves: ["swordsdance", "multiattack", "earthquake", "thunderclap"],
		tier: "Sylvemonstest PU",
	},
	silvallydarksylvemonstest: {
		randomBattleMoves: ["knockoff", "pursuit", "partingshot", "ironhead"],
		tier: "Sylvemonstest PU",
	},
	silvallydragonsylvemonstest: {
		randomBattleMoves: ["swordsdance", "multiattack", "flamecharge", "ironhead"],
		tier: "Sylvemonstest NU",
	},
	silvallyelectricsylvemonstest: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "icebeam", "recover"],
		tier: "Sylvemonstest PU",
	},
	silvallyfairysylvemonstest: {
		randomBattleMoves: ["multiattack", "recover", "partingshot", "defog"],
		tier: "Sylvemonstest RU",
	},
	silvallyfightingsylvemonstest: {
		randomBattleMoves: ["multiattack", "swordsdance", "ironhead", "knockoff"],
		tier: "Sylvemonstest PU",
	},
	silvallyfiresylvemonstest: {
		randomBattleMoves: ["multiattack", "flamecharge", "earthquake", "thunderclap"],
		tier: "Sylvemonstest PU",
	},
	silvallyflyingsylvemonstest: {
		randomBattleMoves: ["multiattack", "swordsdance", "earthquake", "recover"],
		tier: "Sylvemonstest PU",
	},
	silvallyghostsylvemonstest: {
		randomBattleMoves: ["multiattack", "earthquake", "recover", "uturn"],
		tier: "Sylvemonstest NUBL",
	},
	silvallygrasssylvemonstest: {
		randomBattleMoves: ["multiattack", "flamecharge", "swordsdance", "earthquake"],
		tier: "Sylvemonstest PU",
	},
	silvallygroundsylvemonstest: {
		randomBattleMoves: ["multiattack", "swordsdance", "recover", "pluck"],
		tier: "Sylvemonstest NU",
	},
	silvallyicesylvemonstest: {
		randomBattleMoves: ["nastyplot", "icebeam", "flamethrower", "thunderbolt"],
		tier: "Sylvemonstest PU",
	},
	silvallypoisonsylvemonstest: {
		randomBattleMoves: ["multiattack", "firefang", "partingshot", "recover"],
		tier: "Sylvemonstest PU",
	},
	silvallypsychicsylvemonstest: {
		randomBattleMoves: ["swordsdance", "multiattack", "knockoff", "earthquake"],
		tier: "Sylvemonstest PU",
	},
	silvallyrocksylvemonstest: {
		randomBattleMoves: ["multiattack", "earthquake", "icefang", "partingshot"],
		tier: "Sylvemonstest PU",
	},
	silvallysteelsylvemonstest: {
		randomBattleMoves: ["multiattack", "defog", "recover", "uturn"],
		tier: "Sylvemonstest RU",
	},
	silvallywatersylvemonstest: {
		randomBattleMoves: ["multiattack", "toxic", "recover", "uturn"],
		tier: "Sylvemonstest NU",
	},
	sneaselsylvemonstest: {
		randomBattleMoves: ["knockoff", "tripleaxel", "iceshard", "pursuit"],
		tier: "Sylvemonstest NU",
	},
	stunfisksylvemonstest: {
		randomBattleMoves: ["discharge", "earthpower", "stealthrock", "toxic", "scald", "riverstream"],
		tier: "Sylvemonstest PU",
	},
	stunfiskgalarsylvemonstest: {
		randomBattleMoves: ["earthquake", "icefang", "stealthrock", "yawn", "stoneedge", "protect"],
		tier: "Sylvemonstest PU",
	},
	taurossylvemonstest: {
		randomBattleMoves: ["bodyslam", "ironhead", "earthquake", "fireblast"],
		tier: "Sylvemonstest PUBL",
	},
	thwackeysylvemonstest: {
		tier: "Sylvemonstest NFE",
	},
	torkoalsylvemonstest: {
		randomBattleMoves: ["incinerate", "solarbeam", "rapidspin", "stealthrock", "bodypress", "willowisp"],
		tier: "Sylvemonstest NU",
	},
	toxicroaksylvemonstest: {
		randomBattleMoves: ["swordsdance", "gunkshot", "drainpunch", "earthquake", "hottag", "icepunch"],
		tier: "Sylvemonstest PU",
	},
	turtonatorsylvemonstest: {
		randomBattleMoves: ["willowisp", "bodypress", "rapidspin", "incinerate", "dragonpulse"],
		tier: "Sylvemonstest PU",
	},
	weezingsylvemonstest: {
		randomBattleMoves: ["willowisp", "sludgebomb", "painsplit", "haze", "incinerate", "taunt"],
		tier: "Sylvemonstest PU",
	},
	whimsicottsylvemonstest: {
		randomBattleMoves: ["moonblast", "synthesis", "stunspore", "uturn", "taunt", "encore", "leechseed"],
		tier: "Sylvemonstest NU",
	},
	xatusylvemonstest: {
		randomBattleMoves: ["teleport", "heatwave", "roost", "thunderwave", "haze"],
		tier: "Sylvemonstest PU",
	},
	basculinsylvemonstest: {
		randomBattleMoves: ["aquaticassault", "aquajet", "icefang", "riverstream", "psychicfangs", "superpower"],
		tier: "Sylvemonstest NU",
	},
	basculinbluestripedsylvemonstest: {
		randomBattleMoves: ["hydropump", "surf", "icebeam", "riverstream", "finalgambit", "hiddenpowerfire"],
		tier: "Sylvemonstest NU",
	},
	butterfreesylvemonstest: {
		randomBattleMoves: ["sleeppowder", "hurricane", "bugbuzz", "energyball"],
		tier: "Sylvemonstest PU",
	},
	flapplesylvemonstest: {
		randomBattleMoves: ["dragondance", "gravapple", "dragonfang", "suckerpunch", "dualwingbeat"],
		tier: "Sylvemonstest NU",
	},
	galvantulasylvemonstest: {
		randomBattleMoves: ["stickyweb", "thunder", "bugbuzz", "energyball", "disable", "voltswitch"],
		tier: "Sylvemonstest PU",
	},
	guzzlordsylvemonstest: {
		randomBattleMoves: ["vampirebite", "dragonfang", "heavyslam", "heatcrash", "earthquake"],
		tier: "Sylvemonstest PU",
	},
	kinglersylvemonstest: {
		randomBattleMoves: ["swordsdance", "agility", "liquidation", "highhorsepower", "rockslide", "knockoff"],
		tier: "Sylvemonstest PU",
	},
	noctowlsylvemonstest: {
		randomBattleMoves: ["nastyplot", "jetstream", "hypnosis", "hurricane", "heatwave", "moonlight"],
		tier: "Sylvemonstest PU",
	},
	orbeetlesylvemonstest: {
		randomBattleMoves: ["uturn", "stickyweb", "moonlight", "bodypress", "bugbite"],
		tier: "Sylvemonstest PU",
	},
	rotomfrostsylvemonstest: {
		randomBattleMoves: ["nastyplot", "blizzard", "ionabsorb", "willowisp", "painsplit"],
		tier: "Sylvemonstest PU",
	},
	sawksylvemonstest: {
		randomBattleMoves: ["closecombat", "icepunch", "knockoff", "hottag", "earthquake", "poisonjab"],
		tier: "Sylvemonstest PU",
	},
	thievulsylvemonstest: {
		randomBattleMoves: ["nastyplot", "partingshot", "darkpulse", "burningjealousy", "psychic", "grassknot"],
		tier: "Sylvemonstest PU",
	},
	accelgorsylvemonstest: {
		randomBattleMoves: ["spikes", "finalgambit", "bugbuzz", "darkpulse", "hiddenpowerpoison", "uturn"],
		tier: "Sylvemonstest NU",
	},
	alcremiesylvemonstest: {
		randomBattleMoves: ["fairywind", "dazzlinggleam", "mysticalfire", "psychic", "recover", "hyperbeam"],
		tier: "Sylvemonstest NU",
	},
	altariasylvemonstest: {
		randomBattleMoves: ["slipstream", "pluck", "roost", "fireblast", "toxic", "healbell"],
		tier: "Sylvemonstest NU",
	},
	appletunsylvemonstest: {
		randomBattleMoves: ["appleacid", "bodypress", "synthesis", "irondefense", "leechseed", "dracometeor"],
		tier: "Sylvemonstest PU",
	},
	avaluggsylvemonstest: {
		randomBattleMoves: ["icefang", "bodypress", "recover", "rapidspin", "irondefense", "toxic"],
		tier: "Sylvemonstest PU",
	},
	carbinksylvemonstest: {
		randomBattleMoves: ["fairylock", "irondefense", "bodypress", "moonlight"],
		tier: "Sylvemonstest PU",
	},
	carracostasylvemonstest: {
		randomBattleMoves: ["shellsmash", "aquaticassault", "aquajet", "stoneedge", "earthquake", "knockoff"],
		tier: "Sylvemonstest PU",
	},
	clefairysylvemonstest: {
		randomBattleMoves: ["moonblast", "incinerate", "moonlight", "stealthrock", "teleport", "toxic"],
		tier: "Sylvemonstest NFE",
	},
	combuskensylvemonstest: {
		randomBattleMoves: ["protect", "fireblast", "focusblast", "hiddenpowerelectric", "hottag"],
		tier: "Sylvemonstest PU",
	},
	corsolagalarsylvemonstest: {
		randomBattleMoves: ["hauntingscream", "strengthsap", "willowisp", "stealthrock"],
		tier: "Sylvemonstest NU",
	},
	dittosylvemonstest: {
		randomBattleMoves: ["transform", "mimic"],
		tier: "Sylvemonstest PU",
	},
	drampasylvemonstest: {
		randomBattleMoves: ["dracometeor", "hypervoice", "roost", "fireblast", "thunderbolt", "surf"],
		tier: "Sylvemonstest PU",
	},
	drifblimsylvemonstest: {
		randomBattleMoves: ["strengthsap", "souldrain", "willowisp", "thunderbolt", "calmmind", "psychic"],
		tier: "Sylvemonstest NU",
	},
	dugtrioalolasylvemonstest: {
		randomBattleMoves: ["stealthrock", "earthquake", "ironhead", "suckerpunch", "memento", "stoneedge"],
		tier: "Sylvemonstest PU",
	},
	dusknoirsylvemonstest: {
		randomBattleMoves: ["shadowpunch", "drainpunch", "shadowsneak", "icepunch", "earthquake", "poweruppunch"],
		tier: "Sylvemonstest NU",
	},
	ferroseedsylvemonstest: {
		randomBattleMoves: ["seedbomb", "knockoff", "stealthrock", "thunderwave"],
		tier: "Sylvemonstest PU",
	},
	flareonsylvemonstest: {
		randomBattleMoves: ["flareblitz", "quickattack", "doublekick", "thunderfang"],
		tier: "Sylvemonstest PU",
	},
	frosmothsylvemonstest: {
		randomBattleMoves: ["icebeam", "bugbuzz", "quiverdance", "moonlight"],
		tier: "Sylvemonstest PU",
	},
	garbodorsylvemonstest: {
		randomBattleMoves: ["gunkshot", "bodypress", "recrystalize", "toxicspikes", "spikes", "ironhead"],
		tier: "Sylvemonstest NU",
	},
	golbatsylvemonstest: {
		randomBattleMoves: ["bravebird", "poisonfang", "acidmelt", "uturn", "roost", "vampirebite"],
		tier: "Sylvemonstest PU",
	},
	gourgeistsmallsylvemonstest: {
		randomBattleMoves: ["poltergeist", "powerwhip", "gigaimpact", "shadowsneak", "willowisp", "astonish"],
		tier: "Sylvemonstest NU",
	},
	gourgeistsylvemonstest: {
		randomBattleMoves: ["poltergeist", "powerwhip", "gigaimpact", "astonish", "willowisp", "flamecharge"],
		tier: "Sylvemonstest PU",
	},
	gourgeistsupersylvemonstest: {
		randomBattleMoves: ["poltergeist", "seedbomb", "synthesis", "shadowsneak", "willowisp", "incinerate"],
		tier: "Sylvemonstest NU",
	},
	gourgeistlargesylvemonstest: {
		randomBattleMoves: ["poltergeist", "powerwhip", "synthesis", "shadowsneak", "willowisp", "leechseed"],
		tier: "Sylvemonstest PU",
	},
	hitmonchansylvemonstest: {
		randomBattleMoves: ["closecombat", "hottag", "shadowpunch", "rapidspin", "icepunch", "machpunch"],
		tier: "Sylvemonstest NU",
	},
	jynxsylvemonstest: {
		randomBattleMoves: ["lovelykiss", "icebeam", "psychic", "focusblast", "nastyplot", "teleport"],
		tier: "Sylvemonstest PU",
	},
	kadabrasylvemonstest: {
		randomBattleMoves: ["teleport", "psychic", "shadowball", "dazzlinggleam"],
		tier: "Sylvemonstest PUBL",
	},
	kangaskhansylvemonstest: {
		randomBattleMoves: ["fakeout", "doubleedge", "suckerpunch", "earthquake", "firepunch", "drainpunch"],
		tier: "Sylvemonstest PU",
	},
	lickilickysylvemonstest: {
		randomBattleMoves: ["bodyslam", "wish", "protect", "knockoff", "dragontail", "healbell", "bodypress"],
		tier: "Sylvemonstest NU",
	},
	liepardsylvemonstest: {
		randomBattleMoves: ["knockoff", "seedbomb", "gunkshot", "uturn", "thunderwave", "encore"],
		tier: "Sylvemonstest PU",
	},
	ludicolosylvemonstest: {
		randomBattleMoves: ["scald", "rinseoff", "leechseed", "gigadrain", "icebeam", "toxic"],
		tier: "Sylvemonstest PU",
	},
	lurantissylvemonstest: {
		randomBattleMoves: ["guillotine", "leafstorm", "synthesis", "defog"],
		tier: "Sylvemonstest PU",
	},
	perrserkersylvemonstest: {
		randomBattleMoves: ["ironhead", "icefang", "uturn", "closecombat", "seedbomb", "thunderfang"],
		tier: "Sylvemonstest PU",
	},
	ninetalessylvemonstest: {
		randomBattleMoves: ["nastyplot", "fireblast", "scorchingsands", "solarbeam", "willowisp"],
		tier: "Sylvemonstest NU",
	},
	persianalolasylvemonstest: {
		randomBattleMoves: ["knockoff", "partingshot", "toxic", "taunt", "foulplay"],
		tier: "Sylvemonstest PU",
	},
	persiansylvemonstest: {
		randomBattleMoves: ["nastyplot", "round", "bubblebeam", "uturn", "shockwave", "icywind"],
		tier: "Sylvemonstest PU",
	},
	pinsirsylvemonstest: {
		randomBattleMoves: ["bugbite", "earthquake", "closecombat", "quickattack", "swordsdance"],
		tier: "Sylvemonstest PU",
	},
	poliwrathsylvemonstest: {
		randomBattleMoves: ["aquaticassault", "hottag", "icepunch", "closecombat", "poisonjab", "earthquake"],
		tier: "Sylvemonstest PU",
	},
	quagsiresylvemonstest: {
		randomBattleMoves: ["riverstream", "earthquake", "scald", "recover", "toxic"],
		tier: "Sylvemonstest PU",
	},
	qwilfishsylvemonstest: {
		randomBattleMoves: ["swordsdance", "aquaticassault", "poisonjab", "taunt", "aquajet", "fellstinger"],
		tier: "Sylvemonstest PU",
	},
	rapidashsylvemonstest: {
		randomBattleMoves: ["swordsdance", "flareblitz", "fairycharge", "wildcharge", "highhorsepower", "morningsun"],
		tier: "Sylvemonstest NU",
	},
	rapidashgalarsylvemonstest: {
		randomBattleMoves: ["swordsdance", "zenheadbutt", "fairycharge", "wildcharge", "highhorsepower", "morningsun", "teleport"],
		tier: "Sylvemonstest PU",
	},
	runerigussylvemonstest: {
		randomBattleMoves: ["astonish", "poltergeist", "earthquake", "bodypress", "stealthrock", "willowisp"],
		tier: "Sylvemonstest PU",
	},
	sableyesylvemonstest: {
		randomBattleMoves: ["taunt", "moonlight", "willowisp", "knockoff", "encore"],
		tier: "Sylvemonstest PU",
	},
	sandacondasylvemonstest: {
		randomBattleMoves: ["morningsun", "glare", "stealthrock", "earthquake", "firefang", "bodypress"],
		tier: "Sylvemonstest NU",
	},
	sandslashsylvemonstest: {
		randomBattleMoves: ["swordsdance", "earthqauke", "knockoff", "leechlife", "rapidspin", "spikes"],
		tier: "Sylvemonstest PU",
	},
	shucklesylvemonstest: {
		randomBattleMoves: ["shieldslam", "stickyweb", "stealthrock", "bugbite", "toxic", "encore"],
		tier: "Sylvemonstest RU",
	},
	skuntanksylvemonstest: {
		randomBattleMoves: ["pursuit", "crunch", "poisonjab", "defog", "suckerpunch", "playrough"],
		tier: "Sylvemonstest PU",
	},
	spiritombsylvemonstest: {
		randomBattleMoves: ["phantomforce", "willowisp", "suckerpunch", "pursuit", "painsplit", "shadowsneak"],
		tier: "Sylvemonstest NU",
	},
	tangelasylvemonstest: {
		randomBattleMoves: ["gigadrain", "morningsun", "sleeppowder", "knockoff", "leechseed"],
		tier: "Sylvemonstest PU",
	},
	throhsylvemonstest: {
		randomBattleMoves: ["circlethrow", "toxic", "hottag", "knockoff"],
		tier: "Sylvemonstest PU",
	},
	armaldosylvemonstest: {
		randomBattleMoves: ["rapidspin", "bugbite", "stoneedge", "earthquake", "stealthrock"],
		tier: "Sylvemonstest PU",
	},
	bearticsylvemonstest: {
		randomBattleMoves: ["swordsdance", "icefang", "closecombat", "aquajet", "playrough"],
		tier: "Sylvemonstest PUBL",
	},
	bellossomsylvemonstest: {
		randomBattleMoves: ["sleeppowder", "strengthsap", "gigadrain", "quiverdance", "hiddenpowerfire"],
		tier: "Sylvemonstest PU",
	},
	bouffalantsylvemonstest: {
		randomBattleMoves: ["swordsdance", "headcharge", "closecombat", "earthquake", "lashout", "wildcharge"],
		tier: "Sylvemonstest PU",
	},
	calyrexsylvemonstest: {
		randomBattleMoves: ["seedbomb", "substitute", "encore", "protect"],
		tier: "Sylvemonstest PU",
	},
	cherrimsylvemonstest: {
		randomBattleMoves: ["swordsdance", "stormstrike", "sunnyday", "solarblade"],
		tier: "Sylvemonstest PU",
	},
	corsolasylvemonstest: {
		randomBattleMoves: ["recover", "stealthrock", "scald", "magiccoat", "toxic"],
		tier: "Sylvemonstest PU",
	},
	cursolasylvemonstest: {
		randomBattleMoves: ["strengthsap", "hauntingscream", "riverstream", "earthpower", "icebeam", "hydropump"],
		tier: "Sylvemonstest PU",
	},
	crustlesylvemonstest: {
		randomBattleMoves: ["spikes", "stealthrock", "shellsmash", "stoneedge", "earthquake", "bugbite"],
		tier: "Sylvemonstest NU",
	},
	dedennesylvemonstest: {
		randomBattleMoves: ["thunderbolt", "dazzlinggleam", "grassknot", "voltswitch", "hiddenpowerice", "superfang"],
		tier: "Sylvemonstest RU",
	},
	delibirdsylvemonstest: {
		randomBattleMoves: ["tripleaxel", "bravebird", "iceshard", "drillrun", "spikes", "thunderpunch"],
		tier: "Sylvemonstest PU",
	},
	drednawsylvemonstest: {
		randomBattleMoves: ["swordsdance", "stoneedge", "aquaticassault", "earthquake", "riverstream", "icefang"],
		tier: "Sylvemonstest PU",
	},
	dubwoolsylvemonstest: {
		randomBattleMoves: ["cottonguard", "bodypress", "bodyslam", "rest"],
		tier: "Sylvemonstest PU",
	},
	dugtriosylvemonstest: {
		randomBattleMoves: ["stealthrock", "earthquake", "stoneedge", "memento"],
		tier: "Sylvemonstest PU",
	},
	dunsparcesylvemonstest: {
		randomBattleMoves: ["glare", "bodyslam", "coil", "roost", "earthquake", "rockslide"],
		tier: "Sylvemonstest PU",
	},
	eiscuesylvemonstest: {
		randomBattleMoves: ["bellydrum", "icepunch", "aquaticassault", "thunderpunch"],
		tier: "Sylvemonstest PU",
	},
	falinkssylvemonstest: {
		randomBattleMoves: ["noretreat", "closecombat", "stalwartsword", "fellstinger", "rockslide"],
		tier: "Sylvemonstest PU",
	},
	farfetchdsylvemonstest: {
		randomBattleMoves: ["swordsdance", "skullbash", "skyattack", "knockoff", "quickattack"],
		tier: "Sylvemonstest PU",
	},
	glaliesylvemonstest: {
		randomBattleMoves: ["icefang", "taunt", "spikes", "explosion"],
		tier: "Sylvemonstest PU",
	},
	golducksylvemonstest: {
		randomBattleMoves: ["hydropump", "riverstream", "icebeam", "psychic"],
		tier: "Sylvemonstest PU",
	},
	gothitellesylvemonstest: {
		randomBattleMoves: ["expandingforce", "nastyplot", "signalbeam", "trickroom"],
		tier: "Sylvemonstest NUBL",
	},
	grapploctsylvemonstest: {
		randomBattleMoves: ["riverstream", "skyuppercut", "aquajet", "rinseoff", "suckerpunch", "stompingtantrum"],
		tier: "Sylvemonstest NU",
	},
	greedentsylvemonstest: {
		randomBattleMoves: ["bodyslam", "seedbomb", "bodypress", "stuffcheeks"],
		tier: "Sylvemonstest PU",
	},
	heatmorsylvemonstest: {
		randomBattleMoves: ["flamebullet", "fireblast", "gigadrain", "hiddenpowerice"],
		tier: "Sylvemonstest PU",
	},
	laprassylvemonstest: {
		randomBattleMoves: ["rinseoff", "freezedry", "surf", "riverstream"],
		tier: "Sylvemonstest PU",
	},
	lilligantsylvemonstest: {
		randomBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerground", "quiverdance"],
		tier: "Sylvemonstest PU",
	},
	lopunnysylvemonstest: {
		randomBattleMoves: ["megakick", "highjumpkick", "tripleaxel", "uturn"],
		tier: "Sylvemonstest PU",
	},
	lunatonesylvemonstest: {
		randomBattleMoves: ["nastyplot", "weatherball", "earthpower", "moonblast", "psychic", "moonlight"],
		tier: "Sylvemonstest NU",
	},
	luxraysylvemonstest: {
		randomBattleMoves: ["thunderfang", "crunch", "suckerpunch", "icefang", "superpower", "swordsdance"],
		tier: "Sylvemonstest NU",
	},
	lycanrocmidnightsylvemonstest: {
		randomBattleMoves: ["swordsdance", "accelerock", "knockoff", "stoneedge", "closecombat", "icefang"],
		tier: "Sylvemonstest PUBL",
	},
	manectricsylvemonstest: {
		randomBattleMoves: ["ionabsorb", "voltswitch", "overheat", "hiddenpowerice"],
		tier: "Sylvemonstest PU",
	},
	marowaksylvemonstest: {
		randomBattleMoves: ["swordsdance", "mudslap", "bonemerang", "icepunch"],
		tier: "Sylvemonstest PU",
	},
	mawilesylvemonstest: {
		randomBattleMoves: ["swordsdance", "knockoff", "fairycharge", "suckerpunch", "firepunch"],
		tier: "Sylvemonstest PU",
	},
	meltansylvemonstest: {
		tier: "Sylvemonstest NFE",
	},
	meowsticsylvemonstest: {
		randomBattleMoves: ["lightscreen", "reflect", "yawn", "psychic"],
		tier: "Sylvemonstest PU",
	},
	meowsticfsylvemonstest: {
		randomBattleMoves: ["nastyplot", "psychic", "thunderbolt", "shadowball", "energyball", "hiddenpowerfire"],
		tier: "Sylvemonstest PU",
	},
	mrmimesylvemonstest: {
		randomBattleMoves: ["teleport", "dazzlinggleam", "focusblast", "shadowball", "nastyplot"],
		tier: "Sylvemonstest PU",
	},
	mrrimesylvemonstest: {
		randomBattleMoves: ["teleport", "rapidspin", "freezedry", "focusblast", "toxic"],
		tier: "Sylvemonstest PU",
	},
	musharnasylvemonstest: {
		randomBattleMoves: ["moonblast", "toxic", "moonlight", "teleport"],
		tier: "Sylvemonstest RU",
	},
	octillerysylvemonstest: {
		randomBattleMoves: ["hydropump", "flamebullet", "flashcannon", "sludgebomb", "fireblast"],
		tier: "Sylvemonstest NU",
	},
	orangurusylvemonstest: {
		randomBattleMoves: ["nastyplot", "psyshock", "focusblast", "painsplit"],
		tier: "Sylvemonstest NU",
	},
	pikachusylvemonstest: {
		randomBattleMoves: ["volttackle", "extremespeed", "fakeout", "firepunch", "hottag", "knockoff"],
		tier: "Sylvemonstest PU",
	},
	pincurchinsylvemonstest: {
		randomBattleMoves: ["risingvoltage", "rinseoff", "scald", "toxicspikes"],
		tier: "Sylvemonstest PU",
	},
	pyukumukusylvemonstest: {
		randomBattleMoves: ["block", "toxic", "soak", "rinseoff"],
		tier: "Sylvemonstest PU",
	},
	relicanthsylvemonstest: {
		randomBattleMoves: ["headsmash", "aquaticassault", "earthquake", "bodypress", "zenheadbutt", "stealthrock"],
		tier: "Sylvemonstest PU",
	},
	seakingsylvemonstest: {
		randomBattleMoves: ["swordsdance", "aquaticassault", "megahorn", "riverstream", "knockoff", "drillrun"],
		tier: "Sylvemonstest PU",
	},
	shedinjasylvemonstest: {
		randomBattleMoves: ["swordsdance", "poltergeist", "willowisp", "bugbite"],
		tier: "Sylvemonstest PU",
	},
	shiinoticsylvemonstest: {
		randomBattleMoves: ["spore", "strengthsap", "gigadrain", "moonblast"],
		tier: "Sylvemonstest PU",
	},
	solrocksylvemonstest: {
		randomBattleMoves: ["stoneedge", "morningsun", "stealthrock", "willowisp", "stormstrike"],
		tier: "Sylvemonstest RU",
	},
	stonjournersylvemonstest: {
		randomBattleMoves: ["stoneedge", "highhorsepower", "stealthrock", "heatcrash"],
		tier: "Sylvemonstest NU",
	},
	stoutlandsylvemonstest: {
		randomBattleMoves: ["swordsdance", "return", "earthquake", "wildcharge", "icefang"],
		tier: "Sylvemonstest PU",
	},
	sudowoodosylvemonstest: {
		randomBattleMoves: ["headsmash", "woodhammer", "suckerpunch", "earthquake"],
		tier: "Sylvemonstest PU",
	},
	swoobatsylvemonstest: {
		randomBattleMoves: ["calmmind", "storedpower", "heatwave", "roost"],
		tier: "Sylvemonstest PU",
	},
	trevenantsylvemonstest: {
		randomBattleMoves: ["seedbomb", "poltergeist", "earthquake", "leafage", "poweruppunch", "drainpunch"],
		tier: "Sylvemonstest PU",
	},
	vespiquensylvemonstest: {
		randomBattleMoves: ["bugbite", "uturn", "healorder", "toxicspikes", "defog", "poisonjab"],
		tier: "Sylvemonstest NU",
	},
	wailordsylvemonstest: {
		randomBattleMoves: ["aquaticassault", "earthquake", "waterspout", "icebeam"],
		tier: "Sylvemonstest PU",
	},
	walreinsylvemonstest: {
		randomBattleMoves: ["curse", "icefang", "rest", "sleeptalk"],
		tier: "Sylvemonstest PU",
	},
	whiscashsylvemonstest: {
		randomBattleMoves: ["dragondance", "aquaticassault", "earthquake", "riverstream", "stoneedge", "spark"],
		tier: "Sylvemonstest PU",
	},
	wigglytuffsylvemonstest: {
		randomBattleMoves: ["seismictoss", "teleport", "moonlight", "stealthrock", "thunderwave", "incinerate"],
		tier: "Sylvemonstest NU",
	},
	wobbuffetsylvemonstest: {
		randomBattleMoves: ["counter", "mirrorcoat", "encore", "destinybond"],
		tier: "Sylvemonstest PU",
	},
	drakloaksylvemonstest: {
		randomBattleMoves: ["dragondance", "outrage", "shadowcharge", "steelwing"],
		tier: "Sylvemonstest PUBL",
	},
	kubfusylvemonstest: {
		randomBattleMoves: ["closecombat", "icepunch", "uturn", "ironhead"],
		tier: "Sylvemonstest PU",
	},
	togeticsylvemonstest: {
		tier: "Sylvemonstest NFE",
	},
	typenullsylvemonstest: {
		randomBattleMoves: ["swordsdance", "return", "sleeptalk", "rest"],
		tier: "Sylvemonstest PUBL",
	},
	zweilloussylvemonstest: {
		randomBattleMoves: ["dragonfang", "crunch", "firefang", "zenheadbutt", "astonish"],
		tier: "Sylvemonstest PU",
	},
	poipolesylvemonstest: {
		tier: "Sylvemonstest LC",
	},
	gothitasylvemonstest: {
		tier: "Sylvemonstest LC",
	},
	luxiosylvemonstest: {
		randomBattleMoves: ["risingvoltage", "hiddenpowerice", "signalbeam", "voltswitch"],
		tier: "Sylvemonstest PU",
	},
	sliggoosylvemonstest: {
		randomBattleMoves: ["rinseoff", "infestation", "dragonrage", "toxic"],
		tier: "Sylvemonstest PU",
	},
	illumisesylvemonstest: {
		randomBattleMoves: ["uturn", "moonlight", "bugbuzz", "thunderwave", "encore", "aromatherapy"],
		tier: "Sylvemonstest PU",
	},
	deoxysspeedsylvemonstest: {
		randomBattleMoves: ["gunkshot", "superpower", "firepunch", "teleport", "knockoff", "icepunch"],
		tier: "Sylvemonstest Uber",
	},
	dianciesylvemonstest: {
		randomBattleMoves: ["diamondstorm", "bodypress", "toxic", "stealthrock", "moonlight"],
		tier: "Sylvemonstest RU",
	},
	crobatsylvemonstest: {
		randomBattleMoves: ["pluck", "poisonfang", "defog", "uturn", "roost", "taunt"],
		tier: "Sylvemonstest NU",
	},
	tentacruelsylvemonstest: {
		randomBattleMoves: ["scald", "sludgebomb", "haze", "toxicspikes", "rapidspin", "knockoff"],
		tier: "Sylvemonstest UU",
	},
	arcaninesylvemonstest: {
		randomBattleMoves: ["extremespeed", "flareblitz", "closecombat", "wildcharge", "willowisp", "morningsun", "teleport"],
		tier: "Sylvemonstest NU",
	},
	darmanitansylvemonstest: {
		randomBattleMoves: ["thunderpunch", "flareblitz", "uturn", "earthquake", "superpower", "rockslide"],
		tier: "Sylvemonstest UU",
	},
	darmanitangalarsylvemonstest: {
		randomBattleMoves: ["icepunch", "flareblitz", "uturn", "earthquake", "superpower", "ironhead"],
		tier: "Sylvemonstest Uber",
	},
	enteisylvemonstest: {
		randomBattleMoves: ["extremespeed", "sacredfire", "stompingtantrum", "thunderfang", "flamewheel", "ironhead"],
		tier: "Sylvemonstest RU",
	},
	sylveonsylvemonstest: {
		randomBattleMoves: ["moonblast", "fairywind", "mysticalfire", "psyshock"],
		tier: "Sylvemonstest RU",
	},
	glaceonsylvemonstest: {
		randomBattleMoves: ["auroraveil", "blizzard", "hiddenpowerfighting", "signalbeam", "recrystalize", "freezedry"],
		tier: "Sylvemonstest NU",
	},
	swampertsylvemonstest: {
		randomBattleMoves: ["earthquake", "flipturn", "stealthrock", "toxic", "scald", "roar"],
		tier: "Sylvemonstest UU",
	},
	abomasnowsylvemonstest: {
		randomBattleMoves: ["auroraveil", "blizzard", "powdersnow", "gigadrain", "synthesis", "hiddenpowerfire"],
		tier: "Sylvemonstest PU",
	},
	aerodactylsylvemonstest: {
		randomBattleMoves: ["dualwingbeat", "dragondance", "stoneedge", "earthquake", "stealthrock", "taunt"],
		tier: "Sylvemonstest NU",
	},
	araquanidsylvemonstest: {
		randomBattleMoves: ["aquaticassault", "stickyweb", "riverstream", "bugbite"],
		tier: "Sylvemonstest NU",
	},
	barbaraclesylvemonstest: {
		randomBattleMoves: ["shellsmash", "aquaticassault", "crosschop", "grassknot", "poisonjab", "stoneedge"],
		tier: "Sylvemonstest NUBL",
	},
	bewearsylvemonstest: {
		randomBattleMoves: ["swordsdance", "closecombat", "doubleedge", "icepunch", "earthquake", "darkestlariat"],
		tier: "Sylvemonstest NU",
	},
	incineroarsylvemonstest: {
		randomBattleMoves: ["knockoff", "hottag", "willowisp", "flareblitz"],
		tier: "Sylvemonstest RU",
	},
	bronzongsylvemonstest: {
		randomBattleMoves: ["gyroball", "stealthrock", "toxic", "bodypress"],
		tier: "Sylvemonstest NU",
	},
	copperajahsylvemonstest: {
		randomBattleMoves: ["heavyslam", "heatcrash", "powerwhip", "earthquake", "stoneedge", "stealthrock"],
		tier: "Sylvemonstest PU",
	},
	decidueyesylvemonstest: {
		randomBattleMoves: ["swordsdance", "leafblade", "astonish", "shadowsneak", "synthesis", "poltergeist"],
		tier: "Sylvemonstest NU",
	},
	dhelmisesylvemonstest: {
		randomBattleMoves: ["poltergeist", "powerwhip", "synthesis", "anchorshot", "rapidspin", "earthquake"],
		tier: "Sylvemonstest NU",
	},
	doubladesylvemonstest: {
		randomBattleMoves: ["swordsdance", "stalwartsword", "shadowsneak", "sacredsword"],
		tier: "Sylvemonstest NU",
	},
	dragalgesylvemonstest: {
		randomBattleMoves: ["acidmelt", "flipturn", "dracometeor", "thunderbolt", "toxicspikes"],
		tier: "Sylvemonstest NU",
	},
	drapionsylvemonstest: {
		randomBattleMoves: ["poisonfang", "swordsdance", "knockoff", "icefang", "earthquake", "taunt"],
		tier: "Sylvemonstest PU",
	},
	exploudsylvemonstest: {
		randomBattleMoves: ["boomburst", "hauntingscream", "fireblast", "surf"],
		tier: "Sylvemonstest NU",
	},
	gardevoirsylvemonstest: {
		randomBattleMoves: ["psychic", "moonblast", "mysticalfire", "willowisp", "healingwish", "taunt"],
		tier: "Sylvemonstest NU",
	},
	golurksylvemonstest: {
		randomBattleMoves: ["earthquake", "poltergeist", "closecombat", "stealthrock", "icepunch", "mudslap"],
		tier: "Sylvemonstest NU",
	},
	hitmonleesylvemonstest: {
		randomBattleMoves: ["highjumpkick", "rapidspin", "hottag", "earthquake", "knockoff", "stoneedge"],
		tier: "Sylvemonstest PUBL",
	},
	indeedeesylvemonstest: {
		randomBattleMoves: ["expandingforce", "hypervoice", "mysticalfire", "dazzlinggleam", "trick", "energyball"],
		tier: "Sylvemonstest RU",
	},
	indeedeefsylvemonstest: {
		randomBattleMoves: ["expandingforce", "hypervoice", "mysticalfire", "dazzlinggleam", "healingwish", "energyball"],
		tier: "Sylvemonstest NU",
	},
	kabutopssylvemonstest: {
		randomBattleMoves: ["aquaticassault", "swordsdance", "aquajet", "stoneedge", "leechlife", "knockoff"],
		tier: "Sylvemonstest PU",
	},
	omastarsylvemonstest: {
		randomBattleMoves: ["shellsmash", "meteorbeam", "earthpower", "hydropump"],
		tier: "Sylvemonstest PU",
	},
	klefkisylvemonstest: {
		randomBattleMoves: ["lightscreen", "reflect", "metalsound", "thunderwave", "foulplay", "swagger"],
		tier: "Sylvemonstest NU",
	},
	linoonesylvemonstest: {
		randomBattleMoves: ["extremespeed", "bellydrum", "throatchop", "seedbomb"],
		tier: "Sylvemonstest PU",
	},
	lucariosylvemonstest: {
		randomBattleMoves: ["closecombat", "meteormash", "extremespeed", "swordsdance", "crunch", "icepunch"],
		tier: "Sylvemonstest RU",
	},
	machampsylvemonstest: {
		randomBattleMoves: ["dynamicpunch", "knockoff", "stoneedge", "earthquake", "hottag", "poisonjab"],
		tier: "Sylvemonstest NU",
	},
	mantinesylvemonstest: {
		randomBattleMoves: ["scald", "defog", "toxic", "roost", "hurricane", "seedbomb"],
		tier: "Sylvemonstest RU",
	},
	necrozmasylvemonstest: {
		randomBattleMoves: ["photongeyser", "dragondance", "knockoff", "earthquake", "crosschop", "moonlight"],
		tier: "Sylvemonstest NU",
	},
	necrozmaduskmanesylvemonstest: {
		randomBattleMoves: ["sunsteelstrike", "dragondance", "morningsun", "earthquake"],
		tier: "Sylvemonstest Uber",
	},
	necrozmadawnwingssylvemonstest: {
		randomBattleMoves: ["moongeistbeam", "moonlight", "nastyplot", "earthpower"],
		tier: "Sylvemonstest Uber",
	},
	solgaleosylvemonstest: {
		randomBattleMoves: ["sunsteelstrike", "teleport", "flareblitz", "earthquake", "knockoff", "wildcharge"],
		tier: "Sylvemonstest Uber",
	},
	lunalasylvemonstest: {
		randomBattleMoves: ["moongeistbeam", "moonlight", "willowisp", "calmmind", "teleport", "moonblast"],
		tier: "Sylvemonstest Uber",
	},
	noivernsylvemonstest: {
		randomBattleMoves: ["dracometeor", "boomburst", "flamethrower", "uturn", "taunt", "defog", "hurricane"],
		tier: "Sylvemonstest NU",
	},
	obstagoonsylvemonstest: {
		randomBattleMoves: ["facade", "knockoff", "closecombat", "obstruct"],
		tier: "Sylvemonstest NU",
	},
	pangorosylvemonstest: {
		randomBattleMoves: ["closecombat", "knockoff", "bulletpunch", "partingshot", "swordsdance", "gunkshot"],
		tier: "Sylvemonstest NU",
	},
	politoedsylvemonstest: {
		randomBattleMoves: ["scald", "riverstream", "toxic", "icebeam", "earthpower", "haze"],
		tier: "Sylvemonstest RU",
	},
	polteageistsylvemonstest: {
		randomBattleMoves: ["souldrain", "storedpower", "shellsmash", "gigadrain"],
		tier: "Sylvemonstest NU",
	},
	raikousylvemonstest: {
		randomBattleMoves: ["thunderbolt", "aurasphere", "hiddenpowergrass", "scald", "voltswitch", "calmmind"],
		tier: "Sylvemonstest RU",
	},
	reuniclussylvemonstest: {
		randomBattleMoves: ["psyshock", "focusblast", "recover", "acidarmor", "calmmind", "trickroom"],
		tier: "Sylvemonstest NUBL",
	},
	rotommowsylvemonstest: {
		randomBattleMoves: ["nastyplot", "ionabsorb", "leafstorm", "willowisp", "defog", "painsplit"],
		tier: "Sylvemonstest RU",
	},
	passimiansylvemonstest: {
		randomBattleMoves: ["closecombat", "hottag", "seedbomb", "earthquake", "knockoff", "ironhead"],
		tier: "Sylvemonstest NU",
	},
	scraftysylvemonstest: {
		randomBattleMoves: ["knockoff", "bulkup", "drainpunch", "substitute", "icepunch", "poisonjab"],
		tier: "Sylvemonstest NU",
	},
	seismitoadsylvemonstest: {
		randomBattleMoves: ["riverstream", "stealthrock", "scald", "earthquake", "rinseoff", "knockoff"],
		tier: "Sylvemonstest NU",
	},
	shiftrysylvemonstest: {
		randomBattleMoves: ["nastyplot", "heatwave", "energyball", "darkpulse", "suckerpunch", "hurricane"],
		tier: "Sylvemonstest PU",
	},
	sharpedosylvemonstest: {
		randomBattleMoves: ["protect", "aquaticassault", "crunch", "closecombat"],
		tier: "Sylvemonstest PUBL",
	},
	sigilyphsylvemonstest: {
		randomBattleMoves: ["jetstream", "psychic", "aurasphere", "airslash", "energyball", "defog", "dazzlinggleam"],
		tier: "Sylvemonstest NU",
	},
	slurpuffsylvemonstest: {
		randomBattleMoves: ["bellydrum", "fairycharge", "drainpunch", "facade"],
		tier: "Sylvemonstest NU",
	},
	snorlaxsylvemonstest: {
		randomBattleMoves: ["return", "earthquake", "crunch", "heatcrash", "curse", "icepunch"],
		tier: "Sylvemonstest NU",
	},
	steelixsylvemonstest: {
		randomBattleMoves: ["shieldslam", "bodypress", "earthquake", "recrystalize", "stealthrock", "irondefense"],
		tier: "Sylvemonstest NU",
	},
	talonflamesylvemonstest: {
		randomBattleMoves: ["dualwingbeat", "slipstream", "swordsdance", "flareblitz", "willowisp", "taunt"],
		tier: "Sylvemonstest PU",
	},
	tsareenasylvemonstest: {
		randomBattleMoves: ["tropkick", "highjumpkick", "knockoff", "uturn", "rapidspin", "synthesis", "tripleaxel"],
		tier: "Sylvemonstest NU",
	},
	tyrantrumsylvemonstest: {
		randomBattleMoves: ["headsmash", "dragondance", "dragonfang", "icefang", "firefang", "poisonfang"],
		tier: "Sylvemonstest NU",
	},
	umbreonsylvemonstest: {
		randomBattleMoves: ["foulplay", "toxic", "moonlight", "healbell"],
		tier: "Sylvemonstest NU",
	},
	vikavoltsylvemonstest: {
		randomBattleMoves: ["ionabsorb", "roost", "bugbuzz", "energyball", "voltswitch", "stickyweb"],
		tier: "Sylvemonstest NU",
	},
	vanilluxesylvemonstest: {
		randomBattleMoves: ["auroraveil", "blizzard", "hiddenpowerfire", "freezedry", "powdersnow", "recrystalize"],
		tier: "Sylvemonstest RU",
	},
	naganadelsylvemonstest: {
		randomBattleMoves: ["nastyplot", "sludgewave", "dracometeor", "flamethrower", "spikes", "uturn"],
		tier: "Sylvemonstest Uber",
	},
	vensaursylvemonstest: {
		randomBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "leechseed", "hiddenpowerfire", "synthesis"],
		tier: "Sylvemonstest NU",
	},
	vileplumesylvemonstest: {
		randomBattleMoves: ["gigadrain", "sludgebomb", "strengthsap", "leechseed", "sleeppowder", "hiddenpowerfire"],
		tier: "Sylvemonstest NU",
	},
	zarudesylvemonstest: {
		randomBattleMoves: ["seedbomb", "darkestlariat", "closecombat", "uturn", "leafage", "irontail"],
		tier: "Sylvemonstest RU",
	},
	weezinggalarsylvemonstest: {
		randomBattleMoves: ["strangesteam", "defog", "willowisp", "incinerate", "toxicspikes", "taunt"],
		tier: "Sylvemonstest NU",
	},
	virizionsylvemonstest: {
		randomBattleMoves: ["leafblade", "sacredsword", "stoneedge", "psychocut", "swordsdance", "taunt"],
		tier: "Sylvemonstest RU",
	},
	zoroarksylvemonstest: {
		randomBattleMoves: ["nastyplot", "nightdaze", "sludgebomb", "incinerate", "suckerpunch", "extransensory"],
		tier: "Sylvemonstest NU",
	},
	zygarde10sylvemonstest: {
		randomBattleMoves: ["dragondance", "extremespeed", "thousandarrows", "superpower", "dragonfang", "glare"],
		tier: "Sylvemonstest RU",
	},
	zygardesylvemonstest: {
		randomBattleMoves: ["coil", "extremespeed", "thousandarrows", "crunch", "dragonfang", "glare"],
		tier: "Sylvemonstest Uber",
	},
	rhydonsylvemonstest: {
		randomBattleMoves: ["stoneedge", "earthquake", "icefang", "stealthrock", "mudslap", "swordsdance", "megahorn"],
		tier: "Sylvemonstest PUBL",
	},	
	abrasylvemonstest: {
		tier: "Sylvemonstest PU",
	},	
	elgyemsylvemonstest: {
		tier: "Sylvemonstest PUBL",
	},	
	hattremsylvemonstest: {
		tier: "Sylvemonstest PUBL",
	},	
	klangsylvemonstest: {
		tier: "Sylvemonstest PUBL",
	},	
	/* Leaving this commented out still allows the random team builder to roll a normal Zygarde with Power Construct
	zygardecompletesylvemonstest: {
		randomBattleMoves: ["coil", "extremespeed", "thousandarrows", "crunch", "dragonfang", "glare"],
		tier: "Sylvemonstest Uber",
	},
	*/
}; exports.FormatsData = FormatsData;

