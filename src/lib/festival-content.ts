export type Lang = "ar" | "fr" | "en";

export const COUNTRIES = [
  "🇩🇿", "🇹🇳", "🇪🇬", "🇵🇸", "🇸🇾", "🇴🇲", "🇲🇾", "🇧🇦", "🇹🇷", "🇦🇿", "🇩🇪", "🇲🇰", "🇦🇪", "🇲🇦",
];

type Content = {
  dir: "rtl" | "ltr";
  patronage: string;
  nav: string[];
  qr: string;
  menu: string;
  editionStamp: string;
  title: string;
  headline: string;
  subtitle: string;
  ctaProgram: string;
  ctaMemory: string;
  commissariat: string;
  gallery: string;
  pitch: string;
  figures: { n: string; label: string }[];
  visionKicker: string;
  visionTitle: string;
  visionText: string;
  axes: { title: string; text: string }[];
  legendsKicker: string;
  legendsTitle: string;
  legendsCta: string;
  legends: { name: string; country: string; style: string; edition: string }[];
  highlightsKicker: string;
  highlightsTitle: string;
  more: string;
  highlights: { title: string; text: string; note?: string }[];
  bannerTitle: string;
  bannerTalents: string;
  bannerTalentsCta: string;
  bannerAudience: string;
  bannerAudienceCta: string;
  partnersTitle: string;
  partners: string[];
  footerAbout: string;
  footerContact: string;
  address: string;
  rights: string;
};

