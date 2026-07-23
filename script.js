// Accent color per entry type — also drives tag color, links, and the thumbnail
// placeholder gradient. Add a matching entry here if you introduce a new type.
const TYPE_COLORS = {
  Paper: "#6C5CE7",
  Project: "#FF8B5E",
  Course: "#17A398",
  default: "#6C5CE7"
};

const LINK_META = {
  pdf:   { label: "PDF",   icon: "M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm8 0v5h5" },
  doi:   { label: "DOI",   icon: "M8.5 12a3.5 3.5 0 0 1 3.5-3.5h2M15.5 12a3.5 3.5 0 0 1-3.5 3.5h-2M9 12h6" },
  arxiv: { label: "arXiv", icon: "M4 20 12 4l8 16M8 15h8" },
  video: { label: "Video", icon: "M4 6h12v12H4zM16 9l5-3v12l-5-3" },
  code:  { label: "Code",  icon: "M9 8 4 12l5 4M15 8l5 4-5 4" },
  demo:  { label: "Demo",  icon: "M4 4h16v12H4zM9 20h6M12 16v4" }
};

const CONTACT_META = {
  email:   { label: "Email",   icon: "M4 6h16v12H4zM4 6l8 7 8-7" },
  scholar: { label: "Scholar", icon: "M12 3 2 8l10 5 8-4v6M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" },
  github:  { label: "Linkedin",  icon: "M9 19c-4 1.5-4-2-6-2m12 4v-3.2c0-.9.3-1.5.7-1.8-2.5-.3-5.2-1.3-5.2-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3 0 4.3-2.7 5.3-5.2 5.6.4.4.8 1.1.8 2.2V19" },
  cv:      { label: "CV",      icon: "M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm8 0v5h5M8 13h8M8 17h5" },
  website: { label: "Website", icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c2.2 2.4 3.3 5.2 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.2-3.3-9S9.8 5.4 12 3Z" }
};

function iconSvg(path, size = 14) {
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${path}"/></svg>`;
}

function renderProfile(profile) {
  const el = document.getElementById("profile");
  const paragraphs = profile.bio.map(p => `<p class="bio">${p}</p>`).join("");
  const contacts = Object.entries(profile.contacts || {})
    .filter(([, url]) => !!url)
    .map(([key, url]) => {
      const meta = CONTACT_META[key];
      if (!meta) return "";
      return `<a class="contact-link" href="${url}" target="_blank" rel="noopener">${iconSvg(meta.icon, 15)}<span>${meta.label}</span></a>`;
    })
    .join("");

  el.innerHTML = `
    <p class="eyebrow">${profile.role}</p>
    <h1>${profile.name}</h1>
    ${paragraphs}
    <div class="contacts">${contacts}</div>`;
}

function renderAuthors(authors) {
  return authors
    .map(a => {
      const isSelf = a.startsWith("**") && a.endsWith("**");
      const name = isSelf ? a.slice(2, -2) : a;
      return isSelf ? `<span class="self">${name}</span>` : name;
    })
    .join(", ");
}

function renderLinks(links) {
  return Object.entries(links)
    .filter(([, url]) => !!url)
    .map(([key, url]) => {
      const meta = LINK_META[key];
      if (!meta) return "";
      return `<a class="link" href="${url}" target="_blank" rel="noopener">${iconSvg(meta.icon)}<span>${meta.label}</span></a>`;
    })
    .join('<span class="link-sep">·</span>');
}

function renderCard(entry) {
  const color = TYPE_COLORS[entry.type] || TYPE_COLORS.default;
  const thumb = entry.thumb
    ? `<img class="thumb" src="${entry.thumb}" alt="" loading="lazy">`
    : `<div class="thumb thumb-placeholder" aria-hidden="true"></div>`;

  const tags = [entry.venue, ...(entry.tags || [])]
    .map((t, i) => `<span class="tag ${i === 0 ? "tag-venue" : ""}">${t}</span>`)
    .join("");

  const abstract = entry.abstract
    ? `<details class="abstract">
         <summary>Read abstract ${iconSvg("M6 9l6 6 6-6", 13)}</summary>
         <p>${entry.abstract}</p>
       </details>`
    : "";

  return `
    <article class="card" data-type="${entry.type}" style="--accent:${color}">
      ${thumb}
      <div class="card-body">
        <h3 class="title">${entry.title}</h3>
        <p class="authors">${renderAuthors(entry.authors)}</p>
        <div class="tags">${tags}</div>
        ${abstract}
        <div class="links">${renderLinks(entry.links || {})}</div>
      </div>
    </article>`;
}

function renderFilters(types) {
  const el = document.getElementById("filters");
  const all = ["All", ...types];
  el.innerHTML = all
    .map((t, i) => `<button class="pill${i === 0 ? " active" : ""}" data-filter="${t}">${t}</button>`)
    .join("");

  el.addEventListener("click", e => {
    const btn = e.target.closest(".pill");
    if (!btn) return;
    el.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".card").forEach(card => {
      card.style.display = filter === "All" || card.dataset.type === filter ? "" : "none";
    });
  });
}

function init() {
  renderProfile(PROFILE);

  const container = document.getElementById("entries");
  container.innerHTML = ENTRIES.map(renderCard).join("");

  const types = [...new Set(ENTRIES.map(e => e.type))];
  renderFilters(types);
}

init();
