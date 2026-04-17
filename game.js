'use strict';

// ═══════════════════════════════════════════════════════════
// GAME DATA
// ═══════════════════════════════════════════════════════════
const GAME_DATA = {
  lures: [
    {
      id: 'rapala_magnum', name: 'Rapala Magnum (punainen, valkoinen)',
      icon: '<ellipse cx="14" cy="6" rx="12" ry="4.5" fill="#f0f0f0"/><ellipse cx="13" cy="4.2" rx="11" ry="2.8" fill="#cc1100"/><rect x="1.5" y="8" width="2.5" height="2" fill="#aaa" rx="0.4"/><circle cx="4.5" cy="5.2" r="1.2" fill="white"/><circle cx="4.5" cy="5.2" r="0.6" fill="#111"/><path d="M25,7 Q28,7 28,10" stroke="#888" stroke-width="1" fill="none"/>'
    },
    {
      id: 'strike_pro', name: 'Strike Pro Buster Swim (vihreä, oranssi)',
      icon: '<ellipse cx="11" cy="6" rx="9.5" ry="4.5" fill="#2a6820"/><ellipse cx="11" cy="8" rx="8" ry="2.2" fill="#e06010"/><polygon points="20,2 27,5 27,7 20,10" fill="#1e5018"/><circle cx="3.5" cy="5" r="1.2" fill="white"/><circle cx="3.5" cy="5" r="0.6" fill="#111"/>'
    },
    {
      id: 'kuusamo', name: 'Kuusamo Räsänen (hopea)',
      icon: '<ellipse cx="14" cy="6" rx="12" ry="4.5" fill="#c8c8c8" stroke="#aaa" stroke-width="0.5"/><ellipse cx="12" cy="5" rx="7" ry="2.5" fill="#ebebeb" opacity="0.8"/><path d="M25,6 Q28,6 28,10" stroke="#888" stroke-width="1.2" fill="none"/>'
    },
    {
      id: 'zalt', name: 'Zalt (sininen, hopea)',
      icon: '<ellipse cx="14" cy="6" rx="12" ry="4" fill="#c8d8f0"/><ellipse cx="13" cy="4" rx="11" ry="2.4" fill="#1838b8"/><rect x="1.5" y="7.5" width="2.5" height="2" fill="#aaa" rx="0.4"/><circle cx="4.5" cy="5" r="1.2" fill="white"/><circle cx="4.5" cy="5" r="0.6" fill="#111"/><path d="M25,7 Q28,7 28,10" stroke="#888" stroke-width="1" fill="none"/>'
    },
    {
      id: 'savage_gear', name: 'Savage Gear Da Bush (musta, kulta)',
      icon: '<ellipse cx="14" cy="7" rx="11" ry="4" fill="#181818"/><ellipse cx="13" cy="9" rx="9" ry="2" fill="#b08010"/><circle cx="4" cy="4" r="2.5" fill="#181818"/><circle cx="7.5" cy="2.8" r="2" fill="#181818"/><circle cx="4.5" cy="6.5" r="1" fill="#c89820"/><path d="M25,7 Q29,6 29,10" stroke="#333" stroke-width="1.5" fill="none"/>'
    },
    {
      id: 'bomber', name: 'Bomber Long A Deep (valkoinen)',
      icon: '<ellipse cx="15" cy="6" rx="13" ry="3.5" fill="white" stroke="#ddd" stroke-width="0.5"/><ellipse cx="14" cy="4.5" rx="12" ry="1.8" fill="#90a8c8"/><path d="M2,8 L0,11.5" stroke="#aaa" stroke-width="1.8"/><circle cx="4" cy="5" r="1.2" fill="white"/><circle cx="4" cy="5" r="0.6" fill="#111"/>'
    },
    {
      id: 'calico', name: 'Calico Cat Lippa',
      icon: '<ellipse cx="14" cy="6" rx="12" ry="4.5" fill="#d4a832"/><circle cx="8" cy="6" r="2.2" fill="#7a3808" opacity="0.75"/><circle cx="14" cy="4.8" r="2" fill="#7a3808" opacity="0.75"/><circle cx="19.5" cy="7" r="1.8" fill="#7a3808" opacity="0.75"/><ellipse cx="13" cy="5" rx="8" ry="2.5" fill="#e8c050" opacity="0.35"/><path d="M25,6 Q28,6 28,10" stroke="#888" stroke-width="1.2" fill="none"/>'
    },
    {
      id: 'nils_master', name: 'Nils Master Invindible (Ahven)',
      icon: '<ellipse cx="9.5" cy="6" rx="8.5" ry="4.5" fill="#8ab020"/><ellipse cx="22" cy="6" rx="7" ry="3.5" fill="#7aa018"/><line x1="17.5" y1="2.5" x2="17.5" y2="9.5" stroke="#4a6010" stroke-width="1"/><line x1="7.5" y1="1.5" x2="7.5" y2="10.5" stroke="#304008" stroke-width="1.2"/><line x1="12" y1="1.5" x2="12" y2="10.5" stroke="#304008" stroke-width="1.2"/><ellipse cx="9.5" cy="9.5" rx="6.5" ry="1.5" fill="#e06820"/><circle cx="2.5" cy="5.5" r="1.2" fill="white"/><circle cx="2.5" cy="5.5" r="0.6" fill="#111"/>'
    },
    {
      id: 'shad_rap', name: 'Rapala Shad Rap Deep Runner (muikku)',
      icon: '<ellipse cx="14" cy="6" rx="11" ry="5" fill="#dce8f0"/><ellipse cx="13" cy="3.8" rx="10" ry="2.8" fill="#3050a8"/><rect x="2" y="9.5" width="3" height="2" fill="#aaa" rx="0.4"/><line x1="4" y1="7" x2="22" y2="7" stroke="#8090b8" stroke-width="0.8"/><circle cx="4.5" cy="5" r="1.3" fill="white"/><circle cx="4.5" cy="5" r="0.6" fill="#111"/>'
    },
    {
      id: 'bete', name: 'Bete Krokodil (kupari)',
      icon: '<path d="M2,6 Q5,2 15,2.5 Q23,3 28,6 Q23,9.5 15,9.5 Q5,10 2,6Z" fill="#b87030"/><ellipse cx="14" cy="6" rx="7" ry="2.5" fill="#d89040" opacity="0.55"/><path d="M4,4.5 Q12,2.5 22,3.5" stroke="#e8a860" stroke-width="1" fill="none" opacity="0.7"/><path d="M26,6 Q29,6 29,10" stroke="#888" stroke-width="1.2" fill="none"/>'
    }
  ],
  lureRanks: {
    vastaranta:     { rapala_magnum:7, strike_pro:1, kuusamo:4, zalt:3, savage_gear:8, bomber:9,  calico:6,  nils_master:10, shad_rap:5, bete:2  },
    kulmamummola:   { rapala_magnum:1, strike_pro:9, kuusamo:4, zalt:3, savage_gear:7, bomber:5,  calico:10, nils_master:2,  shad_rap:8, bete:6  },
    takasuora:      { rapala_magnum:5, strike_pro:7, kuusamo:10,zalt:1, savage_gear:2, bomber:8,  calico:6,  nils_master:9,  shad_rap:3, bete:4  },
    kallion_edusta: { rapala_magnum:3, strike_pro:8, kuusamo:4, zalt:6, savage_gear:7, bomber:1,  calico:10, nils_master:5,  shad_rap:2, bete:9  },
    vanha_sauna:    { rapala_magnum:5, strike_pro:8, kuusamo:1, zalt:3, savage_gear:4, bomber:10, calico:2,  nils_master:9,  shad_rap:7, bete:6  }
  },
  sizeClasses: [
    { minRank:1,  maxRank:2,  minCm:111, maxCm:121 },
    { minRank:3,  maxRank:4,  minCm:101, maxCm:111 },
    { minRank:5,  maxRank:6,  minCm:79,  maxCm:101 },
    { minRank:7,  maxRank:8,  minCm:51,  maxCm:79  },
    { minRank:9,  maxRank:10, minCm:25,  maxCm:50  }
  ],
  weatherBonuses: [
    { spotId: null,           bonusCm: 10 },  // räntää anywhere
    { spotId: 'kulmamummola', bonusCm: 20 }   // räntää at kulmamummola (overrides)
  ],
  confettiLevels: [
    { level:1, minCm:100 },
    { level:2, minCm:110 },
    { level:3, minCm:120 }
  ]
};

