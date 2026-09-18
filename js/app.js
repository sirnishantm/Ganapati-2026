/**
 * Pune Ganpati Darshan 2026 - Main Application Logic & View Renderers
 * Pure Vanilla JS, Zero-Bloat, High-Performance SPA Architecture
 */

document.addEventListener("DOMContentLoaded", () => {
  const router = new window.Router();
  const appRoot = document.getElementById("main-content");

  // Helper: Card HTML for a Mandal
  function getMandalCardHtml(mandal) {
    const isManache = mandal.category === "maanache";
    const isSaved = window.Store.isMandalSaved(mandal.id);
    const wait = window.Store.getMandalLiveWait(mandal);

    return `
      <div class="mandal-card" data-id="${mandal.id}">
        <a href="#/ganpati/${mandal.slug}" style="display:flex;flex-direction:column;flex:1;">
          <div class="mandal-card-artwork">
            <svg viewBox="0 0 100 100" class="mandal-artwork-svg">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="0.8" />
              <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" stroke-width="0.6" />
            </svg>
            <svg viewBox="0 0 100 100" class="mandal-artwork-ganpati">
              <use href="#pg-ganpati"></use>
            </svg>
            <div class="mandal-card-badge-pos">
              ${isManache && mandal.manacheRank
        ? `<span class="badge badge-manache">#${mandal.manacheRank} · Manache</span>`
        : `<span class="badge ${mandal.isTemple ? 'badge-temple' : 'badge-famous'}">${mandal.category.toUpperCase()}</span>`
      }
            </div>
          </div>
          <div class="mandal-card-body">
            <h3 class="mandal-card-name clamp-2">${mandal.name}</h3>
            <p class="mandal-card-name-mr clamp-1">${mandal.nameMr}</p>
            <div class="mandal-card-footer">
              <span class="mandal-peth-tag">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${mandal.area.name}
              </span>
              <span style="color:var(--zendu);font-weight:700;">${wait.minutes}m</span>
            </div>
          </div>
        </a>
      </div>
    `;
  }

  // --- 1. Home View ( / ) ---
  function renderHome() {
    const famousMandals = window.MANDALS_DATA.filter(m => m.prominence >= 700).slice(0, 7);
    const manacheMandals = window.MANDALS_DATA.filter(m => m.category === "maanache").sort((a, b) => a.manacheRank - b.manacheRank);

    appRoot.innerHTML = `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="ambient-glow"></div>
        <div style="position:relative;z-index:2;">
          <div class="festival-pill">
            <span class="pulse-dot"></span>
            <div style="flex:1;min-width:0;">
              <p style="font-size:13px;font-weight:700;color:var(--pital);line-height:1.2;">Ganpati Bappa Morya</p>
              <p style="font-size:11.5px;color:var(--faint);">Day ${window.FESTIVAL_CONFIG.currentDay} of ${window.FESTIVAL_CONFIG.totalDays} · Pune Peths</p>
            </div>
            <span lang="mr" style="font-size:13px;font-weight:700;color:var(--zendu);font-family:var(--font-marathi);">गणपती बाप्पा मोरया</span>
          </div>

          <h1 class="hero-title">
            Experience Pune’s
            <span class="hero-gradient-text">Ganpati Darshan</span>
          </h1>
          <p class="hero-subtitle">
            Find mandals near you, see live queue wait reports, and plan a walkable route through the historic peths.
          </p>

          <a href="#/explore?focus=1" class="search-bar-trigger">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon-shendur"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <span>Search Ganpati, mandal or peth…</span>
          </a>

          <div class="btn-group-hero">
            <a href="#/map" class="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
              Open Map
            </a>
            <a href="#/start" class="btn btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
              Build My Route
            </a>
          </div>
        </div>
      </section>

      <!-- Live Crowd Tracker Banner -->
      <section class="live-tracker-box">
        <div class="live-tracker-header">
          <div class="live-tracker-tag">
            <span class="dot-indicator heavy"></span>
            <span>Live Crowd & Queue Tracker</span>
          </div>
          <span style="font-size:11.5px;color:var(--faint);">Updated 2m ago</span>
        </div>
        <div class="live-tracker-list">
          <div class="live-tracker-item">
            <div>
              <p class="live-mandal-name">Shrimant Dagdusheth Halwai</p>
              <p class="live-mandal-peth">Budhwar Peth · Main Temple</p>
            </div>
            <div style="text-align:right;">
              <p class="live-mandal-time">~45–60 min</p>
              <span style="font-size:11px;color:var(--shendur);font-weight:600;">Heavy queue</span>
            </div>
          </div>
          <div class="live-tracker-item">
            <div>
              <p class="live-mandal-name">Shri Kasba Ganpati (#1)</p>
              <p class="live-mandal-peth">Kasba Peth · Gramdaivat</p>
            </div>
            <div style="text-align:right;">
              <p class="live-mandal-time" style="color:var(--zendu);">~15–20 min</p>
              <span style="font-size:11px;color:var(--zendu);font-weight:600;">Moderate queue</span>
            </div>
          </div>
          <div class="live-tracker-item">
            <div>
              <p class="live-mandal-name">Tambdi Jogeshwari & Guruji Talim</p>
              <p class="live-mandal-peth">Budhwar Peth / Laxmi Road</p>
            </div>
            <div style="text-align:right;">
              <p class="live-mandal-time" style="color:var(--hirva);">~8–12 min</p>
              <span style="font-size:11px;color:var(--hirva);font-weight:600;">Fast moving</span>
            </div>
          </div>
        </div>
        <div class="live-tracker-actions">
          <button type="button" class="btn btn-secondary" style="height:36px;font-size:12.5px;padding:0 14px;" onclick="window.openWaitReportModal()">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Report Your Wait Time
          </button>
          <a href="#/map" style="font-size:12.5px;font-weight:700;color:var(--shendur);">View Full Crowd Map →</a>
        </div>
      </section>

      <!-- Curated Routes Rail (Good for right now) -->
      <section style="margin-top:28px;">
        <div class="section-header">
          <div>
            <h2 class="section-title">Good for right now</h2>
            <p class="section-title-mr" lang="mr">दर्शन मार्ग</p>
          </div>
          <a href="#/routes" class="see-all-link">See all <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
        </div>
        <div class="scroll-rail">
          ${window.CURATED_ROUTES.map(route => `
            <a href="#/routes/${route.slug}" class="route-card">
              <h3 class="route-card-title clamp-2">${route.title}</h3>
              <p class="route-card-desc clamp-2">${route.subtitle}</p>
              <div class="route-card-meta">
                <span>${route.stopsCount} stops</span>
                <span>·</span>
                <span class="route-card-duration">${route.totalDuration}</span>
              </div>
            </a>
          `).join("")}
        </div>
      </section>

      <!-- Pune's Most Iconic Rail -->
      <section style="margin-top:28px;">
        <div class="section-header">
          <div>
            <h2 class="section-title">Pune's Most Iconic</h2>
            <p class="section-title-mr" lang="mr">प्रसिद्ध गणपती</p>
          </div>
          <a href="#/explore" class="see-all-link">See all <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
        </div>
        <div class="scroll-rail">
          ${famousMandals.map(m => getMandalCardHtml(m)).join("")}
        </div>
      </section>

      <!-- Parking & Road Closures Card -->
      <section class="feature-banner">
        <div class="feature-icon-circle feature-icon-parking">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path></svg>
        </div>
        <div style="flex:1;min-width:0;">
          <h3 style="font-size:15px;font-weight:700;color:var(--chandan);">Parking & Road Closures</h3>
          <p style="font-size:12.5px;color:var(--muted);margin-top:2px;">
            ${window.PARKING_DATA.totalSpots} places to park and ${window.PARKING_DATA.closedRoadsCount} major roads closed after 17:00 daily as published by Pune City Traffic Police.
          </p>
          <a href="#/parking" style="display:inline-flex;align-items:center;gap:4px;font-size:12.5px;font-weight:700;color:#6C8AB0;margin-top:8px;">
            View Parking Map & Road List →
          </a>
        </div>
      </section>

      <!-- Manache Paach Numbered List -->
      <section style="margin-top:28px;">
        <div class="section-header">
          <div>
            <h2 class="section-title">Manache Paach</h2>
            <p class="section-title-mr" lang="mr">पुण्यातील मानाचे पाच गणपती</p>
          </div>
          <a href="#/routes/dagdusheth-and-manache-paach" class="see-all-link">Walk Route →</a>
        </div>
        <ol class="manache-list">
          ${manacheMandals.map(m => `
            <li>
              <a href="#/ganpati/${m.slug}" class="manache-list-item">
                <span class="manache-rank-circle">${m.manacheRank}</span>
                <div style="flex:1;min-width:0;">
                  <h3 style="font-size:14px;font-weight:700;color:var(--chandan);line-height:1.2;">${m.name}</h3>
                  <p style="font-size:12px;color:var(--muted);" lang="mr">${m.nameMr}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--faint);"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </li>
          `).join("")}
        </ol>
      </section>

      <!-- Explore By Area (Peths) -->
      <section style="margin-top:28px;">
        <div class="section-header">
          <div>
            <h2 class="section-title">Explore by Area</h2>
            <p class="section-title-mr" lang="mr">पेठेनुसार</p>
          </div>
        </div>
        <div class="peth-grid">
          ${window.PETHS_DATA.map(p => `
            <a href="#/area/${p.slug}" class="peth-grid-card">
              <h4 class="peth-grid-name">${p.name}</h4>
              <p class="peth-grid-name-mr" lang="mr">${p.nameMr}</p>
            </a>
          `).join("")}
        </div>
      </section>

      <!-- Build Darshan CTA -->
      <section class="build-darshan-cta">
        <h2 style="font-family:var(--font-display);font-size:1.3rem;font-weight:700;color:var(--chandan);">Build Your Custom Darshan</h2>
        <p style="font-size:13px;color:var(--muted);margin-top:6px;line-height:1.45;">
          Tell us how much time you have and your starting point. We calculate walking time + live queue delays to create an optimized itinerary.
        </p>
        <a href="#/start" class="btn btn-primary" style="margin-top:14px;">
          Build My Route
        </a>
      </section>
    `;
  }

  // --- 2. Explore View ( /explore and /explore?focus=1 ) ---
  function renderExplore(focusSearch = false) {
    appRoot.innerHTML = `
      <div style="padding: 16px 16px 8px;">
        <h1 style="font-family:var(--font-display);font-size:1.6rem;font-weight:700;color:var(--chandan);">
          All Mandals
        </h1>
        <p style="font-size:13px;color:var(--muted);margin-top:2px;">
          Search and filter all ${window.MANDALS_DATA.length} verified mandals across Pune's peths.
        </p>

        <!-- Search Field -->
        <div style="position:relative;margin-top:14px;">
          <input 
            type="search" 
            id="explore-search-input" 
            placeholder="Search by name, Marathi name, peth, or tag…" 
            style="width:100%;height:48px;padding:0 16px 0 42px;border-radius:var(--radius-field);background:var(--dhoop);border:1px solid var(--line-strong);color:var(--chandan);font-size:14px;font-family:inherit;outline:none;"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:absolute;left:14px;top:15px;color:var(--shendur);"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>

        <!-- Sort by Nearest Button -->
        <div style="margin-top:10px;display:flex;align-items:center;gap:8px;">
          <button type="button" id="sort-closest-btn" class="btn btn-secondary" style="height:36px;font-size:12.5px;padding:0 14px;border-radius:var(--radius-pill);border-color:rgba(240,90,40,0.4);color:var(--shendur);">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
            Sort by what’s closest
          </button>
          <span id="location-status-text" style="font-size:11px;color:var(--faint);"></span>
        </div>
      </div>

      <!-- Category Filter Chips -->
      <div class="filter-chips-rail" id="category-filter-chips" style="margin-top:8px;">
        <button type="button" class="chip active" data-filter="all">All (${window.MANDALS_DATA.length})</button>
        <button type="button" class="chip" data-filter="maanache">Manache Paach (5)</button>
        <button type="button" class="chip" data-filter="famous">Famous</button>
        <button type="button" class="chip" data-filter="historic">Historic</button>
        <button type="button" class="chip" data-filter="temple">Temples</button>
      </div>

      <!-- Mandal Grid Container -->
      <div id="explore-mandals-grid" style="display:grid;grid-template-columns:repeat(2, 1fr);gap:12px;padding:12px 16px;">
        <!-- Dynamically rendered -->
      </div>
    `;

    let activeFilter = "all";
    let userCoords = null;

    function renderFilteredMandals() {
      const query = document.getElementById("explore-search-input").value.toLowerCase().trim();
      const grid = document.getElementById("explore-mandals-grid");

      let filtered = window.MANDALS_DATA.filter(m => {
        // Filter by category
        if (activeFilter === "maanache" && m.category !== "maanache") return false;
        if (activeFilter === "famous" && m.category !== "famous") return false;
        if (activeFilter === "historic" && m.category !== "historic") return false;
        if (activeFilter === "temple" && !m.isTemple) return false;

        // Filter by search text
        if (query) {
          const matchName = m.name.toLowerCase().includes(query);
          const matchMr = m.nameMr.toLowerCase().includes(query);
          const matchArea = m.area.name.toLowerCase().includes(query) || m.area.nameMr.includes(query);
          const matchTags = m.tags.some(t => t.toLowerCase().includes(query));
          if (!matchName && !matchMr && !matchArea && !matchTags) return false;
        }
        return true;
      });

      // If user requested distance sorting
      if (userCoords) {
        filtered = filtered.map(m => {
          const dist = window.Store.calculateDistanceKm(userCoords.lat, userCoords.lng, m.location.lat, m.location.lng);
          return { ...m, _dist: dist };
        }).sort((a, b) => a._dist - b._dist);
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div style="grid-column:1/-1;text-align:center;padding:48px 16px;">
            <p style="font-size:16px;font-weight:700;color:var(--chandan);">No mandals found</p>
            <p style="font-size:13px;color:var(--muted);margin-top:4px;">Try searching for "Kasba", "Dagdusheth", or clearing your filters.</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map(m => getMandalCardHtml(m)).join("");
    }

    // Attach listeners
    const searchInput = document.getElementById("explore-search-input");
    searchInput.addEventListener("input", renderFilteredMandals);

    document.querySelectorAll("#category-filter-chips .chip").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("#category-filter-chips .chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        activeFilter = chip.dataset.filter;
        renderFilteredMandals();
      });
    });

    document.getElementById("sort-closest-btn").addEventListener("click", () => {
      const statusText = document.getElementById("location-status-text");
      statusText.innerText = "Finding your location…";
      window.Store.getUserLocation((coords, err) => {
        if (err || !coords) {
          statusText.innerText = "Location unavailable";
          return;
        }
        userCoords = coords;
        statusText.innerText = "Sorted by distance";
        renderFilteredMandals();
      });
    });

    renderFilteredMandals();

    if (focusSearch) {
      setTimeout(() => {
        if (searchInput) {
          searchInput.focus();
          searchInput.style.borderColor = "var(--shendur)";
          searchInput.style.boxShadow = "var(--glow-shendur)";
          setTimeout(() => {
            searchInput.style.borderColor = "var(--line-strong)";
            searchInput.style.boxShadow = "none";
          }, 1500);
        }
      }, 120);
    }
  }

  // --- 3. Map View ( /map ) ---
  function renderMap() {
    appRoot.innerHTML = `
      <div id="map-view-container">
        <div class="map-floating-controls">
          <div class="map-layer-toggles">
            <button type="button" class="map-layer-btn active" data-map-filter="all">All Mandals</button>
            <button type="button" class="map-layer-btn" data-map-filter="maanache">Manache Paach</button>
            <button type="button" class="map-layer-btn" data-map-filter="famous">Famous</button>
            <button type="button" class="map-layer-btn" data-map-filter="temple">Temples</button>
            <button type="button" class="map-layer-btn" id="toggle-parking-layer-btn">Parking Spots (23)</button>
          </div>
        </div>

        <div id="leaflet-map"></div>

        <div id="map-preview-sheet" class="map-preview-sheet"></div>
      </div>
    `;

    setTimeout(() => {
      window.MapController.init("leaflet-map", { showParking: true });

      document.querySelectorAll(".map-layer-btn[data-map-filter]").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".map-layer-btn[data-map-filter]").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          window.MapController.renderMandals(btn.dataset.mapFilter);
        });
      });

      const parkingBtn = document.getElementById("toggle-parking-layer-btn");
      let parkingVisible = true;
      parkingBtn.addEventListener("click", () => {
        parkingVisible = !parkingVisible;
        if (parkingVisible) {
          parkingBtn.classList.add("active");
          window.MapController.renderParkingMarkers();
        } else {
          parkingBtn.classList.remove("active");
          if (window.MapController.parkingLayer) {
            window.MapController.parkingLayer.clearLayers();
          }
        }
      });
    }, 100);
  }

  // --- 4. Mandal Detail View ( /ganpati/:slug ) ---
  function renderMandalDetail(slug) {
    const mandal = window.MANDALS_DATA.find(m => m.slug === slug);
    if (!mandal) {
      appRoot.innerHTML = `
        <div style="text-align:center;padding:60px 16px;">
          <h2 style="font-family:var(--font-display);color:var(--chandan);">Mandal Not Found</h2>
          <p style="color:var(--muted);margin-top:8px;font-size:14px;">The requested Ganpati Mandal could not be located in our directory.</p>
          <a href="#/explore" class="btn btn-primary" style="margin-top:20px;display:inline-flex;">Back to Explore Mandals</a>
        </div>
      `;
      return;
    }

    const isManache = mandal.category === "maanache";
    const isSaved = window.Store.isMandalSaved(mandal.id);
    const wait = window.Store.getMandalLiveWait(mandal);

    // Marathi ordinal for Manache Paach
    const manacheOrdinalsMr = {
      1: "मानाचा पहिला गणपती",
      2: "मानाचा दुसरा गणपती",
      3: "मानाचा तिसरा गणपती",
      4: "मानाचा चौथा गणपती",
      5: "मानाचा पाचवा गणपती"
    };

    // Calculate nearby mandals within ~500m (up to 600m cutoff)
    const nearby = window.MANDALS_DATA
      .filter(m => m.id !== mandal.id)
      .map(m => {
        const distKm = window.Store.calculateDistanceKm(
          mandal.location.lat,
          mandal.location.lng,
          m.location.lat,
          m.location.lng
        );
        return {
          ...m,
          _distKm: distKm,
          _distMeters: Math.round(distKm * 1000),
          _walkMinutes: Math.max(1, Math.round((distKm / 4.5) * 60))
        };
      })
      .filter(m => m._distKm <= 0.6)
      .sort((a, b) => a._distKm - b._distKm)
      .slice(0, 5);

    // Find nearest official parking lot
    let nearestParking = null;
    if (window.PARKING_DATA && window.PARKING_DATA.lots) {
      let minParkDist = Infinity;
      window.PARKING_DATA.lots.forEach(lot => {
        if (lot.location && lot.location.lat) {
          const d = window.Store.calculateDistanceKm(mandal.location.lat, mandal.location.lng, lot.location.lat, lot.location.lng);
          if (d < minParkDist) {
            minParkDist = d;
            nearestParking = { ...lot, _distKm: d, _distMeters: Math.round(d * 1000) };
          }
        }
      });
    }

    appRoot.innerHTML = `
      <!-- Breadcrumb Bar -->
      <nav aria-label="Breadcrumb" style="padding:14px 16px 0;display:flex;align-items:center;gap:6px;font-size:12px;color:var(--faint);flex-wrap:wrap;">
        <a href="#/explore" style="color:var(--shendur);font-weight:600;">Explore</a>
        <span>/</span>
        <a href="#/area/${mandal.area.slug}" style="color:var(--muted);">${mandal.area.name}</a>
        <span>/</span>
        <span style="color:var(--chandan);font-weight:600;" class="clamp-1">${mandal.name}</span>
      </nav>

      <!-- Sacred Artwork Banner -->
      <div style="position:relative;margin:12px 16px 0;border-radius:var(--radius-card);overflow:hidden;background:radial-gradient(120% 100% at 30% 0%, #4a2810 0%, #20160d 60%, var(--dhoop) 100%);aspect-ratio:16/9;display:grid;place-items:center;border:1px solid var(--line-strong);box-shadow:0 8px 30px rgba(0,0,0,0.6);">
        <svg viewBox="0 0 100 100" style="position:absolute;inset:0;width:100%;height:100%;opacity:0.22;color:var(--zendu);">
          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" stroke-width="0.8" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 3" />
          <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="0.4" />
        </svg>
        <svg viewBox="0 0 100 100" style="width:42%;height:42%;color:var(--zendu);opacity:0.9;filter:drop-shadow(0 0 14px rgba(247,168,27,0.45));">
          <use href="#pg-ganpati"></use>
        </svg>

        <!-- Top Status & Ranking Badges -->
        <div style="position:absolute;top:12px;left:12px;right:12px;display:flex;justify-content:space-between;align-items:flex-start;pointer-events:none;">
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            ${isManache && mandal.manacheRank ? `
              <span class="badge badge-manache" style="box-shadow:0 2px 10px rgba(240,178,71,0.35);">
                ★ #${mandal.manacheRank} · Manache Paach
              </span>
            ` : `
              <span class="badge ${mandal.isTemple ? 'badge-temple' : 'badge-famous'}">
                ${mandal.category ? mandal.category.toUpperCase() : 'MANDAL'}
              </span>
            `}
            ${mandal.isTemple ? `<span class="badge badge-temple">Mandir (Temple)</span>` : ''}
          </div>
          ${mandal.establishedYear ? `
            <span class="badge" style="background:rgba(20,16,12,0.85);color:var(--muted);border:1px solid var(--line-strong);font-size:11px;">
              Est. ${mandal.establishedYear}
            </span>
          ` : ''}
        </div>

        <!-- Bottom Pill Overlay -->
        <div style="position:absolute;bottom:12px;left:12px;display:flex;align-items:center;gap:6px;background:rgba(20,16,12,0.78);backdrop-filter:blur(6px);padding:4px 10px;border-radius:20px;border:1px solid rgba(240,178,71,0.25);">
          <span class="dot-indicator ${wait.level}" style="width:8px;height:8px;"></span>
          <span style="font-size:11.5px;font-weight:700;color:var(--chandan);">${wait.minutes}m wait</span>
        </div>
      </div>

      <!-- Detail Info Body -->
      <div style="padding:20px 16px;">
        
        <!-- Titles & Marathi Accent -->
        <div style="display:flex;flex-direction:column;gap:4px;">
          ${isManache && mandal.manacheRank ? `
            <p style="font-size:13px;font-weight:700;color:var(--pital);text-transform:uppercase;letter-spacing:0.05em;" lang="mr">
              ${manacheOrdinalsMr[mandal.manacheRank] || 'मानाचे पाच गणपती'}
            </p>
          ` : ''}
          <h1 style="font-family:var(--font-display);font-size:1.75rem;font-weight:700;color:var(--chandan);line-height:1.2;">
            ${mandal.name}
          </h1>
          <p style="font-family:var(--font-marathi);font-size:1.15rem;color:var(--zendu);margin-top:2px;font-weight:600;" lang="mr">
            ${mandal.nameMr}
          </p>
        </div>

        <!-- Live Queue Status Meter -->
        <div class="surface" style="margin-top:16px;padding:16px;display:flex;align-items:center;justify-content:space-between;gap:12px;border:1px solid var(--line-strong);border-left:4px solid ${wait.level === 'heavy' ? '#E53935' : wait.level === 'moderate' ? 'var(--zendu)' : '#4CAF50'};">
          <div style="display:flex;align-items:center;gap:12px;">
            <span class="dot-indicator ${wait.level}" style="width:14px;height:14px;flex-shrink:0;"></span>
            <div>
              <div style="display:flex;align-items:center;gap:6px;">
                <p style="font-size:14.5px;font-weight:700;color:var(--chandan);">${wait.text}</p>
              </div>
              <p style="font-size:12px;color:var(--faint);margin-top:2px;">
                Peak rush queue up to ~${mandal.peakDarshanMinutes || 30} mins during 7 PM – 11 PM
              </p>
            </div>
          </div>
          <button type="button" class="btn btn-secondary" style="height:36px;font-size:12px;padding:0 12px;white-space:nowrap;" onclick="window.openWaitReportModal('${mandal.id}')">
            Report Wait
          </button>
        </div>

        <!-- Primary Action Buttons Bar -->
        <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;">
          <a href="https://www.google.com/maps/dir/?api=1&destination=${mandal.location.lat},${mandal.location.lng}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex:1;min-width:140px;justify-content:center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            Directions
          </a>
          <button type="button" id="add-to-plan-mandal-btn" class="btn btn-secondary" style="flex:1;min-width:140px;justify-content:center;" title="Add to Active Plan">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            Add to Plan
          </button>
          <button type="button" id="toggle-save-btn" class="btn btn-secondary" style="padding:0 14px;" title="Bookmark Mandal">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" style="color:var(--shendur);"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            ${isSaved ? 'Saved' : 'Save'}
          </button>
          <button type="button" id="share-mandal-btn" class="btn btn-secondary" style="padding:0 12px;" title="Share Mandal">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
          </button>
        </div>

        <!-- Visitor Tips & Practical Advice -->
        ${mandal.visitorTip ? `
          <div style="margin-top:20px;padding:16px;background:rgba(240,178,71,0.08);border-left:3px solid var(--pital);border-radius:0 var(--radius-card) var(--radius-card) 0;border-top:1px solid rgba(240,178,71,0.15);border-right:1px solid rgba(240,178,71,0.15);border-bottom:1px solid rgba(240,178,71,0.15);">
            <div style="display:flex;align-items:center;gap:6px;color:var(--pital);">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;">Visitor Darshan Tip</span>
            </div>
            <p style="font-size:13.5px;color:var(--chandan);margin-top:6px;line-height:1.5;">${mandal.visitorTip}</p>
          </div>
        ` : ''}

        <!-- Devotee Practical Matrix Grid -->
        <div style="margin-top:20px;display:grid;grid-template-columns:repeat(auto-fit, minmax(140px, 1fr));gap:10px;">
          <div class="surface" style="padding:12px 14px;">
            <span style="font-size:11px;color:var(--faint);font-weight:700;text-transform:uppercase;display:block;">Darshan Style</span>
            <p style="font-size:13.5px;font-weight:600;color:var(--chandan);margin-top:2px;text-transform:capitalize;">
              ${mandal.darshanStyle === 'inside' ? 'Mukh & Charan Sparsh' : mandal.darshanStyle || 'Mukh Darshan'}
            </p>
          </div>
          <div class="surface" style="padding:12px 14px;">
            <span style="font-size:11px;color:var(--faint);font-weight:700;text-transform:uppercase;display:block;">Daily Timings</span>
            <p style="font-size:13.5px;font-weight:600;color:var(--chandan);margin-top:2px;">
              ${mandal.timings?.open || '06:00 AM'} – ${mandal.timings?.close || '11:30 PM'}
            </p>
          </div>
          <div class="surface" style="padding:12px 14px;">
            <span style="font-size:11px;color:var(--faint);font-weight:700;text-transform:uppercase;display:block;">Footwear Stand</span>
            <p style="font-size:13.5px;font-weight:600;color:var(--chandan);margin-top:2px;">
              Free Managed Stand
            </p>
          </div>
          <div class="surface" style="padding:12px 14px;">
            <span style="font-size:11px;color:var(--faint);font-weight:700;text-transform:uppercase;display:block;">Best Time Window</span>
            <p style="font-size:13.5px;font-weight:600;color:var(--zendu);margin-top:2px;">
              06:30 AM – 08:30 AM
            </p>
          </div>
        </div>

        <!-- Aarti Schedule (आरती वेळा) -->
        ${mandal.aartiTimings && mandal.aartiTimings.length > 0 ? `
          <div style="margin-top:26px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
              <h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--chandan);">
                Aarti Timings
              </h2>
              <span style="font-family:var(--font-marathi);font-size:13px;color:var(--muted);" lang="mr">आरती वेळापत्रक</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(140px, 1fr));gap:10px;">
              ${mandal.aartiTimings.map(a => `
                <div class="surface" style="padding:12px;border:1px solid var(--line-strong);border-top:2px solid var(--zendu);text-align:center;">
                  <span style="font-size:11px;color:var(--faint);font-weight:700;text-transform:uppercase;letter-spacing:0.04em;">${a.name}</span>
                  <p style="font-size:15px;font-weight:700;color:var(--zendu);margin-top:4px;">${a.time}</p>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ''}

        <!-- Historical Significance & About -->
        <div style="margin-top:26px;">
          <h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--chandan);">
            Historical Significance & About
          </h2>
          <p style="font-size:14px;color:var(--muted);margin-top:10px;line-height:1.65;">
            ${mandal.description}
          </p>
          ${mandal.history ? `
            <div style="margin-top:14px;padding:14px;background:var(--dhoop-2);border-radius:var(--radius-card);border:1px solid var(--line);">
              <h3 style="font-size:13px;font-weight:700;color:var(--chandan);text-transform:uppercase;letter-spacing:0.04em;margin-bottom:6px;">
                Heritage & Legacy
              </h3>
              <p style="font-size:13.5px;color:var(--muted);line-height:1.6;">${mandal.history}</p>
            </div>
          ` : ''}
        </div>

        <!-- Key Information Grid -->
        <div class="surface" style="margin-top:22px;padding:16px;display:grid;grid-template-columns:repeat(2, 1fr);gap:14px;">
          <div>
            <span style="font-size:11px;color:var(--faint);font-weight:700;text-transform:uppercase;">Established</span>
            <p style="font-size:14px;font-weight:600;color:var(--chandan);margin-top:2px;">
              ${mandal.establishedYear || '1890s'} (${2026 - (mandal.establishedYear || 1893)} Years)
            </p>
          </div>
          <div>
            <span style="font-size:11px;color:var(--faint);font-weight:700;text-transform:uppercase;">Peth Area</span>
            <p style="font-size:14px;font-weight:600;color:var(--shendur);margin-top:2px;">
              <a href="#/area/${mandal.area.slug}" style="text-decoration:underline;">${mandal.area.name}</a>
            </p>
          </div>
          <div>
            <span style="font-size:11px;color:var(--faint);font-weight:700;text-transform:uppercase;">Category</span>
            <p style="font-size:14px;font-weight:600;color:var(--chandan);margin-top:2px;text-transform:capitalize;">
              ${isManache ? 'Manache Paach' : mandal.isTemple ? 'Historical Temple' : 'Sarvajanik Mandal'}
            </p>
          </div>
          <div>
            <span style="font-size:11px;color:var(--faint);font-weight:700;text-transform:uppercase;">Verification</span>
            <p style="font-size:14px;font-weight:600;color:#4CAF50;margin-top:2px;">
              ✓ Verified 2026
            </p>
          </div>
        </div>

        <!-- Location Mini-Map & Parking Hint -->
        <div style="margin-top:28px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
            <h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--chandan);">
              Exact Location
            </h2>
            <a href="https://www.google.com/maps/search/?api=1&query=${mandal.location.lat},${mandal.location.lng}" target="_blank" rel="noopener noreferrer" style="font-size:12.5px;color:var(--shendur);font-weight:600;">
              Open in Maps →
            </a>
          </div>
          <div id="mandal-detail-map" style="height:210px;border-radius:var(--radius-card);overflow:hidden;border:1px solid var(--line-strong);position:relative;"></div>
          ${mandal.location?.address ? `
            <p style="font-size:12.5px;color:var(--muted);margin-top:8px;line-height:1.45;display:flex;align-items:flex-start;gap:6px;">
              <span style="color:var(--shendur);flex-shrink:0;">📍</span>
              <span>${mandal.location.address}</span>
            </p>
          ` : ''}

          ${nearestParking ? `
            <div style="margin-top:10px;padding:10px 12px;background:var(--dhoop);border:1px solid var(--line);border-radius:8px;display:flex;align-items:center;justify-content:space-between;gap:8px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:14px;">🅿️</span>
                <div>
                  <p style="font-size:12px;font-weight:700;color:var(--chandan);">${nearestParking.name}</p>
                  <p style="font-size:11px;color:var(--faint);">${nearestParking.type.toUpperCase()} · ~${nearestParking._distMeters}m walk</p>
                </div>
              </div>
              <a href="#/parking" style="font-size:11.5px;color:#6C8AB0;font-weight:600;">All Parking →</a>
            </div>
          ` : ''}
        </div>

        <!-- Nearby Mandals (< 500m) -->
        ${nearby.length > 0 ? `
          <div style="margin-top:32px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
              <div>
                <h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--chandan);">
                  Nearby Mandals (< 500m)
                </h2>
                <p style="font-size:12px;color:var(--muted);" lang="mr">जवळपासचे इतर गणपती</p>
              </div>
              <span style="font-size:12px;color:var(--faint);">${nearby.length} reachable on foot</span>
            </div>
            <div class="scroll-rail" style="padding-left:0;padding-right:0;">
              ${nearby.map(m => `
                <div class="mandal-card" data-id="${m.id}" style="min-width:210px;max-width:230px;">
                  <a href="#/ganpati/${m.slug}" style="display:flex;flex-direction:column;flex:1;">
                    <div class="mandal-card-artwork" style="aspect-ratio:16/9;">
                      <svg viewBox="0 0 100 100" class="mandal-artwork-svg">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="0.8" />
                        <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" stroke-width="0.6" />
                      </svg>
                      <svg viewBox="0 0 100 100" class="mandal-artwork-ganpati">
                        <use href="#pg-ganpati"></use>
                      </svg>
                      <div class="mandal-card-badge-pos">
                        <span class="badge badge-famous" style="background:rgba(20,16,12,0.85);font-size:10px;">
                          📍 ${m._distMeters}m (${m._walkMinutes} min)
                        </span>
                      </div>
                    </div>
                    <div class="mandal-card-body" style="padding:12px;">
                      <h3 class="mandal-card-name clamp-1" style="font-size:13.5px;">${m.name}</h3>
                      <p class="mandal-card-name-mr clamp-1" style="font-size:11.5px;" lang="mr">${m.nameMr}</p>
                      <div class="mandal-card-footer" style="margin-top:8px;">
                        <span class="mandal-peth-tag" style="font-size:11px;">${m.area.name}</span>
                        <span style="color:var(--zendu);font-weight:700;font-size:11.5px;">${m.darshanMinutes || 10}m</span>
                      </div>
                    </div>
                  </a>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    // Bind action listeners
    const saveBtn = document.getElementById("toggle-save-btn");
    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        const isNowSaved = window.Store.toggleSaveMandal(mandal.id);
        renderMandalDetail(slug);
      });
    }

    const planBtn = document.getElementById("add-to-plan-mandal-btn");
    if (planBtn) {
      planBtn.addEventListener("click", () => {
        const currentPlan = window.Store.getActivePlan();
        const existingSlugs = currentPlan.stops.map(s => s.slug);
        if (!existingSlugs.includes(mandal.slug)) {
          existingSlugs.push(mandal.slug);
          window.Store.setPlanFromCustomStops(currentPlan.title, existingSlugs);
        }
        alert(`Added "${mandal.name}" to your active Darshan plan!`);
        router.navigate("/plan");
      });
    }

    const shareBtn = document.getElementById("share-mandal-btn");
    if (shareBtn) {
      shareBtn.addEventListener("click", async () => {
        const shareData = {
          title: `${mandal.name} (${mandal.nameMr}) - Pune Ganpati 2026`,
          text: `Check out live queue times, aarti schedule, and darshan details for ${mandal.name} in ${mandal.area.name}.`,
          url: window.location.href
        };
        if (navigator.share) {
          try {
            await navigator.share(shareData);
          } catch (e) { }
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert("Mandal link copied to clipboard!");
        }
      });
    }

    // Render single mandal mini map with CartoDB dark tiles and custom pin
    setTimeout(() => {
      if (window.L && document.getElementById("mandal-detail-map")) {
        const miniMap = L.map("mandal-detail-map", {
          center: [mandal.location.lat, mandal.location.lng],
          zoom: 16,
          zoomControl: false,
          attributionControl: false
        });
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=YOUR_API_KEY', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20
        }).addTo(map);

        const singleIcon = L.divIcon({
          html: `<div class="mandal-marker-pin ${isManache ? 'manache' : 'famous'}" style="transform:scale(1.15);"><svg viewBox="0 0 100 100" style="width:16px;height:16px;fill:currentColor"><use href="#pg-ganpati"></use></svg></div>`,
          className: "detail-map-pin",
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        });
        L.marker([mandal.location.lat, mandal.location.lng], { icon: singleIcon })
          .addTo(miniMap)
          .bindPopup(`<strong style="color:#F5EBE1;">${mandal.name}</strong><br><span style="color:#F7A81B;">${mandal.nameMr}</span>`)
          .openPopup();
      }
    }, 150);
  }

  // --- 5. Curated Routes View ( /routes ) ---
  function renderRoutes() {
    appRoot.innerHTML = `
      <div style="padding:16px 16px 8px;">
        <h1 style="font-family:var(--font-display);font-size:1.6rem;font-weight:700;color:var(--chandan);">
          Curated Darshan Routes
        </h1>
        <p style="font-size:13px;color:var(--muted);margin-top:2px;">
          Walkable routes designed around Pune’s old peths, accounting for queuing times.
        </p>
      </div>

      <div style="display:flex;flex-direction:column;gap:14px;padding:12px 16px;">
        ${window.CURATED_ROUTES.map(route => `
          <a href="#/routes/${route.slug}" class="surface-interactive" style="background:var(--dhoop);border:1px solid var(--line-strong);border-radius:var(--radius-card);padding:18px;display:flex;flex-direction:column;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
              <h2 style="font-size:16px;font-weight:700;color:var(--chandan);line-height:1.25;">${route.title}</h2>
              <span class="badge badge-famous" style="font-size:11px;">${route.difficulty}</span>
            </div>
            <p style="font-size:13px;color:var(--muted);margin-top:6px;line-height:1.45;">${route.subtitle}</p>
            <div style="display:flex;align-items:center;gap:12px;margin-top:14px;padding-top:12px;border-top:1px solid var(--line);font-size:12px;color:var(--faint);">
              <span>${route.stopsCount} stops</span>
              <span>·</span>
              <span>${route.distanceKm} km walk</span>
              <span>·</span>
              <span style="color:var(--zendu);font-weight:700;">${route.totalDuration}</span>
            </div>
          </a>
        `).join("")}
      </div>
    `;
  }

  // --- 6. Route Detail View ( /routes/:slug ) ---
  function renderRouteDetail(slug) {
    const route = window.CURATED_ROUTES.find(r => r.slug === slug);
    if (!route) {
      appRoot.innerHTML = `<div style="text-align:center;padding:60px 16px;"><h2>Route Not Found</h2></div>`;
      return;
    }

    const stops = route.stopSlugs.map((stopSlug, index) => {
      const mandal = window.MANDALS_DATA.find(m => m.slug === stopSlug);
      return { mandal, note: route.routeNotes[index] || "" };
    });

    // Generate Google Maps walking direction URL with all waypoints
    const coordsList = stops.map(s => s.mandal ? `${s.mandal.location.lat},${s.mandal.location.lng}` : null).filter(Boolean);
    let gmapsUrl = "#";
    if (coordsList.length >= 2) {
      const origin = coordsList[0];
      const dest = coordsList[coordsList.length - 1];
      const waypoints = coordsList.slice(1, -1).join("|");
      gmapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}${waypoints ? '&waypoints=' + encodeURIComponent(waypoints) : ''}&travelmode=walking`;
    }

    appRoot.innerHTML = `
      <div style="padding:16px 16px 8px;">
        <a href="#/routes" style="font-size:12px;font-weight:600;color:var(--shendur);display:inline-flex;align-items:center;gap:4px;margin-bottom:8px;">
          ← Back to Routes
        </a>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
          <span class="badge badge-famous">${route.difficulty}</span>
          <span class="badge badge-historic">${route.tags[0] || 'Walkable'}</span>
        </div>
        <h1 style="font-family:var(--font-display);font-size:1.6rem;font-weight:700;color:var(--chandan);line-height:1.2;">
          ${route.title}
        </h1>
        <p style="font-size:13px;color:var(--muted);margin-top:2px;" lang="mr">${route.titleMr}</p>
        <p style="font-size:13.5px;color:var(--muted);margin-top:6px;line-height:1.5;">${route.description}</p>

        <!-- Route Summary Pill -->
        <div class="surface" style="margin-top:14px;padding:14px;display:flex;justify-content:space-around;text-align:center;">
          <div>
            <span style="font-size:11px;color:var(--faint);text-transform:uppercase;">Stops</span>
            <p style="font-size:15px;font-weight:700;color:var(--chandan);">${route.stopsCount}</p>
          </div>
          <div>
            <span style="font-size:11px;color:var(--faint);text-transform:uppercase;">Walk Time</span>
            <p style="font-size:15px;font-weight:700;color:var(--chandan);">${route.walkTimeMinutes} min</p>
          </div>
          <div>
            <span style="font-size:11px;color:var(--faint);text-transform:uppercase;">Est. Queues</span>
            <p style="font-size:15px;font-weight:700;color:var(--zendu);">${route.queueTimeMinutes} min</p>
          </div>
          <div>
            <span style="font-size:11px;color:var(--faint);text-transform:uppercase;">Total</span>
            <p style="font-size:15px;font-weight:700;color:var(--shendur);">${route.totalDuration.replace('about ', '')}</p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div style="display:flex;gap:10px;margin-top:14px;">
          <button type="button" id="start-this-plan-btn" class="btn btn-primary" style="flex:1;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            Start Route in Plan
          </button>
          <a href="${gmapsUrl}" target="_blank" class="btn btn-secondary" style="padding:0 14px;" title="Open in Google Maps">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
          </a>
        </div>
      </div>

      <!-- Interactive Route Mini-Map -->
      <div style="padding:8px 16px 16px;">
        <div id="route-map-container" style="height:220px;border-radius:var(--radius-card);overflow:hidden;border:1px solid var(--line-strong);position:relative;">
          <div id="route-mini-leaflet" style="width:100%;height:100%;background:#14100C;"></div>
        </div>
      </div>

      <!-- Stop by Stop Walkthrough -->
      <div style="padding:0 16px 16px;">
        <h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--chandan);margin-bottom:14px;">
          Stop by Stop Walkthrough
        </h2>
        <div style="display:flex;flex-direction:column;gap:12px;position:relative;">
          ${stops.map((stop, index) => `
            <div class="surface" style="padding:16px;display:flex;gap:14px;align-items:flex-start;">
              <span class="manache-rank-circle" style="background:var(--shendur);color:#1A0E04;border:none;font-size:13px;width:30px;height:30px;">
                ${index + 1}
              </span>
              <div style="flex:1;min-width:0;">
                <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;">
                  <h3 style="font-size:15px;font-weight:700;color:var(--chandan);">
                    <a href="#/ganpati/${stop.mandal?.slug}">${stop.mandal?.name || 'Mandal'}</a>
                  </h3>
                  <span style="font-size:11.5px;color:var(--zendu);font-weight:700;">~${stop.mandal?.darshanMinutes || 10}m wait</span>
                </div>
                <p style="font-size:12px;color:var(--muted);">${stop.mandal?.nameMr || ''} · ${stop.mandal?.area.name}</p>
                <p style="font-size:13px;color:var(--chandan);margin-top:8px;background:rgba(255,255,255,0.03);padding:8px 10px;border-radius:8px;line-height:1.4;">
                  📍 ${stop.note}
                </p>
                <div style="display:flex;justify-content:flex-end;margin-top:8px;">
                  <a href="https://www.google.com/maps/dir/?api=1&destination=${stop.mandal?.location.lat},${stop.mandal?.location.lng}" target="_blank" style="font-size:12px;color:var(--shendur);font-weight:600;display:inline-flex;align-items:center;gap:4px;">
                    Directions to this stop →
                  </a>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    document.getElementById("start-this-plan-btn").addEventListener("click", () => {
      window.Store.setPlanFromRoute(route.slug);
      router.navigate("/plan");
    });

    // Initialize mini Leaflet map for this route
    setTimeout(() => {
      if (window.L && document.getElementById("route-mini-leaflet")) {
        const miniMap = L.map("route-mini-leaflet", {
          zoomControl: false,
          attributionControl: false
        });
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=YOUR_API_KEY', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20
        }).addTo(map);

        const routePoints = [];
        stops.forEach((s, idx) => {
          if (s.mandal && s.mandal.location) {
            const pt = [s.mandal.location.lat, s.mandal.location.lng];
            routePoints.push(pt);

            const stopIcon = L.divIcon({
              html: `<div style="background:#F05A28;color:#1A0E04;font-weight:800;font-size:11px;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;border:1.5px solid #F5EBE1;box-shadow:0 2px 6px rgba(0,0,0,0.5);">${idx + 1}</div>`,
              className: "mini-route-stop-icon",
              iconSize: [22, 22],
              iconAnchor: [11, 11]
            });
            L.marker(pt, { icon: stopIcon }).addTo(miniMap);
          }
        });

        if (routePoints.length >= 2) {
          const poly = L.polyline(routePoints, { color: "#F7A81B", weight: 3, dashArray: "5, 7", opacity: 0.9 }).addTo(miniMap);
          miniMap.fitBounds(poly.getBounds(), { padding: [25, 25] });
        } else if (routePoints.length === 1) {
          miniMap.setView(routePoints[0], 16);
        }
      }
    }, 150);
  }

  // --- 7. Area / Peth View ( /area/:slug ) ---
  function renderArea(slug) {
    const peth = window.PETHS_DATA.find(p => p.slug === slug);
    const mandalsInArea = window.MANDALS_DATA.filter(m => m.area.slug === slug);

    appRoot.innerHTML = `
      <div style="padding:16px 16px 8px;">
        <a href="#/explore" style="font-size:12px;font-weight:600;color:var(--shendur);display:inline-flex;align-items:center;gap:4px;margin-bottom:8px;">
          ← Back to All Mandals
        </a>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
          <span class="badge badge-historic">${peth ? peth.walkability : 'High Walkability'}</span>
          <span class="badge badge-famous">${mandalsInArea.length} Mandals</span>
        </div>
        <h1 style="font-family:var(--font-display);font-size:1.7rem;font-weight:700;color:var(--chandan);line-height:1.2;">
          ${peth ? peth.name : slug}
        </h1>
        <p style="font-size:14px;color:var(--muted);margin-top:2px;" lang="mr">${peth ? peth.nameMr : ''}</p>
        <p style="font-size:13.5px;color:var(--muted);margin-top:6px;line-height:1.5;">
          ${peth ? peth.description : 'Explore mandals located in this historic peth.'}
        </p>
      </div>

      <!-- Quick Peth Switcher Bar -->
      <div class="filter-chips-rail" style="margin-top:4px;">
        ${window.PETHS_DATA.map(p => `
          <a href="#/area/${p.slug}" class="chip ${p.slug === slug ? 'active' : ''}">
            ${p.name}
          </a>
        `).join("")}
      </div>

      <!-- Area Mandals Grid -->
      <div style="padding:12px 16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <h2 style="font-family:var(--font-display);font-size:1.15rem;font-weight:700;color:var(--chandan);">
            Mandals in ${peth ? peth.name : slug}
          </h2>
          <span style="font-size:12px;color:var(--faint);">${mandalsInArea.length} results</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:12px;">
          ${mandalsInArea.map(m => getMandalCardHtml(m)).join("")}
        </div>
      </div>
    `;
  }

  // --- 8. Route Builder Wizard ( /start ) ---
  function renderStart() {
    let step = 1;
    let selectedHours = "2";
    let selectedPriority = "manache";
    let selectedStartLocation = "kasba";

    function renderWizard() {
      appRoot.innerHTML = `
        <div style="padding:16px 16px 8px;">
          <h1 style="font-family:var(--font-display);font-size:1.6rem;font-weight:700;color:var(--chandan);">
            Build Your Darshan Route
          </h1>
          <p style="font-size:13px;color:var(--muted);margin-top:2px;">
            Step ${step} of 3: Personalized Walkable Plan
          </p>
        </div>

        <div style="padding:12px 16px;">
          ${step === 1 ? `
            <div class="surface" style="padding:20px;">
              <h2 style="font-size:16px;font-weight:700;color:var(--chandan);margin-bottom:12px;">1. How much time do you have?</h2>
              <div style="display:flex;flex-direction:column;gap:10px;">
                <label class="surface" style="display:flex;align-items:center;gap:12px;padding:14px;cursor:pointer;background:${selectedHours === '1' ? 'var(--dhoop-2)' : 'var(--dhoop)'};border-color:${selectedHours === '1' ? 'var(--shendur)' : 'var(--line)'};">
                  <input type="radio" name="hours" value="1" ${selectedHours === '1' ? 'checked' : ''} style="accent-color:var(--shendur);">
                  <div>
                    <strong style="color:var(--chandan);font-size:14px;">1 Hour Express</strong>
                    <p style="font-size:12px;color:var(--muted);">3–4 mandals with minimal queues</p>
                  </div>
                </label>
                <label class="surface" style="display:flex;align-items:center;gap:12px;padding:14px;cursor:pointer;background:${selectedHours === '2' ? 'var(--dhoop-2)' : 'var(--dhoop)'};border-color:${selectedHours === '2' ? 'var(--shendur)' : 'var(--line)'};">
                  <input type="radio" name="hours" value="2" ${selectedHours === '2' ? 'checked' : ''} style="accent-color:var(--shendur);">
                  <div>
                    <strong style="color:var(--chandan);font-size:14px;">2 to 3 Hours (Recommended)</strong>
                    <p style="font-size:12px;color:var(--muted);">Covers Manache Paach or Grand Dekhavas</p>
                  </div>
                </label>
                <label class="surface" style="display:flex;align-items:center;gap:12px;padding:14px;cursor:pointer;background:${selectedHours === '5' ? 'var(--dhoop-2)' : 'var(--dhoop)'};border-color:${selectedHours === '5' ? 'var(--shendur)' : 'var(--line)'};">
                  <input type="radio" name="hours" value="5" ${selectedHours === '5' ? 'checked' : ''} style="accent-color:var(--shendur);">
                  <div>
                    <strong style="color:var(--chandan);font-size:14px;">Half Day / Unhurried (4+ Hours)</strong>
                    <p style="font-size:12px;color:var(--muted);">Comprehensive tour including Dagdusheth & snacks</p>
                  </div>
                </label>
              </div>
            </div>
          ` : step === 2 ? `
            <div class="surface" style="padding:20px;">
              <h2 style="font-size:16px;font-weight:700;color:var(--chandan);margin-bottom:12px;">2. What is your primary focus?</h2>
              <div style="display:flex;flex-direction:column;gap:10px;">
                <label class="surface" style="display:flex;align-items:center;gap:12px;padding:14px;cursor:pointer;background:${selectedPriority === 'manache' ? 'var(--dhoop-2)' : 'var(--dhoop)'};border-color:${selectedPriority === 'manache' ? 'var(--shendur)' : 'var(--line)'};">
                  <input type="radio" name="priority" value="manache" ${selectedPriority === 'manache' ? 'checked' : ''} style="accent-color:var(--shendur);">
                  <div>
                    <strong style="color:var(--chandan);font-size:14px;">The 5 Manache Paach</strong>
                    <p style="font-size:12px;color:var(--muted);">Sacred order from Kasba to Kesariwada</p>
                  </div>
                </label>
                <label class="surface" style="display:flex;align-items:center;gap:12px;padding:14px;cursor:pointer;background:${selectedPriority === 'dekhava' ? 'var(--dhoop-2)' : 'var(--dhoop)'};border-color:${selectedPriority === 'dekhava' ? 'var(--shendur)' : 'var(--line)'};">
                  <input type="radio" name="priority" value="dekhava" ${selectedPriority === 'dekhava' ? 'checked' : ''} style="accent-color:var(--shendur);">
                  <div>
                    <strong style="color:var(--chandan);font-size:14px;">Grand Dekhavas & Illuminations</strong>
                    <p style="font-size:12px;color:var(--muted);">Akhil Mandai, Rajaram Mandal, Dagdusheth</p>
                  </div>
                </label>
                <label class="surface" style="display:flex;align-items:center;gap:12px;padding:14px;cursor:pointer;background:${selectedPriority === 'fast' ? 'var(--dhoop-2)' : 'var(--dhoop)'};border-color:${selectedPriority === 'fast' ? 'var(--shendur)' : 'var(--line)'};">
                  <input type="radio" name="priority" value="fast" ${selectedPriority === 'fast' ? 'checked' : ''} style="accent-color:var(--shendur);">
                  <div>
                    <strong style="color:var(--chandan);font-size:14px;">Fastest Moving / Low Queues</strong>
                    <p style="font-size:12px;color:var(--muted);">Skip long lines, maximum mandals visited</p>
                  </div>
                </label>
              </div>
            </div>
          ` : `
            <div class="surface" style="padding:20px;">
              <h2 style="font-size:16px;font-weight:700;color:var(--chandan);margin-bottom:12px;">3. Where will you start?</h2>
              <div style="display:flex;flex-direction:column;gap:10px;">
                <label class="surface" style="display:flex;align-items:center;gap:12px;padding:14px;cursor:pointer;background:${selectedStartLocation === 'kasba' ? 'var(--dhoop-2)' : 'var(--dhoop)'};border-color:${selectedStartLocation === 'kasba' ? 'var(--shendur)' : 'var(--line)'};">
                  <input type="radio" name="startLoc" value="kasba" ${selectedStartLocation === 'kasba' ? 'checked' : ''} style="accent-color:var(--shendur);">
                  <div>
                    <strong style="color:var(--chandan);font-size:14px;">Kasba Peth / Shaniwar Wada</strong>
                    <p style="font-size:12px;color:var(--muted);">Ideal for morning visits</p>
                  </div>
                </label>
                <label class="surface" style="display:flex;align-items:center;gap:12px;padding:14px;cursor:pointer;background:${selectedStartLocation === 'mandai' ? 'var(--dhoop-2)' : 'var(--dhoop)'};border-color:${selectedStartLocation === 'mandai' ? 'var(--shendur)' : 'var(--line)'};">
                  <input type="radio" name="startLoc" value="mandai" ${selectedStartLocation === 'mandai' ? 'checked' : ''} style="accent-color:var(--shendur);">
                  <div>
                    <strong style="color:var(--chandan);font-size:14px;">Mandai / Swargate Side</strong>
                    <p style="font-size:12px;color:var(--muted);">Ideal for parking near Sarasbaug/Mandai</p>
                  </div>
                </label>
              </div>
            </div>
          `}

          <div style="display:flex;gap:10px;margin-top:16px;">
            ${step > 1 ? `
              <button type="button" id="prev-step-btn" class="btn btn-secondary" style="flex:1;">Back</button>
            ` : ''}
            <button type="button" id="next-step-btn" class="btn btn-primary" style="flex:1;">
              ${step === 3 ? 'Generate My Plan ✨' : 'Next Step →'}
            </button>
          </div>
        </div>
      `;

      // Attach wizard button events
      if (document.getElementById("prev-step-btn")) {
        document.getElementById("prev-step-btn").addEventListener("click", () => {
          step--;
          renderWizard();
        });
      }

      document.getElementById("next-step-btn").addEventListener("click", () => {
        if (step === 1) {
          const selected = document.querySelector('input[name="hours"]:checked');
          if (selected) selectedHours = selected.value;
          step = 2;
          renderWizard();
        } else if (step === 2) {
          const selected = document.querySelector('input[name="priority"]:checked');
          if (selected) selectedPriority = selected.value;
          step = 3;
          renderWizard();
        } else {
          // Generate customized plan
          let generatedSlugs = [];
          if (selectedHours === "1") {
            generatedSlugs = ["kasba-ganpati", "bhau-rangari-ganpati", "tambdi-jogeshwari", "guruji-talim"];
          } else if (selectedPriority === "dekhava") {
            generatedSlugs = ["akhil-mandai-mandal", "jilbya-maruti-mandal", "tulshibaug-ganpati", "dagdusheth-halwai-ganpati", "chhatrapati-rajaram-mandal"];
          } else {
            generatedSlugs = ["kasba-ganpati", "tambdi-jogeshwari", "guruji-talim", "tulshibaug-ganpati", "dagdusheth-halwai-ganpati", "kesariwada-ganpati"];
          }

          window.Store.setPlanFromCustomStops(`Custom ${selectedHours}h Darshan`, generatedSlugs);
          router.navigate("/plan");
        }
      });
    }

    renderWizard();
  }

  // --- 9. Plan View ( /plan ) ---
  function renderPlan() {
    const plan = window.Store.getActivePlan();
    const completedCount = plan.stops.filter(s => s.completed).length;
    const progressPercent = Math.round((completedCount / plan.stops.length) * 100) || 0;

    appRoot.innerHTML = `
      <div style="padding:16px 16px 8px;">
        <h1 style="font-family:var(--font-display);font-size:1.6rem;font-weight:700;color:var(--chandan);">
          Your Darshan Plan
        </h1>
        <p style="font-size:13px;color:var(--muted);margin-top:2px;">
          ${plan.title} (${completedCount} of ${plan.stops.length} completed)
        </p>

        <!-- Progress Bar -->
        <div style="width:100%;height:8px;background:var(--dhoop-2);border-radius:4px;overflow:hidden;margin-top:12px;">
          <div style="width:${progressPercent}%;height:100%;background:linear-gradient(90deg, var(--zendu), var(--shendur));transition:width 0.3s ease;"></div>
        </div>

        <!-- Multi-stop Google Maps Link -->
        <div style="display:flex;gap:10px;margin-top:14px;">
          <a href="#/start" class="btn btn-secondary" style="height:38px;font-size:12.5px;flex:1;">Change Plan</a>
          <button type="button" id="reset-plan-btn" class="btn btn-secondary" style="height:38px;font-size:12.5px;">Reset</button>
        </div>
      </div>

      <!-- Stops Checklist -->
      <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px;">
        ${plan.stops.map((stop, idx) => `
          <div class="surface" style="padding:14px;display:flex;align-items:center;gap:12px;opacity:${stop.completed ? '0.65' : '1'};border-color:${stop.completed ? 'var(--hirva)' : 'var(--line)'};">
            <button type="button" class="toggle-stop-btn" data-slug="${stop.slug}" style="width:28px;height:28px;border-radius:50%;border:2px solid ${stop.completed ? 'var(--hirva)' : 'var(--line-strong)'};background:${stop.completed ? 'var(--hirva)' : 'none'};color:#1A0E04;display:grid;place-items:center;flex-shrink:0;">
              ${stop.completed ? '✓' : idx + 1}
            </button>
            <div style="flex:1;min-width:0;">
              <h3 style="font-size:14px;font-weight:700;color:var(--chandan);${stop.completed ? 'text-decoration:line-through;' : ''}">
                <a href="#/ganpati/${stop.slug}">${stop.name}</a>
              </h3>
              <p style="font-size:12px;color:var(--muted);">${stop.area}</p>
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(stop.name + ' Pune')}" target="_blank" style="color:var(--shendur);padding:6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
            </a>
          </div>
        `).join("")}
      </div>
    `;

    document.querySelectorAll(".toggle-stop-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        window.Store.togglePlanStopCompleted(btn.dataset.slug);
        renderPlan();
      });
    });

    document.getElementById("reset-plan-btn").addEventListener("click", () => {
      window.Store.resetPlanProgress();
      renderPlan();
    });
  }

  // --- 10. Saved View ( /saved ) ---
  function renderSaved() {
    const savedMandals = window.Store.getSavedMandals();

    appRoot.innerHTML = `
      <div style="padding:16px 16px 8px;">
        <h1 style="font-family:var(--font-display);font-size:1.6rem;font-weight:700;color:var(--chandan);">
          Saved Mandals
        </h1>
        <p style="font-size:13px;color:var(--muted);margin-top:2px;">
          ${savedMandals.length} bookmarked mandals stored on this device.
        </p>
      </div>

      ${savedMandals.length === 0 ? `
        <div style="text-align:center;padding:60px 16px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--faint);margin-bottom:12px;"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          <p style="font-size:15px;font-weight:700;color:var(--chandan);">No saved mandals yet</p>
          <p style="font-size:13px;color:var(--muted);margin-top:4px;">Tap the bookmark icon on any mandal to save it here for offline reference.</p>
          <a href="#/explore" class="btn btn-primary" style="margin-top:16px;">Explore Mandals</a>
        </div>
      ` : `
        <div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:12px;padding:12px 16px;">
          ${savedMandals.map(m => getMandalCardHtml(m)).join("")}
        </div>
      `}
    `;
  }

  // --- 11. Parking & Road Closures View ( /parking ) ---
  function renderParking() {
    appRoot.innerHTML = `
      <div style="padding:16px 16px 8px;">
        <h1 style="font-family:var(--font-display);font-size:1.6rem;font-weight:700;color:var(--chandan);">
          Parking & Road Closures
        </h1>
        <p style="font-size:13px;color:var(--muted);margin-top:2px;">
          ${window.PARKING_DATA.source}. Effective daily from 17:00 (5 PM).
        </p>
      </div>

      <!-- Closed Roads List -->
      <div style="padding:12px 16px;">
        <h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--chandan);margin-bottom:10px;">
          Major Road Closures (After 17:00)
        </h2>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${window.PARKING_DATA.closedRoads.map(road => `
            <div class="surface" style="padding:14px;border-left:3px solid var(--shendur);">
              <div style="display:flex;justify-content:space-between;align-items:baseline;">
                <h3 style="font-size:14px;font-weight:700;color:var(--chandan);">${road.name}</h3>
                <span style="font-size:12px;color:var(--muted);" lang="mr">${road.nameMr}</span>
              </div>
              <p style="font-size:12.5px;color:var(--muted);margin-top:4px;"><strong>Stretch:</strong> ${road.stretch}</p>
              <p style="font-size:12px;color:var(--shendur);margin-top:2px;"><strong>Restriction:</strong> ${road.timing}</p>
              <p style="font-size:12px;color:var(--faint);margin-top:2px;"><strong>Detour:</strong> ${road.detour}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Parking Locations List -->
      <div style="padding:16px;">
        <h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--chandan);margin-bottom:10px;">
          Official Parking Lots (23 Locations)
        </h2>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${window.PARKING_DATA.parkingLots.map(lot => `
            <div class="surface" style="padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                <div>
                  <h3 style="font-size:14px;font-weight:700;color:var(--chandan);">${lot.name}</h3>
                  <p style="font-size:12px;color:var(--muted);">${lot.landmark}</p>
                </div>
                <span class="badge" style="background:rgba(108,138,176,0.15);color:#6C8AB0;border:1px solid rgba(108,138,176,0.4);font-size:11px;">${lot.type}</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding-top:8px;border-top:1px solid var(--line);font-size:12px;">
                <span style="color:var(--faint);">${lot.distanceToPeths}</span>
                <a href="https://www.google.com/maps/dir/?api=1&destination=${lot.lat},${lot.lng}" target="_blank" style="color:var(--shendur);font-weight:700;">Navigate →</a>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  // --- 12. Guides & How-to-use View ( /guides, /how-to-use ) ---
  function renderGuides() {
    appRoot.innerHTML = `
      <div style="padding:16px 16px 8px;">
        <h1 style="font-family:var(--font-display);font-size:1.6rem;font-weight:700;color:var(--chandan);">
          Devotee Guides & Handbook
        </h1>
        <p style="font-size:13px;color:var(--muted);margin-top:2px;">
          Everything you need to navigate Pune Ganeshotsav smoothly.
        </p>
      </div>

      <div style="display:flex;flex-direction:column;gap:14px;padding:12px 16px;">
        ${window.GUIDES_DATA.map(guide => `
          <div class="surface" style="padding:18px;">
            <div style="display:flex;justify-content:space-between;align-items:baseline;">
              <h2 style="font-size:16px;font-weight:700;color:var(--chandan);">${guide.title}</h2>
              <span style="font-size:11.5px;color:var(--faint);">${guide.readTime}</span>
            </div>
            <p style="font-size:13px;color:var(--muted);margin-top:6px;line-height:1.45;">${guide.summary}</p>
            <div style="margin-top:14px;display:flex;flex-direction:column;gap:12px;">
              ${guide.sections.map(sec => `
                <div style="background:rgba(255,255,255,0.02);padding:12px;border-radius:8px;">
                  <h3 style="font-size:13.5px;font-weight:700;color:var(--pital);">${sec.heading}</h3>
                  <p style="font-size:13px;color:var(--chandan);margin-top:4px;white-space:pre-line;line-height:1.5;">${sec.body}</p>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  // --- 13. Marathi Localized Guide ( /how-to-use/marathi ) ---
  function renderHowToUseMarathi() {
    appRoot.innerHTML = `
      <div style="padding:16px 16px 8px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
          <span class="badge badge-famous">मराठी मार्गदर्शिका</span>
          <span class="badge badge-historic">पुणे गणेशोत्सव २०२६</span>
        </div>
        <h1 style="font-family:var(--font-marathi);font-size:1.85rem;font-weight:700;color:var(--chandan);line-height:1.2;">
          पुणे गणेशोत्सव दर्शन मार्गदर्शिका
        </h1>
        <p style="font-size:14px;color:var(--muted);margin-top:4px;" lang="mr">
          ॲपचा वापर कसा करावा, मानाचे पाच गणपतींचा इतिहास, दर्शन मार्ग, गर्दीची वेळ व वाहतूक नियम.
        </p>
      </div>

      <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px;" lang="mr">
        <!-- 1. How to use App -->
        <div class="surface" style="padding:18px;">
          <h2 style="font-size:16px;font-weight:700;color:var(--pital);margin-bottom:10px;">१. हे ॲप कसे वापरावे?</h2>
          <div style="display:flex;flex-direction:column;gap:10px;font-size:13.5px;color:var(--chandan);line-height:1.6;">
            <p>• <strong>दर्शन मार्ग (Routes)</strong>: 'Good for right now' किंवा 'Routes' टॅबमधून ९० मिनिटांचा किंवा मानाचे पाच गणपतींचा मार्ग निवडा.</p>
            <p>• <strong>थेट गर्दीची माहिती (Live Crowd)</strong>: प्रत्येक मंडळाच्या नावासमोर लागणारा सरासरी वेळ (उदा. १५ मिनिटे, ४५ मिनिटे) तपासा आणि स्वतःही वेळ नोंदवून इतर भाविकांना मदत करा.</p>
            <p>• <strong>स्वतःचा दर्शन आराखडा (Build Route)</strong>: 'Build My Route' पर्यायाने तुमच्याकडील वेळेनुसार (१ तास, २ तास, अर्धा दिवस) स्वतःचा सानुकूल मार्ग तयार करा.</p>
            <p>• <strong>तुमचे दर्शन नियोजन (Plan)</strong>: दर्शनास सुरुवात केल्यानंतर ज्या ज्या मंडळांचे दर्शन पूर्ण होईल त्यावर ✓ खूण करून दर्शन नोंद ठेवा.</p>
          </div>
        </div>

        <!-- 2. Manache Paach Order -->
        <div class="surface" style="padding:18px;">
          <h2 style="font-size:16px;font-weight:700;color:var(--pital);margin-bottom:10px;">२. मानाचे पाच गणपतींचा दर्शन क्रम व महत्त्व</h2>
          <ol style="padding-left:20px;font-size:14px;color:var(--chandan);line-height:1.8;">
            <li><strong>श्री कसबा गणपती (मानाचा पहिला)</strong>: पुण्याचे ग्रामदैवत. शिवाजी महाराज व जिजाऊंनी स्थापन केलेले स्थान. विसर्जन मिरवणूक यांच्या रथाने सुरू होते.</li>
            <li><strong>तांबडी जोगेश्वरी गणपती (मानाचा दुसरा)</strong>: पुण्याची ग्रामदेवता. मंदिराशेजारील १३०+ वर्षे जुनी पारंपरिक पितळी त्रिशूल व मातीची मूर्ती.</li>
            <li><strong>गुरुजी तालीम गणपती (मानाचा तिसरा)</strong>: १८८७ मध्ये हिंदू-मुस्लिम कुस्तीगीरांनी स्थापन केलेले राष्ट्रीय एकात्मतेचे प्रतीक.</li>
            <li><strong>तुळशीबाग गणपती (मानाचा चौथा)</strong>: १३ फूट उंच भव्य मूर्ती आणि शेकडो किलो वजनाचे अप्रतिम चांदीचे दागिने.</li>
            <li><strong>केसरीवाडा गणपती (मानाचा पाचवा)</strong>: लोकमान्य बाळ गंगाधर टिळकांची ऐतिहासिक कर्मभूमी व राष्ट्रीय विचारांचे केंद्र.</li>
          </ol>
        </div>

        <!-- 3. Ideal Time to Visit -->
        <div class="surface" style="padding:18px;">
          <h2 style="font-size:16px;font-weight:700;color:var(--pital);margin-bottom:10px;">३. दर्शनासाठी सर्वोत्तम वेळ कोणती?</h2>
          <div style="font-size:13.5px;color:var(--chandan);line-height:1.6;">
            <p>• <strong>सकाळचे सत्र (सकाळी ६:३० ते १०:३०)</strong>: शांत व प्रसन्न दर्शनासाठी सर्वोत्तम. रांगा ७०% लहान असतात आणि मानाचे पाच गणपती अडीच तासांत पायी पूर्ण होतात. ज्येष्ठ नागरिक व कुटुंबासाठी उत्तम.</p>
            <p style="margin-top:8px;">• <strong>रात्रीचे सत्र (संध्याकाळी ७:३० ते मध्यरात्री १:००)</strong>: विद्युत रोषणाई, जिवंत व हलता देखावा (अखिल मंडई, राजाराम मंडळ), आणि ढोल-ताशा पथकांचा उत्साह पाहण्यासाठी सर्वोत्तम.</p>
          </div>
        </div>

        <!-- 4. Traffic Police Parking & Road Closures -->
        <div class="surface" style="padding:18px;">
          <h2 style="font-size:16px;font-weight:700;color:var(--pital);margin-bottom:10px;">४. वाहतूक नियम व २३ अधिकृत वाहनतळ</h2>
          <div style="font-size:13.5px;color:var(--chandan);line-height:1.6;">
            <p>• <strong>रस्ते बंद (संध्याकाळी ५ नंतर)</strong>: लक्ष्मी रस्ता, शिवाजी रस्ता, बाजीराव रस्ता, आणि केळकर रस्त्यावरील मध्यवर्ती भाग केवळ पादचाऱ्यांसाठी खुला असतो.</p>
            <p style="margin-top:8px;">• <strong>प्रमुख वाहनतळ</strong>: नदीपात्र (शनिवारवाडा ते भिडे पूल - ३,००० वाहने), एस. पी. कॉलेज मैदान (२,००० वाहने), सारसबाग मैदान (१,५०० वाहने), व रमणबाग शाळा मैदान.</p>
            <div style="margin-top:10px;">
              <a href="#/parking" class="btn btn-secondary" style="height:36px;font-size:12.5px;border-color:rgba(240,178,71,0.4);color:var(--pital);">
                संपूर्ण वाहनतळ यादी व रस्ते पहा →
              </a>
            </div>
          </div>
        </div>

        <!-- 5. Food Stops -->
        <div class="surface" style="padding:18px;">
          <h2 style="font-size:16px;font-weight:700;color:var(--pital);margin-bottom:10px;">५. पेठांमधील प्रसिद्ध खाद्यसंस्कृती</h2>
          <div style="font-size:13.5px;color:var(--chandan);line-height:1.6;">
            <p>• <strong>चितळे बंधू मिठाईवाले (बाजीराव रस्ता)</strong>: गरमागरम बाकरवडी, आंबा बर्फी व पेढे.</p>
            <p>• <strong>सुजाता मस्तानी (सदाशिव पेठ)</strong>: अस्सल पुणेरी मस्तानी आईस्क्रीम शेक.</p>
            <p>• <strong>बेडेकर टी स्टॉल व मिसळ (नारायण पेठ)</strong>: खास पुणेरी चवीची मिसळ व मसाला चहा.</p>
            <p>• <strong>काटाकिर्र (सदाशिव पेठ / कर्वे रस्ता)</strong>: झणझणीत कोल्हापुरी रस्सा मिसळ.</p>
          </div>
        </div>

        <!-- 6. Emergency & Help -->
        <div class="surface" style="padding:18px;background:rgba(240,90,40,0.06);border-color:rgba(240,90,40,0.3);">
          <h2 style="font-size:16px;font-weight:700;color:var(--shendur);margin-bottom:8px;">६. भाविकांसाठी मदत व आपत्कालीन संपर्क</h2>
          <p style="font-size:13px;color:var(--chandan);line-height:1.5;">
            • <strong>पोलीस नियंत्रण कक्ष</strong>: १०० / ११२<br>
            • <strong>रुग्णवाहिका / प्रथमोपचार</strong>: १०८ (प्रत्येक मोठ्या चौकात तात्पुरती वैद्यकीय मदत छावणी उपलब्ध आहे)<br>
            • <strong>पिण्याचे पाणी</strong>: पेठांमध्ये दर १५० मीटर अंतरावर सेवाभावी संस्थांच्या मोफत पानपोया कार्यरत आहेत.
          </p>
        </div>
      </div>
    `;
  }

  // --- 14. About & Licences ( /about, /licences ) ---
  function renderAbout() {
    appRoot.innerHTML = `
      <div style="padding:16px 16px 8px;">
        <h1 style="font-family:var(--font-display);font-size:1.6rem;font-weight:700;color:var(--chandan);">
          About Pune Ganpati Darshan
        </h1>
        <p style="font-size:13px;color:var(--muted);margin-top:2px;">
          A free, non-commercial public initiative for devotees.
        </p>
      </div>

      <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px;">
        <div class="surface" style="padding:18px;">
          <h2 style="font-size:15px;font-weight:700;color:var(--chandan);margin-bottom:6px;">Our Mission</h2>
          <p style="font-size:13.5px;color:var(--muted);line-height:1.5;">
            Built to help devotees, visitors, and families experience Pune’s historic Sarvajanik Ganeshotsav with ease. We track walking times, queues, traffic restrictions, and cultural histories without ads, fees, or accounts.
          </p>
        </div>

        <div class="surface" style="padding:18px;" id="data">
          <h2 style="font-size:15px;font-weight:700;color:var(--chandan);margin-bottom:6px;">Privacy & Data</h2>
          <p style="font-size:13.5px;color:var(--muted);line-height:1.5;">
            We do not track you. Geolocation is processed strictly on your local device to calculate distances. Saved mandals and custom plans reside inside your browser’s LocalStorage.
          </p>
        </div>

        <div class="surface" style="padding:18px;" id="licences">
          <h2 style="font-size:15px;font-weight:700;color:var(--chandan);margin-bottom:6px;">Data Sources & Credits</h2>
          <p style="font-size:13.5px;color:var(--muted);line-height:1.5;">
            • Map data: © OpenStreetMap contributors.<br>
            • Traffic & Parking: Official notifications from Pune City Traffic Police Department.<br>
            • Mandals data: Verified field surveys and trust documentation.
          </p>
        </div>
      </div>
    `;
  }

  // --- Modal: Wait Time Report Prompt ---
  window.openWaitReportModal = function (mandalId) {
    const defaultMandal = mandalId
      ? window.MANDALS_DATA.find(m => m.id === mandalId)
      : window.MANDALS_DATA[0];

    let modal = document.getElementById("wait-report-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "wait-report-modal";
      modal.className = "modal-backdrop";
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-sheet">
        <h3 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--chandan);">Report Queue Wait Time</h3>
        <p style="font-size:13px;color:var(--muted);margin-top:2px;">Help fellow devotees plan their darshan walk.</p>

        <div style="margin-top:16px;">
          <label style="font-size:12px;font-weight:700;color:var(--faint);text-transform:uppercase;">Select Mandal</label>
          <select id="modal-mandal-select" style="width:100%;height:44px;background:var(--dhoop);border:1px solid var(--line-strong);border-radius:8px;color:var(--chandan);padding:0 12px;margin-top:4px;font-family:inherit;">
            ${window.MANDALS_DATA.map(m => `
              <option value="${m.id}" ${m.id === defaultMandal.id ? 'selected' : ''}>${m.name} (${m.area.name})</option>
            `).join("")}
          </select>
        </div>

        <div style="margin-top:14px;">
          <label style="font-size:12px;font-weight:700;color:var(--faint);text-transform:uppercase;">Estimated Wait Time</label>
          <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:8px;margin-top:6px;">
            <button type="button" class="btn btn-secondary modal-time-opt" data-mins="10" data-level="low" style="height:40px;font-size:13px;">10 mins</button>
            <button type="button" class="btn btn-secondary modal-time-opt" data-mins="30" data-level="moderate" style="height:40px;font-size:13px;">30 mins</button>
            <button type="button" class="btn btn-secondary modal-time-opt" data-mins="60" data-level="heavy" style="height:40px;font-size:13px;">60+ mins</button>
          </div>
        </div>

        <div style="display:flex;gap:10px;margin-top:20px;">
          <button type="button" class="btn btn-secondary" style="flex:1;" onclick="document.getElementById('wait-report-modal').classList.remove('active')">Cancel</button>
          <button type="button" id="submit-wait-report-btn" class="btn btn-primary" style="flex:1;">Submit Report</button>
        </div>
      </div>
    `;

    modal.classList.add("active");

    let selectedMins = 30;
    let selectedLevel = "moderate";

    modal.querySelectorAll(".modal-time-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        modal.querySelectorAll(".modal-time-opt").forEach(b => b.style.borderColor = "var(--line-strong)");
        btn.style.borderColor = "var(--shendur)";
        selectedMins = parseInt(btn.dataset.mins, 10);
        selectedLevel = btn.dataset.level;
      });
    });

    document.getElementById("submit-wait-report-btn").addEventListener("click", () => {
      const selectedId = document.getElementById("modal-mandal-select").value;
      window.Store.submitCrowdReport(selectedId, selectedMins, selectedLevel);
      modal.classList.remove("active");
      alert("Thank you! Your wait time report has been recorded.");
      router.handleRouting();
    });
  };

  // Register All 15 Required Routes
  router
    .on("/", () => renderHome())
    .on("/explore", (_, query) => renderExplore(query.focus === "1"))
    .on("/map", () => renderMap())
    .on("/ganpati/:slug", params => renderMandalDetail(params.slug))
    .on("/routes", () => renderRoutes())
    .on("/routes/:slug", params => renderRouteDetail(params.slug))
    .on("/area/:slug", params => renderArea(params.slug))
    .on("/start", () => renderStart())
    .on("/plan", () => renderPlan())
    .on("/saved", () => renderSaved())
    .on("/parking", () => renderParking())
    .on("/guides", () => renderGuides())
    .on("/how-to-use", () => renderGuides())
    .on("/how-to-use/marathi", () => renderHowToUseMarathi())
    .on("/about", () => renderAbout())
    .on("/licences", () => renderAbout());

  // Initialize Router
  router.start();
});
