const movies = [
  "1920's",
  "1930's",
  "1940's",
  "1950's",
  "1960's",
  "1970's",
  "1980's",
  "1990's",
  "2000's",
  "2010's",
  "2d movies",
  "360-degree video",
  "3d movies",
  "4k resolution",
  "8k resolution",
  "a-list",
  "academy award",
  "action",
  "adaptation",
  "adventure",
  "akira kurosawa",
  "al pacino",
  "alfred hitchcock",
  "analysis",
  "ang lee",
  "animated",
  "animation",
  "anime",
  "art direction",
  "art house films",
  "audio",
  "audrey hepburn",
  "augmented reality",
  "auteur",
  "authenticity",
  "avant-garde",
  "awards",
  "bafta",
  "barbara stanwyck",
  "behind the scenes",
  "best actor",
  "best actress",
  "best director",
  "best picture",
  "best supporting actor",
  "best supporting actress",
  "bette davis",
  "bias",
  "bing crosby",
  "biopic",
  "blockbuster",
  "bollywood",
  "box office",
  "brad pitt",
  "brat pack",
  "breakout performance",
  "brian de palma",
  "burt lancaster",
  "buster keaton",
  "camera work",
  "cannes",
  "cary grant",
  "casting",
  "cate blanchett",
  "character",
  "charlie chaplin",
  "christopher nolan",
  "cinema",
  "cinema sound design",
  "cinema studies",
  "cinematography",
  "cinematography",
  "classics",
  "clint eastwood",
  "close reading",
  "comedy",
  "computer graphics",
  "costume design",
  "costuming",
  "crime",
  "critically acclaimed",
  "criticism",
  "cult classic",
  "cultural",
  "cultural analysis",
  "cultural representation",
  "daniel day-lewis",
  "dario argento",
  "david fincher",
  "david lynch",
  "denzel washington",
  "directing",
  "directors",
  "disability",
  "disney",
  "diverse",
  "diverse actors",
  "diverse art departments",
  "diverse backgrounds",
  "diverse camera work",
  "diverse cast",
  "diverse casting accolades",
  "diverse casting agencies",
  "diverse casting awards",
  "diverse casting conferences",
  "diverse casting database",
  "diverse casting decisions",
  "diverse casting events",
  "diverse casting festivals",
  "diverse casting meetups",
  "diverse casting mixers",
  "diverse casting process",
  "diverse casting recognition",
  "diverse casting resources",
  "diverse casting workshops",
  "diverse characters",
  "diverse costumes",
  "diverse crews",
  "diverse cultures",
  "diverse directors",
  "diverse extras",
  "diverse music",
  "diverse perspectives",
  "diverse portfolios",
  "diverse production",
  "diverse representation",
  "diverse stories",
  "diverse storytelling",
  "diverse visual effects",
  "diverse voices",
  "diverse writers",
  "documentary",
  "dolby atmos",
  "dracula",
  "drama",
  "dramedy",
  "drive-in theater",
  "dustin hoffman",
  "editing",
  "effects",
  "elia kazan",
  "elizabeth taylor",
  "ensemble cast",
  "ethnicity",
  "experimental films",
  "fantasy",
  "feature",
  "federico fellini",
  "feminist film theory",
  "film aesthetics",
  "film analysis methods",
  "film appreciation",
  "film awards",
  "film cinematography",
  "film criticism",
  "film culture",
  "film distribution",
  "film economics",
  "film editing style",
  "film festival",
  "film festivals",
  "film finance",
  "film funding",
  "film genre theory",
  "film genres",
  "film history",
  "film industry",
  "film marketing",
  "film mise-en-scène",
  "film mood",
  "film narrative",
  "film noir",
  "film pacing",
  "film production",
  "film research",
  "film score",
  "film score",
  "film semiotics",
  "film society",
  "film sound",
  "film studies",
  "film style",
  "film symbolism",
  "film technology",
  "film tone",
  "filmmaking",
  "foreign films",
  "franchise",
  "francis ford coppola",
  "frank capra",
  "frankenstein",
  "fred astaire",
  "french new wave",
  "fx",
  "gary cooper",
  "gary oldman",
  "gender",
  "gender diversity",
  "gender inclusiveness",
  "gene kelly",
  "genre",
  "george lucas",
  "george stevens",
  "german expressionism",
  "ginger rogers",
  "godzilla",
  "golden globe",
  "grace kelly",
  "green screen",
  "greer garson",
  "harrison ford",
  "henry fonda",
  "high-definition",
  "hindi",
  "hollywood golden age",
  "horror",
  "howard hawks",
  "humphrey bogart",
  "imax",
  "inclusion",
  "inclusive casting",
  "inclusive casting calls",
  "inclusive hiring",
  "inclusive storytelling",
  "inclusivity",
  "independent films",
  "indian cinema",
  "indie films",
  "ingmar bergman",
  "ingrid bergman",
  "interpretation",
  "intersectionality",
  "j-films",
  "jack nicholson",
  "james cameron",
  "james dean",
  "james stewart",
  "japanese",
  "jim jarmusch",
  "joan crawford",
  "joan fontaine",
  "jodie foster",
  "joel and ethan coen",
  "john cassavetes",
  "john ford",
  "john huston",
  "jonathan demme",
  "judy dench",
  "judy garland",
  "julianne moore",
  "kaiju",
  "kate winslet",
  "katharine hepburn",
  "kathryn bigelow",
  "king vidor",
  "laurel and hardy",
  "leading role",
  "leonardo dicaprio",
  "lewis milestone",
  "lgbtq representation",
  "lighting",
  "limited release",
  "marginalized groups",
  "marilyn monroe",
  "marlon brando",
  "martin scorsese",
  "meryl streep",
  "michelangelo antonioni",
  "mike leigh",
  "minorities",
  "minority filmmakers",
  "minority representation",
  "mise en scène",
  "motion capture",
  "movie editing",
  "movie innovations",
  "movie theaters",
  "multicultural",
  "multiplex",
  "music",
  "music composition",
  "musical",
  "mystery",
  "natalie portman",
  "neorealism",
  "new hollywood",
  "ninja",
  "oliver stone",
  "on-screen chemistry",
  "original",
  "orson welles",
  "oscars",
  "paul newman",
  "paul thomas anderson",
  "pedro almodovar",
  "poc representation",
  "post-production",
  "prequel",
  "producing",
  "production",
  "queer theory",
  "quentin tarantino",
  "race",
  "race and representation in film",
  "racial diversity",
  "rat pack",
  "remake",
  "representation",
  "representation matters",
  "ridley scott",
  "rita hayworth",
  "robert altman",
  "robert de niro",
  "robert duvall",
  "romance",
  "ron howard",
  "rosalind russell",
  "samurai",
  "saoirse ronan",
  "satyajit ray",
  "sci-fi",
  "score",
  "screen",
  "screen analysis",
  "screenplay",
  "screenwriting",
  "script",
  "sean connery",
  "sequel",
  "sexual orientation",
  "shot analysis",
  "silent films",
  "sophia loren",
  "sound design",
  "soundtrack",
  "soundtrack",
  "special effects",
  "spencer tracy",
  "spike lee",
  "standard-definition",
  "stanley kubrick",
  "star",
  "stereotyping",
  "steven spielberg",
  "story",
  "story structure",
  "studio ghibli",
  "sundance",
  "sundance film festival",
  "supporting role",
  "surround sound",
  "terrence malick",
  "theory",
  "thriller",
  "thx sound",
  "tim burton",
  "tom hanks",
  "toronto film festival",
  "touchstone pictures",
  "underrepresented",
  "universal",
  "universal monster movies",
  "victor fleming",
  "viola davis",
  "virtual reality",
  "visual effects",
  "visual effects",
  "visual storytelling",
  "vivien leigh",
  "war",
  "werner herzog",
  "wes anderson",
  "western",
  "wide release",
  "william wellman",
  "william wyler",
  "women in film",
  "woody allen",
  "yakuza",
]

export default movies