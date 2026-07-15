/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimelineEvent, FamilyMember, Masterpiece, WomenInLife, WritingItem, QuizQuestion } from "./types";

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1861",
    title: "Birth of a Polymath",
    description: "José Protasio Rizal Mercado y Alonso Realonda was born in Calamba, Laguna on June 19, 1861. He was baptized three days later by Rev. Rufino Collantes.",
    location: "Calamba, Laguna, Philippines"
  },
  {
    year: "1869",
    title: "The First Literary Composition",
    description: "At only eight years old, José reportedly composed his first nationalistic poem in Tagalog, 'Sa Aking Mga Kabata' (To My Fellow Youth), encouraging love for one's native language.",
    location: "Calamba, Laguna"
  },
  {
    year: "1872",
    title: "Martyrdom of Gomburza",
    description: "The execution of Filipino priests Gomez, Burgos, and Zamora on false charges of mutiny deeply affected the young Rizal. His brother Paciano was a disciple of Father Burgos, prompting the family to use the surname 'Rizal' to protect José.",
    location: "Bagumbayan, Manila"
  },
  {
    year: "1877",
    title: "Ateneon Graduation",
    description: "José graduated with highest honors (Sobra-saliente) from Ateneo Municipal de Manila, receiving the degree Bachelor of Arts.",
    location: "Intramuros, Manila"
  },
  {
    year: "1882",
    title: "First Journey to Europe",
    description: "Rizal left Manila secretly aboard the SS Salvadora to complete his medical and philosophical education in Spain, away from the watchful eyes of colonial friars.",
    location: "Madrid, Spain"
  },
  {
    year: "1887",
    title: "Publication of Noli Me Tangere",
    description: "Rizal finished and published his first socio-political novel, 'Noli Me Tangere', in Berlin, printed with financial assistance from his close friend Maximo Viola.",
    location: "Berlin, Germany"
  },
  {
    year: "1891",
    title: "Publication of El Filibusterismo",
    description: "The darker sequel, 'El Filibusterismo', was published in Ghent, Belgium, funded in part by Valentin Ventura. Rizal dedicated it to the memory of Gomburza.",
    location: "Ghent, Belgium"
  },
  {
    year: "1892",
    title: "La Liga Filipina & Exile",
    description: "Rizal returned to the Philippines and founded 'La Liga Filipina', a progressive civic movement. Days later, he was arrested by Spanish authorities and exiled to the remote town of Dapitan.",
    location: "Manila & Dapitan, Zamboanga"
  },
  {
    year: "1896",
    title: "Martyrdom at Bagumbayan",
    description: "Accused of inciting the Philippine Revolution through his writings, Rizal was tried by a military court and executed by firing squad at dawn on December 30, 1896.",
    location: "Bagumbayan (now Rizal Park), Manila"
  }
];

