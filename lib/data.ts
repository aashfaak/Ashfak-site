// TEMPORARY MOCK DATA
// Replace these arrays with Firestore reads once Firebase is wired up
// (e.g. collections: projects, ideas, thinking, travels, plans).
// Shapes match lib/types.ts so the swap should be close to drop-in.

import { Project, Idea, ThinkingPost, Trip, Goal } from "./types";

export const projects: Project[] = [
  {
    slug: "card-matching-memory-game",
    title: "Card Matching Memory Game",
    short: "A browser-based memory game where players flip cards and find matching pairs.",
    category: "Game",
    imageUrl: "/matching_memory_game.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "completed",
    featured: false,
    problem: "A quick casual game should be easy to start while still rewarding attention and recall.",
    ideaText: "Create a simple card-matching game that turns a familiar memory challenge into a polished browser experience.",
    howItWorks: "Players reveal cards, remember their positions, and match pairs until the board is cleared.",
    features: ["Interactive card flipping", "Pair matching gameplay", "Play directly in the browser"],
    challenges: "Keeping card interactions clear and predictable as players reveal and match cards.",
    learned: "How a small game loop can make a familiar mechanic engaging through simple visual feedback.",
    future: "Add difficulty levels, a move counter, and a best-time tracker.",
    github: "",
    demo: "https://aashfaak.github.io/Card_matching_memory_game/",
  },
  {
    slug: "predict-me",
    title: "Predict-Me",
    short: "A machine learning app that predicts outcomes from user-provided data.",
    category: "Game",
    imageUrl: "/predict me.png",
    technologies: ["Python", "scikit-learn", "Flask"],
    status: "completed",
    featured: true,
    problem: "People without a data science background have no simple way to run predictive models on their own data.",
    ideaText: "Build a lightweight interface where a dataset goes in and a trained model, with plain-language results, comes out.",
    howItWorks: "The app cleans the uploaded dataset, trains a model against the target column, and reports predictions with accuracy metrics.",
    features: ["CSV upload and cleaning", "Model training with scikit-learn", "Plain-language result summaries"],
    challenges: "Handling messy, inconsistent real-world data without asking the user to pre-clean it themselves.",
    learned: "How much of a machine learning project is data preparation, not modeling.",
    future: "Support more model types and let users compare them side by side.",
    github: "",
    demo: "https://aashfaak.github.io/Predict-Me/",
  },
  {
    slug: "neon-flappy-game",
    title: "Neon Flappy Game",
    short: "A colorful arcade side-scroller inspired by the classic flappy gameplay loop.",
    category: "Game",
    imageUrl: "/Neon-Flappy.png",
    technologies: ["JavaScript", "HTML5", "CSS", "Canvas"],
    status: "completed",
    featured: true,
    problem: "Simple browser games are often either too basic or too hard to play casually on a single page.",
    ideaText: "Create a lightweight, polished arcade game with fast controls and satisfying rhythm gameplay.",
    howItWorks: "The player taps or clicks to flap through gaps while the game continuously scrolls obstacles and tracks score.",
    features: ["Responsive controls", "Neon visual design", "Score tracking and replay flow"],
    challenges: "Balancing difficulty and responsiveness so the game feels fun without becoming frustrating too quickly.",
    learned: "How small timing decisions impact the feel of a game more than large feature count does.",
    future: "Add sound effects, mobile touch polish, and a high-score system.",
    github: "",
    demo: "https://aashfaak.github.io/Neon-Flappy-Game/",
  },
  {
    slug: "neon-snake-game",
    title: "Neon Snake Game",
    short: "A neon-styled snake game built for quick, addictive gameplay in the browser.",
    category: "Game",
    imageUrl: "/Snake Game.png",
    technologies: ["JavaScript", "HTML5", "CSS", "Canvas"],
    status: "completed",
    featured: true,
    problem: "Classic arcade games are easy to recreate, but a clean modern version still needs careful design and polish.",
    ideaText: "Build a crisp, playable browser game that feels vibrant, smooth, and immediately familiar.",
    howItWorks: "The snake moves continuously, consumes items, grows in length, and the player avoids collision with walls and itself.",
    features: ["Keyboard controls", "Neon effects and UI", "Score progression and restart flow"],
    challenges: "Keeping movement smooth and collision logic reliable while preserving the original game feel.",
    learned: "How arcade mechanics become much more satisfying when movement and feedback are tuned well.",
    future: "Add obstacle levels, difficulty modes, and a leaderboard experience.",
    github: "",
    demo: "https://aashfaak.github.io/Neon-Snake-Game/",
  },

  {
    slug: "tanim-intesar-portfolio",
    title: "Tanim Intesar Portfolio",
    short: "Personal portfolio and journal website built with Next.js, Firebase, and Cloudinary.",
    category: "Portfolio Web App",
    imageUrl: "/tanim intesar.png",
    technologies: ["Next.js", "Firebase", "Cloudinary", "TypeScript"],
    status: "completed",
    featured: true,
    problem: "A personal portfolio needs a clean structure, easy updates, and a polished presentation for projects, thoughts, and travel notes.",
    ideaText: "Create a personal portfolio and journal that combines professional projects, ideas, and writing in one modern web experience.",
    howItWorks: "The site gathers curated content from structured data and presents it as a polished collection of portfolio sections and journal entries.",
    features: ["Portfolio sections", "Journal and project pages", "Cloudinary media support"],
    challenges: "Keeping content flexible enough for portfolio updates while maintaining a consistent visual design.",
    learned: "How portfolio architecture and content modeling affect long-term maintainability.",
    future: "Add richer CMS editing, analytics, and more curated project sections.",
    github: "https://github.com/aashfaak/tanim-intesar-portfolio",
    demo: "https://tanimintesar.vercel.app/",
  },
  {
    slug: "house-booking",
    title: "House Booking App",
    short: "A booking platform for finding and reserving rental homes.",
    category: "App Development",
   
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    status: "completed",
    featured: true,
    problem: "Small property owners lack an easy way to list homes and manage bookings online.",
    ideaText: "A straightforward booking site: list a property, set availability, accept reservations.",
    howItWorks: "Owners create listings with photos and pricing; visitors browse, check availability, and submit booking requests.",
    features: ["Property listings with search/filter", "Availability calendar", "Booking request workflow"],
    challenges: "Modeling availability and preventing double-bookings cleanly in the database.",
    learned: "How to design a relational schema for a real booking system, not just a CRUD app.",
    future: "Add payments and owner-side analytics.",
    github: "https://github.com/aashfaak/House-Booking-pp",
    demo: "",
  },
  {
    slug: "gesture-control",
    title: "Real-Time Gesture Control",
    short: "Computer vision system that controls actions using hand gestures.",
    category: "AI / Computer Vision",
     imageUrl: "/Hand Gesture.webp",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    status: "completed",
    featured: true,
    problem: "Touchless control is useful in many contexts but usually requires expensive hardware.",
    ideaText: "Use nothing but a webcam and hand-tracking to translate gestures into real-time commands.",
    howItWorks: "MediaPipe tracks hand landmarks per frame; specific landmark patterns are mapped to actions.",
    features: ["Real-time hand landmark tracking", "Custom gesture-to-action mapping", "Works with a standard webcam"],
    challenges: "Keeping detection stable and low-latency without specialized hardware.",
    learned: "Practical constraints of real-time computer vision — frame rate, lighting, and false positives.",
    future: "Expand the gesture vocabulary and package it as a reusable library.",
    github: "https://github.com/aashfaak/Hand-Gesture",
    demo: "",
  },
  {
    slug: "big-data-hadoop",
    title: "Big Data Analysis / Hadoop",
    short: "Coursework project processing large datasets with Hadoop and Pig.",
    category: "Data Analysis",
    imageUrl: "/bigdata.webp",
    technologies: ["Hadoop", "Pig", "HDFS"],
    status: "completed",
    featured: false,
    problem: "Traditional tools break down once a dataset no longer fits comfortably in memory.",
    ideaText: "Work directly with the Hadoop ecosystem to process a large dataset in a distributed way.",
    howItWorks: "Data is stored in HDFS and processed with Pig scripts, distributing work across nodes.",
    features: ["HDFS storage setup", "Pig scripts for data transformation", "Distributed processing pipeline"],
    challenges: "Thinking in terms of distributed jobs instead of a single sequential script.",
    learned: "What Hadoop actually solves, and when a distributed system is worth the added complexity.",
    future: "Revisit the same problem with Spark for comparison.",
    github: "https://github.com/aashfaak/IMDB-Movies-Data-Analysis",
    demo: "",
  },
  {
    slug: "bus-ticket-reservation",
    title: "Bus Ticket Reservation",
    short: "A system for browsing routes, selecting seats, and booking bus tickets.",
    category: "Web Development",
    imageUrl: "/bus.webp",
    technologies: ["PHP", "MySQL", "JavaScript"],
    status: "completed",
    featured: false,
    problem: "Many local bus operators still handle reservations manually or over the phone.",
    ideaText: "A simple reservation system: pick a route, pick a seat, confirm a booking.",
    howItWorks: "Routes and seat maps are stored in the database; a booking locks the selected seat for that trip.",
    features: ["Route and schedule browsing", "Interactive seat selection", "Booking confirmation"],
    challenges: "Preventing two people from booking the same seat at the same time.",
    learned: "Why booking systems need careful handling of concurrent writes.",
    future: "Add an admin view for operators to manage routes and schedules.",
    github: "https://github.com/aashfaak/SDP_BTRS_main",
    demo: "",
  },
  
];

