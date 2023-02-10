
const business = [
  "accounting",
  "acquisition",
  "administration",
  "advertising",
  "advertising",
  "advertising campaign",
  "affiliate marketing",
  "alibaba",
  "allstate",
  "amazon web services",
  "apple",
  "arianna huffington",
  "asset",
  "at&t",
  "balance sheet",
  "berkshire hathaway",
  "big business",
  "bill gates",
  "bmw",
  "board of directors",
  "boeing",
  "brand",
  "branding",
  "branding",
  "budgeting",
  "business activity",
  "business administration",
  "business area",
  "business book summaries",
  "business card",
  "business cards",
  "business case",
  "business center",
  "business class",
  "business climate",
  "business combination",
  "business comics and animation",
  "business communication",
  "business community",
  "business conditions",
  "business conferences and trade shows",
  "business culture",
  "business cycle",
  "business cycles",
  "business day",
  "business days",
  "business deal",
  "business development",
  "business development tips",
  "business development",
  "business district",
  "business documentaries",
  "business economics",
  "business education",
  "business enterprise",
  "business enterprises",
  "business entity",
  "business ethics",
  "business ethics",
  "business ethics",
  "business executive",
  "business executives",
  "business expense",
  "business expenses",
  "business firm",
  "business growth hacking",
  "business hours",
  "business income",
  "business incubators and accelerators",
  "business intelligence",
  "business judgment",
  "business law",
  "business law",
  "business letter",
  "business life",
  "business logic",
  "business man",
  "business management",
  "business manager",
  "business men",
  "business mentorship programs",
  "business model",
  "business models",
  "business motivation",
  "business name",
  "business needs",
  "business negotiation skills",
  "business networking events",
  "business networking tips",
  "business news and current events",
  "business news roundups",
  "business objectives",
  "business office",
  "business opportunity",
  "business organization",
  "business organizations",
  "business owner",
  "business owners",
  "business partner",
  "business people",
  "business plan",
  "business plan creation",
  "business plan",
  "business plans",
  "business podcasts and audio content",
  "business practice",
  "business practices",
  "business procedure",
  "business process improvement",
  "business process",
  "business processes",
  "business relations",
  "business relationship",
  "business risk",
  "business rules",
  "business school",
  "business schools",
  "business sector",
  "business sense",
  "business services",
  "business story telling",
  "business strategy case studies",
  "business strategy",
  "business studies",
  "business suit",
  "business system",
  "business systems",
  "business tax",
  "business transaction",
  "business travel and productivity",
  "business travel",
  "business trip",
  "business trips",
  "business unit",
  "business world",
  "by business",
  "c corporation",
  "capitalism",
  "cash flow statement",
  "caterpillar",
  "change management",
  "cisco systems",
  "coca-cola",
  "coinbase",
  "comcast",
  "commercial",
  "communication skills",
  "communism",
  "companies",
  "competition",
  "competitive",
  "competitive advantage",
  "competitive analysis",
  "conflict resolution",
  "consulting",
  "consumer behavior",
  "consumer behavior",
  "content marketing",
  "contract law",
  "core business",
  "corporate culture",
  "corporate governance",
  "corporate social responsibility",
  "corporate social responsibility",
  "corporate strategy",
  "corporate structure",
  "cost control",
  "cost-benefit analysis",
  "crowdfunding campaigns",
  "currency exchange",
  "customer",
  "customer satisfaction",
  "customer service",
  "data analysis",
  "data analysis and decision making",
  "debt",
  "decision making",
  "demand",
  "demand",
  "direct marketing",
  "disruptive technologies",
  "distribution",
  "distribution channel",
  "distribution channels",
  "divestiture",
  "doing business",
  "duke energy",
  "e-commerce",
  "economic growth",
  "economics",
  "efficiency",
  "elon musk",
  "email marketing",
  "employment law",
  "entrepreneur",
  "entrepreneurial contests and pitch events",
  "entrepreneurial failures and lessons learned",
  "entrepreneurship",
  "entrepreneurship",
  "equity",
  "event marketing",
  "exchange rate",
  "executive management",
  "expense",
  "export",
  "facebook",
  "family business",
  "finance",
  "finance tips",
  "financial analysis",
  "financial literacy",
  "funding",
  "future of work and business",
  "game theory",
  "global business",
  "goldman sachs",
  "google",
  "government",
  "green business practices",
  "groups",
  "growth",
  "hire",
  "home depot",
  "hospitality",
  "human resource management",
  "human resource management",
  "human resources",
  "import",
  "in business",
  "inbound marketing",
  "income statement",
  "incorporated company",
  "incorporation",
  "industrial property",
  "industries",
  "industry",
  "inflation",
  "influencer marketing",
  "information technology",
  "innovation",
  "innovative business models",
  "institution",
  "intellectual property",
  "intellectual property",
  "intercourse",
  "interest",
  "international business",
  "international trade",
  "interviews with successful business people",
  "investing basics",
  "investment",
  "investment",
  "investment portfolio management",
  "investment",
  "jack ma",
  "jan koum",
  "jeff bezos",
  "jobbery",
  "johnson & johnson",
  "joint venture",
  "jp morgan chase",
  "labour",
  "larry ellison",
  "larry page",
  "law firm",
  "lawful day",
  "lawfulness",
  "lawyership",
  "leadership",
  "leadership",
  "leadership qualities",
  "legal entity",
  "legal",
  "liability",
  "line of work",
  "lockheed martin",
  "logistics",
  "loss",
  "management",
  "management",
  "managership",
  "manufacturing",
  "mark cuban",
  "mark zuckerberg",
  "market",
  "market entry",
  "market positioning",
  "market research",
  "market research",
  "market segmentation",
  "market segmentation",
  "market share",
  "market trends",
  "marketing",
  "marketing",
  "marketing budget",
  "marketing campaign analysis",
  "marketing mix",
  "marketing mix",
  "marketing plan",
  "marketing strategies",
  "marketing strategy",
  "marketing",
  "mcdonald's",
  "megacorporation",
  "mercantile",
  "merchantile",
  "merger",
  "mergers and acquisitions",
  "michael dell",
  "microbusiness",
  "microsoft",
  "minority-owned businesses",
  "money",
  "monopolistic competition",
  "monopoly",
  "monopoly",
  "motivation",
  "multinational corporation",
  "music business",
  "national business",
  "negotiation",
  "negotiation skills",
  "netflix",
  "nonbusiness",
  "occupation",
  "office job",
  "office work",
  "office",
  "oil business",
  "oligopoly",
  "online marketing and e-commerce",
  "operation",
  "operations",
  "oprah winfrey",
  "ordinary course of business",
  "organ",
  "organisation",
  "organization",
  "organizational behavior",
  "organizational culture",
  "organized crime",
  "ownership",
  "partnership",
  "patronage",
  "people",
  "perfect competition",
  "performance",
  "performance management",
  "personal business",
  "personal finance advice",
  "personal selling",
  "pfizer",
  "place",
  "politics",
  "porter's five forces",
  "price",
  "pricing",
  "private sector",
  "problem solving",
  "procurement",
  "product",
  "product",
  "product development",
  "product development and design",
  "product life cycle",
  "production",
  "professional",
  "profit",
  "profit",
  "profit margin",
  "profit",
  "profitable",
  "project",
  "project management methodologies",
  "promotion",
  "promotional mix",
  "property",
  "proprietariat",
  "proprietary",
  "public body",
  "public business",
  "public limited company",
  "public office",
  "public relations",
  "public relations",
  "public service",
  "quality control",
  "quota",
  "rapporteurship",
  "real estate",
  "realty",
  "recordkeeping",
  "regulations",
  "reid hoffman",
  "research",
  "retail",
  "retail business",
  "retail",
  "return on investment",
  "revenue",
  "revenue",
  "risk management",
  "risky business",
  "robinhood",
  "rupert murdoch",
  "sales",
  "sales",
  "sales compensation",
  "sales cycle",
  "sales force",
  "sales force management",
  "sales forecasting",
  "sales growth",
  "sales management",
  "sales management strategies",
  "sales management techniques",
  "sales management training",
  "sales motivation",
  "sales performance",
  "sales pipeline",
  "sales planning",
  "sales process",
  "sales quota",
  "sales strategy",
  "sales tactics",
  "sales targets",
  "sales techniques",
  "sales techniques in action",
  "sales training",
  "sales",
  "salesmanship",
  "sam walton",
  "samsung",
  "seo and digital marketing",
  "sergey brin",
  "service",
  "service agreement",
  "service business",
  "services",
  "shared service",
  "show business",
  "slack",
  "small business",
  "small business funding options",
  "small business grants and opportunities",
  "small business success stories",
  "small business",
  "small business",
  "snap",
  "social entrepreneurship",
  "social media marketing",
  "society",
  "sole proprietorship",
  "solution",
  "spotify",
  "square",
  "staff",
  "stage business",
  "staple",
  "startup",
  "startup accelerator programs",
  "startup culture",
  "startup",
  "state capitalism",
  "state ownership",
  "state-owned enterprise",
  "steve ballmer",
  "steve jobs",
  "stock",
  "strategic alliance",
  "strategic planning",
  "strategy",
  "successful business pivots",
  "supplier management",
  "supply",
  "supply",
  "supply and demand",
  "supply chain",
  "supply chain management",
  "sustainability",
  "swot analysis",
  "tariff",
  "tax office",
  "taxation",
  "taxation",
  "team",
  "team building",
  "ted turner",
  "tesla",
  "the 2008 financial crisis",
  "the business",
  "the dot-com bubble",
  "the glass-steagall act",
  "the goldman sachs group",
  "the great depression",
  "the great recession",
  "the new deal",
  "the sarbanes-oxley act",
  "the securities and exchange commission",
  "the troubled asset relief program",
  "tourism",
  "town",
  "toyota",
  "trade name",
  "trademark",
  "trading estate",
  "traffic",
  "transacts",
  "travelers",
  "treaty",
  "trust",
  "turnover",
  "u.s. inc",
  "uber",
  "undertakings",
  "unemployment",
  "unfinished business",
  "union",
  "vanguard",
  "ventures",
  "video marketing",
  "walmart",
  "walt disney",
  "warranty",
  "warren buffett",
  "wholesale",
  "women in business",
  "zoom"
]

export default business