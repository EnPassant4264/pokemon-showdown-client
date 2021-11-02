"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const FormatsData = {
	bulbasaurgen7: {
		tier: "Gen7 LC",
	},
	ivysaurgen7: {
		tier: "Gen7 NFE",
	},
	venusaurgen7: {
		randomBattleMoves: ["sleeppowder", "leafstorm", "sludgebomb", "substitute", "leechseed"],
		randomDoubleBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	venusaurmegagen7: {
		randomBattleMoves: ["gigadrain", "sludgebomb", "hiddenpowerfire", "synthesis", "leechseed", "earthquake"],
		randomDoubleBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "protect"],
		tier: "Gen7 UUBL",
		doublesTier: "DUU",
	},
	charmandergen7: {
		tier: "Gen7 LC",
	},
	charmeleongen7: {
		tier: "Gen7 NFE",
	},
	charizardgen7: {
		randomBattleMoves: ["holdhands", "fireblast", "airslash", "earthquake", "roost"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "airslash", "roost", "protect", "holdhands", "focusblast"],
		tier: "Gen7 PUBL",
		doublesTier: "(DUU)",
	},
	charizardmegaxgen7: {
		randomBattleMoves: ["dragondance", "flareblitz", "dragonclaw", "earthquake", "roost", "willowisp"],
		randomDoubleBattleMoves: ["dragondance", "flareblitz", "dragonclaw", "thunderpunch", "rockslide", "roost"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	charizardmegaygen7: {
		randomBattleMoves: ["fireblast", "airslash", "roost", "solarbeam", "focusblast", "dragonpulse"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "airslash", "solarbeam", "focusblast", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	squirtlegen7: {
		tier: "Gen7 LC",
	},
	wartortlegen7: {
		tier: "Gen7 NFE",
	},
	blastoisegen7: {
		randomBattleMoves: ["icebeam", "rapidspin", "scald", "toxic", "dragontail", "roar"],
		randomDoubleBattleMoves: ["muddywater", "fakeout", "scald", "followme", "icywind", "protect", "rapidspin"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	blastoisemegagen7: {
		randomBattleMoves: ["icebeam", "hydropump", "rapidspin", "scald", "dragontail", "darkpulse", "aurasphere"],
		randomDoubleBattleMoves: ["muddywater", "icebeam", "fakeout", "waterpulse", "darkpulse", "aurasphere", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	caterpiegen7: {
		tier: "Gen7 LC",
	},
	metapodgen7: {
		tier: "Gen7 NFE",
	},
	butterfreegen7: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "bugbuzz", "airslash", "energyball"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "sleeppowder", "airslash", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	weedlegen7: {
		tier: "Gen7 LC",
	},
	kakunagen7: {
		tier: "Gen7 NFE",
	},
	beedrillgen7: {
		randomBattleMoves: ["toxicspikes", "tailwind", "uturn", "endeavor", "poisonjab", "knockoff"],
		randomDoubleBattleMoves: ["uturn", "poisonjab", "knockoff", "protect", "tailwind", "toxicspikes"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	beedrillmegagen7: {
		randomBattleMoves: ["xscissor", "swordsdance", "uturn", "poisonjab", "drillrun", "knockoff"],
		randomDoubleBattleMoves: ["xscissor", "uturn", "poisonjab", "drillrun", "knockoff", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	pidgeygen7: {
		tier: "Gen7 LC",
	},
	pidgeottogen7: {
		tier: "Gen7 NFE",
	},
	pidgeotgen7: {
		randomBattleMoves: ["roost", "bravebird", "heatwave", "return", "uturn", "defog"],
		randomDoubleBattleMoves: ["bravebird", "heatwave", "return", "doubleedge", "uturn", "tailwind", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	pidgeotmegagen7: {
		randomBattleMoves: ["roost", "heatwave", "uturn", "hurricane", "defog"],
		randomDoubleBattleMoves: ["tailwind", "heatwave", "uturn", "hurricane", "protect"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	rattatagen7: {
		tier: "Gen7 LC",
	},
	rattataalolagen7: {
		tier: "Gen7 LC",
	},
	raticategen7: {
		randomBattleMoves: ["protect", "facade", "stompingtantrum", "suckerpunch", "uturn", "swordsdance"],
		randomDoubleBattleMoves: ["facade", "stompingtantrum", "suckerpunch", "uturn", "crunch", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	raticatealolagen7: {
		randomBattleMoves: ["swordsdance", "return", "suckerpunch", "knockoff", "doubleedge"],
		randomDoubleBattleMoves: ["doubleedge", "suckerpunch", "protect", "knockoff", "uturn"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	raticatealolatotemgen7: {
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	spearowgen7: {
		tier: "Gen7 LC",
	},
	fearowgen7: {
		randomBattleMoves: ["return", "drillpeck", "doubleedge", "uturn", "pursuit", "drillrun"],
		randomDoubleBattleMoves: ["return", "drillpeck", "doubleedge", "uturn", "quickattack", "drillrun", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	ekansgen7: {
		tier: "Gen7 LC",
	},
	arbokgen7: {
		randomBattleMoves: ["coil", "gunkshot", "suckerpunch", "aquatail", "earthquake", "rest"],
		randomDoubleBattleMoves: ["gunkshot", "suckerpunch", "aquatail", "stompingtantrum", "coil", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	pichugen7: {
		tier: "Gen7 LC",
	},
	pikachugen7: {
		randomBattleMoves: ["volttackle", "voltswitch", "grassknot", "hiddenpowerice", "knockoff", "irontail"],
		randomDoubleBattleMoves: ["fakeout", "volttackle", "voltswitch", "grassknot", "hiddenpowerice", "encore", "knockoff", "protect"],
		tier: "Gen7 NFE",
	},
	pikachuoriginalgen7: {
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	pikachuhoenngen7: {
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	pikachusinnohgen7: {
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	pikachuunovagen7: {
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	pikachukalosgen7: {
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	pikachualolagen7: {
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	pikachupartnergen7: {
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	raichugen7: {
		randomBattleMoves: ["nastyplot", "encore", "thunderbolt", "grassknot", "hiddenpowerice", "focusblast", "voltswitch"],
		randomDoubleBattleMoves: ["fakeout", "encore", "thunderbolt", "grassknot", "hiddenpowerice", "focusblast", "voltswitch", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "DUU",
	},
	raichualolagen7: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "psyshock", "focusblast", "voltswitch", "surf"],
		randomDoubleBattleMoves: ["thunderbolt", "fakeout", "nastyplot", "grassknot", "psyshock", "protect", "voltswitch"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	sandshrewgen7: {
		tier: "Gen7 LC",
	},
	sandshrewalolagen7: {
		tier: "Gen7 LC",
	},
	sandslashgen7: {
		randomBattleMoves: ["earthquake", "swordsdance", "rapidspin", "toxic", "stealthrock", "knockoff"],
		randomDoubleBattleMoves: ["earthquake", "stoneedge", "swordsdance", "knockoff", "protect", "stealthrock"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	sandslashalolagen7: {
		randomBattleMoves: ["swordsdance", "iciclecrash", "ironhead", "earthquake", "rapidspin", "stealthrock", "knockoff"],
		randomDoubleBattleMoves: ["protect", "swordsdance", "iciclecrash", "ironhead", "drillrun"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	nidoranfgen7: {
		tier: "Gen7 LC",
	},
	nidorinagen7: {
		tier: "Gen7 NFE",
	},
	nidoqueengen7: {
		randomBattleMoves: ["toxicspikes", "stealthrock", "fireblast", "icebeam", "earthpower", "sludgewave"],
		randomDoubleBattleMoves: ["protect", "icebeam", "earthpower", "sludgebomb", "stealthrock"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	nidoranmgen7: {
		tier: "Gen7 LC",
	},
	nidorinogen7: {
		tier: "Gen7 NFE",
	},
	nidokinggen7: {
		randomBattleMoves: ["substitute", "fireblast", "icebeam", "earthpower", "sludgewave", "superpower"],
		randomDoubleBattleMoves: ["protect", "fireblast", "icebeam", "earthpower", "sludgebomb"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	cleffagen7: {
		tier: "Gen7 LC",
	},
	clefairygen7: {
		tier: "Gen7 PU",
		doublesTier: "NFE",
	},
	clefablegen7: {
		randomBattleMoves: ["calmmind", "softboiled", "fireblast", "moonblast", "stealthrock", "thunderwave"],
		randomDoubleBattleMoves: ["thunderwave", "fireblast", "helpinghand", "followme", "protect", "moonblast", "dazzlinggleam", "softboiled"],
		tier: "Gen7 OU",
		doublesTier: "DUU",
	},
	vulpixgen7: {
		tier: "Gen7 LC Uber",
	},
	vulpixalolagen7: {
		tier: "Gen7 LC",
	},
	ninetalesgen7: {
		randomBattleMoves: ["fireblast", "willowisp", "solarbeam", "nastyplot", "substitute", "psyshock"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "willowisp", "solarbeam", "nastyplot", "protect"],
		tier: "Gen7 RU",
		doublesTier: "DUU",
	},
	ninetalesalolagen7: {
		randomBattleMoves: ["nastyplot", "blizzard", "moonblast", "substitute", "hiddenpowerfire", "freezedry", "auroraveil"],
		randomDoubleBattleMoves: ["blizzard", "moonblast", "protect", "hiddenpowerfire", "freezedry", "auroraveil", "encore"],
		tier: "Gen7 UUBL",
		doublesTier: "DOU",
	},
	igglybuffgen7: {
		tier: "Gen7 LC",
	},
	jigglypuffgen7: {
		tier: "Gen7 NFE",
	},
	wigglytuffgen7: {
		randomBattleMoves: ["reflect", "lightscreen", "healbell", "stealthrock", "fireblast", "dazzlinggleam"],
		randomDoubleBattleMoves: ["thunderwave", "stealthrock", "protect", "dazzlinggleam", "fireblast", "hypervoice"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	zubatgen7: {
		tier: "Gen7 LC",
	},
	golbatgen7: {
		tier: "Gen7 NU",
		doublesTier: "NFE",
	},
	crobatgen7: {
		randomBattleMoves: ["bravebird", "roost", "toxic", "taunt", "defog", "uturn", "superfang"],
		randomDoubleBattleMoves: ["bravebird", "taunt", "tailwind", "uturn", "protect", "superfang"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	oddishgen7: {
		tier: "Gen7 LC",
	},
	gloomgen7: {
		tier: "Gen7 NFE",
	},
	vileplumegen7: {
		randomBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "hiddenpowerfire", "aromatherapy", "strengthsap"],
		randomDoubleBattleMoves: ["energyball", "sludgebomb", "sleeppowder", "strengthsap", "protect", "hiddenpowerfire"],
		tier: "Gen7 NUBL",
		doublesTier: "(DUU)",
	},
	bellossomgen7: {
		randomBattleMoves: ["gigadrain", "sleeppowder", "hiddenpowerfire", "hiddenpowerrock", "quiverdance", "moonblast"],
		randomDoubleBattleMoves: ["energyball", "quiverdance", "sleeppowder", "strengthsap", "moonblast"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	parasgen7: {
		tier: "Gen7 LC",
	},
	parasectgen7: {
		randomBattleMoves: ["spore", "substitute", "leechlife", "seedbomb", "leechseed", "knockoff"],
		randomDoubleBattleMoves: ["spore", "leechlife", "seedbomb", "ragepowder", "leechseed", "protect", "knockoff", "wideguard"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	venonatgen7: {
		tier: "Gen7 LC",
	},
	venomothgen7: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "bugbuzz", "sludgebomb", "substitute"],
		randomDoubleBattleMoves: ["sleeppowder", "ragepowder", "quiverdance", "protect", "bugbuzz", "sludgebomb"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	diglettgen7: {
		tier: "Gen7 LC",
	},
	diglettalolagen7: {
		tier: "Gen7 LC",
	},
	dugtriogen7: {
		randomBattleMoves: ["earthquake", "stoneedge", "stealthrock", "suckerpunch", "reversal", "substitute", "memento"],
		randomDoubleBattleMoves: ["earthquake", "rockslide", "protect", "suckerpunch", "stoneedge"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	dugtrioalolagen7: {
		randomBattleMoves: ["earthquake", "ironhead", "substitute", "toxic", "stoneedge", "suckerpunch", "stealthrock"],
		randomDoubleBattleMoves: ["earthquake", "ironhead", "protect", "rockslide", "stoneedge", "suckerpunch"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	meowthgen7: {
		tier: "Gen7 LC",
	},
	meowthalolagen7: {
		tier: "Gen7 LC",
	},
	persiangen7: {
		randomBattleMoves: ["fakeout", "uturn", "taunt", "return", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "uturn", "knockoff", "taunt", "return", "hypnosis", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	persianalolagen7: {
		randomBattleMoves: ["nastyplot", "darkpulse", "powergem", "hypnosis", "hiddenpowerfighting"],
		randomDoubleBattleMoves: ["fakeout", "foulplay", "hiddenpowerfighting", "snarl", "icywind", "partingshot", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	psyduckgen7: {
		tier: "Gen7 LC",
	},
	golduckgen7: {
		randomBattleMoves: ["hydropump", "scald", "icebeam", "psyshock", "encore", "calmmind", "substitute"],
		randomDoubleBattleMoves: ["hydropump", "scald", "icebeam", "focusblast", "encore", "calmmind", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	mankeygen7: {
		tier: "Gen7 LC",
	},
	primeapegen7: {
		randomBattleMoves: ["closecombat", "uturn", "icepunch", "stoneedge", "encore", "earthquake", "gunkshot"],
		randomDoubleBattleMoves: ["closecombat", "uturn", "icepunch", "rockslide", "stompingtantrum", "poisonjab", "protect", "taunt", "stoneedge"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	growlithegen7: {
		tier: "Gen7 LC",
	},
	arcaninegen7: {
		randomBattleMoves: ["flareblitz", "wildcharge", "extremespeed", "closecombat", "morningsun", "willowisp", "toxic", "crunch", "roar"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "closecombat", "willowisp", "snarl", "protect", "extremespeed"],
		tier: "Gen7 RU",
		doublesTier: "DUU",
	},
	poliwaggen7: {
		tier: "Gen7 LC",
	},
	poliwhirlgen7: {
		tier: "Gen7 NFE",
	},
	poliwrathgen7: {
		randomBattleMoves: ["hydropump", "focusblast", "icepunch", "rest", "sleeptalk", "scald", "circlethrow", "raindance"],
		randomDoubleBattleMoves: ["encore", "scald", "protect", "icywind", "circlethrow", "toxic", "superpower"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	politoedgen7: {
		randomBattleMoves: ["scald", "toxic", "encore", "perishsong", "protect", "hypnosis", "rest"],
		randomDoubleBattleMoves: ["scald", "hypnosis", "icywind", "encore", "helpinghand", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "DOU",
	},
	abragen7: {
		tier: "Gen7 LC",
	},
	kadabragen7: {
		tier: "Gen7 NFE",
	},
	alakazamgen7: {
		randomBattleMoves: ["psyshock", "psychic", "focusblast", "shadowball", "hiddenpowerice", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["protect", "psychic", "focusblast", "shadowball", "encore", "dazzlinggleam"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	alakazammegagen7: {
		randomBattleMoves: ["calmmind", "psyshock", "focusblast", "shadowball", "encore", "substitute"],
		randomDoubleBattleMoves: ["protect", "psychic", "focusblast", "shadowball", "encore", "calmmind"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	machopgen7: {
		tier: "Gen7 LC",
	},
	machokegen7: {
		tier: "Gen7 NFE",
	},
	machampgen7: {
		randomBattleMoves: ["dynamicpunch", "icepunch", "stoneedge", "bulletpunch", "knockoff", "substitute"],
		randomDoubleBattleMoves: ["protect", "closecombat", "facade", "stoneedge", "bulletpunch", "knockoff", "wideguard"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	bellsproutgen7: {
		tier: "Gen7 LC",
	},
	weepinbellgen7: {
		tier: "Gen7 NFE",
	},
	victreebelgen7: {
		randomBattleMoves: ["sleeppowder", "sludgebomb", "gigadrain", "hiddenpowerfire", "suckerpunch", "swordsdance", "powerwhip", "knockoff"],
		randomDoubleBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "powerwhip", "knockoff", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	tentacoolgen7: {
		tier: "Gen7 LC",
	},
	tentacruelgen7: {
		randomBattleMoves: ["toxicspikes", "rapidspin", "scald", "sludgebomb", "acidspray", "knockoff"],
		randomDoubleBattleMoves: ["muddywater", "scald", "sludgebomb", "acidspray", "knockoff", "protect", "rapidspin"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	geodudegen7: {
		tier: "Gen7 LC",
	},
	geodudealolagen7: {
		tier: "Gen7 LC",
	},
	gravelergen7: {
		tier: "Gen7 NFE",
	},
	graveleralolagen7: {
		tier: "Gen7 NFE",
	},
	golemgen7: {
		randomBattleMoves: ["stealthrock", "earthquake", "explosion", "suckerpunch", "toxic", "rockblast"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "stoneedge", "suckerpunch", "protect", "stealthrock"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	golemalolagen7: {
		randomBattleMoves: ["stealthrock", "stoneedge", "return", "thunderpunch", "earthquake", "toxic"],
		randomDoubleBattleMoves: ["doubleedge", "stoneedge", "rockslide", "stompingtantrum", "protect", "stealthrock"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	ponytagen7: {
		tier: "Gen7 LC",
	},
	rapidashgen7: {
		randomBattleMoves: ["flareblitz", "wildcharge", "morningsun", "highhorsepower", "willowisp"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "protect", "hypnosis", "highhorsepower", "willowisp"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	slowpokegen7: {
		tier: "Gen7 LC",
	},
	slowbrogen7: {
		randomBattleMoves: ["scald", "toxic", "thunderwave", "psyshock", "fireblast", "icebeam", "slackoff"],
		randomDoubleBattleMoves: ["scald", "psychic", "thunderwave", "slackoff", "protect", "psyshock", "toxic"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	slowbromegagen7: {
		randomBattleMoves: ["calmmind", "scald", "psyshock", "slackoff", "fireblast", "icebeam"],
		randomDoubleBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "slackoff", "trickroom", "protect", "psyshock"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	slowkinggen7: {
		randomBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "grassknot", "thunderwave", "toxic", "slackoff", "trickroom", "nastyplot", "dragontail", "psyshock"],
		randomDoubleBattleMoves: ["scald", "fireblast", "psychic", "trickroom", "protect", "psyshock"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	magnemitegen7: {
		tier: "Gen7 LC",
	},
	magnetongen7: {
		tier: "Gen7 UU",
		doublesTier: "NFE",
	},
	magnezonegen7: {
		randomBattleMoves: ["thunderbolt", "substitute", "flashcannon", "hiddenpowerfire", "voltswitch"],
		randomDoubleBattleMoves: ["thunderbolt", "flashcannon", "voltswitch", "protect", "electroweb", "hiddenpowerfire"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	farfetchdgen7: {
		randomBattleMoves: ["bravebird", "swordsdance", "return", "leafblade", "roost", "knockoff"],
		randomDoubleBattleMoves: ["bravebird", "swordsdance", "return", "leafblade", "protect", "knockoff"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	doduogen7: {
		tier: "Gen7 LC",
	},
	dodriogen7: {
		randomBattleMoves: ["bravebird", "return", "swordsdance", "roost", "quickattack", "knockoff", "jumpkick"],
		randomDoubleBattleMoves: ["bravebird", "return", "swordsdance", "quickattack", "knockoff", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	seelgen7: {
		tier: "Gen7 LC",
	},
	dewgonggen7: {
		randomBattleMoves: ["surf", "icebeam", "perishsong", "encore", "toxic", "protect"],
		randomDoubleBattleMoves: ["liquidation", "icebeam", "protect", "helpinghand", "fakeout", "encore", "icywind", "toxic"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	grimergen7: {
		tier: "Gen7 LC",
	},
	grimeralolagen7: {
		tier: "Gen7 LC",
	},
	mukgen7: {
		randomBattleMoves: ["curse", "gunkshot", "poisonjab", "shadowsneak", "icepunch", "firepunch", "memento"],
		randomDoubleBattleMoves: ["gunkshot", "poisonjab", "shadowsneak", "protect", "icepunch", "firepunch"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	mukalolagen7: {
		randomBattleMoves: ["curse", "gunkshot", "knockoff", "poisonjab", "shadowsneak", "pursuit", "icepunch", "firepunch"],
		randomDoubleBattleMoves: ["gunkshot", "knockoff", "stoneedge", "snarl", "protect", "poisonjab", "shadowsneak"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	shelldergen7: {
		tier: "Gen7 LC",
	},
	cloystergen7: {
		randomBattleMoves: ["shellsmash", "iciclespear", "hydropump", "rockblast", "iceshard", "spikes", "rapidspin"],
		randomDoubleBattleMoves: ["shellsmash", "hydropump", "rockblast", "iciclespear", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	gastlygen7: {
		tier: "Gen7 LC",
	},
	hauntergen7: {
		tier: "Gen7 PU",
		doublesTier: "NFE",
	},
	gengargen7: {
		randomBattleMoves: ["shadowball", "sludgewave", "focusblast", "substitute", "disable", "painsplit", "willowisp"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "focusblast", "taunt", "willowisp", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	gengarmegagen7: {
		randomBattleMoves: ["shadowball", "sludgewave", "focusblast", "taunt", "destinybond", "disable", "perishsong", "protect"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "focusblast", "disable", "hypnosis", "willowisp", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	onixgen7: {
		tier: "Gen7 LC",
	},
	steelixgen7: {
		randomBattleMoves: ["stealthrock", "earthquake", "ironhead", "roar", "toxic", "rockslide"],
		randomDoubleBattleMoves: ["stealthrock", "earthquake", "heavyslam", "headsmash", "protect", "wideguard"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	steelixmegagen7: {
		randomBattleMoves: ["stealthrock", "earthquake", "heavyslam", "roar", "toxic", "dragontail"],
		randomDoubleBattleMoves: ["stealthrock", "earthquake", "heavyslam", "rockslide", "protect"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	drowzeegen7: {
		tier: "Gen7 LC",
	},
	hypnogen7: {
		randomBattleMoves: ["psychic", "seismictoss", "foulplay", "wish", "protect", "thunderwave", "toxic"],
		randomDoubleBattleMoves: ["psychic", "seismictoss", "thunderwave", "protect", "hypnosis"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	krabbygen7: {
		tier: "Gen7 LC",
	},
	kinglergen7: {
		randomBattleMoves: ["liquidation", "xscissor", "rockslide", "swordsdance", "agility", "superpower", "knockoff"],
		randomDoubleBattleMoves: ["agility", "liquidation", "xscissor", "rockslide", "knockoff", "protect", "wideguard"],
		tier: "Gen7 PUBL",
		doublesTier: "(DUU)",
	},
	voltorbgen7: {
		tier: "Gen7 LC",
	},
	electrodegen7: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "taunt", "foulplay", "hiddenpowergrass", "signalbeam"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "taunt", "foulplay", "protect", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	exeggcutegen7: {
		tier: "Gen7 LC",
	},
	exeggutorgen7: {
		randomBattleMoves: ["substitute", "leechseed", "gigadrain", "psychic", "sleeppowder", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["substitute", "leechseed", "energyball", "psychic", "sleeppowder", "hiddenpowerfire", "protect", "trickroom"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	exeggutoralolagen7: {
		randomBattleMoves: ["dracometeor", "leafstorm", "flamethrower", "gigadrain", "trickroom"],
		randomDoubleBattleMoves: ["dracometeor", "leafstorm", "protect", "flamethrower", "trickroom", "woodhammer", "dragonhammer"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	cubonegen7: {
		tier: "Gen7 LC",
	},
	marowakgen7: {
		randomBattleMoves: ["bonemerang", "earthquake", "knockoff", "doubleedge", "stoneedge", "stealthrock", "substitute"],
		randomDoubleBattleMoves: ["bonemerang", "doubleedge", "rockslide", "firepunch", "protect", "swordsdance", "stealthrock"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	marowakalolagen7: {
		randomBattleMoves: ["flamecharge", "shadowbone", "bonemerang", "willowisp", "stoneedge", "flareblitz", "substitute"],
		randomDoubleBattleMoves: ["shadowbone", "bonemerang", "willowisp", "stoneedge", "flareblitz", "protect"],
		tier: "Gen7 RU",
		doublesTier: "DUU",
	},
	marowakalolatotemgen7: {
		tier: "Gen7 RU",
		doublesTier: "DUU",
	},
	tyroguegen7: {
		tier: "Gen7 LC",
	},
	hitmonleegen7: {
		randomBattleMoves: ["highjumpkick", "knockoff", "stoneedge", "rapidspin", "machpunch", "poisonjab", "fakeout"],
		randomDoubleBattleMoves: ["knockoff", "rockslide", "machpunch", "fakeout", "closecombat", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	hitmonchangen7: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "firepunch", "machpunch", "rapidspin"],
		randomDoubleBattleMoves: ["fakeout", "drainpunch", "icepunch", "firepunch", "machpunch", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	hitmontopgen7: {
		randomBattleMoves: ["suckerpunch", "stoneedge", "rapidspin", "closecombat", "toxic"],
		randomDoubleBattleMoves: ["fakeout", "feint", "suckerpunch", "closecombat", "helpinghand", "machpunch", "wideguard", "rapidspin"],
		tier: "Gen7 NU",
		doublesTier: "DUU",
	},
	lickitunggen7: {
		tier: "Gen7 LC",
	},
	lickilickygen7: {
		randomBattleMoves: ["wish", "protect", "bodyslam", "knockoff", "dragontail", "healbell", "swordsdance", "explosion", "earthquake", "powerwhip"],
		randomDoubleBattleMoves: ["protect", "dragontail", "knockoff", "bodyslam", "powerwhip", "stompingtantrum", "explosion"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	koffinggen7: {
		tier: "Gen7 LC",
	},
	weezinggen7: {
		randomBattleMoves: ["painsplit", "sludgebomb", "willowisp", "fireblast", "protect", "toxicspikes"],
		randomDoubleBattleMoves: ["protect", "sludgebomb", "willowisp", "fireblast", "toxicspikes", "painsplit"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	rhyhorngen7: {
		tier: "Gen7 LC",
	},
	rhydongen7: {
		tier: "Gen7 NU",
		doublesTier: "NFE",
	},
	rhyperiorgen7: {
		randomBattleMoves: ["stoneedge", "earthquake", "icepunch", "megahorn", "stealthrock", "rockblast", "rockpolish", "dragontail"],
		randomDoubleBattleMoves: ["stoneedge", "earthquake", "megahorn", "stealthrock", "rockslide", "icepunch", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	happinygen7: {
		tier: "Gen7 LC",
	},
	chanseygen7: {
		randomBattleMoves: ["softboiled", "healbell", "stealthrock", "thunderwave", "toxic", "seismictoss", "wish"],
		randomDoubleBattleMoves: ["toxic", "thunderwave", "helpinghand", "softboiled", "seismictoss", "protect"],
		tier: "Gen7 OU",
		doublesTier: "NFE",
	},
	blisseygen7: {
		randomBattleMoves: ["toxic", "flamethrower", "seismictoss", "softboiled", "healbell", "protect", "thunderwave", "stealthrock"],
		randomDoubleBattleMoves: ["softboiled", "protect", "toxic", "seismictoss", "helpinghand", "thunderwave"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	tangelagen7: {
		tier: "Gen7 PU",
		doublesTier: "LC Uber",
	},
	tangrowthgen7: {
		randomBattleMoves: ["gigadrain", "leafstorm", "knockoff", "earthquake", "hiddenpowerfire", "rockslide", "sleeppowder", "synthesis"],
		randomDoubleBattleMoves: ["gigadrain", "sleeppowder", "hiddenpowerice", "leechseed", "knockoff", "ragepowder", "focusblast", "protect", "powerwhip", "earthquake"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	kangaskhangen7: {
		randomBattleMoves: ["return", "suckerpunch", "earthquake", "drainpunch", "crunch", "fakeout"],
		randomDoubleBattleMoves: ["fakeout", "return", "suckerpunch", "earthquake", "doubleedge", "drainpunch", "crunch", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	kangaskhanmegagen7: {
		randomBattleMoves: ["fakeout", "seismictoss", "bodyslam", "suckerpunch", "crunch"],
		randomDoubleBattleMoves: ["fakeout", "return", "suckerpunch", "earthquake", "poweruppunch", "drainpunch", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	horseagen7: {
		tier: "Gen7 LC",
	},
	seadragen7: {
		tier: "Gen7 NFE",
	},
	kingdragen7: {
		randomBattleMoves: ["raindance", "hydropump", "dracometeor", "icebeam", "waterfall"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "raindance", "dracometeor", "dragonpulse", "muddywater", "protect"],
		tier: "Gen7 NUBL",
		doublesTier: "DOU",
	},
	goldeengen7: {
		tier: "Gen7 LC",
	},
	seakinggen7: {
		randomBattleMoves: ["waterfall", "megahorn", "knockoff", "drillrun", "scald", "icebeam"],
		randomDoubleBattleMoves: ["waterfall", "megahorn", "knockoff", "drillrun", "icywind", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	staryugen7: {
		tier: "Gen7 LC",
	},
	starmiegen7: {
		randomBattleMoves: ["thunderbolt", "icebeam", "rapidspin", "recover", "psyshock", "scald", "hydropump"],
		randomDoubleBattleMoves: ["thunderbolt", "icebeam", "protect", "psychic", "psyshock", "scald", "hydropump"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	mimejrgen7: {
		tier: "Gen7 LC",
	},
	mrmimegen7: {
		randomBattleMoves: ["nastyplot", "psyshock", "dazzlinggleam", "shadowball", "focusblast", "healingwish", "encore"],
		randomDoubleBattleMoves: ["fakeout", "thunderwave", "hiddenpowerfighting", "psychic", "thunderbolt", "encore", "icywind", "protect", "wideguard", "dazzlinggleam", "followme"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	scythergen7: {
		randomBattleMoves: ["swordsdance", "roost", "bugbite", "quickattack", "brickbreak", "aerialace", "uturn", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "protect", "bugbite", "brickbreak", "aerialace", "feint", "uturn", "knockoff"],
		tier: "Gen7 PU",
		doublesTier: "LC Uber",
	},
	scizorgen7: {
		randomBattleMoves: ["swordsdance", "bulletpunch", "bugbite", "superpower", "uturn", "pursuit", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "bulletpunch", "bugbite", "superpower", "uturn", "protect", "feint", "knockoff"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	scizormegagen7: {
		randomBattleMoves: ["swordsdance", "roost", "bulletpunch", "bugbite", "superpower", "uturn", "defog", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "roost", "bulletpunch", "bugbite", "superpower", "uturn", "protect", "feint", "knockoff"],
		tier: "Gen7 OU",
		doublesTier: "DUU",
	},
	smoochumgen7: {
		tier: "Gen7 LC",
	},
	jynxgen7: {
		randomBattleMoves: ["icebeam", "psychic", "focusblast", "trick", "nastyplot", "lovelykiss", "substitute", "psyshock"],
		randomDoubleBattleMoves: ["icebeam", "psychic", "focusblast", "protect", "lovelykiss", "psyshock", "nastyplot"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	elekidgen7: {
		tier: "Gen7 LC",
	},
	electabuzzgen7: {
		tier: "Gen7 NFE",
	},
	electiviregen7: {
		randomBattleMoves: ["wildcharge", "crosschop", "icepunch", "flamethrower", "earthquake", "voltswitch"],
		randomDoubleBattleMoves: ["wildcharge", "crosschop", "icepunch", "flamethrower", "stompingtantrum", "protect", "followme"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	magbygen7: {
		tier: "Gen7 LC",
	},
	magmargen7: {
		tier: "Gen7 NFE",
	},
	magmortargen7: {
		randomBattleMoves: ["fireblast", "focusblast", "hiddenpowergrass", "hiddenpowerice", "thunderbolt", "earthquake", "substitute"],
		randomDoubleBattleMoves: ["fireblast", "taunt", "hiddenpowergrass", "hiddenpowerice", "thunderbolt", "heatwave", "willowisp", "protect", "followme"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	pinsirgen7: {
		randomBattleMoves: ["earthquake", "xscissor", "closecombat", "stoneedge", "stealthrock", "knockoff"],
		randomDoubleBattleMoves: ["protect", "feint", "xscissor", "closecombat", "rockslide", "knockoff"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	pinsirmegagen7: {
		randomBattleMoves: ["swordsdance", "earthquake", "closecombat", "quickattack", "return"],
		randomDoubleBattleMoves: ["feint", "protect", "swordsdance", "closecombat", "quickattack", "return", "rockslide"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	taurosgen7: {
		randomBattleMoves: ["bodyslam", "earthquake", "zenheadbutt", "rockslide", "doubleedge"],
		randomDoubleBattleMoves: ["return", "stompingtantrum", "zenheadbutt", "rockslide", "stoneedge", "protect", "doubleedge"],
		tier: "Gen7 PUBL",
		doublesTier: "(DUU)",
	},
	magikarpgen7: {
		tier: "Gen7 LC",
	},
	gyaradosgen7: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "bounce", "dragontail", "stoneedge", "substitute"],
		randomDoubleBattleMoves: ["dragondance", "waterfall", "bounce", "protect", "thunderwave", "stoneedge"],
		tier: "Gen7 UUBL",
		doublesTier: "DUU",
	},
	gyaradosmegagen7: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "substitute", "icefang", "crunch"],
		randomDoubleBattleMoves: ["dragondance", "waterfall", "taunt", "protect", "thunderwave", "icefang", "crunch"],
		tier: "Gen7 OU",
		doublesTier: "DUU",
	},
	laprasgen7: {
		randomBattleMoves: ["icebeam", "thunderbolt", "healbell", "toxic", "hydropump", "substitute"],
		randomDoubleBattleMoves: ["freezedry", "hydropump", "helpinghand", "protect", "iceshard", "icywind"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	dittogen7: {
		randomBattleMoves: ["transform"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	eeveegen7: {
		tier: "Gen7 LC",
	},
	vaporeongen7: {
		randomBattleMoves: ["wish", "protect", "scald", "roar", "icebeam", "healbell"],
		randomDoubleBattleMoves: ["helpinghand", "protect", "scald", "muddywater", "icywind", "toxic"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	jolteongen7: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "hiddenpowerice", "shadowball", "signalbeam"],
		randomDoubleBattleMoves: ["thunderbolt", "voltswitch", "hiddenpowergrass", "hiddenpowerice", "helpinghand", "protect", "signalbeam"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	flareongen7: {
		randomBattleMoves: ["flamecharge", "facade", "flareblitz", "superpower", "quickattack"],
		randomDoubleBattleMoves: ["flamecharge", "facade", "flareblitz", "superpower", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	espeongen7: {
		randomBattleMoves: ["psychic", "psyshock", "substitute", "shadowball", "calmmind", "morningsun", "dazzlinggleam"],
		randomDoubleBattleMoves: ["psychic", "shadowball", "calmmind", "helpinghand", "protect", "dazzlinggleam"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	umbreongen7: {
		randomBattleMoves: ["wish", "protect", "healbell", "toxic", "foulplay"],
		randomDoubleBattleMoves: ["moonlight", "protect", "snarl", "foulplay", "helpinghand"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	leafeongen7: {
		randomBattleMoves: ["swordsdance", "leafblade", "healbell", "xscissor", "synthesis", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "leafblade", "xscissor", "protect", "helpinghand", "knockoff"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	glaceongen7: {
		randomBattleMoves: ["icebeam", "hiddenpowerground", "shadowball", "healbell", "wish", "protect", "toxic"],
		randomDoubleBattleMoves: ["icebeam", "hiddenpowerground", "protect", "helpinghand", "toxic"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	porygongen7: {
		tier: "Gen7 LC Uber",
	},
	porygon2gen7: {
		randomBattleMoves: ["triattack", "icebeam", "discharge", "recover", "toxic"],
		randomDoubleBattleMoves: ["triattack", "icebeam", "thunderbolt", "protect", "recover", "allyswitch", "thunderwave"],
		tier: "Gen7 RU",
		doublesTier: "DOU",
	},
	porygonzgen7: {
		randomBattleMoves: ["triattack", "shadowball", "icebeam", "thunderbolt", "trick", "nastyplot"],
		randomDoubleBattleMoves: ["protect", "triattack", "darkpulse", "icebeam", "thunderbolt", "trick", "nastyplot"],
		tier: "Gen7 UUBL",
		doublesTier: "DUU",
	},
	omanytegen7: {
		tier: "Gen7 LC",
	},
	omastargen7: {
		randomBattleMoves: ["shellsmash", "scald", "icebeam", "earthpower", "spikes", "stealthrock", "hydropump"],
		randomDoubleBattleMoves: ["shellsmash", "muddywater", "icebeam", "earthpower", "hiddenpowerelectric", "protect", "hydropump"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	kabutogen7: {
		tier: "Gen7 LC",
	},
	kabutopsgen7: {
		randomBattleMoves: ["aquajet", "stoneedge", "rapidspin", "swordsdance", "liquidation", "knockoff"],
		randomDoubleBattleMoves: ["aquajet", "stoneedge", "protect", "rockslide", "swordsdance", "liquidation", "knockoff"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	aerodactylgen7: {
		randomBattleMoves: ["stealthrock", "taunt", "defog", "roost", "stoneedge", "earthquake", "doubleedge", "pursuit"],
		randomDoubleBattleMoves: ["wideguard", "stoneedge", "rockslide", "earthquake", "protect", "skydrop", "tailwind"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	aerodactylmegagen7: {
		randomBattleMoves: ["honeclaws", "stoneedge", "aerialace", "aquatail", "earthquake", "firefang", "roost"],
		randomDoubleBattleMoves: ["wideguard", "stoneedge", "rockslide", "aquatail", "protect", "skydrop", "tailwind"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	munchlaxgen7: {
		tier: "Gen7 LC",
	},
	snorlaxgen7: {
		randomBattleMoves: ["rest", "curse", "sleeptalk", "bodyslam", "earthquake", "return", "firepunch", "crunch", "pursuit", "whirlwind"],
		randomDoubleBattleMoves: ["curse", "protect", "bodyslam", "rest", "highhorsepower", "return", "crunch"],
		tier: "Gen7 RU",
		doublesTier: "DUber",
	},
	articunogen7: {
		randomBattleMoves: ["icebeam", "roost", "freezedry", "toxic", "substitute", "hurricane"],
		randomDoubleBattleMoves: ["freezedry", "roost", "protect", "hurricane", "tailwind"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	zapdosgen7: {
		randomBattleMoves: ["thunderbolt", "heatwave", "hiddenpowerice", "roost", "toxic", "uturn", "defog"],
		randomDoubleBattleMoves: ["thunderbolt", "heatwave", "roost", "hiddenpowergrass", "hiddenpowerice", "tailwind", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	moltresgen7: {
		randomBattleMoves: ["fireblast", "roost", "substitute", "toxic", "willowisp", "hurricane"],
		randomDoubleBattleMoves: ["fireblast", "airslash", "protect", "uturn", "willowisp", "hurricane", "heatwave", "tailwind"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	dratinigen7: {
		tier: "Gen7 LC",
	},
	dragonairgen7: {
		tier: "Gen7 NFE",
	},
	dragonitegen7: {
		randomBattleMoves: ["dragondance", "outrage", "fly", "firepunch", "extremespeed", "earthquake", "roost"],
		randomDoubleBattleMoves: ["dragondance", "firepunch", "extremespeed", "dragonclaw", "roost", "superpower", "protect", "fly"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	mewtwogen7: {
		randomBattleMoves: ["psystrike", "aurasphere", "fireblast", "icebeam", "calmmind", "recover"],
		randomDoubleBattleMoves: ["psystrike", "aurasphere", "fireblast", "icebeam", "calmmind", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	mewtwomegaxgen7: {
		randomBattleMoves: ["bulkup", "drainpunch", "zenheadbutt", "stoneedge", "taunt", "icebeam"],
		randomDoubleBattleMoves: ["bulkup", "drainpunch", "taunt", "stoneedge", "zenheadbutt", "icebeam"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	mewtwomegaygen7: {
		randomBattleMoves: ["psystrike", "aurasphere", "shadowball", "fireblast", "icebeam", "calmmind", "recover", "willowisp", "taunt"],
		randomDoubleBattleMoves: ["psystrike", "aurasphere", "fireblast", "icebeam", "calmmind", "willowisp", "taunt"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	mewgen7: {
		randomBattleMoves: ["defog", "roost", "willowisp", "knockoff", "taunt", "icebeam", "earthpower", "aurasphere", "stealthrock", "nastyplot", "psyshock"],
		randomDoubleBattleMoves: ["taunt", "willowisp", "transform", "roost", "psyshock", "fireblast", "icebeam", "protect", "fakeout", "helpinghand", "tailwind"],
		tier: "Gen7 UU",
		doublesTier: "DOU",
	},
	chikoritagen7: {
		tier: "Gen7 LC",
	},
	bayleefgen7: {
		tier: "Gen7 NFE",
	},
	meganiumgen7: {
		randomBattleMoves: ["reflect", "lightscreen", "aromatherapy", "leechseed", "toxic", "gigadrain", "synthesis", "dragontail"],
		randomDoubleBattleMoves: ["leechseed", "leafstorm", "energyball", "dragontail", "healpulse", "toxic", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	cyndaquilgen7: {
		tier: "Gen7 LC",
	},
	quilavagen7: {
		tier: "Gen7 NFE",
	},
	typhlosiongen7: {
		randomBattleMoves: ["eruption", "fireblast", "hiddenpowergrass", "extrasensory", "focusblast"],
		randomDoubleBattleMoves: ["eruption", "heatwave", "hiddenpowergrass", "extrasensory", "focusblast", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	totodilegen7: {
		tier: "Gen7 LC",
	},
	croconawgen7: {
		tier: "Gen7 NFE",
	},
	feraligatrgen7: {
		randomBattleMoves: ["aquajet", "liquidation", "crunch", "icepunch", "dragondance", "swordsdance", "earthquake"],
		randomDoubleBattleMoves: ["aquajet", "liquidation", "crunch", "icepunch", "dragondance", "protect"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	sentretgen7: {
		tier: "Gen7 LC",
	},
	furretgen7: {
		randomBattleMoves: ["uturn", "trick", "aquatail", "firepunch", "knockoff", "doubleedge"],
		randomDoubleBattleMoves: ["uturn", "knockoff", "doubleedge", "superfang", "followme", "helpinghand", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	hoothootgen7: {
		tier: "Gen7 LC",
	},
	noctowlgen7: {
		randomBattleMoves: ["roost", "whirlwind", "nightshade", "toxic", "defog", "hurricane", "heatwave"],
		randomDoubleBattleMoves: ["roost", "tailwind", "airslash", "hypervoice", "heatwave", "protect", "hypnosis"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	ledybagen7: {
		tier: "Gen7 LC",
	},
	lediangen7: {
		randomBattleMoves: ["roost", "lightscreen", "encore", "reflect", "knockoff", "toxic", "uturn"],
		randomDoubleBattleMoves: ["protect", "lightscreen", "encore", "reflect", "knockoff", "bugbuzz", "uturn", "tailwind"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	spinarakgen7: {
		tier: "Gen7 LC",
	},
	ariadosgen7: {
		randomBattleMoves: ["megahorn", "toxicspikes", "poisonjab", "suckerpunch", "stickyweb"],
		randomDoubleBattleMoves: ["protect", "megahorn", "toxicthread", "poisonjab", "stickyweb", "ragepowder"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	chinchougen7: {
		tier: "Gen7 LC",
	},
	lanturngen7: {
		randomBattleMoves: ["voltswitch", "hiddenpowergrass", "hydropump", "icebeam", "thunderwave", "scald", "thunderbolt", "healbell", "toxic"],
		randomDoubleBattleMoves: ["thunderbolt", "icebeam", "thunderwave", "scald", "protect", "toxic"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	togepigen7: {
		tier: "Gen7 LC",
	},
	togeticgen7: {
		tier: "Gen7 NFE",
	},
	togekissgen7: {
		randomBattleMoves: ["roost", "thunderwave", "nastyplot", "airslash", "aurasphere", "healbell", "defog"],
		randomDoubleBattleMoves: ["roost", "thunderwave", "nastyplot", "airslash", "followme", "dazzlinggleam", "tailwind", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	natugen7: {
		tier: "Gen7 LC",
	},
	xatugen7: {
		randomBattleMoves: ["thunderwave", "toxic", "roost", "psychic", "uturn", "reflect", "calmmind", "heatwave"],
		randomDoubleBattleMoves: ["thunderwave", "tailwind", "roost", "psychic", "uturn", "heatwave", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	mareepgen7: {
		tier: "Gen7 LC",
	},
	flaaffygen7: {
		tier: "Gen7 NFE",
	},
	ampharosgen7: {
		randomBattleMoves: ["voltswitch", "reflect", "lightscreen", "focusblast", "thunderbolt", "toxic", "healbell", "hiddenpowerice"],
		randomDoubleBattleMoves: ["focusblast", "hiddenpowerice", "hiddenpowergrass", "thunderbolt", "protect", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	ampharosmegagen7: {
		randomBattleMoves: ["voltswitch", "focusblast", "agility", "thunderbolt", "healbell", "dragonpulse"],
		randomDoubleBattleMoves: ["focusblast", "hiddenpowerice", "hiddenpowergrass", "thunderbolt", "dragonpulse", "protect"],
		tier: "Gen7 RU",
		doublesTier: "DUU",
	},
	azurillgen7: {
		tier: "Gen7 LC",
	},
	marillgen7: {
		tier: "Gen7 NFE",
	},
	azumarillgen7: {
		randomBattleMoves: ["liquidation", "aquajet", "playrough", "superpower", "bellydrum", "knockoff"],
		randomDoubleBattleMoves: ["liquidation", "aquajet", "playrough", "superpower", "knockoff", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DUU",
	},
	bonslygen7: {
		tier: "Gen7 LC",
	},
	sudowoodogen7: {
		randomBattleMoves: ["headsmash", "earthquake", "suckerpunch", "woodhammer", "toxic", "stealthrock"],
		randomDoubleBattleMoves: ["headsmash", "stompingtantrum", "suckerpunch", "woodhammer", "stealthrock", "helpinghand", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	hoppipgen7: {
		tier: "Gen7 LC",
	},
	skiploomgen7: {
		tier: "Gen7 NFE",
	},
	jumpluffgen7: {
		randomBattleMoves: ["swordsdance", "sleeppowder", "uturn", "encore", "toxic", "acrobatics", "leechseed", "seedbomb", "substitute", "strengthsap"],
		randomDoubleBattleMoves: ["encore", "sleeppowder", "uturn", "helpinghand", "leechseed", "energyball", "ragepowder", "protect", "strengthsap"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	aipomgen7: {
		tier: "Gen7 LC Uber",
	},
	ambipomgen7: {
		randomBattleMoves: ["fakeout", "return", "knockoff", "uturn", "switcheroo", "seedbomb", "lowkick"],
		randomDoubleBattleMoves: ["fakeout", "return", "knockoff", "uturn", "icepunch", "lowkick", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	sunkerngen7: {
		tier: "Gen7 LC",
	},
	sunfloragen7: {
		randomBattleMoves: ["sunnyday", "gigadrain", "solarbeam", "hiddenpowerfire", "earthpower"],
		randomDoubleBattleMoves: ["sunnyday", "energyball", "solarbeam", "hiddenpowerfire", "earthpower", "protect", "helpinghand", "encore"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	yanmagen7: {
		tier: "Gen7 LC Uber",
	},
	yanmegagen7: {
		randomBattleMoves: ["bugbuzz", "airslash", "uturn", "protect", "gigadrain"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	woopergen7: {
		tier: "Gen7 LC",
	},
	quagsiregen7: {
		randomBattleMoves: ["recover", "earthquake", "scald", "toxic", "encore", "icebeam"],
		randomDoubleBattleMoves: ["icywind", "earthquake", "scald", "recover", "toxic", "protect"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	murkrowgen7: {
		tier: "Gen7 LC Uber",
	},
	honchkrowgen7: {
		randomBattleMoves: ["superpower", "suckerpunch", "bravebird", "roost", "heatwave", "pursuit"],
		randomDoubleBattleMoves: ["superpower", "suckerpunch", "bravebird", "roost", "heatwave", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	misdreavusgen7: {
		tier: "Gen7 LC Uber",
	},
	mismagiusgen7: {
		randomBattleMoves: ["nastyplot", "substitute", "willowisp", "shadowball", "thunderbolt", "dazzlinggleam", "taunt", "painsplit", "destinybond"],
		randomDoubleBattleMoves: ["nastyplot", "willowisp", "shadowball", "thunderbolt", "dazzlinggleam", "taunt", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	unowngen7: {
		randomBattleMoves: ["hiddenpowerpsychic"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	wynautgen7: {
		tier: "Gen7 LC",
	},
	wobbuffetgen7: {
		randomBattleMoves: ["counter", "mirrorcoat", "encore", "destinybond", "safeguard"],
		randomDoubleBattleMoves: ["counter", "mirrorcoat", "encore", "charm"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	girafariggen7: {
		randomBattleMoves: ["psychic", "psyshock", "thunderbolt", "nastyplot", "substitute", "hypervoice"],
		randomDoubleBattleMoves: ["psychic", "psyshock", "thunderbolt", "nastyplot", "protect", "hypervoice"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	pinecogen7: {
		tier: "Gen7 LC",
	},
	forretressgen7: {
		randomBattleMoves: ["rapidspin", "toxic", "spikes", "voltswitch", "stealthrock", "gyroball"],
		randomDoubleBattleMoves: ["toxic", "voltswitch", "stealthrock", "gyroball", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	dunsparcegen7: {
		randomBattleMoves: ["bodyslam", "rockslide", "bite", "coil", "glare", "headbutt", "roost"],
		randomDoubleBattleMoves: ["coil", "rockslide", "bite", "headbutt", "glare", "bodyslam", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	gligargen7: {
		randomBattleMoves: ["stealthrock", "toxic", "roost", "defog", "earthquake", "uturn", "knockoff"],
		tier: "Gen7 UU",
		doublesTier: "LC Uber",
	},
	gliscorgen7: {
		randomBattleMoves: ["roost", "taunt", "earthquake", "protect", "toxic", "stealthrock", "knockoff", "uturn"],
		randomDoubleBattleMoves: ["tailwind", "taunt", "earthquake", "protect", "facade", "knockoff"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	snubbullgen7: {
		tier: "Gen7 LC",
	},
	granbullgen7: {
		randomBattleMoves: ["thunderwave", "playrough", "crunch", "earthquake", "healbell"],
		randomDoubleBattleMoves: ["thunderwave", "playrough", "stompingtantrum", "snarl", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	qwilfishgen7: {
		randomBattleMoves: ["toxicspikes", "liquidation", "spikes", "painsplit", "thunderwave", "taunt", "destinybond"],
		randomDoubleBattleMoves: ["poisonjab", "liquidation", "swordsdance", "protect", "thunderwave", "taunt", "destinybond"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	shucklegen7: {
		randomBattleMoves: ["toxic", "encore", "stealthrock", "knockoff", "stickyweb", "infestation"],
		randomDoubleBattleMoves: ["encore", "stealthrock", "knockoff", "stickyweb", "guardsplit", "toxic", "helpinghand"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	heracrossgen7: {
		randomBattleMoves: ["closecombat", "megahorn", "stoneedge", "swordsdance", "knockoff", "earthquake"],
		randomDoubleBattleMoves: ["closecombat", "megahorn", "facade", "swordsdance", "knockoff", "protect"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	heracrossmegagen7: {
		randomBattleMoves: ["closecombat", "pinmissile", "rockblast", "swordsdance", "bulletseed", "substitute"],
		randomDoubleBattleMoves: ["closecombat", "pinmissile", "rockblast", "swordsdance", "bulletseed", "knockoff", "protect"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	sneaselgen7: {
		tier: "Gen7 NU",
		doublesTier: "LC Uber",
	},
	weavilegen7: {
		randomBattleMoves: ["iceshard", "iciclecrash", "knockoff", "pursuit", "swordsdance", "lowkick"],
		randomDoubleBattleMoves: ["iceshard", "iciclecrash", "knockoff", "fakeout", "swordsdance", "lowkick", "protect"],
		tier: "Gen7 UUBL",
		doublesTier: "DUU",
	},
	teddiursagen7: {
		tier: "Gen7 LC",
	},
	ursaringgen7: {
		randomBattleMoves: ["swordsdance", "facade", "closecombat", "crunch", "protect"],
		randomDoubleBattleMoves: ["swordsdance", "facade", "closecombat", "crunch", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	slugmagen7: {
		tier: "Gen7 LC",
	},
	magcargogen7: {
		randomBattleMoves: ["recover", "lavaplume", "toxic", "hiddenpowergrass", "stealthrock", "fireblast", "earthpower", "shellsmash", "ancientpower"],
		randomDoubleBattleMoves: ["protect", "heatwave", "willowisp", "stealthrock", "fireblast", "incinerate", "earthpower"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	swinubgen7: {
		tier: "Gen7 LC",
	},
	piloswinegen7: {
		tier: "Gen7 NU",
		doublesTier: "NFE",
	},
	mamoswinegen7: {
		randomBattleMoves: ["iceshard", "earthquake", "endeavor", "iciclecrash", "stealthrock", "superpower", "knockoff"],
		randomDoubleBattleMoves: ["iceshard", "earthquake", "rockslide", "iciclecrash", "protect", "superpower", "knockoff"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	corsolagen7: {
		randomBattleMoves: ["recover", "toxic", "powergem", "scald", "stealthrock"],
		randomDoubleBattleMoves: ["protect", "icywind", "powergem", "scald", "stealthrock", "toxic"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	remoraidgen7: {
		tier: "Gen7 LC",
	},
	octillerygen7: {
		randomBattleMoves: ["hydropump", "fireblast", "icebeam", "energyball", "rockblast", "gunkshot", "scald"],
		randomDoubleBattleMoves: ["hydropump", "fireblast", "icebeam", "energyball", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	delibirdgen7: {
		randomBattleMoves: ["spikes", "rapidspin", "icywind", "freezedry", "destinybond"],
		randomDoubleBattleMoves: ["fakeout", "iceshard", "icepunch", "aerialace", "brickbreak", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	mantykegen7: {
		tier: "Gen7 LC",
	},
	mantinegen7: {
		randomBattleMoves: ["scald", "airslash", "roost", "toxic", "defog"],
		randomDoubleBattleMoves: ["scald", "tailwind", "wideguard", "helpinghand", "protect", "defog", "toxic"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	skarmorygen7: {
		randomBattleMoves: ["whirlwind", "bravebird", "roost", "spikes", "stealthrock", "defog"],
		randomDoubleBattleMoves: ["skydrop", "bravebird", "tailwind", "taunt", "feint", "protect", "ironhead", "stealthrock"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	houndourgen7: {
		tier: "Gen7 LC",
	},
	houndoomgen7: {
		randomBattleMoves: ["nastyplot", "darkpulse", "suckerpunch", "fireblast", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["nastyplot", "darkpulse", "suckerpunch", "heatwave", "protect"],
		tier: "Gen7 PUBL",
		doublesTier: "(DUU)",
	},
	houndoommegagen7: {
		randomBattleMoves: ["nastyplot", "darkpulse", "taunt", "fireblast", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["nastyplot", "darkpulse", "taunt", "heatwave", "hiddenpowergrass", "protect"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	phanpygen7: {
		tier: "Gen7 LC",
	},
	donphangen7: {
		randomBattleMoves: ["stealthrock", "rapidspin", "iceshard", "earthquake", "knockoff", "stoneedge"],
		randomDoubleBattleMoves: ["stealthrock", "knockoff", "iceshard", "earthquake", "rockslide", "protect", "rapidspin"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	stantlergen7: {
		randomBattleMoves: ["doubleedge", "megahorn", "jumpkick", "earthquake", "suckerpunch"],
		randomDoubleBattleMoves: ["return", "megahorn", "jumpkick", "earthquake", "suckerpunch", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	smearglegen7: {
		randomBattleMoves: ["spore", "stealthrock", "destinybond", "whirlwind", "stickyweb"],
		randomDoubleBattleMoves: ["spore", "fakeout", "wideguard", "helpinghand", "followme", "tailwind", "kingsshield", "transform", "stickyweb"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	miltankgen7: {
		randomBattleMoves: ["milkdrink", "stealthrock", "bodyslam", "healbell", "curse", "earthquake", "toxic"],
		randomDoubleBattleMoves: ["protect", "helpinghand", "bodyslam", "milkdrink", "curse", "stompingtantrum", "thunderwave"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	raikougen7: {
		randomBattleMoves: ["thunderbolt", "hiddenpowerice", "aurasphere", "calmmind", "substitute", "voltswitch", "extrasensory"],
		randomDoubleBattleMoves: ["thunderbolt", "hiddenpowerice", "calmmind", "snarl", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	enteigen7: {
		randomBattleMoves: ["extremespeed", "flareblitz", "stompingtantrum", "stoneedge", "sacredfire"],
		randomDoubleBattleMoves: ["extremespeed", "flareblitz", "stoneedge", "sacredfire", "protect", "stompingtantrum"],
		tier: "Gen7 RUBL",
		doublesTier: "DUU",
	},
	suicunegen7: {
		randomBattleMoves: ["hydropump", "icebeam", "scald", "hiddenpowergrass", "rest", "sleeptalk", "calmmind"],
		randomDoubleBattleMoves: ["icebeam", "scald", "snarl", "tailwind", "toxic"],
		tier: "Gen7 UU",
		doublesTier: "DOU",
	},
	larvitargen7: {
		tier: "Gen7 LC",
	},
	pupitargen7: {
		tier: "Gen7 NFE",
	},
	tyranitargen7: {
		randomBattleMoves: ["crunch", "stoneedge", "pursuit", "earthquake", "fireblast", "icebeam", "stealthrock"],
		randomDoubleBattleMoves: ["crunch", "stoneedge", "rockslide", "stompingtantrum", "fireblast", "icebeam", "stealthrock", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	tyranitarmegagen7: {
		randomBattleMoves: ["crunch", "stoneedge", "earthquake", "icepunch", "dragondance"],
		randomDoubleBattleMoves: ["crunch", "stoneedge", "earthquake", "icepunch", "dragondance", "rockslide", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	lugiagen7: {
		randomBattleMoves: ["toxic", "roost", "substitute", "whirlwind", "aeroblast", "earthquake"],
		randomDoubleBattleMoves: ["aeroblast", "roost", "tailwind", "psychic", "skydrop", "protect", "toxic"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	hoohgen7: {
		randomBattleMoves: ["bravebird", "defog", "earthquake", "roost", "sacredfire", "substitute", "toxic"],
		randomDoubleBattleMoves: ["sacredfire", "bravebird", "earthpower", "roost", "toxic", "tailwind", "skydrop", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	celebigen7: {
		randomBattleMoves: ["nastyplot", "psychic", "gigadrain", "recover", "earthpower", "hiddenpowerfire", "leafstorm", "uturn", "thunderwave"],
		randomDoubleBattleMoves: ["protect", "psychic", "energyball", "recover", "earthpower", "nastyplot", "uturn", "thunderwave"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	treeckogen7: {
		tier: "Gen7 LC",
	},
	grovylegen7: {
		tier: "Gen7 NFE",
	},
	sceptilegen7: {
		randomBattleMoves: ["gigadrain", "leafstorm", "hiddenpowerice", "focusblast", "hiddenpowerflying"],
		randomDoubleBattleMoves: ["energyball", "hiddenpowerice", "focusblast", "hiddenpowerfire", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	sceptilemegagen7: {
		randomBattleMoves: ["substitute", "gigadrain", "dragonpulse", "focusblast", "swordsdance", "outrage", "leafblade", "earthquake", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["energyball", "leafstorm", "hiddenpowerice", "focusblast", "dragonpulse", "hiddenpowerfire", "protect"],
		tier: "Gen7 RU",
		doublesTier: "DUU",
	},
	torchicgen7: {
		tier: "Gen7 LC",
	},
	combuskengen7: {
		tier: "Gen7 NFE",
	},
	blazikengen7: {
		randomBattleMoves: ["fireblast", "highjumpkick", "protect", "knockoff", "hiddenpowerice"],
		tier: "Gen7 Uber",
		doublesTier: "(DUU)",
	},
	blazikenmegagen7: {
		randomBattleMoves: ["flareblitz", "highjumpkick", "protect", "swordsdance", "stoneedge", "knockoff"],
		tier: "Gen7 Uber",
		doublesTier: "DUU",
	},
	mudkipgen7: {
		tier: "Gen7 LC",
	},
	marshtompgen7: {
		tier: "Gen7 NFE",
	},
	swampertgen7: {
		randomBattleMoves: ["stealthrock", "earthquake", "scald", "icebeam", "roar", "toxic", "protect"],
		randomDoubleBattleMoves: ["earthquake", "stealthrock", "wideguard", "scald", "muddywater", "protect", "icywind"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	swampertmegagen7: {
		randomBattleMoves: ["raindance", "waterfall", "earthquake", "icepunch", "superpower"],
		randomDoubleBattleMoves: ["waterfall", "earthquake", "raindance", "icepunch", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	poochyenagen7: {
		tier: "Gen7 LC",
	},
	mightyenagen7: {
		randomBattleMoves: ["crunch", "suckerpunch", "playrough", "firefang", "irontail"],
		randomDoubleBattleMoves: ["suckerpunch", "crunch", "playrough", "firefang", "taunt", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	zigzagoongen7: {
		tier: "Gen7 LC",
	},
	linoonegen7: {
		randomBattleMoves: ["bellydrum", "extremespeed", "stompingtantrum", "shadowclaw"],
		randomDoubleBattleMoves: ["bellydrum", "extremespeed", "stompingtantrum", "protect", "shadowclaw"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	wurmplegen7: {
		tier: "Gen7 LC",
	},
	silcoongen7: {
		tier: "Gen7 NFE",
	},
	beautiflygen7: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "psychic", "energyball", "hiddenpowerfighting"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "aircutter", "tailwind", "stringshot", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	cascoongen7: {
		tier: "Gen7 NFE",
	},
	dustoxgen7: {
		randomBattleMoves: ["roost", "defog", "bugbuzz", "sludgebomb", "quiverdance", "uturn"],
		randomDoubleBattleMoves: ["tailwind", "stringshot", "strugglebug", "bugbuzz", "protect", "sludgebomb"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	lotadgen7: {
		tier: "Gen7 LC",
	},
	lombregen7: {
		tier: "Gen7 NFE",
	},
	ludicologen7: {
		randomBattleMoves: ["raindance", "hydropump", "scald", "gigadrain", "icebeam", "focusblast"],
		randomDoubleBattleMoves: ["raindance", "hydropump", "gigadrain", "icebeam", "fakeout", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	seedotgen7: {
		tier: "Gen7 LC",
	},
	nuzleafgen7: {
		tier: "Gen7 NFE",
	},
	shiftrygen7: {
		randomBattleMoves: ["leafstorm", "swordsdance", "leafblade", "suckerpunch", "defog", "lowkick", "knockoff"],
		randomDoubleBattleMoves: ["leafstorm", "swordsdance", "leafblade", "suckerpunch", "knockoff", "fakeout", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	taillowgen7: {
		tier: "Gen7 LC",
	},
	swellowgen7: {
		randomBattleMoves: ["protect", "facade", "bravebird", "uturn", "quickattack"],
		randomDoubleBattleMoves: ["bravebird", "facade", "quickattack", "uturn", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	wingullgen7: {
		tier: "Gen7 LC Uber",
	},
	pelippergen7: {
		randomBattleMoves: ["scald", "hurricane", "hydropump", "uturn", "roost", "defog", "knockoff"],
		randomDoubleBattleMoves: ["scald", "hurricane", "wideguard", "protect", "tailwind", "uturn"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	raltsgen7: {
		tier: "Gen7 LC",
	},
	kirliagen7: {
		tier: "Gen7 NFE",
	},
	gardevoirgen7: {
		randomBattleMoves: ["psychic", "thunderbolt", "focusblast", "shadowball", "moonblast", "calmmind", "substitute", "willowisp"],
		randomDoubleBattleMoves: ["psyshock", "focusblast", "moonblast", "helpinghand", "protect", "dazzlinggleam"],
		tier: "Gen7 RU",
		doublesTier: "DUU",
	},
	gardevoirmegagen7: {
		randomBattleMoves: ["calmmind", "hypervoice", "psyshock", "focusblast", "substitute", "taunt", "willowisp"],
		randomDoubleBattleMoves: ["psyshock", "focusblast", "calmmind", "hypervoice", "protect"],
		tier: "Gen7 UUBL",
		doublesTier: "DOU",
	},
	galladegen7: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "shadowsneak", "closecombat", "zenheadbutt", "knockoff", "trick"],
		randomDoubleBattleMoves: ["closecombat", "trick", "shadowsneak", "icepunch", "zenheadbutt", "knockoff", "protect", "helpinghand"],
		tier: "Gen7 PUBL",
		doublesTier: "(DUU)",
	},
	gallademegagen7: {
		randomBattleMoves: ["swordsdance", "closecombat", "drainpunch", "knockoff", "zenheadbutt", "substitute"],
		randomDoubleBattleMoves: ["closecombat", "drainpunch", "icepunch", "zenheadbutt", "swordsdance", "knockoff", "protect"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	surskitgen7: {
		tier: "Gen7 LC",
	},
	masqueraingen7: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "airslash", "hydropump", "stickyweb"],
		randomDoubleBattleMoves: ["hydropump", "bugbuzz", "airslash", "quiverdance", "tailwind", "stickyweb", "strugglebug", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	shroomishgen7: {
		tier: "Gen7 LC",
	},
	breloomgen7: {
		randomBattleMoves: ["spore", "machpunch", "bulletseed", "rocktomb", "swordsdance"],
		randomDoubleBattleMoves: ["spore", "machpunch", "bulletseed", "rocktomb", "protect"],
		tier: "Gen7 UUBL",
		doublesTier: "DUU",
	},
	slakothgen7: {
		tier: "Gen7 LC",
	},
	vigorothgen7: {
		tier: "Gen7 NFE",
	},
	slakinggen7: {
		randomBattleMoves: ["earthquake", "pursuit", "nightslash", "retaliate", "gigaimpact", "firepunch"],
		randomDoubleBattleMoves: ["earthquake", "nightslash", "doubleedge", "retaliate", "hammerarm", "rockslide"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	nincadagen7: {
		tier: "Gen7 LC",
	},
	ninjaskgen7: {
		randomBattleMoves: ["swordsdance", "aerialace", "nightslash", "dig", "leechlife", "uturn"],
		randomDoubleBattleMoves: ["swordsdance", "protect", "leechlife", "aerialace", "dig"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	shedinjagen7: {
		randomBattleMoves: ["swordsdance", "willowisp", "xscissor", "shadowsneak", "shadowclaw"],
		randomDoubleBattleMoves: ["swordsdance", "willowisp", "xscissor", "shadowsneak", "allyswitch", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	whismurgen7: {
		tier: "Gen7 LC",
	},
	loudredgen7: {
		tier: "Gen7 NFE",
	},
	exploudgen7: {
		randomBattleMoves: ["boomburst", "fireblast", "icebeam", "surf", "focusblast"],
		randomDoubleBattleMoves: ["boomburst", "fireblast", "icebeam", "focusblast", "protect", "hypervoice"],
		tier: "Gen7 NUBL",
		doublesTier: "(DUU)",
	},
	makuhitagen7: {
		tier: "Gen7 LC",
	},
	hariyamagen7: {
		randomBattleMoves: ["bulletpunch", "closecombat", "icepunch", "stoneedge", "bulkup", "knockoff"],
		randomDoubleBattleMoves: ["bulletpunch", "closecombat", "facade", "fakeout", "knockoff", "helpinghand", "wideguard", "protect"],
		tier: "Gen7 NU",
		doublesTier: "DUU",
	},
	nosepassgen7: {
		tier: "Gen7 LC",
	},
	probopassgen7: {
		randomBattleMoves: ["stealthrock", "thunderwave", "toxic", "flashcannon", "voltswitch", "earthpower"],
		randomDoubleBattleMoves: ["stealthrock", "thunderwave", "helpinghand", "powergem", "wideguard", "protect", "flashcannon"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	skittygen7: {
		tier: "Gen7 LC",
	},
	delcattygen7: {
		randomBattleMoves: ["doubleedge", "suckerpunch", "wildcharge", "fakeout", "thunderwave", "healbell"],
		randomDoubleBattleMoves: ["doubleedge", "suckerpunch", "fakeout", "thunderwave", "protect", "helpinghand"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	sableyegen7: {
		randomBattleMoves: ["recover", "willowisp", "taunt", "toxic", "knockoff", "foulplay"],
		randomDoubleBattleMoves: ["recover", "willowisp", "taunt", "fakeout", "foulplay", "helpinghand", "snarl", "protect"],
		tier: "Gen7 PU",
		doublesTier: "DUU",
	},
	sableyemegagen7: {
		randomBattleMoves: ["recover", "willowisp", "darkpulse", "calmmind", "shadowball"],
		randomDoubleBattleMoves: ["recover", "fakeout", "knockoff", "shadowball", "willowisp", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DUU",
	},
	mawilegen7: {
		randomBattleMoves: ["swordsdance", "ironhead", "stealthrock", "playrough", "suckerpunch", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "ironhead", "playrough", "suckerpunch", "knockoff", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	mawilemegagen7: {
		randomBattleMoves: ["swordsdance", "ironhead", "firefang", "substitute", "playrough", "suckerpunch", "knockoff", "focuspunch"],
		randomDoubleBattleMoves: ["swordsdance", "ironhead", "playrough", "suckerpunch", "knockoff", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DUU",
	},
	arongen7: {
		tier: "Gen7 LC",
	},
	lairongen7: {
		tier: "Gen7 NFE",
	},
	aggrongen7: {
		randomBattleMoves: ["autotomize", "headsmash", "earthquake", "lowkick", "heavyslam", "aquatail", "stealthrock"],
		randomDoubleBattleMoves: ["headsmash", "stompingtantrum", "heavyslam", "stealthrock", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	aggronmegagen7: {
		randomBattleMoves: ["earthquake", "heavyslam", "rockslide", "stealthrock", "thunderwave", "roar", "toxic"],
		randomDoubleBattleMoves: ["rockslide", "stompingtantrum", "heavyslam", "toxic", "protect", "stealthrock"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	medititegen7: {
		tier: "Gen7 LC Uber",
	},
	medichamgen7: {
		randomBattleMoves: ["highjumpkick", "drainpunch", "zenheadbutt", "icepunch", "bulletpunch"],
		randomDoubleBattleMoves: ["highjumpkick", "drainpunch", "zenheadbutt", "icepunch", "bulletpunch", "protect", "fakeout"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	medichammegagen7: {
		randomBattleMoves: ["highjumpkick", "zenheadbutt", "thunderpunch", "icepunch", "fakeout"],
		randomDoubleBattleMoves: ["highjumpkick", "drainpunch", "zenheadbutt", "icepunch", "bulletpunch", "protect", "fakeout"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	electrikegen7: {
		tier: "Gen7 LC",
	},
	manectricgen7: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat", "flamethrower"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "flamethrower", "snarl", "protect", "switcheroo"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	manectricmegagen7: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "flamethrower", "snarl", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DOU",
	},
	pluslegen7: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "substitute", "hiddenpowerice", "encore"],
		randomDoubleBattleMoves: ["nastyplot", "thunderbolt", "protect", "hiddenpowerice", "encore", "helpinghand"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	minungen7: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "substitute", "hiddenpowerice", "encore"],
		randomDoubleBattleMoves: ["nastyplot", "thunderbolt", "protect", "hiddenpowerice", "encore", "helpinghand"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	volbeatgen7: {
		randomBattleMoves: ["uturn", "roost", "thunderwave", "encore", "tailwind", "defog"],
		randomDoubleBattleMoves: ["stringshot", "strugglebug", "helpinghand", "thunderwave", "encore", "tailwind", "protect", "uturn"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	illumisegen7: {
		randomBattleMoves: ["uturn", "roost", "bugbuzz", "thunderwave", "encore", "wish", "defog"],
		randomDoubleBattleMoves: ["protect", "helpinghand", "bugbuzz", "encore", "thunderwave", "tailwind"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	budewgen7: {
		tier: "Gen7 LC",
	},
	roseliagen7: {
		tier: "Gen7 PU",
		doublesTier: "NFE",
	},
	roseradegen7: {
		randomBattleMoves: ["sludgebomb", "gigadrain", "sleeppowder", "leafstorm", "spikes", "toxicspikes", "synthesis", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["sludgebomb", "gigadrain", "sleeppowder", "leafstorm", "protect", "hiddenpowerfire"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	gulpingen7: {
		tier: "Gen7 LC",
	},
	swalotgen7: {
		randomBattleMoves: ["sludgebomb", "icebeam", "toxic", "yawn", "encore", "painsplit", "earthquake"],
		randomDoubleBattleMoves: ["sludgebomb", "icebeam", "protect", "yawn", "encore", "poisongas"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	carvanhagen7: {
		tier: "Gen7 LC",
	},
	sharpedogen7: {
		randomBattleMoves: ["protect", "icebeam", "crunch", "earthquake", "waterfall"],
		randomDoubleBattleMoves: ["protect", "icebeam", "crunch", "liquidation", "psychicfangs"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	sharpedomegagen7: {
		randomBattleMoves: ["protect", "crunch", "waterfall", "icefang", "psychicfangs", "destinybond"],
		randomDoubleBattleMoves: ["protect", "icefang", "crunch", "liquidation", "psychicfangs"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	wailmergen7: {
		tier: "Gen7 LC",
	},
	wailordgen7: {
		randomBattleMoves: ["waterspout", "hydropump", "icebeam", "hiddenpowergrass", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["waterspout", "hydropump", "icebeam", "hiddenpowergrass", "hiddenpowerfire"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	numelgen7: {
		tier: "Gen7 LC",
	},
	cameruptgen7: {
		randomBattleMoves: ["rockpolish", "fireblast", "earthpower", "lavaplume", "stealthrock", "hiddenpowergrass", "roar", "stoneedge"],
		randomDoubleBattleMoves: ["fireblast", "earthpower", "heatwave", "incinerate", "protect", "stealthrock"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	cameruptmegagen7: {
		randomBattleMoves: ["stealthrock", "fireblast", "earthpower", "ancientpower", "willowisp", "toxic"],
		randomDoubleBattleMoves: ["fireblast", "earthpower", "heatwave", "rockslide", "protect"],
		tier: "Gen7 NUBL",
		doublesTier: "DOU",
	},
	torkoalgen7: {
		randomBattleMoves: ["shellsmash", "fireblast", "earthpower", "solarbeam", "stealthrock", "rapidspin", "yawn", "lavaplume"],
		randomDoubleBattleMoves: ["protect", "heatwave", "earthpower", "willowisp", "fireblast", "solarbeam"],
		tier: "Gen7 (PU)",
		doublesTier: "DUU",
	},
	spoinkgen7: {
		tier: "Gen7 LC",
	},
	grumpiggen7: {
		randomBattleMoves: ["psychic", "thunderwave", "healbell", "whirlwind", "toxic", "focusblast", "reflect", "lightscreen"],
		randomDoubleBattleMoves: ["psychic", "thunderwave", "taunt", "protect", "focusblast", "reflect", "lightscreen"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	spindagen7: {
		randomBattleMoves: ["return", "superpower", "rockslide", "encore"],
		randomDoubleBattleMoves: ["return", "superpower", "suckerpunch", "trickroom", "fakeout", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	trapinchgen7: {
		tier: "Gen7 LC Uber",
	},
	vibravagen7: {
		tier: "Gen7 NFE",
	},
	flygongen7: {
		randomBattleMoves: ["earthquake", "outrage", "uturn", "roost", "defog", "firepunch", "dragondance"],
		randomDoubleBattleMoves: ["earthquake", "protect", "dragonclaw", "uturn", "fireblast", "tailwind", "dragondance"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	cacneagen7: {
		tier: "Gen7 LC",
	},
	cacturnegen7: {
		randomBattleMoves: ["swordsdance", "spikes", "suckerpunch", "seedbomb", "drainpunch", "substitute", "darkpulse", "focusblast", "gigadrain"],
		randomDoubleBattleMoves: ["swordsdance", "spikyshield", "suckerpunch", "seedbomb", "drainpunch", "substitute"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	swablugen7: {
		tier: "Gen7 LC",
	},
	altariagen7: {
		randomBattleMoves: ["dracometeor", "fireblast", "earthquake", "roost", "toxic", "defog"],
		randomDoubleBattleMoves: ["dracometeor", "protect", "dragonclaw", "fireblast", "tailwind"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	altariamegagen7: {
		randomBattleMoves: ["dragondance", "return", "hypervoice", "healbell", "earthquake", "roost", "fireblast"],
		randomDoubleBattleMoves: ["dragondance", "return", "doubleedge", "earthquake", "protect", "fireblast"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	zangoosegen7: {
		randomBattleMoves: ["swordsdance", "closecombat", "knockoff", "quickattack", "facade"],
		randomDoubleBattleMoves: ["protect", "closecombat", "knockoff", "quickattack", "facade"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	sevipergen7: {
		randomBattleMoves: ["flamethrower", "sludgewave", "gigadrain", "darkpulse", "switcheroo", "swordsdance", "earthquake", "poisonjab", "suckerpunch"],
		randomDoubleBattleMoves: ["flamethrower", "gigadrain", "earthquake", "suckerpunch", "aquatail", "protect", "glare", "poisonjab", "sludgebomb"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	lunatonegen7: {
		randomBattleMoves: ["psychic", "earthpower", "stealthrock", "rockpolish", "calmmind", "icebeam", "powergem", "moonlight", "toxic"],
		randomDoubleBattleMoves: ["psychic", "earthpower", "helpinghand", "powergem", "protect", "trickroom"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	solrockgen7: {
		randomBattleMoves: ["stealthrock", "explosion", "rockslide", "reflect", "lightscreen", "willowisp", "morningsun"],
		randomDoubleBattleMoves: ["protect", "helpinghand", "stoneedge", "zenheadbutt", "willowisp", "stealthrock", "rockslide"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	barboachgen7: {
		tier: "Gen7 LC",
	},
	whiscashgen7: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "stoneedge", "zenheadbutt"],
		randomDoubleBattleMoves: ["dragondance", "waterfall", "earthquake", "stoneedge", "zenheadbutt", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	corphishgen7: {
		tier: "Gen7 LC",
	},
	crawdauntgen7: {
		randomBattleMoves: ["dragondance", "crabhammer", "superpower", "swordsdance", "knockoff", "aquajet"],
		randomDoubleBattleMoves: ["dragondance", "crabhammer", "superpower", "swordsdance", "knockoff", "aquajet", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	baltoygen7: {
		tier: "Gen7 LC",
	},
	claydolgen7: {
		randomBattleMoves: ["stealthrock", "toxic", "psychic", "icebeam", "earthquake", "rapidspin"],
		randomDoubleBattleMoves: ["allyswitch", "earthpower", "stealthrock", "rapidspin", "toxic", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	lileepgen7: {
		tier: "Gen7 LC",
	},
	cradilygen7: {
		randomBattleMoves: ["stealthrock", "recover", "gigadrain", "toxic", "seedbomb", "rockslide", "curse"],
		randomDoubleBattleMoves: ["protect", "recover", "gigadrain", "rockslide", "stealthrock", "toxic", "stringshot"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	anorithgen7: {
		tier: "Gen7 LC",
	},
	armaldogen7: {
		randomBattleMoves: ["stealthrock", "stoneedge", "toxic", "xscissor", "knockoff", "rapidspin", "earthquake"],
		randomDoubleBattleMoves: ["rockslide", "stoneedge", "stringshot", "xscissor", "swordsdance", "knockoff", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	feebasgen7: {
		tier: "Gen7 LC",
	},
	miloticgen7: {
		randomBattleMoves: ["recover", "scald", "toxic", "icebeam", "dragontail", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["hypnosis", "scald", "icywind", "recover", "protect"],
		tier: "Gen7 RU",
		doublesTier: "DOU",
	},
	castformgen7: {
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	castformsunnygen7: {
		randomBattleMoves: ["sunnyday", "fireblast", "solarbeam", "icebeam"],
	},
	castformrainygen7: {
		randomBattleMoves: ["raindance", "hydropump", "thunder", "hurricane"],
	},
	castformsnowygen7: {
		randomBattleMoves: ["hail", "blizzard", "thunderbolt", "fireblast"],
	},
	kecleongen7: {
		randomBattleMoves: ["fakeout", "knockoff", "drainpunch", "suckerpunch", "shadowsneak", "stealthrock", "recover"],
		randomDoubleBattleMoves: ["knockoff", "fakeout", "trickroom", "drainpunch", "shadowsneak", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	shuppetgen7: {
		tier: "Gen7 LC",
	},
	banettegen7: {
		randomBattleMoves: ["destinybond", "taunt", "shadowclaw", "suckerpunch", "willowisp", "shadowsneak", "knockoff"],
		randomDoubleBattleMoves: ["shadowclaw", "willowisp", "shadowsneak", "knockoff", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	banettemegagen7: {
		randomBattleMoves: ["destinybond", "taunt", "shadowclaw", "suckerpunch", "willowisp", "knockoff"],
		randomDoubleBattleMoves: ["destinybond", "taunt", "shadowclaw", "suckerpunch", "willowisp", "knockoff", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	duskullgen7: {
		tier: "Gen7 LC",
	},
	dusclopsgen7: {
		tier: "Gen7 NFE",
	},
	dusknoirgen7: {
		randomBattleMoves: ["willowisp", "shadowsneak", "icepunch", "painsplit", "substitute", "earthquake", "focuspunch"],
		randomDoubleBattleMoves: ["allyswitch", "willowisp", "shadowsneak", "icepunch", "painsplit", "protect", "helpinghand", "trickroom"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	tropiusgen7: {
		randomBattleMoves: ["leechseed", "substitute", "airslash", "gigadrain", "toxic", "protect"],
		randomDoubleBattleMoves: ["leechseed", "protect", "airslash", "gigadrain", "tailwind", "roost"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	chinglinggen7: {
		tier: "Gen7 LC",
	},
	chimechogen7: {
		randomBattleMoves: ["psychic", "yawn", "recover", "calmmind", "shadowball", "healingwish", "healbell", "taunt"],
		randomDoubleBattleMoves: ["protect", "psychic", "thunderwave", "recover", "trickroom", "helpinghand", "taunt"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	absolgen7: {
		randomBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "superpower", "pursuit", "playrough"],
		randomDoubleBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "superpower", "protect", "playrough"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	absolmegagen7: {
		randomBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "fireblast", "superpower", "pursuit", "playrough", "icebeam"],
		randomDoubleBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "fireblast", "superpower", "protect", "playrough"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	snoruntgen7: {
		tier: "Gen7 LC",
	},
	glaliegen7: {
		randomBattleMoves: ["spikes", "icebeam", "iceshard", "taunt", "earthquake", "explosion", "superfang"],
		randomDoubleBattleMoves: ["icebeam", "iceshard", "taunt", "earthquake", "freezedry", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	glaliemegagen7: {
		randomBattleMoves: ["freezedry", "iceshard", "earthquake", "explosion", "return", "spikes"],
		randomDoubleBattleMoves: ["iceshard", "freezedry", "earthquake", "explosion", "protect", "return"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	froslassgen7: {
		randomBattleMoves: ["icebeam", "spikes", "destinybond", "shadowball", "taunt", "thunderwave"],
		randomDoubleBattleMoves: ["icebeam", "protect", "destinybond", "shadowball", "taunt", "thunderwave", "willowisp"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	sphealgen7: {
		tier: "Gen7 LC",
	},
	sealeogen7: {
		tier: "Gen7 NFE",
	},
	walreingen7: {
		randomBattleMoves: ["superfang", "protect", "toxic", "surf", "icebeam", "roar"],
		randomDoubleBattleMoves: ["protect", "icywind", "brine", "superfang"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	clamperlgen7: {
		tier: "Gen7 LC",
	},
	huntailgen7: {
		randomBattleMoves: ["shellsmash", "waterfall", "icebeam", "suckerpunch"],
		randomDoubleBattleMoves: ["shellsmash", "waterfall", "icebeam", "suckerpunch", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	gorebyssgen7: {
		randomBattleMoves: ["shellsmash", "hydropump", "icebeam", "hiddenpowergrass", "substitute"],
		randomDoubleBattleMoves: ["shellsmash", "hydropump", "icebeam", "hiddenpowergrass", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	relicanthgen7: {
		randomBattleMoves: ["headsmash", "waterfall", "earthquake", "doubleedge", "stealthrock", "toxic"],
		randomDoubleBattleMoves: ["headsmash", "waterfall", "earthquake", "doubleedge", "rockslide", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	luvdiscgen7: {
		randomBattleMoves: ["icebeam", "toxic", "sweetkiss", "protect", "scald"],
		randomDoubleBattleMoves: ["icebeam", "toxic", "sweetkiss", "protect", "scald", "icywind", "healpulse"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	bagongen7: {
		tier: "Gen7 LC",
	},
	shelgongen7: {
		tier: "Gen7 NFE",
	},
	salamencegen7: {
		randomBattleMoves: ["outrage", "fireblast", "earthquake", "dracometeor", "dragondance", "fly", "roost"],
		randomDoubleBattleMoves: ["protect", "fireblast", "earthquake", "dracometeor", "tailwind", "dragondance", "dragonclaw", "fly"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	salamencemegagen7: {
		randomBattleMoves: ["doubleedge", "return", "fireblast", "earthquake", "dracometeor", "roost", "dragondance"],
		randomDoubleBattleMoves: ["doubleedge", "return", "fireblast", "earthquake", "dracometeor", "protect", "dragondance", "dragonclaw"],
		tier: "Gen7 Uber",
		doublesTier: "DOU",
	},
	beldumgen7: {
		tier: "Gen7 LC",
	},
	metanggen7: {
		tier: "Gen7 NFE",
	},
	metagrossgen7: {
		randomBattleMoves: ["meteormash", "earthquake", "agility", "stealthrock", "zenheadbutt", "bulletpunch", "thunderpunch", "explosion", "icepunch"],
		randomDoubleBattleMoves: ["agility", "meteormash", "stompingtantrum", "protect", "zenheadbutt", "bulletpunch", "thunderpunch", "icepunch"],
		tier: "Gen7 RU",
		doublesTier: "DUU",
	},
	metagrossmegagen7: {
		randomBattleMoves: ["meteormash", "earthquake", "agility", "zenheadbutt", "hammerarm", "icepunch"],
		randomDoubleBattleMoves: ["meteormash", "stompingtantrum", "protect", "zenheadbutt", "thunderpunch", "icepunch"],
		tier: "Gen7 Uber",
		doublesTier: "DOU",
	},
	regirockgen7: {
		randomBattleMoves: ["stealthrock", "thunderwave", "stoneedge", "drainpunch", "curse", "rest", "rockslide", "toxic"],
		randomDoubleBattleMoves: ["stealthrock", "thunderwave", "stoneedge", "drainpunch", "curse", "rockslide", "protect", "rest"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	regicegen7: {
		randomBattleMoves: ["thunderwave", "icebeam", "thunderbolt", "rest", "sleeptalk", "focusblast", "rockpolish"],
		randomDoubleBattleMoves: ["thunderwave", "icebeam", "thunderbolt", "icywind", "protect", "rockpolish"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	registeelgen7: {
		randomBattleMoves: ["stealthrock", "toxic", "curse", "ironhead", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["stealthrock", "ironhead", "curse", "rest", "thunderwave", "protect", "seismictoss"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	latiasgen7: {
		randomBattleMoves: ["dracometeor", "psyshock", "hiddenpowerfire", "roost", "thunderbolt", "healingwish", "defog"],
		randomDoubleBattleMoves: ["dracometeor", "psyshock", "tailwind", "helpinghand", "healpulse", "protect"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	latiasmegagen7: {
		randomBattleMoves: ["calmmind", "dragonpulse", "surf", "dracometeor", "roost", "hiddenpowerfire", "substitute", "psyshock"],
		randomDoubleBattleMoves: ["dragonpulse", "psychic", "tailwind", "helpinghand", "healpulse", "protect"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	latiosgen7: {
		randomBattleMoves: ["dracometeor", "hiddenpowerfire", "surf", "thunderbolt", "psyshock", "roost", "trick", "defog"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "psyshock", "trick", "tailwind", "protect", "hiddenpowerfire"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	latiosmegagen7: {
		randomBattleMoves: ["calmmind", "dracometeor", "hiddenpowerfire", "psyshock", "roost", "defog"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "psyshock", "tailwind", "protect", "hiddenpowerfire"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	kyogregen7: {
		randomBattleMoves: ["waterspout", "originpulse", "scald", "thunder", "icebeam"],
		randomDoubleBattleMoves: ["waterspout", "originpulse", "thunder", "icebeam", "calmmind", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	kyogreprimalgen7: {
		randomBattleMoves: ["calmmind", "originpulse", "scald", "thunder", "icebeam", "toxic", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["originpulse", "thunder", "icebeam", "calmmind", "protect"],
	},
	groudongen7: {
		randomBattleMoves: ["earthquake", "stealthrock", "lavaplume", "stoneedge", "roar", "toxic", "thunderwave", "dragonclaw", "firepunch"],
		randomDoubleBattleMoves: ["precipiceblades", "rockslide", "protect", "stoneedge", "swordsdance", "rockpolish", "firepunch"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	groudonprimalgen7: {
		randomBattleMoves: ["stealthrock", "precipiceblades", "lavaplume", "stoneedge", "dragontail", "rockpolish", "swordsdance", "firepunch"],
		randomDoubleBattleMoves: ["precipiceblades", "rockslide", "stoneedge", "swordsdance", "rockpolish", "firepunch", "protect"],
	},
	rayquazagen7: {
		randomBattleMoves: ["outrage", "vcreate", "extremespeed", "dragondance", "earthquake", "dracometeor", "dragonclaw"],
		randomDoubleBattleMoves: ["tailwind", "vcreate", "extremespeed", "dragondance", "earthquake", "dracometeor", "dragonclaw", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	rayquazamegagen7: {
		// randomBattleMoves: ["vcreate", "extremespeed", "swordsdance", "earthquake", "dragonascent", "dragonclaw", "dragondance"],
		randomDoubleBattleMoves: ["vcreate", "extremespeed", "swordsdance", "earthquake", "dragonascent", "dragonclaw", "dragondance", "protect"],
		tier: "Gen7 AG",
		doublesTier: "DUber",
	},
	jirachigen7: {
		randomBattleMoves: ["ironhead", "uturn", "firepunch", "icepunch", "stealthrock", "bodyslam", "toxic", "wish", "substitute"],
		randomDoubleBattleMoves: ["bodyslam", "ironhead", "icywind", "thunderwave", "helpinghand", "uturn", "followme", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DUber",
	},
	deoxysgen7: {
		randomBattleMoves: ["psychoboost", "stealthrock", "spikes", "firepunch", "superpower", "extremespeed", "knockoff", "taunt"],
		randomDoubleBattleMoves: ["psychoboost", "superpower", "extremespeed", "icebeam", "firepunch", "protect", "knockoff"],
		tier: "Gen7 Uber",
		doublesTier: "(DUU)",
	},
	deoxysattackgen7: {
		randomBattleMoves: ["psychoboost", "superpower", "icebeam", "knockoff", "extremespeed", "firepunch", "stealthrock"],
		randomDoubleBattleMoves: ["psychoboost", "superpower", "extremespeed", "icebeam", "firepunch", "protect", "knockoff"],
		tier: "Gen7 Uber",
		doublesTier: "DUU",
	},
	deoxysdefensegen7: {
		randomBattleMoves: ["spikes", "stealthrock", "recover", "taunt", "toxic", "seismictoss", "knockoff"],
		randomDoubleBattleMoves: ["protect", "stealthrock", "recover", "taunt", "reflect", "seismictoss", "lightscreen", "trickroom"],
		tier: "Gen7 Uber",
		doublesTier: "(DUU)",
	},
	deoxysspeedgen7: {
		randomBattleMoves: ["spikes", "stealthrock", "superpower", "psychoboost", "taunt", "magiccoat", "knockoff"],
		randomDoubleBattleMoves: ["superpower", "psychoboost", "taunt", "lightscreen", "reflect", "protect", "knockoff"],
		tier: "Gen7 Uber",
		doublesTier: "(DUU)",
	},
	turtwiggen7: {
		tier: "Gen7 LC",
	},
	grotlegen7: {
		tier: "Gen7 NFE",
	},
	torterragen7: {
		randomBattleMoves: ["stealthrock", "earthquake", "woodhammer", "stoneedge", "synthesis", "rockpolish"],
		randomDoubleBattleMoves: ["protect", "earthquake", "woodhammer", "stoneedge", "rockslide", "wideguard", "rockpolish"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	chimchargen7: {
		tier: "Gen7 LC",
	},
	monfernogen7: {
		tier: "Gen7 NFE",
	},
	infernapegen7: {
		randomBattleMoves: ["stealthrock", "uturn", "closecombat", "flareblitz", "stoneedge", "machpunch", "nastyplot", "fireblast", "focusblast", "vacuumwave", "grassknot"],
		randomDoubleBattleMoves: ["fakeout", "heatwave", "closecombat", "uturn", "grassknot", "stoneedge", "feint", "taunt", "flareblitz", "protect"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	piplupgen7: {
		tier: "Gen7 LC",
	},
	prinplupgen7: {
		tier: "Gen7 NFE",
	},
	empoleongen7: {
		randomBattleMoves: ["hydropump", "flashcannon", "grassknot", "defog", "icebeam", "scald", "toxic", "roar", "stealthrock"],
		randomDoubleBattleMoves: ["icywind", "scald", "protect", "grassknot", "flashcannon", "defog"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	starlygen7: {
		tier: "Gen7 LC",
	},
	staraviagen7: {
		tier: "Gen7 NFE",
	},
	staraptorgen7: {
		randomBattleMoves: ["bravebird", "closecombat", "uturn", "quickattack", "doubleedge"],
		randomDoubleBattleMoves: ["bravebird", "closecombat", "uturn", "quickattack", "doubleedge", "tailwind", "protect"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	bidoofgen7: {
		tier: "Gen7 LC",
	},
	bibarelgen7: {
		randomBattleMoves: ["return", "liquidation", "swordsdance", "quickattack", "aquajet"],
		randomDoubleBattleMoves: ["return", "liquidation", "swordsdance", "aquajet", "quickattack"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	kricketotgen7: {
		tier: "Gen7 LC",
	},
	kricketunegen7: {
		randomBattleMoves: ["leechlife", "endeavor", "taunt", "toxic", "stickyweb", "knockoff"],
		randomDoubleBattleMoves: ["leechlife", "protect", "taunt", "stickyweb", "knockoff"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	shinxgen7: {
		tier: "Gen7 LC",
	},
	luxiogen7: {
		tier: "Gen7 NFE",
	},
	luxraygen7: {
		randomBattleMoves: ["wildcharge", "icefang", "voltswitch", "crunch", "superpower", "facade"],
		randomDoubleBattleMoves: ["wildcharge", "icefang", "voltswitch", "crunch", "superpower", "helpinghand", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	cranidosgen7: {
		tier: "Gen7 LC",
	},
	rampardosgen7: {
		randomBattleMoves: ["headsmash", "earthquake", "rockpolish", "crunch", "rockslide", "firepunch"],
		randomDoubleBattleMoves: ["headsmash", "earthquake", "zenheadbutt", "rockslide", "crunch", "stoneedge", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	shieldongen7: {
		tier: "Gen7 LC",
	},
	bastiodongen7: {
		randomBattleMoves: ["stealthrock", "rockblast", "metalburst", "protect", "toxic", "roar"],
		randomDoubleBattleMoves: ["stealthrock", "stoneedge", "metalburst", "protect", "wideguard", "guardsplit"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	burmygen7: {
		tier: "Gen7 LC",
	},
	wormadamgen7: {
		randomBattleMoves: ["gigadrain", "bugbuzz", "quiverdance", "hiddenpowerrock", "leafstorm"],
		randomDoubleBattleMoves: ["leafstorm", "gigadrain", "bugbuzz", "stringshot", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	wormadamsandygen7: {
		randomBattleMoves: ["earthquake", "toxic", "protect", "stealthrock"],
		randomDoubleBattleMoves: ["earthquake", "suckerpunch", "rockblast", "protect", "stringshot"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	wormadamtrashgen7: {
		randomBattleMoves: ["stealthrock", "toxic", "gyroball", "protect"],
		randomDoubleBattleMoves: ["strugglebug", "stringshot", "bugbuzz", "flashcannon", "suckerpunch", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	mothimgen7: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "airslash", "energyball", "uturn"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "airslash", "energyball", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	combeegen7: {
		tier: "Gen7 LC",
	},
	vespiquengen7: {
		randomBattleMoves: ["toxic", "protect", "roost", "infestation", "uturn"],
		randomDoubleBattleMoves: ["tailwind", "healorder", "stringshot", "attackorder", "strugglebug", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	pachirisugen7: {
		randomBattleMoves: ["nuzzle", "thunderbolt", "superfang", "toxic", "uturn"],
		randomDoubleBattleMoves: ["nuzzle", "thunderbolt", "superfang", "followme", "uturn", "helpinghand", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	buizelgen7: {
		tier: "Gen7 LC",
	},
	floatzelgen7: {
		randomBattleMoves: ["bulkup", "liquidation", "icepunch", "substitute", "taunt", "aquajet", "brickbreak"],
		randomDoubleBattleMoves: ["liquidation", "aquajet", "switcheroo", "protect", "icepunch", "taunt"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	cherubigen7: {
		tier: "Gen7 LC",
	},
	cherrimgen7: {
		randomBattleMoves: ["energyball", "dazzlinggleam", "hiddenpowerfire", "synthesis", "healingwish"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	cherrimsunshinegen7: {
		randomBattleMoves: ["sunnyday", "solarbeam", "gigadrain", "weatherball", "hiddenpowerice"],
		randomDoubleBattleMoves: ["sunnyday", "solarbeam", "gigadrain", "weatherball", "helpinghand"],
	},
	shellosgen7: {
		tier: "Gen7 LC",
	},
	gastrodongen7: {
		randomBattleMoves: ["earthquake", "icebeam", "scald", "toxic", "recover", "clearsmog"],
		randomDoubleBattleMoves: ["earthpower", "scald", "muddywater", "recover", "icywind", "protect"],
		tier: "Gen7 PU",
		doublesTier: "DOU",
	},
	drifloongen7: {
		tier: "Gen7 LC Uber",
	},
	drifblimgen7: {
		randomBattleMoves: ["acrobatics", "willowisp", "substitute", "destinybond", "shadowball", "hex"],
		randomDoubleBattleMoves: ["acrobatics", "shadowball", "hypnosis", "thunderbolt", "destinybond", "willowisp", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	bunearygen7: {
		tier: "Gen7 LC",
	},
	lopunnygen7: {
		randomBattleMoves: ["return", "switcheroo", "highjumpkick", "icepunch", "healingwish"],
		randomDoubleBattleMoves: ["return", "switcheroo", "firepunch", "helpinghand", "fakeout", "protect", "encore", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	lopunnymegagen7: {
		randomBattleMoves: ["return", "highjumpkick", "substitute", "fakeout", "icepunch"],
		randomDoubleBattleMoves: ["return", "highjumpkick", "protect", "fakeout", "icepunch", "encore"],
		tier: "Gen7 OU",
		doublesTier: "DUU",
	},
	glameowgen7: {
		tier: "Gen7 LC",
	},
	puruglygen7: {
		randomBattleMoves: ["fakeout", "uturn", "suckerpunch", "quickattack", "return", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "uturn", "quickattack", "return", "knockoff", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	stunkygen7: {
		tier: "Gen7 LC",
	},
	skuntankgen7: {
		randomBattleMoves: ["pursuit", "suckerpunch", "crunch", "fireblast", "taunt", "poisonjab", "defog"],
		randomDoubleBattleMoves: ["protect", "suckerpunch", "crunch", "fireblast", "taunt", "poisonjab", "snarl"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	bronzorgen7: {
		tier: "Gen7 LC",
	},
	bronzonggen7: {
		randomBattleMoves: ["stealthrock", "earthquake", "toxic", "reflect", "lightscreen", "trickroom", "explosion", "gyroball"],
		randomDoubleBattleMoves: ["earthquake", "protect", "reflect", "lightscreen", "trickroom", "explosion", "gyroball"],
		tier: "Gen7 RU",
		doublesTier: "DUU",
	},
	chatotgen7: {
		randomBattleMoves: ["nastyplot", "boomburst", "heatwave", "hiddenpowerground", "substitute", "chatter", "uturn"],
		randomDoubleBattleMoves: ["nastyplot", "heatwave", "encore", "chatter", "uturn", "protect", "hypervoice", "boomburst"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	spiritombgen7: {
		randomBattleMoves: ["willowisp", "pursuit", "shadowsneak", "calmmind", "darkpulse", "rest", "sleeptalk", "psychic"],
		randomDoubleBattleMoves: ["shadowsneak", "icywind", "willowisp", "snarl", "protect", "foulplay"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	giblegen7: {
		tier: "Gen7 LC",
	},
	gabitegen7: {
		tier: "Gen7 NFE",
	},
	garchompgen7: {
		randomBattleMoves: ["outrage", "dragonclaw", "earthquake", "stoneedge", "fireblast", "swordsdance", "stealthrock", "firefang"],
		randomDoubleBattleMoves: ["dragonclaw", "earthquake", "stoneedge", "rockslide", "swordsdance", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	garchompmegagen7: {
		randomBattleMoves: ["outrage", "dracometeor", "earthquake", "stoneedge", "fireblast", "swordsdance"],
		randomDoubleBattleMoves: ["dragonclaw", "earthquake", "stoneedge", "rockslide", "swordsdance", "protect", "fireblast"],
		tier: "Gen7 (OU)",
		doublesTier: "(DOU)",
	},
	riolugen7: {
		tier: "Gen7 LC",
	},
	lucariogen7: {
		randomBattleMoves: ["swordsdance", "closecombat", "crunch", "extremespeed", "icepunch", "meteormash", "nastyplot", "aurasphere", "darkpulse", "vacuumwave", "flashcannon"],
		randomDoubleBattleMoves: ["closecombat", "extremespeed", "icepunch", "darkpulse", "meteormash", "protect"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	lucariomegagen7: {
		randomBattleMoves: ["swordsdance", "closecombat", "crunch", "icepunch", "bulletpunch", "meteormash", "nastyplot", "aurasphere", "darkpulse", "flashcannon"],
		randomDoubleBattleMoves: ["closecombat", "extremespeed", "icepunch", "meteormash", "darkpulse", "protect", "swordsdance"],
		tier: "Gen7 Uber",
		doublesTier: "(DUU)",
	},
	hippopotasgen7: {
		tier: "Gen7 LC",
	},
	hippowdongen7: {
		randomBattleMoves: ["earthquake", "slackoff", "whirlwind", "stealthrock", "toxic", "stoneedge"],
		randomDoubleBattleMoves: ["earthquake", "slackoff", "rockslide", "stealthrock", "protect", "stoneedge", "whirlwind"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	skorupigen7: {
		tier: "Gen7 LC",
	},
	drapiongen7: {
		randomBattleMoves: ["knockoff", "taunt", "toxicspikes", "poisonjab", "whirlwind", "swordsdance", "aquatail", "earthquake"],
		randomDoubleBattleMoves: ["snarl", "taunt", "protect", "aquatail", "swordsdance", "poisonjab", "knockoff"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	croagunkgen7: {
		tier: "Gen7 LC",
	},
	toxicroakgen7: {
		randomBattleMoves: ["swordsdance", "gunkshot", "drainpunch", "suckerpunch", "icepunch", "substitute"],
		randomDoubleBattleMoves: ["suckerpunch", "drainpunch", "swordsdance", "icepunch", "gunkshot", "fakeout", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	carnivinegen7: {
		randomBattleMoves: ["swordsdance", "powerwhip", "return", "sleeppowder", "substitute", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "powerwhip", "return", "sleeppowder", "knockoff", "ragepowder", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	finneongen7: {
		tier: "Gen7 LC",
	},
	lumineongen7: {
		randomBattleMoves: ["scald", "icebeam", "uturn", "toxic", "defog"],
		randomDoubleBattleMoves: ["uturn", "icebeam", "toxic", "tailwind", "scald", "protect", "defog"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	snovergen7: {
		tier: "Gen7 LC",
	},
	abomasnowgen7: {
		randomBattleMoves: ["woodhammer", "iceshard", "blizzard", "gigadrain", "leechseed", "substitute", "focuspunch", "earthquake"],
		randomDoubleBattleMoves: ["blizzard", "iceshard", "gigadrain", "protect", "woodhammer", "earthquake"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	abomasnowmegagen7: {
		randomBattleMoves: ["blizzard", "gigadrain", "woodhammer", "earthquake", "iceshard", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["blizzard", "iceshard", "gigadrain", "protect", "woodhammer", "earthquake"],
		tier: "Gen7 NU",
		doublesTier: "DUU",
	},
	rotomgen7: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "shadowball", "substitute", "painsplit", "hiddenpowerice", "trick", "willowisp"],
		randomDoubleBattleMoves: ["thunderbolt", "voltswitch", "shadowball", "hiddenpowerice", "trick", "willowisp", "electroweb", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	rotomheatgen7: {
		randomBattleMoves: ["overheat", "thunderbolt", "voltswitch", "hiddenpowerice", "painsplit", "willowisp"],
		randomDoubleBattleMoves: ["overheat", "thunderbolt", "voltswitch", "willowisp", "electroweb", "protect"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	rotomwashgen7: {
		randomBattleMoves: ["hydropump", "thunderbolt", "voltswitch", "painsplit", "defog", "willowisp", "trick"],
		randomDoubleBattleMoves: ["hydropump", "thunderbolt", "voltswitch", "willowisp", "trick", "electroweb", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DUU",
	},
	rotomfrostgen7: {
		randomBattleMoves: ["blizzard", "thunderbolt", "voltswitch", "painsplit", "willowisp", "trick"],
		randomDoubleBattleMoves: ["blizzard", "thunderbolt", "voltswitch", "willowisp", "trick", "electroweb", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	rotomfangen7: {
		randomBattleMoves: ["airslash", "thunderbolt", "voltswitch", "painsplit", "willowisp", "defog"],
		randomDoubleBattleMoves: ["airslash", "thunderbolt", "voltswitch", "willowisp", "electroweb", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	rotommowgen7: {
		randomBattleMoves: ["leafstorm", "thunderbolt", "voltswitch", "hiddenpowerfire", "hiddenpowerice", "trick"],
		randomDoubleBattleMoves: ["leafstorm", "thunderbolt", "voltswitch", "hiddenpowerfire", "willowisp", "trick", "electroweb", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	uxiegen7: {
		randomBattleMoves: ["stealthrock", "thunderwave", "psychic", "uturn", "healbell", "knockoff", "yawn"],
		randomDoubleBattleMoves: ["uturn", "psychic", "yawn", "stealthrock", "knockoff", "protect", "helpinghand", "thunderwave"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	mespritgen7: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "energyball", "signalbeam", "hiddenpowerfire", "icebeam", "healingwish", "stealthrock", "uturn"],
		randomDoubleBattleMoves: ["calmmind", "psychic", "thunderbolt", "icebeam", "uturn", "trick", "protect", "knockoff", "helpinghand"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	azelfgen7: {
		randomBattleMoves: ["nastyplot", "psyshock", "fireblast", "dazzlinggleam", "stealthrock", "knockoff", "taunt", "explosion"],
		randomDoubleBattleMoves: ["nastyplot", "psychic", "fireblast", "thunderbolt", "knockoff", "uturn", "taunt", "protect"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	dialgagen7: {
		randomBattleMoves: ["stealthrock", "toxic", "dracometeor", "fireblast", "flashcannon", "roar", "thunderbolt"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "protect", "thunderbolt", "flashcannon", "earthpower", "fireblast"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	palkiagen7: {
		randomBattleMoves: ["spacialrend", "dracometeor", "hydropump", "thunderwave", "dragontail", "fireblast"],
		randomDoubleBattleMoves: ["spacialrend", "dracometeor", "hydropump", "thunderbolt", "fireblast", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	heatrangen7: {
		randomBattleMoves: ["magmastorm", "lavaplume", "stealthrock", "earthpower", "flashcannon", "protect", "toxic", "roar"],
		randomDoubleBattleMoves: ["heatwave", "earthpower", "protect", "flashcannon", "willowisp"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	regigigasgen7: {
		randomBattleMoves: ["thunderwave", "confuseray", "substitute", "return", "knockoff", "drainpunch"],
		randomDoubleBattleMoves: ["thunderwave", "substitute", "return", "icywind", "knockoff", "wideguard"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	giratinagen7: {
		randomBattleMoves: ["rest", "sleeptalk", "dragontail", "roar", "willowisp", "shadowball", "dragonpulse"],
		randomDoubleBattleMoves: ["tailwind", "protect", "dragontail", "willowisp", "calmmind", "dragonpulse", "shadowball"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	giratinaorigingen7: {
		randomBattleMoves: ["dracometeor", "shadowsneak", "dragontail", "willowisp", "defog", "toxic", "shadowball", "earthquake"],
		randomDoubleBattleMoves: ["dracometeor", "shadowsneak", "tailwind", "willowisp", "dragonpulse", "shadowball", "protect"],
	},
	cresseliagen7: {
		randomBattleMoves: ["moonlight", "psychic", "icebeam", "thunderwave", "toxic", "substitute", "psyshock", "moonblast", "calmmind"],
		randomDoubleBattleMoves: ["psyshock", "icywind", "thunderwave", "trickroom", "moonblast", "moonlight", "allyswitch", "protect", "helpinghand"],
		tier: "Gen7 RU",
		doublesTier: "DOU",
	},
	phionegen7: {
		randomBattleMoves: ["scald", "knockoff", "uturn", "icebeam", "toxic", "healbell"],
		randomDoubleBattleMoves: ["scald", "uturn", "helpinghand", "icywind", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	manaphygen7: {
		randomBattleMoves: ["tailglow", "surf", "icebeam", "energyball", "psychic"],
		randomDoubleBattleMoves: ["tailglow", "surf", "icebeam", "energyball", "protect", "scald", "helpinghand"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	darkraigen7: {
		randomBattleMoves: ["hypnosis", "darkpulse", "focusblast", "nastyplot", "substitute", "sludgebomb"],
		randomDoubleBattleMoves: ["darkpulse", "focusblast", "nastyplot", "snarl", "sludgebomb", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUU",
	},
	shaymingen7: {
		randomBattleMoves: ["seedflare", "earthpower", "airslash", "psychic", "rest", "substitute", "leechseed"],
		randomDoubleBattleMoves: ["seedflare", "earthpower", "airslash", "rest", "substitute", "leechseed", "tailwind", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	shayminskygen7: {
		randomBattleMoves: ["seedflare", "airslash", "earthpower", "hiddenpowerice", "substitute", "leechseed"],
		randomDoubleBattleMoves: ["seedflare", "earthpower", "airslash", "rest", "tailwind", "protect", "hiddenpowerice"],
		tier: "Gen7 Uber",
		doublesTier: "DUU",
	},
	arceusgen7: {
		randomBattleMoves: ["swordsdance", "extremespeed", "shadowclaw", "earthquake", "recover"],
		randomDoubleBattleMoves: ["swordsdance", "extremespeed", "shadowclaw", "earthquake", "recover", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	arceusbuggen7: {
		randomBattleMoves: ["swordsdance", "xscissor", "stoneedge", "recover", "earthquake", "ironhead"],
		randomDoubleBattleMoves: ["swordsdance", "xscissor", "stoneedge", "recover", "earthquake", "ironhead", "protect"],
	},
	arceusdarkgen7: {
		randomBattleMoves: ["calmmind", "judgment", "recover", "fireblast", "toxic"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "focusblast", "snarl", "willowisp", "protect"],
	},
	arceusdragongen7: {
		randomBattleMoves: ["swordsdance", "outrage", "extremespeed", "earthquake", "recover", "judgment", "fireblast", "willowisp", "defog"],
		randomDoubleBattleMoves: ["swordsdance", "dragonclaw", "extremespeed", "earthquake", "recover", "protect"],
	},
	arceuselectricgen7: {
		randomBattleMoves: ["calmmind", "judgment", "recover", "icebeam", "earthpower"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "icebeam", "protect"],
	},
	arceusfairygen7: {
		randomBattleMoves: ["calmmind", "judgment", "recover", "willowisp", "defog", "earthpower", "toxic"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "willowisp", "protect", "earthpower", "thunderbolt", "defog"],
	},
	arceusfightinggen7: {
		randomBattleMoves: ["calmmind", "judgment", "stoneedge", "shadowball", "recover", "roar", "icebeam"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "icebeam", "shadowball", "recover", "willowisp", "protect"],
	},
	arceusfiregen7: {
		randomBattleMoves: ["calmmind", "fireblast", "roar", "thunderbolt", "icebeam", "recover"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "thunderbolt", "recover", "heatwave", "protect", "willowisp"],
	},
	arceusflyinggen7: {
		randomBattleMoves: ["calmmind", "judgment", "earthpower", "fireblast", "toxic", "recover"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "tailwind", "protect", "earthpower"],
	},
	arceusghostgen7: {
		randomBattleMoves: ["swordsdance", "shadowforce", "shadowclaw", "brickbreak", "extremespeed", "recover", "judgment", "toxic", "defog"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "focusblast", "recover", "swordsdance", "shadowforce", "brickbreak", "willowisp", "protect"],
	},
	arceusgrassgen7: {
		randomBattleMoves: ["judgment", "recover", "calmmind", "icebeam", "fireblast"],
		randomDoubleBattleMoves: ["calmmind", "icebeam", "judgment", "heatwave", "recover", "thunderwave", "protect"],
	},
	arceusgroundgen7: {
		randomBattleMoves: ["swordsdance", "earthquake", "stoneedge", "recover", "judgment", "icebeam", "toxic", "stealthrock"],
		randomDoubleBattleMoves: ["swordsdance", "earthquake", "stoneedge", "recover", "calmmind", "judgment", "icebeam", "rockslide", "protect"],
	},
	arceusicegen7: {
		randomBattleMoves: ["calmmind", "judgment", "thunderbolt", "fireblast", "recover"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "thunderbolt", "focusblast", "recover", "protect", "icywind"],
	},
	arceuspoisongen7: {
		randomBattleMoves: ["calmmind", "sludgebomb", "fireblast", "recover", "icebeam", "defog"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "sludgebomb", "heatwave", "recover", "willowisp", "protect", "earthpower"],
	},
	arceuspsychicgen7: {
		randomBattleMoves: ["judgment", "calmmind", "fireblast", "recover", "icebeam", "toxic"],
		randomDoubleBattleMoves: ["calmmind", "psyshock", "focusblast", "recover", "willowisp", "judgment", "protect"],
	},
	arceusrockgen7: {
		randomBattleMoves: ["swordsdance", "earthquake", "stoneedge", "recover", "judgment", "willowisp", "stealthrock"],
		randomDoubleBattleMoves: ["swordsdance", "stoneedge", "recover", "rockslide", "earthquake", "protect"],
	},
	arceussteelgen7: {
		randomBattleMoves: ["judgment", "recover", "willowisp", "defog", "roar", "swordsdance", "ironhead", "earthquake", "stoneedge"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "protect", "willowisp", "earthpower"],
	},
	arceuswatergen7: {
		randomBattleMoves: ["recover", "calmmind", "judgment", "icebeam", "toxic", "defog"],
		randomDoubleBattleMoves: ["recover", "calmmind", "judgment", "icebeam", "fireblast", "icywind", "surf", "protect"],
	},
	victinigen7: {
		randomBattleMoves: ["vcreate", "boltstrike", "uturn", "zenheadbutt", "grassknot", "focusblast", "blueflare"],
		randomDoubleBattleMoves: ["vcreate", "boltstrike", "uturn", "psychic", "blueflare", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	snivygen7: {
		tier: "Gen7 LC",
	},
	servinegen7: {
		tier: "Gen7 NFE",
	},
	serperiorgen7: {
		randomBattleMoves: ["leafstorm", "dragonpulse", "hiddenpowerfire", "substitute", "leechseed", "glare"],
		randomDoubleBattleMoves: ["leafstorm", "hiddenpowerfire", "taunt", "dragonpulse", "protect"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	tepiggen7: {
		tier: "Gen7 LC",
	},
	pignitegen7: {
		tier: "Gen7 NFE",
	},
	emboargen7: {
		randomBattleMoves: ["flareblitz", "superpower", "wildcharge", "headsmash", "fireblast", "grassknot", "suckerpunch"],
		randomDoubleBattleMoves: ["flareblitz", "superpower", "wildcharge", "headsmash", "protect", "heatwave", "rockslide"],
		tier: "Gen7 NUBL",
		doublesTier: "(DUU)",
	},
	oshawottgen7: {
		tier: "Gen7 LC",
	},
	dewottgen7: {
		tier: "Gen7 NFE",
	},
	samurottgen7: {
		randomBattleMoves: ["swordsdance", "liquidation", "aquajet", "megahorn", "sacredsword", "hydropump", "icebeam", "grassknot"],
		randomDoubleBattleMoves: ["hydropump", "aquajet", "icebeam", "scald", "hiddenpowergrass", "taunt", "helpinghand", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	patratgen7: {
		tier: "Gen7 LC",
	},
	watchoggen7: {
		randomBattleMoves: ["hypnosis", "substitute", "superfang", "swordsdance", "return", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "knockoff", "hypnosis", "return", "superfang", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	lillipupgen7: {
		tier: "Gen7 LC",
	},
	herdiergen7: {
		tier: "Gen7 NFE",
	},
	stoutlandgen7: {
		randomBattleMoves: ["return", "crunch", "wildcharge", "superpower", "icefang"],
		randomDoubleBattleMoves: ["return", "wildcharge", "superpower", "crunch", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	purrloingen7: {
		tier: "Gen7 LC",
	},
	liepardgen7: {
		randomBattleMoves: ["knockoff", "playrough", "uturn", "copycat", "encore", "thunderwave", "nastyplot", "darkpulse", "substitute"],
		randomDoubleBattleMoves: ["encore", "thunderwave", "knockoff", "playrough", "uturn", "suckerpunch", "fakeout", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	pansagegen7: {
		tier: "Gen7 LC",
	},
	simisagegen7: {
		randomBattleMoves: ["nastyplot", "gigadrain", "focusblast", "hiddenpowerice", "substitute", "leafstorm", "knockoff", "superpower"],
		randomDoubleBattleMoves: ["nastyplot", "leafstorm", "hiddenpowerfire", "hiddenpowerice", "gigadrain", "focusblast", "taunt", "helpinghand", "spikyshield"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	panseargen7: {
		tier: "Gen7 LC",
	},
	simiseargen7: {
		randomBattleMoves: ["substitute", "nastyplot", "fireblast", "focusblast", "grassknot", "hiddenpowerrock"],
		randomDoubleBattleMoves: ["nastyplot", "fireblast", "focusblast", "grassknot", "heatwave", "taunt", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	panpourgen7: {
		tier: "Gen7 LC",
	},
	simipourgen7: {
		randomBattleMoves: ["substitute", "nastyplot", "hydropump", "icebeam", "focusblast"],
		randomDoubleBattleMoves: ["nastyplot", "hydropump", "icebeam", "taunt", "helpinghand", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	munnagen7: {
		tier: "Gen7 LC",
	},
	musharnagen7: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "signalbeam", "moonlight", "healbell", "thunderwave"],
		randomDoubleBattleMoves: ["trickroom", "thunderwave", "moonlight", "psychic", "helpinghand", "hypnosis", "signalbeam", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	pidovegen7: {
		tier: "Gen7 LC",
	},
	tranquillgen7: {
		tier: "Gen7 NFE",
	},
	unfezantgen7: {
		randomBattleMoves: ["return", "pluck", "hypnosis", "tailwind", "uturn", "roost", "nightslash"],
		randomDoubleBattleMoves: ["pluck", "uturn", "return", "protect", "tailwind", "taunt", "roost", "nightslash"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	blitzlegen7: {
		tier: "Gen7 LC",
	},
	zebstrikagen7: {
		randomBattleMoves: ["voltswitch", "hiddenpowergrass", "overheat", "wildcharge", "thunderbolt"],
		randomDoubleBattleMoves: ["voltswitch", "hiddenpowergrass", "overheat", "wildcharge", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	roggenrolagen7: {
		tier: "Gen7 LC",
	},
	boldoregen7: {
		tier: "Gen7 NFE",
	},
	gigalithgen7: {
		randomBattleMoves: ["stealthrock", "rockblast", "earthquake", "explosion", "stoneedge", "superpower"],
		randomDoubleBattleMoves: ["stealthrock", "rockslide", "stompingtantrum", "stoneedge", "superpower", "wideguard", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	woobatgen7: {
		tier: "Gen7 LC",
	},
	swoobatgen7: {
		randomBattleMoves: ["substitute", "calmmind", "storedpower", "heatwave", "airslash", "roost"],
		randomDoubleBattleMoves: ["calmmind", "psychic", "airslash", "protect", "heatwave", "tailwind"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	drilburgen7: {
		tier: "Gen7 LC",
	},
	excadrillgen7: {
		randomBattleMoves: ["swordsdance", "earthquake", "ironhead", "rockslide", "rapidspin"],
		randomDoubleBattleMoves: ["swordsdance", "drillrun", "earthquake", "rockslide", "ironhead", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	audinogen7: {
		randomBattleMoves: ["wish", "protect", "healbell", "toxic", "thunderwave", "reflect", "lightscreen", "doubleedge"],
		randomDoubleBattleMoves: ["healpulse", "protect", "trickroom", "thunderwave", "helpinghand", "hypervoice"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	audinomegagen7: {
		randomBattleMoves: ["wish", "calmmind", "healbell", "dazzlinggleam", "protect", "fireblast"],
		randomDoubleBattleMoves: ["healpulse", "protect", "trickroom", "thunderwave", "hypervoice", "helpinghand", "dazzlinggleam"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	timburrgen7: {
		tier: "Gen7 LC",
	},
	gurdurrgen7: {
		tier: "Gen7 PU",
		doublesTier: "NFE",
	},
	conkeldurrgen7: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "knockoff", "machpunch"],
		randomDoubleBattleMoves: ["machpunch", "drainpunch", "facade", "knockoff", "protect"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	tympolegen7: {
		tier: "Gen7 LC",
	},
	palpitoadgen7: {
		tier: "Gen7 NFE",
	},
	seismitoadgen7: {
		randomBattleMoves: ["hydropump", "scald", "sludgewave", "earthquake", "knockoff", "stealthrock", "toxic", "raindance"],
		randomDoubleBattleMoves: ["hydropump", "muddywater", "sludgebomb", "earthquake", "raindance", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	throhgen7: {
		randomBattleMoves: ["bulkup", "circlethrow", "icepunch", "stormthrow", "rest", "sleeptalk", "knockoff"],
		randomDoubleBattleMoves: ["helpinghand", "circlethrow", "icepunch", "stormthrow", "knockoff", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	sawkgen7: {
		randomBattleMoves: ["closecombat", "earthquake", "icepunch", "poisonjab", "bulkup", "knockoff"],
		randomDoubleBattleMoves: ["closecombat", "knockoff", "icepunch", "rockslide", "protect"],
		tier: "Gen7 PUBL",
		doublesTier: "(DUU)",
	},
	sewaddlegen7: {
		tier: "Gen7 LC",
	},
	swadloongen7: {
		tier: "Gen7 NFE",
	},
	leavannygen7: {
		randomBattleMoves: ["stickyweb", "swordsdance", "leafblade", "xscissor", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "leafblade", "xscissor", "protect", "stickyweb"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	venipedegen7: {
		tier: "Gen7 LC",
	},
	whirlipedegen7: {
		tier: "Gen7 NFE",
	},
	scolipedegen7: {
		randomBattleMoves: ["protect", "spikes", "toxicspikes", "megahorn", "rockslide", "earthquake", "swordsdance", "poisonjab"],
		randomDoubleBattleMoves: ["protect", "megahorn", "rockslide", "poisonjab", "swordsdance", "aquatail", "superpower"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	cottoneegen7: {
		tier: "Gen7 LC",
	},
	whimsicottgen7: {
		randomBattleMoves: ["encore", "taunt", "leechseed", "uturn", "toxic", "stunspore", "memento", "tailwind", "moonblast", "defog"],
		randomDoubleBattleMoves: ["encore", "taunt", "substitute", "leechseed", "uturn", "helpinghand", "stunspore", "moonblast", "tailwind", "dazzlinggleam", "gigadrain", "protect", "defog"],
		tier: "Gen7 NU",
		doublesTier: "DOU",
	},
	petililgen7: {
		tier: "Gen7 LC",
	},
	lilligantgen7: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "petaldance", "gigadrain", "hiddenpowerfire", "hiddenpowerrock"],
		randomDoubleBattleMoves: ["quiverdance", "gigadrain", "sleeppowder", "hiddenpowerice", "hiddenpowerfire", "hiddenpowerrock", "petaldance", "helpinghand", "protect"],
		tier: "Gen7 PUBL",
		doublesTier: "(DUU)",
	},
	basculingen7: {
		randomBattleMoves: ["liquidation", "aquajet", "superpower", "crunch", "headsmash"],
		randomDoubleBattleMoves: ["liquidation", "aquajet", "superpower", "muddywater", "icebeam", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	basculinbluestripedgen7: {
		randomBattleMoves: ["liquidation", "aquajet", "superpower", "crunch", "headsmash"],
		randomDoubleBattleMoves: ["liquidation", "aquajet", "superpower", "muddywater", "icebeam", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	sandilegen7: {
		tier: "Gen7 LC",
	},
	krokorokgen7: {
		tier: "Gen7 NFE",
	},
	krookodilegen7: {
		randomBattleMoves: ["earthquake", "stoneedge", "pursuit", "knockoff", "stealthrock", "superpower"],
		randomDoubleBattleMoves: ["earthquake", "stoneedge", "protect", "knockoff", "superpower"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	darumakagen7: {
		tier: "Gen7 LC",
	},
	darmanitangen7: {
		randomBattleMoves: ["uturn", "flareblitz", "rockslide", "earthquake", "superpower"],
		randomDoubleBattleMoves: ["uturn", "flareblitz", "rockslide", "earthquake", "superpower", "protect"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	maractusgen7: {
		randomBattleMoves: ["spikes", "gigadrain", "leechseed", "hiddenpowerfire", "toxic", "suckerpunch", "spikyshield"],
		randomDoubleBattleMoves: ["energyball", "leechseed", "hiddenpowerfire", "helpinghand", "suckerpunch", "spikyshield"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	dwebblegen7: {
		tier: "Gen7 LC",
	},
	crustlegen7: {
		randomBattleMoves: ["stealthrock", "spikes", "shellsmash", "earthquake", "rockblast", "xscissor", "stoneedge"],
		randomDoubleBattleMoves: ["protect", "shellsmash", "earthquake", "rockslide", "xscissor", "stoneedge"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	scraggygen7: {
		tier: "Gen7 LC",
	},
	scraftygen7: {
		randomBattleMoves: ["dragondance", "icepunch", "highjumpkick", "drainpunch", "rest", "bulkup", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "drainpunch", "knockoff", "icepunch", "superfang", "protect"],
		tier: "Gen7 NU",
		doublesTier: "DOU",
	},
	sigilyphgen7: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "heatwave", "roost", "airslash", "icebeam"],
		randomDoubleBattleMoves: ["psyshock", "heatwave", "airslash", "tailwind", "calmmind", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	yamaskgen7: {
		tier: "Gen7 LC",
	},
	cofagrigusgen7: {
		randomBattleMoves: ["nastyplot", "trickroom", "shadowball", "hiddenpowerfighting", "willowisp", "haze", "painsplit", "toxicspikes"],
		randomDoubleBattleMoves: ["nastyplot", "trickroom", "shadowball", "hiddenpowerfighting", "willowisp", "protect"],
		tier: "Gen7 NUBL",
		doublesTier: "DUU",
	},
	tirtougagen7: {
		tier: "Gen7 LC",
	},
	carracostagen7: {
		randomBattleMoves: ["shellsmash", "aquajet", "liquidation", "stoneedge", "earthquake"],
		randomDoubleBattleMoves: ["shellsmash", "aquajet", "liquidation", "stoneedge", "earthquake", "protect", "wideguard", "rockslide"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	archengen7: {
		tier: "Gen7 LC",
	},
	archeopsgen7: {
		randomBattleMoves: ["headsmash", "acrobatics", "stoneedge", "earthquake", "aquatail", "uturn", "endeavor"],
		randomDoubleBattleMoves: ["stoneedge", "rockslide", "earthpower", "uturn", "acrobatics", "tailwind", "taunt", "protect"],
		tier: "Gen7 PUBL",
		doublesTier: "(DUU)",
	},
	trubbishgen7: {
		tier: "Gen7 LC",
	},
	garbodorgen7: {
		randomBattleMoves: ["spikes", "toxicspikes", "gunkshot", "haze", "painsplit", "toxic", "drainpunch"],
		randomDoubleBattleMoves: ["protect", "painsplit", "gunkshot", "drainpunch", "toxicspikes"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	zoruagen7: {
		tier: "Gen7 LC",
	},
	zoroarkgen7: {
		randomBattleMoves: ["suckerpunch", "darkpulse", "focusblast", "flamethrower", "uturn", "nastyplot", "knockoff", "trick", "sludgebomb"],
		randomDoubleBattleMoves: ["suckerpunch", "darkpulse", "focusblast", "flamethrower", "uturn", "nastyplot", "knockoff", "protect"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	minccinogen7: {
		tier: "Gen7 LC",
	},
	cinccinogen7: {
		randomBattleMoves: ["tailslap", "bulletseed", "rockblast", "knockoff", "uturn"],
		randomDoubleBattleMoves: ["tailslap", "uturn", "knockoff", "bulletseed", "rockblast", "protect"],
		tier: "Gen7 PUBL",
		doublesTier: "(DUU)",
	},
	gothitagen7: {
		tier: "Gen7 LC Uber",
	},
	gothoritagen7: {
		tier: "Gen7 NFE",
	},
	gothitellegen7: {
		randomBattleMoves: ["confide", "charm", "taunt", "rest"],
		randomDoubleBattleMoves: ["psychic", "thunderbolt", "shadowball", "trickroom", "taunt", "healpulse", "protect", "charm"],
		tier: "Gen7 (PU)",
		doublesTier: "DOU",
	},
	solosisgen7: {
		tier: "Gen7 LC",
	},
	duosiongen7: {
		tier: "Gen7 NFE",
	},
	reuniclusgen7: {
		randomBattleMoves: ["calmmind", "recover", "psychic", "focusblast", "shadowball", "trickroom", "psyshock"],
		randomDoubleBattleMoves: ["helpinghand", "psychic", "focusblast", "shadowball", "trickroom", "protect"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	ducklettgen7: {
		tier: "Gen7 LC",
	},
	swannagen7: {
		randomBattleMoves: ["bravebird", "roost", "hurricane", "icebeam", "raindance", "defog", "scald"],
		randomDoubleBattleMoves: ["bravebird", "hurricane", "icebeam", "tailwind", "scald", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	vanillitegen7: {
		tier: "Gen7 LC",
	},
	vanillishgen7: {
		tier: "Gen7 NFE",
	},
	vanilluxegen7: {
		randomBattleMoves: ["blizzard", "explosion", "hiddenpowerground", "flashcannon", "autotomize", "freezedry"],
		randomDoubleBattleMoves: ["blizzard", "taunt", "hiddenpowerground", "flashcannon", "autotomize", "protect", "freezedry"],
		tier: "Gen7 NUBL",
		doublesTier: "(DUU)",
	},
	deerlinggen7: {
		tier: "Gen7 LC",
	},
	sawsbuckgen7: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	emolgagen7: {
		randomBattleMoves: ["thunderbolt", "acrobatics", "encore", "uturn", "knockoff", "roost", "toxic"],
		randomDoubleBattleMoves: ["helpinghand", "tailwind", "encore", "thunderbolt", "airslash", "roost", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	karrablastgen7: {
		tier: "Gen7 LC",
	},
	escavaliergen7: {
		randomBattleMoves: ["megahorn", "pursuit", "ironhead", "knockoff", "swordsdance", "drillrun"],
		randomDoubleBattleMoves: ["megahorn", "protect", "ironhead", "knockoff", "swordsdance", "drillrun"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	foongusgen7: {
		tier: "Gen7 LC",
	},
	amoongussgen7: {
		randomBattleMoves: ["spore", "stunspore", "gigadrain", "clearsmog", "hiddenpowerfire", "synthesis", "sludgebomb", "foulplay"],
		randomDoubleBattleMoves: ["spore", "stunspore", "gigadrain", "ragepowder", "hiddenpowerfire", "sludgebomb", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DOU",
	},
	frillishgen7: {
		tier: "Gen7 LC",
	},
	jellicentgen7: {
		randomBattleMoves: ["scald", "willowisp", "recover", "toxic", "shadowball", "icebeam", "taunt"],
		randomDoubleBattleMoves: ["scald", "willowisp", "recover", "trickroom", "shadowball", "icywind", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	alomomolagen7: {
		randomBattleMoves: ["wish", "protect", "knockoff", "toxic", "scald"],
		randomDoubleBattleMoves: ["protect", "knockoff", "icywind", "scald", "helpinghand", "wideguard"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	joltikgen7: {
		tier: "Gen7 LC",
	},
	galvantulagen7: {
		randomBattleMoves: ["thunder", "hiddenpowerice", "gigadrain", "bugbuzz", "voltswitch", "stickyweb"],
		randomDoubleBattleMoves: ["thunder", "hiddenpowerice", "energyball", "bugbuzz", "voltswitch", "stickyweb", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	ferroseedgen7: {
		tier: "Gen7 PU",
		doublesTier: "LC",
	},
	ferrothorngen7: {
		randomBattleMoves: ["spikes", "stealthrock", "leechseed", "powerwhip", "protect", "knockoff", "gyroball"],
		randomDoubleBattleMoves: ["gyroball", "stealthrock", "leechseed", "powerwhip", "knockoff", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	klinkgen7: {
		tier: "Gen7 LC",
	},
	klanggen7: {
		tier: "Gen7 NFE",
	},
	klinklanggen7: {
		randomBattleMoves: ["shiftgear", "return", "geargrind", "wildcharge", "substitute"],
		randomDoubleBattleMoves: ["shiftgear", "return", "geargrind", "wildcharge", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	tynamogen7: {
		tier: "Gen7 LC",
	},
	eelektrikgen7: {
		tier: "Gen7 NFE",
	},
	eelektrossgen7: {
		randomBattleMoves: ["thunderbolt", "flamethrower", "uturn", "gigadrain", "knockoff", "superpower", "hiddenpowerice"],
		randomDoubleBattleMoves: ["thunderbolt", "flamethrower", "uturn", "voltswitch", "knockoff", "gigadrain", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	elgyemgen7: {
		tier: "Gen7 LC",
	},
	beheeyemgen7: {
		randomBattleMoves: ["nastyplot", "psychic", "psyshock", "thunderbolt", "hiddenpowerfighting", "trick", "trickroom", "signalbeam"],
		randomDoubleBattleMoves: ["psychic", "thunderbolt", "hiddenpowerfighting", "recover", "trick", "trickroom", "signalbeam", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	litwickgen7: {
		tier: "Gen7 LC",
	},
	lampentgen7: {
		tier: "Gen7 NFE",
	},
	chandeluregen7: {
		randomBattleMoves: ["calmmind", "shadowball", "energyball", "fireblast", "hiddenpowerground", "trick", "substitute", "painsplit"],
		randomDoubleBattleMoves: ["shadowball", "energyball", "overheat", "heatwave", "trick", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	axewgen7: {
		tier: "Gen7 LC",
	},
	fraxuregen7: {
		tier: "Gen7 NFE",
	},
	haxorusgen7: {
		randomBattleMoves: ["dragondance", "swordsdance", "outrage", "earthquake", "poisonjab", "taunt"],
		randomDoubleBattleMoves: ["dragondance", "swordsdance", "protect", "dragonclaw", "earthquake", "poisonjab", "taunt"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	cubchoogen7: {
		tier: "Gen7 LC",
	},
	bearticgen7: {
		randomBattleMoves: ["iciclecrash", "superpower", "nightslash", "stoneedge", "swordsdance", "aquajet"],
		randomDoubleBattleMoves: ["iciclecrash", "superpower", "stoneedge", "swordsdance", "aquajet", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	cryogonalgen7: {
		randomBattleMoves: ["icebeam", "recover", "toxic", "rapidspin", "haze", "freezedry", "hiddenpowerground"],
		randomDoubleBattleMoves: ["icebeam", "recover", "icywind", "protect", "freezedry", "hiddenpowerground"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	shelmetgen7: {
		tier: "Gen7 LC",
	},
	accelgorgen7: {
		randomBattleMoves: ["spikes", "yawn", "bugbuzz", "focusblast", "energyball", "hiddenpowerrock", "encore", "toxicspikes"],
		randomDoubleBattleMoves: ["protect", "yawn", "bugbuzz", "focusblast", "energyball", "hiddenpowerrock", "encore", "sludgebomb"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	stunfiskgen7: {
		randomBattleMoves: ["discharge", "earthpower", "scald", "toxic", "rest", "sleeptalk", "stealthrock"],
		randomDoubleBattleMoves: ["discharge", "earthpower", "scald", "electroweb", "protect", "stealthrock"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	mienfoogen7: {
		tier: "Gen7 LC",
	},
	mienshaogen7: {
		randomBattleMoves: ["uturn", "fakeout", "highjumpkick", "stoneedge", "poisonjab", "swordsdance", "knockoff"],
		randomDoubleBattleMoves: ["uturn", "fakeout", "highjumpkick", "stoneedge", "drainpunch", "swordsdance", "knockoff", "feint", "protect"],
		tier: "Gen7 RUBL",
		doublesTier: "DUU",
	},
	druddigongen7: {
		randomBattleMoves: ["outrage", "earthquake", "suckerpunch", "dragontail", "taunt", "glare", "stealthrock", "gunkshot", "firepunch"],
		randomDoubleBattleMoves: ["superpower", "earthquake", "suckerpunch", "dragonclaw", "glare", "protect", "firepunch", "thunderpunch"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	golettgen7: {
		tier: "Gen7 LC",
	},
	golurkgen7: {
		randomBattleMoves: ["earthquake", "shadowpunch", "dynamicpunch", "icepunch", "stealthrock", "rockpolish"],
		randomDoubleBattleMoves: ["earthquake", "shadowpunch", "dynamicpunch", "icepunch", "stoneedge", "protect", "rockpolish"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	pawniardgen7: {
		tier: "Gen7 LC",
	},
	bisharpgen7: {
		randomBattleMoves: ["swordsdance", "knockoff", "ironhead", "suckerpunch", "lowkick"],
		randomDoubleBattleMoves: ["swordsdance", "suckerpunch", "ironhead", "knockoff", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	bouffalantgen7: {
		randomBattleMoves: ["headcharge", "earthquake", "stoneedge", "megahorn", "swordsdance", "superpower"],
		randomDoubleBattleMoves: ["headcharge", "stompingtantrum", "stoneedge", "megahorn", "swordsdance", "superpower", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	ruffletgen7: {
		tier: "Gen7 LC",
	},
	braviarygen7: {
		randomBattleMoves: ["bravebird", "superpower", "return", "uturn", "substitute", "bulkup", "roost"],
		randomDoubleBattleMoves: ["bravebird", "superpower", "return", "uturn", "tailwind", "skydrop", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	vullabygen7: {
		tier: "Gen7 LC",
	},
	mandibuzzgen7: {
		randomBattleMoves: ["foulplay", "bravebird", "roost", "taunt", "toxic", "uturn", "defog"],
		randomDoubleBattleMoves: ["knockoff", "roost", "taunt", "tailwind", "snarl", "uturn", "bravebird", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	heatmorgen7: {
		randomBattleMoves: ["fireblast", "suckerpunch", "focusblast", "gigadrain", "knockoff"],
		randomDoubleBattleMoves: ["firelash", "suckerpunch", "superpower", "gigadrain", "incinerate", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	durantgen7: {
		randomBattleMoves: ["honeclaws", "ironhead", "xscissor", "rockslide", "superpower"],
		randomDoubleBattleMoves: ["honeclaws", "ironhead", "xscissor", "rockslide", "protect", "superpower"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	deinogen7: {
		tier: "Gen7 LC",
	},
	zweilousgen7: {
		tier: "Gen7 NFE",
	},
	hydreigongen7: {
		randomBattleMoves: ["uturn", "dracometeor", "dragonpulse", "earthpower", "fireblast", "darkpulse", "roost", "flashcannon", "superpower"],
		randomDoubleBattleMoves: ["uturn", "dracometeor", "fireblast", "darkpulse", "flashcannon", "tailwind", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	larvestagen7: {
		tier: "Gen7 LC",
	},
	volcaronagen7: {
		randomBattleMoves: ["quiverdance", "fierydance", "fireblast", "bugbuzz", "roost", "gigadrain", "hiddenpowerice", "hiddenpowerground"],
		randomDoubleBattleMoves: ["quiverdance", "fierydance", "bugbuzz", "gigadrain", "heatwave", "tailwind", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	cobaliongen7: {
		randomBattleMoves: ["closecombat", "ironhead", "swordsdance", "substitute", "stoneedge", "voltswitch", "hiddenpowerice", "taunt", "stealthrock"],
		randomDoubleBattleMoves: ["closecombat", "ironhead", "swordsdance", "stoneedge", "thunderwave", "protect"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	terrakiongen7: {
		randomBattleMoves: ["swordsdance", "closecombat", "stoneedge", "earthquake", "stealthrock", "quickattack"],
		randomDoubleBattleMoves: ["stoneedge", "closecombat", "rockslide", "stompingtantrum", "taunt", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DOU",
	},
	viriziongen7: {
		randomBattleMoves: ["swordsdance", "closecombat", "leafblade", "stoneedge", "calmmind", "focusblast", "gigadrain", "hiddenpowerice", "substitute"],
		randomDoubleBattleMoves: ["taunt", "closecombat", "stoneedge", "leafblade", "swordsdance", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	tornadusgen7: {
		randomBattleMoves: ["hurricane", "heatwave", "superpower", "grassknot", "uturn", "defog", "tailwind"],
		randomDoubleBattleMoves: ["hurricane", "uturn", "superpower", "taunt", "heatwave", "tailwind", "protect", "skydrop"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	tornadustheriangen7: {
		randomBattleMoves: ["hurricane", "heatwave", "knockoff", "superpower", "uturn", "taunt"],
		randomDoubleBattleMoves: ["hurricane", "uturn", "heatwave", "skydrop", "tailwind", "taunt", "protect"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	thundurusgen7: {
		randomBattleMoves: ["thunderwave", "nastyplot", "thunderbolt", "hiddenpowerice", "hiddenpowerflying", "focusblast", "substitute", "knockoff", "taunt"],
		randomDoubleBattleMoves: ["thunderwave", "nastyplot", "thunderbolt", "hiddenpowerice", "hiddenpowerflying", "focusblast", "knockoff", "taunt", "protect"],
		tier: "Gen7 UUBL",
		doublesTier: "DUU",
	},
	thundurustheriangen7: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "hiddenpowerflying", "hiddenpowerice", "focusblast", "voltswitch"],
		randomDoubleBattleMoves: ["nastyplot", "thunderbolt", "hiddenpowerflying", "hiddenpowerice", "focusblast", "voltswitch", "protect"],
		tier: "Gen7 UUBL",
		doublesTier: "DUU",
	},
	reshiramgen7: {
		randomBattleMoves: ["blueflare", "dracometeor", "dragonpulse", "toxic", "flamecharge", "stoneedge", "roost"],
		randomDoubleBattleMoves: ["blueflare", "dracometeor", "dragonpulse", "heatwave", "flamecharge", "roost", "protect", "tailwind"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	zekromgen7: {
		randomBattleMoves: ["boltstrike", "outrage", "dragonclaw", "dracometeor", "voltswitch", "honeclaws", "substitute", "roost"],
		randomDoubleBattleMoves: ["protect", "dragonclaw", "boltstrike", "honeclaws", "dracometeor", "roost", "tailwind"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	landorusgen7: {
		randomBattleMoves: ["calmmind", "rockpolish", "earthpower", "focusblast", "psychic", "sludgewave", "stealthrock", "knockoff", "rockslide"],
		randomDoubleBattleMoves: ["earthpower", "focusblast", "hiddenpowerice", "psychic", "sludgebomb", "rockslide", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUU",
	},
	landorustheriangen7: {
		randomBattleMoves: ["swordsdance", "rockpolish", "earthquake", "stoneedge", "uturn", "superpower", "stealthrock", "fly"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "stoneedge", "uturn", "superpower", "knockoff", "swordsdance", "fly", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	kyuremgen7: {
		randomBattleMoves: ["dracometeor", "icebeam", "earthpower", "outrage", "substitute", "focusblast", "roost"],
		randomDoubleBattleMoves: ["icebeam", "dracometeor", "dragonpulse", "glaciate", "earthpower", "roost", "protect"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	kyuremblackgen7: {
		randomBattleMoves: ["outrage", "fusionbolt", "icebeam", "roost", "substitute", "earthpower", "dragonclaw"],
		randomDoubleBattleMoves: ["protect", "fusionbolt", "icebeam", "roost", "earthpower", "dragonclaw"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	kyuremwhitegen7: {
		randomBattleMoves: ["dracometeor", "icebeam", "fusionflare", "earthpower", "focusblast", "dragonpulse", "substitute", "roost", "toxic"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "icebeam", "fusionflare", "earthpower", "roost", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	keldeogen7: {
		randomBattleMoves: ["hydropump", "secretsword", "calmmind", "hiddenpowerflying", "hiddenpowerelectric", "substitute", "scald", "icywind"],
		randomDoubleBattleMoves: ["hydropump", "secretsword", "protect", "hiddenpowerflying", "hiddenpowerelectric", "icywind", "calmmind", "taunt"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	keldeoresolutegen7: {
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	meloettagen7: {
		randomBattleMoves: ["uturn", "calmmind", "psyshock", "hypervoice", "shadowball", "focusblast"],
		randomDoubleBattleMoves: ["calmmind", "psyshock", "hypervoice", "shadowball", "focusblast", "protect"],
		tier: "Gen7 RUBL",
		doublesTier: "(DUU)",
	},
	meloettapirouettegen7: {
		randomBattleMoves: ["relicsong", "closecombat", "knockoff", "return"],
		randomDoubleBattleMoves: ["relicsong", "closecombat", "knockoff", "return", "protect"],
	},
	genesectgen7: {
		randomBattleMoves: ["technoblast", "uturn", "icebeam", "flamethrower", "thunderbolt", "ironhead", "shiftgear", "extremespeed", "blazekick"],
		randomDoubleBattleMoves: ["uturn", "bugbuzz", "icebeam", "flamethrower", "thunderbolt", "ironhead", "extremespeed", "protect", "technoblast"],
		tier: "Gen7 Uber",
		doublesTier: "DOU",
	},
	genesectburngen7: {
		tier: "Gen7 Uber",
		doublesTier: "(DOU)",
	},
	genesectchillgen7: {
		tier: "Gen7 Uber",
		doublesTier: "(DOU)",
	},
	genesectdousegen7: {
		tier: "Gen7 Uber",
		doublesTier: "(DOU)",
	},
	genesectshockgen7: {
		tier: "Gen7 Uber",
		doublesTier: "(DOU)",
	},
	chespingen7: {
		tier: "Gen7 LC",
	},
	quilladingen7: {
		tier: "Gen7 NFE",
	},
	chesnaughtgen7: {
		randomBattleMoves: ["leechseed", "synthesis", "spikes", "drainpunch", "spikyshield", "woodhammer"],
		randomDoubleBattleMoves: ["leechseed", "hammerarm", "spikyshield", "stoneedge", "woodhammer", "rockslide"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	fennekingen7: {
		tier: "Gen7 LC",
	},
	braixengen7: {
		tier: "Gen7 NFE",
	},
	delphoxgen7: {
		randomBattleMoves: ["calmmind", "fireblast", "psyshock", "grassknot", "switcheroo", "shadowball"],
		randomDoubleBattleMoves: ["calmmind", "fireblast", "psyshock", "grassknot", "switcheroo", "heatwave", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	froakiegen7: {
		tier: "Gen7 LC",
	},
	frogadiergen7: {
		tier: "Gen7 NFE",
	},
	greninjagen7: {
		randomBattleMoves: ["hydropump", "icebeam", "gunkshot", "uturn", "spikes", "toxicspikes", "taunt"],
		randomDoubleBattleMoves: ["hydropump", "uturn", "gunkshot", "icebeam", "matblock", "taunt", "darkpulse", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DUU",
	},
	greninjaashgen7: {
		randomBattleMoves: ["hydropump", "icebeam", "darkpulse", "watershuriken", "uturn"],
		tier: "Gen7 OU",
		doublesTier: "DUU",
	},
	bunnelbygen7: {
		tier: "Gen7 LC",
	},
	diggersbygen7: {
		randomBattleMoves: ["earthquake", "return", "wildcharge", "uturn", "swordsdance", "quickattack", "knockoff", "agility"],
		randomDoubleBattleMoves: ["earthquake", "uturn", "return", "knockoff", "protect", "quickattack"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	fletchlinggen7: {
		tier: "Gen7 LC",
	},
	fletchindergen7: {
		tier: "Gen7 NFE",
	},
	talonflamegen7: {
		randomBattleMoves: ["bravebird", "flareblitz", "roost", "swordsdance", "uturn", "willowisp", "overheat"],
		randomDoubleBattleMoves: ["bravebird", "flareblitz", "roost", "swordsdance", "uturn", "willowisp", "tailwind", "taunt", "protect"],
		tier: "Gen7 RUBL",
		doublesTier: "DUU",
	},
	scatterbuggen7: {
		tier: "Gen7 LC",
	},
	spewpagen7: {
		tier: "Gen7 NFE",
	},
	vivillongen7: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "hurricane", "energyball", "substitute"],
		randomDoubleBattleMoves: ["sleeppowder", "quiverdance", "hurricane", "bugbuzz", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	vivillonfancygen7: {
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	vivillonpokeballgen7: {
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	litleogen7: {
		tier: "Gen7 LC",
	},
	pyroargen7: {
		randomBattleMoves: ["sunnyday", "fireblast", "hypervoice", "solarbeam", "willowisp", "darkpulse"],
		randomDoubleBattleMoves: ["hypervoice", "fireblast", "willowisp", "protect", "sunnyday", "solarbeam"],
		tier: "Gen7 PUBL",
		doublesTier: "(DUU)",
	},
	flabebegen7: {
		tier: "Gen7 LC",
	},
	floettegen7: {
		tier: "Gen7 NFE",
	},
	floetteeternalgen7: {
		randomBattleMoves: ["lightofruin", "psychic", "hiddenpowerfire", "hiddenpowerground", "moonblast"],
		randomDoubleBattleMoves: ["lightofruin", "dazzlinggleam", "psychic", "protect", "hiddenpowerfire", "calmmind"],
		isNonstandard: "Unobtainable",
		tier: "Gen7 Illegal",
	},
	florgesgen7: {
		randomBattleMoves: ["calmmind", "moonblast", "synthesis", "aromatherapy", "wish", "toxic", "protect", "defog"],
		randomDoubleBattleMoves: ["moonblast", "dazzlinggleam", "psychic", "protect", "calmmind", "defog", "helpinghand"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	skiddogen7: {
		tier: "Gen7 LC",
	},
	gogoatgen7: {
		randomBattleMoves: ["bulkup", "hornleech", "earthquake", "rockslide", "substitute", "leechseed", "milkdrink"],
		randomDoubleBattleMoves: ["hornleech", "earthquake", "brickbreak", "bulkup", "leechseed", "milkdrink", "rockslide", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	panchamgen7: {
		tier: "Gen7 LC",
	},
	pangorogen7: {
		randomBattleMoves: ["knockoff", "superpower", "gunkshot", "icepunch", "partingshot", "drainpunch"],
		randomDoubleBattleMoves: ["partingshot", "hammerarm", "knockoff", "icepunch", "gunkshot", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	furfrougen7: {
		randomBattleMoves: ["return", "cottonguard", "thunderwave", "substitute", "toxic", "suckerpunch", "uturn", "rest"],
		randomDoubleBattleMoves: ["return", "cottonguard", "uturn", "thunderwave", "snarl", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	espurrgen7: {
		tier: "Gen7 LC",
	},
	meowsticgen7: {
		randomBattleMoves: ["toxic", "yawn", "thunderwave", "psychic", "reflect", "lightscreen", "healbell"],
		randomDoubleBattleMoves: ["fakeout", "thunderwave", "psychic", "reflect", "lightscreen", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	meowsticfgen7: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "shadowball", "energyball", "thunderbolt"],
		randomDoubleBattleMoves: ["psychic", "darkpulse", "fakeout", "energyball", "thunderbolt", "nastyplot", "protect", "helpinghand"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	honedgegen7: {
		tier: "Gen7 LC",
	},
	doubladegen7: {
		randomBattleMoves: ["swordsdance", "shadowclaw", "shadowsneak", "ironhead", "sacredsword"],
		randomDoubleBattleMoves: ["swordsdance", "shadowclaw", "shadowsneak", "ironhead", "sacredsword", "protect"],
		tier: "Gen7 UU",
		doublesTier: "NFE",
	},
	aegislashgen7: {
		randomBattleMoves: ["flashcannon", "hiddenpowerice", "kingsshield", "shadowball", "shadowsneak"],
		randomDoubleBattleMoves: ["flashcannon", "hiddenpowerice", "kingsshield", "shadowball", "shadowsneak"],
		tier: "Gen7 Uber",
		doublesTier: "DOU",
	},
	aegislashbladegen7: {
		randomBattleMoves: ["ironhead", "sacredsword", "shadowclaw", "shadowsneak", "swordsdance"],
		randomDoubleBattleMoves: ["ironhead", "kingsshield", "sacredsword", "shadowclaw", "shadowsneak", "swordsdance"],
	},
	spritzeegen7: {
		tier: "Gen7 LC",
	},
	aromatissegen7: {
		randomBattleMoves: ["wish", "protect", "moonblast", "aromatherapy", "reflect", "lightscreen"],
		randomDoubleBattleMoves: ["moonblast", "trickroom", "thunderbolt", "protect", "healpulse"],
		tier: "Gen7 PUBL",
		doublesTier: "(DUU)",
	},
	swirlixgen7: {
		tier: "Gen7 LC Uber",
	},
	slurpuffgen7: {
		randomBattleMoves: ["bellydrum", "playrough", "return", "drainpunch"],
		randomDoubleBattleMoves: ["bellydrum", "playrough", "return", "drainpunch", "protect"],
		tier: "Gen7 NUBL",
		doublesTier: "(DUU)",
	},
	inkaygen7: {
		tier: "Gen7 LC",
	},
	malamargen7: {
		randomBattleMoves: ["superpower", "knockoff", "psychocut", "rest", "sleeptalk", "happyhour"],
		randomDoubleBattleMoves: ["superpower", "psychocut", "rockslide", "trickroom", "knockoff", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	binaclegen7: {
		tier: "Gen7 LC",
	},
	barbaraclegen7: {
		randomBattleMoves: ["shellsmash", "stoneedge", "liquidation", "earthquake", "crosschop", "stealthrock"],
		randomDoubleBattleMoves: ["shellsmash", "liquidation", "crosschop", "rockslide", "protect"],
		tier: "Gen7 NUBL",
		doublesTier: "(DUU)",
	},
	skrelpgen7: {
		tier: "Gen7 LC",
	},
	dragalgegen7: {
		randomBattleMoves: ["dracometeor", "sludgewave", "focusblast", "scald", "hiddenpowerfire", "toxicspikes", "dragonpulse"],
		randomDoubleBattleMoves: ["dracometeor", "sludgebomb", "focusblast", "scald", "hiddenpowerfire", "protect", "dragonpulse"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	claunchergen7: {
		tier: "Gen7 LC",
	},
	clawitzergen7: {
		randomBattleMoves: ["scald", "waterpulse", "darkpulse", "aurasphere", "icebeam", "uturn"],
		randomDoubleBattleMoves: ["waterpulse", "icebeam", "uturn", "darkpulse", "aurasphere", "muddywater", "helpinghand", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	helioptilegen7: {
		tier: "Gen7 LC",
	},
	helioliskgen7: {
		randomBattleMoves: ["raindance", "hypervoice", "surf", "darkpulse", "hiddenpowerice", "voltswitch", "thunderbolt"],
		randomDoubleBattleMoves: ["grassknot", "voltswitch", "darkpulse", "thunderbolt", "hypervoice", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	tyruntgen7: {
		tier: "Gen7 LC",
	},
	tyrantrumgen7: {
		randomBattleMoves: ["stealthrock", "dragondance", "dragonclaw", "earthquake", "superpower", "outrage", "headsmash"],
		randomDoubleBattleMoves: ["rockslide", "dragondance", "headsmash", "dragonclaw", "earthquake", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	amauragen7: {
		tier: "Gen7 LC",
	},
	aurorusgen7: {
		randomBattleMoves: ["ancientpower", "blizzard", "thunderwave", "earthpower", "freezedry", "hypervoice", "stealthrock"],
		randomDoubleBattleMoves: ["hypervoice", "ancientpower", "thunderwave", "earthpower", "freezedry", "icywind", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	sylveongen7: {
		randomBattleMoves: ["hypervoice", "calmmind", "psyshock", "hiddenpowerfire", "wish", "protect"],
		randomDoubleBattleMoves: ["hypervoice", "protect", "psyshock", "helpinghand", "shadowball", "hiddenpowerground"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	hawluchagen7: {
		randomBattleMoves: ["substitute", "swordsdance", "highjumpkick", "acrobatics", "roost", "stoneedge"],
		randomDoubleBattleMoves: ["swordsdance", "highjumpkick", "acrobatics", "encore", "protect"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	dedennegen7: {
		randomBattleMoves: ["substitute", "recycle", "thunderbolt", "nuzzle", "grassknot", "hiddenpowerice", "toxic"],
		randomDoubleBattleMoves: ["eerieimpulse", "helpinghand", "nuzzle", "recycle", "superfang", "thunderbolt"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	carbinkgen7: {
		randomBattleMoves: ["stealthrock", "lightscreen", "reflect", "explosion", "powergem", "moonblast"],
		randomDoubleBattleMoves: ["trickroom", "lightscreen", "reflect", "explosion", "stealthrock", "moonblast", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	goomygen7: {
		tier: "Gen7 LC",
	},
	sliggoogen7: {
		tier: "Gen7 NFE",
	},
	goodragen7: {
		randomBattleMoves: ["dracometeor", "dragonpulse", "fireblast", "sludgebomb", "thunderbolt", "earthquake", "dragontail"],
		randomDoubleBattleMoves: ["thunderbolt", "dragonpulse", "fireblast", "muddywater", "dracometeor", "powerwhip", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	klefkigen7: {
		randomBattleMoves: ["reflect", "lightscreen", "spikes", "magnetrise", "playrough", "thunderwave", "foulplay", "toxic"],
		randomDoubleBattleMoves: ["reflect", "lightscreen", "playrough", "thunderwave", "protect", "dazzlinggleam", "foulplay"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	phantumpgen7: {
		tier: "Gen7 LC",
	},
	trevenantgen7: {
		randomBattleMoves: ["hornleech", "shadowclaw", "earthquake", "rockslide", "woodhammer", "trickroom"],
		randomDoubleBattleMoves: ["hornleech", "woodhammer", "leechseed", "shadowclaw", "willowisp", "trickroom", "rockslide", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	pumpkaboogen7: {
		tier: "Gen7 LC",
	},
	pumpkaboosmallgen7: {
		tier: "Gen7 LC",
	},
	pumpkaboolargegen7: {
		tier: "Gen7 LC",
	},
	pumpkaboosupergen7: {
		tier: "Gen7 LC",
	},
	gourgeistgen7: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "seedbomb", "leechseed", "phantomforce", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	gourgeistsmallgen7: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "seedbomb", "leechseed", "phantomforce", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	gourgeistlargegen7: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "seedbomb", "leechseed", "phantomforce", "protect", "trickroom"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	gourgeistsupergen7: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "seedbomb", "leechseed", "phantomforce", "protect", "trickroom"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	bergmitegen7: {
		tier: "Gen7 LC",
	},
	avalugggen7: {
		randomBattleMoves: ["avalanche", "recover", "toxic", "rapidspin", "roar", "earthquake"],
		randomDoubleBattleMoves: ["avalanche", "recover", "earthquake", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	noibatgen7: {
		tier: "Gen7 LC",
	},
	noiverngen7: {
		randomBattleMoves: ["dracometeor", "hurricane", "flamethrower", "boomburst", "switcheroo", "uturn", "roost", "taunt"],
		randomDoubleBattleMoves: ["hurricane", "dracometeor", "flamethrower", "uturn", "switcheroo", "tailwind", "taunt", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	xerneasgen7: {
		randomBattleMoves: ["geomancy", "moonblast", "focusblast", "thunderbolt", "hiddenpowerfire", "psyshock", "rockslide", "closecombat"],
		randomDoubleBattleMoves: ["geomancy", "dazzlinggleam", "focusblast", "thunderbolt", "hiddenpowerfire", "psyshock", "rockslide", "closecombat", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	yveltalgen7: {
		randomBattleMoves: ["darkpulse", "oblivionwing", "focusblast", "uturn", "foulplay", "suckerpunch", "toxic", "taunt", "roost"],
		randomDoubleBattleMoves: ["darkpulse", "oblivionwing", "taunt", "heatwave", "roost", "suckerpunch", "snarl", "skydrop", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	zygardegen7: {
		randomBattleMoves: ["dragondance", "thousandarrows", "outrage", "extremespeed", "irontail"],
		randomDoubleBattleMoves: ["dragondance", "thousandarrows", "extremespeed", "rockslide", "coil", "stoneedge", "glare", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DOU",
	},
	zygarde10gen7: {
		randomBattleMoves: ["dragondance", "thousandarrows", "outrage", "extremespeed", "irontail", "substitute"],
		randomDoubleBattleMoves: ["dragondance", "thousandarrows", "extremespeed", "irontail", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	zygardecompletegen7: {
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	dianciegen7: {
		randomBattleMoves: ["reflect", "lightscreen", "stealthrock", "diamondstorm", "moonblast", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["diamondstorm", "moonblast", "calmmind", "earthpower", "dazzlinggleam", "protect"],
		tier: "Gen7 RU",
		doublesTier: "DOU",
	},
	dianciemegagen7: {
		randomBattleMoves: ["calmmind", "moonblast", "earthpower", "hiddenpowerfire", "diamondstorm"],
		randomDoubleBattleMoves: ["diamondstorm", "moonblast", "calmmind", "psyshock", "earthpower", "hiddenpowerfire", "dazzlinggleam", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	hoopagen7: {
		randomBattleMoves: ["nastyplot", "psyshock", "shadowball", "focusblast", "trick"],
		randomDoubleBattleMoves: ["hyperspacehole", "shadowball", "focusblast", "protect", "trickroom"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	hoopaunboundgen7: {
		randomBattleMoves: ["nastyplot", "substitute", "psychic", "darkpulse", "focusblast", "hyperspacefury", "zenheadbutt", "icepunch", "drainpunch", "gunkshot", "trick"],
		randomDoubleBattleMoves: ["psychic", "darkpulse", "focusblast", "protect", "hyperspacefury", "zenheadbutt", "icepunch", "drainpunch", "gunkshot"],
		tier: "Gen7 UUBL",
		doublesTier: "DOU",
	},
	volcaniongen7: {
		randomBattleMoves: ["substitute", "steameruption", "fireblast", "sludgebomb", "earthpower", "superpower"],
		randomDoubleBattleMoves: ["steameruption", "heatwave", "sludgebomb", "earthpower", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DOU",
	},
	rowletgen7: {
		tier: "Gen7 LC",
	},
	dartrixgen7: {
		tier: "Gen7 NFE",
	},
	decidueyegen7: {
		randomBattleMoves: ["spiritshackle", "uturn", "leafblade", "roost", "swordsdance", "suckerpunch"],
		randomDoubleBattleMoves: ["spiritshackle", "leafblade", "bravebird", "protect", "suckerpunch"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	littengen7: {
		tier: "Gen7 LC",
	},
	torracatgen7: {
		tier: "Gen7 NFE",
	},
	incineroargen7: {
		randomBattleMoves: ["fakeout", "darkestlariat", "flareblitz", "uturn", "earthquake", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "knockoff", "flareblitz", "willowisp", "taunt", "snarl", "uturn"],
		tier: "Gen7 NU",
		doublesTier: "DOU",
	},
	poppliogen7: {
		tier: "Gen7 LC",
	},
	brionnegen7: {
		tier: "Gen7 NFE",
	},
	primarinagen7: {
		randomBattleMoves: ["hydropump", "moonblast", "scald", "psychic", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["hypervoice", "moonblast", "protect", "psychic", "icebeam"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	pikipekgen7: {
		tier: "Gen7 LC",
	},
	trumbeakgen7: {
		tier: "Gen7 NFE",
	},
	toucannongen7: {
		randomBattleMoves: ["boomburst", "beakblast", "roost", "brickbreak", "bulletseed"],
		randomDoubleBattleMoves: ["bulletseed", "rockblast", "beakblast", "tailwind", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	yungoosgen7: {
		tier: "Gen7 LC",
	},
	gumshoosgen7: {
		randomBattleMoves: ["uturn", "return", "crunch", "earthquake", "firepunch"],
		randomDoubleBattleMoves: ["uturn", "return", "superfang", "protect", "crunch"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	gumshoostotemgen7: {
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	grubbingen7: {
		tier: "Gen7 LC",
	},
	charjabuggen7: {
		tier: "Gen7 NFE",
	},
	vikavoltgen7: {
		randomBattleMoves: ["agility", "bugbuzz", "thunderbolt", "voltswitch", "energyball", "hiddenpowerice"],
		randomDoubleBattleMoves: ["thunderbolt", "bugbuzz", "stringshot", "protect", "voltswitch", "hiddenpowerice"],
		tier: "Gen7 NU",
		doublesTier: "DUU",
	},
	vikavolttotemgen7: {
		tier: "Gen7 NU",
		doublesTier: "DUU",
	},
	crabrawlergen7: {
		tier: "Gen7 LC",
	},
	crabominablegen7: {
		randomBattleMoves: ["icehammer", "closecombat", "earthquake", "stoneedge"],
		randomDoubleBattleMoves: ["icehammer", "closecombat", "stoneedge", "protect", "wideguard", "earthquake"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	oricoriogen7: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	oricoriopompomgen7: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	oricoriopaugen7: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	oricoriosensugen7: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	cutieflygen7: {
		tier: "Gen7 LC Uber",
	},
	ribombeegen7: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "moonblast", "hiddenpowerfire", "roost"],
		randomDoubleBattleMoves: ["quiverdance", "pollenpuff", "moonblast", "protect", "stickyweb"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	ribombeetotemgen7: {
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	rockruffgen7: {
		tier: "Gen7 LC",
	},
	rockruffduskgen7: {
		tier: "Gen7 LC",
	},
	lycanrocgen7: {
		randomBattleMoves: ["swordsdance", "accelerock", "stoneedge", "drillrun", "firefang"],
		randomDoubleBattleMoves: ["accelerock", "stoneedge", "crunch", "firefang", "protect", "taunt"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	lycanrocmidnightgen7: {
		randomBattleMoves: ["stoneedge", "stealthrock", "suckerpunch", "swordsdance", "firepunch"],
		randomDoubleBattleMoves: ["stoneedge", "suckerpunch", "swordsdance", "protect", "taunt"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	lycanrocduskgen7: {
		randomBattleMoves: ["swordsdance", "accelerock", "stoneedge", "drillrun", "firefang", "return"],
		randomDoubleBattleMoves: ["accelerock", "stoneedge", "rockslide", "drillrun", "firefang", "protect"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	wishiwashigen7: {
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	wishiwashischoolgen7: {
		randomBattleMoves: ["scald", "hydropump", "icebeam", "hiddenpowergrass", "earthquake"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "endeavor", "protect", "hiddenpowergrass", "earthquake", "helpinghand"],
	},
	mareaniegen7: {
		tier: "Gen7 LC",
	},
	toxapexgen7: {
		randomBattleMoves: ["toxicspikes", "banefulbunker", "recover", "scald", "haze"],
		randomDoubleBattleMoves: ["scald", "banefulbunker", "haze", "wideguard", "toxicspikes", "recover"],
		tier: "Gen7 OU",
		doublesTier: "(DUU)",
	},
	mudbraygen7: {
		tier: "Gen7 LC",
	},
	mudsdalegen7: {
		randomBattleMoves: ["earthquake", "closecombat", "rockslide", "heavyslam", "stealthrock"],
		randomDoubleBattleMoves: ["highhorsepower", "heavyslam", "closecombat", "rockslide", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	dewpidergen7: {
		tier: "Gen7 LC",
	},
	araquanidgen7: {
		randomBattleMoves: ["liquidation", "lunge", "toxic", "mirrorcoat", "stickyweb"],
		randomDoubleBattleMoves: ["liquidation", "lunge", "stickyweb", "protect", "wideguard"],
		tier: "Gen7 RU",
		doublesTier: "DUU",
	},
	araquanidtotemgen7: {
		tier: "Gen7 RU",
		doublesTier: "DUU",
	},
	fomantisgen7: {
		tier: "Gen7 LC",
	},
	lurantisgen7: {
		randomBattleMoves: ["leafstorm", "hiddenpowerice", "superpower", "knockoff", "synthesis"],
		randomDoubleBattleMoves: ["leafstorm", "superpower", "hiddenpowerice", "knockoff", "protect"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	lurantistotemgen7: {
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	morelullgen7: {
		tier: "Gen7 LC",
	},
	shiinoticgen7: {
		randomBattleMoves: ["spore", "strengthsap", "moonblast", "substitute", "leechseed"],
		randomDoubleBattleMoves: ["spore", "gigadrain", "moonblast", "strengthsap", "leechseed", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	salanditgen7: {
		tier: "Gen7 LC",
	},
	salazzlegen7: {
		randomBattleMoves: ["nastyplot", "fireblast", "sludgewave", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["protect", "flamethrower", "sludgebomb", "hiddenpowerground", "hiddenpowergrass", "fakeout", "encore", "taunt"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	salazzletotemgen7: {
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	stuffulgen7: {
		tier: "Gen7 LC",
	},
	beweargen7: {
		randomBattleMoves: ["hammerarm", "icepunch", "swordsdance", "return", "shadowclaw", "doubleedge"],
		randomDoubleBattleMoves: ["hammerarm", "icepunch", "doubleedge", "protect", "wideguard"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	bounsweetgen7: {
		tier: "Gen7 LC",
	},
	steeneegen7: {
		tier: "Gen7 NFE",
	},
	tsareenagen7: {
		randomBattleMoves: ["powerwhip", "highjumpkick", "knockoff", "uturn", "rapidspin", "synthesis"],
		randomDoubleBattleMoves: ["playrough", "powerwhip", "uturn", "feint", "protect", "knockoff"],
		tier: "Gen7 RU",
		doublesTier: "DUU",
	},
	comfeygen7: {
		randomBattleMoves: ["aromatherapy", "drainingkiss", "toxic", "synthesis", "uturn"],
		randomDoubleBattleMoves: ["floralhealing", "drainingkiss", "uturn", "toxic", "taunt"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	orangurugen7: {
		randomBattleMoves: ["nastyplot", "psyshock", "focusblast", "thunderbolt", "trickroom"],
		randomDoubleBattleMoves: ["trickroom", "foulplay", "instruct", "psychic", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "DUU",
	},
	passimiangen7: {
		randomBattleMoves: ["rockslide", "closecombat", "earthquake", "ironhead", "uturn", "knockoff"],
		randomDoubleBattleMoves: ["closecombat", "uturn", "knockoff", "protect", "rockslide", "taunt"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	wimpodgen7: {
		tier: "Gen7 LC",
	},
	golisopodgen7: {
		randomBattleMoves: ["spikes", "firstimpression", "liquidation", "aquajet", "knockoff"],
		randomDoubleBattleMoves: ["firstimpression", "aquajet", "liquidation", "leechlife", "protect", "wideguard"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	sandygastgen7: {
		tier: "Gen7 LC",
	},
	palossandgen7: {
		randomBattleMoves: ["shoreup", "earthpower", "shadowball", "protect", "toxic", "stealthrock"],
		randomDoubleBattleMoves: ["shoreup", "protect", "shadowball", "earthpower", "stealthrock", "toxic"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	pyukumukugen7: {
		randomBattleMoves: ["toxic", "recover", "counter", "reflect", "lightscreen"],
		randomDoubleBattleMoves: ["reflect", "lightscreen", "counter", "helpinghand", "memento"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	typenullgen7: {
		randomBattleMoves: ["return", "uturn", "swordsdance", "rest", "sleeptalk"],
		tier: "Gen7 (PU)",
		doublesTier: "NFE",
	},
	silvallygen7: {
		randomBattleMoves: ["swordsdance", "return", "doubleedge", "crunch", "flamecharge", "flamethrower", "icebeam", "uturn", "ironhead"],
		randomDoubleBattleMoves: ["protect", "doubleedge", "uturn", "crunch", "icebeam", "partingshot", "flamecharge", "swordsdance", "explosion"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallybuggen7: {
		randomBattleMoves: ["flamethrower", "icebeam", "thunderbolt", "uturn", "defog"],
		randomDoubleBattleMoves: ["protect", "uturn", "flamethrower", "icebeam", "thunderbolt", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallydarkgen7: {
		randomBattleMoves: ["multiattack", "swordsdance", "flamecharge", "ironhead"],
		randomDoubleBattleMoves: ["protect", "multiattack", "icebeam", "partingshot", "uturn", "snarl", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallydragongen7: {
		randomBattleMoves: ["multiattack", "ironhead", "flamecharge", "flamethrower", "icebeam", "dracometeor", "swordsdance", "uturn"],
		randomDoubleBattleMoves: ["protect", "multiattack", "icebeam", "flamethrower", "partingshot", "uturn", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallyelectricgen7: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "thunderbolt", "icebeam", "uturn", "partingshot", "snarl", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallyfairygen7: {
		randomBattleMoves: ["multiattack", "flamethrower", "rockslide", "thunderwave", "partingshot"],
		randomDoubleBattleMoves: ["protect", "multiattack", "uturn", "icebeam", "partingshot", "flamethrower", "thunderwave"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	silvallyfightinggen7: {
		randomBattleMoves: ["swordsdance", "multiattack", "shadowclaw", "flamecharge", "ironhead"],
		randomDoubleBattleMoves: ["protect", "multiattack", "rockslide", "swordsdance", "flamecharge"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallyfiregen7: {
		randomBattleMoves: ["multiattack", "icebeam", "thunderbolt", "uturn", "defog"],
		randomDoubleBattleMoves: ["protect", "flamethrower", "snarl", "uturn", "thunderbolt", "icebeam", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallyflyinggen7: {
		randomBattleMoves: ["multiattack", "flamethrower", "ironhead", "partingshot", "thunderwave"],
		randomDoubleBattleMoves: ["protect", "multiattack", "partingshot", "swordsdance", "flamecharge", "uturn", "ironhead", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallyghostgen7: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "multiattack", "uturn", "icebeam", "partingshot"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	silvallygrassgen7: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "flamethrower", "multiattack", "icebeam", "uturn", "partingshot", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallygroundgen7: {
		randomBattleMoves: ["multiattack", "swordsdance", "flamecharge", "rockslide"],
		randomDoubleBattleMoves: ["protect", "multiattack", "icebeam", "thunderbolt", "flamecharge", "rockslide", "swordsdance"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallyicegen7: {
		randomBattleMoves: ["multiattack", "thunderbolt", "flamethrower", "uturn", "toxic"],
		randomDoubleBattleMoves: ["protect", "icebeam", "thunderbolt", "partingshot", "uturn", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallypoisongen7: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "multiattack", "uturn", "partingshot", "flamethrower", "icebeam", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallypsychicgen7: {
		randomBattleMoves: ["multiattack", "flamethrower", "rockslide", "partingshot", "thunderwave"],
		randomDoubleBattleMoves: ["protect", "multiattack", "partingshot", "uturn", "flamethrower", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallyrockgen7: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "rockslide", "uturn", "icebeam", "flamethrower", "partingshot"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	silvallysteelgen7: {
		randomBattleMoves: ["multiattack", "crunch", "flamethrower", "thunderbolt", "defog"],
		randomDoubleBattleMoves: ["protect", "multiattack", "swordsdance", "rockslide", "flamecharge", "uturn", "partingshot"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	silvallywatergen7: {
		randomBattleMoves: ["multiattack", "icebeam", "thunderbolt", "partingshot", "defog"],
		randomDoubleBattleMoves: ["protect", "multiattack", "icebeam", "thunderbolt", "flamethrower", "partingshot", "uturn", "thunderwave"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	miniorgen7: {
		randomBattleMoves: ["shellsmash", "powergem", "acrobatics", "earthquake"],
		randomDoubleBattleMoves: ["shellsmash", "powergem", "acrobatics", "earthquake", "protect"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	miniormeteorgen7: {
},	komalagen7: {
		randomBattleMoves: ["return", "suckerpunch", "woodhammer", "earthquake", "playrough", "uturn"],
		randomDoubleBattleMoves: ["protect", "return", "uturn", "suckerpunch", "woodhammer", "shadowclaw", "playrough", "swordsdance"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	turtonatorgen7: {
		randomBattleMoves: ["fireblast", "shellsmash", "earthquake", "dragontail", "explosion", "dragonpulse", "dracometeor"],
		randomDoubleBattleMoves: ["dragonpulse", "dracometeor", "fireblast", "shellsmash", "protect"],
		tier: "Gen7 (PU)",
		doublesTier: "(DUU)",
	},
	togedemarugen7: {
		randomBattleMoves: ["ironhead", "spikyshield", "zingzap", "nuzzle", "uturn", "wish"],
		randomDoubleBattleMoves: ["ironhead", "zingzap", "nuzzle", "spikyshield", "encore", "fakeout", "uturn"],
		tier: "Gen7 NU",
		doublesTier: "DUU",
	},
	togedemarutotemgen7: {
		tier: "Gen7 NU",
		doublesTier: "DUU",
	},
	mimikyugen7: {
		randomBattleMoves: ["swordsdance", "shadowsneak", "playrough", "taunt", "shadowclaw"],
		randomDoubleBattleMoves: ["shadowclaw", "playrough", "willowisp", "shadowsneak", "swordsdance", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	mimikyutotemgen7: {
		tier: "Gen7 UU",
		doublesTier: "DUU",
	},
	mimikyubustedtotemgen7: {
},	bruxishgen7: {
		randomBattleMoves: ["psychicfangs", "crunch", "liquidation", "icefang", "aquajet", "swordsdance"],
		randomDoubleBattleMoves: ["psychicfangs", "crunch", "liquidation", "aquajet", "protect", "swordsdance"],
		tier: "Gen7 NUBL",
		doublesTier: "DUU",
	},
	drampagen7: {
		randomBattleMoves: ["dracometeor", "dragonpulse", "hypervoice", "fireblast", "thunderbolt", "glare", "roost"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "hypervoice", "fireblast", "protect", "glare", "roost"],
		tier: "Gen7 PU",
		doublesTier: "(DUU)",
	},
	dhelmisegen7: {
		randomBattleMoves: ["powerwhip", "anchorshot", "knockoff", "earthquake", "rapidspin", "synthesis"],
		randomDoubleBattleMoves: ["powerwhip", "knockoff", "anchorshot", "protect", "rapidspin"],
		tier: "Gen7 NU",
		doublesTier: "(DUU)",
	},
	jangmoogen7: {
		tier: "Gen7 LC",
	},
	hakamoogen7: {
		tier: "Gen7 NFE",
	},
	kommoogen7: {
		randomBattleMoves: ["dragondance", "outrage", "closecombat", "poisonjab", "clangingscales"],
		randomDoubleBattleMoves: ["clangingscales", "closecombat", "dragondance", "poisonjab"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	kommoototemgen7: {
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	tapukokogen7: {
		randomBattleMoves: ["thunderbolt", "dazzlinggleam", "naturesmadness", "bravebird", "uturn", "defog"],
		randomDoubleBattleMoves: ["dazzlinggleam", "protect", "thunderbolt", "hiddenpowerice", "taunt", "skydrop", "naturesmadness", "uturn"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	tapulelegen7: {
		randomBattleMoves: ["moonblast", "psychic", "psyshock", "calmmind", "focusblast", "hiddenpowerfire", "taunt"],
		randomDoubleBattleMoves: ["moonblast", "psychic", "dazzlinggleam", "focusblast", "protect", "taunt"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	tapubulugen7: {
		randomBattleMoves: ["woodhammer", "hornleech", "stoneedge", "superpower", "megahorn", "bulkup"],
		randomDoubleBattleMoves: ["woodhammer", "hornleech", "stoneedge", "superpower", "protect", "naturesmadness"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	tapufinigen7: {
		randomBattleMoves: ["calmmind", "moonblast", "scald", "taunt", "icebeam", "hydropump"],
		randomDoubleBattleMoves: ["muddywater", "moonblast", "naturesmadness", "healpulse", "protect", "taunt", "swagger"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	cosmoggen7: {
		tier: "Gen7 LC",
	},
	cosmoemgen7: {
		tier: "Gen7 NFE",
	},
	solgaleogen7: {
		randomBattleMoves: ["sunsteelstrike", "zenheadbutt", "flareblitz", "morningsun", "stoneedge", "earthquake"],
		randomDoubleBattleMoves: ["wideguard", "protect", "sunsteelstrike", "morningsun", "zenheadbutt", "flareblitz"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	lunalagen7: {
		randomBattleMoves: ["moongeistbeam", "psyshock", "calmmind", "focusblast", "roost"],
		randomDoubleBattleMoves: ["wideguard", "protect", "roost", "moongeistbeam", "psychic", "moonblast"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	nihilegogen7: {
		randomBattleMoves: ["stealthrock", "toxicspikes", "sludgewave", "powergem", "thunderbolt", "grassknot"],
		randomDoubleBattleMoves: ["powergem", "sludgebomb", "grassknot", "protect", "thunderbolt", "hiddenpowerice"],
		tier: "Gen7 UU",
		doublesTier: "(DUU)",
	},
	buzzwolegen7: {
		randomBattleMoves: ["superpower", "drainpunch", "leechlife", "stoneedge", "poisonjab", "earthquake"],
		randomDoubleBattleMoves: ["drainpunch", "superpower", "leechlife", "icepunch", "poisonjab", "protect"],
		tier: "Gen7 UUBL",
		doublesTier: "(DUU)",
	},
	pheromosagen7: {
		randomBattleMoves: ["highjumpkick", "uturn", "icebeam", "poisonjab", "bugbuzz"],
		randomDoubleBattleMoves: ["highjumpkick", "uturn", "icebeam", "poisonjab", "bugbuzz", "protect", "speedswap"],
		tier: "Gen7 Uber",
		doublesTier: "DUU",
	},
	xurkitreegen7: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "energyball", "dazzlinggleam", "hiddenpowerice", "electricterrain"],
		randomDoubleBattleMoves: ["thunderbolt", "hiddenpowerice", "tailglow", "protect", "energyball", "hypnosis"],
		tier: "Gen7 UUBL",
		doublesTier: "DUU",
	},
	celesteelagen7: {
		randomBattleMoves: ["autotomize", "heavyslam", "airslash", "fireblast", "earthquake", "leechseed", "protect"],
		randomDoubleBattleMoves: ["protect", "heavyslam", "fireblast", "earthquake", "wideguard", "leechseed"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	kartanagen7: {
		randomBattleMoves: ["leafblade", "sacredsword", "smartstrike", "knockoff", "swordsdance"],
		randomDoubleBattleMoves: ["leafblade", "sacredsword", "smartstrike", "swordsdance", "protect", "knockoff"],
		tier: "Gen7 OU",
		doublesTier: "DOU",
	},
	guzzlordgen7: {
		randomBattleMoves: ["dracometeor", "knockoff", "earthquake", "heavyslam", "fireblast"],
		randomDoubleBattleMoves: ["dracometeor", "knockoff", "wideguard", "fireblast", "protect"],
		tier: "Gen7 PUBL",
		doublesTier: "(DUU)",
	},
	necrozmagen7: {
		randomBattleMoves: ["calmmind", "photongeyser", "heatwave", "moonlight", "stealthrock"],
		randomDoubleBattleMoves: ["calmmind", "heatwave", "photongeyser", "moonlight", "earthpower"],
		tier: "Gen7 RU",
		doublesTier: "(DUU)",
	},
	necrozmaduskmanegen7: {
		randomBattleMoves: ["swordsdance", "sunsteelstrike", "photongeyser", "earthquake", "knockoff", "autotomize"],
		randomDoubleBattleMoves: ["swordsdance", "sunsteelstrike", "photongeyser", "earthquake", "knockoff", "rockslide"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	necrozmadawnwingsgen7: {
		randomBattleMoves: ["calmmind", "moongeistbeam", "photongeyser", "heatwave", "powergem", "trickroom"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	necrozmaultragen7: {
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	magearnagen7: {
		randomBattleMoves: ["shiftgear", "ironhead", "calmmind", "fleurcannon", "flashcannon", "thunderbolt", "focusblast"],
		randomDoubleBattleMoves: ["dazzlinggleam", "flashcannon", "protect", "trickroom", "fleurcannon", "aurasphere", "voltswitch"],
		tier: "Gen7 OU",
		doublesTier: "DUber",
	},
	magearnaoriginalgen7: {
		isNonstandard: "Unobtainable",
		tier: "Gen7 Illegal",
	},
	marshadowgen7: {
		randomBattleMoves: ["bulkup", "spectralthief", "closecombat", "rocktomb", "shadowsneak", "icepunch"],
		randomDoubleBattleMoves: ["bulkup", "spectralthief", "closecombat", "shadowsneak", "icepunch", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUber",
	},
	poipolegen7: {
		tier: "Gen7 NFE",
	},
	naganadelgen7: {
		randomBattleMoves: ["nastyplot", "dragonpulse", "sludgewave", "fireblast", "dracometeor", "uturn"],
		randomDoubleBattleMoves: ["tailwind", "dragonpulse", "sludgebomb", "fireblast", "dracometeor", "uturn", "protect"],
		tier: "Gen7 Uber",
		doublesTier: "DUU",
	},
	stakatakagen7: {
		randomBattleMoves: ["gyroball", "stoneedge", "trickroom", "earthquake", "superpower", "stealthrock"],
		randomDoubleBattleMoves: ["gyroball", "stoneedge", "trickroom", "earthquake", "superpower", "stealthrock", "rockslide"],
		tier: "Gen7 RUBL",
		doublesTier: "DOU",
	},
	blacephalongen7: {
		randomBattleMoves: ["mindblown", "fireblast", "shadowball", "hiddenpowerice", "trick", "explosion", "calmmind"],
		randomDoubleBattleMoves: ["willowisp", "fireblast", "shadowball", "hiddenpowerice", "heatwave", "protect"],
		tier: "Gen7 OU",
		doublesTier: "DUU",
	},
	zeraoragen7: {
		randomBattleMoves: ["plasmafists", "closecombat", "voltswitch", "hiddenpowerice", "knockoff", "grassknot", "workup"],
		randomDoubleBattleMoves: ["plasmafists", "closecombat", "voltswitch", "hiddenpowerice", "knockoff", "grassknot", "fakeout", "protect"],
		tier: "Gen7 UU",
		doublesTier: "DOU",
	},
	meltangen7: {
		isNonstandard: "LGPE",
		tier: "Gen7 Illegal",
	},
	melmetalgen7: {
		isNonstandard: "LGPE",
		tier: "Gen7 Illegal",
	},
}; exports.FormatsData = FormatsData;

