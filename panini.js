import { firebaseConfig, firebaseListPath } from "./firebase-config.js";

const DATA = [
  { name: "Ägypten", flag: "🇪🇬", numbers: ["2", "6", "8", "9", "13", "14", "15", "17", "19", "20"] },
  { name: "Algerien", flag: "🇩🇿", numbers: ["3", "4", "8", "10", "11", "12", "15", "19", "20"] },
  { name: "Argentinien", flag: "🇦🇷", numbers: ["5", "6", "9", "10", "11", "12", "13", "19"] },
  { name: "Australien", flag: "🇦🇺", numbers: ["1", "2", "4", "7", "9", "10", "11", "12", "14", "16", "18", "20"] },
  { name: "Belgien", flag: "🇧🇪", numbers: ["2", "3", "6", "9", "10", "11", "12", "14", "15", "18", "20"] },
  { name: "Bosnien-Herzegowina", flag: "🇧🇦", numbers: ["2", "3", "4", "6", "7", "9", "12", "13", "16", "18", "19", "20"] },
  { name: "Brasilien", flag: "🇧🇷", numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "14", "15", "16", "18", "19", "20"] },
  { name: "Curaçao", flag: "🇨🇼", numbers: ["1", "2", "5", "6", "7", "8", "9", "10", "16", "17", "20"] },
  { name: "Deutschland", flag: "🇩🇪", numbers: ["2", "3", "5", "8", "9", "10", "11", "12", "17"] },
  { name: "DR Kongo", flag: "🇨🇩", numbers: ["2", "3", "5", "6", "10", "11", "13", "14", "15", "16", "17", "19"] },
  { name: "Ecuador", flag: "🇪🇨", numbers: ["1", "2", "4", "6", "7", "8", "9", "10", "12", "13", "15", "16", "17"] },
  { name: "Elfenbeinküste", flag: "🇨🇮", numbers: ["1", "4", "5", "8", "9", "10", "11", "13", "14", "16"] },
  { name: "England", flag: "🏴", numbers: ["1", "2", "3", "4", "6", "7", "8", "9", "14", "15", "17", "18", "20"] },
  { name: "Frankreich", flag: "🇫🇷", numbers: ["1", "3", "4", "7", "9", "10", "11", "13", "16", "17", "19"] },
  { name: "Ghana", flag: "🇬🇭", numbers: ["2", "3", "4", "5", "9", "11", "14", "15", "16", "18", "20"] },
  { name: "Haiti", flag: "🇭🇹", numbers: ["2", "3", "4", "6", "7", "9", "14", "16"] },
  { name: "Irak", flag: "🇮🇶", numbers: ["1", "2", "5", "10", "11", "12", "13", "14", "20"] },
  { name: "Iran", flag: "🇮🇷", numbers: ["1", "8", "9", "11", "12", "14", "16", "18"] },
  { name: "Japan", flag: "🇯🇵", numbers: ["2", "3", "4", "8", "9", "10", "12", "13", "15", "16", "17", "18"] },
  { name: "Jordanien", flag: "🇯🇴", numbers: ["2", "5", "8", "9", "10", "12", "13", "14", "16", "17", "18", "19"] },
  { name: "Kanada", flag: "🇨🇦", numbers: ["1", "2", "3", "4", "5", "6", "7", "9", "10", "11", "13", "15", "18", "19", "20"] },
  { name: "Kap Verde", flag: "🇨🇻", numbers: ["1", "3", "4", "5", "6", "7", "8", "10", "11", "13", "17"] },
  { name: "Katar", flag: "🇶🇦", numbers: ["1", "3", "4", "5", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"] },
  { name: "Kolumbien", flag: "🇨🇴", numbers: ["1", "2", "3", "4", "6", "9", "11", "12", "14", "15", "16", "18", "19", "20"] },
  { name: "Kroatien", flag: "🇭🇷", numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "15", "16", "17", "18"] },
  { name: "Marokko", flag: "🇲🇦", numbers: ["2", "3", "4", "6", "7", "8", "9", "11", "12", "13", "14", "16", "19", "20"] },
  { name: "Mexiko", flag: "🇲🇽", numbers: ["2", "3", "4", "5", "6", "9", "10", "12", "13", "15", "16", "18", "19", "20"] },
  { name: "Neuseeland", flag: "🇳🇿", numbers: ["4", "5", "7", "8", "9", "10", "13", "14", "17", "18", "19", "20"] },
  { name: "Niederlande", flag: "🇳🇱", numbers: ["1", "2", "3", "5", "6", "8", "10", "13", "15", "17", "18", "20"] },
  { name: "Norwegen", flag: "🇳🇴", numbers: ["1", "2", "3", "4", "5", "7", "9", "11", "13", "17", "18"] },
  { name: "Österreich", flag: "🇦🇹", numbers: ["1", "3", "4", "5", "6", "7", "8", "11", "12", "18", "19", "20"] },
  { name: "Panama", flag: "🇵🇦", numbers: ["2", "3", "6", "7", "8", "16", "17", "19"] },
  { name: "Paraguay", flag: "🇵🇾", numbers: ["2", "3", "4", "7", "8", "9", "10", "11", "12", "15", "16", "17", "18", "20"] },
  { name: "Portugal", flag: "🇵🇹", numbers: ["1", "2", "3", "4", "7", "10", "12", "13", "15", "17", "18", "20"] },
  { name: "Saudi-Arabien", flag: "🇸🇦", numbers: ["1", "2", "4", "5", "6", "8", "9", "12", "15", "19", "20"] },
  { name: "Schottland", flag: "🏴", numbers: ["1", "4", "5", "6", "8", "9", "10", "11", "12", "13", "16", "18", "19", "20"] },
  { name: "Schweden", flag: "🇸🇪", numbers: ["1", "2", "3", "4", "6", "7", "8", "9", "10", "12", "13", "16", "17"] },
  { name: "Schweiz", flag: "🇨🇭", numbers: ["1", "2", "7", "8", "9", "11", "12", "13", "14", "15", "17", "18", "20"] },
  { name: "Senegal", flag: "🇸🇳", numbers: ["4", "5", "6", "8", "10", "12", "13", "14", "18", "19"] },
  { name: "Spanien", flag: "🇪🇸", numbers: ["3", "6", "10", "12", "13", "14", "15", "17", "18", "19"] },
  { name: "Südafrika", flag: "🇿🇦", numbers: ["1", "3", "4", "7", "8", "10", "14", "17", "18", "19", "20"] },
  { name: "Südkorea", flag: "🇰🇷", numbers: ["2", "3", "4", "6", "8", "9", "10", "13", "16", "17", "19", "20"] },
  { name: "Tschechien", flag: "🇨🇿", numbers: ["2", "3", "4", "5", "6", "8", "10", "11", "14", "16", "20"] },
  { name: "Tunesien", flag: "🇹🇳", numbers: ["3", "4", "5", "6", "7", "9", "13", "14"] },
  { name: "Türkei", flag: "🇹🇷", numbers: ["1", "2", "3", "8", "9", "10", "15", "17", "18"] },
  { name: "Uruguay", flag: "🇺🇾", numbers: ["1", "3", "4", "5", "13", "14", "16", "17", "18"] },
  { name: "USA", flag: "🇺🇸", numbers: ["1", "3", "4", "6", "7", "8", "9", "10", "11", "14", "15", "19", "20"] },
  { name: "Usbekistan", flag: "🇺🇿", numbers: ["1", "2", "3", "5", "6", "7", "8", "10", "12", "13", "14", "15", "16", "17", "19"] }
];

