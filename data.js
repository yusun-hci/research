// ============================================================
// PROFILE — the opening bio section
// ============================================================
// - bio: array of paragraphs (each string = one paragraph)
// - contacts: any of { email, scholar, github, cv, website } — omit keys you don't have
const PROFILE = {
  name: "Yu Sun",
  role: "Doctoral Researcher, HCI, XR, AI — University of St. Gallen",
  bio: [
    "Hi, I'm Yu Sun, a Human–Computer Interaction researcher at the University of St. Gallen in Switzerland. My research explores how virtual and mixed reality can become part of everyday life and how immersive technologies might shape future ways of living between physical and virtual worlds. ", 
    "Previously, I have lived and studied in Germany and China. At my leisure time, I enjoy all possible water sports and am a certified Les Mills trainer"
  ],
  contacts: {
    email: "mailto:yu.sun@unisg.ch",
    scholar: "https://scholar.google.com/citations?user=Y7T5GzwAAAAJ&hl=en",
    github: "https://www.linkedin.com/in/yu-sun-90295b192/",
    cv: "files/CV-Industry-UXR.pdf"
  }
};

// ============================================================
// ENTRIES — one object per paper / project / course
// ============================================================
// - type: used for the filter pills AND the accent color (see TYPE_COLORS in script.js)
// - thumb: path to an image in /thumbs, or "" for a placeholder block
// - authors: wrap your own name in **double asterisks** to bold+underline it
// - abstract: shown collapsed behind a "Read abstract" toggle — leave "" to hide it entirely
// - links: any of { pdf, doi, arxiv, video, code, demo } — omit keys you don't have
const ENTRIES = [
  {
    type: "Paper",
    thumb: "files/AE.jpg",
    title: "Experiencing the World through Imperfect Lenses: An Autoethnography of Living in Mixed Reality",
    authors: ["**Yu Sun**", "Johannes Schöning"],
    venue: "DIS '25",
    tags: ["Mixed Reality", "Autoethnography"],
    abstract: "Mixed reality (MR) technologies are evolving to become more portable, incorporating video see-through capabilities, which enable a shift from stationary to mobile use. This development allows MR headsets to be used in various everyday contexts, including eating, travelling, and exercising. Before MR technologies reshape how we live and seamlessly integrate into our daily activities, we must understand the lived experiences of using MR in our personal lives and their influences and implications on our day-to-day activities. This paper presents an autoethnographic study that adopts an exploratory first-person perspective to uncover challenges and opportunities within this intimate context. We present the experiences and challenges of living in mixed reality, including on-the-go scenarios and social interactions. Our findings reveal issues such as social and ethical concerns and offer lessons learned to inform the design of future interactive systems for mobile mixed reality.",
    links: { pdf: "files/3715336.3735841.pdf", doi: "https://dl.acm.org/doi/full/10.1145/3715336.3735841"}
  },
  {
    type: "Paper",
    thumb: "files/trainvr.jpg",
    title: "TrainCafé: VR Usage on the Go through Virtual Metaphors",
    authors: ["**Yu Sun**", "Adrian Pandjaitan", "Gero Träm"],
    venue: "AlpCHI '26",
    tags: ["Virtual Reality", "Dual Existence", "Virtual Metaphor"],
    abstract: "As virtual reality becomes increasingly embedded in everyday life, users are adopting it in mobile contexts such as travel. However, immersing in VR introduces challenges for navigating the physical world. While video see-through or removing the headset allows access to real-world navigational information, it also breaks immersion. We present TrainCafé, a prototype that employs virtual metaphors aligned with a real train environment to convey spatial information without disrupting immersive experiences. In an empirical study with 18 participants, our design enabled users to navigate the physical space while remaining fully immersed in VR, while also enhancing engagement and enjoyment. We thus contribute a reality-aware system that blends functional navigation cues with engaging narrative design, and discuss its implications for always-on mobile VR that becomes part of our everyday life.",
    links: { pdf: "files/3780045.3780062.pdf", doi: "https://dl.acm.org/doi/10.1145/3780045.3780062", video: "https://youtu.be/8Y8WbaaLfKE" }
  },
  {
    type: "Paper",
    thumb: "files/vrworlds.jpg",
    title: "To Cuddle, Mingle, Venture, or Guide: How Architectural Affordances Influence the Experience of Social VR Places",
    authors: ["Jihae Han", "**Yu Sun**", "Sophia Ppali", "Alexandra Covaci", "Andrew Vande Moere"],
    venue: "DIS '25",
    tags: ["Social VR", "Intense Engagement", "Virtual Worlds", "VRChat"],
    abstract: "Social virtual reality (VR) encompasses a growing network of three-dimensional virtual worlds where users interact in a shared, embodied way. While research has focused on the social interactions between the users themselves, less is known about how the design of virtual spaces influences these interactions. Our study combines interviews with 15 social VR users logging over 1,000 hours and a 20-hour spatial protocol of a purposeful sampling of VR worlds. We analysed how spatial characteristics (including proportion, sightlines, materiality, atmosphere, and navigation) influence meaningful user interaction to turn space into place. We synthesised four place types for a new social VR typology: Cuddle worlds that encourage cosy conversations; Mingle worlds that facilitate new encounters; Venture worlds that promote exploration; and Guided worlds that elicit a sense of belonging with the online community. By relating architectural affordances to social patterns, we contribute insights towards the purposeful design of social VR places.",
    links: { pdf: "files/3715336.3735772.pdf", doi: "https://dl.acm.org/doi/full/10.1145/3715336.3735772" }
  },
  {
    type: "Paper",
    thumb: "files/vrshopping.jpg",
    title: "Designing Grocery Shopping Experiences for Virtual Reality",
    authors: ["**Yu Sun**","Luca Nivini","Gian-Luca Savino","Florian Mathis", "Johannes Schöning"],
    venue: "AVI '24",
    tags: ["Virtual Reality", "Virtual Shopping"],
    abstract: "Online grocery shopping offers time-saving efficiency and convenience, yet many people still prefer physical shopping for trust in food freshness and other sensory experiences. While online stores are evolving to offer new user experiences, such as supporting eco-friendly or ethical shopping, the desktop and mobile platforms limit the engagement of such experiences. Virtual Reality (VR) presents an opportunity to create immersive and rich grocery shopping experiences, closing the gap between the convenience of online shopping and the sensory experience of physical shopping. Yet, designing VR grocery stores remains relatively unexplored. In this paper, we investigate the long-term potential of VR grocery stores, focusing on meeting individual needs. Through a co-design workshop, participants brainstormed the design of product displays, in-shop navigation, shopping carts, social shopping, among others. Based on our findings, we provide design recommendations for future VR grocery shopping to develop meaningful alternatives to existing shopping experiences for groceries. ",
    links: { pdf: "files/3656650.3656685.pdf", doi: "https://dl.acm.org/doi/abs/10.1145/3656650.3656685"}
  },
  {
    type: "Paper",
    thumb: "files/mrtranslate.jpg",
    title: "MRTranslate: Bridging Language Barriers in the Physical World Using a Mixed Reality Point-and-Translate System",
    authors: ["Florian Mathis", "**Yu Sun**","Adrian Preussner"],
    venue: "AVI '24",
    tags: ["Mixed Reality", "Assistive MR Artefacts"],
    abstract: "Language barriers pose significant challenges in our increasingly globalized world, hindering effective communication and access to information. Existing translation tools often disrupt the current activity flow and fail to provide seamless user experiences. In this paper, we contribute the design, implementation, and evaluation of MRTranslate, an assistive Mixed Reality (MR) prototype that enables seamless translations of real-world text. We instructed 12 participants to translate items on a food menu using MRTranslate, which we compared to state-of-the-art translation apps, including Google Translate and Google Lens. Findings from our user study reveal that, when utilising a fully functional implementation of MRTranslate, participants achieved success in up to 91.67% of their translations whilst also enjoying the visual translation of unfamiliar text. Although the current translation apps were well perceived, participants particularly appreciated the convenience of not having to grab a smartphone and manually input the text for translation when using MRTranslate. We believe that MRTranslate, along with the empirical insights we have gained, presents a valuable step towards a future where MR transforms language translation and holds the potential to assist individuals in various day-to-day experiences.",
    links: { pdf: "files/3656650.3656652.pdf", doi: "https://dl.acm.org/doi/abs/10.1145/3656650.3656652"}
  }
];