const ar: Content = {
  dir: "rtl",
  patronage: "الجمهورية الجزائرية الديمقراطية الشعبية — وزارة الثقافة والفنون — ولاية قسنطينة",
  nav: ["الرئيسية", "المهرجان", "البرنامج", "الدورات السابقة", "الابتكار", "الأرشيف"],
  qr: "الترامواي ينشد (QR)",
  menu: "المهرجان",
  editionStamp: "الدورة الثانية عشرة | قسنطينة",
  title: "الإنشاد",
  headline: "الإنشاد والابتكار: نحو مهرجان ثقافي مستدام",
  subtitle: "خمس ليالٍ فنية دولية على خشبة المسرح الجهوي محمد الطاهر الفرقاني وفوق جسور قسنطينة التاريخية.",
  ctaProgram: "اكتشف البرنامج",
  ctaMemory: "استكشف ذاكرة المهرجان",
  commissariat: "محافظة المهرجان",
  gallery: "إنشاد",
  pitch: "المهرجان الثقافي الدولي للإنشاد بقسنطينة يجمع أصوات العالم الإسلامي في مدينة الجسور المعلقة. في دورته الثانية عشرة، يتحول المهرجان من سلسلة حفلات تقليدية إلى منصة ثقافية وتكنولوجية وسياحية على مدار السنة: إنتاجات مشتركة على الخشبة، إنشاد في الشوارع وعربات الترامواي، منصات مستدامة فوق الجسور، مخبر للذكاء الاصطناعي مع الجامعات، وأرشيف رقمي يحفظ ذاكرة إحدى عشرة دورة من التراث.",
  figures: [
    { n: "05", label: "ليالٍ فنية دولية" },
    { n: "07", label: "محاور استراتيجية مبتكرة" },
    { n: "04", label: "منصات مستدامة على الجسور" },
    { n: "11", label: "دورة من التاريخ والتراث" },
  ],
  visionKicker: "رؤية الدورة الثانية عشرة",
  visionTitle: "سبعة محاور",
  visionText: "من الخشبة إلى المدينة، ومن التراث إلى المختبر: سبعة محاور تجعل الإنشاد حاضراً في حياة قسنطينة طوال العام.",
  axes: [
    { title: "إنتاجات مشتركة على الخشبة", text: "حوارات موسيقية بين فرق من بلدان مختلفة في عروض موحّدة." },
    { title: "الإنشاد الحضري والترامواي", text: "عروض صوتية حية في الساحات وجلسات إنشاد جماعي في الترامواي." },
    { title: "منصات الجسور", text: "أربع منصات مستدامة على جسور قسنطينة الأيقونية." },
    { title: "مخبر الذكاء الاصطناعي والجامعة", text: "معالجة صوتية آنية وعروض إسقاط ضوئي مع الشركاء الجامعيين." },
    { title: "المنتدى الدولي للذكاء الاصطناعي", text: "لقاء الباحثين والفنانين حول مستقبل التراث الموسيقي." },
    { title: "المهرجان الرقمي والأرشيف", text: "مسابقة رقمية دولية وأرشيف مفتوح لكل الدورات." },
    { title: "معرض الاقتصاد الإبداعي", text: "حرفيون ومؤسسات ناشئة حول الصناعات الثقافية." },
  ],
  legendsKicker: "ذاكرة المهرجان",
  legendsTitle: "أسماء تألقت في الدورات السابقة",
  legendsCta: "شاهد خط الدورات الإحدى عشرة السابقة ←",
  legends: [
    { name: "ناصر الدين شاولي", country: "الجزائر", style: "المالوف والإنشاد", edition: "الدورات التأسيسية" },
    { name: "خبيب", country: "الجزائر", style: "إنشاد روحي معاصر", edition: "دورة شبابية" },
    { name: "لطفي بوشناق", country: "تونس", style: "الطرب والتراث الروحي", edition: "ضيف شرف" },
    { name: "مسعود كرتس", country: "مقدونيا الشمالية / تركيا", style: "نشيد دولي وصوفي", edition: "دورة دولية" },
    { name: "عبد الله المناعي", country: "الجزائر", style: "إنشاد قسنطيني وصحراوي", edition: "دورات متعددة" },
    { name: "فرق دولية", country: "الإمارات / سوريا / البوسنة / ماليزيا", style: "تنوّع عالمي", edition: "الدورات 1–11" },
  ],
  highlightsKicker: "أبرز المواعيد",
  highlightsTitle: "البرنامج",
  more: "اعرف المزيد",
  highlights: [
    { title: "خشبة المسرح الجهوي", text: "خمس ليالٍ من الحوارات الموسيقية الدولية: حفل الافتتاح، الحوار الجزائري المصري، ليلة الكورال الجماعي، الليلة العالمية والإفريقية، وختام المقامات.", note: "البرنامج قابل للتعديل وفق الترتيبات التنظيمية الرسمية." },
    { title: "الترامواي ينشد وقسنطينة تنشد", text: "عروض صوتية حية في المدينة وجلسات إنشاد جماعي في ترامواي SETRAM عبر رمز QR." },
    { title: "مخبر الذكاء الاصطناعي والابتكار الثقافي", text: "معالجة صوتية آنية، إسقاط ضوئي رقمي، وعروض مؤسسات ناشئة مع المدرسة العليا للإعلام الآلي ببجاية وكلية الفنون بقسنطينة." },
  ],
  bannerTitle: "شارك في المهرجان الرقمي",
  bannerTalents: "للمواهب الشابة: قدّم مشاركتك في المسابقة الرقمية الدولية.",
  bannerTalentsCta: "أرسل مشاركتك",
  bannerAudience: "للجمهور: جرّب تجربة الإنشاد الجماعي عبر رمز QR.",
  bannerAudienceCta: "جرّب الآن",
  partnersTitle: "الشركاء المؤسساتيون",
  partners: ["وزارة الثقافة والفنون", "ولاية قسنطينة", "مديرية الثقافة", "السياحة والصناعة التقليدية", "SETRAM", "المخابر الجامعية"],
  footerAbout: "المهرجان الثقافي الدولي للإنشاد — قسنطينة، الدورة الثانية عشرة.",
  footerContact: "اتصل بنا",
  address: "محافظة المهرجان، قسنطينة، الجزائر",
  rights: "جميع الحقوق محفوظة",
};