export const familyMembers: FamilyMember[] = [
  {
    name: "Francisco Mercado",
    relation: "Father",
    lifeDates: "1818 - 1898",
    description: "A silent, industrious tenant-farmer from Biñan, Laguna. He was a man of high education who valued independence and labor. Rizal described him as a 'model of fathers' who gave his children standard European education."
  },
  {
    name: "Teodora Alonso Realonda",
    relation: "Mother",
    lifeDates: "1826 - 1911",
    description: "A highly educated, refined, and strong-willed woman. She was José's first teacher, teaching him the alphabet, prayers, and reading. She famously read him the fable of the young moth and warned him of the dangers of chasing attractive flames."
  },
  {
    name: "Paciano Mercado",
    relation: "Elder Brother",
    lifeDates: "1851 - 1930",
    description: "The guardian, mentor, and protector of José Rizal. He was a general in the Philippine Revolutionary Army. He funded José's secret journey to Europe and acted as a second father, conveying intellectual and nationalistic aspirations."
  },
  {
    name: "Saturnina Rizal",
    relation: "Eldest Sister",
    lifeDates: "1850 - 1913",
    description: "Nicknamed Neneng, she was the eldest of the Rizal siblings. She married Manuel T. Hidalgo of Tanauan, Batangas, and kept extensive affectionate correspondences with her brother during his travels abroad."
  },
  {
    name: "Narcisa Rizal",
    relation: "Sister",
    lifeDates: "1852 - 1939",
    description: "Nicknamed Sisa, she helped finance José's studies in Europe by selling her jewelry. She was famous for her incredible memory and could recite all of Rizal's poems."
  },
  {
    name: "Olympia Rizal",
    relation: "Sister",
    lifeDates: "1855 - 1887",
    description: "Nicknamed Ypia, she married Silvestre Ubaldo, a telegraph operator. She was the sister Rizal most frequently teased in his early letters for her comedic household observations."
  },
  {
    name: "Lucia Rizal",
    relation: "Sister",
    lifeDates: "1857 - 1919",
    description: "She married Mariano Herbosa, who died of cholera and was denied a Christian burial by Spanish friars due to his relation to Rizal. This incident intensified Rizal's anti-clerical campaigns."
  },
  {
    name: "Maria Rizal",
    relation: "Sister",
    lifeDates: "1859 - 1945",
    description: "Nicknamed Biang, she was the sibling with whom Rizal discussed his romantic interests and plans to marry Josephine Bracken when he was in exile."
  },
  {
    name: "Concepcion Rizal",
    relation: "Younger Sister",
    lifeDates: "1862 - 1865",
    description: "Nicknamed Concha, she died of sickness at the age of three. Her passing was Rizal's very first sorrow, and he shed tears for her, recalling her loving childhood play."
  },
  {
    name: "Josefa Rizal",
    relation: "Sister",
    lifeDates: "1865 - 1945",
    description: "Nicknamed Panggoy, she was active in the Katipunan, serving as the president of its women's chapter. She protected confidential revolution documents."
  },
  {
    name: "Trinidad Rizal",
    relation: "Sister",
    lifeDates: "1868 - 1951",
    description: "Nicknamed Trining, she was the custodian of Rizal's final poem, 'Mi Último Adiós', which José hid inside an alcohol cooking burner and handed to her on the eve of his execution."
  },
  {
    name: "Soledad Rizal",
    relation: "Youngest Sister",
    lifeDates: "1870 - 1929",
    description: "Nicknamed Choleng, she was the youngest sibling and married Pantaleon Quintero. She was known to be the most active and vivacious of the sisters."
  }
];

export const masterpieces: Masterpiece[] = [
  {
    title: "The Triumph of Science over Death",
    category: "Art",
    year: "1890",
    description: "A famous clay sculpture depicting a young, naked woman representing humanity standing upon a skull, holding high a burning torch. This symbolizes how scientific progress will conquer ignorance and death.",
    mediaPlaceholder: "Artistic sketch wireframe showing a classical allegorical female figure standing victoriously atop a skull holding a glowing flame, rendered in clean architectural crosshatch."
  },
  {
    title: "Alin Mang Lahi (Any Race)",
    category: "Music",
    year: "1886",
    description: "A patriotic song in Tagalog written and composed by Rizal during his stay in Europe. It expresses a passionate yearning for liberty, national sovereignty, and courage in the face of colonial chains.",
    mediaPlaceholder: "Sheet music template showing 19th-century musical notations, handdrawn lyrical scrolls, and elegant woodwind illustrations with cross-hatching borders."
  },
  {
    title: "Draco rizali, Apogonia rizali & Rhacophorus rizali",
    category: "Science",
    year: "1893 - 1895",
    description: "During his exile in Dapitan, Rizal collected numerous specimens of local fauna. He sent them to the Dresden Museum in Germany. In honor of his contributions, European zoologists named three new species after him: a flying lizard, a beetle, and a frog.",
    mediaPlaceholder: "Scientific botanical study journal with realistic pencil illustrations of a flying lizard, a leaf-eating beetle, and a tree frog, marked with clean cursive Latin labels."
  },
  {
    title: "The Dapitan Waterworks System",
    category: "Education",
    year: "1894",
    description: "As a licensed surveyor (Agrimensor), Rizal mapped and engineered a clean gravity-fed mountain spring water system for the townspeople of Dapitan. He built it without colonial funding, using hollow bamboo, clay pipes, and rocks.",
    mediaPlaceholder: "An engineering blueprint blueprint showing elevations, bamboo and clay pipelines, mountain springs, and custom gravity filter mechanisms in old sepia ink sketch."
  }
];