export const ideas: Idea[] = [
  {
    slug: "university-marketplace",
    title: "University Marketplace",
    concept: "A student-only marketplace designed specifically for university communities, where students can buy, sell, exchange, or give away items they no longer need.\n\nInstead of competing with large general marketplaces, the platform would focus on campus-level transactions, making it easier for students to find relevant items from people within their own university or nearby campus area.\n\nThe goal is to create a simple, trusted space for students to exchange everyday university essentials.",
    problem: "University students frequently need things such as:\n\n* Textbooks and academic materials\n* Calculators and lab equipment\n* Used laptops and accessories\n* Furniture and room essentials\n* Bicycles\n* Electronics\n* Clothing\n* Event or club-related items\n* Admission and exam preparation materials\n\nAt the same time, students often have these items sitting unused after completing a course, semester, or academic year.\n\nHowever, buying and selling within a university is usually scattered across:\n\n* Facebook groups\n* Messenger groups\n* WhatsApp groups\n* Friends and classmates\n* Informal campus networks\n\nThese channels make it difficult to discover listings, compare items, communicate with sellers, and determine whether someone actually belongs to the university.",
    solution: "Build a verified student marketplace where users can create listings and connect with other students from the same university.\n\nA student could:\n\n1. Create an account using their university email or student verification.\n2. Select their university and campus.\n3. Browse available items.\n4. Search by category, price, condition, or location.\n5. Contact the seller.\n6. Arrange a campus pickup or mutually agreed meeting point.\n7. Mark the item as sold after completing the transaction.\n\nThe platform would focus on making the process simple, local, and student-oriented.",
    status: "exploring",
    imageUrl: "/University Marketplace.jpg",
  },
  {
    slug: "campus-lost-found",
    title: "Campus Lost & Found",
    concept: "A university-specific platform for reporting, finding, and returning lost items within campus.\n\nStudents could quickly post details about something they have lost or found, while others could search through recent reports and help reconnect items with their owners.",
    problem: "Lost items on campus are often difficult to report and recover.\n\nStudents usually depend on friends, class groups, Messenger chats, or social media posts. These channels are scattered, posts can quickly disappear, and there is no central place to search for previously reported items.\n\nThis can make simple lost-and-found situations unnecessarily difficult.",
    solution: "Create a centralized **campus lost-and-found hub** where students can:\n\n- Report a lost item\n- Report an item they have found\n- Search and filter existing reports\n- Add photos and identifying details\n- Specify where and when the item was lost or found\n- Contact the person who posted the report\n- Verify their university identity before making a claim\n\nThe platform could use verified university accounts to create a more trusted environment.",
    workflow: "**Lost something?**\n\nCreate a report → Add item details → Select location → Add photo → Publish\n\n**Found something?**\n\nCreate a found-item report → Add details → Select where it was found → Publish\n\nIf a possible match is found, the two users can communicate and verify ownership before arranging a return.",
    features: "- University account verification\n- Lost / Found categories\n- Search and filters\n- Item photos\n- Campus location\n- Date and time\n- Possible match suggestions\n- Claim request\n- User reporting\n- Resolved / Unresolved status\n- Notifications\n- Admin moderation",
    future: "The platform could eventually become a broader **campus community utility**, with support for multiple universities and separate campus communities.\n\nPossible future additions could include:\n\n- QR codes for valuable items\n- Smart matching between lost and found reports\n- Campus map integration\n- Notifications for nearby matches\n- Anonymous reporting\n- University administration dashboard",
    statusDetails: "Currently exploring the problem, user experience, verification approach, and the simplest MVP that could make campus lost-and-found more efficient.",
    status: "idea",
    imageUrl: "/Campus Lost & Found.jpg",
  },
  {
    slug: "local-service-finder",
    title: "Local Services Finder",
    concept: "A local platform for discovering **trusted service providers nearby**—from electricians, plumbers, mechanics, tutors, and photographers to designers, repair technicians, and other skilled professionals.\n\nThe goal is to make it easier for people to find the right person for a job without depending entirely on personal recommendations.",
    problem: "Finding a reliable local service provider can be surprisingly difficult.\n\nPeople often depend on:\n\n- Friends and family recommendations\n- Facebook groups\n- Random online searches\n- Local shops or contacts\n- Word of mouth\n\nThese methods can make it difficult to compare providers, understand pricing, check previous work, or know whether someone is actually reliable.\n\nFor smaller or less-established service providers, there is also no simple way to build a trustworthy online presence.",
    solution: "Create a location-based platform where users can discover and compare local service providers.\n\nUsers could search by:\n\n**Service → Location → Availability → Price → Reviews**\n\nEach provider could have a profile containing:\n\n- Name / business name\n- Services offered\n- Location\n- Contact information\n- Starting price or price range\n- Photos of previous work\n- Customer reviews\n- Availability\n- Verification status",
    example: "Someone needs an electrician nearby.\n\nInstead of asking several people for recommendations, they could search:\n\n> **Electrician → Chittagong → Nearby**\n\nand see available providers with their:\n\n**Services · Location · Reviews · Pricing · Previous Work**\n\nThey could then compare options and contact the provider directly.",
    trust: "Trust would be one of the most important parts of the platform.\n\nPossible verification methods:\n\n- Phone verification\n- Identity verification\n- Business information\n- Customer reviews\n- Completed-job history\n- Verified provider badge\n\nUsers could also report inaccurate profiles or inappropriate behavior.",
    categories: "**Home**\n\n- Electricians\n- Plumbers\n- Painters\n- Cleaning services\n- AC technicians\n\n**Education**\n\n- Tutors\n- Coaching\n- Language teachers\n\n**Automotive**\n\n- Mechanics\n- Car wash\n- Bike repair\n\n**Creative**\n\n- Photographers\n- Designers\n- Videographers\n\n**Technology**\n\n- Computer repair\n- Mobile repair\n- Web developers\n\nAnd other local services based on demand.",
    mvp: "The first version could remain simple:\n\n- User registration\n- Provider profiles\n- Service categories\n- Location-based search\n- Search and filters\n- Reviews\n- Contact provider\n- Provider verification\n- Admin moderation\n\nPayments and booking could be considered later rather than making them part of the initial product.",
    future: "If the concept proves useful, it could evolve into a broader local-services marketplace with:\n\n- Online booking\n- Service requests\n- Quotes from multiple providers\n- In-app messaging\n- Online payments\n- Availability calendars\n- Service history\n- Provider analytics\n- AI-powered service recommendations",
    status: "researching",
    imageUrl: "/Local Service Finder.jpg",
  },
  {
    slug: "study-group-matcher",
    title: "Study Group Matcher",
    concept: "A student-focused platform that helps university students find compatible study partners and form small study groups based on **courses, schedules, learning goals, and study preferences**.\n\nInstead of manually searching through class groups or asking friends, students could discover people who are studying the same subject and have similar availability and objectives.",
    problem: "Studying collaboratively can be useful, but finding the right people is often difficult.\n\nStudents may be taking the same course but have completely different:\n\n- Class schedules\n- Free time\n- Learning pace\n- Academic goals\n- Preferred study methods\n\nAs a result, students often depend on existing friends or random class-group posts to find study partners.\n\nThis can make forming a productive study group unnecessarily time-consuming.",
    solution: "Create a matching system where students build a simple academic profile and select:\n\n- University\n- Courses\n- Available days and times\n- Preferred group size\n- Learning goals\n- Study preferences\n- Online / In-person preference\n\nThe system could then recommend students or groups with similar profiles.",
    workflow: "A student joins a course:\n\n**CSE 320 — Database Systems**\n\nThen sets:\n\n**Availability:**\nSunday & Tuesday · 7–9 PM\n\n**Goal:**\nPrepare for final exam\n\n**Study style:**\nProblem solving + discussion\n\nThe platform finds students with compatible preferences and suggests:\n\n> **3 potential study partners found**\n\nThe students can then create a private study group and decide how they want to study together.",
    features: "### Smart Matching\nMatch students based on:\n\n- Course\n- Schedule\n- Learning goals\n- Study preferences\n- Academic level\n- Preferred group size\n\n### Course-Based Groups\nStudents can discover existing groups for specific courses.\n\n### Availability Matching\nShow overlapping free time between potential members.\n\n### Study Goals\nPossible goals:\n\n- Exam preparation\n- Assignment help\n- Regular study\n- Project collaboration\n- Concept discussion\n- Revision\n\n### Group Management\nGroups could have:\n\n- Group name\n- Course\n- Members\n- Schedule\n- Study goals\n- Shared resources\n- Meeting information\n\n### University Verification\nUniversity email or student ID verification could help keep the community focused on actual students.",
    example: "Four students are taking the same course but don't normally interact.\n\nThe platform discovers that they:\n\n- Have the same course\n- Are available on Tuesday evening\n- Want to prepare for the same exam\n- Prefer small discussion-based groups\n\nInstead of individually searching for partners, the platform recommends that they form a group.",
    future: "The concept could eventually expand into a broader **student collaboration platform**.\n\nPossible additions:\n\n- AI-powered matching\n- Shared study notes\n- Group task management\n- Study sessions\n- Pomodoro rooms\n- Resource sharing\n- Progress tracking\n- Peer tutoring\n- Course communities\n- Project teammate matching",
    mvp: "The first version could focus on just three things:\n\n**1. Student verification**\nCreate a trusted student community.\n\n**2. Course + availability matching**\nFind compatible students.\n\n**3. Study groups**\nCreate and manage small groups.\n\nEverything else can come later after validating whether students actually want this type of matching.",
    statusDetails: "The next step is to understand how students currently find study partners and whether **course + availability + learning goal** are actually the most useful matching signals.\n\nThe idea needs validation through conversations with students before deciding what the first version should include.",
    status: "researching",
    imageUrl: "/Study Group Matcher.jpg",
  },
  {
    slug: "student-project-partner",
    title: "University Project Team Matcher",
    concept: "A platform that helps university students find suitable teammates for academic projects based on **skills, interests, courses, experience, and project requirements**.\n\nInstead of depending only on friends or class group chats, students could describe their project and discover other students whose skills complement their own.",
    problem: "University projects often require multiple skills, but finding the right teammates can be difficult.\n\nA student may be good at programming but need someone experienced in UI/UX, database management, machine learning, documentation, presentation, or research. Students usually search through friends, Messenger groups, class groups, or personal networks.\n\nThis can lead to teams where:\n\n- Everyone has similar skills\n- Important skills are missing\n- Team members have different levels of commitment\n- Students join projects without knowing each other's strengths\n- Good students remain difficult to discover outside their existing friend groups",
    solution: "A **project-team matchmaking platform** where students create profiles describing their skills, interests, academic background, previous projects, and preferred roles.\n\nA student could create a project such as:\n\n**Project:** AI-Based Attendance System\n\n**Looking for:**\n- 1 Python/ML developer\n- 1 frontend developer\n- 1 UI/UX designer\n\nThe platform would then recommend students who match those requirements. Students could also browse available projects and apply to join teams that interest them.",
    featuresTitle: "Key Features",
    features: "### Skill-Based Matching\nMatch students according to programming languages, frameworks, data science, AI/ML, UI/UX, research, documentation, presentation, and other skills.\n\n### Project Requirements\nProject creators can specify:\n\n- Required skills\n- Number of teammates\n- Preferred roles\n- Course/subject\n- Project type\n- Expected workload\n- Deadline\n\n### Student Profiles\nEach student could have:\n\n- University and department\n- Current semester\n- Skills\n- Interests\n- Previous projects\n- GitHub/portfolio\n- Preferred roles\n- Availability\n- Short introduction\n\n### Smart Recommendations\nThe system could calculate compatibility between a project and potential teammates based on skills, interests, academic background, availability, and project requirements.\n\n### Team Formation\nStudents can invite, accept, or decline teammates and create a dedicated project team once enough members are selected.",
    example: "A CSE student wants to build a **machine learning-based healthcare prediction system** but needs additional teammates.\n\nThey create a project and select:\n\n**Looking for:**\n- 1 Machine Learning student\n- 1 Backend developer\n- 1 UI/UX designer\n\nThe platform recommends students whose profiles match those requirements. The project owner can review their profiles and invite suitable candidates.",
    mvp: "The first version could focus on:\n\n- Student registration\n- University verification\n- Student profiles\n- Skill selection\n- Project creation\n- Project discovery\n- Skill-based matching\n- Join/invite requests\n- Basic team management",
    future: "The platform could eventually include:\n\n- AI-powered team formation\n- Compatibility scoring\n- GitHub integration\n- Portfolio integration\n- Team chat\n- Task management\n- Project deadlines\n- Meeting scheduling\n- Peer reviews\n- Contribution tracking\n- Project repositories\n- Team performance insights\n- University-wide project communities\n- Hackathon and competition team formation",
    coreIdea: "A **professional networking and matchmaking layer for university projects**, helping students find teammates based on what they can contribute rather than only who they already know.",
    status: "idea",
    imageUrl: "/Student Project Partner.jpg",
  },
  {
    slug: "local-food-discovery",
    title: "Hidden Food Gems",
    concept: "A community-driven platform for discovering **underrated restaurants, small food shops, cafés, street-food spots, and local food gems** that may not appear prominently on popular food platforms.\n\nInstead of focusing only on highly rated or heavily promoted restaurants, the platform would help people discover places recommended by real local communities.",
    problem: "Many of the best food experiences are difficult to discover.\n\nSmall restaurants, roadside food stalls, family-owned businesses, and lesser-known cafés often depend on **word-of-mouth recommendations** rather than online visibility.\n\nPeople usually discover these places through friends, Facebook groups, social media posts, or by simply noticing a place while walking or travelling.\n\nThis creates several problems:\n\n- Great local food remains difficult to discover\n- Popular places dominate search results\n- Recommendations are scattered across different platforms\n- Reviews often lack personal context\n- Visitors may not know what specific dish a place is known for\n- Small local businesses may have little online presence",
    solution: "A **community-driven food discovery map** where users can share places they genuinely recommend.\n\nInstead of simply giving a restaurant a numerical rating, users could explain **why they recommend it**, what they ordered, what the place is known for, and when it is worth visiting.\n\nA recommendation could include:\n\n**Hidden Gem:** A small local biryani shop\n\n**Recommended by:** 12 people\n\n**Must Try:** Beef Biryani\n\n**Best Time:** Lunch\n\n**Why go:** Affordable, authentic local taste, usually less crowded.\n\nUsers could explore the map and discover food spots based on location, cuisine, price, recommendations, and community activity.",
    featuresTitle: "Key Features",
    features: "### Community Recommendations\nUsers can recommend restaurants and food spots they believe deserve more attention. Recommendations could include:\n\n- What to order\n- Approximate price\n- Best time to visit\n- Personal experience\n- Why they recommend it\n\n### Food Discovery Map\nAn interactive map showing recommended food spots around the user. Categories could include:\n\n- Street Food\n- Local Restaurants\n- Cafés\n- Desserts\n- Fast Food\n- Traditional Food\n- Budget Eats\n- Hidden Gems\n\n### Dish-Based Discovery\nInstead of searching only for restaurants, users could search for specific foods:\n\n- Best biryani near me\n- Affordable burgers\n- Best local breakfast\n- Hidden dessert spots\n\nThis makes the platform more focused on **what people want to eat**, rather than only where they can eat.\n\n### Recommendation Notes\nUsers can leave short personal notes with their recommendations, such as:\n\n> Don't judge the place by its appearance. The beef curry is excellent.\n\nThese notes could make recommendations more useful than generic star ratings.\n\n### Community Reviews\nUsers could share photos, reviews, recommended dishes, price estimates, visit experiences, and tips. Others could react to or save useful recommendations.\n\n### Hidden Gem Status\nA place could receive a **Hidden Gem** label when it receives strong community recommendations but has relatively low overall visibility. This could help surface smaller businesses that might otherwise be overlooked.",
    example: "Suppose someone is visiting a new area of Chattogram and wants something interesting to eat.\n\nInstead of searching only for highly popular restaurants, they open the platform and explore the nearby map.\n\nThey discover:\n\n**Local Beef Tehari — Recommended by 27 people**\n\nThe place page shows:\n\n- Location\n- Photos\n- Recommended dishes\n- Approximate price\n- Community notes\n- Recent reviews\n- Opening hours\n- Distance\n- Directions\n\nThe visitor can save the place and visit it later.",
    mvp: "The first version could include:\n\n- User registration\n- Restaurant/food-spot submissions\n- Location-based food map\n- Categories\n- Community recommendations\n- Reviews and notes\n- Photos\n- Search and filters\n- Save/bookmark feature\n- Basic moderation",
    future: "The platform could eventually include:\n\n- Personalized food recommendations\n- AI-powered food discovery\n- Trending hidden gems\n- Near-me recommendations\n- Food trails and collections\n- User-curated food lists\n- Food blogger/community profiles\n- Restaurant owner verification\n- Dish-level ratings\n- Price tracking\n- Opening-hour information\n- Food events\n- Travel food guides\n- Local food discovery for tourists\n- Gamification and contributor badges",
    coreIdea: "A **community-powered discovery platform for local food**, designed to help people find the places that are loved by locals but often overlooked by mainstream food platforms.",
    status: "idea",
    imageUrl: "/Local Food Discovery.jpg",
  },
  {
    slug: "university-course-review",
    title: "Course Review & Student Guide",
    concept: "A student-focused platform where university students can **anonymously share experiences, reviews, resources, and practical advice about courses**.\n\nThe platform would help students understand what to expect from a course before enrolling, based on experiences from students who have already taken it.",
    problem: "Choosing courses can be difficult when students have limited information about what a course is actually like.\n\nOfficial course descriptions usually explain the syllabus and learning objectives, but they may not provide enough insight into the real student experience.\n\nStudents often depend on:\n\n- Friends and seniors\n- Messenger or WhatsApp groups\n- Informal conversations\n- Personal recommendations\n- Scattered online resources\n\nThis makes it difficult to understand things such as:\n\n- How difficult the course actually feels\n- How much workload it requires\n- What topics need the most preparation\n- What resources are useful\n- How projects or assignments are structured\n- What students wish they had known beforehand",
    solution: "A **community-driven course review platform** where students can anonymously share their experiences with individual courses.\n\nStudents could search for a course and see aggregated feedback from previous students. A course overview might include:\n\n**Course:** Database Management Systems\n\n**Difficulty:** Moderate\n\n**Workload:** Medium–High\n\n**Programming Required:** Yes\n\n**Recommended Resources:** SQL tutorials, course slides\n\n**Student Notes:**\n> Start the project early. The database design takes more time than expected.\n\nThe goal would not be to tell students whether they should take a course, but to give them **better information before making their own decision**.",
    featuresTitle: "Key Features",
    features: "### Anonymous Course Reviews\nStudents can share their experiences without publicly attaching their identity. Reviews could include overall experience, difficulty, workload, project intensity, exam preparation, recommended resources, and useful tips.\n\n### Course Difficulty\nStudents could provide structured difficulty feedback: Easy, Moderate, Challenging, or Very Challenging. The platform could display aggregated responses rather than relying on a single review.\n\n### Workload Information\nStudents could describe the approximate workload involving assignments, projects, presentations, labs, quizzes, exams, and weekly study requirements.\n\n### Course Resources\nStudents could share books, YouTube playlists, websites, practice platforms, lecture notes, cheat sheets, and previous study materials. Resources could be organized by topic so future students can find them easily.\n\n### Student Experience\nStudents could write practical notes such as:\n\n> The first half is mostly theoretical, but the project becomes significantly more demanding later.\n\nThis gives future students context that a simple rating cannot provide.\n\n### Course Search\nStudents could search by course name, course code, department, semester, topic, or instructor. The platform could also show related courses.",
    example: "A student is about to register for **Machine Learning** but has never taken the course before.\n\nThey search for **Machine Learning — CSE** and find this community overview:\n\n- Difficulty: Challenging\n- Workload: High\n- Programming: High\n- Mathematics: Moderate–High\n- Project Work: High\n\nStudents have also shared:\n\n> Review Python and NumPy before starting.\n\n> Linear algebra concepts become important later.\n\n> The final project requires significant preparation.\n\nThe student can then use this information to prepare before enrolling.",
    mvp: "The first version could include:\n\n- University registration\n- Course directory\n- Anonymous reviews\n- Difficulty ratings\n- Workload ratings\n- Course resources\n- Search and filters\n- Review moderation\n- Helpful/upvote system\n- Report inappropriate content",
    future: "The platform could eventually include:\n\n- Semester-wise course planning\n- Prerequisite recommendations\n- Personalized course preparation\n- Instructor/course sections\n- Resource collections\n- Course discussion communities\n- Study-group integration\n- Course comparison\n- AI-generated course summaries\n- Anonymous Q&A\n- Senior-junior mentoring\n- University-specific academic communities",
    privacy: "Because the platform involves anonymous student feedback, **privacy and moderation would be an important part of the product**.\n\nThe system could avoid publicly exposing reviewer identities while still using moderation tools to reduce spam, harassment, fabricated reviews, and personally targeted content.\n\nReviews should focus on **courses and learning experiences**, rather than becoming a platform for personal attacks against instructors or students.",
    coreIdea: "A **student-powered course knowledge base** where real academic experiences, resources, and practical advice are collected in one place to help students better understand courses before taking them.",
    status: "idea",
    imageUrl: "/University Course Review.jpg",
  },
  {
    slug: "personal-knowledge-garden",
    title: "Personal Knowledge Garden",
    concept: "A personal knowledge system that connects **notes, ideas, projects, learning topics, resources, and experiences** into one interconnected visual knowledge graph.\n\nInstead of keeping information in separate folders and documents, the system would show how different pieces of knowledge relate to each other.",
    problem: "Knowledge often becomes scattered across:\n\n- Notes\n- Browser tabs\n- Documents\n- Bookmarks\n- Projects\n- Courses\n- Tutorials\n- Ideas\n- Personal observations\n\nThe problem is not always finding information — it is **understanding how different pieces of information connect**.\n\nFor example, a student might learn Python, then study Machine Learning, then build a Computer Vision project. These are related, but traditional note-taking systems often store them separately.\n\nOver time, valuable connections between ideas can easily disappear.",
    solution: "A **visual knowledge graph** where every note, concept, project, resource, or idea can be connected to other related topics.\n\nFor example:\n\n**Python → NumPy → Data Science → Machine Learning → Computer Vision → Project**\n\nThe system would allow users to explore these relationships visually and discover connections they may not have explicitly noticed before.",
    featuresTitle: "Key Features",
    features: "### Knowledge Nodes\nEverything can become a node in the knowledge graph:\n\n- Notes\n- Concepts\n- Ideas\n- Projects\n- Courses\n- Books\n- Articles\n- Videos\n- People\n- Places\n- Resources\n\n### Connections\nUsers can connect nodes using relationships such as related to, part of, inspired by, prerequisite for, used in, learned from, or built from.\n\nFor example:\n\n> **Python** → *used in* → **Machine Learning Project**\n\n### Visual Knowledge Graph\nAn interactive graph could let users zoom in and out, drag nodes, follow connections, open notes directly from nodes, filter by category, search the graph, and explore related topics.\n\n### Contextual Notes\nEach node could contain a description, personal notes, resources, links, tags, related projects, learning status, and date created.\n\n### Project Connections\nProjects could be connected directly to the knowledge that helped create them. A project such as **Real-Time Gesture Control** could link to OpenCV, MediaPipe, Computer Vision, Python, and Human-Computer Interaction. This creates a visual history of the knowledge behind a project.",
    example: "Suppose a student is learning **Data Science**. Their knowledge graph might connect:\n\n**Python**\n↓\n**NumPy** → **Pandas**\n↓\n**Data Analysis**\n↓\n**Machine Learning**\n↓\n**Computer Vision**\n↓\n**Gesture Control Project**\n\nClicking on any node could reveal related notes, resources, projects, and learning materials.\n\nOver time, the graph becomes a visual representation of the user's learning journey.",
    mvp: "The first version could include:\n\n- User authentication\n- Create/edit/delete notes\n- Create knowledge nodes\n- Add tags\n- Create relationships between nodes\n- Search\n- Basic graph visualization\n- Node details\n- Project linking\n- Resource links",
    future: "The system could eventually include:\n\n- AI-powered automatic connections\n- Semantic search\n- AI-generated summaries\n- Automatic topic extraction\n- Knowledge recommendations\n- Graph-based learning paths\n- Spaced repetition\n- Personal research assistant\n- Browser extension for saving knowledge\n- Markdown support\n- PDF/document import\n- GitHub integration\n- Cloud synchronization\n- Collaborative knowledge graphs\n- Timeline view of learning\n- AI detection of knowledge gaps",
    coreIdea: "A **visual second brain** that connects what you learn, build, discover, and think about — turning scattered information into an interconnected map of personal knowledge.",
    status: "idea",
    imageUrl: "/Personal Knowledge Garden.jpg",
  },
];