// ═══════════════════════════════════════════════════════════
// GAME STATE
// ═══════════════════════════════════════════════════════════
let state = {
  biggestPike:  null,
  totalLength:  0,
  boatVisited:  false,
  spots: [
    { id:'vastaranta',     name:'Vastaranta',     done:false, catch:null },
    { id:'kulmamummola',   name:'Kulmamummola',   done:false, catch:null },
    { id:'takasuora',      name:'Takasuora',      done:false, catch:null },
    { id:'kallion_edusta', name:'Kallion edusta',  done:false, catch:null },
    { id:'vanha_sauna',    name:'Vanha sauna',     done:false, catch:null }
  ],
  currentSpot:    null,
  currentWeather: null,
  currentLure:    null,
  castsLeft:      3
};

// ═══════════════════════════════════════════════════════════
// SCREEN MANAGEMENT
// ═══════════════════════════════════════════════════════════
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.add('active');
}

// ═══════════════════════════════════════════════════════════
// START SCREEN
// ═══════════════════════════════════════════════════════════
function startGame() {
  resetState();
  showScreen('map');
  renderMap();
}

function resetState() {
  state.biggestPike = null;
  state.totalLength = 0;
  state.boatVisited = false;
  state.spots.forEach(s => { s.done = false; s.catch = null; });
  state.currentSpot    = null;
  state.currentWeather = null;
  state.currentLure    = null;
  state.castsLeft      = 3;
}