const SPECIAL_DATA = [
  { name: "Allgemein", flag: "★", numbers: ["00", "FWC 1", "FWC 7", "FWC 8"] },
  { name: "Coca-Cola Legends", flag: "★", numbers: ["CC1", "CC2", "CC3", "CC4", "CC5", "CC6", "CC7", "CC8", "CC9", "CC10", "CC11", "CC12"] },
  { name: "FIFA World Cup History", flag: "★", numbers: ["FWC10", "FWC12", "FWC14", "FWC18"] }
];

const FLAG_CODES = {
  "Ägypten": "eg",
  "Algerien": "dz",
  "Argentinien": "ar",
  "Australien": "au",
  "Belgien": "be",
  "Bosnien-Herzegowina": "ba",
  "Brasilien": "br",
  "Curaçao": "cw",
  "Deutschland": "de",
  "DR Kongo": "cd",
  "Ecuador": "ec",
  "Elfenbeinküste": "ci",
  "England": "gb-eng",
  "Frankreich": "fr",
  "Ghana": "gh",
  "Haiti": "ht",
  "Irak": "iq",
  "Iran": "ir",
  "Japan": "jp",
  "Jordanien": "jo",
  "Kanada": "ca",
  "Kap Verde": "cv",
  "Katar": "qa",
  "Kolumbien": "co",
  "Kroatien": "hr",
  "Marokko": "ma",
  "Mexiko": "mx",
  "Neuseeland": "nz",
  "Niederlande": "nl",
  "Norwegen": "no",
  "Österreich": "at",
  "Panama": "pa",
  "Paraguay": "py",
  "Portugal": "pt",
  "Saudi-Arabien": "sa",
  "Schottland": "gb-sct",
  "Schweden": "se",
  "Schweiz": "ch",
  "Senegal": "sn",
  "Spanien": "es",
  "Südafrika": "za",
  "Südkorea": "kr",
  "Tschechien": "cz",
  "Tunesien": "tn",
  "Türkei": "tr",
  "Uruguay": "uy",
  "USA": "us",
  "Usbekistan": "uz"
};

