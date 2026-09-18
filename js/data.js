/**
 * Pune Ganpati Darshan 2026 - Comprehensive Data Store
 * Verified mandal details, coordinates, curated routes, traffic police parking & road closure data.
 */

const FESTIVAL_CONFIG = {
  year: 2026,
  startDate: "2026-09-14",
  endDate: "2026-09-25",
  visarjanDate: "2026-09-25",
  greetingEn: "Ganpati Bappa Morya",
  greetingMr: "गणपती बाप्पा मोरया",
  tagline: "Ten days across Pune's historic peths",
  currentDay: 4,
  totalDays: 12
};

const MANDALS_DATA = [
  {
    id: "fb0eace1-c0ca-4124-b0de-0cf5b5a1e7ec",
    slug: "kasba-ganpati",
    name: "Shri Kasba Ganpati",
    nameMr: "श्री कसबा गणपती",
    description: "Pune's revered Gramdaivat (presiding deity) and the first of the Manache Paach. Founded in 1893 during the revival initiated by Lokmanya Tilak, the immersion procession (Visarjan) across Pune begins only after this mandal's chariot sets out.",
    visitorTip: "Quietest in the first hour after morning aarti; the heritage lane narrows sharply by mid-morning.",
    history: "Installed by Chhatrapati Shivaji Maharaj's mother Jijabai in the 17th century after an idol was found in Kasba Peth. In 1893, it was accorded the honor of first priority (Maanacha Pahila) in Pune's public Sarvajanik Ganeshotsav.",
    category: "maanache",
    manacheRank: 1,
    prominence: 980,
    establishedYear: 1893,
    area: {
      slug: "kasba-peth",
      name: "Kasba Peth",
      nameMr: "कसबा पेठ",
      isCore: true
    },
    location: {
      address: "158, Kasba Peth, Near Lal Mahal, Pune, Maharashtra 411011",
      lat: 18.519055,
      lng: 73.857142
    },
    darshanMinutes: 15,
    peakDarshanMinutes: 45,
    liveCrowdLevel: "moderate",
    darshanStyle: "inside",
    timings: {
      open: "06:00 AM",
      close: "11:30 PM",
      note: "Continuous darshan except during 20-min afternoon naivedya"
    },
    aartiTimings: [
      { name: "Sakalchi Aarti", time: "07:30 AM" },
      { name: "Madhyanha Aarti", time: "12:30 PM" },
      { name: "Sandhyakalchi Aarti", time: "08:00 PM" }
    ],
    tags: ["manache", "gramdaivat", "heritage", "historic"],
    isTemple: false,
    verified: true,
    featured: true
  },
  {
    id: "26b8d1a9-3c00-4fec-b184-30c71ea099d8",
    slug: "tambdi-jogeshwari",
    name: "Tambdi Jogeshwari Ganpati",
    nameMr: "तांबडी जोगेश्वरी गणपती",
    description: "Second of the revered Manache Paach, installed right beside the historic Tambdi Jogeshwari Temple — the Gramdevata of Pune. Celebrated for its traditional brass trishul adornment and deep socio-religious roots.",
    visitorTip: "A short 3-minute walk from Kasba Ganpati — the natural second stop on any morning heritage darshan route.",
    history: "Established in 1893. The Jogeshwari temple itself dates back to the Peshwa era, and the idol made of red clay (Tambdi) preserves an unbroken 130+ year tradition with traditional wooden palanquin.",
    category: "maanache",
    manacheRank: 2,
    prominence: 910,
    establishedYear: 1893,
    area: {
      slug: "budhwar-peth",
      name: "Budhwar Peth",
      nameMr: "बुधवार पेठ",
      isCore: true
    },
    location: {
      address: "33, Budhwar Peth, Near Jogeshwari Temple, Pune, Maharashtra 411002",
      lat: 18.51662,
      lng: 73.854894
    },
    darshanMinutes: 12,
    peakDarshanMinutes: 35,
    liveCrowdLevel: "low",
    darshanStyle: "inside",
    timings: {
      open: "06:30 AM",
      close: "11:00 PM",
      note: "Traditional dhol-tasha during evening aarti"
    },
    aartiTimings: [
      { name: "Pratah Aarti", time: "07:00 AM" },
      { name: "Maha Aarti", time: "08:00 PM" }
    ],
    tags: ["manache", "heritage", "historic"],
    isTemple: false,
    verified: true,
    featured: true
  },
  {
    id: "2a3c6427-3483-40c8-b1f4-c31bbbab0772",
    slug: "guruji-talim",
    name: "Guruji Talim Ganpati",
    nameMr: "गुरुजी तालीम गणपती",
    description: "Third of the Manache Paach, founded in 1887 in a traditional gymnasium (talim) by Hindu and Muslim wrestlers together — symbolizing Pune's rich history of communal harmony before Lokmanya Tilak institutionalized public festivities.",
    visitorTip: "Sits on Laxmi Road; approach on foot as vehicular traffic is strictly closed after 5:00 PM.",
    history: "Founded by Bhiku Shinde and Nanasaheb Khasgiwale along with Sheikh Kasam and other talim wrestlers in 1887, making it older than the public declaration of 1893.",
    category: "maanache",
    manacheRank: 3,
    prominence: 870,
    establishedYear: 1887,
    area: {
      slug: "budhwar-peth",
      name: "Budhwar Peth",
      nameMr: "बुधवार पेठ",
      isCore: true
    },
    location: {
      address: "Laxmi Road, Ganpati Chowk, Budhwar Peth, Pune, Maharashtra 411002",
      lat: 18.514997,
      lng: 73.854992
    },
    darshanMinutes: 10,
    peakDarshanMinutes: 25,
    liveCrowdLevel: "low",
    darshanStyle: "either",
    timings: {
      open: "06:00 AM",
      close: "12:00 AM",
      note: "Easily viewable from Laxmi Road pedestrian walking track"
    },
    aartiTimings: [
      { name: "Sakalchi Aarti", time: "08:00 AM" },
      { name: "Sandhya Aarti", time: "08:30 PM" }
    ],
    tags: ["manache", "talim", "heritage", "historic"],
    isTemple: false,
    verified: true,
    featured: true
  },
  {
    id: "821d5e0a-8664-4523-b921-c7312034476f",
    slug: "tulshibaug-ganpati",
    name: "Tulshibaug Ganpati",
    nameMr: "तुळशीबाग गणपती",
    description: "Fourth of the Manache Paach, famed for its towering 13-foot idol adorned with exquisite silver ornaments weighing hundreds of kilograms, nestled inside the vibrant Tulshibaug market square.",
    visitorTip: "The surrounding Tulshibaug market is extremely dense in late afternoons; visit between 7 AM - 10 AM for peaceful darshan.",
    history: "Established in 1901 by local merchants and residents. In 1975, the mandal introduced the famous glass fiber and silver coated statue crafted by master sculptor D.S. Khatavkar.",
    category: "maanache",
    manacheRank: 4,
    prominence: 890,
    establishedYear: 1901,
    area: {
      slug: "budhwar-peth",
      name: "Budhwar Peth",
      nameMr: "बुधवार पेठ",
      isCore: true
    },
    location: {
      address: "Tulshibaug, Budhwar Peth, Pune, Maharashtra 411002",
      lat: 18.514268,
      lng: 73.855306
    },
    darshanMinutes: 20,
    peakDarshanMinutes: 50,
    liveCrowdLevel: "moderate",
    darshanStyle: "inside",
    timings: {
      open: "06:00 AM",
      close: "11:30 PM",
      note: "Separate line for senior citizens and mukh darshan"
    },
    aartiTimings: [
      { name: "Sakal Aarti", time: "07:30 AM" },
      { name: "Sandhya Aarti", time: "08:00 PM" }
    ],
    tags: ["manache", "silver-idol", "market", "historic"],
    isTemple: false,
    verified: true,
    featured: true
  },
  {
    id: "2e6b15c1-1dd7-442a-a992-ad790056f0ef",
    slug: "kesariwada-ganpati",
    name: "Kesariwada Ganpati",
    nameMr: "केसरीवाडा गणपती",
    description: "Fifth of the Manache Paach, housed in the historic courtyard of Kesari Wada — Lokmanya Bal Gangadhar Tilak's ancestral workplace and the headquarters of Kesari & Mahratta newspapers.",
    visitorTip: "The peaceful wada courtyard is serene and shady — ideal as the concluding stop for morning walks.",
    history: "Tilak shifted his family and Ganeshotsav to Kesari Wada in 1905. It remains an epicenter of socio-cultural debates, lectures, and musical kirtans during festival week.",
    category: "maanache",
    manacheRank: 5,
    prominence: 840,
    establishedYear: 1894,
    area: {
      slug: "narayan-peth",
      name: "Narayan Peth",
      nameMr: "नारायण पेठ",
      isCore: true
    },
    location: {
      address: "568, Narayan Peth, Tilak Road, Pune, Maharashtra 411030",
      lat: 18.515811,
      lng: 73.849008
    },
    darshanMinutes: 15,
    peakDarshanMinutes: 30,
    liveCrowdLevel: "low",
    darshanStyle: "inside",
    timings: {
      open: "07:00 AM",
      close: "10:30 PM",
      note: "Contains Tilak museum and library in the wada premises"
    },
    aartiTimings: [
      { name: "Prabhat Aarti", time: "08:00 AM" },
      { name: "Sayam Aarti", time: "07:30 PM" }
    ],
    tags: ["manache", "tilak", "heritage", "historic"],
    isTemple: false,
    verified: true,
    featured: true
  },
  {
    id: "1de437d8-6369-41e5-beef-50fffaf735ac",
    slug: "dagdusheth-halwai-ganpati",
    name: "Shrimant Dagdusheth Halwai Ganpati",
    nameMr: "श्रीमंत दगडूशेठ हलवाई गणपती",
    description: "Pune's most famous Ganpati and a world-renowned year-round temple trust. Known for lavish golden ornamentation, awe-inspiring replica temple mandaps, and massive queues of devotees from across the globe.",
    visitorTip: "Expect the longest queue of any mandal in Pune (1.5 - 3 hours at peak). Early morning between 4:30 AM and 7:00 AM is 4x faster.",
    history: "Founded in 1893 by sweet-maker Dagdusheth Gadve and his wife Lakshmibai after losing their son to the plague epidemic. Blessed by Lokmanya Tilak, it grew into one of Maharashtra's wealthiest charitable trusts.",
    category: "famous",
    manacheRank: null,
    prominence: 1000,
    establishedYear: 1893,
    area: {
      slug: "budhwar-peth",
      name: "Budhwar Peth",
      nameMr: "बुधवार पेठ",
      isCore: true
    },
    location: {
      address: "Ganpati Bhavan, 250, Budhwar Peth, Shivaji Road, Pune 411002",
      lat: 18.51514,
      lng: 73.856379
    },
    darshanMinutes: 45,
    peakDarshanMinutes: 150,
    liveCrowdLevel: "heavy",
    darshanStyle: "inside",
    timings: {
      open: "05:00 AM",
      close: "12:30 AM",
      note: "Continuous live streaming and 24/7 volunteer assistance"
    },
    aartiTimings: [
      { name: "Kakad Aarti", time: "05:30 AM" },
      { name: "Noon Naivedya", time: "12:00 PM" },
      { name: "Maha Aarti", time: "07:30 PM" },
      { name: "Shej Aarti", time: "11:30 PM" }
    ],
    tags: ["famous", "temple", "aarti", "gold"],
    isTemple: true,
    verified: true,
    featured: true
  },
  {
    id: "22e48a9b-e960-4209-ac51-b38b772c0243",
    slug: "akhil-mandai-mandal",
    name: "Akhil Mandai Mandal",
    nameMr: "अखिल मंडई मंडळ",
    description: "Nestled right beside the historic Mahatma Phule Mandai vegetable market. Celebrated for its unique Sharada-Ganesh idol where Lord Ganesha sits alongside Goddess Sharada on an ornate swing (jhula).",
    visitorTip: "The spectacular palace decoration and moving light shows read best after sunset (after 7:30 PM).",
    history: "Established in 1893 by the vegetable and fruit vendors of the British-era Mandai market. It has maintained one of the most beloved artisan traditions in Old Pune.",
    category: "famous",
    manacheRank: null,
    prominence: 820,
    establishedYear: 1893,
    area: {
      slug: "shukrawar-peth",
      name: "Shukrawar Peth",
      nameMr: "शुक्रवार पेठ",
      isCore: true
    },
    location: {
      address: "Mandai, Shukrawar Peth, Pune, Maharashtra 411002",
      lat: 18.511852,
      lng: 73.856135
    },
    darshanMinutes: 12,
    peakDarshanMinutes: 35,
    liveCrowdLevel: "moderate",
    darshanStyle: "outside",
    timings: {
      open: "06:00 AM",
      close: "01:00 AM",
      note: "Stage shows and musical recitals on weekends"
    },
    aartiTimings: [
      { name: "Morning Aarti", time: "08:00 AM" },
      { name: "Evening Aarti", time: "08:30 PM" }
    ],
    tags: ["famous", "dekhava", "night", "market"],
    isTemple: false,
    verified: true,
    featured: true
  },
  {
    id: "033244a1-b00a-4818-add2-c8481ea2ea9c",
    slug: "bhau-rangari-ganpati",
    name: "Shrimant Bhausaheb Rangari Ganpati",
    nameMr: "श्रीमंत भाऊसाहेब रंगारी गणपती",
    description: "India's pioneer Sarvajanik Ganeshotsav mandal founded in 1892. Features a unique historic papier-mâché idol depicting Lord Ganesha slaying a demon (rakshasa), reflecting the revolutionary spirit against British colonial rule.",
    visitorTip: "Located just behind Dagdusheth; take the narrow alley for a fast, peaceful darshan without long lines.",
    history: "Bhausaheb Laxman Javale (known as Bhau Rangari, a royal physician and freedom fighter) installed this idol in 1892, a year before public festivals were popularized in print by Tilak.",
    category: "historic",
    manacheRank: null,
    prominence: 720,
    establishedYear: 1892,
    area: {
      slug: "budhwar-peth",
      name: "Budhwar Peth",
      nameMr: "बुधवार पेठ",
      isCore: true
    },
    location: {
      address: "Bhau Rangari Bhavan, Budhwar Peth, Pune, Maharashtra 411002",
      lat: 18.517583,
      lng: 73.855362
    },
    darshanMinutes: 8,
    peakDarshanMinutes: 20,
    liveCrowdLevel: "low",
    darshanStyle: "either",
    timings: {
      open: "06:00 AM",
      close: "11:30 PM",
      note: "Historic wooden rath on display in front courtyard"
    },
    aartiTimings: [
      { name: "Sakalchi Aarti", time: "07:30 AM" },
      { name: "Sandhya Aarti", time: "08:00 PM" }
    ],
    tags: ["historic", "heritage", "early-mandal", "freedom-movement"],
    isTemple: false,
    verified: true,
    featured: true
  },
  {
    id: "fce6f633-0aab-42c5-9a9d-886353d06947",
    slug: "chhatrapati-rajaram-mandal",
    name: "Chhatrapati Rajaram Mandal",
    nameMr: "छत्रपती राजाराम मंडळ",
    description: "Consistently celebrated for creating some of the grandest architectural temple sets and dynamic lighting decorations in Sadashiv Peth.",
    visitorTip: "Best experienced late at night when the illumination, fountains, and illuminated facades are in full glory.",
    history: "Over a century of service, known for winning top state honors in environmental pandal architecture and social themes.",
    category: "famous",
    manacheRank: null,
    prominence: 760,
    establishedYear: 1894,
    area: {
      slug: "sadashiv-peth",
      name: "Sadashiv Peth",
      nameMr: "सदाशिव पेठ",
      isCore: true
    },
    location: {
      address: "Sadashiv Peth, Near Alka Talkies, Pune, Maharashtra 411030",
      lat: 18.512444,
      lng: 73.847482
    },
    darshanMinutes: 10,
    peakDarshanMinutes: 25,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: {
      open: "07:00 AM",
      close: "12:00 AM"
    },
    aartiTimings: [
      { name: "Pratah Aarti", time: "08:00 AM" },
      { name: "Ratri Aarti", time: "09:00 PM" }
    ],
    tags: ["famous", "decoration", "night", "dekhava"],
    isTemple: false,
    verified: true,
    featured: false
  },
  {
    id: "729f82fb-e06f-42a2-b397-286776e466ea",
    slug: "sarasbaug-ganpati",
    name: "Shri Siddhivinayak, Sarasbaug",
    nameMr: "श्री सिद्धिविनायक, सारसबाग",
    description: "Affectionately called 'Talyatla Ganpati' (Ganpati in the Lake), set on a serene island inside Sarasbaug gardens. A tranquil, open-air temple experience away from narrow peth alleys.",
    visitorTip: "Lush surrounding lawns make this the best and most spacious stop if visiting with toddlers, elderly family members, or tour groups.",
    history: "Built in 1784 by Sawai Madhavrao Peshwa. The temple lake was dried into a garden in modern times, with the sanctum sanctorum preserved intact.",
    category: "famous",
    manacheRank: null,
    prominence: 700,
    establishedYear: 1784,
    area: {
      slug: "sadashiv-peth",
      name: "Sadashiv Peth",
      nameMr: "सदाशिव पेठ",
      isCore: true
    },
    location: {
      address: "Sarasbaug, Sadashiv Peth, Pune, Maharashtra 411030",
      lat: 18.500881,
      lng: 73.85295
    },
    darshanMinutes: 25,
    peakDarshanMinutes: 60,
    liveCrowdLevel: "moderate",
    darshanStyle: "inside",
    timings: {
      open: "05:30 AM",
      close: "09:30 PM",
      note: "Park gates close at 10 PM sharp"
    },
    aartiTimings: [
      { name: "Kakad Aarti", time: "06:00 AM" },
      { name: "Maha Aarti", time: "07:30 PM" }
    ],
    tags: ["famous", "temple", "park", "family"],
    isTemple: true,
    verified: true,
    featured: true
  },
  {
    id: "7aef4bad-792d-464f-a3ad-e3a1c2a88427",
    slug: "shri-morya-gosavi",
    name: "Shri Morya Gosavi Ganpati Mandir",
    nameMr: "श्री मोरया गोसावी गणपती मंदिर",
    description: "The revered 14th-century temple on the banks of Pavana river in Chinchwad, consecrated by the saint Morya Gosavi — the progenitor of the Ganpatya sect in Western India.",
    visitorTip: "Located in Pimpri-Chinchwad; plan this as a dedicated morning temple trip rather than part of the walkable peth route.",
    history: "Saint Morya Gosavi took Sanjeevan Samadhi here in 1561. The shrine was patronized by Chhatrapati Shivaji Maharaj and the Peshwa rulers.",
    category: "famous",
    manacheRank: null,
    prominence: 680,
    establishedYear: 1561,
    area: {
      slug: "chinchwad",
      name: "Chinchwad",
      nameMr: "चिंचवड",
      isCore: false
    },
    location: {
      address: "Gandhi Peth, Prabhat Colony, Chinchwad, Pimpri-Chinchwad 411033",
      lat: 18.626316,
      lng: 73.778442
    },
    darshanMinutes: 20,
    peakDarshanMinutes: 50,
    liveCrowdLevel: "low",
    darshanStyle: "inside",
    timings: {
      open: "05:00 AM",
      close: "10:00 PM"
    },
    aartiTimings: [
      { name: "Sakal Aarti", time: "06:30 AM" },
      { name: "Sandhya Aarti", time: "07:30 PM" }
    ],
    tags: ["famous", "temple", "pcmc", "heritage"],
    isTemple: true,
    verified: true,
    featured: false
  },
  {
    id: "fe2f36fc-1fd9-4864-a45d-2693287be66d",
    slug: "hutatma-babu-genu-mandal",
    name: "Hutatma Babu Genu Mandal",
    nameMr: "हुतात्मा बाबू गेनू मंडळ",
    description: "Named after freedom martyr Babu Genu Said, who sacrificed his life opposing foreign cloth consignments in 1930. Renowned for magnificent mythological live sets.",
    visitorTip: "A few yards from Dagdusheth; evening queues get busy during lighting presentations.",
    history: "Formed in 1970 to honor martyr Babu Genu, actively driving educational and charitable youth drives.",
    category: "historic",
    manacheRank: null,
    prominence: 640,
    establishedYear: 1970,
    area: {
      slug: "budhwar-peth",
      name: "Budhwar Peth",
      nameMr: "बुधवार पेठ",
      isCore: true
    },
    location: {
      address: "Budhwar Peth, Near Dagdusheth, Pune, Maharashtra 411002",
      lat: 18.51389,
      lng: 73.856342
    },
    darshanMinutes: 10,
    peakDarshanMinutes: 25,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: {
      open: "06:30 AM",
      close: "12:00 AM"
    },
    aartiTimings: [
      { name: "Aarti", time: "08:00 AM" },
      { name: "Aarti", time: "08:30 PM" }
    ],
    tags: ["historic", "dekhava", "heritage"],
    isTemple: false,
    verified: true,
    featured: false
  },
  {
    id: "8476de50-fa23-4033-92aa-f832c1e8f111",
    slug: "shanipar-mandal",
    name: "Shanipar Mandal",
    nameMr: "शनिपार मंडळ",
    description: "A cherished landmark mandal at the bustling Shanipar Chowk junction on Sadashiv Peth.",
    visitorTip: "Very easy roadside darshan without waiting; great spot to rest and have chai.",
    category: "historic",
    manacheRank: null,
    prominence: 560,
    area: {
      slug: "sadashiv-peth",
      name: "Sadashiv Peth",
      nameMr: "सदाशिव पेठ",
      isCore: true
    },
    location: {
      address: "Shanipar Chowk, Sadashiv Peth, Pune 411030",
      lat: 18.512619,
      lng: 73.852601
    },
    darshanMinutes: 6,
    peakDarshanMinutes: 15,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: { open: "06:00 AM", close: "11:30 PM" },
    tags: ["historic", "chowk"],
    isTemple: false,
    verified: true
  },
  {
    id: "b6fa131d-ea0d-47f9-84f0-2425833a53b9",
    slug: "nimbalkar-talim-mandal",
    name: "Nimbalkar Talim Mandal",
    nameMr: "निंबाळकर तालीम मंडळ",
    description: "A traditional talim mandal on the Laxmi Road corridor between Tulshibaug and Shanipar.",
    visitorTip: "Take the shaded lane connecting to Sadashiv Peth.",
    category: "historic",
    prominence: 540,
    area: {
      slug: "sadashiv-peth",
      name: "Sadashiv Peth",
      nameMr: "सदाशिव पेठ",
      isCore: true
    },
    location: {
      address: "Nimbalkar Talim, Sadashiv Peth, Pune 411030",
      lat: 18.5119,
      lng: 73.8522
    },
    darshanMinutes: 6,
    peakDarshanMinutes: 15,
    liveCrowdLevel: "low",
    darshanStyle: "either",
    timings: { open: "06:30 AM", close: "11:00 PM" },
    tags: ["historic", "talim"],
    isTemple: false,
    verified: true
  },
  {
    id: "e1af0677-2eea-462c-bdbb-db20bcfa1791",
    slug: "trishund-ganpati-mandir",
    name: "Shree Trishund Ganpati Mandir",
    nameMr: "श्री त्रिशुंड गणपती मंदिर",
    description: "An extraordinary 18th-century stone temple in Somwar/Ganesh Peth, famous for its carved stone facade and a rare idol with three trunks and six arms seated on a peacock.",
    visitorTip: "A hidden architectural gem for heritage lovers. The subterranean sanctum stays refreshingly cool.",
    category: "historic",
    prominence: 480,
    establishedYear: 1770,
    area: {
      slug: "ganesh-peth",
      name: "Ganesh Peth",
      nameMr: "गणेश पेठ",
      isCore: true
    },
    location: {
      address: "Somwar Peth / Ganesh Peth Border, Pune 411011",
      lat: 18.5217,
      lng: 73.8619
    },
    darshanMinutes: 8,
    peakDarshanMinutes: 20,
    liveCrowdLevel: "low",
    darshanStyle: "inside",
    timings: { open: "06:00 AM", close: "09:30 PM" },
    tags: ["historic", "heritage", "temple", "stone-carving"],
    isTemple: true,
    verified: true
  },
  {
    id: "7c863e37-de61-4e39-8b95-4af1a9821c9b",
    slug: "jilbya-maruti-mandal",
    name: "Jilbya Maruti Mandal",
    nameMr: "जिलब्या मारुती मंडळ",
    description: "A popular Shukrawar Peth mandal standing on the key connecting lane between Laxmi Road and the eastern market quarter.",
    visitorTip: "Conveniently visited right after Akhil Mandai Mandal.",
    category: "local",
    prominence: 420,
    area: {
      slug: "shukrawar-peth",
      name: "Shukrawar Peth",
      nameMr: "शुक्रवार पेठ",
      isCore: true
    },
    location: {
      address: "Shukrawar Peth, Pune 411002",
      lat: 18.513319,
      lng: 73.854938
    },
    darshanMinutes: 5,
    peakDarshanMinutes: 12,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: { open: "07:00 AM", close: "11:30 PM" },
    tags: ["local", "peth"],
    isTemple: false,
    verified: true
  },
  {
    id: "0fd3249f-b594-4483-a9cc-7bdaf19222e9",
    slug: "natu-baug-mandal",
    name: "Natu Baug Mandal",
    nameMr: "नातू बाग मंडळ",
    description: "A vibrant Bajirao Road mandal, frequently paired with Shanipar on evening walks.",
    visitorTip: "Smooth pedestrian walkway setup.",
    category: "local",
    prominence: 400,
    area: {
      slug: "sadashiv-peth",
      name: "Sadashiv Peth",
      nameMr: "सदाशिव पेठ",
      isCore: true
    },
    location: {
      address: "Bajirao Road, Sadashiv Peth, Pune 411030",
      lat: 18.510703,
      lng: 73.853821
    },
    darshanMinutes: 5,
    peakDarshanMinutes: 12,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: { open: "06:30 AM", close: "11:00 PM" },
    tags: ["local"],
    isTemple: false,
    verified: true
  },
  {
    id: "e3e16e0b-16ca-413b-801d-0b639f60d495",
    slug: "chinchechi-talim-ganpati",
    name: "Chinchechi Talim Ganpati",
    nameMr: "चिंचेची तालीम गणपती",
    description: "A heritage talim mandal in the inner Shukrawar Peth lanes, retaining wrestling-akhada gym roots.",
    visitorTip: "One of the most authentic old-Pune alley atmospheres.",
    category: "historic",
    prominence: 380,
    area: {
      slug: "shukrawar-peth",
      name: "Shukrawar Peth",
      nameMr: "शुक्रवार पेठ",
      isCore: true
    },
    location: {
      address: "Shukrawar Peth, Pune 411002",
      lat: 18.5086,
      lng: 73.8555
    },
    darshanMinutes: 6,
    peakDarshanMinutes: 15,
    liveCrowdLevel: "low",
    darshanStyle: "either",
    timings: { open: "07:00 AM", close: "11:00 PM" },
    tags: ["historic", "talim"],
    isTemple: false,
    verified: true
  },
  {
    id: "4085bb48-3bd1-496c-8726-2ad250fc9017",
    slug: "garud-ganpati-mandal",
    name: "Garud Ganpati Mandal",
    nameMr: "गरुड गणपती मंडळ",
    description: "A peaceful Shaniwar Peth mandal near Bhide Pul by the Mutha river ghats.",
    visitorTip: "Catch the refreshing breeze near the riverfront promenade.",
    category: "local",
    prominence: 380,
    area: {
      slug: "shaniwar-peth",
      name: "Shaniwar Peth",
      nameMr: "शनिवार पेठ",
      isCore: true
    },
    location: {
      address: "Near Bhide Bridge, Shaniwar Peth, Pune 411030",
      lat: 18.5137,
      lng: 73.8456
    },
    darshanMinutes: 5,
    peakDarshanMinutes: 12,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: { open: "06:00 AM", close: "11:00 PM" },
    tags: ["local", "riverside"],
    isTemple: false,
    verified: true
  },
  {
    id: "b79d32bf-8d6b-4ec6-a468-1a2b136614cb",
    slug: "hatti-ganpati-mandal",
    name: "Hatti Ganpati Mandal",
    nameMr: "हत्ती गणपती मंडळ",
    description: "A Narayan Peth favorite named after the majestic elephant statues guarding its grand archway.",
    visitorTip: "Great photo spot with welcoming local volunteers.",
    category: "local",
    prominence: 360,
    area: {
      slug: "narayan-peth",
      name: "Narayan Peth",
      nameMr: "नारायण पेठ",
      isCore: true
    },
    location: {
      address: "Narayan Peth, Pune 411030",
      lat: 18.511223,
      lng: 73.845858
    },
    darshanMinutes: 5,
    peakDarshanMinutes: 12,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: { open: "07:00 AM", close: "11:30 PM" },
    tags: ["local"],
    isTemple: false,
    verified: true
  },
  {
    id: "92be5aec-daeb-44e5-af97-3ee8cf68ea28",
    slug: "perugate-bhave-mandal",
    name: "Perugate Bhave Mitra Mandal",
    nameMr: "पेरूगेट भावे मित्र मंडळ",
    description: "An energetic Sadashiv/Narayan Peth mandal at Perugate, right beside the heritage Bhave High School.",
    visitorTip: "Very close to classic Pune snack stops like Kata Kirr and Sujata Mastani.",
    category: "local",
    prominence: 340,
    area: {
      slug: "sadashiv-peth",
      name: "Sadashiv Peth",
      nameMr: "सदाशिव पेठ",
      isCore: true
    },
    location: {
      address: "Perugate, Sadashiv Peth, Pune 411030",
      lat: 18.509777,
      lng: 73.84944
    },
    darshanMinutes: 6,
    peakDarshanMinutes: 15,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: { open: "07:00 AM", close: "11:00 PM" },
    tags: ["local"],
    isTemple: false,
    verified: true
  },
  {
    id: "66d726d0-9bd7-44bd-9b20-0b8320c72b8e",
    slug: "mati-ganpati",
    name: "Mati Ganpati",
    nameMr: "माती गणपती",
    description: "A serene Shaniwar Peth mandal preserving sacred eco-friendly clay idol traditions for generations.",
    visitorTip: "Peaceful environment, very welcoming for quiet meditation.",
    category: "local",
    prominence: 320,
    area: {
      slug: "shaniwar-peth",
      name: "Shaniwar Peth",
      nameMr: "शनिवार पेठ",
      isCore: true
    },
    location: {
      address: "Shaniwar Peth, Pune 411030",
      lat: 18.5159,
      lng: 73.8468
    },
    darshanMinutes: 5,
    peakDarshanMinutes: 12,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: { open: "06:30 AM", close: "10:30 PM" },
    tags: ["local", "eco-friendly"],
    isTemple: false,
    verified: true
  },
  {
    id: "154489b4-6c62-4d0b-b700-72596d98092d",
    slug: "phani-ali-ganesh-mandir",
    name: "Phani Ali Ganesh Mandir",
    nameMr: "फणी आळी गणेश मंदिर",
    description: "A traditional lane temple in the Kasba Peth quarter, just a 2-minute walk from the Kasba Gramdaivat.",
    visitorTip: "Rich Peshwa-era wooden columns and brass bells.",
    category: "local",
    prominence: 300,
    area: {
      slug: "kasba-peth",
      name: "Kasba Peth",
      nameMr: "कसबा पेठ",
      isCore: true
    },
    location: {
      address: "Phani Ali, Kasba Peth, Pune 411011",
      lat: 18.5188,
      lng: 73.8571
    },
    darshanMinutes: 6,
    peakDarshanMinutes: 15,
    liveCrowdLevel: "low",
    darshanStyle: "either",
    timings: { open: "06:00 AM", close: "10:00 PM" },
    tags: ["local", "temple"],
    isTemple: true,
    verified: true
  },
  {
    id: "f2092562-04b9-4add-b8cd-bed10055a07e",
    slug: "navjavan-mandal",
    name: "Navjavan Mandal",
    nameMr: "नवजीवन मंडळ",
    description: "A lively youth mandal on the Narayan Peth & Sadashiv Peth border.",
    visitorTip: "Short queue, very quick darshan.",
    category: "local",
    prominence: 120,
    area: {
      slug: "narayan-peth",
      name: "Narayan Peth",
      nameMr: "नारायण पेठ",
      isCore: true
    },
    location: {
      address: "Narayan Peth, Pune 411030",
      lat: 18.512919,
      lng: 73.848728
    },
    darshanMinutes: 5,
    peakDarshanMinutes: 12,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: { open: "07:00 AM", close: "11:00 PM" },
    tags: ["local"],
    isTemple: false,
    verified: true
  },
  {
    id: "2fc518b2-9649-461f-bb56-1e33e13888a8",
    slug: "chimnya-ganpati",
    name: "Chimnya Ganpati",
    nameMr: "चिमण्या गणपती",
    description: "A heritage Sadashiv Peth mandal, a short walk from the Nimbalkar Talim stretch.",
    visitorTip: "One of the coziest, friendliest neighborhood pandals in the peth.",
    category: "local",
    prominence: 120,
    area: {
      slug: "sadashiv-peth",
      name: "Sadashiv Peth",
      nameMr: "सदाशिव पेठ",
      isCore: true
    },
    location: {
      address: "Sadashiv Peth, Pune 411030",
      lat: 18.51118,
      lng: 73.85219
    },
    darshanMinutes: 6,
    peakDarshanMinutes: 15,
    liveCrowdLevel: "low",
    darshanStyle: "either",
    timings: { open: "06:30 AM", close: "11:00 PM" },
    tags: ["local"],
    isTemple: false,
    verified: true
  },
  {
    id: "2453916a-f1d2-462f-8f62-dd9b8552b70a",
    slug: "balvikas-mandal",
    name: "Balvikas Mandal",
    nameMr: "बालविकास मंडळ",
    description: "A lovely neighbourhood mandal in the Budhwar Peth lanes near Bhausaheb Rangari.",
    visitorTip: "Great stop when exploring the narrow historic wadas of Budhwar Peth.",
    category: "local",
    prominence: 120,
    area: {
      slug: "budhwar-peth",
      name: "Budhwar Peth",
      nameMr: "बुधवार पेठ",
      isCore: true
    },
    location: {
      address: "Budhwar Peth, Pune 411002",
      lat: 18.517436,
      lng: 73.855042
    },
    darshanMinutes: 5,
    peakDarshanMinutes: 12,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: { open: "07:00 AM", close: "11:00 PM" },
    tags: ["local"],
    isTemple: false,
    verified: true
  },
  {
    id: "6aa726ad-ae1a-4873-b77d-275a82c4edcb",
    slug: "honaji-tarun-mandal",
    name: "Honaji Tarun Mandal",
    nameMr: "होनाजी तरुण मंडळ",
    description: "An energetic mandal at Rameshwar Chowk, within 3 minutes of Dagdusheth.",
    visitorTip: "Easily accessible from Shivaji Road.",
    category: "local",
    prominence: 120,
    area: {
      slug: "budhwar-peth",
      name: "Budhwar Peth",
      nameMr: "बुधवार पेठ",
      isCore: true
    },
    location: {
      address: "Rameshwar Chowk, Budhwar Peth, Pune 411002",
      lat: 18.515619,
      lng: 73.859274
    },
    darshanMinutes: 6,
    peakDarshanMinutes: 15,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: { open: "06:30 AM", close: "11:30 PM" },
    tags: ["local"],
    isTemple: false,
    verified: true
  },
  {
    id: "9c804976-8df5-4497-8456-dae177128081",
    slug: "seva-mitra-mandal",
    name: "Seva Mitra Mandal",
    nameMr: "सेवा मित्र मंडळ",
    description: "A prominent Shukrawar Peth mandal south of the Mandai market, active in blood donation and educational support.",
    visitorTip: "Warm atmosphere and informative social banners.",
    category: "local",
    prominence: 120,
    area: {
      slug: "shukrawar-peth",
      name: "Shukrawar Peth",
      nameMr: "शुक्रवार पेठ",
      isCore: true
    },
    location: {
      address: "Shukrawar Peth, Pune 411002",
      lat: 18.508656,
      lng: 73.857565
    },
    darshanMinutes: 5,
    peakDarshanMinutes: 12,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: { open: "07:00 AM", close: "11:00 PM" },
    tags: ["local", "social-service"],
    isTemple: false,
    verified: true
  },
  {
    id: "09e035c5-3cc4-41f8-b445-89f651b25f1e",
    slug: "hira-bagh-mandal",
    name: "Hira Bagh Mandal",
    nameMr: "हिराबाग मंडळ",
    description: "A mandal at Hirabaug on the southern edge of the peths, just north of Sarasbaug.",
    visitorTip: "Ideal start or end point when combining peth walks with Sarasbaug.",
    category: "local",
    prominence: 120,
    area: {
      slug: "sadashiv-peth",
      name: "Sadashiv Peth",
      nameMr: "सदाशिव पेठ",
      isCore: true
    },
    location: {
      address: "Hirabaug Chowk, Sadashiv Peth, Pune 411030",
      lat: 18.504222,
      lng: 73.855765
    },
    darshanMinutes: 5,
    peakDarshanMinutes: 12,
    liveCrowdLevel: "low",
    darshanStyle: "outside",
    timings: { open: "07:00 AM", close: "11:00 PM" },
    tags: ["local"],
    isTemple: false,
    verified: true
  }
];

