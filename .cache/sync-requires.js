const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-clients-template-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/pipes-landing/src/templates/clientsTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/pipes-landing/.cache/dev-404-page.js"))),
  "component---src-pages-afterwork-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/pipes-landing/src/pages/afterwork.js"))),
  "component---src-pages-home-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/pipes-landing/src/pages/home.js"))),
  "component---src-pages-imprint-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/pipes-landing/src/pages/imprint.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/pipes-landing/src/pages/index.js"))),
  "component---src-pages-principles-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/pipes-landing/src/pages/principles.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/pipes-landing/src/pages/projects.js"))),
  "component---src-pages-stack-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/pipes-landing/src/pages/stack.js"))),
  "component---src-pages-stack-2-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/pipes-landing/src/pages/stack2.js")))
}

