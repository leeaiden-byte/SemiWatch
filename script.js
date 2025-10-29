const ARTICLES = [
  { date: "July 18, 2025", title: "2025 global semiconductor industry outlook", url: "https://www.deloitte.com/us/en/insights/industry/technology/technology-media-telecom-outlooks/semiconductor-industry-outlook.html" },
  { date: "February 4, 2025", title: "2025 Global Semiconductor Industry Outlook", url: "https://www.deloitte.com/us/en/Industries/tmt/articles/2025-global-semiconductor-industry-outlook.html" },
  { date: "August 4, 2025", title: "Global Semiconductor Market shows continued growth in Q2 2025", url: "https://www.wsts.org/76/Recent-News-Release" },
  { date: "December 17, 2024", title: "AI fuels 2025 optimism for semiconductor leaders despite geopolitical and talent retention headwinds", url: "https://kpmg.com/us/en/media/news/ai-fuels-2025-optimism-for-semiconductor-leaders-despite-geopolitical-and-talent-retention-headwinds.html" },
  { date: "April 3, 2025", title: "Semiconductor Industry Outlook 2025", url: "https://www.infosys.com/iki/research/semiconductor-industry-outlook2025.html" },
  { date: "September 10, 2025", title: "Semiconductor push: India plans fiscal incentives across 25 categories", url: "https://www.timesofindia.indiatimes.com/business/india-business/semiconductor-push-india-plans-fiscal-incentives-across-25-categories-mandates-to-spur-chip-usage-in-consumer-electronics/articleshow/123803541.cms" },
  { date: "September 11, 2025", title: "Setting goals: Plan in works for pool of 275,000 chip designers by 2032", url: "https://www.economictimes.com/news/india/setting-goals-plan-in-works-for-pool-of-275000-chip-designers-by-2032/articleshow/123814604.cms" },
  { date: "February 12, 2025", title: "US chip toolmaker Lam Research to invest over $1 billion in India", url: "https://www.reuters.com/technology/us-chip-toolmaker-lam-research-invest-over-1-billion-india-2025-02-12/" },
  { date: "February 25, 2025", title: "Huawei improves AI chip production in boost for China's tech goals", url: "https://www.ft.com/content/f46b7f6d-62ed-4b64-8ad7-2417e5ab34f6" },
  { date: "September 13, 2025", title: "Arm sees growing opportunity in Southeast Asia", url: "https://www.msn.com/en-us/money/news/arm-sees-growing-opportunity-in-southeast-asia/ar-AA1Ma8SB?ocid=finance-verthp-feeds" },
  { date: "September 8, 2025", title: "IQE looking for buyer as it cuts forecasts", url: "https://www.thetimes.com/business-money/technology/article/iqe-looking-for-buyer-as-it-cuts-forecasts-ktt67d26p" },
  { date: "January 7, 2025", title: "Semiconductor Thermal Type Mass Flow Controller Market Report", url: "https://dataintelo.com/report/global-semiconductor-thermal-type-mass-flow-controller-market" },
  { date: "July 2, 2025", title: "Opportunities in networking optics: Boosting supply for data centers", url: "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/opportunities-in-networking-optics-boosting-supply-for-data-centers" },
  { date: "May 27, 2025", title: "The effects of tariffs on the semiconductor industry", url: "https://www.mckinsey.com/industries/semiconductors/our-insights/the-effects-of-tariffs-on-the-semiconductor-industry" },
  { date: "April 30, 2025", title: "Silicon squeeze: AI's impact on the semiconductor industry", url: "https://www.mckinsey.com/industries/semiconductors/our-insights/silicon-squeeze-ais-impact-on-the-semiconductor-industry" },
  { date: "April 14, 2025", title: "What is a semiconductor?", url: "https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-a-semiconductor" },
  { date: "June 12, 2024", title: "The global production pattern of the semiconductor industry", url: "https://www.nature.com/articles/s41599-024-03253-5" },
  { date: "May 30, 2023", title: "Mapping the Semiconductor Supply Chain: Indo-Pacific Role", url: "https://www.csis.org/analysis/mapping-semiconductor-supply-chain-critical-role-indo-pacific-region" },
  { date: "May 24, 2025", title: "Gas Flow Meters for Semiconductors: Key Stats & AI Impact", url: "https://www.linkedin.com/pulse/gas-flow-meters-semiconductors-market-key-stats-n24ee/" },
  { date: "September 11, 2025", title: "Top China silicon figure calls on country to stop using Nvidia GPUs for AI - says current AI development model could become 'lethal' if not addressed", url: "https://www.tomshardware.com/tech-industry/artificial-intelligence/top-china-silicon-figure-calls-on-country-to-stop-using-nvidia-gpus-for-ai-says-current-ai-development-model-could-become-lethal-if-not-addressed" }
];

function parseDate(d) { return new Date(d).getTime(); }
function domainFrom(url){ try{return new URL(url).hostname.replace(/^www\./,"");}catch{return"";} }
function logoFor(url){ return `https://logo.clearbit.com/${domainFrom(url)}`; }

let sortDir = "desc";