const CURATED_ROUTES = [
  {
    id: "e0620812-59dc-4fed-9c66-e3cea6a0b0dc",
    slug: "dagdusheth-and-manache-paach",
    title: "Dagdusheth & the Manache Paach",
    titleMr: "दगडूशेठ आणि मानाचे पाच गणपती",
    subtitle: "The five Manache Paach in ceremonial order, with Shrimant Dagdusheth Halwai on the way.",
    description: "Pune's quintessential Ganeshotsav pilgrimage. Covers all 5 revered Manache Paach in exact ceremonial precedence from Kasba Peth to Kesariwada, including the grandeur of Shrimant Dagdusheth Halwai Ganpati.",
    stopsCount: 6,
    walkTimeMinutes: 38,
    queueTimeMinutes: 150,
    totalDuration: "about 3 hr 8 min",
    distanceKm: 2.4,
    difficulty: "Moderate",
    bestTime: "Early Morning (6:30 AM - 10:00 AM)",
    tags: ["Iconic", "Manache 5", "Pilgrimage"],
    stopSlugs: [
      "kasba-ganpati",
      "tambdi-jogeshwari",
      "guruji-talim",
      "tulshibaug-ganpati",
      "dagdusheth-halwai-ganpati",
      "kesariwada-ganpati"
    ],
    routeNotes: [
      "Start at Shri Kasba Ganpati (Maanacha 1) near Lal Mahal.",
      "Walk 280m south along Kasba lane to Tambdi Jogeshwari (Maanacha 2).",
      "Turn onto Laxmi Road to visit Guruji Talim (Maanacha 3).",
      "Enter Tulshibaug market lane for Tulshibaug Ganpati (Maanacha 4).",
      "Step onto Shivaji Road for Shrimant Dagdusheth Halwai Ganpati.",
      "Conclude your pilgrimage in the serene courtyard of Kesariwada (Maanacha 5) in Narayan Peth."
    ]
  },
  {
    id: "6a267cb6-2ebf-48de-9ba7-9e327b974208",
    slug: "peth-express-90",
    title: "90-minute peth express",
    titleMr: "९० मिनिटांचा पेठ एक्सप्रेस मार्ग",
    subtitle: "The most ground you can genuinely cover in an hour and a half on foot.",
    description: "Designed for devotees with limited time. A tight, walkable loop covering four iconic and fast-access mandals with minimal queue delays.",
    stopsCount: 4,
    walkTimeMinutes: 26,
    queueTimeMinutes: 50,
    totalDuration: "about 1 hr 16 min",
    distanceKm: 1.6,
    difficulty: "Easy",
    bestTime: "Morning or Late Evening",
    tags: ["Express", "Quick", "Walkable"],
    stopSlugs: [
      "kasba-ganpati",
      "bhau-rangari-ganpati",
      "tambdi-jogeshwari",
      "guruji-talim"
    ],
    routeNotes: [
      "Begin at Shri Kasba Ganpati in Kasba Peth.",
      "Walk 200m southwest to India's pioneer mandal, Bhausaheb Rangari.",
      "Continue straight to Tambdi Jogeshwari.",
      "Finish on Laxmi Road at Guruji Talim Ganpati."
    ]
  },
  {
    id: "65f92f84-b85a-4a74-89a7-fd2e6328df90",
    slug: "historic-peth-stroll",
    title: "Historic peth stroll",
    titleMr: "ऐतिहासिक पेठ दर्शन फेरी",
    subtitle: "The oldest sarvajanik mandals, and the wadas and talims they grew out of.",
    description: "Step through the 1890s freedom movement trail: traditional wrestling talims, wooden wadas, and pioneering sarvajanik mandals that birthed the festival.",
    stopsCount: 5,
    walkTimeMinutes: 38,
    queueTimeMinutes: 70,
    totalDuration: "about 1 hr 48 min",
    distanceKm: 2.1,
    difficulty: "Moderate",
    bestTime: "Morning (7:00 AM - 11:00 AM)",
    tags: ["Heritage", "History", "Wadas & Talims"],
    stopSlugs: [
      "bhau-rangari-ganpati",
      "kasba-ganpati",
      "tambdi-jogeshwari",
      "guruji-talim",
      "kesariwada-ganpati"
    ],
    routeNotes: [
      "Start at Bhausaheb Rangari (1892 revolution birthplace).",
      "Walk up Kasba Peth to the 17th-century Gramdaivat.",
      "Pass the historic Jogeshwari Temple.",
      "Visit Guruji Talim on Laxmi Road.",
      "Conclude at Lokmanya Tilak's residence in Kesariwada."
    ]
  },
  {
    id: "59afa823-65db-4bdc-b223-9493bc9b87cd",
    slug: "mandai-to-the-river",
    title: "Mandai to the river",
    titleMr: "मंडई ते मुठा नदी दर्शन मार्ग",
    subtitle: "South to north across the peths, from the market to the Shaniwar Peth riverside.",
    description: "A sweeping traverse of old Pune: starts in the bustling marketplace of Mandai and Shukrawar Peth, winds across the core peths, and ends along the serene Mutha riverbank.",
    stopsCount: 7,
    walkTimeMinutes: 54,
    queueTimeMinutes: 115,
    totalDuration: "about 2 hr 49 min",
    distanceKm: 3.2,
    difficulty: "Moderate",
    bestTime: "Evening (5:30 PM - 9:00 PM)",
    tags: ["Market to River", "Grand Dekhava", "Evening"],
    stopSlugs: [
      "akhil-mandai-mandal",
      "jilbya-maruti-mandal",
      "tulshibaug-ganpati",
      "dagdusheth-halwai-ganpati",
      "tambdi-jogeshwari",
      "bhau-rangari-ganpati",
      "garud-ganpati-mandal"
    ],
    routeNotes: [
      "Start at Akhil Mandai Mandal beside Phule Mandai.",
      "Walk through Shukrawar Peth via Jilbya Maruti.",
      "Enter Tulshibaug market to see the grand silver idol.",
      "Pay respects at Shrimant Dagdusheth Halwai.",
      "Visit Tambdi Jogeshwari and Bhausaheb Rangari.",
      "End on the quiet riverside breeze at Garud Ganpati near Bhide Bridge."
    ]
  },
  {
    id: "ad815552-d5d8-4da2-8cd0-20a370aafde5",
    slug: "two-peths-on-foot",
    title: "Narayan & Budhwar on foot",
    titleMr: "नारायण आणि बुधवार पेठ पायी दर्शन",
    subtitle: "Two neighbouring peths, six mandals, one unhurried walk.",
    description: "A deep dive into the cultural heartland of Pune. Experience the vibrant street decorations of Budhwar Peth and the intellectual, literary wada streets of Narayan Peth.",
    stopsCount: 6,
    walkTimeMinutes: 44,
    queueTimeMinutes: 195,
    totalDuration: "about 3 hr 59 min",
    distanceKm: 2.6,
    difficulty: "Moderate",
    bestTime: "Late Afternoon to Night",
    tags: ["Cultural", "Dekhava", "Thorough"],
    stopSlugs: [
      "dagdusheth-halwai-ganpati",
      "hutatma-babu-genu-mandal",
      "bhau-rangari-ganpati",
      "kesariwada-ganpati",
      "navjavan-mandal",
      "hatti-ganpati-mandal"
    ],
    routeNotes: [
      "Start at Dagdusheth Halwai and Babu Genu.",
      "Walk past Bhau Rangari Bhavan into Narayan Peth.",
      "Visit Kesariwada museum and mandal.",
      "Stroll past Navjavan Mandal to Hatti Ganpati on Alka Talkies road."
    ]
  },
  {
    id: "5fd60c81-e520-4b1b-8fbe-3fc9d416de4e",
    slug: "mandai-hour",
    title: "One hour from Mandai",
    titleMr: "मंडईपासून एक तासाचा मार्ग",
    subtitle: "Four mandals within a short walk of Mandai, in about an hour.",
    description: "Ultra-compact walk centered around Shukrawar and Budhwar Peths with minimal walking distance between consecutive stops.",
    stopsCount: 4,
    walkTimeMinutes: 16,
    queueTimeMinutes: 65,
    totalDuration: "about 1 hr 21 min",
    distanceKm: 1.1,
    difficulty: "Easy",
    bestTime: "Anytime",
    tags: ["Compact", "Family", "Short Walk"],
    stopSlugs: [
      "akhil-mandai-mandal",
      "tulshibaug-ganpati",
      "guruji-talim",
      "shanipar-mandal"
    ],
    routeNotes: [
      "Start at Akhil Mandai Mandal.",
      "Walk 200m north into Tulshibaug.",
      "Step onto Laxmi Road for Guruji Talim.",
      "Head down Bajirao Road to Shanipar Chowk."
    ]
  }
];

