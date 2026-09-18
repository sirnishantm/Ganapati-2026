/**
 * Pune Ganpati Darshan - LocalStorage State Management & Geolocation Store
 */

const Store = {
  KEYS: {
    SAVED_MANDALS: "pgd_saved_mandals_v2",
    ACTIVE_PLAN: "pgd_active_plan_v2",
    CROWD_REPORTS: "pgd_crowd_reports_v2",
    USER_LOCATION: "pgd_user_location_v2"
  },

  // --- Saved Bookmarks ---
  getSavedMandalIds() {
    try {
      const data = localStorage.getItem(this.KEYS.SAVED_MANDALS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  isMandalSaved(id) {
    const saved = this.getSavedMandalIds();
    return saved.includes(id);
  },

  toggleSaveMandal(id) {
    let saved = this.getSavedMandalIds();
    const index = saved.indexOf(id);
    let isNowSaved = false;
    if (index > -1) {
      saved.splice(index, 1);
      isNowSaved = false;
    } else {
      saved.push(id);
      isNowSaved = true;
    }
    localStorage.setItem(this.KEYS.SAVED_MANDALS, JSON.stringify(saved));
    window.dispatchEvent(new CustomEvent("pgd:saved-updated", { detail: { id, isNowSaved, saved } }));
    return isNowSaved;
  },

  getSavedMandals() {
    const ids = this.getSavedMandalIds();
    return window.MANDALS_DATA.filter(m => ids.includes(m.id));
  },

  // --- Active Plan / Darshan Tracker ---
  getActivePlan() {
    try {
      const data = localStorage.getItem(this.KEYS.ACTIVE_PLAN);
      if (data) return JSON.parse(data);
    } catch (e) {}

    // Default to the iconic route if none exists
    const defaultRoute = window.CURATED_ROUTES[0];
    const initialPlan = {
      routeSlug: defaultRoute.slug,
      title: defaultRoute.title,
      titleMr: defaultRoute.titleMr,
      stops: defaultRoute.stopSlugs.map((slug, idx) => {
        const mandal = window.MANDALS_DATA.find(m => m.slug === slug);
        return {
          slug,
          id: mandal ? mandal.id : slug,
          name: mandal ? mandal.name : slug,
          nameMr: mandal ? mandal.nameMr : "",
          area: mandal ? mandal.area.name : "",
          completed: false,
          completedAt: null
        };
      }),
      createdAt: new Date().toISOString()
    };
    this.setActivePlan(initialPlan);
    return initialPlan;
  },

  setActivePlan(plan) {
    localStorage.setItem(this.KEYS.ACTIVE_PLAN, JSON.stringify(plan));
    window.dispatchEvent(new CustomEvent("pgd:plan-updated", { detail: plan }));
  },

  setPlanFromRoute(routeSlug) {
    const route = window.CURATED_ROUTES.find(r => r.slug === routeSlug);
    if (!route) return null;
    const newPlan = {
      routeSlug: route.slug,
      title: route.title,
      titleMr: route.titleMr,
      stops: route.stopSlugs.map(slug => {
        const mandal = window.MANDALS_DATA.find(m => m.slug === slug);
        return {
          slug,
          id: mandal ? mandal.id : slug,
          name: mandal ? mandal.name : slug,
          nameMr: mandal ? mandal.nameMr : "",
          area: mandal ? mandal.area.name : "",
          completed: false,
          completedAt: null
        };
      }),
      createdAt: new Date().toISOString()
    };
    this.setActivePlan(newPlan);
    return newPlan;
  },

  setPlanFromCustomStops(title, mandalSlugs) {
    const newPlan = {
      routeSlug: "custom-" + Date.now(),
      title: title || "My Custom Darshan",
      titleMr: "माझे दर्शन नियोजन",
      stops: mandalSlugs.map(slug => {
        const mandal = window.MANDALS_DATA.find(m => m.slug === slug);
        return {
          slug,
          id: mandal ? mandal.id : slug,
          name: mandal ? mandal.name : slug,
          nameMr: mandal ? mandal.nameMr : "",
          area: mandal ? mandal.area.name : "",
          completed: false,
          completedAt: null
        };
      }),
      createdAt: new Date().toISOString()
    };
    this.setActivePlan(newPlan);
    return newPlan;
  },

  togglePlanStopCompleted(slug) {
    const plan = this.getActivePlan();
    const stop = plan.stops.find(s => s.slug === slug);
    if (stop) {
      stop.completed = !stop.completed;
      stop.completedAt = stop.completed ? new Date().toISOString() : null;
      this.setActivePlan(plan);
    }
    return plan;
  },

  resetPlanProgress() {
    const plan = this.getActivePlan();
    plan.stops.forEach(s => {
      s.completed = false;
      s.completedAt = null;
    });
    this.setActivePlan(plan);
    return plan;
  },

  // --- Crowd Reporting ---
  getCrowdReports() {
    try {
      const data = localStorage.getItem(this.KEYS.CROWD_REPORTS);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  },

  submitCrowdReport(mandalId, waitMinutes, crowdLevel) {
    const reports = this.getCrowdReports();
    reports[mandalId] = {
      waitMinutes: parseInt(waitMinutes, 10),
      crowdLevel,
      timestamp: Date.now(),
      relativeTime: "Just now"
    };
    localStorage.setItem(this.KEYS.CROWD_REPORTS, JSON.stringify(reports));
    window.dispatchEvent(new CustomEvent("pgd:crowd-reported", { detail: { mandalId, waitMinutes, crowdLevel } }));
    return reports[mandalId];
  },

  getMandalLiveWait(mandal) {
    const reports = this.getCrowdReports();
    if (reports[mandal.id] && (Date.now() - reports[mandal.id].timestamp < 3600000 * 4)) {
      return {
        minutes: reports[mandal.id].waitMinutes,
        level: reports[mandal.id].crowdLevel,
        isUserReported: true,
        text: reports[mandal.id].waitMinutes + " min wait (Community reported)"
      };
    }
    const mins = mandal.darshanMinutes || 10;
    return {
      minutes: mins,
      level: mandal.liveCrowdLevel || (mins > 30 ? "heavy" : mins > 15 ? "moderate" : "low"),
      isUserReported: false,
      text: mins <= 10 ? "Under 10 min wait" : mins + " min wait"
    };
  },

  // --- Distance Calculation (Haversine Formula) ---
  calculateDistanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  },

  formatDistance(distanceKm) {
    if (distanceKm == null) return "";
    if (distanceKm < 1) {
      return Math.round(distanceKm * 1000) + " m";
    }
    return distanceKm.toFixed(1) + " km";
  },

  getUserLocation(callback) {
    if (!navigator.geolocation) {
      callback(null, "Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        sessionStorage.setItem(this.KEYS.USER_LOCATION, JSON.stringify(coords));
        callback(coords, null);
      },
      err => {
        callback(null, err.message);
      },
      { timeout: 8000, enableHighAccuracy: true }
    );
  }
};

window.Store = Store;
