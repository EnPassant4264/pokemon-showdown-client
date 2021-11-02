"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const FormatsData = {
	//Custom tiers are "RDex Uber", "RDex OU", "RDex UUBL", and "RDex UU" (and "RDex LC" and "RDex NFE")
	
/*
	aerodactylrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	ekansrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	arbokrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	growlitherandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	arcaninerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	archenrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	archeopsrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	articunogalarrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	shuppetrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	banetterandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	oddishrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	gloomrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex NFE",
	},
	bellossomrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	vileplumerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	bidoofrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	bibarelrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	yamperrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	boltundrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	charmanderrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	charmeleonrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex NFE",
	},
	charizardrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	chinglingrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	chimechorandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	clauncherrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	clawitzerrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	rolycolyrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	carkolrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex NFE",
	},
	coalossalrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	cufantrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	copperajahrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	lileeprandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	cradilyrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	corsolagalarrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	cursolarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	dedennerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	skrelprandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	dragalgerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	dramparandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	chewtlerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	drednawrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	druddigonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	diglettrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	dugtriorandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	eeveerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	vaporeonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	jolteonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	flareonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	espeonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	umbreonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	leafeonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	glaceonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	sylveonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	drilburrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	excadrillrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	totodilerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	croconawrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex NFE",
	},
	feraligatrrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	flabeberandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	floetterandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex NFE",
	},
	florgesrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	snoruntrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	glalierandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	froslassrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	snomrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	frosmothrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	girafarigrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	golettrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	golurkrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	impidimprandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	morgremrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex NFE",
	},
	grimmsnarlrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	groudonrandomdex: {
		tier: " RandomdexRDex Uber",
		doublesTier: "RDex DOU",
	},
	hippopotasrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	hippowdonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	tyroguerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	hitmonleerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	hitmonchanrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	hitmontoprandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	houndourrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	houndoomrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	indeedeerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	indeedeefrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	chimcharrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	monfernorandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex NFE",
	},
	infernaperandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	sobblerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	drizzilerandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex NFE",
	},
	inteleonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	kangaskhanrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	kangaskhanmegarandomdex: {
		tier: " RandomdexRDex Uber",
		doublesTier: "RDex DOU",
	},
	klefkirandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	komalarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	kyuremrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	kyuremwhiterandomdex: {
		tier: " RandomdexRDex Uber",
		doublesTier: "RDex DOU",
	},
	landorusrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	landorustherianrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	latiasrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	zigzagoonrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	linoonerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	luvdiscrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	inkayrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	malamarrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	electrikerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	manectricrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	moltresrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	moltresgalarrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	mimejrrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	mrmimerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	zigzagoongalarrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	linoonegalarrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex NFE",
	},
	obstagoonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	remoraidrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	octilleryrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	omanyterandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	omastarrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	sandygastrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	palossandrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	nosepassrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	probopassrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	pyukumukurandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	regicerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	relicanthrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	reshiramrandomdex: {
		tier: " RandomdexRDex Uber",
		doublesTier: "RDex DOU",
	},
	yamaskgalarrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	runerigusrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	salanditrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	salazzlerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	sandshrewalolarandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	sandslashalolarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	sawkrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	farfetchdgalarrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	sirfetchdrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	spectrierrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	spindarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	stakatakarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	lillipuprandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	herdierrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex NFE",
	},
	stoutlandrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	stunfiskgalarrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	taillowrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	swellowrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	tapubulurandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	tapufinirandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	taurosrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	togedemarurandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	tyruntrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	tyrantrumrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	bulbasaurrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	ivysaurrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex NFE",
	},
	venusaurrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	volbeatrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	cottoneerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex LC",
	},
	whimsicottrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	zaruderandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
*/
	tapubulurandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	tapufinirandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	absolrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	absolmegarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	appletunrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	applinrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	articunorandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	aurorusrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	amaurarandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	basculinrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	basculinbluestripedrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	bearticrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	cubchoorandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	bisharprandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	pawniardrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	calyrexrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	cameruptrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	cameruptmegarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	numelrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	celesteelarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	cloysterrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	shellderrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	crawdauntrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	corphishrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	cursolarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	corsolagalarrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	dedennerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	delibirdrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	eelektrossrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	eelektrikrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	tynamorandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	espeonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	eeveerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	flapplerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	flareonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	flygonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	vibravarandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	trapinchrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	galvantularandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	joltikrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	girafarigrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	glaceonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	goodrarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	sliggoorandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	goomyrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	gourgeistrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	gourgeistsmallrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	gourgeistsuperrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	gourgeistlargerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	pumpkaboorandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	pumpkaboosmallrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	pumpkaboosuperrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	pumpkaboolargerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	grimmsnarlrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	morgremrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	impidimprandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	guzzlordrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	helioliskrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	helioptilerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	hitmonchanrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	hitmonleerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	hitmontoprandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	tyroguerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	incineroarrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	torracatrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	littenrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	indeedeerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	indeedeefrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	jolteonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	kangaskhanrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	kangaskhanmegarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	kartanarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	kommoorandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	jangmoorandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	hakamoorandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	kyuremrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	lanturnrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	chinchourandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	leafeonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	leavannyrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	swadloonrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	sewaddlerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	ludicolorandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	lombrerandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	lotadrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	lunatonerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	luvdiscrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	machamprandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	machokerandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	machoprandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	mandibuzzrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	vullabyrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	medichamrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	medichammegarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	medititerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	nihilegorandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	palossandrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	sandygastrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	pidgeotmegarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	pidgeotrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	pidgeottorandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	pidgeyrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	probopassrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	nosepassrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	pyroarrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	litleorandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	sawkrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	sceptilemegarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	sceptilerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	grovylerandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	treeckorandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	scolipederandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	whirlipederandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	venipederandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	shiftryrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	nuzleafrandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	seedotrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	simisagerandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	pansagerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	slowbrorandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	slowbromegarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	slowkingrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	slowpokerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	sylveonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	taurosrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	typhlosionrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	quilavarandomdex: {
		tier: " RandomdexRDex NFE",
		doublesTier: "RDex DOU",
	},
	cyndaquilrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	umbreonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	ursaringrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	teddiursarandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	vaporeonrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	whiscashrandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	barboachrandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
	wishiwashirandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	zebstrikarandomdex: {
		tier: " RandomdexRDex OU",
		doublesTier: "RDex DOU",
	},
	blitzlerandomdex: {
		tier: " RandomdexRDex LC",
		doublesTier: "RDex DOU",
	},
}; exports.FormatsData = FormatsData;

