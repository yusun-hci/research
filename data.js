// ============================================================
// PROFILE — the opening bio section
// ============================================================
// - bio: array of paragraphs (each string = one paragraph)
// - contacts: any of { email, scholar, github, cv, website } — omit keys you don't have
const PROFILE = {
  name: "Yu Sun | 孙瑜",
  role: "Doctoral Researcher, HCI|XR|AI — University of St. Gallen",
  bio: [
    "I research immersive technologies — VR and MR — through the lens of lived experience and embodied perception, studying what it means to live across virtual and physical environments as the line between them blurs.",
    "Alongside my PhD, I develop and teach a bachelor-level course on Human–Robot Interaction. After finishing my doctorate, I plan to build a startup around this work."
  ],
  contacts: {
    email: "mailto:yu.sun@unisg.ch",
    scholar: "https://scholar.google.com/citations?user=Y7T5GzwAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/yu-sun-90295b192/",
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
    thumb: "thumbs/example-1.png",
    title: "Example Paper Title Goes Here: Replace With Your Own",
    authors: ["**Yu**", "Coauthor One", "Coauthor Two", "Coauthor Three"],
    venue: "CHI '26",
    tags: ["Immersive Tech", "Embodied Perception"],
    abstract: "Replace this with your real abstract. Two or three sentences summarizing the problem, your approach, and the key finding works well — readers can expand this section to see the full text without it cluttering the main list view.",
    links: { pdf: "#", doi: "#", arxiv: "#" }
  },
  {
    type: "Paper",
    thumb: "thumbs/example-2.png",
    title: "Second Example: Hybrid Living Across Virtual and Physical Environments",
    authors: ["**Yu**", "Coauthor A", "Coauthor B"],
    venue: "CSCW '25",
    tags: ["VR/MR", "Hybrid Living"],
    abstract: "Another placeholder abstract. Swap in your actual text — it can be as long as you like, since it only expands when someone clicks to read it.",
    links: { pdf: "#", doi: "#", video: "#" }
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
