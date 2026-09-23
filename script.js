/* ============================================================
 * 交互脚本：渲染项目与技能、导航状态、滚动动画
 * ============================================================ */

/* ---------- 依据 data.js 渲染项目 ----------
 * featured: true → 通栏大图版式（wide）
 * 其余 → 图左文右版式（split，偶数项图在右） */
function renderProjects() {
  const host = document.getElementById("projects");
  if (!host || typeof PROJECTS === "undefined") return;

  host.innerHTML = PROJECTS.map((p) => {
    const layout = p.featured ? "wide" : "split";
    const body = `
        <div class="project-body">
          <div class="project-tags-row">
            <span class="project-cat">${p.category}</span>${(p.tags || []).map((t) => `<span class="project-tag">${t}</span>`).join("")}
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-intro">${p.intro}</p>
          <div class="project-colophon">
            <span class="col-date"><b>周期</b> · ${p.start ? p.start + " → " : ""}${p.date}</span>
            <span class="col-tech"><b>技术</b> · ${p.tech.join(" / ")}</span>
          </div>
        </div>`;
    const media = p.image
      ? `
        <div class="project-media">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
        </div>`
      : `
        <div class="project-media project-ph" style="--hue:${p.hue ?? 265}">
          <span class="project-ph-name">${p.title}</span>
          <span class="project-ph-hint">项目截图待替换</span>
        </div>`;
    return `<article class="project project--${layout} reveal">${media}${body}</article>`;
  }).join("");
}

/* ---------- 技能方向 ---------- */
function renderSkills() {
  const host = document.getElementById("skills");
  if (!host || typeof SKILLS === "undefined") return;
  host.innerHTML = SKILLS.map(
    (s) => `
      <div class="skill-group">
        <span class="icon">${s.icon || ""}</span>
        <h3>${s.group}</h3>
        <ul>${s.items.map((it) => `<li>${it}</li>`).join("")}</ul>
      </div>`
  ).join("");
}

/* ---------- 联系链接 ---------- */
function renderContact() {
  const host = document.getElementById("contactLinks");
  if (!host || typeof PROFILE === "undefined") return;
  host.innerHTML =
    `<a href="mailto:${PROFILE.email}">${PROFILE.email}</a>` +
    (PROFILE.wechat ? `<a href="#contact" title="微信号：${PROFILE.wechat}">微信 · ${PROFILE.wechat}</a>` : "") +
    PROFILE.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("");
}

renderProjects();
renderSkills();
renderContact();

/* ---------- 导航滚动态 ---------- */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- 深浅色主题切换（选择由 index.html 内联脚本提前应用） ---------- */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});

/* ---------- 移动端菜单 ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
  })
);

/* ---------- 当前章节高亮 ---------- */
const linkMap = {};
navLinks.querySelectorAll("a").forEach((a) => {
  const id = a.getAttribute("href").slice(1);
  if (id) linkMap[id] = a;
});
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      const link = linkMap[e.target.id];
      if (!link) return;
      if (e.isIntersecting) {
        Object.values(linkMap).forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
["works", "about", "contact"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) spy.observe(el);
});

/* ---------- 滚动淡入（一次性） ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
