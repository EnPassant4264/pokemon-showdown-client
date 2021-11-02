"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const FormatsData = {
	//Custom tiers are "RDex Uber", "RDex OU", "RDex UUBL", and "RDex UU" (and "RDex LC" and "RDex NFE")
	
/*
	aerodactylrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	ekansrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	arbokrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	growlitherandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	arcaninerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	archenrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	archeopsrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	articunogalarrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	shuppetrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	banetterandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	oddishrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	gloomrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex NFE",
	},
	bellossomrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	vileplumerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	bidoofrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	bibarelrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	yamperrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	boltundrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	charmanderrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	charmeleonrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex NFE",
	},
	charizardrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	chinglingrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	chimechorandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	clauncherrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	clawitzerrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	rolycolyrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	carkolrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex NFE",
	},
	coalossalrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	cufantrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	copperajahrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	lileeprandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	cradilyrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	corsolagalarrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	cursolarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	dedennerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	skrelprandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	dragalgerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	dramparandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	chewtlerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	drednawrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	druddigonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	diglettrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	dugtriorandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	eeveerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	vaporeonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	jolteonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	flareonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	espeonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	umbreonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	leafeonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	glaceonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	sylveonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	drilburrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	excadrillrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	totodilerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	croconawrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex NFE",
	},
	feraligatrrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	flabeberandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	floetterandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex NFE",
	},
	florgesrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	snoruntrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	glalierandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	froslassrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	snomrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	frosmothrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	girafarigrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	golettrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	golurkrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	impidimprandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	morgremrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex NFE",
	},
	grimmsnarlrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	groudonrandomdex: {
		tier: "Randomdex RDex Uber",
		doublesTier: "RDex DOU",
	},
	hippopotasrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	hippowdonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	tyroguerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	hitmonleerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	hitmonchanrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	hitmontoprandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	houndourrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	houndoomrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	indeedeerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	indeedeefrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	chimcharrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	monfernorandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex NFE",
	},
	infernaperandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	sobblerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	drizzilerandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex NFE",
	},
	inteleonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	kangaskhanrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	kangaskhanmegarandomdex: {
		tier: "Randomdex RDex Uber",
		doublesTier: "RDex DOU",
	},
	klefkirandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	komalarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	kyuremrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	kyuremwhiterandomdex: {
		tier: "Randomdex RDex Uber",
		doublesTier: "RDex DOU",
	},
	landorusrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	landorustherianrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	latiasrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	zigzagoonrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	linoonerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	luvdiscrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	inkayrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	malamarrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	electrikerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	manectricrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	moltresrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	moltresgalarrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	mimejrrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	mrmimerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	zigzagoongalarrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	linoonegalarrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex NFE",
	},
	obstagoonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	remoraidrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	octilleryrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	omanyterandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	omastarrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	sandygastrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	palossandrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	nosepassrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	probopassrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	pyukumukurandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	regicerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	relicanthrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	reshiramrandomdex: {
		tier: "Randomdex RDex Uber",
		doublesTier: "RDex DOU",
	},
	yamaskgalarrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	runerigusrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	salanditrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	salazzlerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	sandshrewalolarandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	sandslashalolarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	sawkrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	farfetchdgalarrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	sirfetchdrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	spectrierrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	spindarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	stakatakarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	lillipuprandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	herdierrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex NFE",
	},
	stoutlandrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	stunfiskgalarrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	taillowrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	swellowrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	tapubulurandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	tapufinirandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	taurosrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	togedemarurandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	tyruntrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	tyrantrumrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	bulbasaurrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	ivysaurrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex NFE",
	},
	venusaurrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	volbeatrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	cottoneerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex LC",
	},
	whimsicottrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	zaruderandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
*/
	tapubulurandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	tapufinirandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	absolrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	absolmegarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	appletunrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	applinrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	articunorandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	aurorusrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	amaurarandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	basculinrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	basculinbluestripedrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	bearticrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	cubchoorandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	bisharprandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	pawniardrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	calyrexrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	cameruptrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	cameruptmegarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	numelrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	celesteelarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	cloysterrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	shellderrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	crawdauntrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	corphishrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	cursolarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	corsolagalarrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	dedennerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	delibirdrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	eelektrossrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	eelektrikrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	tynamorandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	espeonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	eeveerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	flapplerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	flareonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	flygonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	vibravarandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	trapinchrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	galvantularandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	joltikrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	girafarigrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	glaceonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	goodrarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	sliggoorandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	goomyrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	gourgeistrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	gourgeistsmallrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	gourgeistsuperrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	gourgeistlargerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	pumpkaboorandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	pumpkaboosmallrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	pumpkaboosuperrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	pumpkaboolargerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	grimmsnarlrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	morgremrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	impidimprandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	guzzlordrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	helioliskrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	helioptilerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	hitmonchanrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	hitmonleerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	hitmontoprandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	tyroguerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	incineroarrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	torracatrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	littenrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	indeedeerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	indeedeefrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	jolteonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	kangaskhanrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	kangaskhanmegarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	kartanarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	kommoorandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	jangmoorandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	hakamoorandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	kyuremrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	lanturnrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	chinchourandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	leafeonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	leavannyrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	swadloonrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	sewaddlerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	ludicolorandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	lombrerandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	lotadrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	lunatonerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	luvdiscrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	machamprandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	machokerandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	machoprandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	mandibuzzrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	vullabyrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	medichamrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	medichammegarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	medititerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	nihilegorandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	palossandrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	sandygastrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	pidgeotmegarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	pidgeotrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	pidgeottorandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	pidgeyrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	probopassrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	nosepassrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	pyroarrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	litleorandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	sawkrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	sceptilemegarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	sceptilerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	grovylerandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	treeckorandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	scolipederandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	whirlipederandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	venipederandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	shiftryrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	nuzleafrandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	seedotrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	simisagerandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	pansagerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	slowbrorandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	slowbromegarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	slowkingrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	slowpokerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	sylveonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	taurosrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	typhlosionrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	quilavarandomdex: {
		tier: "Randomdex RDex NFE",
		doublesTier: "RDex DOU",
	},
	cyndaquilrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	umbreonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	ursaringrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	teddiursarandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	vaporeonrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	whiscashrandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	barboachrandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
	wishiwashirandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	zebstrikarandomdex: {
		tier: "Randomdex RDex OU",
		doublesTier: "RDex DOU",
	},
	blitzlerandomdex: {
		tier: "Randomdex RDex LC",
		doublesTier: "RDex DOU",
	},
}; exports.FormatsData = FormatsData;