const storageKey = "panini-fehlliste-v1";
const done = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
const teamList = document.querySelector("#teamList");
const specialList = document.querySelector("#specialList");
const missingTotal = document.querySelector("#missingTotal");
const doneTotal = document.querySelector("#doneTotal");
const syncStatus = document.querySelector("#syncStatus");
const searchInput = document.querySelector("#searchInput");
const showOpenBtn = document.querySelector("#showOpenBtn");
const showDoneBtn = document.querySelector("#showDoneBtn");
const resetBtn = document.querySelector("#resetBtn");
const stickerDialog = document.querySelector("#stickerDialog");
const dialogFlag = document.querySelector("#dialogFlag");
const dialogKind = document.querySelector("#dialogKind");
const dialogName = document.querySelector("#dialogName");
const stickerGrid = document.querySelector("#stickerGrid");
let activeFilter = "open";
let currentGroup = null;
let remoteRef = null;
let suppressRemoteWrite = false;
let remoteSetDoc = null;
let setServerTimestamp = null;
let selectedStickerId = null;

function groupId(group) {
  return group.name.toLocaleLowerCase("de-DE").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function stickerId(group, number) {
  return groupId(group) + "::" + number;
}

function flagMarkup(group) {
  const code = FLAG_CODES[group.name];
  if (!code) return `<span>${group.flag}</span>`;
  return `<img src="https://flagcdn.com/w80/${code}.png" alt="Flagge ${group.name}" loading="lazy"><span>${group.flag}</span>`;
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify([...done]));
}

function isFirebaseConfigured() {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);
}

function setSyncStatus(message) {
  syncStatus.textContent = message;
}

async function syncRemote() {
  if (!remoteRef || suppressRemoteWrite) return;
  setSyncStatus("Wird synchronisiert...");
  try {
    await remoteSetDoc(remoteRef, {
      done: [...done],
      updatedAt: setServerTimestamp()
    }, { merge: true });
    setSyncStatus("Online synchronisiert");
  } catch (error) {
    setSyncStatus("Nicht synchronisiert: " + (error.code || error.message || "lokal gespeichert"));
  }
}

function missingNumbers(group) {
  return group.numbers.filter((number) => !done.has(stickerId(group, number)));
}

function doneNumbers(group) {
  return group.numbers.filter((number) => done.has(stickerId(group, number)));
}

function visibleNumbers(group) {
  return activeFilter === "done" ? doneNumbers(group) : missingNumbers(group);
}

function matchesSearch(group) {
  const query = searchInput.value.trim().toLocaleLowerCase("de-DE");
  if (!query) return true;
  if (group.name.toLocaleLowerCase("de-DE").includes(query)) return true;
  return group.numbers.some((number) => number.toLocaleLowerCase("de-DE").includes(query));
}

function renderGroupList(target, groups, kind) {
  target.innerHTML = "";
  const visibleGroups = groups.filter(matchesSearch).filter((group) => visibleNumbers(group).length > 0);

  if (!visibleGroups.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = activeFilter === "done" ? "Hier ist noch nichts erledigt." : "Keine offenen Sticker gefunden.";
    target.appendChild(empty);
    return;
  }

  visibleGroups.forEach((group) => {
    const count = visibleNumbers(group).length;
    const button = document.createElement("button");
    button.className = "team-card";
    button.type = "button";
    button.innerHTML = `
      <span class="flag">${flagMarkup(group)}</span>
      <span>
        <strong>${group.name}</strong>
        <small>${count} ${activeFilter === "done" ? "erledigt" : "offen"}</small>
      </span>
    `;
    button.addEventListener("click", () => openGroup(group, kind));
    target.appendChild(button);
  });
}

function renderSummary() {
  const all = [...DATA, ...SPECIAL_DATA].flatMap((group) => group.numbers.map((number) => stickerId(group, number)));
  const doneCount = all.filter((id) => done.has(id)).length;
  missingTotal.textContent = all.length - doneCount;
  doneTotal.textContent = doneCount;
}

function render() {
  renderSummary();
  renderGroupList(teamList, DATA, "Land");
  renderGroupList(specialList, SPECIAL_DATA, "Sonderseite");
}

function openGroup(group, kind) {
  currentGroup = group;
  dialogFlag.innerHTML = flagMarkup(group);
  dialogKind.textContent = kind;
  dialogName.textContent = group.name;
  renderStickers();
  stickerDialog.showModal();
}