export const thinking: ThinkingPost[] = [
  {
    slug: "what-hadoop-taught-me",
    title: "What Hadoop taught me about large datasets",
    excerpt: "Distributed processing sounds abstract until you actually watch a job split across nodes.",
    date: "2026-03-01",
    category: "Data",
  },
  {
    slug: "first-android-app-lessons",
    title: "What I learned building my first Android app",
    excerpt: "The gap between a working demo and something you'd actually ship is bigger than it looks.",
    date: "2026-01-14",
    category: "Mobile",
  },
  {
    slug: "why-python-seriously",
    title: "Why I started learning Python seriously",
    excerpt: "It started as the language for one assignment and became the one I reach for by default.",
    date: "2025-11-02",
    category: "Learning",
  },
];

export const trips: Trip[] = [
  {
    slug: "weekend-in-bandarban",
    title: "A Day in Bandarban",
    location: "Bandarban, Bangladesh",
    date: "June 17, 2026",
    excerpt: "An early start, two open-top hill vehicles, six stops, and a full day exploring Bandarban with friends.",
    routeStops: [
      "Laldighi",
      "Bandarban Sadar",
      "Shoilo Propat",
      "Chimbuk",
      "Double Hand View Point",
      "Titanic View Point",
      "Nilachol",
      "Meghla",
      "Chittagong",
    ],
    body: `Some trips are planned for weeks. Others begin with a simple decision — *let's go.*

  Our Bandarban trip was somewhere in between. A group of friends, an early morning start, a couple of rented hill vehicles, and an entire day waiting somewhere beyond the familiar roads of Chittagong.

  We left at **6:00 AM from Laldighi**, gathering all our friends before setting off towards Bandarban. The city was still relatively quiet, and the early morning air made the beginning of the journey feel different from an ordinary day.

  As we moved away from the city, the scenery slowly began to change. The familiar roads gave way to hills, greenery, winding roads, and the feeling that we were gradually leaving the usual routine behind.

  ## The Morning in Bandarban

  After reaching **Bandarban Sadar**, our first priority was breakfast.

  We stopped at a local hotel, had breakfast together, and took a little time to recharge. We knew we had a long day ahead.

  For the rest of the day, we rented **two rooftop/open-top hill vehicles**, which turned out to be one of the best parts of the trip itself. Sitting together, moving through the mountain roads, feeling the wind, and being able to stop whenever we wanted made the journey between the destinations just as enjoyable as the destinations themselves.

  And then, the actual adventure began.

  ## 01 — Shoilo Propat

  Our first stop was **Shoilo Propat**, a beautiful waterfall near Milanchhari. It is one of the easily accessible natural attractions around Bandarban, located along the road towards the hill areas.

  After getting down from the vehicle, the sound of running water immediately changed the atmosphere.

  The place felt cooler and quieter than the road behind us. Surrounded by rocks, trees, and the natural landscape of the hills, Shoilo Propat gave us our first proper taste of Bandarban that day.

  We spent some time there taking photos, walking around, enjoying the waterfall, and, as always happens when a group of friends travels together, making enough memories to fill everyone's phone gallery.

  But we couldn't stay too long.

  There was still a long road ahead.

  ## 02 — Chimbuk

  From Shoilo Propat, we continued towards **Chimbuk**.

  The road itself became part of the experience.

  The higher we went, the more the landscape opened up. The winding mountain roads, green hills, and changing views made the journey feel completely different from the city we had left that morning.

  Chimbuk is one of Bandarban's well-known tourist destinations and is particularly popular because of its accessible mountain scenery and viewpoints.

  Standing there, looking across the layers of hills stretching into the distance, it became easy to understand why people keep coming back to Bandarban.

  Sometimes the best part of a mountain trip isn't reaching the destination.

  It's simply standing somewhere high enough and realizing how small everything looks from there.

  ## 03 — Double Hand View Point

  Our next stop was **Double Hand View Point**.

  By this point, the roads had completely become part of the adventure. Every turn seemed to reveal another mountain, another patch of green, or another distant landscape.

  Double Hand View Point gave us another opportunity to stop, breathe, and take in the surroundings.

  We spent some time enjoying the view and taking photographs before getting back into our vehicles.

  There was something special about travelling with a group of friends in the open air — music, conversations, jokes, random shouting from one vehicle to the other, and the occasional *"ভাই, থামাও! ছবি তুলবো!"*

  Those small moments probably became some of the most memorable parts of the entire day.

  ## 04 — Titanic View Point

  Next came **Titanic View Point**.

  The name itself had already created some curiosity among us, but the view was what made the stop worthwhile.

  From the viewpoint, the surrounding hills stretched out into the distance, creating the kind of wide mountain panorama that makes you want to stay a little longer.

  We took our time here — enjoying the fresh mountain air, taking pictures, and simply standing together without worrying about what came next.

  For a day that had started at six in the morning, we were already collecting enough memories to make the trip feel much longer than a single day.

  ## 05 — Nilachol

  After that, we headed towards **Nilachol**.

  Nilachol is one of the prominent viewpoints close to Bandarban town, situated at roughly 2,800 feet and known for its panoramic views over the surrounding hills and Bandarban town.

  By the time we reached there, we had already travelled through several different landscapes, and Nilachol felt like another beautiful chapter of the same story.

  We walked around, explored the viewpoint, took photographs, and enjoyed the scenery.

  There was a certain calmness here.

  After spending hours moving from one place to another, sitting or standing at a viewpoint and simply looking into the distance felt surprisingly peaceful.

  ## Lunch in Bandarban

  Eventually, hunger reminded us that sightseeing wasn't the only thing we had planned for the day.

  We returned to **Bandarban Sadar** for lunch.

  Instead of looking for something fancy, we went for something much more local — **traditional village-style food**.

  A simple meal after hours of travelling somehow tasted better than it normally would.

  We sat together, talked about everything we had already seen, laughed about the morning's events, and recharged ourselves for the final stop of the day.

  Before leaving Bandarban Sadar, many of us also bought **authentic local hill fruits** from the area.

  The colorful fruits, local products, and small roadside shops added another layer to the experience — something that didn't feel like a typical tourist attraction, but rather a small part of the local life we had encountered during the trip.

  ## 06 — Meghla

  Our final destination was **Meghla Tourist Complex**.

  And saving Meghla for the end turned out to be a good decision.

  Located close to Bandarban town, Meghla is built around a lake surrounded by green hills. The complex includes attractions such as **hanging bridges, boating, a cable car, a mini zoo/safari park, a children's park and other recreational facilities**.

  We decided to explore as much of it as possible.

  We walked around the complex, crossed the hanging bridges, explored the different areas, and spent time around the lake.

  Then came the rides.

  The **paddle boats** gave us a completely different way to experience the lake, while the other recreational attractions made the final part of the day feel less like sightseeing and more like simply hanging out together.

  We explored the different rides and attractions, took plenty of photos, joked around, and enjoyed our final hours in Bandarban.

  By then, everyone was tired.

  But it was the good kind of tired — the kind you feel after a day where you have actually done something.

  ## The Way Back

  As evening approached, it was finally time to leave.

  We got back into our vehicles and started our journey towards Chittagong.

  The energy was different now.

  The morning had been full of excitement about what was waiting ahead. Now everyone had stories to talk about.

  Someone was checking photos.

  Someone was probably already choosing which ones to post.

  Some were talking about the funniest moments of the day.

  And some were simply quiet, watching the hills disappear behind us.

  We left Bandarban in the evening, carrying tired bodies, full phone galleries, a few bags of local fruits, and a whole day's worth of memories.

  By around **8:00 PM**, we finally reached **Chittagong**.

  ## One Day, A Lot of Memories

  It was only a day trip.

  No expensive resort.
  No complicated itinerary.
  No long vacation.

  Just friends, an early morning start, two hill vehicles, winding mountain roads, waterfalls, viewpoints, local food, fruits, rides, countless photographs, and a lot of laughter.

  Looking back, the places were beautiful — Shoilo Propat, Chimbuk, Double Hand View Point, Titanic View Point, Nilachol, and Meghla.

  But what made the trip memorable wasn't only the places.

  It was the **people we shared them with**.

  Because sometimes, a journey becomes special not because of how far you travel, but because of **who is sitting beside you when you get there.**

  **Bandarban — June 17, 2026.**

  One day.

  Six places.

  Countless memories.`,
    imageUrl: "/Bandarban.jpeg",
    detailImageUrls: [
      
      "/Bandarban 1.jpeg",
      "/Bandarban details.jpeg",
      "/Bandarban 2.jpeg",
    ],
  },
  {
    slug: "impromptu-day-akilpur-sea-beach",
    title: "An Impromptu Day at Akilpur Sea Beach",
    location: "Akilpur Sea Beach, Kumira",
    date: "December 19, 2024",
    excerpt: "A spontaneous bus ride to Kumira, a CNG through rural roads, and a quiet afternoon with friends by the sea.",
    imageUrl: "/Akilpur Beach card.jpeg",
    detailImageUrl: "/Akilpur Beach details.jpeg",
    body: `Not every journey needs a plan.

Some trips happen simply because a few friends suddenly decide, *"চলো, কোথাও ঘুরে আসি।"*

Our trip to **Akilpur Sea Beach in Kumira** was exactly like that — an immediate plan, a few friends, a local bus, and no complicated itinerary.

## An Unplanned Beginning

It was around **11:00 AM** when we met at **Chittagong Railway Station**.

There was no long preparation, no detailed schedule, and no perfect travel plan.

We simply got on a **local bus heading towards Kumira**.

As the bus slowly moved out of the city, we had to make our way through the familiar chaos of Chittagong — traffic, crowded roads, horns, and the everyday noise of the city.

But somewhere along the way, the surroundings gradually began to change.

The buildings became fewer.

The roads became quieter.

And the city slowly started disappearing behind us.

After making our way through the traffic and congestion, we finally reached **Kumira**.

## A Quick Lunch, Then the Road Again

By the time we arrived, everyone was hungry.

So before heading towards the beach, we stopped for **lunch at a local hotel**.

Nothing fancy.

Just a simple local meal — exactly what we needed before continuing the journey.

After lunch, we hired a **local CNG** and started towards Akilpur.

This part of the journey was perhaps one of the most enjoyable.

The CNG took us through **rural roads — some paved, some broken, some barely deserving to be called roads**.

Instead of seeing the usual city buildings, we were surrounded by village scenery, greenery, open spaces, and the quiet rhythm of rural life.

The road wasn't perfect.

But somehow, that made the journey better.

We weren't rushing anywhere.

We were simply enjoying the ride.

After travelling like this for a while, we finally reached the coast.

## Akilpur Sea Beach

Akilpur Sea Beach is located in the **Choto Kumira area** and has become a relatively new attraction for local visitors.

Unlike the traditional image of a sea beach covered with wide stretches of sand, Akilpur is particularly known for its **curved concrete blocks and stone embankment**, built as coastal protection.

When the tide comes in, waves crash against these blocks, creating a dramatic scene along the coastline.

And that was exactly what we came to see.

We found a place to sit and simply stayed there.

## An Afternoon by the Sea

There wasn't much of an itinerary anymore.

And honestly, we didn't need one.

We spent the afternoon **sitting together, talking, laughing, taking pictures, and enjoying the sea**.

The sound of the waves gradually replaced the noise of the city we had left behind.

Every now and then, a wave would come crashing against the concrete blocks, sending water spraying into the air.

We would watch it, talk about random things, take another photo, and then go back to our conversations.

It was one of those afternoons where absolutely nothing extraordinary needed to happen.

Being there was enough.

## Hot Piyaju by the Beach

As evening approached, we noticed a small shop beside the beach.

The shop had a simple but interesting **decorative wooden setup**, and most importantly, it had something we couldn't resist — **fresh, hot piyaju**.

After spending hours near the sea, eating something hot while sitting beside the beach felt surprisingly satisfying.

We gathered around the shop, had the freshly prepared piyaju, continued our conversations, and enjoyed those little moments that somehow become the memories you remember later.

Sometimes it's not the big attractions that stay with you.

It's the hot piyaju from a small roadside shop.

The CNG ride through a broken village road.

The jokes between friends.

The sound of waves in the background.

## Evening in Kumira

Eventually, daylight began to fade.

It was time to head back.

We took a local CNG again and returned towards **Kumira Bazar**.

By then, everyone was tired and hungry again.

So we stopped at a local hotel for some **evening snacks**.

After that, there wasn't much left to do except begin the journey home.

We got back on the road towards Chittagong.

And almost immediately, the peaceful atmosphere of Kumira began to disappear.

The rural roads were replaced by traffic.

The quiet afternoon by the sea was replaced by horns, lights, crowds, and the familiar **city chaos**.

We were back where we had started.

## Just a Simple Trip

Looking back, this wasn't a grand trip.

We didn't travel far.

We didn't stay overnight.

We didn't have a carefully planned itinerary.

It was simply an **immediate plan between friends** that turned into a memorable day.

A local bus from Chittagong Railway Station.

A simple lunch in Kumira.

A CNG ride through village roads.

An afternoon beside the sea.

Conversations with friends.

Hot piyaju from a small beachside shop.

Evening snacks at Kumira Bazar.

And finally, the return to the noise of Chittagong.

Maybe that's what made the journey special.

**It wasn't planned.**

It just happened.

And sometimes, the best journeys are exactly like that.

**Akilpur Sea Beach — December 19, 2024.**

No itinerary.

No expectations.

Just friends, a sudden plan, and one beautiful day by the sea.`,
  },
];

export const goals: Goal[] = [
  { title: "Learn Big Data Analytics", progress: 40, category: "Learning" },
  { title: "Build this portfolio", progress: 70, category: "Project" },
  { title: "Build a startup idea", progress: 25, category: "Long-term" },
];
