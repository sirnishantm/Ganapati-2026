/**
 * Pune Ganpati Darshan - Leaflet Map Controller
 * Manages dark map tiles, custom gold/vermillion markers, filter layers, & route lines.
 */

const MapController = {
  map: null,
  markersLayer: null,
  parkingLayer: null,
  routesLayer: null,
  userLocationMarker: null,
  currentFilter: "all",

  init(containerId, options = {}) {
    if (!window.L) {
      console.warn("Leaflet library not loaded yet");
      return;
    }

    const container = document.getElementById(containerId);
    if (!container) return;

    // Destroy existing instance if any
    if (this.map) {
      this.map.remove();
      this.map = null;
    }

    const defaultCenter = options.center || [18.5155, 73.8545];
    const defaultZoom = options.zoom || 15;

    this.map = L.map(containerId, {
      center: defaultCenter,
      zoom: defaultZoom,
      zoomControl: false,
      attributionControl: false
    });

    // Add Zoom control in top right
    L.control.zoom({ position: "topright" }).addTo(this.map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=YOUR_API_KEY', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);
    this.markersLayer = L.layerGroup().addTo(this.map);
    this.parkingLayer = L.layerGroup().addTo(this.map);
    this.routesLayer = L.layerGroup().addTo(this.map);

    this.renderMandals(this.currentFilter);

    if (options.showParking) {
      this.renderParkingMarkers();
    }
  },

  renderMandals(filter = "all") {
    if (!this.markersLayer) return;
    this.markersLayer.clearLayers();
    this.currentFilter = filter;

    const mandals = window.MANDALS_DATA || [];
    const filtered = mandals.filter(m => {
      if (filter === "all") return true;
      if (filter === "maanache" || filter === "manache") return m.category === "maanache";
      if (filter === "famous") return m.category === "famous";
      if (filter === "historic") return m.category === "historic";
      if (filter === "temple") return m.isTemple;
      return true;
    });

    filtered.forEach(mandal => {
      const isManache = mandal.category === "maanache";
      const iconHtml = `
        <div class="mandal-marker-pin ${isManache ? 'manache' : mandal.isTemple ? 'temple' : 'famous'}" title="${mandal.name}">
          ${isManache && mandal.manacheRank ? `<span class="mandal-marker-rank">${mandal.manacheRank}</span>` : `
            <svg viewBox="0 0 100 100" style="width:16px;height:16px;fill:currentColor">
              <use href="#pg-ganpati"></use>
            </svg>
          `}
        </div>
      `;

      const customIcon = L.divIcon({
        html: iconHtml,
        className: "custom-leaflet-div-icon",
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker([mandal.location.lat, mandal.location.lng], { icon: customIcon });
      marker.on("click", () => {
        this.showMandalBottomSheet(mandal);
      });
      this.markersLayer.addLayer(marker);
    });
  },

  renderParkingMarkers() {
    if (!this.parkingLayer) return;
    this.parkingLayer.clearLayers();

    const lots = window.PARKING_DATA?.parkingLots || [];
    lots.forEach(lot => {
      const iconHtml = `
        <div class="mandal-marker-pin parking" title="${lot.name}">
          <span style="font-weight:900;font-size:13px;">P</span>
        </div>
      `;
      const customIcon = L.divIcon({
        html: iconHtml,
        className: "custom-parking-icon",
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });
      const marker = L.marker([lot.lat, lot.lng], { icon: customIcon });
      marker.bindPopup(`
        <div style="background:#1E1813;color:#F5EBE1;padding:8px;border-radius:8px;font-family:sans-serif;">
          <strong style="color:#F0B247">${lot.name}</strong><br>
          <span style="font-size:12px;color:#B3A497">${lot.type} · ${lot.capacity}</span><br>
          <span style="font-size:11px;color:#7D6F63">${lot.landmark}</span>
        </div>
      `);
      this.parkingLayer.addLayer(marker);
    });
  },

  drawRoutePolyline(mandalSlugs) {
    if (!this.routesLayer || !this.map) return;
    this.routesLayer.clearLayers();

    const points = [];
    mandalSlugs.forEach(slug => {
      const mandal = window.MANDALS_DATA.find(m => m.slug === slug);
      if (mandal && mandal.location) {
        points.push([mandal.location.lat, mandal.location.lng]);
      }
    });

    if (points.length < 2) return;

    const polyline = L.polyline(points, {
      color: "#F05A28",
      weight: 4,
      opacity: 0.85,
      dashArray: "6, 8",
      lineJoin: "round"
    });

    this.routesLayer.addLayer(polyline);
    this.map.fitBounds(polyline.getBounds(), { padding: [40, 40] });
  },

  showMandalBottomSheet(mandal) {
    const sheet = document.getElementById("map-preview-sheet");
    if (!sheet) return;

    const wait = window.Store.getMandalLiveWait(mandal);
    sheet.innerHTML = `
      <button type="button" class="sheet-close-btn" onclick="document.getElementById('map-preview-sheet').classList.remove('visible')">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <div style="display:flex;align-items:flex-start;gap:12px;">
        <div style="width:48px;height:48px;border-radius:10px;background:#251B10;border:1px solid #F0B247;display:grid;place-items:center;color:#F0B247;flex-shrink:0;">
          <svg viewBox="0 0 100 100" style="width:28px;height:28px;fill:currentColor"><use href="#pg-ganpati"></use></svg>
        </div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
            ${mandal.manacheRank ? `<span class="badge badge-manache">#${mandal.manacheRank} Manache Paach</span>` : `<span class="badge badge-famous">${mandal.category.toUpperCase()}</span>`}
          </div>
          <h3 style="font-size:15px;font-weight:700;color:var(--chandan);line-height:1.2;">${mandal.name}</h3>
          <p style="font-size:12px;color:var(--muted);">${mandal.nameMr}</p>
          <div style="margin-top:6px;display:flex;align-items:center;gap:8px;font-size:12px;">
            <span class="dot-indicator ${wait.level}"></span>
            <span style="color:var(--zendu);font-weight:700;">${wait.text}</span>
            <span style="color:var(--faint);">· ${mandal.area.name}</span>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:8px;margin-top:14px;">
        <a href="#/ganpati/${mandal.slug}" class="btn btn-primary" style="height:38px;font-size:13px;flex:1;">View Details</a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${mandal.location.lat},${mandal.location.lng}" target="_blank" class="btn btn-secondary" style="height:38px;font-size:13px;padding:0 12px;" title="Directions">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        </a>
      </div>
    `;
    sheet.classList.add("visible");
  }
};

window.MapController = MapController;