export const womenList: WomenInLife[] = [
  {
    name: "Segundina Katigbak",
    nationality: "Filipino",
    period: "1877",
    description: "Rizal's first love. She was a 14-year-old schoolmate of his sister Olimpia at La Concordia College. Rizal described her as having 'eloquent, attractive eyes.' Their love was cut short as she was already engaged to be married to a townmate.",
    legacy: "The Muse of First Sorrow - Inspiring Rizal's nostalgic reflections on first love and youth's ephemeral beauty."
  },
  {
    name: "Leonor Valenzuela",
    nationality: "Filipino",
    period: "1878 - 1880",
    description: "A tall girl from Pagsanjan, Laguna. Rizal courted her by sending love letters written in invisible ink (salty water) that could only be read when heated over a candle flame. He nicknamed her 'Orang.'",
    legacy: "The Keeper of Invisible Love - Showcasing Rizal's early playful scientific approach to courtship."
  },
  {
    name: "Leonor Rivera",
    nationality: "Filipino",
    period: "1880 - 1891",
    description: "Rizal's 'true love' and cousin. For 11 years, they kept a long-distance relationship, which was heavily discouraged by her mother. Their letters were intercepted. Believing Rizal had abandoned her, she reluctantly married Charles Kipping. Rizal wept bitterly upon hearing the news.",
    legacy: "The Real-Life Maria Clara - She became the literary blueprint for the pure, tragic heroine in Noli Me Tangere."
  },
  {
    name: "Consuelo Ortiga y Perez",
    nationality: "Spanish",
    period: "1882 - 1883",
    description: "The refined daughter of the civil governor of Manila in Madrid. Rizal wrote a beautiful poem for her, 'A la Señorita C.O. y P.', but stepped back because his friend Eduardo de Lete was deeply in love with her.",
    legacy: "The Madrid Confidante - Showing Rizal's chivalry, putting friendship above romance in European high society."
  },
  {
    name: "Seiko Usui (O-Sei-San)",
    nationality: "Japanese",
    period: "1888",
    description: "A samurai's daughter who served as Rizal's guide, translator, and tutor during his month-long stay in Tokyo. She taught him Japanese art, theater, and language. Rizal was deeply tempted to settle in Japan with her.",
    legacy: "The Japanese Cherry Blossom - Representing the peaceful, quiet life Rizal could have led had he chosen comfort over revolution."
  },
  {
    name: "Gertrude Beckett",
    nationality: "English",
    period: "1888 - 1889",
    description: "The eldest daughter of Rizal's landlord in London. She was deeply in love with him and assisted him in creating clay sculptures. Rizal eventually left London to escape her affection and focus on his national writings.",
    legacy: "The London Sculptor - Assisted him in crafting his famous clay sculptures and bust studies."
  },
  {
    name: "Nellie Boustead",
    nationality: "French-Filipino",
    period: "1890",
    description: "An athletic, intelligent Protestant woman in Biarritz, France. Antonio Luna also loved her, leading to a near-duel between Rizal and Luna. Rizal proposed marriage, but her mother demanded he convert to Protestantism, which Rizal refused.",
    legacy: "The Intellectual Equal - A skilled fencer and writer who challenged Rizal's religious and academic ideals."
  },
  {
    name: "Josephine Bracken",
    nationality: "Irish",
    period: "1895 - 1896",
    description: "An 18-year-old Irish girl who came to Dapitan with her blind adoptive father George Taufer for medical treatment. She and Rizal fell in love and, when denied a Catholic marriage, lived together as husband and wife. She bore a premature son, Francisco, who died shortly after birth.",
    legacy: "The Dulce Extranjera (Sweet Stranger) - immortalized by Rizal in his final poem as his beloved, faithful companion during his darkest hours."
  }
];