const PETHS_DATA = [
  {
    slug: "kasba-peth",
    name: "Kasba Peth",
    nameMr: "कसबा पेठ",
    description: "Pune's oldest residential quarter ('The Mother Peth'), dating back to the 5th century and Shivaji Maharaj's era. Home to Shri Kasba Ganpati (Gramdaivat), Lal Mahal, and ancient lane shrines.",
    mandalsCount: 2,
    walkability: "High (Pedestrian alleys)"
  },
  {
    slug: "budhwar-peth",
    name: "Budhwar Peth",
    nameMr: "बुधवार पेठ",
    description: "The commercial and ceremonial epicentre of Pune Ganeshotsav. Houses Shrimant Dagdusheth Halwai, Tambdi Jogeshwari, Guruji Talim, Tulshibaug, and Bhausaheb Rangari.",
    mandalsCount: 8,
    walkability: "Moderate to High (Pedestrianized during festival)"
  },
  {
    slug: "shukrawar-peth",
    name: "Shukrawar Peth",
    nameMr: "शुक्रवार पेठ",
    description: "Developed during the Peshwa era around Mahatma Phule Mandai. Famous for Akhil Mandai Mandal, traditional sweet shops, brassware, and talim mandals.",
    mandalsCount: 4,
    walkability: "High"
  },
  {
    slug: "sadashiv-peth",
    name: "Sadashiv Peth",
    nameMr: "सदाशिव पेठ",
    description: "Named after Peshwa general Sadashivrao Bhau. Known for historic academic institutions, grand evening lighting dekhavas, Shanipar, and Sarasbaug Siddhivinayak Temple.",
    mandalsCount: 6,
    walkability: "High (Broad footpaths & shady trees)"
  },
  {
    slug: "narayan-peth",
    name: "Narayan Peth",
    nameMr: "नारायण पेठ",
    description: "Named after Peshwa Narayanrao. Renowned for Kesari Wada, traditional printing presses, handloom silk shops, and tranquil courtyards.",
    mandalsCount: 4,
    walkability: "High"
  },
  {
    slug: "ganesh-peth",
    name: "Ganesh Peth",
    nameMr: "गणेश पेठ",
    description: "Named in honor of Lord Ganesha by Sawai Madhavrao Peshwa. Houses the extraordinary 18th-century stone Trishund Ganpati Mandir.",
    mandalsCount: 2,
    walkability: "Moderate"
  },
  {
    slug: "shaniwar-peth",
    name: "Shaniwar Peth",
    nameMr: "शनिवार पेठ",
    description: "The Peshwa capital seat anchored by Shaniwar Wada and stretching along the Mutha riverfront.",
    mandalsCount: 3,
    walkability: "High"
  }
];

