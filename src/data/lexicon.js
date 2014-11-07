lexicon = (function() {
	if (typeof module !== "undefined" && module.exports) {
		verb_conjugate = require("../parents/verb/conjugate/conjugate")
		adj_to_adv = require("../parents/adjective/conjugate/to_adverb");
		verb_to_doer = require("../parents/verb/conjugate/to_doer");
		to_superlative = require("../parents/adjective/conjugate/to_superlative");
		to_comparative = require("../parents/adjective/conjugate/to_comparative");
	}
	var main = {
		//conjunctions
		"yet": "CC",
		"therefore": "CC",
		"or": "CC",
		"while": "CC",
		"nor": "CC",
		"whether": "CC",
		"though": "CC",
		"because": "CC",
		"but": "CC",
		"for": "CC",
		"and": "CC",
		"if": "CC",
		"however": "CC",
		"before": "CC",
		"although": "CC",

		//numbers
		'zero': "CD",
		'two': "CD",
		'three': "CD",
		'four': "CD",
		'five': "CD",
		'six': "CD",
		'seven': "CD",
		'eight': "CD",
		'nine': "CD",
		'ten': "CD",
		'eleven': "CD",
		'twelve': "CD",
		'thirteen': "CD",
		'fourteen': "CD",
		'fifteen': "CD",
		'sixteen': "CD",
		'seventeen': "CD",
		'eighteen': "CD",
		'nineteen': "CD",
		'twenty': "CD",
		'thirty': "CD",
		'forty': "CD",
		'fifty': "CD",
		'sixty': "CD",
		'seventy': "CD",
		'eighty': "CD",
		'ninety': "CD",
		'hundred': "CD",
		'thousand': "CD",
		'million': "CD",
		'billion': "CD",
		'trillion': "CD",
		'quadrillion': "CD",
		'quintillion': "CD",
		'sextillion': "CD",
		'septillion': "CD",
		'octillion': "CD",
		'nonillion': "CD",
		'decillion': "CD",




		//copula
		"is": "CP",
		"will be": "CP",
		"are": "CP",
		"was": "CP",
		"were": "CP",

		//determiners
		"this": "DT",
		"any": "DT",
		"enough": "DT",
		"each": "DT",
		"whatever": "DT",
		"every": "DT",
		"which": "DT",
		"these": "DT",
		"another": "DT",
		"plenty": "DT",
		"whichever": "DT",
		"neither": "DT",
		"an": "DT",
		"a": "DT",
		"least": "DT",
		"own": "DT",
		"few": "DT",
		"both": "DT",
		"those": "DT",
		"the": "DT",
		"that": "DT",
		"various": "DT",
		"many": "DT",
		"what": "DT",
		"either": "DT",
		"last": "DT",
		"much": "DT",
		"some": "DT",
		"else": "DT",
		"several": "DT",
		//some other languages (what could go wrong?)
		"la": "DT",
		"le": "DT",
		"les": "DT",
		"des": "DT",
		"de": "DT",
		"du": "DT",
		"el": "DT",

		//prepositions
		"until": "IN",
		"onto": "IN",
		"of": "IN",
		"into": "IN",
		"out": "IN",
		"except": "IN",
		"across": "IN",
		"by": "IN",
		"between": "IN",
		"at": "IN",
		"down": "IN",
		"as": "IN",
		"from": "IN",
		"around": "IN",
		"with": "IN",
		"among": "IN",
		"upon": "IN",
		"amid": "IN",
		"to": "IN",
		"along": "IN",
		"since": "IN",
		"about": "IN",
		"off": "IN",
		"on": "IN",
		"within": "IN",
		"in": "IN",
		"during": "IN",
		"per": "IN",
		"without": "IN",
		"throughout": "IN",
		"through": "IN",
		"than": "IN",
		"via": "IN",
		"up": "IN",


		//modal verbs
		"can": "MD",
		"may": "MD",
		"could": "MD",
		"might": "MD",
		"will": "MD",
		"ought to": "MD",
		"would": "MD",
		"must": "MD",
		"shall": "MD",
		"should": "MD",


		//posessive pronouns
		"mine": "PP",
		"something": "PP",
		"none": "PP",
		"anything": "PP",
		"anyone": "PP",
		"lot": "PP",
		"theirs": "PP",
		"himself": "PP",
		"ours": "PP",
		"his": "PP",
		"my": "PP",
		"their": "PP",
		"yours": "PP",
		"your": "PP",
		"our": "PP",
		"its": "PP",
		"nothing": "PP",
		"herself": "PP",
		"hers": "PP",
		"themselves": "PP",
		"everything": "PP",
		"myself": "PP",
		"itself": "PP",
		"who": "PP",
		"her": "PP", //this one is pretty ambiguous

		//personal pronouns (nouns)
		"it": "PRP",
		"they": "PRP",
		"i": "PRP",
		"them": "PRP",
		"you": "PRP",
		"she": "PRP",
		"me": "PRP",
		"he": "PRP",
		"him": "PRP",
    "ourselves": "PRP",
		"us": "PRP",
		"we": "PRP",
		"thou": "PRP",
		"il": "PRP",
		"elle": "PRP",

		//some manual adverbs (the rest are generated)
		"now": "RB",
		"again": "RB",
		"already": "RB",
		"soon": "RB",
		"directly": "RB",
		"toward": "RB",
		"forever": "RB",
		"apart": "RB",
		"instead": "RB",
		"yes": "RB",
		"alone": "RB",
		"ago": "RB",
		"indeed": "RB",
		"ever": "RB",
		"quite": "RB",
		"perhaps": "RB",
		"where": "RB",
		"then": "RB",
		"here": "RB",
		"thus": "RB",
		"very": "RB",
		"often": "RB",
		"once": "RB",
		"never": "RB",
		"why": "RB",
		"when": "RB",
		"away": "RB",
		"always": "RB",
		"sometimes": "RB",
		"also": "RB",
		"maybe": "RB",
		"so": "RB",
		"just": "RB",

		//interjections
		"uhh": "UH",
		"uh-oh": "UH",
		"ugh": "UH",
		"sheesh": "UH",
		"eww": "UH",
		"pff": "UH",
		"voila": "UH",
		"oy": "UH",
		"eep": "UH",
		"hurrah": "UH",
		"yuck": "UH",
		"ow": "UH",
		"duh": "UH",
		"oh": "UH",
		"hmm": "UH",
		"yeah": "UH",
		"whoa": "UH",
		"ooh": "UH",
		"whee": "UH",
		"ah": "UH",
		"bah": "UH",
		"gah": "UH",
		"yaa": "UH",
		"phew": "UH",
		"gee": "UH",
		"ahem": "UH",
		"eek": "UH",
		"meh": "UH",
		"yahoo": "UH",
		"oops": "UH",
		"d'oh": "UH",
		"psst": "UH",
		"argh": "UH",
		"grr": "UH",
		"nah": "UH",
		"shhh": "UH",
		"whew": "UH",
		"mmm": "UH",
		"yay": "UH",
		"uh-huh": "UH",
		"boo": "UH",
		"wow": "UH",


		//dates
		"july": "CD",
		"august": "CD",
		"september": "CD",
		"october": "CD",
		"november": "CD",
		"december": "CD",
		"january": "CD",
		"february": "CD",
		"march": "CD",
		"april": "CD",
		"may": "CD",
		"june": "CD",
		"monday": "CD",
		"tuesday": "CD",
		"wednesday": "CD",
		"thursday": "CD",
		"friday": "CD",
		"saturday": "CD",
		"sunday": "CD",


		//contractions that don't need splitting-open, grammatically
		"don't": "VB",
		"isn't": "CP",
		"ain't": "CP",
		"aren't": "CP",
		"won't": "VB",
		"shouldn't": "MD",
		"wouldn't": "MD",
		"couldn't": "MD",
		"mustn't": "MD",
		"shan't": "MD",
		"shant": "MD",
		"lets": "MD", //arguable
		"let's": "MD",
		"what's": "VB", //somewhat ambiguous (what does|what are)
		"where'd": "VBD",
		"when'd": "VBD",
		"how'd": "VBD",
		"what'd": "VBD",
		"who'd": "MD",
		"'o": "IN",
		"'em": "PRP",

		//demonyms
		"afghan":"JJ",
		"albanian":"JJ",
		"algerian":"JJ",
		"argentine":"JJ",
		"armenian":"JJ",
		"australian":"JJ",
		"aussie":"JJ",
		"austrian":"JJ",
		"bangladeshi":"JJ",
		"belgian":"JJ",
		"bolivian":"JJ",
		"bosnian":"JJ",
		"brazilian":"JJ",
		"bulgarian":"JJ",
		"cambodian":"JJ",
		"canadian":"JJ",
		"chilean":"JJ",
		"chinese":"JJ",
		"colombian":"JJ",
		"croat":"JJ",
		"cuban":"JJ",
		"czech":"JJ",
		"dominican":"JJ",
		"egyptian":"JJ",
		"british":"JJ",
		"estonian":"JJ",
		"ethiopian":"JJ",
		"finnish":"JJ",
		"french":"JJ",
		"gambian":"JJ",
		"georgian":"JJ",
		"german":"JJ",
		"greek":"JJ",
		"haitian":"JJ",
		"hungarian":"JJ",
		"indian":"JJ",
		"indonesian":"JJ",
		"iranian":"JJ",
		"iraqi":"JJ",
		"irish":"JJ",
		"israeli":"JJ",
		"italian":"JJ",
		"jamaican":"JJ",
		"japanese":"JJ",
		"jordanian":"JJ",
		"kenyan":"JJ",
		"korean":"JJ",
		"kuwaiti":"JJ",
		"latvian":"JJ",
		"lebanese":"JJ",
		"liberian":"JJ",
		"libyan":"JJ",
		"lithuanian":"JJ",
		"macedonian":"JJ",
		"malaysian":"JJ",
		"mexican":"JJ",
		"mongolian":"JJ",
		"moroccan":"JJ",
		"dutch":"JJ",
		"nicaraguan":"JJ",
		"nigerian":"JJ",
		"norwegian":"JJ",
		"omani":"JJ",
		"pakistani":"JJ",
		"palestinian":"JJ",
		"filipino":"JJ",
		"polish":"JJ",
		"portuguese":"JJ",
		"qatari":"JJ",
		"romanian":"JJ",
		"russian":"JJ",
		"rwandan":"JJ",
		"samoan":"JJ",
		"saudi":"JJ",
		"scottish":"JJ",
		"senegalese":"JJ",
		"serbian":"JJ",
		"singaporean":"JJ",
		"slovak":"JJ",
		"somali":"JJ",
		"sudanese":"JJ",
		"swedish":"JJ",
		"swiss":"JJ",
		"syrian":"JJ",
		"taiwanese":"JJ",
		"thai":"JJ",
		"tunisian":"JJ",
		"ugandan":"JJ",
		"ukrainian":"JJ",
		"american":"JJ",
		"hindi":"JJ",
		"spanish":"JJ",
		"venezuelan":"JJ",
		"vietnamese":"JJ",
		"welsh":"JJ",
		"african":"JJ",
		"european":"JJ",
		"asian":"JJ",
		"californian":"JJ",

		//misc mine
		"nope": "UH",
		"am": "VBP",
		"said": "VBD",
		"says": "VBZ",
		"has": "VB",
		"million": "CD",
		"billion": "CD",
		"more": "RBR",
		"had": "VBD",
		"been": "VBD",
    "going": "VBG",
		"other": "JJ",
		"no": "DT",
		"there": "EX",
		"after": "IN",
		"many": "JJ",
		"most": "JJ",
		"last": "JJ",
		"expected": "JJ",
		"long": "JJ",
		"far": "JJ",
		"due": "JJ",
		"more": "JJ",
		"higher": "JJR",
		"larger": "JJR",
		"better": "JJR",
		"added": "VB",
		"several": "RB",
		"such": "RB",
		"took": "VB",
		"being": "VBG",
		"began": "VBD",
		"came": "VBD",
		"did": "VBD",
		"go": "VBP",
		"too": "RB",
		"president": "NN",
		"dollar": "NN",
		"student": "NN",
		"patent": "NN",
		"funding": "NN",
		"morning": "NN",
		"banking": "NN",
		"ceiling": "NN",
		"energy": "NN",
		"secretary": "NN",
		"purpose": "NN",
		"friends": "NNS",
		"less": "JJ",
		"event":"NN",
		"divine": "JJ",
		"all": "JJ",
		"define": "VB",
    "went": "VBD",
    "goes": "VBZ",
    "sounds": "VBZ",
  "measure": "VB",
  "enhance": "VB",
  "distinguish": "VB",
    "randomly": "RB",
  "abroad": "RB",



		//missing words from amc
		"given": "VBN",
	  "known": "VBN",
	  "rather": "RB",
	  "shown": "VBN",
	  "seen": "VBN",
	  "according": "VBG",
	  "almost": "RB",
	  "together": "JJ",
	  "means": "VBZ",
	  "meant": "VBD",
	  "despite": "IN",
	  "only": "JJ",
	  "outside": "JJ",
	  "below": "IN",
	  "multiple": "JJ",
	  "anyway": "RB",
	  "appropriate": "JJ",
	  "unless": "IN",
	  "whom": "WP",
	  "whose": "WP",
	  "evil": "JJ",
	  "earlier": "JJR",
	  "etc": "FW",
	  "twice": "RB",
	  "avoid": "VB",
	  "favorite": "JJ",
	  "whereas": "IN",
	  "born": "VBN",
	  "hit": "VB",
	  "resulting": "VBG",
	  "limited": "JJ",
	  "developing": "VBG",
	  "plus": "CC",
	  "biggest": "JJS",
	  "random": "JJ",
	  "republican": "JJ",
	  "okay": "JJ",
	  "essential": "JJ",
	  "somewhat": "RB",
	  "unlike": "IN",
	  "secondary": "JJ",
	  "somehow": "RB",
	  "yourself": "PRP",
	  "gay": "JJ",
	  "meanwhile": "RB",
	  "hence": "RB",
	  "further": "RB",
	  "furthermore": "RB",
	  "easier": "JJR",
	  "staining": "VBG",
	  "towards": "IN",
	  "aside": "RB",
	  "moreover": "RB",
	  "south": "JJ",
	  "pro": "JJ",
	  "meant": "VBD",
	  "versus": "CC",
	  "besides": "IN",
	  "northern": "JJ",
	  "anymore": "RB",
	  "urban": "JJ",
	  "acute": "JJ",
	  "prime": "JJ",
	  "arab": "JJ",
	  "overnight": "JJ",
	  "newly": "RB",
	  "ought": "MD",
	  "mixed": "JJ",
	  "crucial": "JJ",
	  "damn": "RB",


    //formerly IN
		"behind": "JJ",
		"above": "JJ",
		"beyond": "JJ",
		"against": "JJ",
		"under": "JJ",

		"not":"CC",//?

		//from multiples
		"of course":"RB",
    "at least":"RB",
    "no longer":"RB",
    "sort of":"RB",
    "at first":"RB",
    "once again":"RB",
    "once more":"RB",
    "up to":"RB",
    "by now":"RB",
    "all but":"RB",
    "just about":"RB",
    "on board":"JJ",
    "a lot":"RB",
    "by far":"RB",
    "at best":"RB",
    "at large":"RB",
    "for good":"RB",
    "vice versa":"JJ",
    "en route":"JJ",
    "for sure":"RB",
    "upside down":"JJ",
    "at most":"RB",
    "per se":"RB",
    "at worst":"RB",
    "upwards of":"RB",
    "en masse":"RB",
    "point blank":"RB",
    "up front":"JJ",
    "in situ":"JJ",
    "in vitro":"JJ",
    "ad hoc":"JJ",
    "de facto":"JJ",
    "ad infinitum":"JJ",
    "ad nauseam":"RB",
    "for keeps":"JJ",
    "a priori":"FW",
    "et cetera":"FW",
    "off guard":"JJ",
    "spot on":"JJ",
    "ipso facto":"JJ",
    "not withstanding":"RB",
    "de jure":"RB",
    "a la":"IN",
    "ad hominem":"NN",
    "par excellence":"RB",
    "de trop":"RB",
    "a posteriori":"RB",
    "fed up":"JJ",
    "brand new":"JJ",
    "old fashioned":"JJ",
    "bona fide":"JJ",
    "well off":"JJ",
    "far off":"JJ",
    "straight forward":"JJ",
    "hard up":"JJ",
    "sui generis":"JJ",
    "en suite":"JJ",
    "avant garde":"JJ",
    "sans serif":"JJ",
    "gung ho":"JJ",
    "super duper":"JJ",

	}

	//verbs
	verbs = [
		"hide",
		"suck",
		"answer",
		"argue",
		"tend",
		"examine",
		"depend",
		"form",
		"figure",
		"compete",
		"mind",
		"surround",
		"suspect",
		"reflect",
		"wonder",
		"act",
		"hope",
		"end",
		"thank",
		"file",
		"regard",
		"report",
		"imagine",
		"consider",
		"miss",
		"ensure",
		"cause",
		"work",
		"enter",
		"stop",
		"defeat",
		"surge",
		"launch",
		"turn",
		"give",
		"win",
		"like",
		"control",
		"relate",
		"remember",
		"join",
		"listen",
		"train",
		"break",
		"spring",
		"enjoy",
		"fail",
		"understand",
		"recognize",
		"draw",
		"obtain",
		"learn",
		"fill",
		"announce",
		"prevent",
		"fall",
		"achieve",
		"find",
		"realize",
		"involve",
		"remove",
		"lose",
		"lie",
		"build",
		"aid",
		"visit",
		"test",
		"strike",
		"prepare",
		"wait",
		"ask",
		"carry",
		"suppose",
		"determine",
		"raise",
		"send",
		"love",
		"use",
		"pull",
		"improve",
		"contain",
		"think",
		"offer",
		"speak",
		"rise",
		"talk",
		"pick",
		"care",
		"express",
		"remain",
		"operate",
		"deal",
		"close",
		"add",
		"mention",
		"read",
		"support",
		"grow",
		"decide",
		"walk",
		"vary",
		"demand",
		"describe",
		"sell",
		"agree",
		"happen",
		"allow",
		"suffer",
		"have",
		"study",
		"be",
		"press",
		"watch",
		"seem",
		"occur",
		"contribute",
		"claim",
		"become",
		"make",
		"compare",
		"develop",
		"apply",
		"direct",
		"discuss",
		"know",
		"sit",
		"see",
		"lead",
		"indicate",
		"require",
		"change",
		"fix",
		"come",
		"reach",
		"prove",
		"expect",
		"exist",
		"play",
		"permit",
		"meet",
		"kill",
		"pay",
		"charge",
		"increase",
		"fight",
		"tell",
		"catch",
		"believe",
		"create",
		"continue",
		"live",
		"help",
		"represent",
		"edit",
		"serve",
		"ride",
		"appear",
		"cover",
		"set",
		"maintain",
		"start",
		"stay",
		"move",
		"extend",
		"leave",
		"wear",
		"run",
		"design",
		"supply",
		"suggest",
		"want",
		"say",
		"hear",
		"drive",
		"approach",
		"cut",
		"call",
		"include",
		"try",
		"receive",
		"save",
		"discover",
		"marry",
		"throw",
		"show",
		"choose",
		"need",
		"establish",
		"keep",
		"assume",
		"attend",
		"buy",
		"unite",
		"feel",
		"explain",
		"publish",
		"accept",
		"settle",
		"reduce",
		"bring",
		"do",
		"let",
		"shoot",
		"look",
		"take",
		"interact",
		"concern",
		"put",
		"labor",
		"hold",
		"return",
		"select",
		"die",
		"provide",
		"seek",
		"stand",
		"spend",
		"begin",
		"get",
		"wish",
		"hang",
		"write",
		"finish",
		"follow",
		"forget",
		"feed",
		"eat",
		"disagree",
		"produce",
		"attack",
		"attempt",
		"bite",
		"blow",
		"brake",
		"brush",
		"burn",
		"bang",
		"bomb",
		"bet",
		"budget",
		"comfort",
		"cook",
		"copy",
		"cough",
		"crush",
		"cry",
		"check",
		"claw",
		"clip",
		"combine",
		"damage",
		"desire",
		"doubt",
		"drain",
		"drink",
		"dance",
		"decrease",
		"defect",
		"deposit",
		"drift",
		"dip",
		"dive",
		"divorce",
		"dream",
		"exchange",
		"envy",
		"exercise",
		"export",
		"fold",
		"flood",
		"focus",
		"forecast",
		"fracture",
		"grip",
		"guide",
		"guard",
		"guarantee",
		"guess",
		"hate",
		"heat",
		"handle",
		"hire",
		"host",
		"hunt",
		"hurry",
		"import",
		"judge",
		"jump",
		"jam",
		"kick",
		"kiss",
		"knock",
		"laugh",
		"lift",
		"lock",
		"lecture",
		"link",
		"load",
		"loan",
		"lump",
		"melt",
		"message",
		"murder",
		"neglect",
		"overlap",
		"overtake",
		"overuse",
		"print",
		"protest",
		"pump",
		"push",
		"post",
		"progress",
		"promise",
		"purchase",
		"regret",
		"request",
		"reward",
		"roll",
		"rub",
		"rent",
		"repair",
		"sail",
		"scale",
		"screw",
		"shake",
		"shock",
		"sleep",
		"slip",
		"smash",
		"smell",
		"smoke",
		"sneeze",
		"snow",
		"stick",
		"surprise",
		"swim",
		"scratch",
		"search",
		"share",
		"shave",
		"slide",
		"spit",
		"splash",
		"stain",
		"stress",
		"swing",
		"switch",
		"taste",
		"touch",
		"trade",
		"trick",
		"twist",
		"tie",
		"trap",
		"travel",
		"tune",
		"undergo",
		"undo",
		"uplift",
		"vote",
		"wash",
		"wave",
		"whistle",
		"wreck",
		"yawn",
		"betray",
		"restrict",
		"perform",
	  "worry",
	  "point",
	  "activate",
	  "fear",
	  "plan",
	  "note",
	  "face",
	  "predict",
	  "differ",
	  "deserve",
	  "torture",
	  "recall",
	  "count",
	  "swear",
	  "admit",
	  "insist",
	  "lack",
	  "pass",
	  "belong",
	  "complain",
	  "constitute",
	  "beat",
	  "rely",
	  "refuse",
	  "range",
	  "cite",
	  "flash",
	  "arrive",
	  "reveal",
	  "consist",
	  "observe",
	  "notice",
	  "trust",
	  "imply",
	  "display",
	  "view",
	  "stare",
	  "acknowledge",
	  "owe",
	  "gaze",
	  "treat",
	  "account",
	  "gather",
	  "address",
	  "confirm",
	  "estimate",
	  "manage",
	  "participate",
	  "sneak",
	  "drop",
	  "mirror",
	  "experience",
	  "strive",
	  "teach",
	  "cost",
	  "arch",
	  "dislike",
	  "favor",
	  "earn",
	  "emphasize",
	  "fly",
	  "match",
	  "question",
	  "emerge",
	  "encourage",
	  "matter",
	  "name",
	  "head",
	  "line",
	  "slam",
	  "list",
	  "sing",
	  "warn",
	  "ignore",
	  "resemble",
	  "spread",
	  "feature",
	  "place",
	  "reverse",
	  "accuse",
	  "spoil",
	  "retain",
	  "survive",
	  "praise",
	  "function",
	  "please",
	  "date",
	  "remind",
	  "deliver",
	  "echo",
	  "engage",
	  "deny",
	  "obey",
	  "yield",
	  "center",
	  "gain",
	  "anticipate",
	  "reason",
	  "side",
	  "thrive",
	  "defy",
	  "dodge",
	  "enable",
	  "applaud",
	  "bear",
	  "persist",
	  "pose",
	  "reject",
	  "attract",
	  "await",
	  "inhibit",
	  "declare",
	  "process",
	  "risk",
	  "urge",
	  "value",
	  "block",
	  "confront",
	  "credit",
	  "cross",
	  "wake",
	  "amuse",
	  "dare",
	  "resent",
	  "smile",
	  "gloss",
	  "threaten",
	  "collect",
	  "depict",
	  "dismiss",
	  "submit",
	  "benefit",
	  "step",
	  "deem",
	  "limit",
	  "sense",
	  "issue",
	  "embody",
	  "force",
	  "govern",
	  "replace",
	  "aim",
	  "bother",
	  "cater",
	  "adopt",
	  "empower",
	  "outweigh",
	  "alter",
	  "enrich",
	  "influence",
	  "prohibit",
	  "pursue",
	  "warrant",
	  "convey",
	  "approve",
	  "reserve",
	  "rest",
	  "strain",
	  "wander",
	  "adjust",
	  "dress",
	  "market",
	  "mingle",
	  "disapprove",
	  "evaluate",
	  "flow",
	  "inhabit",
	  "pop",
	  "rule",
	  "depart",
	  "roam",
	  "assert",
	  "disappear",
	  "envision",
	  "pause",
	  "afford",
	  "challenge",
	  "grab",
	  "grumble",
	  "house",
	  "portray",
	  "revel",
	  "base",
	  "conduct",
	  "review",
	  "stem",
	  "crave",
	  "mark",
	  "store",
	  "target",
	  "unlock",
	  "weigh",
	  "resist",
	  "steal",
	  "drag",
	  "pour",
	  "reckon",
	  "assign",
	  "cling",
	  "rank",
	  "attach",
	  "decline",
	  "destroy",
	  "interfere",
	  "paint",
	  "skip",
	  "sprinkle",
	  "wither",
	  "allege",
	  "retire",
	  "score",
	  "monitor",
	  "expand",
	  "honor",
	  "lend",
	  "pack",
	  "assist",
	  "float",
	  "appeal",
	  "sink",
	  "stretch",
	  "undermine",
	  "assemble",
	  "boast",
	  "bounce",
	  "grasp",
	  "install",
	  "borrow",
	  "crack",
	  "elect",
	  "shine",
	  "shout",
	  "contrast",
	  "overcome",
	  "relax",
	  "relent",
	  "strengthen",
	  "conform",
	  "dump",
	  "pile",
	  "scare",
	  "relive",
	  "resort",
	  "rush",
	  "boost",
	  "cease",
	  "command",
	  "excel",
	  "plug",
	  "plunge",
	  "proclaim",
	  "discourage",
	  "endure",
	  "ruin",
	  "stumble",
	  "abandon",
	  "cheat",
	  "convince",
	  "merge",
	  "convert",
	  "harm",
	  "multiply",
	  "overwhelm",
	  "chew",
	  "invent",
	  "bury",
	  "wipe",
	]

	//conjugate all of these verbs. takes ~8ms. triples the lexicon size.
	verbs.forEach(function(v) {
		var c = verb_conjugate(v)
		main[c.infinitive]= main[c.infinitive] || "VBP"
		main[c.past] = main[c.past] || "VBD"
		main[c.gerund] = main[c.gerund] || "VBG"
		main[c.present] = main[c.present] || "VBZ"
		if(c.participle && !main[c.participle]){
			main[c.participle]="VBN"
		}
		var doer = verb_to_doer(v)
		if (doer) {
			main[doer] = "NNA"
		}
	})



	//adjectives that either aren't covered by rules, or have superlative/comparative forms
	adjectives = [
	  'moody',
	  'literal',
	  'actual',
	  'probable',
	  'apparent',
	  'usual',
	  'aberrant',
		'ablaze',
		'able',
		'absolute',
		'aboard',
		'abrupt',
		'absent',
		'absorbing',
		'absurd',
		'abundant',
		'accurate',
		'adult',
		'afraid',
		'agonizing',
		'ahead',
		'alert',
		'alive',
		'aloof',
		'amazing',
		'arbitrary',
		'arrogant',
		'asleep',
		'astonishing',
		'average',
		'awake',
		'aware',
		'awkward',
		'back',
		'bad',
		'bankrupt',
		'bawdy',
		'beneficial',
		'bent',
		'best',
		'better',
		'big',
		'bitter',
		'bizarre',
		'black',
		'bloody',
		'blue',
		'bouncy',
		'brash',
		'brave',
		'brief',
		'bright',
		'brilliant',
		'broad',
		'broken',
		'brown',
		'burly',
		'busy',
		'cagey',
		'calm',
		'careful',
		'caring',
		'certain',
		'charming',
		'cheap',
		'chief',
		'chilly',
		'civil',
		'clever',
		'close',
		'closed',
		'cloudy',
		'cold',
		'colossal',
		'commercial',
		'common',
		'complete',
		'complex',
		'concerned',
		'concrete',
		'congruent',
		'constant',
		'cooing',
		'cool',
		'correct',
		'cowardly',
		'craven',
		'cruel',
		'cuddly',
		'curly',
		'cute',
		'daily',
		'damaged',
		'damaging',
		'damp',
		'dapper',
		'dark',
		'dashing',
		'dead',
		'deadpan',
		'dear',
		'deep',
		'deeply',
		'defiant',
		'degenerate',
		'delicate',
		'delightful',
		'desperate',
		'determined',
		'didactic',
		'difficult',
		'discreet',
		'done',
		'double',
		'doubtful',
		'downtown',
		'dreary',
		'drunk',
		'dry',
		'dull',
		'eager',
		'early',
		'east',
		'eastern',
		'easy',
		'elderly',
		'elegant',
		'elfin',
		'elite',
		'eminent',
		'empty',
		'encouraging',
		'entire',
		'erect',
		'ethereal',
		'even',
		'exact',
		'expert',
		'extra',
		'extreme',
		'exuberant',
		'exultant',
		'faint',
		'fair',
		'false',
		'fanc',
		'fancy',
		'fast',
		'fat',
		'faulty',
		'feeble',
		'female',
		'fertile',
		'few',
		'fierce',
		'fierce ',
		'financial',
		'fine',
		'firm',
		'first',
		'fit',
		'fixed',
		'flagrant',
		'flat',
		'foamy',
		'foolish',
		'foregoing',
		'foreign',
		'forgetful',
		'former',
		'fortunate',
		'frail',
		'frantic',
		'free',
		'freezing',
		'frequent',
		'fresh',
		'fretful',
		'friendly',
		'full',
		'fun',
		'funny',
		'furry',
		'future',
		'gainful',
		'gaudy',
		'gentle',
		'giant',
		'giddy',
		'gigantic',
		'glad',
		'gleaming',
		'glib',
		'global',
		'gold',
		'gone',
		'good',
		'goofy',
		'graceful',
		'grand',
		'grateful',
		'gratis',
		'gray',
		'great',
		'green',
		'grey',
		'groovy',
		'gross',
		'guarded',
		'half',
		'handy',
		'hanging',
		'hard',
		'harsh',
		'hateful',
		'heady',
		'heavenly',
		'heavy',
		'hellish',
		'helpful',
		'hesitant',
		'high',
		'highfalutin',
		'hollow',
		'homely',
		'honest',
		'hot',
		'huge',
		'humdrum',
		'hurried',
		'hurt',
		'icy',
		'ignorant',
		'ill',
		'illegal',
		'immediate',
		'immense',
		'imminent',
		'impartial',
		'imperfect',
		'impolite',
		'important',
		'imported',
		'initial',
		'innate',
		'inner',
		'inside',
		'irate',
		'jolly',
		'juicy',
		'junior',
		'juvenile',
		'kaput',
		'keen',
		'kind',
		'kindly',
		'knowing',
		'labored',
		'lame',
		'languid',
		'large',
		'late',
		'latter',
		'learned',
		'left',
		'legal',
		'lethal',
		'level',
		'lewd',
		'light',
		'likely',
		'literate',
		'lively',
		'living',
		'lonely',
		'longing',
		'loose',
		'loud',
		'loutish',
		'lovely',
		'loving',
		'low',
		'lowly',
		'lush',
		'luxuriant',
		'lying',
		'macabre',
		'macho',
		'mad',
		'madly',
		'magenta',
		'main',
		'major',
		'makeshift',
		'male',
		'mammoth',
		'married',
		'mature',
		'measly',
		'meaty',
		'medium',
		'meek',
		'mellow',
		'mere',
		'middle',
		'miniature',
		'minor',
		'miscreant',
		'mobile',
		'moldy',
		'mundane',
		'mute',
		'naive',
		'narrow',
		'near',
		'nearby',
		'neat',
		'necessary',
		'neighborly',
		'new',
		'next',
		'nice',
		'nimble',
		'noisy',
		'nonchalant',
		'nondescript',
		'nonstop',
		'north',
		'nosy',
		'obeisant',
		'obese',
		'obscene',
		'observant',
		'obsolete',
		'odd',
		'offbeat',
		'official',
		'ok',
		'old',
		'open',
		'opposite',
		'orange',
		'organic',
		'outdoor',
		'outer',
		'outgoing',
		'oval',
		'over',
		'overall',
		'overt',
		'overweight',
		'overwrought',
		'painful',
		'pale',
		'past',
		'peaceful',
		'perfect',
		'petite',
		'picayune',
		'pink',
		'placid',
		'plain',
		'plant',
		'pleasant',
		'polite',
		'poor',
		'potential',
		'pregnant',
		'premium',
		'present',
		'pricey',
		'prickly',
		'primary',
		'prior',
		'private',
		'profuse',
		'proper',
		'public',
		'pumped',
		'puny',
		'pure',
		'purple',
		'quack',
		'quaint',
		'quick',
		'quickest',
		'quiet',
		'rabid',
		'racial',
		'rare',
		'raw',
		'ready',
		'real',
		'rebel',
		'recondite',
		'red',
		'redundant',
		'relevant',
		'remote',
		'resolute',
		'resonant',
		'rich',
		'right',
		'rightful',
		'ripe',
		'ritzy',
		'robust',
		'romantic',
		'roomy',
		'rotten',
		'rough',
		'round',
		'royal',
		'rude',
		'sad',
		'safe',
		'salty',
		'same',
		'scarce',
		'scary',
		'scientific',
		'screeching',
		'second',
		'secret',
		'secure',
		'sedate',
		'seemly',
		'selfish',
		'senior',
		'separate',
		'severe',
		'shallow',
		'sharp',
		'shiny',
		'shocking',
		'short',
		'shrill',
		'shut',
		'shy',
		'sick',
		'significant',
		'silly',
		'simple',
		'sincere',
		'single',
		'skinny',
		'slight',
		'slim',
		'slimy',
		'slow',
		'small',
		'smelly',
		'smooth',
		'snobbish',
		'social',
		'soft',
		'somber',
		'soon',
		'sordid',
		'sore',
		'sorry',
		'sour',
		'southern',
		'spare',
		'special',
		'specific',
		'spicy',
		'splendid',
		'square',
		'squeamish',
		'stale',
		'standard',
		'standing',
		'steadfast',
		'steady',
		'steep',
		'stereotyped',
		'stiff',
		'still',
		'straight',
		'strange',
		'strict',
		'striped',
		'strong',
		'stupid',
		'sturdy',
		'subdued',
		'subsequent',
		'substantial',
		'sudden',
		'super',
		'superb',
		'superficial',
		'supreme',
		'sure',
		'sweet',
		'swift',
		'taboo',
		'tall',
		'tame',
		'tan',
		'tart',
		'tasteful',
		'tawdry',
		'telling',
		'temporary',
		'tender',
		'tense',
		'terrific',
		'tested',
		'thick',
		'thin',
		'thoughtful',
		'tidy',
		'tight',
		'tiny',
		'top',
		'torpid',
		'tough',
		'tranquil',
		'trite',
		'true',
		'ugly',
		'ultra',
		'unbecoming',
		'understood',
		'uneven',
		'unfair',
		'unlikely',
		'unruly',
		'unsightly',
		'untidy',
		'unwritten',
		'upbeat',
		'upper',
		'uppity',
		'upset',
		'upstairs',
		'uptight',
		'used',
		'useful',
		'utter',
		'uttermost',
		'vagabond',
		'vague',
		'vanilla',
		'various',
		'vast',
		'vengeful',
		'verdant',
		'violet',
		'volatile',
		'vulgar',
		'wanting',
		'warm',
		'wary',
		'wasteful',
		'weak',
		'weary',
		'weekly',
		'weird',
		'welcome',
		'well',
		'western',
		'wet',
		'white',
		'whole',
		'wholesale',
		'wide',
		'wild',
		'windy',
		'wiry',
		'wise',
		'wistful',
		'womanly',
		'wooden',
		'woozy',
		'wound',
		'wrong',
		'wry',
		'yellow',
		'young',
		'zany',
		'sacred',
		//words that have good comparative/superlative forms
		'aggressive',
		'awesome',
		'beautiful',
		'bored',
		'boring',
		'clean',
		'dirty',
		'efficient',
		'gruesome',
		'handsome',
		'innocent',
		'lean',
		'little',
		'long',
		'mean',
		'normal',
		'proud',
		'rapid',
		'scared',
		'smart',
		'thirsty',
		'hungry',
		'clear',
		'happy',
		'lucky',
		'pretty',
		'interesting',
		'attractive',
		'dangerous',
		'intellegent',
		'formal',
		'tired',
		'solid',
		'angry',

	  "unknown",
	  "detailed",
	  "ongoing",
	  "prominent",
	  "permanent",
	  "diverse",
	  "partial",
	  "moderate",
	  "contemporary",
	  "intense",
	  "widespread",
	  "ultimate",
	  "ideal",
	  "adequate",
	  "sophisticated",
	  "naked",
	  "dominant",
	  "precise",
	  "intact",
	  "adverse",
	  "genuine",
	  "subtle",
	  "universal",
	  "resistant",
	  "routine",
	  "distant",
	  "unexpected",
	  "soviet",
	  "blind",
	  "artificial",
	  "mild",
	  "legitimate",
	  "unpublished",
	  "superior",
	  "intermediate",
	  "everyday",
	  "dumb",
	  "excess",
	  "sexy",
	  "fake",
	  "monthly",
	  "premature",
	  "sheer",
	  "generic",
	  "insane",
	  "contrary",
	  "twin",
	  "upcoming",
	  "bottom",
	  "costly",
	  "indirect",
	  "sole",
	  "unrelated",
	  "hispanic",
	  "improper",
	  "underground",
	  "legendary",
	  "reluctant",
	  "beloved",
	  "inappropriate",
	  "corrupt",
	  "irrelevant",
	  "justified",
	  "obscure",
	  "profound",
	  "hostile",
	  "influential",
	  "inadequate",
	  "abstract",
	  "timely",
	  "authentic",
	  "bold",
	  "intimate",
	  "straightforward",
	  "rival",
	  "right-wing",
	  "racist",
	  "symbolic",
	  "unprecedented",
	  "loyal",
	  "talented",
	  "troubled",
	  "noble",
	  "instant",
	  "incorrect",
	  "dense",
	  "blond",
	  "deliberate",
	  "blank",
	  "rear",
	  "feminine",
	  "apt",
	  "stark",
	  "alcoholic",
	  "teenage",
	  "vibrant",
	  "humble",
	  "vain",
	  "covert",
	  "bland",
	  "trendy",
	  "foul",
	  "populist",
	  "alarming",
	  "hooked",
	  "wicked",
	  "deaf",
	  "left-wing",
	  "lousy",
	  "malignant",
	  "stylish",
	  "upscale",
	  "hourly",
	  "refreshing",
	  "cozy",
	  "slick",
	  "dire",
	  "yearly",
	  "inbred",
	  "part-time",
	  "finite",
	  "backwards",
	  "nightly",
	  "unauthorized",
	  "cheesy",
	  "indoor",
	  "surreal",
	  "bald",
	  "masculine",
	  "shady",
	  "spirited",
	  "eerie",
	  "horrific",
	  "smug",
	  "stern",
	  "hefty",
	  "savvy",
	  "bogus",
	  "elaborate",
	  "gloomy",
	  "pristine",
	  "extravagant",
	  "serene",
	  "advanced",
	  "perverse",
	  "devout",
	  "crisp",
	  "rosy",
	  "slender",
	  "melancholy",
	  "faux",
	  "phony",
	  "danish",
	  "lofty",
	  "nuanced",
	  "lax",
	  "adept",
	  "barren",
	  "shameful",
	  "sleek",
	  "solemn",
	  "vacant",
	  "dishonest",

	  "brisk",
	  "fluent",
	  "insecure",
	  "humid",
	  "menacing",
	  "moot",

	  "soothing",
	  "self-loathing",
	  "far-reaching",
	  "harrowing",
	  "scathing",
	  "perplexing",
	  "calming",
	  "unconvincing",
	  "unsuspecting",

	  "unassuming",
	  "surprising",
	  "unappealing",
	  "vexing",
	  "unending",
	  "easygoing",
	  "appetizing",
	  "disgruntled",
	  "retarded",
	  "undecided",
	  "unregulated",
	  "unsupervised",
	  "unrecognized",
	  "crazed",
	  "distressed",
	  "jagged",
	  "paralleled",
	  "cramped",
	  "warped",
	  "antiquated",
	  "fabled",
	  "deranged",
	  "diseased",
	  "ragged",
	  "intoxicated",
	  "hallowed",
		"crowded",

	  "ghastly",
	  "disorderly",
	  "saintly",
	  "wily",
	  "sly",
	  "sprightly",
	  "ghostly",
	  "oily",
	  "hilly",
	  "grisly",
	  "earthly",
	  "friendly",
	  "unwieldy",

	]

	//conjugate all of these adjectives to their adverbs. (13ms)
	adjectives.forEach(function(j) {
		main[j] = "JJ"
		var adv = adj_to_adv(j)
		if (adv && adv != j && !main[adv]) {
			// console.log(adv)
			main[adv] = main[adv] || "RB"
		}
		var comp = to_comparative(j)
		if (comp && !comp.match(/^more ./) && comp != j && !main[comp]) {
			// console.log(comp)
			main[comp] = main[comp] || "JJR"
		}
		var sup = to_superlative(j)
		if (sup && !sup.match(/^most ./) && sup != j && !main[sup]) {
			// console.log(sup)
			main[sup] = main[sup] || "JJS"
		}
	})


	if (typeof module !== "undefined" && module.exports) {
		module.exports = main;
	}

	return main
})()
// console.log(Object.keys(lexicon).length)
// console.log(lexicon['weaker'])
// console.log(lexicon['restricted'])