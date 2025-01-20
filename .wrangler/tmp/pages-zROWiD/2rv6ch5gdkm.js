// <define:__ROUTES__>
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.13.7.", include: ["/*"], exclude: ["/_next/static/*"] };

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/mnt/c/Users/Shekhani Laptops/Desktop/WORK/hello-worlds/prev-build/.wrangler/tmp/pages-zROWiD/bundledWorker-0.6489649191502747.mjs";
import { isRoutingRuleMatch } from "/mnt/c/Users/Shekhani Laptops/Desktop/WORK/hello-worlds/prev-build/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/mnt/c/Users/Shekhani Laptops/Desktop/WORK/hello-worlds/prev-build/.wrangler/tmp/pages-zROWiD/bundledWorker-0.6489649191502747.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=2rv6ch5gdkm.js.map
