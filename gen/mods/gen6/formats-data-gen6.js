"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const FormatsData = {
	bulbasaurgen6: {
		tier: "Gen6 LC",
	},
	ivysaurgen6: {
		tier: "Gen6 NFE",
	},
	venusaurgen6: {
		randomBattleMoves: ["sleeppowder", "leafstorm", "sludgebomb", "substitute", "leechseed"],
		randomDoubleBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "protect"],
		tier: "Gen6 RU",
		doublesTier: "DOU",
	},
	venusaurmegagen6: {
		randomBattleMoves: ["gigadrain", "sludgebomb", "hiddenpowerfire", "synthesis", "leechseed", "earthquake"],
		randomDoubleBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	charmandergen6: {
		tier: "Gen6 LC",
	},
	charmeleongen6: {
		tier: "Gen6 NFE",
	},
	charizardgen6: {
		randomBattleMoves: ["fireblast", "airslash", "roost", "swordsdance", "flareblitz", "acrobatics", "earthquake", "willowisp"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "airslash", "overheat", "dragonpulse", "roost", "tailwind", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	charizardmegaxgen6: {
		randomBattleMoves: ["dragondance", "flareblitz", "dragonclaw", "earthquake", "roost", "willowisp"],
		randomDoubleBattleMoves: ["dragondance", "flareblitz", "dragonclaw", "earthquake", "rockslide", "roost", "substitute"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	charizardmegaygen6: {
		randomBattleMoves: ["fireblast", "airslash", "roost", "solarbeam", "focusblast", "dragonpulse"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "airslash", "roost", "solarbeam", "focusblast", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	squirtlegen6: {
		tier: "Gen6 LC",
	},
	wartortlegen6: {
		tier: "Gen6 NFE",
	},
	blastoisegen6: {
		randomBattleMoves: ["icebeam", "rapidspin", "scald", "toxic", "dragontail", "roar"],
		randomDoubleBattleMoves: ["muddywater", "icebeam", "hydropump", "fakeout", "scald", "followme", "icywind", "protect", "waterspout"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	blastoisemegagen6: {
		randomBattleMoves: ["icebeam", "hydropump", "rapidspin", "scald", "dragontail", "darkpulse", "aurasphere"],
		randomDoubleBattleMoves: ["muddywater", "icebeam", "hydropump", "fakeout", "scald", "darkpulse", "aurasphere", "followme", "icywind", "protect"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	caterpiegen6: {
		tier: "Gen6 LC",
	},
	metapodgen6: {
		tier: "Gen6 NFE",
	},
	butterfreegen6: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "bugbuzz", "psychic", "energyball"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "substitute", "sleeppowder", "psychic", "shadowball", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	weedlegen6: {
		tier: "Gen6 LC",
	},
	kakunagen6: {
		tier: "Gen6 NFE",
	},
	beedrillgen6: {
		randomBattleMoves: ["toxicspikes", "tailwind", "uturn", "endeavor", "poisonjab", "knockoff"],
		randomDoubleBattleMoves: ["xscissor", "uturn", "poisonjab", "drillrun", "brickbreak", "knockoff", "protect", "stringshot"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	beedrillmegagen6: {
		randomBattleMoves: ["xscissor", "swordsdance", "uturn", "poisonjab", "drillrun", "knockoff"],
		randomDoubleBattleMoves: ["xscissor", "uturn", "substitute", "poisonjab", "drillrun", "knockoff", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	pidgeygen6: {
		tier: "Gen6 LC",
	},
	pidgeottogen6: {
		tier: "Gen6 NFE",
	},
	pidgeotgen6: {
		randomBattleMoves: ["roost", "bravebird", "heatwave", "return", "uturn", "defog"],
		randomDoubleBattleMoves: ["bravebird", "heatwave", "return", "doubleedge", "uturn", "tailwind", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	pidgeotmegagen6: {
		randomBattleMoves: ["roost", "heatwave", "uturn", "hurricane", "defog"],
		randomDoubleBattleMoves: ["tailwind", "heatwave", "uturn", "hurricane", "protect"],
		tier: "Gen6 UUBL",
		doublesTier: "(DUU)",
	},
	rattatagen6: {
		tier: "Gen6 LC",
	},
	raticategen6: {
		randomBattleMoves: ["protect", "facade", "flamewheel", "suckerpunch", "uturn", "swordsdance"],
		randomDoubleBattleMoves: ["facade", "flamewheel", "suckerpunch", "uturn", "crunch", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	spearowgen6: {
		tier: "Gen6 LC",
	},
	fearowgen6: {
		randomBattleMoves: ["return", "drillpeck", "doubleedge", "uturn", "pursuit", "drillrun"],
		randomDoubleBattleMoves: ["return", "drillpeck", "doubleedge", "uturn", "quickattack", "drillrun", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	ekansgen6: {
		tier: "Gen6 LC",
	},
	arbokgen6: {
		randomBattleMoves: ["coil", "gunkshot", "suckerpunch", "aquatail", "earthquake", "rest"],
		randomDoubleBattleMoves: ["gunkshot", "suckerpunch", "aquatail", "crunch", "earthquake", "rest", "rockslide", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	pichugen6: {
		tier: "Gen6 LC",
	},
	pikachugen6: {
		randomBattleMoves: ["volttackle", "voltswitch", "grassknot", "hiddenpowerice", "knockoff", "irontail"],
		randomDoubleBattleMoves: ["fakeout", "thunderbolt", "volttackle", "voltswitch", "grassknot", "hiddenpowerice", "brickbreak", "extremespeed", "encore", "substitute", "knockoff", "protect", "discharge"],
		tier: "Gen6 NFE",
	},
	pikachucosplaygen6: {
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	pikachurockstargen6: {
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	pikachubellegen6: {
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	pikachupopstargen6: {
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	pikachuphdgen6: {
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	pikachulibregen6: {
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	raichugen6: {
		randomBattleMoves: ["nastyplot", "encore", "thunderbolt", "grassknot", "hiddenpowerice", "focusblast", "voltswitch"],
		randomDoubleBattleMoves: ["fakeout", "encore", "thunderbolt", "grassknot", "hiddenpowerice", "focusblast", "substitute", "extremespeed", "knockoff", "protect"],
		tier: "Gen6 PU",
		doublesTier: "DOU",
	},
	sandshrewgen6: {
		tier: "Gen6 LC",
	},
	sandslashgen6: {
		randomBattleMoves: ["earthquake", "swordsdance", "rapidspin", "toxic", "stealthrock", "knockoff"],
		randomDoubleBattleMoves: ["earthquake", "rockslide", "stoneedge", "swordsdance", "xscissor", "knockoff", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	nidoranfgen6: {
		tier: "Gen6 LC",
	},
	nidorinagen6: {
		tier: "Gen6 NFE",
	},
	nidoqueengen6: {
		randomBattleMoves: ["toxicspikes", "stealthrock", "fireblast", "icebeam", "earthpower", "sludgewave"],
		randomDoubleBattleMoves: ["protect", "fireblast", "icebeam", "earthpower", "sludgebomb"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	nidoranmgen6: {
		tier: "Gen6 LC",
	},
	nidorinogen6: {
		tier: "Gen6 NFE",
	},
	nidokinggen6: {
		randomBattleMoves: ["substitute", "fireblast", "icebeam", "earthpower", "sludgewave", "superpower"],
		randomDoubleBattleMoves: ["protect", "fireblast", "thunderbolt", "icebeam", "earthpower", "sludgebomb", "focusblast"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	cleffagen6: {
		tier: "Gen6 LC",
	},
	clefairygen6: {
		tier: "Gen6 PU",
		doublesTier: "NFE",
	},
	clefablegen6: {
		randomBattleMoves: ["calmmind", "softboiled", "fireblast", "moonblast", "stealthrock", "thunderwave"],
		randomDoubleBattleMoves: ["reflect", "thunderwave", "lightscreen", "safeguard", "fireblast", "followme", "protect", "moonblast", "dazzlinggleam", "softboiled"],
		tier: "Gen6 OU",
		doublesTier: "DUU",
	},
	vulpixgen6: {
		tier: "Gen6 LC",
	},
	ninetalesgen6: {
		randomBattleMoves: ["fireblast", "willowisp", "solarbeam", "nastyplot", "substitute", "hiddenpowerice"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "willowisp", "solarbeam", "substitute", "protect"],
		tier: "Gen6 PU",
		doublesTier: "DUU",
	},
	igglybuffgen6: {
		tier: "Gen6 LC",
	},
	jigglypuffgen6: {
		tier: "Gen6 NFE",
	},
	wigglytuffgen6: {
		randomBattleMoves: ["reflect", "lightscreen", "healbell", "stealthrock", "fireblast", "dazzlinggleam"],
		randomDoubleBattleMoves: ["thunderwave", "reflect", "lightscreen", "protect", "knockoff", "dazzlinggleam", "fireblast", "icebeam", "hypervoice"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	zubatgen6: {
		tier: "Gen6 LC",
	},
	golbatgen6: {
		tier: "Gen6 RU",
	},
	crobatgen6: {
		randomBattleMoves: ["bravebird", "roost", "toxic", "taunt", "defog", "uturn", "superfang"],
		randomDoubleBattleMoves: ["bravebird", "taunt", "tailwind", "crosspoison", "uturn", "protect", "superfang"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	oddishgen6: {
		tier: "Gen6 LC",
	},
	gloomgen6: {
		tier: "Gen6 NFE",
	},
	vileplumegen6: {
		randomBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "hiddenpowerfire", "aromatherapy", "synthesis"],
		randomDoubleBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "stunspore", "protect", "hiddenpowerfire", "moonblast", "dazzlinggleam"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	bellossomgen6: {
		randomBattleMoves: ["gigadrain", "synthesis", "sleeppowder", "hiddenpowerfire", "sunnyday"],
		randomDoubleBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "stunspore", "protect", "hiddenpowerfire", "moonblast", "dazzlinggleam", "sunnyday", "solarbeam"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	parasgen6: {
		tier: "Gen6 LC",
	},
	parasectgen6: {
		randomBattleMoves: ["spore", "substitute", "xscissor", "seedbomb", "leechseed", "knockoff"],
		randomDoubleBattleMoves: ["spore", "stunspore", "xscissor", "seedbomb", "ragepowder", "leechseed", "protect", "knockoff", "wideguard"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	venonatgen6: {
		tier: "Gen6 LC",
	},
	venomothgen6: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "bugbuzz", "sludgebomb", "substitute"],
		randomDoubleBattleMoves: ["sleeppowder", "roost", "ragepowder", "quiverdance", "protect", "bugbuzz", "sludgebomb", "gigadrain", "substitute", "psychic"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	diglettgen6: {
		tier: "Gen6 LC",
	},
	dugtriogen6: {
		randomBattleMoves: ["earthquake", "stoneedge", "stealthrock", "suckerpunch", "reversal", "substitute"],
		randomDoubleBattleMoves: ["earthquake", "rockslide", "protect", "suckerpunch", "stoneedge"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	meowthgen6: {
		tier: "Gen6 LC",
	},
	persiangen6: {
		randomBattleMoves: ["fakeout", "uturn", "taunt", "return", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "uturn", "knockoff", "taunt", "return", "hypnosis", "feint", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	psyduckgen6: {
		tier: "Gen6 LC",
	},
	golduckgen6: {
		randomBattleMoves: ["hydropump", "scald", "icebeam", "psyshock", "encore", "calmmind", "substitute"],
		randomDoubleBattleMoves: ["hydropump", "scald", "icebeam", "hiddenpowergrass", "focusblast", "encore", "psychic", "surf", "icywind", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	mankeygen6: {
		tier: "Gen6 LC",
	},
	primeapegen6: {
		randomBattleMoves: ["closecombat", "uturn", "icepunch", "stoneedge", "encore", "earthquake", "gunkshot"],
		randomDoubleBattleMoves: ["closecombat", "uturn", "icepunch", "rockslide", "punishment", "earthquake", "poisonjab", "protect", "taunt", "stoneedge"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	growlithegen6: {
		tier: "Gen6 LC",
	},
	arcaninegen6: {
		randomBattleMoves: ["flareblitz", "wildcharge", "extremespeed", "closecombat", "morningsun", "willowisp", "toxic", "crunch", "roar"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "closecombat", "willowisp", "snarl", "protect", "extremespeed"],
		tier: "Gen6 UU",
		doublesTier: "DOU",
	},
	poliwaggen6: {
		tier: "Gen6 LC",
	},
	poliwhirlgen6: {
		tier: "Gen6 NFE",
	},
	poliwrathgen6: {
		randomBattleMoves: ["hydropump", "focusblast", "icepunch", "rest", "sleeptalk", "scald", "circlethrow", "raindance"],
		randomDoubleBattleMoves: ["bellydrum", "encore", "waterfall", "protect", "icepunch", "earthquake", "brickbreak", "rockslide"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	politoedgen6: {
		randomBattleMoves: ["scald", "toxic", "encore", "perishsong", "protect", "hypnosis", "rest"],
		randomDoubleBattleMoves: ["scald", "hypnosis", "icywind", "encore", "helpinghand", "protect", "icebeam", "focusblast", "hydropump", "hiddenpowergrass"],
		tier: "Gen6 (PU)",
		doublesTier: "DOU",
	},
	abragen6: {
		tier: "Gen6 LC",
	},
	kadabragen6: {
		tier: "Gen6 PU",
		doublesTier: "NFE",
	},
	alakazamgen6: {
		randomBattleMoves: ["psyshock", "psychic", "focusblast", "shadowball", "hiddenpowerice", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["protect", "psychic", "psyshock", "focusblast", "shadowball", "encore", "substitute", "dazzlinggleam"],
		tier: "Gen6 UUBL",
		doublesTier: "(DUU)",
	},
	alakazammegagen6: {
		randomBattleMoves: ["calmmind", "psyshock", "focusblast", "shadowball", "encore", "substitute"],
		randomDoubleBattleMoves: ["protect", "psychic", "psyshock", "focusblast", "shadowball", "encore", "substitute", "dazzlinggleam"],
		tier: "Gen6 UUBL",
		doublesTier: "(DUU)",
	},
	machopgen6: {
		tier: "Gen6 LC",
	},
	machokegen6: {
		tier: "Gen6 PUBL",
		doublesTier: "NFE",
	},
	machampgen6: {
		randomBattleMoves: ["dynamicpunch", "icepunch", "stoneedge", "bulletpunch", "knockoff", "substitute"],
		randomDoubleBattleMoves: ["dynamicpunch", "protect", "icepunch", "stoneedge", "rockslide", "bulletpunch", "knockoff", "wideguard"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	bellsproutgen6: {
		tier: "Gen6 LC",
	},
	weepinbellgen6: {
		tier: "Gen6 NFE",
	},
	victreebelgen6: {
		randomBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "powerwhip", "knockoff"],
		randomDoubleBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "powerwhip", "knockoff", "protect"],
		tier: "Gen6 PUBL",
		doublesTier: "(DUU)",
	},
	tentacoolgen6: {
		tier: "Gen6 LC",
	},
	tentacruelgen6: {
		randomBattleMoves: ["toxicspikes", "rapidspin", "scald", "sludgebomb", "acidspray", "knockoff"],
		randomDoubleBattleMoves: ["muddywater", "scald", "sludgebomb", "acidspray", "icebeam", "knockoff", "gigadrain", "protect", "dazzlinggleam"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	geodudegen6: {
		tier: "Gen6 LC",
	},
	gravelergen6: {
		tier: "Gen6 NFE",
	},
	golemgen6: {
		randomBattleMoves: ["stealthrock", "earthquake", "explosion", "suckerpunch", "toxic", "rockblast"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "stoneedge", "suckerpunch", "hammerarm", "firepunch", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	ponytagen6: {
		tier: "Gen6 LC",
	},
	rapidashgen6: {
		randomBattleMoves: ["flareblitz", "wildcharge", "morningsun", "drillrun", "willowisp", "sunnyday", "solarbeam"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "protect", "hypnosis", "flamecharge", "megahorn", "drillrun", "willowisp"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	slowpokegen6: {
		tier: "Gen6 LC",
	},
	slowbrogen6: {
		randomBattleMoves: ["scald", "toxic", "thunderwave", "psyshock", "fireblast", "icebeam", "slackoff"],
		randomDoubleBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "grassknot", "thunderwave", "slackoff", "trickroom", "protect", "psyshock"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	slowbromegagen6: {
		randomBattleMoves: ["calmmind", "scald", "psyshock", "slackoff", "fireblast", "icebeam"],
		randomDoubleBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "grassknot", "thunderwave", "slackoff", "trickroom", "protect", "psyshock"],
		tier: "Gen6 (OU)",
		doublesTier: "(DUU)",
	},
	slowkinggen6: {
		randomBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "grassknot", "thunderwave", "toxic", "slackoff", "trickroom", "nastyplot", "dragontail", "psyshock"],
		randomDoubleBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "grassknot", "thunderwave", "slackoff", "trickroom", "protect", "psyshock"],
		tier: "Gen6 RU",
		doublesTier: "DUU",
	},
	magnemitegen6: {
		tier: "Gen6 LC",
	},
	magnetongen6: {
		tier: "Gen6 RU",
		doublesTier: "NFE",
	},
	magnezonegen6: {
		randomBattleMoves: ["thunderbolt", "substitute", "flashcannon", "hiddenpowerfire", "voltswitch"],
		randomDoubleBattleMoves: ["thunderbolt", "substitute", "flashcannon", "hiddenpowerice", "voltswitch", "protect", "electroweb", "discharge", "hiddenpowerfire"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	farfetchdgen6: {
		randomBattleMoves: ["bravebird", "swordsdance", "return", "leafblade", "roost", "knockoff"],
		randomDoubleBattleMoves: ["bravebird", "swordsdance", "return", "leafblade", "protect", "nightslash"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	doduogen6: {
		tier: "Gen6 LC",
	},
	dodriogen6: {
		randomBattleMoves: ["bravebird", "return", "doubleedge", "roost", "quickattack", "knockoff"],
		randomDoubleBattleMoves: ["bravebird", "return", "doubleedge", "quickattack", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	seelgen6: {
		tier: "Gen6 LC",
	},
	dewgonggen6: {
		randomBattleMoves: ["surf", "icebeam", "perishsong", "encore", "toxic", "protect"],
		randomDoubleBattleMoves: ["surf", "icebeam", "protect", "perishsong", "fakeout", "encore", "toxic"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	grimergen6: {
		tier: "Gen6 LC",
	},
	mukgen6: {
		randomBattleMoves: ["curse", "gunkshot", "poisonjab", "shadowsneak", "icepunch", "firepunch", "memento"],
		randomDoubleBattleMoves: ["gunkshot", "poisonjab", "shadowsneak", "protect", "icepunch", "firepunch", "brickbreak"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	shelldergen6: {
		tier: "Gen6 LC",
	},
	cloystergen6: {
		randomBattleMoves: ["shellsmash", "iciclespear", "hydropump", "rockblast", "iceshard", "spikes", "rapidspin"],
		randomDoubleBattleMoves: ["shellsmash", "hydropump", "razorshell", "rockblast", "iciclespear", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	gastlygen6: {
		tier: "Gen6 LC",
	},
	hauntergen6: {
		tier: "Gen6 NU",
		doublesTier: "NFE",
	},
	gengargen6: {
		randomBattleMoves: ["shadowball", "sludgewave", "focusblast", "substitute", "disable", "painsplit", "willowisp"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "focusblast", "substitute", "disable", "taunt", "hypnosis", "willowisp", "dazzlinggleam", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	gengarmegagen6: {
		randomBattleMoves: ["shadowball", "sludgewave", "focusblast", "taunt", "destinybond", "disable", "perishsong", "protect"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "focusblast", "substitute", "disable", "taunt", "hypnosis", "willowisp", "dazzlinggleam", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DOU",
	},
	onixgen6: {
		tier: "Gen6 LC",
	},
	steelixgen6: {
		randomBattleMoves: ["stealthrock", "earthquake", "ironhead", "roar", "toxic", "rockslide"],
		randomDoubleBattleMoves: ["stealthrock", "earthquake", "ironhead", "rockslide", "protect", "explosion"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	steelixmegagen6: {
		randomBattleMoves: ["stealthrock", "earthquake", "heavyslam", "roar", "toxic", "dragontail"],
		randomDoubleBattleMoves: ["stealthrock", "earthquake", "heavyslam", "rockslide", "protect", "explosion"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	drowzeegen6: {
		tier: "Gen6 LC",
	},
	hypnogen6: {
		randomBattleMoves: ["psychic", "seismictoss", "foulplay", "wish", "protect", "thunderwave", "toxic"],
		randomDoubleBattleMoves: ["psychic", "seismictoss", "thunderwave", "wish", "protect", "hypnosis", "trickroom", "dazzlinggleam", "foulplay"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	krabbygen6: {
		tier: "Gen6 LC",
	},
	kinglergen6: {
		randomBattleMoves: ["crabhammer", "xscissor", "rockslide", "swordsdance", "agility", "superpower", "knockoff"],
		randomDoubleBattleMoves: ["crabhammer", "xscissor", "rockslide", "substitute", "superpower", "knockoff", "protect", "wideguard"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	voltorbgen6: {
		tier: "Gen6 LC",
	},
	electrodegen6: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "taunt", "foulplay", "hiddenpowergrass", "signalbeam"],
		randomDoubleBattleMoves: ["voltswitch", "discharge", "taunt", "foulplay", "hiddenpowerice", "protect", "thunderwave"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	exeggcutegen6: {
		tier: "Gen6 LC",
	},
	exeggutorgen6: {
		randomBattleMoves: ["substitute", "leechseed", "gigadrain", "psychic", "sleeppowder", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["substitute", "leechseed", "gigadrain", "psychic", "sleeppowder", "hiddenpowerfire", "protect", "trickroom", "psyshock"],
		tier: "Gen6 PUBL",
		doublesTier: "(DUU)",
	},
	cubonegen6: {
		tier: "Gen6 LC",
	},
	marowakgen6: {
		randomBattleMoves: ["bonemerang", "earthquake", "knockoff", "doubleedge", "stoneedge", "stealthrock", "substitute"],
		randomDoubleBattleMoves: ["substitute", "bonemerang", "doubleedge", "rockslide", "firepunch", "earthquake", "protect", "swordsdance"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	tyroguegen6: {
		tier: "Gen6 LC",
	},
	hitmonleegen6: {
		randomBattleMoves: ["highjumpkick", "knockoff", "stoneedge", "rapidspin", "machpunch", "poisonjab", "fakeout"],
		randomDoubleBattleMoves: ["knockoff", "rockslide", "machpunch", "fakeout", "highjumpkick", "earthquake", "blazekick", "wideguard", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	hitmonchangen6: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "firepunch", "machpunch", "rapidspin"],
		randomDoubleBattleMoves: ["fakeout", "drainpunch", "icepunch", "firepunch", "machpunch", "earthquake", "rockslide", "protect", "thunderpunch"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	hitmontopgen6: {
		randomBattleMoves: ["suckerpunch", "stoneedge", "rapidspin", "closecombat", "toxic"],
		randomDoubleBattleMoves: ["fakeout", "feint", "suckerpunch", "closecombat", "helpinghand", "machpunch", "wideguard"],
		tier: "Gen6 RU",
		doublesTier: "DOU",
	},
	lickitunggen6: {
		tier: "Gen6 LC",
	},
	lickilickygen6: {
		randomBattleMoves: ["wish", "protect", "bodyslam", "knockoff", "dragontail", "healbell", "swordsdance", "explosion", "earthquake", "powerwhip"],
		randomDoubleBattleMoves: ["wish", "protect", "dragontail", "knockoff", "bodyslam", "rockslide", "powerwhip", "earthquake", "toxic", "healbell", "explosion"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	koffinggen6: {
		tier: "Gen6 LC",
	},
	weezinggen6: {
		randomBattleMoves: ["painsplit", "sludgebomb", "willowisp", "fireblast", "protect", "toxicspikes"],
		randomDoubleBattleMoves: ["protect", "sludgebomb", "willowisp", "fireblast", "toxic", "painsplit", "thunderbolt", "explosion"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	rhyhorngen6: {
		tier: "Gen6 LC",
	},
	rhydongen6: {
		tier: "Gen6 NU",
		doublesTier: "NFE",
	},
	rhyperiorgen6: {
		randomBattleMoves: ["stoneedge", "earthquake", "icepunch", "megahorn", "stealthrock", "rockblast", "rockpolish", "dragontail"],
		randomDoubleBattleMoves: ["stoneedge", "earthquake", "hammerarm", "megahorn", "stealthrock", "rockslide", "protect"],
		tier: "Gen6 RU",
		doublesTier: "DUU",
	},
	happinygen6: {
		tier: "Gen6 LC",
	},
	chanseygen6: {
		randomBattleMoves: ["softboiled", "healbell", "stealthrock", "thunderwave", "toxic", "seismictoss", "wish"],
		randomDoubleBattleMoves: ["aromatherapy", "toxic", "thunderwave", "helpinghand", "softboiled", "lightscreen", "seismictoss", "protect", "wish"],
		tier: "Gen6 OU",
		doublesTier: "NFE",
	},
	blisseygen6: {
		randomBattleMoves: ["toxic", "flamethrower", "seismictoss", "softboiled", "healbell", "protect", "thunderwave", "stealthrock"],
		randomDoubleBattleMoves: ["wish", "softboiled", "protect", "toxic", "aromatherapy", "seismictoss", "helpinghand", "thunderwave", "flamethrower", "icebeam"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	tangelagen6: {
		tier: "Gen6 PU",
		doublesTier: "LC Uber",
	},
	tangrowthgen6: {
		randomBattleMoves: ["gigadrain", "leafstorm", "knockoff", "earthquake", "hiddenpowerfire", "rockslide", "sleeppowder", "synthesis"],
		randomDoubleBattleMoves: ["gigadrain", "sleeppowder", "hiddenpowerice", "leechseed", "knockoff", "ragepowder", "focusblast", "protect", "powerwhip", "earthquake"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	kangaskhangen6: {
		randomBattleMoves: ["return", "suckerpunch", "earthquake", "drainpunch", "crunch", "fakeout"],
		randomDoubleBattleMoves: ["fakeout", "return", "suckerpunch", "earthquake", "doubleedge", "drainpunch", "crunch", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	kangaskhanmegagen6: {
		randomBattleMoves: ["fakeout", "return", "suckerpunch", "earthquake", "poweruppunch", "crunch"],
		randomDoubleBattleMoves: ["fakeout", "return", "suckerpunch", "earthquake", "doubleedge", "poweruppunch", "drainpunch", "crunch", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DOU",
	},
	horseagen6: {
		tier: "Gen6 LC",
	},
	seadragen6: {
		tier: "Gen6 NFE",
	},
	kingdragen6: {
		randomBattleMoves: ["raindance", "hydropump", "dracometeor", "icebeam", "dragondance", "waterfall", "outrage"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "focusenergy", "dracometeor", "dragonpulse", "muddywater", "protect"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	goldeengen6: {
		tier: "Gen6 LC",
	},
	seakinggen6: {
		randomBattleMoves: ["waterfall", "megahorn", "knockoff", "drillrun", "scald", "icebeam"],
		randomDoubleBattleMoves: ["waterfall", "surf", "megahorn", "knockoff", "drillrun", "icebeam", "icywind", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	staryugen6: {
		tier: "Gen6 LC",
	},
	starmiegen6: {
		randomBattleMoves: ["thunderbolt", "icebeam", "rapidspin", "recover", "psyshock", "scald", "hydropump"],
		randomDoubleBattleMoves: ["surf", "thunderbolt", "icebeam", "protect", "recover", "psychic", "psyshock", "scald", "hydropump"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	mimejrgen6: {
		tier: "Gen6 LC",
	},
	mrmimegen6: {
		randomBattleMoves: ["nastyplot", "psyshock", "dazzlinggleam", "shadowball", "focusblast", "healingwish", "encore"],
		randomDoubleBattleMoves: ["fakeout", "thunderwave", "hiddenpowerfighting", "teeterdance", "thunderbolt", "encore", "icywind", "protect", "wideguard", "dazzlinggleam"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	scythergen6: {
		randomBattleMoves: ["swordsdance", "roost", "bugbite", "quickattack", "brickbreak", "aerialace", "uturn", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "protect", "bugbite", "quickattack", "brickbreak", "aerialace", "feint", "uturn", "knockoff"],
		tier: "Gen6 NU",
		doublesTier: "LC Uber",
	},
	scizorgen6: {
		randomBattleMoves: ["swordsdance", "bulletpunch", "bugbite", "superpower", "uturn", "pursuit", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "roost", "bulletpunch", "bugbite", "superpower", "uturn", "protect", "feint", "knockoff"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	scizormegagen6: {
		randomBattleMoves: ["swordsdance", "roost", "bulletpunch", "bugbite", "superpower", "uturn", "defog", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "roost", "bulletpunch", "bugbite", "superpower", "uturn", "protect", "feint", "knockoff"],
		tier: "Gen6 OU",
		doublesTier: "(DOU)",
	},
	smoochumgen6: {
		tier: "Gen6 LC",
	},
	jynxgen6: {
		randomBattleMoves: ["icebeam", "psychic", "focusblast", "trick", "nastyplot", "lovelykiss", "substitute", "psyshock"],
		randomDoubleBattleMoves: ["icebeam", "psychic", "hiddenpowerfighting", "shadowball", "protect", "lovelykiss", "substitute", "psyshock"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	elekidgen6: {
		tier: "Gen6 LC",
	},
	electabuzzgen6: {
		tier: "Gen6 NFE",
	},
	electiviregen6: {
		randomBattleMoves: ["wildcharge", "crosschop", "icepunch", "flamethrower", "earthquake", "voltswitch"],
		randomDoubleBattleMoves: ["wildcharge", "crosschop", "icepunch", "substitute", "flamethrower", "earthquake", "protect", "followme"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	magbygen6: {
		tier: "Gen6 LC",
	},
	magmargen6: {
		tier: "Gen6 NFE",
	},
	magmortargen6: {
		randomBattleMoves: ["fireblast", "focusblast", "hiddenpowergrass", "hiddenpowerice", "thunderbolt", "earthquake", "substitute"],
		randomDoubleBattleMoves: ["fireblast", "taunt", "focusblast", "hiddenpowergrass", "hiddenpowerice", "thunderbolt", "heatwave", "willowisp", "protect", "followme"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	pinsirgen6: {
		randomBattleMoves: ["earthquake", "xscissor", "closecombat", "stoneedge", "stealthrock", "knockoff"],
		randomDoubleBattleMoves: ["protect", "swordsdance", "xscissor", "earthquake", "closecombat", "substitute", "rockslide"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	pinsirmegagen6: {
		randomBattleMoves: ["swordsdance", "earthquake", "closecombat", "quickattack", "return"],
		randomDoubleBattleMoves: ["feint", "protect", "swordsdance", "earthquake", "closecombat", "substitute", "quickattack", "return", "rockslide"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	taurosgen6: {
		randomBattleMoves: ["bodyslam", "earthquake", "zenheadbutt", "rockslide", "doubleedge"],
		randomDoubleBattleMoves: ["return", "earthquake", "zenheadbutt", "rockslide", "stoneedge", "protect", "doubleedge"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	magikarpgen6: {
		tier: "Gen6 LC",
	},
	gyaradosgen6: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "bounce", "rest", "sleeptalk", "dragontail", "stoneedge", "substitute"],
		randomDoubleBattleMoves: ["dragondance", "waterfall", "earthquake", "bounce", "taunt", "protect", "thunderwave", "stoneedge", "substitute", "icefang"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	gyaradosmegagen6: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "substitute", "icefang", "crunch"],
		randomDoubleBattleMoves: ["dragondance", "waterfall", "earthquake", "bounce", "taunt", "protect", "thunderwave", "stoneedge", "substitute", "icefang"],
		tier: "Gen6 UUBL",
		doublesTier: "(DUU)",
	},
	laprasgen6: {
		randomBattleMoves: ["icebeam", "thunderbolt", "healbell", "toxic", "hydropump", "substitute"],
		randomDoubleBattleMoves: ["icebeam", "thunderbolt", "healbell", "hydropump", "surf", "substitute", "protect", "iceshard", "icywind"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	dittogen6: {
		randomBattleMoves: ["transform"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	eeveegen6: {
		tier: "Gen6 LC",
	},
	vaporeongen6: {
		randomBattleMoves: ["wish", "protect", "scald", "roar", "icebeam", "healbell"],
		randomDoubleBattleMoves: ["helpinghand", "wish", "protect", "scald", "muddywater", "icebeam", "toxic", "hydropump"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	jolteongen6: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "hiddenpowerice", "shadowball", "signalbeam"],
		randomDoubleBattleMoves: ["thunderbolt", "voltswitch", "hiddenpowergrass", "hiddenpowerice", "helpinghand", "protect", "substitute", "signalbeam"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	flareongen6: {
		randomBattleMoves: ["flamecharge", "facade", "flareblitz", "superpower", "quickattack"],
		randomDoubleBattleMoves: ["flamecharge", "facade", "flareblitz", "superpower", "wish", "protect", "helpinghand"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	espeongen6: {
		randomBattleMoves: ["psychic", "psyshock", "substitute", "shadowball", "calmmind", "morningsun", "dazzlinggleam"],
		randomDoubleBattleMoves: ["psychic", "psyshock", "substitute", "wish", "shadowball", "hiddenpowerfighting", "helpinghand", "protect", "dazzlinggleam"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	umbreongen6: {
		randomBattleMoves: ["wish", "protect", "healbell", "toxic", "foulplay"],
		randomDoubleBattleMoves: ["moonlight", "wish", "protect", "healbell", "snarl", "foulplay", "helpinghand"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	leafeongen6: {
		randomBattleMoves: ["swordsdance", "leafblade", "healbell", "xscissor", "synthesis", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "leafblade", "substitute", "xscissor", "protect", "helpinghand", "knockoff"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	glaceongen6: {
		randomBattleMoves: ["icebeam", "hiddenpowerground", "shadowball", "healbell", "wish", "protect", "toxic"],
		randomDoubleBattleMoves: ["icebeam", "hiddenpowerground", "shadowball", "wish", "protect", "healbell", "helpinghand"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	porygongen6: {
		tier: "Gen6 LC",
	},
	porygon2gen6: {
		randomBattleMoves: ["triattack", "icebeam", "discharge", "recover", "toxic"],
		randomDoubleBattleMoves: ["triattack", "icebeam", "discharge", "shadowball", "protect", "recover"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	porygonzgen6: {
		randomBattleMoves: ["triattack", "darkpulse", "icebeam", "thunderbolt", "agility", "trick", "nastyplot"],
		randomDoubleBattleMoves: ["protect", "triattack", "darkpulse", "hiddenpowerfighting", "agility", "trick", "nastyplot"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	omanytegen6: {
		tier: "Gen6 LC",
	},
	omastargen6: {
		randomBattleMoves: ["shellsmash", "scald", "icebeam", "earthpower", "spikes", "stealthrock", "hydropump"],
		randomDoubleBattleMoves: ["shellsmash", "muddywater", "icebeam", "earthpower", "hiddenpowerelectric", "protect", "hydropump"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	kabutogen6: {
		tier: "Gen6 LC",
	},
	kabutopsgen6: {
		randomBattleMoves: ["aquajet", "stoneedge", "rapidspin", "swordsdance", "waterfall", "knockoff"],
		randomDoubleBattleMoves: ["aquajet", "stoneedge", "protect", "rockslide", "swordsdance", "waterfall", "superpower", "knockoff"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	aerodactylgen6: {
		randomBattleMoves: ["stealthrock", "taunt", "defog", "roost", "stoneedge", "earthquake", "doubleedge", "pursuit"],
		randomDoubleBattleMoves: ["wideguard", "taunt", "stoneedge", "rockslide", "earthquake", "aquatail", "protect", "icefang", "skydrop", "tailwind"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	aerodactylmegagen6: {
		randomBattleMoves: ["honeclaws", "stoneedge", "aerialace", "aquatail", "earthquake", "firefang", "roost"],
		randomDoubleBattleMoves: ["wideguard", "taunt", "stoneedge", "rockslide", "earthquake", "ironhead", "aerialace", "protect", "icefang", "skydrop", "tailwind"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	munchlaxgen6: {
		tier: "Gen6 LC",
	},
	snorlaxgen6: {
		randomBattleMoves: ["rest", "curse", "sleeptalk", "bodyslam", "earthquake", "return", "firepunch", "crunch", "pursuit", "whirlwind"],
		randomDoubleBattleMoves: ["curse", "protect", "bodyslam", "earthquake", "return", "firepunch", "icepunch", "crunch", "selfdestruct"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	articunogen6: {
		randomBattleMoves: ["icebeam", "roost", "freezedry", "toxic", "substitute", "hurricane"],
		randomDoubleBattleMoves: ["freezedry", "roost", "protect", "substitute", "hurricane", "tailwind"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	zapdosgen6: {
		randomBattleMoves: ["thunderbolt", "heatwave", "hiddenpowerice", "roost", "toxic", "uturn", "defog"],
		randomDoubleBattleMoves: ["thunderbolt", "heatwave", "hiddenpowergrass", "hiddenpowerice", "tailwind", "protect", "discharge"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	moltresgen6: {
		randomBattleMoves: ["fireblast", "hiddenpowergrass", "roost", "substitute", "toxic", "willowisp", "hurricane"],
		randomDoubleBattleMoves: ["fireblast", "hiddenpowergrass", "airslash", "roost", "substitute", "protect", "uturn", "willowisp", "hurricane", "heatwave", "tailwind"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	dratinigen6: {
		tier: "Gen6 LC",
	},
	dragonairgen6: {
		tier: "Gen6 NFE",
	},
	dragonitegen6: {
		randomBattleMoves: ["dragondance", "outrage", "firepunch", "extremespeed", "earthquake", "roost"],
		randomDoubleBattleMoves: ["dragondance", "firepunch", "extremespeed", "dragonclaw", "earthquake", "roost", "substitute", "superpower", "dracometeor", "protect", "skydrop"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	mewtwogen6: {
		randomBattleMoves: ["psystrike", "aurasphere", "fireblast", "icebeam", "calmmind", "recover"],
		randomDoubleBattleMoves: ["psystrike", "aurasphere", "fireblast", "icebeam", "calmmind", "substitute", "recover", "thunderbolt", "willowisp", "taunt", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	mewtwomegaxgen6: {
		randomBattleMoves: ["bulkup", "drainpunch", "zenheadbutt", "stoneedge", "taunt", "icebeam"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	mewtwomegaygen6: {
		randomBattleMoves: ["psystrike", "aurasphere", "shadowball", "fireblast", "icebeam", "calmmind", "recover", "willowisp", "taunt"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	mewgen6: {
		randomBattleMoves: ["defog", "roost", "willowisp", "knockoff", "taunt", "icebeam", "earthpower", "aurasphere", "stealthrock", "nastyplot", "psyshock"],
		randomDoubleBattleMoves: ["taunt", "willowisp", "transform", "roost", "psyshock", "nastyplot", "aurasphere", "fireblast", "icebeam", "thunderbolt", "protect", "fakeout", "helpinghand", "tailwind"],
		tier: "Gen6 OU",
		doublesTier: "DUU",
	},
	chikoritagen6: {
		tier: "Gen6 LC",
	},
	bayleefgen6: {
		tier: "Gen6 NFE",
	},
	meganiumgen6: {
		randomBattleMoves: ["reflect", "lightscreen", "aromatherapy", "leechseed", "toxic", "gigadrain", "synthesis", "dragontail"],
		randomDoubleBattleMoves: ["reflect", "lightscreen", "aromatherapy", "leechseed", "petalblizzard", "gigadrain", "synthesis", "dragontail", "healpulse", "toxic", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	cyndaquilgen6: {
		tier: "Gen6 LC",
	},
	quilavagen6: {
		tier: "Gen6 NFE",
	},
	typhlosiongen6: {
		randomBattleMoves: ["eruption", "fireblast", "hiddenpowergrass", "extrasensory", "focusblast"],
		randomDoubleBattleMoves: ["eruption", "fireblast", "hiddenpowergrass", "extrasensory", "focusblast", "heatwave", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	totodilegen6: {
		tier: "Gen6 LC",
	},
	croconawgen6: {
		tier: "Gen6 NFE",
	},
	feraligatrgen6: {
		randomBattleMoves: ["aquajet", "waterfall", "crunch", "icepunch", "dragondance", "swordsdance", "earthquake"],
		randomDoubleBattleMoves: ["aquajet", "waterfall", "crunch", "icepunch", "dragondance", "swordsdance", "earthquake", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	sentretgen6: {
		tier: "Gen6 LC",
	},
	furretgen6: {
		randomBattleMoves: ["uturn", "trick", "aquatail", "firepunch", "knockoff", "doubleedge"],
		randomDoubleBattleMoves: ["uturn", "suckerpunch", "icepunch", "firepunch", "knockoff", "doubleedge", "superfang", "followme", "helpinghand", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	hoothootgen6: {
		tier: "Gen6 LC",
	},
	noctowlgen6: {
		randomBattleMoves: ["roost", "whirlwind", "airslash", "nightshade", "toxic", "defog"],
		randomDoubleBattleMoves: ["roost", "tailwind", "airslash", "hypervoice", "heatwave", "protect", "hypnosis"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	ledybagen6: {
		tier: "Gen6 LC",
	},
	lediangen6: {
		randomBattleMoves: ["roost", "lightscreen", "encore", "reflect", "knockoff", "toxic", "uturn"],
		randomDoubleBattleMoves: ["protect", "lightscreen", "encore", "reflect", "knockoff", "bugbuzz", "uturn", "tailwind"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	spinarakgen6: {
		tier: "Gen6 LC",
	},
	ariadosgen6: {
		randomBattleMoves: ["megahorn", "toxicspikes", "poisonjab", "suckerpunch", "stickyweb"],
		randomDoubleBattleMoves: ["protect", "megahorn", "stringshot", "poisonjab", "stickyweb", "ragepowder"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	chinchougen6: {
		tier: "Gen6 LC",
	},
	lanturngen6: {
		randomBattleMoves: ["voltswitch", "hiddenpowergrass", "hydropump", "icebeam", "thunderwave", "scald", "thunderbolt", "healbell", "toxic"],
		randomDoubleBattleMoves: ["thunderbolt", "hiddenpowergrass", "hydropump", "icebeam", "thunderwave", "scald", "discharge", "protect", "surf"],
		tier: "Gen6 NU",
		doublesTier: "DUU",
	},
	togepigen6: {
		tier: "Gen6 LC",
	},
	togeticgen6: {
		tier: "Gen6 RU",
		doublesTier: "DUU",
	},
	togekissgen6: {
		randomBattleMoves: ["roost", "thunderwave", "nastyplot", "airslash", "aurasphere", "healbell", "defog"],
		randomDoubleBattleMoves: ["roost", "thunderwave", "nastyplot", "airslash", "followme", "dazzlinggleam", "tailwind", "protect"],
		tier: "Gen6 UUBL",
		doublesTier: "DOU",
	},
	natugen6: {
		tier: "Gen6 LC",
	},
	xatugen6: {
		randomBattleMoves: ["thunderwave", "toxic", "roost", "psychic", "uturn", "reflect", "calmmind", "heatwave"],
		randomDoubleBattleMoves: ["thunderwave", "tailwind", "roost", "psychic", "uturn", "reflect", "lightscreen", "grassknot", "heatwave", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	mareepgen6: {
		tier: "Gen6 LC",
	},
	flaaffygen6: {
		tier: "Gen6 NFE",
	},
	ampharosgen6: {
		randomBattleMoves: ["voltswitch", "reflect", "lightscreen", "focusblast", "thunderbolt", "toxic", "healbell", "hiddenpowerice"],
		randomDoubleBattleMoves: ["focusblast", "hiddenpowerice", "hiddenpowergrass", "thunderbolt", "discharge", "dragonpulse", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	ampharosmegagen6: {
		randomBattleMoves: ["voltswitch", "focusblast", "agility", "thunderbolt", "healbell", "dragonpulse"],
		randomDoubleBattleMoves: ["focusblast", "hiddenpowerice", "hiddenpowergrass", "thunderbolt", "discharge", "dragonpulse", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	azurillgen6: {
		tier: "Gen6 LC",
	},
	marillgen6: {
		tier: "Gen6 NFE",
	},
	azumarillgen6: {
		randomBattleMoves: ["waterfall", "aquajet", "playrough", "superpower", "bellydrum", "knockoff"],
		randomDoubleBattleMoves: ["waterfall", "aquajet", "playrough", "superpower", "bellydrum", "knockoff", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	bonslygen6: {
		tier: "Gen6 LC",
	},
	sudowoodogen6: {
		randomBattleMoves: ["stoneedge", "earthquake", "suckerpunch", "woodhammer", "toxic", "stealthrock"],
		randomDoubleBattleMoves: ["stoneedge", "earthquake", "suckerpunch", "woodhammer", "explosion", "stealthrock", "rockslide", "helpinghand", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	hoppipgen6: {
		tier: "Gen6 LC",
	},
	skiploomgen6: {
		tier: "Gen6 NFE",
	},
	jumpluffgen6: {
		randomBattleMoves: ["swordsdance", "sleeppowder", "uturn", "encore", "toxic", "acrobatics", "leechseed", "seedbomb", "substitute"],
		randomDoubleBattleMoves: ["encore", "sleeppowder", "uturn", "helpinghand", "leechseed", "gigadrain", "ragepowder", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	aipomgen6: {
		tier: "Gen6 LC",
	},
	ambipomgen6: {
		randomBattleMoves: ["fakeout", "return", "knockoff", "uturn", "switcheroo", "seedbomb", "lowkick"],
		randomDoubleBattleMoves: ["fakeout", "return", "knockoff", "uturn", "doublehit", "icepunch", "lowkick", "protect"],
		tier: "Gen6 RU",
		doublesTier: "DUU",
	},
	sunkerngen6: {
		tier: "Gen6 LC",
	},
	sunfloragen6: {
		randomBattleMoves: ["sunnyday", "gigadrain", "solarbeam", "hiddenpowerfire", "earthpower"],
		randomDoubleBattleMoves: ["sunnyday", "gigadrain", "solarbeam", "hiddenpowerfire", "hiddenpowerice", "earthpower", "protect", "encore"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	yanmagen6: {
		tier: "Gen6 LC Uber",
	},
	yanmegagen6: {
		randomBattleMoves: ["bugbuzz", "airslash", "uturn", "protect", "gigadrain"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	woopergen6: {
		tier: "Gen6 LC",
	},
	quagsiregen6: {
		randomBattleMoves: ["recover", "earthquake", "scald", "toxic", "encore", "icebeam"],
		randomDoubleBattleMoves: ["icywind", "earthquake", "waterfall", "scald", "rockslide", "curse", "yawn", "icepunch", "protect"],
		tier: "Gen6 PUBL",
		doublesTier: "(DUU)",
	},
	murkrowgen6: {
		tier: "Gen6 LC Uber",
	},
	honchkrowgen6: {
		randomBattleMoves: ["substitute", "superpower", "suckerpunch", "bravebird", "roost", "heatwave", "pursuit"],
		randomDoubleBattleMoves: ["substitute", "superpower", "suckerpunch", "bravebird", "roost", "heatwave", "protect"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	misdreavusgen6: {
		tier: "Gen6 PU",
		doublesTier: "LC Uber",
	},
	mismagiusgen6: {
		randomBattleMoves: ["nastyplot", "substitute", "willowisp", "shadowball", "thunderbolt", "dazzlinggleam", "taunt", "painsplit", "destinybond"],
		randomDoubleBattleMoves: ["nastyplot", "substitute", "willowisp", "shadowball", "thunderbolt", "dazzlinggleam", "taunt", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	unowngen6: {
		randomBattleMoves: ["hiddenpowerpsychic"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	wynautgen6: {
		tier: "Gen6 LC",
	},
	wobbuffetgen6: {
		randomBattleMoves: ["counter", "mirrorcoat", "encore", "destinybond", "safeguard"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	girafariggen6: {
		randomBattleMoves: ["psychic", "psyshock", "thunderbolt", "nastyplot", "substitute", "hypervoice"],
		randomDoubleBattleMoves: ["psychic", "psyshock", "thunderbolt", "nastyplot", "protect", "agility", "hypervoice"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	pinecogen6: {
		tier: "Gen6 LC",
	},
	forretressgen6: {
		randomBattleMoves: ["rapidspin", "toxic", "spikes", "voltswitch", "stealthrock", "gyroball"],
		randomDoubleBattleMoves: ["rockslide", "drillrun", "toxic", "voltswitch", "stealthrock", "gyroball", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	dunsparcegen6: {
		randomBattleMoves: ["bodyslam", "rockslide", "bite", "coil", "glare", "headbutt", "roost"],
		randomDoubleBattleMoves: ["coil", "rockslide", "bite", "headbutt", "glare", "bodyslam", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	gligargen6: {
		randomBattleMoves: ["stealthrock", "toxic", "roost", "defog", "earthquake", "uturn", "knockoff"],
		tier: "Gen6 UU",
		doublesTier: "LC Uber",
	},
	gliscorgen6: {
		randomBattleMoves: ["roost", "taunt", "earthquake", "protect", "toxic", "stealthrock", "knockoff", "uturn"],
		randomDoubleBattleMoves: ["tailwind", "substitute", "taunt", "earthquake", "protect", "stoneedge", "knockoff"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	snubbullgen6: {
		tier: "Gen6 LC",
	},
	granbullgen6: {
		randomBattleMoves: ["thunderwave", "playrough", "crunch", "earthquake", "healbell"],
		randomDoubleBattleMoves: ["thunderwave", "playrough", "crunch", "earthquake", "snarl", "rockslide", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	qwilfishgen6: {
		randomBattleMoves: ["toxicspikes", "waterfall", "spikes", "painsplit", "thunderwave", "taunt", "destinybond"],
		randomDoubleBattleMoves: ["poisonjab", "waterfall", "swordsdance", "protect", "thunderwave", "taunt", "destinybond"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	shucklegen6: {
		randomBattleMoves: ["toxic", "encore", "stealthrock", "knockoff", "stickyweb", "infestation"],
		randomDoubleBattleMoves: ["encore", "stealthrock", "knockoff", "stickyweb", "guardsplit", "powersplit", "toxic", "helpinghand"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	heracrossgen6: {
		randomBattleMoves: ["closecombat", "megahorn", "stoneedge", "swordsdance", "knockoff", "earthquake"],
		randomDoubleBattleMoves: ["closecombat", "megahorn", "stoneedge", "swordsdance", "knockoff", "earthquake", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	heracrossmegagen6: {
		randomBattleMoves: ["closecombat", "pinmissile", "rockblast", "swordsdance", "bulletseed", "substitute"],
		randomDoubleBattleMoves: ["closecombat", "pinmissile", "rockblast", "swordsdance", "bulletseed", "knockoff", "earthquake", "protect"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	sneaselgen6: {
		tier: "Gen6 RU",
		doublesTier: "LC Uber",
	},
	weavilegen6: {
		randomBattleMoves: ["iceshard", "iciclecrash", "knockoff", "pursuit", "swordsdance", "lowkick"],
		randomDoubleBattleMoves: ["iceshard", "iciclecrash", "knockoff", "fakeout", "swordsdance", "lowkick", "taunt", "protect", "feint"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	teddiursagen6: {
		tier: "Gen6 LC",
	},
	ursaringgen6: {
		randomBattleMoves: ["swordsdance", "facade", "closecombat", "crunch", "protect"],
		randomDoubleBattleMoves: ["swordsdance", "facade", "closecombat", "earthquake", "crunch", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	slugmagen6: {
		tier: "Gen6 LC",
	},
	magcargogen6: {
		randomBattleMoves: ["recover", "lavaplume", "toxic", "hiddenpowergrass", "stealthrock", "fireblast", "earthpower", "shellsmash", "ancientpower"],
		randomDoubleBattleMoves: ["protect", "heatwave", "willowisp", "shellsmash", "hiddenpowergrass", "ancientpower", "stealthrock", "fireblast", "earthpower"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	swinubgen6: {
		tier: "Gen6 LC",
	},
	piloswinegen6: {
		tier: "Gen6 NU",
		doublesTier: "NFE",
	},
	mamoswinegen6: {
		randomBattleMoves: ["iceshard", "earthquake", "endeavor", "iciclecrash", "stealthrock", "superpower", "knockoff"],
		randomDoubleBattleMoves: ["iceshard", "earthquake", "rockslide", "iciclecrash", "protect", "superpower", "knockoff"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	corsolagen6: {
		randomBattleMoves: ["recover", "toxic", "powergem", "scald", "stealthrock"],
		randomDoubleBattleMoves: ["protect", "icywind", "powergem", "scald", "stealthrock", "earthpower", "icebeam"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	remoraidgen6: {
		tier: "Gen6 LC",
	},
	octillerygen6: {
		randomBattleMoves: ["hydropump", "fireblast", "icebeam", "energyball", "rockblast", "gunkshot", "scald"],
		randomDoubleBattleMoves: ["hydropump", "surf", "fireblast", "icebeam", "energyball", "chargebeam", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	delibirdgen6: {
		randomBattleMoves: ["spikes", "rapidspin", "icywind", "freezedry", "destinybond"],
		randomDoubleBattleMoves: ["fakeout", "iceshard", "icepunch", "aerialace", "brickbreak", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	mantykegen6: {
		tier: "Gen6 LC",
	},
	mantinegen6: {
		randomBattleMoves: ["scald", "airslash", "rest", "sleeptalk", "toxic", "defog"],
		randomDoubleBattleMoves: ["raindance", "hydropump", "scald", "airslash", "icebeam", "tailwind", "wideguard", "helpinghand", "protect", "surf"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	skarmorygen6: {
		randomBattleMoves: ["whirlwind", "bravebird", "roost", "spikes", "stealthrock", "defog"],
		randomDoubleBattleMoves: ["skydrop", "bravebird", "tailwind", "taunt", "feint", "protect", "ironhead"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	houndourgen6: {
		tier: "Gen6 LC",
	},
	houndoomgen6: {
		randomBattleMoves: ["nastyplot", "darkpulse", "suckerpunch", "fireblast", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["nastyplot", "darkpulse", "suckerpunch", "heatwave", "hiddenpowerfighting", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	houndoommegagen6: {
		randomBattleMoves: ["nastyplot", "darkpulse", "taunt", "fireblast", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["nastyplot", "darkpulse", "taunt", "heatwave", "hiddenpowergrass", "protect"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	phanpygen6: {
		tier: "Gen6 LC",
	},
	donphangen6: {
		randomBattleMoves: ["stealthrock", "rapidspin", "iceshard", "earthquake", "knockoff", "stoneedge"],
		randomDoubleBattleMoves: ["stealthrock", "knockoff", "iceshard", "earthquake", "rockslide", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	stantlergen6: {
		randomBattleMoves: ["doubleedge", "megahorn", "jumpkick", "earthquake", "suckerpunch"],
		randomDoubleBattleMoves: ["return", "megahorn", "jumpkick", "earthquake", "suckerpunch", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	smearglegen6: {
		randomBattleMoves: ["spore", "stealthrock", "destinybond", "whirlwind", "stickyweb"],
		randomDoubleBattleMoves: ["spore", "fakeout", "wideguard", "helpinghand", "followme", "tailwind", "kingsshield", "transform"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	miltankgen6: {
		randomBattleMoves: ["milkdrink", "stealthrock", "bodyslam", "healbell", "curse", "earthquake", "toxic"],
		randomDoubleBattleMoves: ["protect", "helpinghand", "bodyslam", "healbell", "curse", "earthquake", "thunderwave"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	raikougen6: {
		randomBattleMoves: ["thunderbolt", "hiddenpowerice", "aurasphere", "calmmind", "substitute", "voltswitch", "extrasensory"],
		randomDoubleBattleMoves: ["thunderbolt", "hiddenpowerice", "extrasensory", "calmmind", "substitute", "snarl", "protect"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	enteigen6: {
		randomBattleMoves: ["extremespeed", "flareblitz", "bulldoze", "stoneedge", "sacredfire"],
		randomDoubleBattleMoves: ["extremespeed", "flareblitz", "ironhead", "bulldoze", "stoneedge", "sacredfire", "protect"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	suicunegen6: {
		randomBattleMoves: ["hydropump", "icebeam", "scald", "hiddenpowergrass", "rest", "sleeptalk", "calmmind"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "scald", "hiddenpowergrass", "snarl", "tailwind", "protect", "calmmind"],
		tier: "Gen6 UU",
		doublesTier: "DOU",
	},
	larvitargen6: {
		tier: "Gen6 LC",
	},
	pupitargen6: {
		tier: "Gen6 NFE",
	},
	tyranitargen6: {
		randomBattleMoves: ["crunch", "stoneedge", "pursuit", "earthquake", "fireblast", "icebeam", "stealthrock"],
		randomDoubleBattleMoves: ["crunch", "stoneedge", "rockslide", "earthquake", "firepunch", "icepunch", "stealthrock", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	tyranitarmegagen6: {
		randomBattleMoves: ["crunch", "stoneedge", "earthquake", "icepunch", "dragondance"],
		randomDoubleBattleMoves: ["crunch", "stoneedge", "earthquake", "icepunch", "dragondance", "rockslide", "protect"],
		tier: "Gen6 (OU)",
		doublesTier: "(DOU)",
	},
	lugiagen6: {
		randomBattleMoves: ["toxic", "roost", "substitute", "whirlwind", "aeroblast", "earthquake"],
		randomDoubleBattleMoves: ["aeroblast", "roost", "substitute", "tailwind", "icebeam", "psychic", "calmmind", "skydrop", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	hoohgen6: {
		randomBattleMoves: ["substitute", "sacredfire", "bravebird", "earthquake", "roost", "toxic", "flamecharge"],
		randomDoubleBattleMoves: ["substitute", "sacredfire", "bravebird", "earthquake", "roost", "toxic", "tailwind", "skydrop", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	celebigen6: {
		randomBattleMoves: ["nastyplot", "psychic", "gigadrain", "recover", "earthpower", "hiddenpowerfire", "leafstorm", "uturn", "thunderwave"],
		randomDoubleBattleMoves: ["protect", "psychic", "gigadrain", "leechseed", "recover", "earthpower", "hiddenpowerfire", "nastyplot", "leafstorm", "uturn", "thunderwave"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	treeckogen6: {
		tier: "Gen6 LC",
	},
	grovylegen6: {
		tier: "Gen6 NFE",
	},
	sceptilegen6: {
		randomBattleMoves: ["gigadrain", "leafstorm", "hiddenpowerice", "focusblast", "hiddenpowerflying"],
		randomDoubleBattleMoves: ["substitute", "gigadrain", "leafstorm", "hiddenpowerice", "focusblast", "hiddenpowerfire", "protect"],
		tier: "Gen6 NUBL",
		doublesTier: "(DUU)",
	},
	sceptilemegagen6: {
		randomBattleMoves: ["substitute", "gigadrain", "dragonpulse", "focusblast", "swordsdance", "outrage", "leafblade", "earthquake", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["substitute", "gigadrain", "leafstorm", "hiddenpowerice", "focusblast", "dragonpulse", "hiddenpowerfire", "protect"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	torchicgen6: {
		tier: "Gen6 LC",
	},
	combuskengen6: {
		tier: "Gen6 PU",
		doublesTier: "NFE",
	},
	blazikengen6: {
		randomBattleMoves: ["fireblast", "highjumpkick", "protect", "knockoff", "hiddenpowerice"],
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	blazikenmegagen6: {
		randomBattleMoves: ["flareblitz", "highjumpkick", "protect", "swordsdance", "stoneedge", "knockoff"],
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	mudkipgen6: {
		tier: "Gen6 LC",
	},
	marshtompgen6: {
		tier: "Gen6 NFE",
	},
	swampertgen6: {
		randomBattleMoves: ["stealthrock", "earthquake", "scald", "icebeam", "roar", "toxic", "protect"],
		randomDoubleBattleMoves: ["waterfall", "earthquake", "icebeam", "stealthrock", "wideguard", "scald", "rockslide", "muddywater", "protect", "icywind"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	swampertmegagen6: {
		randomBattleMoves: ["raindance", "waterfall", "earthquake", "icepunch", "superpower"],
		randomDoubleBattleMoves: ["waterfall", "earthquake", "raindance", "icepunch", "superpower", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	poochyenagen6: {
		tier: "Gen6 LC",
	},
	mightyenagen6: {
		randomBattleMoves: ["crunch", "suckerpunch", "playrough", "firefang", "irontail"],
		randomDoubleBattleMoves: ["suckerpunch", "crunch", "playrough", "firefang", "taunt", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	zigzagoongen6: {
		tier: "Gen6 LC",
	},
	linoonegen6: {
		randomBattleMoves: ["bellydrum", "extremespeed", "seedbomb", "shadowclaw"],
		randomDoubleBattleMoves: ["bellydrum", "extremespeed", "seedbomb", "protect", "shadowclaw"],
		tier: "Gen6 PUBL",
		doublesTier: "(DUU)",
	},
	wurmplegen6: {
		tier: "Gen6 LC",
	},
	silcoongen6: {
		tier: "Gen6 NFE",
	},
	beautiflygen6: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "psychic", "energyball", "hiddenpowerfighting"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "gigadrain", "hiddenpowerrock", "aircutter", "tailwind", "stringshot", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	cascoongen6: {
		tier: "Gen6 NFE",
	},
	dustoxgen6: {
		randomBattleMoves: ["roost", "defog", "bugbuzz", "sludgebomb", "quiverdance", "uturn"],
		randomDoubleBattleMoves: ["tailwind", "stringshot", "strugglebug", "bugbuzz", "protect", "sludgebomb", "quiverdance", "shadowball"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	lotadgen6: {
		tier: "Gen6 LC",
	},
	lombregen6: {
		tier: "Gen6 NFE",
	},
	ludicologen6: {
		randomBattleMoves: ["raindance", "hydropump", "scald", "gigadrain", "icebeam", "focusblast"],
		randomDoubleBattleMoves: ["raindance", "hydropump", "surf", "gigadrain", "icebeam", "fakeout", "protect"],
		tier: "Gen6 NU",
		doublesTier: "DOU",
	},
	seedotgen6: {
		tier: "Gen6 LC",
	},
	nuzleafgen6: {
		tier: "Gen6 NFE",
	},
	shiftrygen6: {
		randomBattleMoves: ["leafstorm", "swordsdance", "leafblade", "suckerpunch", "defog", "lowkick", "knockoff"],
		randomDoubleBattleMoves: ["leafstorm", "swordsdance", "leafblade", "suckerpunch", "knockoff", "lowkick", "fakeout", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	taillowgen6: {
		tier: "Gen6 LC",
	},
	swellowgen6: {
		randomBattleMoves: ["protect", "facade", "bravebird", "uturn", "quickattack"],
		randomDoubleBattleMoves: ["bravebird", "facade", "quickattack", "uturn", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	wingullgen6: {
		tier: "Gen6 LC",
	},
	pelippergen6: {
		randomBattleMoves: ["scald", "uturn", "hurricane", "toxic", "roost", "defog", "knockoff"],
		randomDoubleBattleMoves: ["scald", "surf", "hurricane", "wideguard", "protect", "tailwind", "knockoff"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	raltsgen6: {
		tier: "Gen6 LC",
	},
	kirliagen6: {
		tier: "Gen6 NFE",
	},
	gardevoirgen6: {
		randomBattleMoves: ["psychic", "thunderbolt", "focusblast", "shadowball", "moonblast", "calmmind", "substitute", "willowisp"],
		randomDoubleBattleMoves: ["psyshock", "focusblast", "shadowball", "moonblast", "taunt", "willowisp", "thunderbolt", "trickroom", "helpinghand", "protect", "dazzlinggleam"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	gardevoirmegagen6: {
		randomBattleMoves: ["calmmind", "hypervoice", "psyshock", "focusblast", "substitute", "taunt", "willowisp"],
		randomDoubleBattleMoves: ["psyshock", "focusblast", "shadowball", "calmmind", "thunderbolt", "hypervoice", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	galladegen6: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "shadowsneak", "closecombat", "zenheadbutt", "knockoff", "trick"],
		randomDoubleBattleMoves: ["closecombat", "trick", "stoneedge", "shadowsneak", "drainpunch", "icepunch", "zenheadbutt", "knockoff", "trickroom", "protect", "helpinghand"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	gallademegagen6: {
		randomBattleMoves: ["swordsdance", "closecombat", "drainpunch", "knockoff", "zenheadbutt", "substitute"],
		randomDoubleBattleMoves: ["closecombat", "stoneedge", "drainpunch", "icepunch", "zenheadbutt", "swordsdance", "knockoff", "protect"],
		tier: "Gen6 UUBL",
		doublesTier: "(DUU)",
	},
	surskitgen6: {
		tier: "Gen6 LC",
	},
	masqueraingen6: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "airslash", "hydropump", "stickyweb"],
		randomDoubleBattleMoves: ["hydropump", "bugbuzz", "airslash", "quiverdance", "tailwind", "roost", "strugglebug", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	shroomishgen6: {
		tier: "Gen6 LC",
	},
	breloomgen6: {
		randomBattleMoves: ["spore", "machpunch", "bulletseed", "rocktomb", "swordsdance"],
		randomDoubleBattleMoves: ["spore", "helpinghand", "machpunch", "bulletseed", "rocktomb", "protect", "drainpunch"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	slakothgen6: {
		tier: "Gen6 LC",
	},
	vigorothgen6: {
		tier: "Gen6 PUBL",
		doublesTier: "NFE",
	},
	slakinggen6: {
		randomBattleMoves: ["earthquake", "pursuit", "nightslash", "retaliate", "gigaimpact", "firepunch"],
		randomDoubleBattleMoves: ["earthquake", "nightslash", "doubleedge", "retaliate", "hammerarm", "rockslide"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	nincadagen6: {
		tier: "Gen6 LC",
	},
	ninjaskgen6: {
		randomBattleMoves: ["swordsdance", "aerialace", "nightslash", "xscissor", "uturn"],
		randomDoubleBattleMoves: ["swordsdance", "aerialace", "nightslash", "xscissor", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	shedinjagen6: {
		randomBattleMoves: ["swordsdance", "willowisp", "xscissor", "shadowsneak", "shadowclaw"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	whismurgen6: {
		tier: "Gen6 LC",
	},
	loudredgen6: {
		tier: "Gen6 NFE",
	},
	exploudgen6: {
		randomBattleMoves: ["boomburst", "fireblast", "icebeam", "surf", "focusblast"],
		randomDoubleBattleMoves: ["boomburst", "fireblast", "icebeam", "surf", "focusblast", "protect", "hypervoice"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	makuhitagen6: {
		tier: "Gen6 LC",
	},
	hariyamagen6: {
		randomBattleMoves: ["bulletpunch", "closecombat", "icepunch", "stoneedge", "bulkup", "knockoff"],
		randomDoubleBattleMoves: ["bulletpunch", "closecombat", "icepunch", "stoneedge", "fakeout", "knockoff", "helpinghand", "wideguard", "protect"],
		tier: "Gen6 NU",
		doublesTier: "DUU",
	},
	nosepassgen6: {
		tier: "Gen6 LC",
	},
	probopassgen6: {
		randomBattleMoves: ["stealthrock", "thunderwave", "toxic", "flashcannon", "earthpower", "voltswitch"],
		randomDoubleBattleMoves: ["stealthrock", "thunderwave", "helpinghand", "earthpower", "powergem", "wideguard", "protect", "voltswitch"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	skittygen6: {
		tier: "Gen6 LC",
	},
	delcattygen6: {
		randomBattleMoves: ["doubleedge", "suckerpunch", "wildcharge", "fakeout", "thunderwave", "healbell"],
		randomDoubleBattleMoves: ["doubleedge", "suckerpunch", "playrough", "wildcharge", "fakeout", "thunderwave", "protect", "helpinghand"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	sableyegen6: {
		randomBattleMoves: ["recover", "willowisp", "taunt", "toxic", "knockoff", "foulplay"],
		randomDoubleBattleMoves: ["recover", "willowisp", "taunt", "fakeout", "knockoff", "foulplay", "helpinghand", "snarl", "protect"],
		tier: "Gen6 RUBL",
		doublesTier: "DUU",
	},
	sableyemegagen6: {
		randomBattleMoves: ["recover", "willowisp", "darkpulse", "calmmind", "shadowball"],
		randomDoubleBattleMoves: ["fakeout", "knockoff", "darkpulse", "shadowball", "willowisp", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DUU",
	},
	mawilegen6: {
		randomBattleMoves: ["swordsdance", "ironhead", "stealthrock", "playrough", "suckerpunch", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "ironhead", "firefang", "substitute", "playrough", "suckerpunch", "knockoff", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	mawilemegagen6: {
		randomBattleMoves: ["swordsdance", "ironhead", "firefang", "substitute", "playrough", "suckerpunch", "knockoff", "focuspunch"],
		randomDoubleBattleMoves: ["swordsdance", "ironhead", "firefang", "substitute", "playrough", "suckerpunch", "knockoff", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	arongen6: {
		tier: "Gen6 LC",
	},
	lairongen6: {
		tier: "Gen6 NFE",
	},
	aggrongen6: {
		randomBattleMoves: ["autotomize", "headsmash", "earthquake", "lowkick", "heavyslam", "aquatail", "stealthrock"],
		randomDoubleBattleMoves: ["rockslide", "headsmash", "earthquake", "lowkick", "heavyslam", "aquatail", "stealthrock", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	aggronmegagen6: {
		randomBattleMoves: ["earthquake", "heavyslam", "rockslide", "stealthrock", "thunderwave", "roar", "toxic"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "lowkick", "heavyslam", "aquatail", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	medititegen6: {
		tier: "Gen6 LC Uber",
	},
	medichamgen6: {
		randomBattleMoves: ["highjumpkick", "drainpunch", "zenheadbutt", "icepunch", "bulletpunch"],
		randomDoubleBattleMoves: ["highjumpkick", "drainpunch", "zenheadbutt", "icepunch", "bulletpunch", "protect", "fakeout"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	medichammegagen6: {
		randomBattleMoves: ["highjumpkick", "zenheadbutt", "thunderpunch", "icepunch", "fakeout"],
		randomDoubleBattleMoves: ["highjumpkick", "drainpunch", "zenheadbutt", "icepunch", "bulletpunch", "protect", "fakeout"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	electrikegen6: {
		tier: "Gen6 LC",
	},
	manectricgen6: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat", "flamethrower"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat", "flamethrower", "snarl", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	manectricmegagen6: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat", "flamethrower", "snarl", "protect"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	pluslegen6: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "substitute", "hiddenpowerice", "encore"],
		randomDoubleBattleMoves: ["nastyplot", "thunderbolt", "substitute", "protect", "hiddenpowerice", "encore", "helpinghand"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	minungen6: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "substitute", "hiddenpowerice", "encore"],
		randomDoubleBattleMoves: ["nastyplot", "thunderbolt", "substitute", "protect", "hiddenpowerice", "encore", "helpinghand"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	volbeatgen6: {
		randomBattleMoves: ["uturn", "roost", "thunderwave", "encore", "tailwind"],
		randomDoubleBattleMoves: ["stringshot", "strugglebug", "helpinghand", "thunderwave", "encore", "tailwind", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	illumisegen6: {
		randomBattleMoves: ["uturn", "roost", "bugbuzz", "thunderwave", "encore", "wish"],
		randomDoubleBattleMoves: ["protect", "helpinghand", "bugbuzz", "encore", "thunderbolt", "tailwind", "uturn"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	budewgen6: {
		tier: "Gen6 LC",
	},
	roseliagen6: {
		tier: "Gen6 PU",
		doublesTier: "NFE",
	},
	roseradegen6: {
		randomBattleMoves: ["sludgebomb", "gigadrain", "sleeppowder", "leafstorm", "spikes", "toxicspikes", "synthesis", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["sludgebomb", "gigadrain", "sleeppowder", "leafstorm", "protect", "hiddenpowerfire"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	gulpingen6: {
		tier: "Gen6 LC",
	},
	swalotgen6: {
		randomBattleMoves: ["sludgebomb", "icebeam", "toxic", "yawn", "encore", "painsplit", "earthquake"],
		randomDoubleBattleMoves: ["sludgebomb", "icebeam", "protect", "yawn", "encore", "gunkshot", "earthquake"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	carvanhagen6: {
		tier: "Gen6 LC",
	},
	sharpedogen6: {
		randomBattleMoves: ["protect", "icebeam", "crunch", "earthquake", "waterfall"],
		randomDoubleBattleMoves: ["protect", "icebeam", "crunch", "earthquake", "waterfall", "destinybond"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	sharpedomegagen6: {
		randomBattleMoves: ["protect", "crunch", "waterfall", "icefang", "zenheadbutt", "destinybond"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	wailmergen6: {
		tier: "Gen6 LC",
	},
	wailordgen6: {
		randomBattleMoves: ["waterspout", "hydropump", "icebeam", "hiddenpowergrass", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["waterspout", "hydropump", "icebeam", "hiddenpowergrass", "hiddenpowerfire", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	numelgen6: {
		tier: "Gen6 LC",
	},
	cameruptgen6: {
		randomBattleMoves: ["rockpolish", "fireblast", "earthpower", "lavaplume", "stealthrock", "hiddenpowergrass", "roar", "stoneedge"],
		randomDoubleBattleMoves: ["rockpolish", "fireblast", "earthpower", "heatwave", "eruption", "hiddenpowergrass", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	cameruptmegagen6: {
		randomBattleMoves: ["stealthrock", "fireblast", "earthpower", "ancientpower", "willowisp", "toxic"],
		randomDoubleBattleMoves: ["fireblast", "earthpower", "heatwave", "eruption", "rockslide", "protect"],
		tier: "Gen6 RU",
		doublesTier: "DUU",
	},
	torkoalgen6: {
		randomBattleMoves: ["shellsmash", "fireblast", "earthpower", "hiddenpowergrass", "stealthrock", "rapidspin", "yawn", "lavaplume"],
		randomDoubleBattleMoves: ["protect", "heatwave", "earthpower", "willowisp", "shellsmash", "fireblast", "hiddenpowergrass"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	spoinkgen6: {
		tier: "Gen6 LC",
	},
	grumpiggen6: {
		randomBattleMoves: ["psychic", "thunderwave", "healbell", "whirlwind", "toxic", "focusblast", "reflect", "lightscreen"],
		randomDoubleBattleMoves: ["psychic", "psyshock", "thunderwave", "trickroom", "taunt", "protect", "focusblast", "reflect", "lightscreen"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	spindagen6: {
		randomBattleMoves: ["return", "superpower", "suckerpunch", "icepunch", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["doubleedge", "return", "superpower", "suckerpunch", "trickroom", "fakeout", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	trapinchgen6: {
		tier: "Gen6 LC",
	},
	vibravagen6: {
		tier: "Gen6 NFE",
	},
	flygongen6: {
		randomBattleMoves: ["earthquake", "outrage", "uturn", "roost", "stoneedge", "firepunch", "fireblast", "defog"],
		randomDoubleBattleMoves: ["earthquake", "protect", "dragonclaw", "uturn", "rockslide", "firepunch", "fireblast", "tailwind", "feint"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	cacneagen6: {
		tier: "Gen6 LC",
	},
	cacturnegen6: {
		randomBattleMoves: ["swordsdance", "spikes", "suckerpunch", "seedbomb", "drainpunch", "substitute", "darkpulse", "focusblast", "gigadrain"],
		randomDoubleBattleMoves: ["swordsdance", "spikyshield", "suckerpunch", "seedbomb", "drainpunch", "substitute"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	swablugen6: {
		tier: "Gen6 LC",
	},
	altariagen6: {
		randomBattleMoves: ["dragondance", "dracometeor", "outrage", "earthquake", "roost", "fireblast", "toxic"],
		randomDoubleBattleMoves: ["dragondance", "dracometeor", "protect", "dragonclaw", "earthquake", "fireblast", "tailwind"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	altariamegagen6: {
		randomBattleMoves: ["dragondance", "return", "hypervoice", "healbell", "earthquake", "roost", "fireblast"],
		randomDoubleBattleMoves: ["dragondance", "return", "doubleedge", "dragonclaw", "earthquake", "protect", "fireblast"],
		tier: "Gen6 UUBL",
		doublesTier: "DUU",
	},
	zangoosegen6: {
		randomBattleMoves: ["swordsdance", "closecombat", "knockoff", "quickattack", "facade"],
		randomDoubleBattleMoves: ["protect", "closecombat", "knockoff", "quickattack", "facade"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	sevipergen6: {
		randomBattleMoves: ["flamethrower", "sludgewave", "gigadrain", "darkpulse", "switcheroo", "coil", "earthquake", "poisonjab", "suckerpunch"],
		randomDoubleBattleMoves: ["flamethrower", "gigadrain", "earthquake", "suckerpunch", "aquatail", "protect", "glare", "poisonjab", "sludgebomb"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	lunatonegen6: {
		randomBattleMoves: ["psychic", "earthpower", "stealthrock", "rockpolish", "calmmind", "icebeam", "ancientpower", "moonlight", "toxic"],
		randomDoubleBattleMoves: ["psychic", "earthpower", "rockpolish", "calmmind", "helpinghand", "icebeam", "ancientpower", "moonlight", "trickroom", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	solrockgen6: {
		randomBattleMoves: ["stealthrock", "explosion", "rockslide", "reflect", "lightscreen", "willowisp", "morningsun"],
		randomDoubleBattleMoves: ["protect", "helpinghand", "stoneedge", "zenheadbutt", "willowisp", "trickroom", "rockslide"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	barboachgen6: {
		tier: "Gen6 LC",
	},
	whiscashgen6: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "stoneedge", "zenheadbutt"],
		randomDoubleBattleMoves: ["dragondance", "waterfall", "earthquake", "stoneedge", "zenheadbutt", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	corphishgen6: {
		tier: "Gen6 LC",
	},
	crawdauntgen6: {
		randomBattleMoves: ["dragondance", "crabhammer", "superpower", "swordsdance", "knockoff", "aquajet"],
		randomDoubleBattleMoves: ["dragondance", "crabhammer", "crunch", "superpower", "swordsdance", "knockoff", "aquajet", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	baltoygen6: {
		tier: "Gen6 LC",
	},
	claydolgen6: {
		randomBattleMoves: ["stealthrock", "toxic", "psychic", "icebeam", "earthquake", "rapidspin"],
		randomDoubleBattleMoves: ["earthpower", "trickroom", "psychic", "icebeam", "earthquake", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	lileepgen6: {
		tier: "Gen6 LC",
	},
	cradilygen6: {
		randomBattleMoves: ["stealthrock", "recover", "gigadrain", "toxic", "seedbomb", "rockslide", "curse"],
		randomDoubleBattleMoves: ["protect", "recover", "seedbomb", "rockslide", "earthquake", "curse", "swordsdance"],
		tier: "Gen6 NU",
		doublesTier: "DUU",
	},
	anorithgen6: {
		tier: "Gen6 LC",
	},
	armaldogen6: {
		randomBattleMoves: ["stealthrock", "stoneedge", "toxic", "xscissor", "knockoff", "rapidspin", "earthquake"],
		randomDoubleBattleMoves: ["rockslide", "stoneedge", "stringshot", "xscissor", "swordsdance", "knockoff", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	feebasgen6: {
		tier: "Gen6 LC",
	},
	miloticgen6: {
		randomBattleMoves: ["recover", "scald", "toxic", "icebeam", "dragontail", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["recover", "scald", "hydropump", "icebeam", "dragontail", "hypnosis", "protect", "hiddenpowergrass"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	castformgen6: {
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	castformsunnygen6: {
		randomBattleMoves: ["sunnyday", "weatherball", "solarbeam", "icebeam"],
	},
	castformrainygen6: {
		randomBattleMoves: ["raindance", "weatherball", "thunder", "hurricane"],
	},
	castformsnowygen6: {
		randomBattleMoves: ["hail", "blizzard", "thunderbolt", "fireblast"],
	},
	kecleongen6: {
		randomBattleMoves: ["fakeout", "knockoff", "drainpunch", "suckerpunch", "shadowsneak", "stealthrock", "recover"],
		randomDoubleBattleMoves: ["knockoff", "fakeout", "trickroom", "recover", "drainpunch", "suckerpunch", "shadowsneak", "protect"],
		tier: "Gen6 NU",
		doublesTier: "DUU",
	},
	shuppetgen6: {
		tier: "Gen6 LC",
	},
	banettegen6: {
		randomBattleMoves: ["destinybond", "taunt", "shadowclaw", "suckerpunch", "willowisp", "shadowsneak", "knockoff"],
		randomDoubleBattleMoves: ["shadowclaw", "suckerpunch", "willowisp", "shadowsneak", "knockoff", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	banettemegagen6: {
		randomBattleMoves: ["destinybond", "taunt", "shadowclaw", "suckerpunch", "willowisp", "knockoff"],
		randomDoubleBattleMoves: ["destinybond", "taunt", "shadowclaw", "suckerpunch", "willowisp", "knockoff", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	duskullgen6: {
		tier: "Gen6 LC",
	},
	dusclopsgen6: {
		tier: "Gen6 NFE",
	},
	dusknoirgen6: {
		randomBattleMoves: ["willowisp", "shadowsneak", "icepunch", "painsplit", "substitute", "earthquake", "focuspunch"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "icepunch", "painsplit", "protect", "earthquake", "helpinghand", "trickroom"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	tropiusgen6: {
		randomBattleMoves: ["leechseed", "substitute", "airslash", "gigadrain", "toxic", "protect"],
		randomDoubleBattleMoves: ["leechseed", "protect", "airslash", "gigadrain", "earthquake", "hiddenpowerfire", "tailwind", "sunnyday", "roost"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	chinglinggen6: {
		tier: "Gen6 LC",
	},
	chimechogen6: {
		randomBattleMoves: ["psychic", "yawn", "recover", "calmmind", "shadowball", "healingwish", "healbell", "taunt"],
		randomDoubleBattleMoves: ["protect", "psychic", "thunderwave", "recover", "shadowball", "dazzlinggleam", "trickroom", "helpinghand", "taunt"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	absolgen6: {
		randomBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "superpower", "pursuit", "playrough"],
		randomDoubleBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "fireblast", "superpower", "protect", "playrough"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	absolmegagen6: {
		randomBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "fireblast", "superpower", "pursuit", "playrough", "icebeam"],
		randomDoubleBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "fireblast", "superpower", "protect", "playrough"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	snoruntgen6: {
		tier: "Gen6 LC",
	},
	glaliegen6: {
		randomBattleMoves: ["spikes", "icebeam", "iceshard", "taunt", "earthquake", "explosion", "superfang"],
		randomDoubleBattleMoves: ["icebeam", "iceshard", "taunt", "earthquake", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	glaliemegagen6: {
		randomBattleMoves: ["freezedry", "iceshard", "earthquake", "explosion", "return", "spikes"],
		randomDoubleBattleMoves: ["crunch", "iceshard", "freezedry", "earthquake", "explosion", "protect", "return"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	froslassgen6: {
		randomBattleMoves: ["icebeam", "spikes", "destinybond", "shadowball", "taunt", "thunderwave"],
		randomDoubleBattleMoves: ["icebeam", "protect", "destinybond", "shadowball", "taunt", "thunderwave"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	sphealgen6: {
		tier: "Gen6 LC",
	},
	sealeogen6: {
		tier: "Gen6 NFE",
	},
	walreingen6: {
		randomBattleMoves: ["superfang", "protect", "toxic", "surf", "icebeam", "roar"],
		randomDoubleBattleMoves: ["protect", "icywind", "surf", "icebeam", "superfang", "roar"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	clamperlgen6: {
		tier: "Gen6 LC",
	},
	huntailgen6: {
		randomBattleMoves: ["shellsmash", "waterfall", "icebeam", "suckerpunch"],
		randomDoubleBattleMoves: ["shellsmash", "waterfall", "icefang", "suckerpunch", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	gorebyssgen6: {
		randomBattleMoves: ["shellsmash", "hydropump", "icebeam", "hiddenpowergrass", "substitute"],
		randomDoubleBattleMoves: ["shellsmash", "surf", "icebeam", "hiddenpowergrass", "substitute", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	relicanthgen6: {
		randomBattleMoves: ["headsmash", "waterfall", "earthquake", "doubleedge", "stealthrock", "toxic"],
		randomDoubleBattleMoves: ["headsmash", "waterfall", "earthquake", "doubleedge", "rockslide", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	luvdiscgen6: {
		randomBattleMoves: ["icebeam", "toxic", "sweetkiss", "protect", "scald"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	bagongen6: {
		tier: "Gen6 LC",
	},
	shelgongen6: {
		tier: "Gen6 NFE",
	},
	salamencegen6: {
		randomBattleMoves: ["outrage", "fireblast", "earthquake", "dracometeor", "dragondance", "dragonclaw"],
		randomDoubleBattleMoves: ["protect", "fireblast", "earthquake", "dracometeor", "tailwind", "dragondance", "dragonclaw", "hydropump", "rockslide"],
		tier: "Gen6 UUBL",
		doublesTier: "DUU",
	},
	salamencemegagen6: {
		randomBattleMoves: ["doubleedge", "return", "fireblast", "earthquake", "dracometeor", "roost", "dragondance"],
		randomDoubleBattleMoves: ["doubleedge", "return", "fireblast", "earthquake", "dracometeor", "protect", "dragondance", "dragonclaw"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	beldumgen6: {
		tier: "Gen6 LC",
	},
	metanggen6: {
		tier: "Gen6 PU",
		doublesTier: "NFE",
	},
	metagrossgen6: {
		randomBattleMoves: ["meteormash", "earthquake", "agility", "stealthrock", "zenheadbutt", "bulletpunch", "thunderpunch", "explosion", "icepunch"],
		randomDoubleBattleMoves: ["meteormash", "earthquake", "protect", "zenheadbutt", "bulletpunch", "thunderpunch", "explosion", "icepunch", "hammerarm"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	metagrossmegagen6: {
		randomBattleMoves: ["meteormash", "earthquake", "agility", "zenheadbutt", "hammerarm", "icepunch"],
		randomDoubleBattleMoves: ["meteormash", "earthquake", "protect", "zenheadbutt", "thunderpunch", "icepunch"],
		tier: "Gen6 OU",
		doublesTier: "DUU",
	},
	regirockgen6: {
		randomBattleMoves: ["stealthrock", "thunderwave", "stoneedge", "drainpunch", "curse", "rest", "rockslide", "toxic"],
		randomDoubleBattleMoves: ["stealthrock", "thunderwave", "stoneedge", "drainpunch", "curse", "rockslide", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	regicegen6: {
		randomBattleMoves: ["thunderwave", "icebeam", "thunderbolt", "rest", "sleeptalk", "focusblast", "rockpolish"],
		randomDoubleBattleMoves: ["thunderwave", "icebeam", "thunderbolt", "icywind", "protect", "focusblast", "rockpolish"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	registeelgen6: {
		randomBattleMoves: ["stealthrock", "toxic", "curse", "ironhead", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["stealthrock", "ironhead", "curse", "rest", "thunderwave", "protect", "seismictoss"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	latiasgen6: {
		randomBattleMoves: ["dracometeor", "psyshock", "hiddenpowerfire", "roost", "thunderbolt", "healingwish", "defog"],
		randomDoubleBattleMoves: ["dragonpulse", "psychic", "tailwind", "helpinghand", "healpulse", "lightscreen", "reflect", "protect"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	latiasmegagen6: {
		randomBattleMoves: ["calmmind", "dragonpulse", "surf", "dracometeor", "roost", "hiddenpowerfire", "substitute", "psyshock"],
		randomDoubleBattleMoves: ["dragonpulse", "psychic", "tailwind", "helpinghand", "healpulse", "lightscreen", "reflect", "protect"],
		tier: "Gen6 (OU)",
		doublesTier: "(DUU)",
	},
	latiosgen6: {
		randomBattleMoves: ["dracometeor", "hiddenpowerfire", "surf", "thunderbolt", "psyshock", "roost", "trick", "defog"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "surf", "thunderbolt", "psyshock", "substitute", "trick", "tailwind", "protect", "hiddenpowerfire"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	latiosmegagen6: {
		randomBattleMoves: ["calmmind", "dracometeor", "hiddenpowerfire", "psyshock", "roost", "defog"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "surf", "thunderbolt", "psyshock", "substitute", "tailwind", "protect", "hiddenpowerfire"],
		tier: "Gen6 (OU)",
		doublesTier: "(DOU)",
	},
	kyogregen6: {
		randomBattleMoves: ["waterspout", "originpulse", "scald", "thunder", "icebeam"],
		randomDoubleBattleMoves: ["waterspout", "muddywater", "originpulse", "thunder", "icebeam", "calmmind", "rest", "sleeptalk", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	kyogreprimalgen6: {
		randomBattleMoves: ["calmmind", "originpulse", "scald", "thunder", "icebeam", "toxic", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["waterspout", "originpulse", "muddywater", "thunder", "icebeam", "calmmind", "rest", "sleeptalk", "protect"],
	},
	groudongen6: {
		randomBattleMoves: ["earthquake", "stealthrock", "lavaplume", "stoneedge", "roar", "toxic", "thunderwave", "dragonclaw", "firepunch"],
		randomDoubleBattleMoves: ["precipiceblades", "rockslide", "protect", "stoneedge", "swordsdance", "rockpolish", "dragonclaw", "firepunch"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	groudonprimalgen6: {
		randomBattleMoves: ["stealthrock", "precipiceblades", "lavaplume", "stoneedge", "dragontail", "rockpolish", "swordsdance", "firepunch"],
		randomDoubleBattleMoves: ["precipiceblades", "lavaplume", "rockslide", "stoneedge", "swordsdance", "overheat", "rockpolish", "firepunch", "protect"],
	},
	rayquazagen6: {
		randomBattleMoves: ["outrage", "vcreate", "extremespeed", "dragondance", "earthquake", "dracometeor", "dragonclaw"],
		randomDoubleBattleMoves: ["tailwind", "vcreate", "extremespeed", "dragondance", "earthquake", "dracometeor", "dragonclaw", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	rayquazamegagen6: {
		// randomBattleMoves: ["vcreate", "extremespeed", "swordsdance", "earthquake", "dragonascent", "dragonclaw", "dragondance"],
		randomDoubleBattleMoves: ["vcreate", "extremespeed", "swordsdance", "earthquake", "dragonascent", "dragonclaw", "dragondance", "protect"],
		tier: "Gen6 AG",
		doublesTier: "DUber",
	},
	jirachigen6: {
		randomBattleMoves: ["ironhead", "uturn", "firepunch", "icepunch", "stealthrock", "bodyslam", "toxic", "wish", "substitute"],
		randomDoubleBattleMoves: ["bodyslam", "ironhead", "icywind", "thunderwave", "helpinghand", "trickroom", "uturn", "followme", "zenheadbutt", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DUber",
	},
	deoxysgen6: {
		randomBattleMoves: ["psychoboost", "stealthrock", "spikes", "firepunch", "superpower", "extremespeed", "knockoff", "taunt"],
		randomDoubleBattleMoves: ["psychoboost", "superpower", "extremespeed", "icebeam", "thunderbolt", "firepunch", "protect", "knockoff", "psyshock"],
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	deoxysattackgen6: {
		randomBattleMoves: ["psychoboost", "superpower", "icebeam", "knockoff", "extremespeed", "firepunch", "stealthrock"],
		randomDoubleBattleMoves: ["psychoboost", "superpower", "extremespeed", "icebeam", "thunderbolt", "firepunch", "protect", "knockoff"],
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	deoxysdefensegen6: {
		randomBattleMoves: ["spikes", "stealthrock", "recover", "taunt", "toxic", "seismictoss", "knockoff"],
		randomDoubleBattleMoves: ["protect", "stealthrock", "recover", "taunt", "reflect", "seismictoss", "lightscreen", "trickroom"],
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	deoxysspeedgen6: {
		randomBattleMoves: ["spikes", "stealthrock", "superpower", "psychoboost", "taunt", "magiccoat", "knockoff"],
		randomDoubleBattleMoves: ["superpower", "icebeam", "psychoboost", "taunt", "lightscreen", "reflect", "protect", "knockoff"],
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	turtwiggen6: {
		tier: "Gen6 LC",
	},
	grotlegen6: {
		tier: "Gen6 NFE",
	},
	torterragen6: {
		randomBattleMoves: ["stealthrock", "earthquake", "woodhammer", "stoneedge", "synthesis", "rockpolish"],
		randomDoubleBattleMoves: ["protect", "earthquake", "woodhammer", "stoneedge", "rockslide", "wideguard", "rockpolish"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	chimchargen6: {
		tier: "Gen6 LC",
	},
	monfernogen6: {
		tier: "Gen6 PU",
		doublesTier: "NFE",
	},
	infernapegen6: {
		randomBattleMoves: ["stealthrock", "uturn", "earthquake", "closecombat", "flareblitz", "stoneedge", "machpunch", "nastyplot", "fireblast", "vacuumwave", "grassknot"],
		randomDoubleBattleMoves: ["fakeout", "heatwave", "closecombat", "uturn", "grassknot", "stoneedge", "machpunch", "feint", "taunt", "flareblitz", "thunderpunch", "protect"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	piplupgen6: {
		tier: "Gen6 LC",
	},
	prinplupgen6: {
		tier: "Gen6 PU",
		doublesTier: "NFE",
	},
	empoleongen6: {
		randomBattleMoves: ["hydropump", "flashcannon", "grassknot", "defog", "icebeam", "scald", "toxic", "roar", "stealthrock"],
		randomDoubleBattleMoves: ["icywind", "scald", "surf", "icebeam", "hiddenpowerelectric", "protect", "grassknot", "flashcannon"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	starlygen6: {
		tier: "Gen6 LC",
	},
	staraviagen6: {
		tier: "Gen6 NFE",
	},
	staraptorgen6: {
		randomBattleMoves: ["bravebird", "closecombat", "uturn", "quickattack", "doubleedge"],
		randomDoubleBattleMoves: ["bravebird", "closecombat", "uturn", "quickattack", "doubleedge", "tailwind", "protect"],
		tier: "Gen6 UUBL",
		doublesTier: "DUU",
	},
	bidoofgen6: {
		tier: "Gen6 LC",
	},
	bibarelgen6: {
		randomBattleMoves: ["return", "waterfall", "curse", "quickattack", "stealthrock", "rest"],
		randomDoubleBattleMoves: ["return", "waterfall", "curse", "quickattack", "protect", "rest"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	kricketotgen6: {
		tier: "Gen6 LC",
	},
	kricketunegen6: {
		randomBattleMoves: ["xscissor", "endeavor", "taunt", "toxic", "stickyweb", "knockoff"],
		randomDoubleBattleMoves: ["bugbite", "protect", "taunt", "stickyweb", "knockoff"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	shinxgen6: {
		tier: "Gen6 LC",
	},
	luxiogen6: {
		tier: "Gen6 NFE",
	},
	luxraygen6: {
		randomBattleMoves: ["wildcharge", "icefang", "voltswitch", "crunch", "superpower", "facade"],
		randomDoubleBattleMoves: ["wildcharge", "icefang", "voltswitch", "crunch", "superpower", "facade", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	cranidosgen6: {
		tier: "Gen6 LC",
	},
	rampardosgen6: {
		randomBattleMoves: ["headsmash", "earthquake", "rockpolish", "crunch", "rockslide", "firepunch"],
		randomDoubleBattleMoves: ["headsmash", "earthquake", "zenheadbutt", "rockslide", "crunch", "stoneedge", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	shieldongen6: {
		tier: "Gen6 LC",
	},
	bastiodongen6: {
		randomBattleMoves: ["stealthrock", "rockblast", "metalburst", "protect", "toxic", "roar"],
		randomDoubleBattleMoves: ["stealthrock", "stoneedge", "metalburst", "protect", "wideguard", "guardsplit"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	burmygen6: {
		tier: "Gen6 LC",
	},
	wormadamgen6: {
		randomBattleMoves: ["gigadrain", "signalbeam", "protect", "toxic", "synthesis"],
		randomDoubleBattleMoves: ["leafstorm", "gigadrain", "signalbeam", "hiddenpowerice", "hiddenpowerrock", "stringshot", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	wormadamsandygen6: {
		randomBattleMoves: ["earthquake", "toxic", "protect", "stealthrock"],
		randomDoubleBattleMoves: ["earthquake", "suckerpunch", "rockblast", "protect", "stringshot"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	wormadamtrashgen6: {
		randomBattleMoves: ["stealthrock", "toxic", "gyroball", "protect"],
		randomDoubleBattleMoves: ["strugglebug", "stringshot", "gyroball", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	mothimgen6: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "airslash", "energyball", "uturn"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "airslash", "gigadrain", "roost", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	combeegen6: {
		tier: "Gen6 LC",
	},
	vespiquengen6: {
		randomBattleMoves: ["toxic", "protect", "roost", "infestation", "uturn"],
		randomDoubleBattleMoves: ["tailwind", "healorder", "stringshot", "attackorder", "strugglebug", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	pachirisugen6: {
		randomBattleMoves: ["nuzzle", "thunderbolt", "superfang", "toxic", "uturn"],
		randomDoubleBattleMoves: ["nuzzle", "thunderbolt", "superfang", "followme", "uturn", "helpinghand", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	buizelgen6: {
		tier: "Gen6 LC",
	},
	floatzelgen6: {
		randomBattleMoves: ["bulkup", "waterfall", "icepunch", "substitute", "taunt", "aquajet", "brickbreak"],
		randomDoubleBattleMoves: ["waterfall", "aquajet", "switcheroo", "raindance", "protect", "icepunch", "crunch", "taunt"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	cherubigen6: {
		tier: "Gen6 LC",
	},
	cherrimgen6: {
		randomBattleMoves: ["energyball", "dazzlinggleam", "hiddenpowerfire", "synthesis", "healingwish"],
		randomDoubleBattleMoves: ["sunnyday", "solarbeam", "weatherball", "gigadrain", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	cherrimsunshinegen6: {
		randomBattleMoves: ["sunnyday", "solarbeam", "gigadrain", "weatherball", "hiddenpowerice"],
		randomDoubleBattleMoves: ["sunnyday", "solarbeam", "gigadrain", "weatherball", "protect"],
	},
	shellosgen6: {
		tier: "Gen6 LC",
	},
	gastrodongen6: {
		randomBattleMoves: ["earthquake", "icebeam", "scald", "toxic", "recover", "clearsmog"],
		randomDoubleBattleMoves: ["earthpower", "icebeam", "scald", "muddywater", "recover", "icywind", "protect"],
		tier: "Gen6 NU",
		doublesTier: "DOU",
	},
	drifloongen6: {
		tier: "Gen6 LC Uber",
	},
	drifblimgen6: {
		randomBattleMoves: ["acrobatics", "willowisp", "substitute", "destinybond", "shadowball", "hex"],
		randomDoubleBattleMoves: ["shadowball", "substitute", "hypnosis", "hiddenpowerfighting", "thunderbolt", "destinybond", "willowisp", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	bunearygen6: {
		tier: "Gen6 LC",
	},
	lopunnygen6: {
		randomBattleMoves: ["return", "switcheroo", "highjumpkick", "icepunch", "healingwish"],
		randomDoubleBattleMoves: ["return", "switcheroo", "highjumpkick", "firepunch", "icepunch", "fakeout", "protect", "encore"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	lopunnymegagen6: {
		randomBattleMoves: ["return", "highjumpkick", "substitute", "fakeout", "icepunch"],
		randomDoubleBattleMoves: ["return", "highjumpkick", "protect", "fakeout", "icepunch", "encore"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	glameowgen6: {
		tier: "Gen6 LC",
	},
	puruglygen6: {
		randomBattleMoves: ["fakeout", "uturn", "suckerpunch", "quickattack", "return", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "uturn", "suckerpunch", "quickattack", "return", "knockoff", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	stunkygen6: {
		tier: "Gen6 LC",
	},
	skuntankgen6: {
		randomBattleMoves: ["pursuit", "suckerpunch", "crunch", "fireblast", "taunt", "poisonjab", "defog"],
		randomDoubleBattleMoves: ["protect", "suckerpunch", "crunch", "fireblast", "taunt", "poisonjab", "playrough", "snarl"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	bronzorgen6: {
		tier: "Gen6 LC",
	},
	bronzonggen6: {
		randomBattleMoves: ["stealthrock", "earthquake", "toxic", "reflect", "lightscreen", "trickroom", "explosion", "gyroball"],
		randomDoubleBattleMoves: ["earthquake", "protect", "reflect", "lightscreen", "trickroom", "explosion", "gyroball"],
		tier: "Gen6 RU",
		doublesTier: "DUU",
	},
	chatotgen6: {
		randomBattleMoves: ["nastyplot", "boomburst", "heatwave", "hiddenpowerground", "substitute", "chatter", "uturn"],
		randomDoubleBattleMoves: ["nastyplot", "heatwave", "encore", "substitute", "chatter", "uturn", "protect", "hypervoice", "boomburst"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	spiritombgen6: {
		randomBattleMoves: ["willowisp", "pursuit", "shadowsneak", "calmmind", "darkpulse", "rest", "sleeptalk", "psychic"],
		randomDoubleBattleMoves: ["shadowsneak", "icywind", "willowisp", "snarl", "darkpulse", "protect", "foulplay", "painsplit"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	giblegen6: {
		tier: "Gen6 LC",
	},
	gabitegen6: {
		tier: "Gen6 PU",
		doublesTier: "NFE",
	},
	garchompgen6: {
		randomBattleMoves: ["outrage", "dragonclaw", "earthquake", "stoneedge", "fireblast", "swordsdance", "stealthrock", "firefang"],
		randomDoubleBattleMoves: ["substitute", "dragonclaw", "earthquake", "stoneedge", "rockslide", "swordsdance", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	garchompmegagen6: {
		randomBattleMoves: ["outrage", "dracometeor", "earthquake", "stoneedge", "fireblast", "swordsdance"],
		randomDoubleBattleMoves: ["substitute", "dragonclaw", "earthquake", "stoneedge", "rockslide", "swordsdance", "protect", "fireblast"],
		tier: "Gen6 (OU)",
		doublesTier: "(DOU)",
	},
	riolugen6: {
		tier: "Gen6 LC",
	},
	lucariogen6: {
		randomBattleMoves: ["swordsdance", "closecombat", "crunch", "extremespeed", "icepunch", "nastyplot", "aurasphere", "darkpulse", "vacuumwave", "flashcannon"],
		randomDoubleBattleMoves: ["followme", "closecombat", "crunch", "extremespeed", "icepunch", "bulletpunch", "aurasphere", "darkpulse", "vacuumwave", "flashcannon", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	lucariomegagen6: {
		randomBattleMoves: ["swordsdance", "closecombat", "crunch", "icepunch", "bulletpunch", "nastyplot", "aurasphere", "darkpulse", "flashcannon"],
		randomDoubleBattleMoves: ["followme", "closecombat", "crunch", "extremespeed", "icepunch", "bulletpunch", "aurasphere", "darkpulse", "vacuumwave", "flashcannon", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	hippopotasgen6: {
		tier: "Gen6 LC",
	},
	hippowdongen6: {
		randomBattleMoves: ["earthquake", "slackoff", "whirlwind", "stealthrock", "toxic", "stoneedge"],
		randomDoubleBattleMoves: ["earthquake", "slackoff", "rockslide", "stealthrock", "protect", "stoneedge"],
		tier: "Gen6 OU",
		doublesTier: "DUU",
	},
	skorupigen6: {
		tier: "Gen6 LC",
	},
	drapiongen6: {
		randomBattleMoves: ["knockoff", "taunt", "toxicspikes", "poisonjab", "whirlwind", "swordsdance", "aquatail", "earthquake"],
		randomDoubleBattleMoves: ["snarl", "taunt", "protect", "earthquake", "aquatail", "swordsdance", "poisonjab", "knockoff"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	croagunkgen6: {
		tier: "Gen6 LC",
	},
	toxicroakgen6: {
		randomBattleMoves: ["swordsdance", "gunkshot", "drainpunch", "suckerpunch", "icepunch", "substitute"],
		randomDoubleBattleMoves: ["suckerpunch", "drainpunch", "substitute", "swordsdance", "knockoff", "icepunch", "gunkshot", "fakeout", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	carnivinegen6: {
		randomBattleMoves: ["swordsdance", "powerwhip", "return", "sleeppowder", "substitute", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "powerwhip", "return", "sleeppowder", "substitute", "leechseed", "knockoff", "ragepowder", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	finneongen6: {
		tier: "Gen6 LC",
	},
	lumineongen6: {
		randomBattleMoves: ["scald", "icebeam", "uturn", "toxic", "defog"],
		randomDoubleBattleMoves: ["surf", "uturn", "icebeam", "toxic", "raindance", "tailwind", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	snovergen6: {
		tier: "Gen6 LC",
	},
	abomasnowgen6: {
		randomBattleMoves: ["woodhammer", "iceshard", "blizzard", "gigadrain", "leechseed", "substitute", "focuspunch", "earthquake"],
		randomDoubleBattleMoves: ["blizzard", "iceshard", "gigadrain", "protect", "focusblast", "woodhammer", "earthquake"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	abomasnowmegagen6: {
		randomBattleMoves: ["blizzard", "gigadrain", "woodhammer", "earthquake", "iceshard", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["blizzard", "iceshard", "gigadrain", "protect", "focusblast", "woodhammer", "earthquake"],
		tier: "Gen6 RUBL",
		doublesTier: "DUU",
	},
	rotomgen6: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "shadowball", "substitute", "painsplit", "hiddenpowerice", "trick", "willowisp"],
		randomDoubleBattleMoves: ["thunderbolt", "voltswitch", "shadowball", "substitute", "painsplit", "hiddenpowerice", "trick", "willowisp", "electroweb", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	rotomheatgen6: {
		randomBattleMoves: ["overheat", "thunderbolt", "voltswitch", "hiddenpowerice", "painsplit", "willowisp"],
		randomDoubleBattleMoves: ["overheat", "thunderbolt", "voltswitch", "substitute", "painsplit", "hiddenpowerice", "willowisp", "electroweb", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	rotomwashgen6: {
		randomBattleMoves: ["hydropump", "thunderbolt", "voltswitch", "painsplit", "willowisp", "trick"],
		randomDoubleBattleMoves: ["hydropump", "thunderbolt", "voltswitch", "substitute", "painsplit", "hiddenpowerice", "willowisp", "trick", "electroweb", "protect", "hiddenpowergrass"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	rotomfrostgen6: {
		randomBattleMoves: ["blizzard", "thunderbolt", "voltswitch", "substitute", "painsplit", "willowisp", "trick"],
		randomDoubleBattleMoves: ["blizzard", "thunderbolt", "voltswitch", "substitute", "painsplit", "willowisp", "trick", "electroweb", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	rotomfangen6: {
		randomBattleMoves: ["airslash", "thunderbolt", "voltswitch", "painsplit", "willowisp"],
		randomDoubleBattleMoves: ["airslash", "thunderbolt", "voltswitch", "substitute", "painsplit", "hiddenpowerice", "willowisp", "electroweb", "discharge", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	rotommowgen6: {
		randomBattleMoves: ["leafstorm", "thunderbolt", "voltswitch", "hiddenpowerfire", "hiddenpowerice", "trick"],
		randomDoubleBattleMoves: ["leafstorm", "thunderbolt", "voltswitch", "substitute", "painsplit", "hiddenpowerfire", "willowisp", "trick", "electroweb", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	uxiegen6: {
		randomBattleMoves: ["stealthrock", "thunderwave", "psychic", "uturn", "healbell", "knockoff", "yawn"],
		randomDoubleBattleMoves: ["uturn", "psyshock", "yawn", "healbell", "stealthrock", "thunderbolt", "protect", "helpinghand", "thunderwave", "skillswap"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	mespritgen6: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "energyball", "signalbeam", "hiddenpowerfire", "icebeam", "healingwish", "stealthrock", "uturn"],
		randomDoubleBattleMoves: ["calmmind", "psychic", "thunderbolt", "icebeam", "substitute", "uturn", "trick", "protect", "knockoff", "helpinghand"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	azelfgen6: {
		randomBattleMoves: ["nastyplot", "psyshock", "fireblast", "dazzlinggleam", "stealthrock", "knockoff", "taunt", "explosion"],
		randomDoubleBattleMoves: ["nastyplot", "psychic", "fireblast", "thunderbolt", "icepunch", "knockoff", "zenheadbutt", "uturn", "taunt", "protect", "dazzlinggleam"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	dialgagen6: {
		randomBattleMoves: ["stealthrock", "toxic", "dracometeor", "fireblast", "flashcannon", "roar", "thunderbolt"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "protect", "thunderbolt", "flashcannon", "earthpower", "fireblast", "aurasphere"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	palkiagen6: {
		randomBattleMoves: ["spacialrend", "dracometeor", "hydropump", "thunderwave", "dragontail", "fireblast"],
		randomDoubleBattleMoves: ["spacialrend", "dracometeor", "surf", "hydropump", "thunderbolt", "fireblast", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	heatrangen6: {
		randomBattleMoves: ["fireblast", "lavaplume", "stealthrock", "earthpower", "flashcannon", "protect", "toxic", "roar"],
		randomDoubleBattleMoves: ["heatwave", "substitute", "earthpower", "protect", "eruption", "willowisp"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	regigigasgen6: {
		randomBattleMoves: ["thunderwave", "confuseray", "substitute", "return", "knockoff", "drainpunch"],
		randomDoubleBattleMoves: ["thunderwave", "substitute", "return", "icywind", "rockslide", "earthquake", "knockoff", "wideguard"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	giratinagen6: {
		randomBattleMoves: ["rest", "sleeptalk", "dragontail", "roar", "willowisp", "shadowball", "dragonpulse"],
		randomDoubleBattleMoves: ["tailwind", "icywind", "protect", "dragontail", "willowisp", "calmmind", "dragonpulse", "shadowball"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	giratinaorigingen6: {
		randomBattleMoves: ["dracometeor", "shadowsneak", "dragontail", "willowisp", "defog", "toxic", "shadowball", "earthquake"],
		randomDoubleBattleMoves: ["dracometeor", "shadowsneak", "tailwind", "hiddenpowerfire", "willowisp", "calmmind", "substitute", "dragonpulse", "shadowball", "aurasphere", "protect", "earthquake"],
	},
	cresseliagen6: {
		randomBattleMoves: ["moonlight", "psychic", "icebeam", "thunderwave", "toxic", "substitute", "psyshock", "moonblast", "calmmind"],
		randomDoubleBattleMoves: ["psyshock", "icywind", "thunderwave", "trickroom", "moonblast", "moonlight", "skillswap", "reflect", "lightscreen", "icebeam", "protect", "helpinghand"],
		tier: "Gen6 UU",
		doublesTier: "DOU",
	},
	phionegen6: {
		randomBattleMoves: ["scald", "knockoff", "uturn", "icebeam", "toxic", "healbell"],
		randomDoubleBattleMoves: ["raindance", "scald", "uturn", "rest", "icebeam", "helpinghand", "icywind", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	manaphygen6: {
		randomBattleMoves: ["tailglow", "surf", "icebeam", "energyball", "psychic"],
		randomDoubleBattleMoves: ["tailglow", "surf", "icebeam", "energyball", "protect", "scald", "icywind", "helpinghand"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	darkraigen6: {
		randomBattleMoves: ["darkvoid", "darkpulse", "focusblast", "nastyplot", "substitute", "sludgebomb"],
		randomDoubleBattleMoves: ["darkpulse", "focusblast", "nastyplot", "substitute", "snarl", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	shaymingen6: {
		randomBattleMoves: ["seedflare", "earthpower", "airslash", "psychic", "rest", "substitute", "leechseed"],
		randomDoubleBattleMoves: ["seedflare", "earthpower", "airslash", "hiddenpowerfire", "rest", "substitute", "leechseed", "tailwind", "protect"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	shayminskygen6: {
		randomBattleMoves: ["seedflare", "airslash", "earthpower", "hiddenpowerice", "substitute", "leechseed"],
		randomDoubleBattleMoves: ["seedflare", "earthpower", "airslash", "rest", "substitute", "leechseed", "tailwind", "protect", "hiddenpowerice"],
		tier: "Gen6 Uber",
		doublesTier: "DOU",
	},
	arceusgen6: {
		randomBattleMoves: ["swordsdance", "extremespeed", "shadowclaw", "earthquake", "recover"],
		randomDoubleBattleMoves: ["swordsdance", "extremespeed", "shadowclaw", "earthquake", "recover", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	arceusbuggen6: {
		randomBattleMoves: ["swordsdance", "xscissor", "stoneedge", "recover", "earthquake", "ironhead"],
		randomDoubleBattleMoves: ["swordsdance", "xscissor", "stoneedge", "recover", "earthquake", "ironhead", "protect"],
	},
	arceusdarkgen6: {
		randomBattleMoves: ["calmmind", "judgment", "recover", "fireblast", "toxic"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "focusblast", "safeguard", "snarl", "willowisp", "protect"],
	},
	arceusdragongen6: {
		randomBattleMoves: ["swordsdance", "outrage", "extremespeed", "earthquake", "recover", "judgment", "fireblast", "willowisp", "defog"],
		randomDoubleBattleMoves: ["swordsdance", "dragonclaw", "extremespeed", "earthquake", "recover", "protect"],
	},
	arceuselectricgen6: {
		randomBattleMoves: ["calmmind", "judgment", "recover", "icebeam", "earthpower"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "icebeam", "protect"],
	},
	arceusfairygen6: {
		randomBattleMoves: ["calmmind", "judgment", "recover", "willowisp", "defog", "toxic", "earthpower"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "willowisp", "protect", "earthpower", "thunderbolt"],
	},
	arceusfightinggen6: {
		randomBattleMoves: ["calmmind", "judgment", "stoneedge", "shadowball", "recover", "roar", "icebeam"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "icebeam", "shadowball", "recover", "willowisp", "protect"],
	},
	arceusfiregen6: {
		randomBattleMoves: ["calmmind", "fireblast", "roar", "thunderbolt", "icebeam", "recover"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "thunderbolt", "recover", "heatwave", "protect", "willowisp"],
	},
	arceusflyinggen6: {
		randomBattleMoves: ["calmmind", "judgment", "earthpower", "fireblast", "toxic", "recover"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "safeguard", "recover", "substitute", "tailwind", "protect"],
	},
	arceusghostgen6: {
		randomBattleMoves: ["swordsdance", "shadowforce", "shadowclaw", "brickbreak", "extremespeed", "recover", "judgment", "toxic", "defog"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "focusblast", "recover", "swordsdance", "shadowforce", "brickbreak", "willowisp", "protect"],
	},
	arceusgrassgen6: {
		randomBattleMoves: ["judgment", "recover", "calmmind", "icebeam", "fireblast"],
		randomDoubleBattleMoves: ["calmmind", "icebeam", "judgment", "earthpower", "recover", "safeguard", "thunderwave", "protect"],
	},
	arceusgroundgen6: {
		randomBattleMoves: ["swordsdance", "earthquake", "stoneedge", "recover", "judgment", "icebeam", "toxic", "stealthrock"],
		randomDoubleBattleMoves: ["swordsdance", "earthquake", "stoneedge", "recover", "calmmind", "judgment", "icebeam", "rockslide", "protect"],
	},
	arceusicegen6: {
		randomBattleMoves: ["calmmind", "judgment", "thunderbolt", "fireblast", "recover"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "thunderbolt", "focusblast", "recover", "protect", "icywind"],
	},
	arceuspoisongen6: {
		randomBattleMoves: ["calmmind", "sludgebomb", "fireblast", "recover", "icebeam", "defog"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "sludgebomb", "heatwave", "recover", "willowisp", "protect", "earthpower"],
	},
	arceuspsychicgen6: {
		randomBattleMoves: ["judgment", "calmmind", "fireblast", "recover", "icebeam", "toxic"],
		randomDoubleBattleMoves: ["calmmind", "psyshock", "focusblast", "recover", "willowisp", "judgment", "protect"],
	},
	arceusrockgen6: {
		randomBattleMoves: ["swordsdance", "earthquake", "stoneedge", "recover", "judgment", "willowisp", "stealthrock"],
		randomDoubleBattleMoves: ["swordsdance", "stoneedge", "recover", "rockslide", "earthquake", "protect"],
	},
	arceussteelgen6: {
		randomBattleMoves: ["judgment", "recover", "willowisp", "defog", "roar", "swordsdance", "ironhead", "earthquake", "stoneedge"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "protect", "willowisp"],
	},
	arceuswatergen6: {
		randomBattleMoves: ["recover", "calmmind", "judgment", "icebeam", "toxic", "defog"],
		randomDoubleBattleMoves: ["recover", "calmmind", "judgment", "icebeam", "fireblast", "icywind", "surf", "protect"],
	},
	victinigen6: {
		randomBattleMoves: ["vcreate", "boltstrike", "uturn", "zenheadbutt", "grassknot", "focusblast", "blueflare"],
		randomDoubleBattleMoves: ["vcreate", "boltstrike", "uturn", "psychic", "focusblast", "blueflare", "protect"],
		tier: "Gen6 UUBL",
		doublesTier: "DUU",
	},
	snivygen6: {
		tier: "Gen6 LC",
	},
	servinegen6: {
		tier: "Gen6 NFE",
	},
	serperiorgen6: {
		randomBattleMoves: ["leafstorm", "dragonpulse", "hiddenpowerfire", "substitute", "leechseed", "glare"],
		randomDoubleBattleMoves: ["leafstorm", "hiddenpowerfire", "substitute", "taunt", "dragonpulse", "protect"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	tepiggen6: {
		tier: "Gen6 LC",
	},
	pignitegen6: {
		tier: "Gen6 NFE",
	},
	emboargen6: {
		randomBattleMoves: ["flareblitz", "superpower", "wildcharge", "headsmash", "fireblast", "grassknot", "suckerpunch"],
		randomDoubleBattleMoves: ["flareblitz", "superpower", "flamecharge", "wildcharge", "headsmash", "protect", "heatwave", "rockslide"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	oshawottgen6: {
		tier: "Gen6 LC",
	},
	dewottgen6: {
		tier: "Gen6 NFE",
	},
	samurottgen6: {
		randomBattleMoves: ["swordsdance", "waterfall", "aquajet", "megahorn", "superpower", "hydropump", "icebeam", "grassknot"],
		randomDoubleBattleMoves: ["hydropump", "aquajet", "icebeam", "scald", "hiddenpowergrass", "taunt", "helpinghand", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	patratgen6: {
		tier: "Gen6 LC",
	},
	watchoggen6: {
		randomBattleMoves: ["hypnosis", "substitute", "superfang", "swordsdance", "return", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "knockoff", "substitute", "hypnosis", "return", "superfang", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	lillipupgen6: {
		tier: "Gen6 LC",
	},
	herdiergen6: {
		tier: "Gen6 NFE",
	},
	stoutlandgen6: {
		randomBattleMoves: ["return", "crunch", "wildcharge", "superpower", "icefang"],
		randomDoubleBattleMoves: ["return", "wildcharge", "superpower", "crunch", "icefang", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	purrloingen6: {
		tier: "Gen6 LC",
	},
	liepardgen6: {
		randomBattleMoves: ["knockoff", "playrough", "uturn", "copycat", "encore", "thunderwave", "nastyplot", "darkpulse", "substitute"],
		randomDoubleBattleMoves: ["encore", "thunderwave", "substitute", "knockoff", "playrough", "uturn", "suckerpunch", "fakeout", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	pansagegen6: {
		tier: "Gen6 LC",
	},
	simisagegen6: {
		randomBattleMoves: ["nastyplot", "gigadrain", "focusblast", "hiddenpowerice", "substitute", "leafstorm", "knockoff", "superpower"],
		randomDoubleBattleMoves: ["nastyplot", "leafstorm", "hiddenpowerfire", "hiddenpowerice", "gigadrain", "focusblast", "substitute", "taunt", "synthesis", "helpinghand", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	panseargen6: {
		tier: "Gen6 LC",
	},
	simiseargen6: {
		randomBattleMoves: ["substitute", "nastyplot", "fireblast", "focusblast", "grassknot", "hiddenpowerrock"],
		randomDoubleBattleMoves: ["nastyplot", "fireblast", "focusblast", "grassknot", "hiddenpowerground", "substitute", "heatwave", "taunt", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	panpourgen6: {
		tier: "Gen6 LC",
	},
	simipourgen6: {
		randomBattleMoves: ["substitute", "nastyplot", "hydropump", "icebeam", "focusblast"],
		randomDoubleBattleMoves: ["nastyplot", "hydropump", "icebeam", "substitute", "surf", "taunt", "helpinghand", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	munnagen6: {
		tier: "Gen6 LC",
	},
	musharnagen6: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "signalbeam", "moonlight", "healbell", "thunderwave"],
		randomDoubleBattleMoves: ["trickroom", "thunderwave", "moonlight", "psychic", "hiddenpowerfighting", "helpinghand", "psyshock", "healbell", "signalbeam", "protect"],
		tier: "Gen6 PUBL",
		doublesTier: "(DUU)",
	},
	pidovegen6: {
		tier: "Gen6 LC",
	},
	tranquillgen6: {
		tier: "Gen6 NFE",
	},
	unfezantgen6: {
		randomBattleMoves: ["return", "pluck", "hypnosis", "tailwind", "uturn", "roost", "nightslash"],
		randomDoubleBattleMoves: ["pluck", "uturn", "return", "protect", "tailwind", "taunt", "roost", "nightslash"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	blitzlegen6: {
		tier: "Gen6 LC",
	},
	zebstrikagen6: {
		randomBattleMoves: ["voltswitch", "hiddenpowergrass", "overheat", "wildcharge", "thunderbolt"],
		randomDoubleBattleMoves: ["voltswitch", "hiddenpowergrass", "overheat", "wildcharge", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	roggenrolagen6: {
		tier: "Gen6 LC",
	},
	boldoregen6: {
		tier: "Gen6 NFE",
	},
	gigalithgen6: {
		randomBattleMoves: ["stealthrock", "rockblast", "earthquake", "explosion", "stoneedge", "superpower"],
		randomDoubleBattleMoves: ["stealthrock", "rockslide", "earthquake", "explosion", "stoneedge", "autotomize", "superpower", "wideguard", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	woobatgen6: {
		tier: "Gen6 LC",
	},
	swoobatgen6: {
		randomBattleMoves: ["substitute", "calmmind", "storedpower", "heatwave", "airslash", "roost"],
		randomDoubleBattleMoves: ["calmmind", "psychic", "airslash", "gigadrain", "protect", "heatwave", "tailwind"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	drilburgen6: {
		tier: "Gen6 LC",
	},
	excadrillgen6: {
		randomBattleMoves: ["swordsdance", "earthquake", "ironhead", "rockslide", "rapidspin"],
		randomDoubleBattleMoves: ["swordsdance", "drillrun", "earthquake", "rockslide", "ironhead", "substitute", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DUU",
	},
	audinogen6: {
		randomBattleMoves: ["wish", "protect", "healbell", "toxic", "thunderwave", "reflect", "lightscreen", "doubleedge"],
		randomDoubleBattleMoves: ["healpulse", "protect", "healbell", "trickroom", "thunderwave", "reflect", "lightscreen", "doubleedge", "helpinghand"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	audinomegagen6: {
		randomBattleMoves: ["wish", "calmmind", "healbell", "dazzlinggleam", "fireblast", "protect"],
		randomDoubleBattleMoves: ["healpulse", "protect", "healbell", "trickroom", "thunderwave", "hypervoice", "helpinghand", "dazzlinggleam"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	timburrgen6: {
		tier: "Gen6 LC",
	},
	gurdurrgen6: {
		tier: "Gen6 NU",
		doublesTier: "NFE",
	},
	conkeldurrgen6: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "knockoff", "machpunch"],
		randomDoubleBattleMoves: ["wideguard", "machpunch", "drainpunch", "icepunch", "knockoff", "protect"],
		tier: "Gen6 UU",
		doublesTier: "DOU",
	},
	tympolegen6: {
		tier: "Gen6 LC",
	},
	palpitoadgen6: {
		tier: "Gen6 NFE",
	},
	seismitoadgen6: {
		randomBattleMoves: ["hydropump", "scald", "sludgewave", "earthquake", "knockoff", "stealthrock", "toxic", "raindance"],
		randomDoubleBattleMoves: ["hydropump", "muddywater", "sludgebomb", "earthquake", "hiddenpowerelectric", "icywind", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	throhgen6: {
		randomBattleMoves: ["bulkup", "circlethrow", "icepunch", "stormthrow", "rest", "sleeptalk", "knockoff"],
		randomDoubleBattleMoves: ["helpinghand", "circlethrow", "icepunch", "stormthrow", "wideguard", "knockoff", "protect"],
		tier: "Gen6 PUBL",
		doublesTier: "(DUU)",
	},
	sawkgen6: {
		randomBattleMoves: ["closecombat", "earthquake", "icepunch", "poisonjab", "bulkup", "knockoff"],
		randomDoubleBattleMoves: ["closecombat", "knockoff", "icepunch", "rockslide", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	sewaddlegen6: {
		tier: "Gen6 LC",
	},
	swadloongen6: {
		tier: "Gen6 NFE",
	},
	leavannygen6: {
		randomBattleMoves: ["stickyweb", "swordsdance", "leafblade", "xscissor", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "leafblade", "xscissor", "protect", "stickyweb", "poisonjab"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	venipedegen6: {
		tier: "Gen6 LC",
	},
	whirlipedegen6: {
		tier: "Gen6 NFE",
	},
	scolipedegen6: {
		randomBattleMoves: ["protect", "spikes", "toxicspikes", "megahorn", "rockslide", "earthquake", "swordsdance", "poisonjab"],
		randomDoubleBattleMoves: ["substitute", "protect", "megahorn", "rockslide", "poisonjab", "swordsdance", "aquatail", "superpower"],
		tier: "Gen6 UUBL",
		doublesTier: "(DUU)",
	},
	cottoneegen6: {
		tier: "Gen6 LC",
	},
	whimsicottgen6: {
		randomBattleMoves: ["encore", "taunt", "leechseed", "uturn", "toxic", "stunspore", "memento", "tailwind", "moonblast"],
		randomDoubleBattleMoves: ["encore", "taunt", "substitute", "leechseed", "uturn", "helpinghand", "stunspore", "moonblast", "tailwind", "dazzlinggleam", "gigadrain", "protect"],
		tier: "Gen6 UU",
		doublesTier: "DOU",
	},
	petililgen6: {
		tier: "Gen6 LC",
	},
	lilligantgen6: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "petaldance", "gigadrain", "hiddenpowerfire", "hiddenpowerrock"],
		randomDoubleBattleMoves: ["quiverdance", "gigadrain", "sleeppowder", "hiddenpowerice", "hiddenpowerfire", "hiddenpowerrock", "petaldance", "helpinghand", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	basculingen6: {
		randomBattleMoves: ["waterfall", "aquajet", "superpower", "crunch", "zenheadbutt"],
		randomDoubleBattleMoves: ["waterfall", "aquajet", "superpower", "crunch", "doubleedge", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	basculinbluestripedgen6: {
		randomBattleMoves: ["waterfall", "aquajet", "superpower", "crunch", "zenheadbutt"],
		randomDoubleBattleMoves: ["waterfall", "aquajet", "superpower", "crunch", "doubleedge", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	sandilegen6: {
		tier: "Gen6 LC",
	},
	krokorokgen6: {
		tier: "Gen6 NFE",
	},
	krookodilegen6: {
		randomBattleMoves: ["earthquake", "stoneedge", "pursuit", "knockoff", "stealthrock", "superpower"],
		randomDoubleBattleMoves: ["earthquake", "stoneedge", "protect", "knockoff", "superpower"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	darumakagen6: {
		tier: "Gen6 LC",
	},
	darmanitangen6: {
		randomBattleMoves: ["uturn", "flareblitz", "rockslide", "earthquake", "superpower"],
		randomDoubleBattleMoves: ["uturn", "flareblitz", "firepunch", "rockslide", "earthquake", "superpower", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	maractusgen6: {
		randomBattleMoves: ["spikes", "gigadrain", "leechseed", "hiddenpowerfire", "toxic", "suckerpunch", "spikyshield"],
		randomDoubleBattleMoves: ["grassyterrain", "gigadrain", "leechseed", "hiddenpowerfire", "helpinghand", "suckerpunch", "spikyshield"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	dwebblegen6: {
		tier: "Gen6 LC",
	},
	crustlegen6: {
		randomBattleMoves: ["stealthrock", "spikes", "shellsmash", "earthquake", "rockblast", "xscissor", "stoneedge"],
		randomDoubleBattleMoves: ["protect", "shellsmash", "earthquake", "rockslide", "xscissor", "stoneedge"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	scraggygen6: {
		tier: "Gen6 LC",
	},
	scraftygen6: {
		randomBattleMoves: ["dragondance", "icepunch", "highjumpkick", "drainpunch", "rest", "bulkup", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "drainpunch", "knockoff", "icepunch", "stoneedge", "protect"],
		tier: "Gen6 RU",
		doublesTier: "DOU",
	},
	sigilyphgen6: {
		randomBattleMoves: ["cosmicpower", "roost", "storedpower", "psychoshift"],
		randomDoubleBattleMoves: ["psyshock", "heatwave", "icebeam", "airslash", "energyball", "shadowball", "tailwind", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	yamaskgen6: {
		tier: "Gen6 LC",
	},
	cofagrigusgen6: {
		randomBattleMoves: ["nastyplot", "trickroom", "shadowball", "hiddenpowerfighting", "willowisp", "haze", "painsplit", "toxicspikes"],
		randomDoubleBattleMoves: ["nastyplot", "trickroom", "shadowball", "hiddenpowerfighting", "willowisp", "protect", "painsplit"],
		tier: "Gen6 RU",
		doublesTier: "DUU",
	},
	tirtougagen6: {
		tier: "Gen6 LC",
	},
	carracostagen6: {
		randomBattleMoves: ["shellsmash", "aquajet", "hydropump", "stoneedge", "earthquake"],
		randomDoubleBattleMoves: ["shellsmash", "aquajet", "waterfall", "stoneedge", "earthquake", "protect", "wideguard", "rockslide"],
		tier: "Gen6 PUBL",
		doublesTier: "(DUU)",
	},
	archengen6: {
		tier: "Gen6 LC",
	},
	archeopsgen6: {
		randomBattleMoves: ["headsmash", "acrobatics", "stoneedge", "earthquake", "aquatail", "uturn", "endeavor"],
		randomDoubleBattleMoves: ["stoneedge", "rockslide", "earthquake", "uturn", "acrobatics", "tailwind", "taunt", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	trubbishgen6: {
		tier: "Gen6 LC",
	},
	garbodorgen6: {
		randomBattleMoves: ["spikes", "toxicspikes", "gunkshot", "haze", "painsplit", "toxic", "drainpunch"],
		randomDoubleBattleMoves: ["protect", "painsplit", "gunkshot", "seedbomb", "drainpunch", "explosion", "rockblast"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	zoruagen6: {
		tier: "Gen6 LC",
	},
	zoroarkgen6: {
		randomBattleMoves: ["suckerpunch", "darkpulse", "focusblast", "flamethrower", "uturn", "nastyplot", "knockoff", "trick", "sludgebomb"],
		randomDoubleBattleMoves: ["suckerpunch", "darkpulse", "focusblast", "flamethrower", "uturn", "nastyplot", "knockoff", "protect"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	minccinogen6: {
		tier: "Gen6 LC",
	},
	cinccinogen6: {
		randomBattleMoves: ["tailslap", "bulletseed", "rockblast", "knockoff", "uturn"],
		randomDoubleBattleMoves: ["tailslap", "aquatail", "uturn", "knockoff", "bulletseed", "rockblast", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	gothitagen6: {
		tier: "Gen6 LC",
	},
	gothoritagen6: {
		tier: "Gen6 NFE",
	},
	gothitellegen6: {
		randomBattleMoves: ["calmmind", "psychic", "hiddenpowerfire", "rest", "sleeptalk", "toxic"],
		randomDoubleBattleMoves: ["psychic", "thunderbolt", "shadowball", "hiddenpowerfighting", "reflect", "lightscreen", "psyshock", "energyball", "trickroom", "taunt", "healpulse", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	solosisgen6: {
		tier: "Gen6 LC",
	},
	duosiongen6: {
		tier: "Gen6 NFE",
	},
	reuniclusgen6: {
		randomBattleMoves: ["calmmind", "recover", "psychic", "focusblast", "shadowball", "trickroom", "psyshock"],
		randomDoubleBattleMoves: ["energyball", "helpinghand", "psychic", "focusblast", "shadowball", "trickroom", "psyshock", "hiddenpowerfire", "protect"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	ducklettgen6: {
		tier: "Gen6 LC",
	},
	swannagen6: {
		randomBattleMoves: ["airslash", "roost", "hurricane", "icebeam", "raindance", "defog", "scald"],
		randomDoubleBattleMoves: ["airslash", "roost", "hurricane", "surf", "icebeam", "raindance", "tailwind", "scald", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	vanillitegen6: {
		tier: "Gen6 LC",
	},
	vanillishgen6: {
		tier: "Gen6 NFE",
	},
	vanilluxegen6: {
		randomBattleMoves: ["icebeam", "explosion", "hiddenpowerground", "flashcannon", "autotomize", "freezedry"],
		randomDoubleBattleMoves: ["icebeam", "taunt", "hiddenpowerground", "flashcannon", "autotomize", "protect", "freezedry"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	deerlinggen6: {
		tier: "Gen6 LC",
	},
	sawsbuckgen6: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	emolgagen6: {
		randomBattleMoves: ["thunderbolt", "acrobatics", "encore", "uturn", "knockoff", "roost", "toxic"],
		randomDoubleBattleMoves: ["helpinghand", "tailwind", "encore", "substitute", "thunderbolt", "airslash", "roost", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	karrablastgen6: {
		tier: "Gen6 LC",
	},
	escavaliergen6: {
		randomBattleMoves: ["megahorn", "pursuit", "ironhead", "knockoff", "swordsdance", "drillrun"],
		randomDoubleBattleMoves: ["megahorn", "protect", "ironhead", "knockoff", "swordsdance", "drillrun"],
		tier: "Gen6 RU",
		doublesTier: "DUU",
	},
	foongusgen6: {
		tier: "Gen6 LC",
	},
	amoongussgen6: {
		randomBattleMoves: ["spore", "stunspore", "gigadrain", "clearsmog", "hiddenpowerfire", "synthesis", "sludgebomb", "foulplay"],
		randomDoubleBattleMoves: ["spore", "stunspore", "gigadrain", "ragepowder", "hiddenpowerfire", "synthesis", "sludgebomb", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	frillishgen6: {
		tier: "Gen6 LC",
	},
	jellicentgen6: {
		randomBattleMoves: ["scald", "willowisp", "recover", "toxic", "shadowball", "icebeam", "taunt"],
		randomDoubleBattleMoves: ["scald", "willowisp", "recover", "trickroom", "shadowball", "icebeam", "waterspout", "icywind", "protect"],
		tier: "Gen6 RU",
		doublesTier: "DUU",
	},
	alomomolagen6: {
		randomBattleMoves: ["wish", "protect", "knockoff", "toxic", "scald"],
		randomDoubleBattleMoves: ["wish", "protect", "knockoff", "icywind", "scald", "helpinghand", "wideguard"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	joltikgen6: {
		tier: "Gen6 LC",
	},
	galvantulagen6: {
		randomBattleMoves: ["thunder", "hiddenpowerice", "gigadrain", "bugbuzz", "voltswitch", "stickyweb"],
		randomDoubleBattleMoves: ["thunder", "hiddenpowerice", "gigadrain", "bugbuzz", "voltswitch", "stickyweb", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	ferroseedgen6: {
		tier: "Gen6 NU",
		doublesTier: "LC",
	},
	ferrothorngen6: {
		randomBattleMoves: ["spikes", "stealthrock", "leechseed", "powerwhip", "protect", "knockoff", "gyroball"],
		randomDoubleBattleMoves: ["gyroball", "stealthrock", "leechseed", "powerwhip", "knockoff", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	klinkgen6: {
		tier: "Gen6 LC",
	},
	klanggen6: {
		tier: "Gen6 NFE",
	},
	klinklanggen6: {
		randomBattleMoves: ["shiftgear", "return", "geargrind", "wildcharge", "substitute"],
		randomDoubleBattleMoves: ["shiftgear", "return", "geargrind", "wildcharge", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	tynamogen6: {
		tier: "Gen6 LC",
	},
	eelektrikgen6: {
		tier: "Gen6 NFE",
	},
	eelektrossgen6: {
		randomBattleMoves: ["thunderbolt", "flamethrower", "uturn", "gigadrain", "knockoff", "superpower", "hiddenpowerice"],
		randomDoubleBattleMoves: ["thunderbolt", "flamethrower", "uturn", "voltswitch", "knockoff", "gigadrain", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	elgyemgen6: {
		tier: "Gen6 LC",
	},
	beheeyemgen6: {
		randomBattleMoves: ["nastyplot", "psychic", "psyshock", "thunderbolt", "hiddenpowerfighting", "trick", "trickroom", "signalbeam"],
		randomDoubleBattleMoves: ["nastyplot", "psychic", "thunderbolt", "hiddenpowerfighting", "recover", "trick", "trickroom", "signalbeam", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	litwickgen6: {
		tier: "Gen6 LC",
	},
	lampentgen6: {
		tier: "Gen6 NFE",
	},
	chandeluregen6: {
		randomBattleMoves: ["calmmind", "shadowball", "energyball", "fireblast", "hiddenpowerground", "trick", "substitute", "painsplit"],
		randomDoubleBattleMoves: ["shadowball", "energyball", "overheat", "heatwave", "hiddenpowerice", "trick", "protect"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	axewgen6: {
		tier: "Gen6 LC",
	},
	fraxuregen6: {
		tier: "Gen6 NFE",
	},
	haxorusgen6: {
		randomBattleMoves: ["dragondance", "swordsdance", "outrage", "earthquake", "poisonjab", "taunt"],
		randomDoubleBattleMoves: ["dragondance", "swordsdance", "protect", "dragonclaw", "earthquake", "poisonjab", "taunt", "substitute"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	cubchoogen6: {
		tier: "Gen6 LC",
	},
	bearticgen6: {
		randomBattleMoves: ["iciclecrash", "superpower", "nightslash", "stoneedge", "swordsdance", "aquajet"],
		randomDoubleBattleMoves: ["iciclecrash", "superpower", "nightslash", "stoneedge", "swordsdance", "aquajet", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	cryogonalgen6: {
		randomBattleMoves: ["icebeam", "recover", "toxic", "rapidspin", "haze", "freezedry", "hiddenpowerground"],
		randomDoubleBattleMoves: ["icebeam", "recover", "icywind", "protect", "reflect", "freezedry", "hiddenpowerground"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	shelmetgen6: {
		tier: "Gen6 LC",
	},
	accelgorgen6: {
		randomBattleMoves: ["spikes", "yawn", "bugbuzz", "focusblast", "energyball", "hiddenpowerrock", "encore"],
		randomDoubleBattleMoves: ["protect", "yawn", "bugbuzz", "focusblast", "gigadrain", "hiddenpowerrock", "encore", "sludgebomb"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	stunfiskgen6: {
		randomBattleMoves: ["discharge", "earthpower", "scald", "toxic", "rest", "sleeptalk", "stealthrock"],
		randomDoubleBattleMoves: ["discharge", "earthpower", "scald", "electroweb", "protect", "stealthrock"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	mienfoogen6: {
		tier: "Gen6 LC",
	},
	mienshaogen6: {
		randomBattleMoves: ["uturn", "fakeout", "highjumpkick", "stoneedge", "poisonjab", "swordsdance", "knockoff"],
		randomDoubleBattleMoves: ["uturn", "fakeout", "highjumpkick", "stoneedge", "drainpunch", "swordsdance", "wideguard", "knockoff", "feint", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	druddigongen6: {
		randomBattleMoves: ["outrage", "earthquake", "suckerpunch", "dragontail", "taunt", "glare", "stealthrock", "gunkshot", "firepunch"],
		randomDoubleBattleMoves: ["superpower", "earthquake", "suckerpunch", "dragonclaw", "glare", "protect", "firepunch", "thunderpunch"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	golettgen6: {
		tier: "Gen6 LC",
	},
	golurkgen6: {
		randomBattleMoves: ["earthquake", "shadowpunch", "dynamicpunch", "icepunch", "stealthrock", "rockpolish"],
		randomDoubleBattleMoves: ["earthquake", "shadowpunch", "dynamicpunch", "icepunch", "stoneedge", "protect", "rockpolish"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	pawniardgen6: {
		tier: "Gen6 PU",
		doublesTier: "LC",
	},
	bisharpgen6: {
		randomBattleMoves: ["swordsdance", "knockoff", "ironhead", "suckerpunch", "lowkick"],
		randomDoubleBattleMoves: ["swordsdance", "substitute", "suckerpunch", "ironhead", "brickbreak", "knockoff", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	bouffalantgen6: {
		randomBattleMoves: ["headcharge", "earthquake", "stoneedge", "megahorn", "swordsdance", "superpower"],
		randomDoubleBattleMoves: ["headcharge", "earthquake", "stoneedge", "megahorn", "swordsdance", "superpower", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	ruffletgen6: {
		tier: "Gen6 LC",
	},
	braviarygen6: {
		randomBattleMoves: ["bravebird", "superpower", "return", "uturn", "substitute", "bulkup", "roost"],
		randomDoubleBattleMoves: ["bravebird", "superpower", "return", "uturn", "tailwind", "rockslide", "bulkup", "roost", "skydrop", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	vullabygen6: {
		tier: "Gen6 PU",
		doublesTier: "LC",
	},
	mandibuzzgen6: {
		randomBattleMoves: ["foulplay", "bravebird", "roost", "taunt", "toxic", "uturn", "defog"],
		randomDoubleBattleMoves: ["knockoff", "roost", "taunt", "tailwind", "snarl", "uturn", "bravebird", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	heatmorgen6: {
		randomBattleMoves: ["fireblast", "suckerpunch", "focusblast", "gigadrain", "knockoff"],
		randomDoubleBattleMoves: ["fireblast", "suckerpunch", "focusblast", "gigadrain", "heatwave", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	durantgen6: {
		randomBattleMoves: ["honeclaws", "ironhead", "xscissor", "stoneedge", "superpower"],
		randomDoubleBattleMoves: ["honeclaws", "ironhead", "xscissor", "rockslide", "protect", "superpower"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	deinogen6: {
		tier: "Gen6 LC",
	},
	zweilousgen6: {
		tier: "Gen6 NFE",
	},
	hydreigongen6: {
		randomBattleMoves: ["uturn", "dracometeor", "dragonpulse", "earthpower", "fireblast", "darkpulse", "roost", "flashcannon", "superpower"],
		randomDoubleBattleMoves: ["uturn", "dracometeor", "dragonpulse", "earthpower", "fireblast", "darkpulse", "roost", "flashcannon", "superpower", "tailwind", "protect"],
		tier: "Gen6 UU",
		doublesTier: "DOU",
	},
	larvestagen6: {
		tier: "Gen6 LC",
	},
	volcaronagen6: {
		randomBattleMoves: ["quiverdance", "fierydance", "fireblast", "bugbuzz", "roost", "gigadrain", "hiddenpowerice", "hiddenpowerground"],
		randomDoubleBattleMoves: ["quiverdance", "fierydance", "fireblast", "bugbuzz", "roost", "gigadrain", "hiddenpowerice", "heatwave", "willowisp", "ragepowder", "tailwind", "protect"],
		tier: "Gen6 UUBL",
		doublesTier: "DUU",
	},
	cobaliongen6: {
		randomBattleMoves: ["closecombat", "ironhead", "swordsdance", "substitute", "stoneedge", "voltswitch", "hiddenpowerice", "taunt", "stealthrock"],
		randomDoubleBattleMoves: ["closecombat", "ironhead", "swordsdance", "substitute", "stoneedge", "thunderwave", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	terrakiongen6: {
		randomBattleMoves: ["swordsdance", "closecombat", "stoneedge", "earthquake", "substitute", "quickattack"],
		randomDoubleBattleMoves: ["stoneedge", "closecombat", "substitute", "rockslide", "earthquake", "protect"],
		tier: "Gen6 UUBL",
		doublesTier: "DOU",
	},
	viriziongen6: {
		randomBattleMoves: ["swordsdance", "closecombat", "leafblade", "stoneedge", "calmmind", "focusblast", "gigadrain", "hiddenpowerice", "substitute"],
		randomDoubleBattleMoves: ["taunt", "closecombat", "stoneedge", "leafblade", "swordsdance", "synthesis", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	tornadusgen6: {
		randomBattleMoves: ["bulkup", "acrobatics", "knockoff", "rest", "sleeptalk", "superpower", "tailwind"],
		randomDoubleBattleMoves: ["hurricane", "airslash", "uturn", "superpower", "focusblast", "taunt", "substitute", "heatwave", "tailwind", "protect", "skydrop"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	tornadustheriangen6: {
		randomBattleMoves: ["hurricane", "heatwave", "knockoff", "superpower", "uturn", "taunt"],
		randomDoubleBattleMoves: ["hurricane", "airslash", "focusblast", "uturn", "heatwave", "skydrop", "tailwind", "taunt", "protect"],
		tier: "Gen6 OU",
		doublesTier: "(DUU)",
	},
	thundurusgen6: {
		randomBattleMoves: ["thunderwave", "nastyplot", "thunderbolt", "hiddenpowerice", "hiddenpowerflying", "focusblast", "substitute", "knockoff", "taunt"],
		randomDoubleBattleMoves: ["thunderwave", "nastyplot", "thunderbolt", "hiddenpowerice", "hiddenpowerflying", "focusblast", "substitute", "knockoff", "taunt", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	thundurustheriangen6: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "hiddenpowerflying", "hiddenpowerice", "focusblast", "voltswitch"],
		randomDoubleBattleMoves: ["nastyplot", "thunderbolt", "hiddenpowerflying", "hiddenpowerice", "focusblast", "voltswitch", "protect"],
		tier: "Gen6 UUBL",
		doublesTier: "(DUU)",
	},
	reshiramgen6: {
		randomBattleMoves: ["blueflare", "dracometeor", "dragonpulse", "toxic", "flamecharge", "stoneedge", "roost"],
		randomDoubleBattleMoves: ["blueflare", "dracometeor", "dragonpulse", "heatwave", "flamecharge", "roost", "protect", "tailwind"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	zekromgen6: {
		randomBattleMoves: ["boltstrike", "outrage", "dragonclaw", "dracometeor", "voltswitch", "honeclaws", "substitute", "roost"],
		randomDoubleBattleMoves: ["voltswitch", "protect", "dragonclaw", "boltstrike", "honeclaws", "substitute", "dracometeor", "fusionbolt", "roost", "tailwind"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	landorusgen6: {
		randomBattleMoves: ["calmmind", "rockpolish", "earthpower", "focusblast", "psychic", "sludgewave", "stealthrock", "knockoff", "rockslide"],
		randomDoubleBattleMoves: ["earthpower", "focusblast", "hiddenpowerice", "psychic", "sludgebomb", "rockslide", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	landorustheriangen6: {
		randomBattleMoves: ["swordsdance", "rockpolish", "earthquake", "stoneedge", "uturn", "superpower", "stealthrock"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "stoneedge", "uturn", "superpower", "knockoff", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	kyuremgen6: {
		randomBattleMoves: ["dracometeor", "icebeam", "earthpower", "outrage", "substitute", "focusblast", "roost"],
		randomDoubleBattleMoves: ["substitute", "icebeam", "dracometeor", "dragonpulse", "focusblast", "glaciate", "earthpower", "roost", "protect"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	kyuremblackgen6: {
		randomBattleMoves: ["outrage", "fusionbolt", "icebeam", "roost", "substitute", "earthpower", "dragonclaw"],
		randomDoubleBattleMoves: ["protect", "fusionbolt", "icebeam", "roost", "substitute", "honeclaws", "earthpower", "dragonclaw"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	kyuremwhitegen6: {
		randomBattleMoves: ["dracometeor", "icebeam", "fusionflare", "earthpower", "focusblast", "dragonpulse", "substitute", "roost", "toxic"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "icebeam", "fusionflare", "earthpower", "focusblast", "roost", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	keldeogen6: {
		randomBattleMoves: ["hydropump", "secretsword", "calmmind", "hiddenpowerflying", "hiddenpowerelectric", "substitute", "scald", "icywind"],
		randomDoubleBattleMoves: ["hydropump", "secretsword", "protect", "hiddenpowerflying", "hiddenpowerelectric", "substitute", "surf", "icywind", "taunt"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	keldeoresolutegen6: {
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	meloettagen6: {
		randomBattleMoves: ["uturn", "calmmind", "psyshock", "hypervoice", "shadowball", "focusblast"],
		randomDoubleBattleMoves: ["calmmind", "psyshock", "thunderbolt", "hypervoice", "shadowball", "focusblast", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	meloettapirouettegen6: {
		randomBattleMoves: ["relicsong", "closecombat", "knockoff", "return"],
		randomDoubleBattleMoves: ["relicsong", "closecombat", "knockoff", "return", "protect"],
	},
	genesectgen6: {
		randomBattleMoves: ["technoblast", "uturn", "icebeam", "flamethrower", "thunderbolt", "ironhead", "shiftgear", "extremespeed", "blazekick"],
		randomDoubleBattleMoves: ["uturn", "bugbuzz", "icebeam", "flamethrower", "thunderbolt", "ironhead", "shiftgear", "extremespeed", "blazekick", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DUU",
	},
	genesectburngen6: {
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	genesectchillgen6: {
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	genesectdousegen6: {
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	genesectshockgen6: {
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	chespingen6: {
		tier: "Gen6 LC",
	},
	quilladingen6: {
		tier: "Gen6 NFE",
	},
	chesnaughtgen6: {
		randomBattleMoves: ["leechseed", "synthesis", "spikes", "drainpunch", "spikyshield", "woodhammer"],
		randomDoubleBattleMoves: ["leechseed", "synthesis", "hammerarm", "spikyshield", "stoneedge", "woodhammer", "rockslide"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	fennekingen6: {
		tier: "Gen6 LC",
	},
	braixengen6: {
		tier: "Gen6 NFE",
	},
	delphoxgen6: {
		randomBattleMoves: ["calmmind", "fireblast", "psyshock", "grassknot", "switcheroo", "shadowball"],
		randomDoubleBattleMoves: ["calmmind", "fireblast", "psyshock", "grassknot", "switcheroo", "shadowball", "heatwave", "dazzlinggleam", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	froakiegen6: {
		tier: "Gen6 LC",
	},
	frogadiergen6: {
		tier: "Gen6 NFE",
	},
	greninjagen6: {
		randomBattleMoves: ["hydropump", "icebeam", "gunkshot", "uturn", "spikes", "toxicspikes", "taunt"],
		randomDoubleBattleMoves: ["hydropump", "uturn", "surf", "icebeam", "matblock", "taunt", "darkpulse", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "(DUU)",
	},
	bunnelbygen6: {
		tier: "Gen6 LC",
	},
	diggersbygen6: {
		randomBattleMoves: ["earthquake", "return", "wildcharge", "uturn", "swordsdance", "quickattack", "knockoff", "agility"],
		randomDoubleBattleMoves: ["earthquake", "uturn", "return", "wildcharge", "protect", "quickattack"],
		tier: "Gen6 UUBL",
		doublesTier: "(DUU)",
	},
	fletchlinggen6: {
		tier: "Gen6 LC",
	},
	fletchindergen6: {
		randomBattleMoves: ["roost", "swordsdance", "uturn", "return", "overheat", "flamecharge", "tailwind", "acrobatics"],
		tier: "Gen6 RU",
		doublesTier: "NFE",
	},
	talonflamegen6: {
		randomBattleMoves: ["bravebird", "flareblitz", "roost", "swordsdance", "uturn", "willowisp", "tailwind"],
		randomDoubleBattleMoves: ["bravebird", "flareblitz", "roost", "swordsdance", "uturn", "willowisp", "tailwind", "taunt", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	scatterbuggen6: {
		tier: "Gen6 LC",
	},
	spewpagen6: {
		tier: "Gen6 NFE",
	},
	vivillongen6: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "hurricane", "energyball", "substitute"],
		randomDoubleBattleMoves: ["sleeppowder", "quiverdance", "hurricane", "bugbuzz", "roost", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	litleogen6: {
		tier: "Gen6 LC",
	},
	pyroargen6: {
		randomBattleMoves: ["sunnyday", "fireblast", "hypervoice", "solarbeam", "willowisp", "darkpulse"],
		randomDoubleBattleMoves: ["hypervoice", "fireblast", "willowisp", "protect", "sunnyday", "solarbeam"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	flabebegen6: {
		tier: "Gen6 LC",
	},
	floettegen6: {
		tier: "Gen6 NFE",
	},
	floetteeternalgen6: {
		randomBattleMoves: ["lightofruin", "psychic", "hiddenpowerfire", "hiddenpowerground", "moonblast"],
		randomDoubleBattleMoves: ["lightofruin", "dazzlinggleam", "wish", "psychic", "aromatherapy", "protect", "calmmind"],
		isNonstandard: "Unobtainable",
		tier: "Gen6 Illegal",
	},
	florgesgen6: {
		randomBattleMoves: ["calmmind", "moonblast", "synthesis", "aromatherapy", "wish", "toxic", "protect"],
		randomDoubleBattleMoves: ["moonblast", "dazzlinggleam", "wish", "psychic", "aromatherapy", "protect", "calmmind"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	skiddogen6: {
		tier: "Gen6 LC",
	},
	gogoatgen6: {
		randomBattleMoves: ["bulkup", "hornleech", "earthquake", "rockslide", "substitute", "leechseed", "milkdrink"],
		randomDoubleBattleMoves: ["hornleech", "earthquake", "brickbreak", "bulkup", "leechseed", "milkdrink", "rockslide", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	panchamgen6: {
		tier: "Gen6 LC",
	},
	pangorogen6: {
		randomBattleMoves: ["knockoff", "superpower", "gunkshot", "icepunch", "partingshot", "drainpunch"],
		randomDoubleBattleMoves: ["partingshot", "hammerarm", "crunch", "circlethrow", "icepunch", "earthquake", "poisonjab", "protect"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	furfrougen6: {
		randomBattleMoves: ["return", "cottonguard", "thunderwave", "substitute", "toxic", "suckerpunch", "uturn", "rest"],
		randomDoubleBattleMoves: ["return", "cottonguard", "uturn", "thunderwave", "suckerpunch", "snarl", "wildcharge", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	espurrgen6: {
		tier: "Gen6 LC",
	},
	meowsticgen6: {
		randomBattleMoves: ["toxic", "yawn", "thunderwave", "psychic", "reflect", "lightscreen", "healbell"],
		randomDoubleBattleMoves: ["fakeout", "thunderwave", "psychic", "reflect", "lightscreen", "safeguard", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	meowsticfgen6: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "shadowball", "energyball", "thunderbolt"],
		randomDoubleBattleMoves: ["psyshock", "darkpulse", "fakeout", "energyball", "signalbeam", "thunderbolt", "protect", "helpinghand"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	honedgegen6: {
		tier: "Gen6 LC",
	},
	doubladegen6: {
		randomBattleMoves: ["swordsdance", "shadowclaw", "shadowsneak", "ironhead", "sacredsword"],
		randomDoubleBattleMoves: ["swordsdance", "shadowclaw", "shadowsneak", "ironhead", "sacredsword", "rockslide", "protect"],
		tier: "Gen6 UU",
		doublesTier: "NFE",
	},
	aegislashgen6: {
		randomBattleMoves: ["flashcannon", "hiddenpowerice", "kingsshield", "shadowball", "shadowsneak"],
		randomDoubleBattleMoves: ["flashcannon", "hiddenpowerice", "kingsshield", "shadowball", "shadowsneak"],
		tier: "Gen6 Uber",
		doublesTier: "DOU",
	},
	aegislashbladegen6: {
		randomBattleMoves: ["ironhead", "sacredsword", "shadowclaw", "shadowsneak", "swordsdance"],
		randomDoubleBattleMoves: ["ironhead", "kingsshield", "sacredsword", "shadowclaw", "shadowsneak", "swordsdance"],
	},
	spritzeegen6: {
		tier: "Gen6 LC",
	},
	aromatissegen6: {
		randomBattleMoves: ["wish", "protect", "moonblast", "aromatherapy", "reflect", "lightscreen"],
		randomDoubleBattleMoves: ["moonblast", "aromatherapy", "wish", "trickroom", "thunderbolt", "protect", "healpulse"],
		tier: "Gen6 RU",
		doublesTier: "DUU",
	},
	swirlixgen6: {
		tier: "Gen6 LC Uber",
	},
	slurpuffgen6: {
		randomBattleMoves: ["bellydrum", "playrough", "return", "drainpunch", "calmmind", "dazzlinggleam", "flamethrower", "surf"],
		randomDoubleBattleMoves: ["bellydrum", "playrough", "return", "drainpunch", "dazzlinggleam", "surf", "psychic", "flamethrower", "protect"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	inkaygen6: {
		tier: "Gen6 LC",
	},
	malamargen6: {
		randomBattleMoves: ["superpower", "knockoff", "psychocut", "substitute", "trickroom"],
		randomDoubleBattleMoves: ["superpower", "psychocut", "rockslide", "trickroom", "knockoff", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	binaclegen6: {
		tier: "Gen6 LC",
	},
	barbaraclegen6: {
		randomBattleMoves: ["shellsmash", "stoneedge", "razorshell", "earthquake", "crosschop", "stealthrock"],
		randomDoubleBattleMoves: ["shellsmash", "razorshell", "earthquake", "crosschop", "rockslide", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	skrelpgen6: {
		tier: "Gen6 LC",
	},
	dragalgegen6: {
		randomBattleMoves: ["dracometeor", "sludgewave", "focusblast", "scald", "hiddenpowerfire", "toxicspikes", "dragonpulse"],
		randomDoubleBattleMoves: ["dracometeor", "sludgebomb", "focusblast", "scald", "hiddenpowerfire", "protect", "dragonpulse"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	claunchergen6: {
		tier: "Gen6 LC",
	},
	clawitzergen6: {
		randomBattleMoves: ["scald", "waterpulse", "darkpulse", "aurasphere", "icebeam", "uturn"],
		randomDoubleBattleMoves: ["waterpulse", "icebeam", "uturn", "darkpulse", "aurasphere", "muddywater", "helpinghand", "protect"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	helioptilegen6: {
		tier: "Gen6 LC",
	},
	helioliskgen6: {
		randomBattleMoves: ["raindance", "hypervoice", "surf", "darkpulse", "hiddenpowerice", "voltswitch", "thunderbolt"],
		randomDoubleBattleMoves: ["surf", "voltswitch", "hiddenpowerice", "raindance", "thunder", "darkpulse", "thunderbolt", "protect"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	tyruntgen6: {
		tier: "Gen6 LC",
	},
	tyrantrumgen6: {
		randomBattleMoves: ["stealthrock", "dragondance", "dragonclaw", "earthquake", "superpower", "outrage", "headsmash"],
		randomDoubleBattleMoves: ["rockslide", "dragondance", "headsmash", "dragonclaw", "earthquake", "icefang", "firefang", "protect"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	amauragen6: {
		tier: "Gen6 LC",
	},
	aurorusgen6: {
		randomBattleMoves: ["ancientpower", "blizzard", "thunderwave", "earthpower", "freezedry", "hypervoice", "stealthrock"],
		randomDoubleBattleMoves: ["hypervoice", "ancientpower", "thunderwave", "flashcannon", "freezedry", "icywind", "protect"],
		tier: "Gen6 NU",
		doublesTier: "(DUU)",
	},
	sylveongen6: {
		randomBattleMoves: ["hypervoice", "calmmind", "psyshock", "hiddenpowerfire", "wish", "protect"],
		randomDoubleBattleMoves: ["hypervoice", "calmmind", "wish", "protect", "psyshock", "helpinghand", "shadowball", "hiddenpowerground"],
		tier: "Gen6 UU",
		doublesTier: "DOU",
	},
	hawluchagen6: {
		randomBattleMoves: ["substitute", "swordsdance", "highjumpkick", "acrobatics", "roost", "stoneedge"],
		randomDoubleBattleMoves: ["swordsdance", "highjumpkick", "uturn", "stoneedge", "skydrop", "encore", "protect"],
		tier: "Gen6 UUBL",
		doublesTier: "(DUU)",
	},
	dedennegen6: {
		randomBattleMoves: ["substitute", "recycle", "thunderbolt", "nuzzle", "grassknot", "hiddenpowerice", "toxic"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "nuzzle", "grassknot", "hiddenpowerice", "uturn", "helpinghand", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	carbinkgen6: {
		randomBattleMoves: ["stealthrock", "lightscreen", "reflect", "explosion", "powergem", "moonblast"],
		randomDoubleBattleMoves: ["trickroom", "lightscreen", "reflect", "explosion", "powergem", "moonblast", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	goomygen6: {
		tier: "Gen6 LC",
	},
	sliggoogen6: {
		tier: "Gen6 NFE",
	},
	goodragen6: {
		randomBattleMoves: ["dracometeor", "dragonpulse", "fireblast", "sludgebomb", "thunderbolt", "earthquake", "dragontail"],
		randomDoubleBattleMoves: ["thunderbolt", "icebeam", "dragonpulse", "fireblast", "muddywater", "dracometeor", "focusblast", "protect"],
		tier: "Gen6 UU",
		doublesTier: "DUU",
	},
	klefkigen6: {
		randomBattleMoves: ["reflect", "lightscreen", "spikes", "magnetrise", "playrough", "thunderwave", "foulplay", "toxic"],
		randomDoubleBattleMoves: ["reflect", "lightscreen", "safeguard", "playrough", "substitute", "thunderwave", "protect", "flashcannon", "dazzlinggleam"],
		tier: "Gen6 UU",
		doublesTier: "(DUU)",
	},
	phantumpgen6: {
		tier: "Gen6 LC",
	},
	trevenantgen6: {
		randomBattleMoves: ["hornleech", "shadowclaw", "earthquake", "rockslide", "woodhammer", "trickroom"],
		randomDoubleBattleMoves: ["hornleech", "woodhammer", "leechseed", "shadowclaw", "willowisp", "trickroom", "earthquake", "rockslide", "protect"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	pumpkaboogen6: {
		tier: "Gen6 LC",
	},
	pumpkaboosmallgen6: {
		tier: "Gen6 LC",
	},
	pumpkaboolargegen6: {
		tier: "Gen6 LC",
	},
	pumpkaboosupergen6: {
		tier: "Gen6 LC",
	},
	gourgeistgen6: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "seedbomb", "leechseed", "phantomforce", "explosion", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	gourgeistsmallgen6: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "seedbomb", "leechseed", "phantomforce", "explosion", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	gourgeistlargegen6: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "seedbomb", "leechseed", "phantomforce", "explosion", "protect", "trickroom"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	gourgeistsupergen6: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "seedbomb", "leechseed", "phantomforce", "explosion", "protect", "trickroom"],
		tier: "Gen6 PU",
		doublesTier: "(DUU)",
	},
	bergmitegen6: {
		tier: "Gen6 LC",
	},
	avalugggen6: {
		randomBattleMoves: ["avalanche", "recover", "toxic", "rapidspin", "roar", "earthquake"],
		randomDoubleBattleMoves: ["avalanche", "recover", "earthquake", "protect"],
		tier: "Gen6 (PU)",
		doublesTier: "(DUU)",
	},
	noibatgen6: {
		tier: "Gen6 LC",
	},
	noiverngen6: {
		randomBattleMoves: ["dracometeor", "hurricane", "flamethrower", "boomburst", "switcheroo", "uturn", "roost", "taunt"],
		randomDoubleBattleMoves: ["airslash", "hurricane", "dragonpulse", "dracometeor", "focusblast", "flamethrower", "uturn", "roost", "boomburst", "switcheroo", "tailwind", "taunt", "protect"],
		tier: "Gen6 RUBL",
		doublesTier: "(DUU)",
	},
	xerneasgen6: {
		randomBattleMoves: ["geomancy", "moonblast", "focusblast", "thunderbolt", "hiddenpowerfire", "psyshock", "rockslide", "closecombat"],
		randomDoubleBattleMoves: ["geomancy", "dazzlinggleam", "thunder", "focusblast", "thunderbolt", "hiddenpowerfire", "psyshock", "rockslide", "closecombat", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	yveltalgen6: {
		randomBattleMoves: ["darkpulse", "oblivionwing", "focusblast", "uturn", "foulplay", "suckerpunch", "toxic", "taunt", "roost"],
		randomDoubleBattleMoves: ["darkpulse", "oblivionwing", "taunt", "focusblast", "hurricane", "roost", "suckerpunch", "snarl", "skydrop", "protect"],
		tier: "Gen6 Uber",
		doublesTier: "DUber",
	},
	zygardegen6: {
		randomBattleMoves: ["dragondance", "earthquake", "outrage", "extremespeed", "stoneedge"],
		randomDoubleBattleMoves: ["dragondance", "landswrath", "extremespeed", "rockslide", "coil", "stoneedge", "glare", "protect"],
		tier: "Gen6 UUBL",
		doublesTier: "(DUU)",
	},
	dianciegen6: {
		randomBattleMoves: ["reflect", "lightscreen", "stealthrock", "diamondstorm", "moonblast", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["diamondstorm", "moonblast", "reflect", "lightscreen", "safeguard", "substitute", "calmmind", "psychic", "dazzlinggleam", "protect"],
		tier: "Gen6 RU",
		doublesTier: "DUU",
	},
	dianciemegagen6: {
		randomBattleMoves: ["calmmind", "moonblast", "earthpower", "hiddenpowerfire", "diamondstorm"],
		randomDoubleBattleMoves: ["diamondstorm", "moonblast", "calmmind", "psyshock", "earthpower", "hiddenpowerfire", "dazzlinggleam", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
	hoopagen6: {
		randomBattleMoves: ["nastyplot", "psyshock", "shadowball", "focusblast", "trick"],
		randomDoubleBattleMoves: ["hyperspacehole", "shadowball", "focusblast", "protect", "psychic", "trickroom"],
		tier: "Gen6 RU",
		doublesTier: "(DUU)",
	},
	hoopaunboundgen6: {
		randomBattleMoves: ["nastyplot", "substitute", "psychic", "darkpulse", "focusblast", "hyperspacefury", "zenheadbutt", "icepunch", "drainpunch", "gunkshot", "trick"],
		randomDoubleBattleMoves: ["psychic", "darkpulse", "focusblast", "protect", "hyperspacefury", "zenheadbutt", "icepunch", "drainpunch", "gunkshot"],
		tier: "Gen6 Uber",
		doublesTier: "DOU",
	},
	volcaniongen6: {
		randomBattleMoves: ["substitute", "steameruption", "fireblast", "sludgewave", "hiddenpowerice", "earthpower", "superpower"],
		randomDoubleBattleMoves: ["substitute", "steameruption", "heatwave", "sludgebomb", "rockslide", "earthquake", "protect"],
		tier: "Gen6 OU",
		doublesTier: "DOU",
	},
}; exports.FormatsData = FormatsData;

