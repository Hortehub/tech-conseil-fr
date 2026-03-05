export const articles = [
  {
    slug: "meilleur-pc-portable-2025",
    titre: "Meilleur PC Portable 2025 : Comparatif & Guide d'Achat Complet",
    description: "Découvrez notre sélection des 5 meilleurs PC portables de 2025, testés et comparés pour vous aider à faire le bon choix selon votre budget.",
    categorie: "PC & Laptops",
    date: "Mars 2025",
    tempsLecture: "8 min",
    image: "💻",
    motCle: "meilleur pc portable",
    produits: [
      {
        rang: 1,
        nom: "ASUS ROG Zephyrus G14 (2024)",
        asin: "B0CMDWWX7Z",
        prix: "1 299€",
        note: 4.7,
        avis: 2341,
        badge: "Choix de la rédaction",
        accroche: "Le meilleur rapport performance/portabilité",
        description: "L'ASUS ROG Zephyrus G14 s'impose comme la référence absolue dans la catégorie des ultraportables gaming. Avec son processeur AMD Ryzen 9 et sa GPU NVIDIA RTX 4060, il offre des performances remarquables dans un châssis de seulement 1,5 kg. L'écran OLED 2K 120Hz est d'une qualité visuelle époustouflante, parfait pour le travail créatif comme pour les jeux.",
        pointsForts: ["AMD Ryzen 9 + RTX 4060", "Écran OLED 2K 120Hz", "Autonomie 10h+", "Design ultra-compact 1.5kg"],
        pointsFaibles: ["Prix élevé", "Pas de port SD card"]
      },
      {
        rang: 2,
        nom: "MacBook Air M3 13 pouces",
        asin: "B0CVL7BXTH",
        prix: "1 199€",
        note: 4.8,
        avis: 5621,
        badge: "Best-seller",
        accroche: "L'ultraportable parfait pour la productivité",
        description: "Le MacBook Air M3 repousse encore les limites de ce que peut faire un laptop sans ventilateur. La puce M3 d'Apple offre des performances qui surpassent la plupart des PC Windows haut de gamme, avec une autonomie record de 18 heures. Idéal pour les étudiants, créatifs et professionnels en déplacement.",
        pointsForts: ["Puce Apple M3 ultra-rapide", "18h d'autonomie", "0 dB (sans ventilateur)", "Écran Liquid Retina"],
        pointsFaibles: ["Écosystème Apple uniquement", "Peu de ports natifs"]
      },
      {
        rang: 3,
        nom: "Lenovo ThinkPad X1 Carbon Gen 12",
        asin: "B0D3KFLT4Q",
        prix: "1 549€",
        note: 4.6,
        avis: 987,
        badge: "Pro recommandé",
        accroche: "Le laptop professionnel ultime",
        description: "Le ThinkPad X1 Carbon est la référence incontestée pour les professionnels exigeants. Sa construction en fibre de carbone le rend à la fois ultra-léger (1,12 kg) et extrêmement robuste. Le clavier est le meilleur du marché, et la sécurité intégrée (lecteur empreinte, caméra IR) en fait le choix idéal en entreprise.",
        pointsForts: ["Ultra-léger 1.12kg", "Clavier exceptionnel", "Sécurité enterprise", "Intel Core Ultra 7"],
        pointsFaibles: ["Prix premium", "Écran basique en entrée de gamme"]
      },
      {
        rang: 4,
        nom: "HP Pavilion 15 (2024)",
        asin: "B0CW3LXKBD",
        prix: "649€",
        note: 4.4,
        avis: 1876,
        badge: "Meilleur rapport qualité/prix",
        accroche: "Le meilleur choix sous 700€",
        description: "Pour ceux qui cherchent un PC portable performant sans se ruiner, le HP Pavilion 15 est une excellente option. Avec son processeur Intel Core i5 de 13e génération et ses 16 Go de RAM, il gère parfaitement les tâches bureautiques, le streaming et même quelques jeux légers. Son écran Full HD IPS offre une belle qualité d'image.",
        pointsForts: ["Excellent rapport qualité/prix", "16 Go RAM", "Intel Core i5 13e gen", "Grande autonomie"],
        pointsFaibles: ["GPU intégré uniquement", "Poids de 1.8kg"]
      },
      {
        rang: 5,
        nom: "Dell XPS 13 Plus (2024)",
        asin: "B0CXYZ1234",
        prix: "1 399€",
        note: 4.5,
        avis: 1432,
        badge: "Design premium",
        accroche: "Le plus beau laptop Windows",
        description: "Le Dell XPS 13 Plus est tout simplement le laptop Windows le plus élégant du marché. Son design minimaliste épuré, son écran OLED optionnel et sa finition aluminium brossé en font un objet d'exception. Les performances Intel Core Ultra 7 sont au rendez-vous pour toutes les tâches créatives et professionnelles.",
        pointsForts: ["Design iconique", "Écran OLED disponible", "Finition premium", "Intel Core Ultra 7"],
        pointsFaibles: ["Connectique limitée", "Prix élevé pour les specs"]
      }
    ],
    criteres: [
      { titre: "Le processeur", texte: "Le cœur de votre PC portable. Pour un usage bureautique, un Intel Core i5 ou AMD Ryzen 5 suffit. Pour la vidéo, la 3D ou les jeux, visez un Core i7/Ryzen 7 minimum. Les puces Apple M-series dominent en efficacité énergétique." },
      { titre: "La RAM", texte: "16 Go est le minimum confortable en 2025. 32 Go si vous faites de la création de contenu ou du multitâche intensif. La RAM soudée (non extensible) est courante sur les ultraportables, vérifiez avant d'acheter." },
      { titre: "Le stockage SSD", texte: "Un SSD NVMe de 512 Go est le minimum. 1 To est recommandé si vous stockez des photos, vidéos ou jeux. Vérifiez la vitesse de lecture/écriture : 3000+ MB/s pour les meilleurs." },
      { titre: "L'autonomie", texte: "Cruciale pour les nomades. Les MacBook M3 (18h) et ASUS Zephyrus (10h) dominent. Méfiez-vous des annonces constructeurs : comptez 30% de moins en usage réel." },
      { titre: "L'écran", texte: "IPS pour un bon rapport qualité/prix, OLED pour les couleurs et contrastes extraordinaires. Visez minimum Full HD (1920x1080). Le 120Hz rend la navigation fluide même hors gaming." }
    ],
    faq: [
      { question: "Quel PC portable choisir pour étudiant en 2025 ?", reponse: "Pour les étudiants, le HP Pavilion 15 à 649€ ou le MacBook Air M3 à 1199€ sont les meilleures options selon votre budget. L'essentiel : 16 Go RAM, SSD 512 Go, bonne autonomie." },
      { question: "PC portable gaming ou ultraportable : lequel choisir ?", reponse: "Un gaming PC offre plus de puissance graphique mais pèse 2-3 kg et tient 3-4h sur batterie. Un ultraportable comme le Zephyrus G14 fait un excellent compromis : performant et léger." },
      { question: "MacBook ou Windows : que choisir en 2025 ?", reponse: "MacBook si vous travaillez dans l'écosystème Apple (iPhone, iPad), pour la création de contenu ou l'autonomie. Windows si vous avez besoin de compatibilité logicielle spécifique ou jouez aux jeux PC." },
      { question: "Quelle différence entre i5 et i7 pour un PC portable ?", reponse: "Le Core i7 offre 20-30% de performances supplémentaires vs i5, mais consomme plus et coûte 150-200€ de plus. Pour du bureautique, l'i5 suffit. Pour la création ou les jeux, l'i7 vaut l'investissement." }
    ]
  },
  {
    slug: "meilleur-casque-sans-fil-2025",
    titre: "Meilleur Casque Sans Fil 2025 : Top 5 Testés & Comparés",
    description: "Notre comparatif des meilleurs casques Bluetooth 2025 : qualité audio, réduction de bruit active, autonomie et rapport qualité/prix analysés.",
    categorie: "Audio & Casques",
    date: "Mars 2025",
    tempsLecture: "7 min",
    image: "🎧",
    motCle: "meilleur casque sans fil",
    produits: [
      {
        rang: 1,
        nom: "Sony WH-1000XM5",
        asin: "B09XS7JWHH",
        prix: "279€",
        note: 4.7,
        avis: 8921,
        badge: "Choix de la rédaction",
        accroche: "La meilleure réduction de bruit du marché",
        description: "Le Sony WH-1000XM5 reste la référence absolue en matière de casques à réduction de bruit active. Sa technologie ANC de pointe efface quasi-totalement le bruit ambiant, le rendant idéal pour les transports et l'open space. La qualité sonore Hi-Res avec codec LDAC est exceptionnelle, et les 30h d'autonomie couvrent largement la semaine.",
        pointsForts: ["ANC n°1 du marché", "Autonomie 30h", "Qualité Hi-Res / LDAC", "Confort exceptionnel"],
        pointsFaibles: ["Prix élevé", "Non pliable"]
      },
      {
        rang: 2,
        nom: "Apple AirPods Max (USB-C)",
        asin: "B0CHX9N594",
        prix: "449€",
        note: 4.5,
        avis: 3210,
        badge: "Premium Apple",
        accroche: "Le luxe ultime pour les utilisateurs Apple",
        description: "Les AirPods Max incarnent l'excellence audio selon Apple. Leur construction aluminium et mesh est d'une qualité tactile incomparable. L'ANC est excellent, et l'intégration dans l'écosystème Apple (bascule automatique iPhone/Mac/iPad) est sans égal. La spatial audio avec Dolby Atmos transforme l'expérience cinéma.",
        pointsForts: ["Construction premium aluminium", "Spatial Audio Dolby Atmos", "Intégration Apple parfaite", "Son équilibré"],
        pointsFaibles: ["Très cher", "Android limité", "Étui basique"]
      },
      {
        rang: 3,
        nom: "Bose QuietComfort 45",
        asin: "B098FKXT8L",
        prix: "229€",
        note: 4.6,
        avis: 6543,
        badge: "Confort n°1",
        accroche: "Le casque le plus confortable pour de longues sessions",
        description: "Le Bose QC45 est le casque plébiscité par ceux qui portent leur casque des heures durant. Son remboursage en mousse mémoire et son arceau réglable avec précision procurent un confort inégalé même après 6h de port. L'ANC Bose reste parmi les meilleures du marché, et le son signature Bose est toujours aussi agréable.",
        pointsForts: ["Confort de référence", "ANC très efficace", "24h d'autonomie", "Pliable"],
        pointsFaibles: ["Pas de codec haute résolution", "Micro moyen"]
      }
    ],
    criteres: [
      { titre: "La réduction de bruit (ANC)", texte: "La technologie ANC (Active Noise Cancelling) utilise des micros pour analyser et contrebalancer les bruits environnants. Sony et Bose dominent ce segment. Indispensable pour travailler en open space ou voyager." },
      { titre: "La qualité audio", texte: "Vérifiez les codecs Bluetooth supportés : SBC (basique), AAC (Apple), aptX (Android), LDAC (Sony, meilleure qualité). Pour le hi-res audio, le LDAC est le meilleur codec sans fil disponible." },
      { titre: "L'autonomie", texte: "Comptez 20-30h pour les casques premium. La recharge rapide (10 min = 3h) est très pratique. Les AirPods Max avec leur 20h sont en retrait face au Sony WH-1000XM5 (30h)." }
    ],
    faq: [
      { question: "Sony WH-1000XM5 ou Bose QC45 : lequel choisir ?", reponse: "Sony pour la meilleure qualité audio et ANC. Bose pour le confort absolu et les longues sessions. Les deux sont excellents, c'est surtout une question de priorités." },
      { question: "Les AirPods Max valent-ils leur prix ?", reponse: "Seulement si vous êtes dans l'écosystème Apple. La qualité est indéniable, mais à 449€ le Sony WH-1000XM5 à 279€ offre un meilleur rapport qualité/prix pour les autres." },
      { question: "Casque sans fil ou filaire : lequel est meilleur ?", reponse: "Le filaire reste légèrement supérieur en qualité pure, mais le sans fil avec LDAC s'en approche très près. Pour un usage quotidien et le confort, le sans fil s'impose." }
    ]
  },
  {
    slug: "guide-achat-smartphone-2025",
    titre: "Guide Achat Smartphone 2025 : Comment Choisir le Bon ?",
    description: "Notre guide complet pour choisir votre prochain smartphone en 2025 : critères essentiels, pièges à éviter et notre sélection par budget.",
    categorie: "Smartphones",
    date: "Mars 2025",
    tempsLecture: "10 min",
    image: "📱",
    motCle: "guide achat smartphone",
    produits: [
      {
        rang: 1,
        nom: "Samsung Galaxy S24 Ultra",
        asin: "B0CMDLC436",
        prix: "1 099€",
        note: 4.6,
        avis: 7823,
        badge: "Best Android 2025",
        accroche: "Le smartphone Android le plus complet",
        description: "Le Samsung Galaxy S24 Ultra est le summum de la technologie Android en 2025. Son quadruple capteur photo avec zoom 10x optique, son S Pen intégré et son écran Dynamic AMOLED 6,8 pouces 120Hz en font un outil de productivité et de créativité incomparable. La puce Snapdragon 8 Gen 3 garantit des performances au top pour plusieurs années.",
        pointsForts: ["Zoom 10x optique", "S Pen intégré", "Écran 6.8\" 120Hz", "7 ans de mises à jour"],
        pointsFaibles: ["Prix très élevé", "Grand format 228g"]
      },
      {
        rang: 2,
        nom: "iPhone 16 Pro",
        asin: "B0DGHKQZ7F",
        prix: "1 199€",
        note: 4.7,
        avis: 9234,
        badge: "Meilleur iPhone",
        accroche: "L'iPhone le plus avancé jamais conçu",
        description: "L'iPhone 16 Pro marque un tournant avec sa puce A18 Pro et ses nouvelles capacités d'IA Apple Intelligence. Le bouton Action personnalisable, le contrôle caméra dédié et l'écran ProMotion 120Hz le placent au sommet du marché iOS. Son système photo ProRAW et ProRes pour la vidéo en font le choix n°1 des créateurs de contenu.",
        pointsForts: ["Puce A18 Pro", "Apple Intelligence IA", "ProRAW + ProRes vidéo", "Action Button"],
        pointsFaibles: ["Très cher", "Pas de chargeur inclus"]
      },
      {
        rang: 3,
        nom: "Google Pixel 9 Pro",
        asin: "B0D84S271S",
        prix: "999€",
        note: 4.5,
        avis: 4521,
        badge: "Meilleur photo IA",
        accroche: "Le roi de la photographie computationnelle",
        description: "Le Google Pixel 9 Pro est le smartphone qui exploite le mieux l'intelligence artificielle pour la photographie. Les fonctions Magic Eraser, Best Take et Photo Unblur transforment n'importe qui en photographe expert. Gemini AI intégré directement dans Android offre une expérience unique. Et il reçoit 7 ans de mises à jour garanties.",
        pointsForts: ["Photo IA exceptionnelle", "Gemini AI natif", "7 ans updates", "Android pur"],
        pointsFaibles: ["Réseau 5G limité en France", "Design conservateur"]
      }
    ],
    criteres: [
      { titre: "Le processeur (SoC)", texte: "Apple A18 Pro, Snapdragon 8 Gen 3 et Google Tensor G4 sont les puces haut de gamme 2025. Pour le milieu de gamme, Snapdragon 7s Gen 2 ou Dimensity 8300 offrent de bonnes performances." },
      { titre: "L'écran", texte: "AMOLED/OLED pour les couleurs vives et les noirs profonds. 120Hz minimum pour une navigation fluide. La luminosité peak (2000+ nits) est cruciale pour la lisibilité en plein soleil." },
      { titre: "La batterie et la charge", texte: "Visez 4500 mAh minimum. La charge rapide 65W+ fait passer de 0 à 100% en moins d'une heure. La charge sans fil est pratique mais plus lente." },
      { titre: "L'appareil photo", texte: "Le nombre de mégapixels est moins important que la taille du capteur et les logiciels de traitement. Google, Apple et Samsung dominent grâce à leur IA photo avancée." }
    ],
    faq: [
      { question: "iPhone ou Android en 2025 ?", reponse: "iPhone pour l'écosystème Apple intégré, la longévité (6 ans de mises à jour) et la confidentialité. Android pour la personnalisation, plus de choix de prix et la compatibilité universelle." },
      { question: "Quel smartphone choisir pour moins de 400€ ?", reponse: "Le Samsung Galaxy A55 ou le Nothing Phone 2a sont d'excellents choix sous 400€. Ils offrent un écran AMOLED 120Hz, une bonne batterie et des performances confortables pour 3-4 ans." },
      { question: "Combien de temps dure un smartphone en moyenne ?", reponse: "Un smartphone haut de gamme dure 4-5 ans avec un soin normal. Apple et Samsung garantissent maintenant 7 ans de mises à jour, ce qui prolonge la durée de vie logicielle." }
    ]
  }
]

export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug)
}

export function getArticlesByCategorie(categorie) {
  return articles.filter(a => a.categorie === categorie)
}