export const writings: WritingItem[] = [
  {
    title: "Noli Me Tangere",
    type: "Novel",
    yearPublished: "1887",
    location: "Berlin, Germany",
    synopsis: "The story follows Juan Crisostomo Ibarra, a young Filipino who returns from Europe to reform his homeland, only to be crushed by the corrupt and abusive colonial friars, particularly Father Damaso. It exposes the cancerous decay of Spanish ecclesiastical rule.",
    significance: "Stirred the national consciousness by depicting real-world oppression. It was banned by the Spanish government, making it a underground revolutionary catalyst."
  },
  {
    title: "El Filibusterismo",
    type: "Novel",
    yearPublished: "1891",
    location: "Ghent, Belgium",
    synopsis: "The darker, more revolutionary sequel. Ibarra returns in disguise as Simoun, a wealthy, cynical jeweler plotting an armed rebellion to overthrow the Spanish regime. The novel questions whether violent revolution can truly cleanse a corrupt nation.",
    significance: "Dedicated to the Gomburza martyrs, it directly influenced Andres Bonifacio and the Katipunan to launch the armed Philippine Revolution in 1896."
  },
  {
    title: "Mi Último Adiós (My Last Farewell)",
    type: "Poem",
    yearPublished: "1896",
    location: "Fort Santiago, Manila",
    synopsis: "A 14-stanza masterpiece written in flawless Spanish on the eve of his execution. It is a passionate love letter to his motherland, expressing peace with death and an absolute belief that his blood will rise to water the seeds of freedom.",
    significance: "Smuggled out in an oil burner, it was translated into dozens of languages. It was recited in the US Congress to advocate for Philippine autonomy."
  },
  {
    title: "A La Juventud Filipina (To the Filipino Youth)",
    type: "Poem",
    yearPublished: "1879",
    location: "Manila, Philippines",
    synopsis: "Written when Rizal was 18 years old for a literary competition. It urges the Filipino youth to rise from apathy, cultivate their talents, and break their chains. He famously calls the youth 'The fair hope of my Fatherland' (La bella esperanza de la Patria mía).",
    significance: "First public declaration by a native Filipino referring to the Philippines, rather than Spain, as the 'Fatherland'."
  },
  {
    title: "The Indolence of the Filipinos",
    type: "Essay",
    yearPublished: "1890",
    location: "Madrid, Spain",
    synopsis: "An in-depth socio-historical analysis explaining that the alleged laziness of Filipinos under Spanish rule was not inherent, but a direct consequence of colonial abuse, forced labor, high taxes, and a lack of national incentive.",
    significance: "A pioneering piece of sociological work defending the dignity and capability of the native population."
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the exact birth date of Dr. José Rizal?",
    options: [
      "June 19, 1861",
      "December 30, 1896",
      "June 12, 1898",
      "November 30, 1863"
    ],
    correctAnswerIndex: 0,
    explanation: "José Rizal was born on June 19, 1861, in the town of Calamba, Laguna.",
    category: "Childhood"
  },
  {
    id: 2,
    question: "Which of Rizal's family members act as his guardian, funder, and military general in the revolution?",
    options: [
      "Francisco Mercado",
      "Paciano Rizal",
      "Manuel Hidalgo",
      "Andres Bonifacio"
    ],
    correctAnswerIndex: 1,
    explanation: "Paciano Rizal, José's elder brother, acted as his main mentor, funded his secret travels to Europe, and later became a general in the revolutionary army.",
    category: "Family History"
  },
  {
    id: 3,
    question: "What does the Spanish surname 'Rizal' literally mean, which was adopted to protect the family?",
    options: [
      "From a green pasture or wheat field",
      "A mountain explorer",
      "A writer or scribe",
      "A revolutionary fighter"
    ],
    correctAnswerIndex: 0,
    explanation: "The surname Rizal was derived from the Spanish word 'ricial', which means 'green field' or 'pasture suitable for harvesting'.",
    category: "Family History"
  },
  {
    id: 4,
    question: "Where did Rizal write and publish his first revolutionary novel, 'Noli Me Tangere'?",
    options: [
      "Madrid, Spain",
      "Berlin, Germany",
      "Ghent, Belgium",
      "Paris, France"
    ],
    correctAnswerIndex: 1,
    explanation: "Rizal completed and published 'Noli Me Tangere' in Berlin, Germany, in 1887, with financial assistance from Maximo Viola.",
    category: "Trips Abroad"
  },
  {
    id: 5,
    question: "Who was Rizal's 'true love' and cousin, who inspired the pure character of Maria Clara in Noli Me Tangere?",
    options: [
      "Josephine Bracken",
      "Leonor Rivera",
      "Segundina Katigbak",
      "Nellie Boustead"
    ],
    correctAnswerIndex: 1,
    explanation: "Leonor Rivera was Rizal's sweetheart for 11 years and became the direct physical and literary inspiration for Maria Clara.",
    category: "Women in Life"
  },
  {
    id: 6,
    question: "Which species did European zoologists name after José Rizal during his active scientific exile in Dapitan?",
    options: [
      "Draco rizali (a flying lizard)",
      "Apogonia rizali (a leaf beetle)",
      "Rhacophorus rizali (a tree frog)",
      "All of the above"
    ],
    correctAnswerIndex: 3,
    explanation: "As a polymath, Rizal collected fauna specimens in Dapitan and sent them to Europe. Scholars honored him by naming a flying lizard, a beetle, and a tree frog after him.",
    category: "Other Side of Rizal"
  },
  {
    id: 7,
    question: "Which law mandates all public and private schools, colleges, and universities in the Philippines to teach the life and works of Rizal?",
    options: [
      "Republic Act 1425 (The Rizal Law)",
      "Republic Act 9163",
      "Commonwealth Act No. 1",
      "Presidential Decree 1096"
    ],
    correctAnswerIndex: 0,
    explanation: "Republic Act 1425, widely known as the Rizal Law, was sponsored by Senator Claro M. Recto and enacted on June 12, 1956.",
    category: "19th Century & Rizal Law"
  },
  {
    id: 8,
    question: "On the eve of his execution, José Rizal hid his final masterpiece 'Mi Último Adiós' inside which item?",
    options: [
      "An alcohol cooking burner",
      "His hollow leather boots",
      "A hollow bamboo stick",
      "A bound Bible manuscript"
    ],
    correctAnswerIndex: 0,
    explanation: "Rizal concealed his final poem inside an alcohol cooking burner (cocinilla) and whispered in English to his sister Trinidad, 'There is something inside.'",
    category: "Writings & Legacy"
  },
  {
    id: 9,
    question: "Which literary masterpiece was dedicated by Rizal to the memory of Gomez, Burgos, and Zamora (Gomburza)?",
    options: [
      "Noli Me Tangere",
      "El Filibusterismo",
      "To the Filipino Youth",
      "The Indolence of the Filipinos"
    ],
    correctAnswerIndex: 1,
    explanation: "'El Filibusterismo' was dedicated to the three martyr priests (Gomburza) who were unjustly executed by Spanish authorities in 1872.",
    category: "Writings & Legacy"
  },
  {
    id: 10,
    question: "What was the name of the civic organization Rizal founded in Manila in 1892 that led to his immediate exile?",
    options: [
      "La Liga Filipina",
      "Katipunan",
      "El Progreso",
      "Asociacion Hispano-Filipina"
    ],
    correctAnswerIndex: 0,
    explanation: "Rizal established 'La Liga Filipina' in Tondo, Manila, on July 3, 1892. It sought peaceful civic union and educational reforms.",
    category: "19th Century & Rizal Law"
  },
  {
    id: 11,
    question: "Rizal graduated with highest honors (Sobra-saliente) with what degree from the Ateneo Municipal de Manila?",
    options: [
      "Licentiate in Medicine",
      "Bachelor of Arts",
      "Doctor of Ophthalmology",
      "Doctor of Laws"
    ],
    correctAnswerIndex: 1,
    explanation: "Rizal obtained his Bachelor of Arts degree with highest possible honors from Ateneo Municipal de Manila in 1877.",
    category: "Education"
  },
  {
    id: 12,
    question: "Which Irish girl became Rizal's common-law wife during his exile in Dapitan and was addressed as 'Dulce Extranjera'?",
    options: [
      "Josephine Bracken",
      "Gertrude Beckett",
      "Seiko Usui",
      "Nellie Boustead"
    ],
    correctAnswerIndex: 0,
    explanation: "Josephine Bracken was the Irish companion of Rizal in Dapitan whom he affectionately termed his 'sweet stranger' in his final poem.",
    category: "Women in Life"
  },
  {
    id: 13,
    question: "Rizal built an impressive gravity-fed water system using what materials in Dapitan?",
    options: [
      "Cast iron and lead pipes from Manila",
      "Hollowed bamboo, clay pipes, and mountain stones",
      "Concrete canals built by Spanish engineers",
      "Imported copper conduits from Germany"
    ],
    correctAnswerIndex: 1,
    explanation: "Rizal utilized local materials: hollowed bamboo rods, clay pipes, and mountain river stones to engineer a fully functional gravity-driven water pipeline.",
    category: "Other Side of Rizal"
  },
  {
    id: 14,
    question: "In what language did Rizal compose his poems, novels, and scholarly letters that circulated throughout Europe?",
    options: [
      "Tagalog",
      "Spanish",
      "Latin",
      "German"
    ],
    correctAnswerIndex: 1,
    explanation: "While Rizal knew 22 languages, most of his major works (Noli, Fili, essays, and letters) were composed in high literary Spanish to address Spanish rulers and European scholars directly.",
    category: "Writings & Legacy"
  },
  {
    id: 15,
    question: "Which legendary story did Teodora Alonso read to the young José Rizal, warning him of intellectual rebellion?",
    options: [
      "The Story of the Young Moth",
      "The Tortoise and the Monkey",
      "The Legend of Mount Makiling",
      "The Story of Maria Clara"
    ],
    correctAnswerIndex: 0,
    explanation: "His mother read him the fable of the young moth who flew too close to the attractive flame and burned its wings, advising him against pursuing dangerous fires of intellectual curiosity.",
    category: "Childhood"
  }
];