const fr: Content = {
  dir: "ltr",
  patronage: "République Algérienne Démocratique et Populaire — Ministère de la Culture et des Arts — Wilaya de Constantine",
  nav: ["Accueil", "Le Festival", "Programmation", "Éditions Précédentes", "Innovation & IA", "Mémoire Numérique"],
  qr: "Le Tramway Chante (QR)",
  menu: "Le Festival",
  editionStamp: "12e Édition | Constantine",
  title: "Inshad",
  headline: "Inshad et Innovation : vers un festival culturel durable",
  subtitle: "Cinq soirées artistiques internationales au Théâtre Régional Mohamed Tahar Fergani et sur les ponts historiques de Constantine.",
  ctaProgram: "Découvrir la Programmation",
  ctaMemory: "Explorer la Mémoire du Festival",
  commissariat: "Commissariat du Festival",
  gallery: "إنشاد",
  pitch: "Le Festival Culturel International de l'Inshad de Constantine réunit les voix du monde dans la ville des ponts suspendus. Pour sa 12e édition, il passe d'une série de concerts traditionnels à une plateforme culturelle, technologique et touristique toute l'année : coproductions scéniques, Inshad urbain et dans le tramway, scènes durables sur les ponts, laboratoire IA avec les universités et archive numérique de onze éditions de patrimoine.",
  figures: [
    { n: "05", label: "Soirées Artistiques Internationales" },
    { n: "07", label: "Axes Stratégiques Innovants" },
    { n: "04", label: "Scènes Durables sur les Ponts" },
    { n: "11", label: "Éditions d'Histoire & Patrimoine" },
  ],
  visionKicker: "La Vision de la 12e Édition",
  visionTitle: "Sept axes",
  visionText: "De la scène à la ville, du patrimoine au laboratoire : sept axes pour faire vivre l'Inshad à Constantine toute l'année.",
  axes: [
    { title: "Productions Scéniques Communes", text: "Dialogues musicaux entre ensembles de pays différents." },
    { title: "Inshad Urbain & Tramway", text: "Pop-ups acoustiques et chants collectifs dans le tramway." },
    { title: "Scènes sur les Ponts", text: "Quatre scènes durables sur les ponts emblématiques." },
    { title: "Laboratoire IA & Université", text: "Traitement audio en temps réel et projection mapping." },
    { title: "Forum International de l'IA", text: "Chercheurs et artistes autour de l'avenir du patrimoine musical." },
    { title: "Festival Numérique & Archive", text: "Concours numérique international et archive ouverte." },
    { title: "Expo Économie Créative", text: "Artisans et startups des industries culturelles." },
  ],
  legendsKicker: "Mémoire du Festival",
  legendsTitle: "Légendes & Voix des Éditions Précédentes",
  legendsCta: "Voir la Frise des 11 Éditions Précédentes →",
  legends: [
    { name: "Nacer Eddine Chaouli", country: "Algérie", style: "Malouf & Inshad", edition: "Éditions fondatrices" },
    { name: "Khoubaib", country: "Algérie", style: "Inshad spirituel contemporain", edition: "Édition jeunesse" },
    { name: "Lotfi Bouchnak", country: "Tunisie", style: "Tarab & patrimoine spirituel", edition: "Invité d'honneur" },
    { name: "Mesut Kurtis", country: "Macédoine du Nord / Turquie", style: "Nasheed & fusion soufie", edition: "Édition internationale" },
    { name: "Abdallah El Menai", country: "Algérie", style: "Inshad constantinois & saharien", edition: "Plusieurs éditions" },
    { name: "Ensembles Internationaux", country: "EAU / Syrie / Bosnie / Malaisie", style: "Diversité mondiale", edition: "Éditions 1–11" },
  ],
  highlightsKicker: "Temps Forts",
  highlightsTitle: "Programme",
  more: "En savoir plus",
  highlights: [
    { title: "La Scène du Théâtre Régional", text: "5 nuits de dialogues musicaux internationaux : Gala d'ouverture, Dialogue algéro-égyptien, Nuit du chœur collectif, Nuit mondiale & africaine, Clôture des Maqamat.", note: "Programme susceptible de modifications selon les dispositions réglementaires officielles." },
    { title: "Le Tramway Chante & Constantine Chante", text: "Pop-ups acoustiques en ville et chants collectifs dans le tramway SETRAM via QR code." },
    { title: "Le Laboratoire IA & Innovation Culturelle", text: "Traitement audio en temps réel, projection mapping et démos de startups avec l'ESI Béjaïa et la Faculté des Arts de Constantine." },
  ],
  bannerTitle: "Participez au Festival Numérique",
  bannerTalents: "Jeunes talents : soumettez votre candidature au Concours Numérique International.",
  bannerTalentsCta: "Soumettre",
  bannerAudience: "Public : testez l'expérience de chant collectif par QR code.",
  bannerAudienceCta: "Essayer",
  partnersTitle: "Partenaires Institutionnels",
  partners: ["Ministère de la Culture et des Arts", "Wilaya de Constantine", "Direction de la Culture", "Tourisme & Artisanat", "SETRAM", "Laboratoires Universitaires"],
  footerAbout: "Festival Culturel International de l'Inshad — Constantine, 12e édition.",
  footerContact: "Contact",
  address: "Commissariat du Festival, Constantine, Algérie",
  rights: "Tous droits réservés",
};