// ═══════════════════════════════════════════════════════════
// MAP SCREEN
// ═══════════════════════════════════════════════════════════
function renderMap() {
  state.spots.forEach(spot => {
    const marker = document.getElementById(`spot-${spot.id}`);
    if (!marker) return;
    const starEl = marker.querySelector('text');
    if (spot.done) {
      marker.classList.add('done');
      starEl.textContent = '✗';
    } else {
      marker.classList.remove('done');
      starEl.textContent = '✙';
    }
  });

  document.getElementById('biggest-pike').textContent =
    state.biggestPike !== null ? `${state.biggestPike} cm` : '— cm';

  document.getElementById('end-overlay').style.display = 'none';

  const boatMarker = document.getElementById('boat-marker');
  if (boatMarker) {
    boatMarker.classList.toggle('visited', state.boatVisited);
  }
}

function clickBoat() {
  if (state.boatVisited) return;
  document.getElementById('boat-overlay').style.display = 'flex';
}

function closeBoatOverlay() {
  state.boatVisited = true;
  document.getElementById('boat-overlay').style.display = 'none';
  renderMap();
}

function selectSpot(spotId) {
  const spot = state.spots.find(s => s.id === spotId);
  if (!spot || spot.done) return;

  state.currentSpot    = spotId;
  state.currentWeather = rollWeather();
  state.castsLeft      = 3;
  state.currentLure    = null;

  showScreen('fishing');
  renderFishingScreen();
}

function rollWeather() {
  const w = ['aurinkoinen', 'pilvinen', 'sateinen', 'räntää'];
  return w[Math.floor(Math.random() * 4)];
}

// ═══════════════════════════════════════════════════════════
// FISHING SCREEN
// ═══════════════════════════════════════════════════════════
const WEATHER_EMOJI = {
  aurinkoinen: '☀️',
  pilvinen:    '⛅',
  sateinen:    '🌧️',
  'räntää':   '🌨️'
};