const PARKING_DATA = {
  totalSpots: 23,
  closedRoadsCount: 13,
  source: "Pune City Traffic Police Department (Official Festival Notification)",
  effectiveTime: "Daily from 17:00 (5:00 PM) until midnight across festival days",
  parkingLots: [
    {
      id: "p1",
      name: "Sarasbaug Ground Parking",
      nameMr: "सारसबाग मैदान वाहनतळ",
      lat: 18.5021,
      lng: 73.8542,
      type: "2-Wheeler & 4-Wheeler",
      capacity: "1,500+ vehicles",
      distanceToPeths: "500m to Sadashiv Peth",
      landmark: "Opposite Sanas Ground / Peshwe Park",
      fee: "Pay & Park / Free designated zone"
    },
    {
      id: "p2",
      name: "SP College Ground Parking",
      nameMr: "एस. पी. कॉलेज मैदान वाहनतळ",
      lat: 18.5074,
      lng: 73.8488,
      type: "2-Wheeler & 4-Wheeler",
      capacity: "2,000+ vehicles",
      distanceToPeths: "600m to Tilak Road / Sadashiv Peth",
      landmark: "Tilak Road Entry Gate",
      fee: "Designated Traffic Police Festival Lot"
    },
    {
      id: "p3",
      name: "Shaniwar Wada Riverbed (Nadi Patra)",
      nameMr: "शनिवार वाडा नदीपात्र वाहनतळ",
      lat: 18.5205,
      lng: 73.8532,
      type: "2-Wheeler & 4-Wheeler",
      capacity: "3,000+ vehicles",
      distanceToPeths: "Direct pedestrian entry to Kasba & Shaniwar Peth",
      landmark: "Bhide Bridge to Shivaji Bridge riverside road",
      fee: "Free designated riverbed zone"
    },
    {
      id: "p4",
      name: "Nehru Stadium / Sanas Ground",
      nameMr: "नेहरू स्टेडियम वाहनतळ",
      lat: 18.5015,
      lng: 73.8569,
      type: "2-Wheeler & 4-Wheeler",
      capacity: "1,200 vehicles",
      distanceToPeths: "800m to Shukrawar Peth / Mandai",
      landmark: "Near Swargate junction",
      fee: "Municipal parking"
    },
    {
      id: "p5",
      name: "Mahatma Phule Mandai Multi-Level Parking",
      nameMr: "महात्मा फुले मंडई बहुमजली वाहनतळ",
      lat: 18.5115,
      lng: 73.8568,
      type: "2-Wheeler Only",
      capacity: "800 2-wheelers",
      distanceToPeths: "Right beside Akhil Mandai & Tulshibaug",
      landmark: "Mandai Metro Station exit",
      fee: "Pay & Park"
    },
    {
      id: "p6",
      name: "Modern College Ground, Shivajinagar",
      nameMr: "मॉडर्न कॉलेज मैदान वाहनतळ",
      lat: 18.5268,
      lng: 73.8459,
      type: "2-Wheeler & 4-Wheeler",
      capacity: "1,000 vehicles",
      distanceToPeths: "1 km via J.M. Road to Dengle Bridge",
      landmark: "Off J.M. Road",
      fee: "Designated festival parking"
    },
    {
      id: "p7",
      name: "New English School, Ramanbaug Ground",
      nameMr: "रमणबाग मैदान वाहनतळ",
      lat: 18.5218,
      lng: 73.8519,
      type: "2-Wheeler Only",
      capacity: "600 2-wheelers",
      distanceToPeths: "Kasba & Shaniwar Peth core",
      landmark: "Near Omkareshwar temple",
      fee: "Traffic police parking"
    },
    {
      id: "p8",
      name: "Haribhau Sane Ground, Budhwar Peth",
      nameMr: "हरिभाऊ साने मैदान वाहनतळ",
      lat: 18.5179,
      lng: 73.8585,
      type: "2-Wheeler Only",
      capacity: "400 2-wheelers",
      distanceToPeths: "Budhwar & Kasba Peth border",
      landmark: "Near Appa Balwant Chowk",
      fee: "Free"
    },
    {
      id: "p9",
      name: "Gogate Prashala Ground, Shanipar",
      nameMr: "गोगटे प्रशाला मैदान वाहनतळ",
      lat: 18.5122,
      lng: 73.8518,
      type: "2-Wheeler Only",
      capacity: "500 2-wheelers",
      distanceToPeths: "Immediate to Shanipar & Nimbalkar Talim",
      landmark: "Off Kumthekar Road",
      fee: "Traffic police parking"
    },
    {
      id: "p10",
      name: "Bhave High School Ground",
      nameMr: "भावे हायस्कूल मैदान वाहनतळ",
      lat: 18.5098,
      lng: 73.8492,
      type: "2-Wheeler Only",
      capacity: "450 2-wheelers",
      distanceToPeths: "Perugate Sadashiv Peth",
      landmark: "Sadashiv Peth Perugate",
      fee: "Designated lot"
    },
    {
      id: "p11",
      name: "Dengle Bridge Riverside Open Space",
      nameMr: "डेंगळे पूल नदीपात्र वाहनतळ",
      lat: 18.5235,
      lng: 73.8572,
      type: "4-Wheeler & 2-Wheeler",
      capacity: "1,500 vehicles",
      distanceToPeths: "Direct pedestrian entry to Kasba Peth north",
      landmark: "Near Pune Zilla Parishad",
      fee: "Free riverside zone"
    },
    {
      id: "p12",
      name: "Bhide Bridge Riverside Strip",
      nameMr: "भिडे पूल नदीपात्र वाहनतळ",
      lat: 18.5142,
      lng: 73.8449,
      type: "2-Wheeler & 4-Wheeler",
      capacity: "1,000 vehicles",
      distanceToPeths: "Direct entry to Narayan & Shaniwar Peth",
      landmark: "Deccan Gymkhana side connecting bridge",
      fee: "Free riverside zone"
    }
  ],
  closedRoads: [
    {
      id: "r1",
      name: "Laxmi Road",
      nameMr: "लक्ष्मी रस्ता",
      stretch: "From Alka Talkies Chowk to Sonya Maruti Chowk",
      timing: "Closed for all vehicular traffic daily after 17:00 (Pedestrian only)",
      barricade: "Alka Talkies, Umbrya Ganpati Chowk, Sonya Maruti Chowk",
      detour: "Use Kelkar Road or Shastri Road"
    },
    {
      id: "r2",
      name: "Shivaji Road",
      nameMr: "शिवाजी रस्ता",
      stretch: "From Kakasaheb Gadgil Statue (Shaniwarwada) to Jedhe Chowk (Swargate)",
      timing: "Closed for all vehicles after 17:00",
      barricade: "Shaniwarwada, Appa Balwant Chowk, Dagdusheth Chowk, Mandai",
      detour: "Use J.M. Road, Jangli Maharaj Road or Nehru Road"
    },
    {
      id: "r3",
      name: "Bajirao Road",
      nameMr: "बाजीराव रस्ता",
      stretch: "From Puram Chowk to Appa Balwant Chowk",
      timing: "One-way / pedestrian prioritised after 17:00",
      barricade: "Puram Chowk, Shanipar Chowk, ABC Chowk",
      detour: "Use Tilak Road or Lal Bahadur Shastri Road"
    },
    {
      id: "r4",
      name: "Tilak Road",
      nameMr: "टिळक रस्ता",
      stretch: "From Alka Talkies Chowk to Swargate (Jedhe Chowk)",
      timing: "Heavy vehicular restrictions after 17:00; diversions at SP College",
      barricade: "Hirabaug, SP College, Alka Chowk",
      detour: "Use Shastri Road or Sinhagad Road corridor"
    },
    {
      id: "r5",
      name: "Kumthekar Road",
      nameMr: "कुमठेकर रस्ता",
      stretch: "From Alka Talkies Chowk to Shanipar Chowk",
      timing: "Closed for all 4-wheelers & 2-wheelers after 17:00",
      barricade: "Alka Chowk, Chitale Bandhu, Shanipar",
      detour: "Pedestrian only"
    },
    {
      id: "r6",
      name: "Kelkar Road",
      nameMr: "केळकर रस्ता",
      stretch: "From Z-Bridge / Alka Chowk to Appa Balwant Chowk",
      timing: "Strictly one-way entry or closed as crowd density rises",
      barricade: "Bhide Bridge corner, Narayan Peth Police Chowki, ABC",
      detour: "Use riverside road"
    },
    {
      id: "r7",
      name: "Appa Balwant Chowk to Budhwar Chowk Lane",
      nameMr: "अप्पा बळवंत चौक ते बुधवार चौक रस्ता",
      stretch: "Core heritage crossing connecting Kasba, ABC and Dagdusheth",
      timing: "Closed to all motor vehicles 24 hours during key festival days",
      barricade: "ABC junction, Jogeshwari temple lane",
      detour: "Strictly pedestrian access"
    }
  ]
};

