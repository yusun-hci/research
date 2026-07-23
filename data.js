// ============================================================
// PROFILE — the opening bio section
// ============================================================
// - bio: array of paragraphs (each string = one paragraph)
// - contacts: any of { email, scholar, github, cv, website } — omit keys you don't have
const PROFILE = {
  name: "Yu Sun",
  role: "Doctoral Researcher, HCI|XR|AI — University of St. Gallen",
  bio: [
    "I research immersive technologies — VR and MR — through the lens of lived experience and embodied perception, studying what it means to live across virtual and physical environments as the line between them blurs.",
    "Alongside my PhD, I develop and teach a bachelor-level course on Human–Robot Interaction. After finishing my doctorate, I plan to build a startup around this work."
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
    type: "Project",
    thumb: "",
    title: "Example Project: Replace With Your Own Project Name",
    authors: ["**Yu**"],
    venue: "Project",
    tags: ["Prototype", "VR"],
    abstract: "",
    links: { code: "#", demo: "#" }
  },
  {
    type: "Course",
    thumb: "",
    title: "Human–Robot Interaction (Bachelor)",
    authors: ["**Yu**"],
    venue: "Course",
    tags: ["Teaching", "Robotics"],
    abstract: "Bachelor-level course covering the fundamentals of human-robot interaction design, including hands-on labs and a final group project.",
    links: { demo: "#" }
  }
];