function renderFishingScreen() {
  const spot = state.spots.find(s => s.id === state.currentSpot);

  document.getElementById('fishing-spot-name').textContent     = spot.name;
  document.getElementById('fishing-weather-emoji').textContent = WEATHER_EMOJI[state.currentWeather];
  document.getElementById('fishing-weather-text').textContent  = state.currentWeather;
  document.getElementById('fishing-lure-name').textContent     = '—';

  updateCastCounter();

  const castBtn = document.getElementById('cast-btn');
  castBtn.disabled      = false;
  castBtn.style.display = 'none';

  document.getElementById('lure-selector').style.display    = 'block';
  document.getElementById('cast-result').style.display      = 'none';
  document.getElementById('back-to-map-btn').style.display  = 'none';
  document.getElementById('water-area').className           = 'water-area';

  renderLureList();
}

function renderLureList() {
  const container = document.getElementById('lure-list');
  container.innerHTML = '';
  GAME_DATA.lures.forEach(lure => {
    const btn = document.createElement('button');
    btn.className = 'lure-btn';
    btn.innerHTML = `<svg class="lure-icon" viewBox="0 0 30 12" width="38" height="15" xmlns="http://www.w3.org/2000/svg">${lure.icon}</svg><span>${lure.name}</span>`;
    btn.onclick   = () => selectLure(lure.id);
    container.appendChild(btn);
  });
}

function selectLure(lureId) {
  state.currentLure = lureId;
  const lure = GAME_DATA.lures.find(l => l.id === lureId);
  document.getElementById('fishing-lure-name').textContent = lure.name;
  document.getElementById('lure-selector').style.display   = 'none';
  document.getElementById('cast-btn').style.display        = 'block';
}

function updateCastCounter() {
  let dots = '';
  for (let i = 0; i < 3; i++) dots += i < state.castsLeft ? '●' : '○';
  document.getElementById('cast-dots').textContent = dots;
}

// ═══════════════════════════════════════════════════════════
// GAME LOGIC
// ═══════════════════════════════════════════════════════════
function calculateCatch() {
  if (Math.random() >= 0.30) return null;  // 70% miss

  const rank      = getLureRank(state.currentSpot, state.currentLure);
  const sizeClass = getSizeClass(rank);
  let   length    = getRandomLength(sizeClass);
  length         += getWeatherBonus(state.currentSpot, state.currentWeather);

  return length;
}

function getLureRank(spotId, lureId) {
  return GAME_DATA.lureRanks[spotId][lureId];
}

function getSizeClass(rank) {
  return GAME_DATA.sizeClasses.find(sc => rank >= sc.minRank && rank <= sc.maxRank);
}

function getRandomLength(sizeClass) {
  return Math.floor(Math.random() * (sizeClass.maxCm - sizeClass.minCm + 1)) + sizeClass.minCm;
}

function getWeatherBonus(spotId, weather) {
  if (weather !== 'räntää') return 0;
  const specific = GAME_DATA.weatherBonuses.find(b => b.spotId === spotId);
  if (specific) return specific.bonusCm;
  const general  = GAME_DATA.weatherBonuses.find(b => b.spotId === null);
  return general ? general.bonusCm : 0;
}

function getConfettiLevel(cm) {
  const sorted = [...GAME_DATA.confettiLevels].sort((a, b) => b.minCm - a.minCm);
  const match  = sorted.find(l => cm >= l.minCm);
  return match ? match.level : 0;
}

// ═══════════════════════════════════════════════════════════
// CAST MECHANIC
// ═══════════════════════════════════════════════════════════
function handleCast() {
  if (state.castsLeft <= 0 || !state.currentLure) return;

  const castBtn   = document.getElementById('cast-btn');
  const waterArea = document.getElementById('water-area');
  castBtn.disabled = true;
  document.getElementById('cast-result').style.display = 'none';

  // Pre-calculate so fish animation can be triggered before result text
  const catchLength = calculateCatch();

  // Phase 1: arc animation (700ms)
  waterArea.className = 'water-area casting';

  setTimeout(() => {
    // Phase 2: splash (400ms)
    waterArea.className = 'water-area splash';

    setTimeout(() => {
      waterArea.className = 'water-area';
      state.castsLeft--;
      updateCastCounter();

      if (catchLength !== null) {
        // Phase 3: fish jump (600ms), then show result
        waterArea.className = 'water-area fish-catch';
        setTimeout(() => {
          waterArea.className = 'water-area';
          displayCatch(catchLength);
          completeSpot(catchLength);
        }, 600);
      } else {
        displayMiss();
        if (state.castsLeft === 0) {
          completeSpot(null);
        } else {
          castBtn.disabled = false;
        }
      }
    }, 400);
  }, 700);
}