const GUIDES_DATA = [
  {
    slug: "complete-darshan-guide",
    title: "The Essential Pune Ganpati Darshan Guide",
    titleMr: "पुणे गणेशोत्सव संपूर्ण दर्शन मार्गदर्शिका",
    readTime: "6 min read",
    summary: "Everything you need to navigate Pune's ten-day festival smoothly: timings, best hours, walking etiquette, prasad spots, and senior citizen access.",
    sections: [
      {
        heading: "1. The Ideal Time to Visit",
        body: "Pune's festival has two completely different faces:\n\n• **Morning (6:30 AM – 11:00 AM)**: The best window for devout, serene darshan. Lines are 70% shorter, temperatures are pleasant, and you can easily complete the Manache Paach in under 2.5 hours.\n• **Night (7:30 PM – 1:00 AM)**: The time to witness lighting decorations, dynamic moving stage sets (dekhava), dhol-tasha pathak beats, and lively street food culture. Expect large crowds on Laxmi Road and Bajirao Road."
      },
      {
        heading: "2. The Precedence of Manache Paach",
        body: "Pune has over 2,500 sarvajanik mandals, but five hold supreme ceremonial precedence since Lokmanya Tilak's era:\n\n1. **Shri Kasba Ganpati** (The Gramdaivat)\n2. **Tambdi Jogeshwari Ganpati**\n3. **Guruji Talim Ganpati**\n4. **Tulshibaug Ganpati**\n5. **Kesariwada Ganpati**\n\nTraditional devotees visit them in this exact numbered sequence."
      },
      {
        heading: "3. Essential Tips for Devotees",
        body: "• **Footwear**: Wear comfortable, easily slip-off sandals or walking shoes with socks. You will walk 3 to 6 km.\n• **Water & Hydration**: Free drinking water stalls (panpoi) are set up by local trusts every 150 meters.\n• **Lost & Found / Safety**: Pune Police booths and volunteer help desks are stationed at every major chowk.\n• **Senior Citizens & Toddlers**: Visit Sarasbaug or Kasba Ganpati before 8 AM for barrier-free, peaceful darshan."
      },
      {
        heading: "4. Iconic Food Stops in the Peths",
        body: "No darshan walk is complete without experiencing Pune's historic culinary landmarks:\n\n• **Chitale Bandhu Mithaiwale** (Bajirao Road & Deccan): Fresh Bakarwadi, Mango Barfi, and Peda.\n• **Sujata Mastani** (Sadashiv Peth): Authentic Pune Mastani thick ice-cream milkshakes.\n• **Bedekar Tea & Misal** (Narayan Peth): Iconic Puneri Misal and spiced chai.\n• **Kata Kirr** (Karve Road / Sadashiv Peth): Kolhapuri spiced misal."
      }
    ]
  },
  {
    slug: "manache-paach-history",
    title: "Manache Paach: The Story Behind Pune's Five Honoured Mandals",
    titleMr: "मानाचे पाच: इतिहास आणि महत्त्व",
    readTime: "5 min read",
    summary: "How Lokmanya Tilak and Pune's elders established the ceremonial precedence of the five Manache Ganpatis during the 1890s Indian independence movement.",
    sections: [
      {
        heading: "Origins of the Public Festival (1893)",
        body: "In 1893, Lokmanya Bal Gangadhar Tilak transformed the private domestic worship of Ganesha into a grand public festival (Sarvajanik Ganeshotsav) to unite all strata of society against British colonial suppression. To prevent disputes during the immersion procession, Pune's citizens mutually established the Maan (ceremonial honor) of the five foundational mandals."
      },
      {
        heading: "1. Maanacha Pahila: Shri Kasba Ganpati",
        body: "Kasba Ganpati is the Gramdaivat (presiding town deity) of Pune. When Jijabai and young Shivaji Maharaj arrived in Pune in the 1630s, an ancient self-manifested (Swayambhu) idol was discovered in Kasba Peth. Shivaji Maharaj consecrated the sanctum, and centuries later, it was unanimously given first honor."
      },
      {
        heading: "2. Maanacha Dusra: Tambdi Jogeshwari",
        body: "Tambdi Jogeshwari is the female guardian deity (Gramdevata) of Pune. Consecrated beside her historic temple in 1893, this mandal preserves traditional brass weaponry and an unbroken clay-idol heritage."
      },
      {
        heading: "3. Maanacha Tisra: Guruji Talim",
        body: "Established in 1887 before public festivals were formalized in the press, Guruji Talim was founded jointly by Hindu and Muslim wrestlers of Ganpatrao Ranwade and Sheikh Kasam talims, standing as a timeless beacon of communal brotherhood."
      },
      {
        heading: "4. Maanacha Choutha: Tulshibaug Ganpati",
        body: "Placed in the heart of Pune's historic brassware and vegetable trade quarter in 1901. Its magnificent 13-foot statue adorned in hand-beaten silver is one of the most photographed sights in Maharashtra."
      },
      {
        heading: "5. Maanacha Pachva: Kesariwada Ganpati",
        body: "Held in the courtyard of Kesari Wada, where Lokmanya Tilak edited the nationalist newspapers Kesari and Mahratta. Tilak hosted patriotic discussions, kirtans, and swadeshi rallies here from 1894 onward."
      }
    ]
  }
];

// Export to window object for browser access
window.FESTIVAL_CONFIG = FESTIVAL_CONFIG;
window.MANDALS_DATA = MANDALS_DATA;
window.CURATED_ROUTES = CURATED_ROUTES;
window.PETHS_DATA = PETHS_DATA;
window.PARKING_DATA = PARKING_DATA;
window.GUIDES_DATA = GUIDES_DATA;