function renderStickers() {
  stickerGrid.innerHTML = "";
  visibleNumbers(currentGroup).forEach((number) => {
    const id = stickerId(currentGroup, number);
    const item = document.createElement("button");
    item.className = "sticker";
    item.type = "button";
    item.dataset.id = id;
    item.dataset.number = number;
    item.innerHTML = `
      <div class="sticker-face">
        <strong class="sticker-number">${number}</strong>
        <span class="sticker-check" aria-hidden="true">✓</span>
      </div>
    `;
    if (activeFilter === "done") {
      item.classList.add("is-done");
      item.disabled = true;
    } else {
      if (selectedStickerId === id) item.classList.add("is-selected");
      item.setAttribute("aria-label", currentGroup.name + " Sticker " + number + " vormerken. Danach zur Seite wischen.");
      attachStickerGestures(item, number, id);
    }
    stickerGrid.appendChild(item);
  });
}

function attachStickerGestures(item, number, id) {
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let pointerActive = false;
  let didDrag = false;

  item.addEventListener("pointerdown", (event) => {
    if (item.classList.contains("is-claiming")) return;
    pointerActive = true;
    didDrag = false;
    startX = event.clientX;
    startY = event.clientY;
    currentX = 0;
    item.setPointerCapture(event.pointerId);
  });

  item.addEventListener("pointermove", (event) => {
    if (!pointerActive || selectedStickerId !== id) return;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return;
    if (Math.abs(deltaX) <= Math.abs(deltaY)) return;
    didDrag = true;
    currentX = Math.max(-130, Math.min(130, deltaX));
    item.style.transform = "translateX(" + currentX + "px)";
  });

  item.addEventListener("pointerup", () => {
    if (!pointerActive) return;
    pointerActive = false;
    if (selectedStickerId === id && Math.abs(currentX) > 72) {
      confirmSticker(number, item);
      return;
    }
    item.style.transform = "";
    if (!didDrag) toggleStickerSelection(id);
  });

  item.addEventListener("pointercancel", () => {
    pointerActive = false;
    item.style.transform = "";
  });
}

function toggleStickerSelection(id) {
  selectedStickerId = selectedStickerId === id ? null : id;
  renderStickers();
}

function confirmSticker(number, item) {
  item.disabled = true;
  item.classList.add("is-claiming");
  item.style.transform = "";
  window.setTimeout(() => {
    done.add(stickerId(currentGroup, number));
    selectedStickerId = null;
    save();
    render();
    renderStickers();
    syncRemote();
    if (visibleNumbers(currentGroup).length === 0) {
      stickerDialog.close();
    }
  }, 420);
}

function setFilter(filter) {
  activeFilter = filter;
  showOpenBtn.classList.toggle("is-active", filter === "open");
  showDoneBtn.classList.toggle("is-active", filter === "done");
  render();
}

searchInput.addEventListener("input", render);
showOpenBtn.addEventListener("click", () => setFilter("open"));
showDoneBtn.addEventListener("click", () => setFilter("done"));
resetBtn.addEventListener("click", () => {
  if (!confirm("Alle erledigten Sticker wieder als fehlend anzeigen?")) return;
  done.clear();
  save();
  render();
  syncRemote();
});

async function startFirebaseSync() {
  if (!isFirebaseConfigured()) {
    setSyncStatus("Lokal gespeichert - Firebase noch nicht eingerichtet");
    return;
  }

  try {
    const firebaseApp = await import("https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js");
    const firestore = await import("https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js");
    const { initializeApp } = firebaseApp;
    const { getFirestore, doc, onSnapshot, serverTimestamp, setDoc } = firestore;
    remoteSetDoc = setDoc;
    setServerTimestamp = serverTimestamp;
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    remoteRef = doc(db, firebaseListPath.collection, firebaseListPath.document);
    setSyncStatus("Verbindung wird hergestellt...");

    onSnapshot(remoteRef, (snapshot) => {
      const remoteDone = snapshot.exists() ? snapshot.data().done : null;
      if (Array.isArray(remoteDone)) {
        suppressRemoteWrite = true;
        done.clear();
        remoteDone.forEach((id) => done.add(id));
        save();
        render();
        if (currentGroup && stickerDialog.open) renderStickers();
        suppressRemoteWrite = false;
        setSyncStatus("Online synchronisiert");
        return;
      }

      if (done.size > 0) {
        syncRemote();
      } else {
        setSyncStatus("Online bereit");
      }
    }, (error) => {
      setSyncStatus("Nicht synchronisiert: " + (error.code || error.message || "lokal gespeichert"));
    });
  } catch (error) {
    setSyncStatus("Firebase-Fehler: " + (error.code || error.message || "Einrichtung prüfen"));
  }
}

render();
startFirebaseSync();