// ═══════════════════════════════════════════════════════════
// RESULT DISPLAY
// ═══════════════════════════════════════════════════════════
function displayCatch(length) {
  const isRecord = state.biggestPike === null || length > state.biggestPike;
  const resultEl = document.getElementById('cast-result');
  resultEl.className     = 'cast-result catch';
  resultEl.style.display = 'block';
  resultEl.innerHTML     = `
    <div class="catch-length">⚜ Hauki ${length} cm ⚜</div>
    ${isRecord ? '<div class="new-record">▲ Uusi ennätys!</div>' : ''}
  `;
  const level = getConfettiLevel(length);
  if (level > 0) triggerConfetti(level);
}

function displayMiss() {
  const resultEl = document.getElementById('cast-result');
  resultEl.className     = 'cast-result miss';
  resultEl.style.display = 'block';
  resultEl.innerHTML     = '<div class="miss-text">— ei purtu —</div>';
}

// ═══════════════════════════════════════════════════════════
// CONFETTI
// ═══════════════════════════════════════════════════════════
function triggerConfetti(level) {
  if (level === 1) {
    confetti({ particleCount: 60, spread: 55, origin: { y: 0.7 } });

  } else if (level === 2) {
    confetti({ particleCount: 130, spread: 80, origin: { y: 0.6 } });
    setTimeout(() => confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } }), 300);

  } else if (level === 3) {
    confetti({ particleCount: 200, spread: 160, origin: { y: 0.5 } });
    setTimeout(() => {
      confetti({ particleCount: 150, spread: 120, origin: { x: 0.1, y: 0.5 } });
      confetti({ particleCount: 150, spread: 120, origin: { x: 0.9, y: 0.5 } });
    }, 250);
    document.body.classList.add('flash');
    setTimeout(() => document.body.classList.remove('flash'), 600);
  }
}

// ═══════════════════════════════════════════════════════════
// SPOT COMPLETION
// ═══════════════════════════════════════════════════════════
function completeSpot(catchLength) {
  const spot = state.spots.find(s => s.id === state.currentSpot);
  spot.done  = true;
  spot.catch = catchLength;

  if (catchLength !== null) {
    if (state.biggestPike === null || catchLength > state.biggestPike) {
      state.biggestPike = catchLength;
    }
    state.totalLength += catchLength;
  }

  setTimeout(() => {
    document.getElementById('back-to-map-btn').style.display = 'block';
  }, 1200);
}

function backToMap() {
  showScreen('map');
  renderMap();
  if (state.spots.every(s => s.done)) showEndScreen();
}

// ═══════════════════════════════════════════════════════════
// END SCREEN
// ═══════════════════════════════════════════════════════════
function showEndScreen() {
  document.getElementById('end-biggest').textContent =
    state.biggestPike !== null ? `${state.biggestPike} cm` : '— cm';
  document.getElementById('end-total').textContent =
    state.totalLength > 0 ? `${state.totalLength} cm` : '— cm';

  document.getElementById('end-summary').innerHTML = state.spots.map(spot => `
    <div class="summary-row">
      <span>${spot.name}</span>
      <span>${spot.catch !== null ? spot.catch + ' cm' : 'Ei kalaa'}</span>
    </div>
  `).join('');

  document.getElementById('end-overlay').style.display = 'flex';
}

function restartGame() {
  document.getElementById('end-overlay').style.display = 'none';
  startGame();
}

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => showScreen('start'));
