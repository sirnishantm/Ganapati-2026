/**
 * Pune Ganpati Darshan - Universal Client-Side Router
 * Supports HTML5 History API, hash fallbacks, query params, and dynamic params.
 */

class Router {
  constructor() {
    this.routes = [];
    this.currentPath = "";
    this.currentParams = {};
    this.currentQuery = {};
    
    // Bind event listeners
    window.addEventListener("popstate", () => this.handleRouting());
    window.addEventListener("hashchange", () => this.handleRouting());
    
    // Intercept internal links
    document.addEventListener("click", e => {
      const link = e.target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href) return;
      
      // Ignore external links, mailto, tel, target="_blank"
      if (link.target === "_blank" || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      // If it's an internal route (e.g. /explore, /ganpati/kasba-ganpati, #/map)
      e.preventDefault();
      this.navigate(href);
    });
  }

  on(pathPattern, handler) {
    // Convert path pattern like "/ganpati/:slug" to Regex
    const paramNames = [];
    const regexPath = pathPattern
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
        paramNames.push(key);
        return "([^/]+)";
      })
      .replace(/\//g, "\\/");

    const regex = new RegExp(`^${regexPath}$`);
    this.routes.push({ pattern: pathPattern, regex, paramNames, handler });
    return this;
  }

  navigate(url) {
    // If running in hash mode or direct file:// mode
    if (url.startsWith("#")) {
      window.location.hash = url;
    } else {
      // In local static mode, pushState or hash fallback
      try {
        window.history.pushState({}, "", url);
        this.handleRouting();
      } catch (err) {
        // Fallback to hash if pushState fails (e.g. strict origin file://)
        window.location.hash = "#" + url;
      }
    }
  }

  handleRouting() {
    let path = window.location.pathname;
    const hash = window.location.hash;
    let search = window.location.search;

    // Check if hash-based routing is active
    if (hash && hash.startsWith("#/")) {
      const hashContent = hash.slice(1);
      const parts = hashContent.split("?");
      path = parts[0];
      search = parts[1] ? "?" + parts[1] : "";
    } else if (hash && hash.startsWith("#")) {
      path = "/" + hash.slice(1);
    }

    // Clean leading slash
    if (!path.startsWith("/")) path = "/" + path;

    // Strip trailing html filenames if opened as /explore.html -> /explore
    path = path.replace(/\.html$/, "");
    if (path === "/index" || path === "") path = "/";

    // Parse query params
    const queryParams = new URLSearchParams(search);
    const queryObj = {};
    for (const [key, value] of queryParams.entries()) {
      queryObj[key] = value;
    }

    this.currentPath = path;
    this.currentQuery = queryObj;

    // Find matching route
    let matched = false;
    for (const route of this.routes) {
      const match = path.match(route.regex);
      if (match) {
        matched = true;
        const params = {};
        route.paramNames.forEach((name, index) => {
          params[name] = match[index + 1];
        });
        this.currentParams = params;
        route.handler(params, queryObj);
        break;
      }
    }

    if (!matched) {
      console.warn("No route match found for", path, "-> defaulting to Home");
      const defaultRoute = this.routes.find(r => r.pattern === "/");
      if (defaultRoute) defaultRoute.handler({}, queryObj);
    }

    // Scroll to top on navigation
    window.scrollTo(0, 0);
    this.updateActiveNavLinks(path);
  }

  updateActiveNavLinks(path) {
    document.querySelectorAll(".bottom-nav-link, .header-nav-link").forEach(link => {
      const href = link.getAttribute("href");
      if (!href) return;
      const cleanHref = href.replace(/^#/, "").replace(/\.html$/, "");
      if (cleanHref === path || (path.startsWith(cleanHref) && cleanHref !== "/")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  start() {
    this.handleRouting();
  }
}

window.Router = Router;