const en: Content = {
  ...fr,
  patronage: "People's Democratic Republic of Algeria — Ministry of Culture and Arts — Wilaya of Constantine",
  nav: ["Home", "The Festival", "Program", "Past Editions", "Innovation & AI", "Digital Archive"],
  qr: "Tramway Sings (QR)",
  menu: "The Festival",
  editionStamp: "12th Edition | Constantine",
  headline: "Inshad and Innovation: Towards a Sustainable Cultural Festival",
  subtitle: "Five international artistic nights at the Mohamed Tahar Fergani Regional Theater and on Constantine's historic bridges.",
  ctaProgram: "Explore the Program",
  ctaMemory: "Explore Festival History",
  commissariat: "Festival Commissariat",
  pitch: "The International Cultural Festival of Inshad in Constantine brings the world's voices to the city of suspended bridges. For its 12th edition, it grows from a series of traditional concerts into a year-round cultural, technological and touristic platform: joint stage productions, urban and tramway Inshad, sustainable bridge stages, an AI lab with universities, and a digital archive of eleven editions of heritage.",
  figures: [
    { n: "05", label: "International Artistic Nights" },
    { n: "07", label: "Innovative Strategic Axes" },
    { n: "04", label: "Sustainable Bridge Stages" },
    { n: "11", label: "Editions of Heritage" },
  ],
  visionKicker: "The Vision of the 12th Edition",
  visionTitle: "Seven axes",
  visionText: "From stage to city, from heritage to lab: seven axes that keep Inshad alive in Constantine all year long.",
  axes: [
    { title: "Joint Stage Productions", text: "Musical dialogues between ensembles from different countries." },
    { title: "Urban & Tramway Inshad", text: "Acoustic pop-ups and collective sing-alongs on the tramway." },
    { title: "Bridge Stages", text: "Four sustainable stages on the iconic bridges." },
    { title: "AI & University Lab", text: "Real-time audio processing and projection mapping." },
    { title: "International AI Forum", text: "Researchers and artists on the future of musical heritage." },
    { title: "Digital Festival & Archive", text: "International digital competition and open archive." },
    { title: "Creative Economy Expo", text: "Artisans and startups from the cultural industries." },
  ],
  legendsKicker: "Festival Memory",
  legendsTitle: "Legends & Voices of Previous Editions",
  legendsCta: "See the Timeline of the 11 Previous Editions →",
  legends: [
    { name: "Nacer Eddine Chaouli", country: "Algeria", style: "Malouf & Inshad", edition: "Founding editions" },
    { name: "Khoubaib", country: "Algeria", style: "Contemporary spiritual Inshad", edition: "Youth edition" },
    { name: "Lotfi Bouchnak", country: "Tunisia", style: "Tarab & spiritual heritage", edition: "Guest of honor" },
    { name: "Mesut Kurtis", country: "North Macedonia / Turkey", style: "Nasheed & Sufi fusion", edition: "International edition" },
    { name: "Abdallah El Menai", country: "Algeria", style: "Constantine & Saharan Inshad", edition: "Several editions" },
    { name: "International Ensembles", country: "UAE / Syria / Bosnia / Malaysia", style: "Global diversity", edition: "Editions 1–11" },
  ],
  highlightsKicker: "Highlights",
  highlightsTitle: "Program",
  more: "Learn more",
  highlights: [
    { title: "The Regional Theater Stage", text: "5 nights of international musical dialogues: Opening Gala, Algerian-Egyptian Dialogue, Collective Choir Night, Global & African Night, Maqamat Closing.", note: "Program subject to change according to official regulatory arrangements." },
    { title: "The Tramway Sings & Constantine Sings", text: "Live acoustic pop-ups across the city and SETRAM tramway sing-alongs via QR code." },
    { title: "The AI & Cultural Innovation Lab", text: "Real-time audio processing, projection mapping and startup demos with ESI Béjaïa and the Constantine Faculty of Arts." },
  ],
  bannerTitle: "Join the Digital Festival",
  bannerTalents: "Young talents: submit your entry to the International Digital Competition.",
  bannerTalentsCta: "Submit",
  bannerAudience: "Audiences: try the QR code collective sing-along.",
  bannerAudienceCta: "Try it",
  partnersTitle: "Institutional Partners",
  partners: ["Ministry of Culture and Arts", "Wilaya of Constantine", "Directorate of Culture", "Tourism & Handicrafts", "SETRAM", "University Labs"],
  footerAbout: "International Cultural Festival of Inshad — Constantine, 12th edition.",
  footerContact: "Contact",
  address: "Festival Commissariat, Constantine, Algeria",
  rights: "All rights reserved",
};

export const CONTENT: Record<Lang, Content> = { ar, fr, en };