const searchInput = document.getElementById("search");
const sortArticlesBtn = document.getElementById("sortBtn");
const articleList = document.getElementById("articleList");
const featured = document.getElementById("featured");
const countEl = document.getElementById("count");

function renderArticles(){
  let q = searchInput.value.toLowerCase().trim();
  let list = [...ARTICLES].sort((a,b)=>
    sortDir==="desc" ? parseDate(b.date)-parseDate(a.date) : parseDate(a.date)-parseDate(b.date)
  );
  if(q){
    list = list.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.date.toLowerCase().includes(q) ||
      domainFrom(a.url).includes(q)
    );
  }
  countEl.textContent = `(${list.length})`;

  featured.innerHTML = list.slice(0,4).map(a=>`
    <a class="feature-card" href="${a.url}" target="_blank" rel="noopener">
      <img src="${logoFor(a.url)}" alt="">
      <div class="info">
        <small>${a.date} · ${domainFrom(a.url)}</small>
        <h3>${a.title}</h3>
      </div>
    </a>
  `).join("");

  articleList.innerHTML = list.map(a=>`
    <a class="article-item" href="${a.url}" target="_blank" rel="noopener">
      <img src="${logoFor(a.url)}" alt="">
      <div class="article-info">
        <small>${a.date} · ${domainFrom(a.url)}</small>
        <h4>${a.title}</h4>
      </div>
      <span>↗</span>
    </a>
  `).join("");
}

const SNAP_INDEX_URL = "data/semicap_index.json";
let snapshotSortDesc = true;
let currentSnapshotFile = null;
let currentSnapshot = { refDate: "—", items: [] };

const fmtUsd = n => {
  if (n == null || isNaN(n)) return "—";
  const abs = Math.abs(Number(n));
  if (abs >= 1e12) return `$${(n/1e12).toFixed(2)}T`;
  if (abs >= 1e9)  return `$${(n/1e9).toFixed(2)}B`;
  if (abs >= 1e6)  return `$${(n/1e6).toFixed(2)}M`;
  return `$${Number(n).toLocaleString()}`;
};

async function loadSnapshotList(){
  const res = await fetch(SNAP_INDEX_URL);
  if(!res.ok) throw new Error("Failed to load semicap_index.json");
  const data = await res.json();
  return data.snapshots || [];
}
async function loadSnapshotFile(file){
  const res = await fetch(`data/${file}`);
  if(!res.ok) throw new Error(`Failed to load snapshot: ${file}`);
  return res.json();
}

function renderSnapshotTable(){
  const tbody = document.querySelector("#snapshotTable tbody");
  const dateEl = document.getElementById("snapshotDate");
  dateEl.textContent = currentSnapshot.refDate || "—";

  const list = [...(currentSnapshot.items || [])].sort((a,b)=>
    snapshotSortDesc ? (b.marketCapUSD ?? 0) - (a.marketCapUSD ?? 0)
                      : (a.marketCapUSD ?? 0) - (b.marketCapUSD ?? 0)
  );

  tbody.innerHTML = list.map((row, idx)=>`
    <tr>
      <td>${idx+1}</td>
      <td>${row.name}</td>
      <td>${row.ticker || "—"}</td>
      <td>${row.market || "—"}</td>
      <td class="right">${fmtUsd(row.marketCapUSD)}</td>
      <td>${row.source ? `<a href="${row.source}" target="_blank" rel="noopener">link</a>` : "—"}</td>
    </tr>
  `).join("");
}

function wireSnapshotUI(snapshotList){
  const sel = document.getElementById("snapshotSelect");
  const dl = document.getElementById("downloadSnapshot");
  sel.innerHTML = snapshotList.map(s => `<option value="${s.file}">${s.date}</option>`).join("");
  currentSnapshotFile = snapshotList[0]?.file || null;
  if(currentSnapshotFile) dl.href = `data/${currentSnapshotFile}`;

  sel.addEventListener("change", async (e)=>{
    currentSnapshotFile = e.target.value;
    dl.href = `data/${currentSnapshotFile}`;
    const data = await loadSnapshotFile(currentSnapshotFile);
    currentSnapshot = data;
    renderSnapshotTable();
  });
  sel.dispatchEvent(new Event("change"));
}

document.addEventListener("DOMContentLoaded", async ()=>{
  renderArticles();

  sortArticlesBtn.addEventListener("click", ()=>{
    sortDir = sortDir === "desc" ? "asc" : "desc";
    sortArticlesBtn.textContent = sortDir === "desc"
      ? "Newest → Oldest"
      : "Oldest → Newest";
    renderArticles();
  });

  searchInput.addEventListener("input", renderArticles);

  try {
    const list = await loadSnapshotList();
    if (!list.length) throw new Error("No snapshots found");
    wireSnapshotUI(list);
  } catch (err) {
    console.error(err);
    document.querySelector("#snapshotDate").textContent = "Load error";
  }

  const sortSnapshotBtn = document.getElementById("sortSnapshotBtn");
  sortSnapshotBtn.addEventListener("click", ()=>{
    snapshotSortDesc = !snapshotSortDesc;
    sortSnapshotBtn.textContent = snapshotSortDesc
      ? "Sort: Market Cap ↓"
      : "Sort: Market Cap ↑";
    renderSnapshotTable();
  });
});
