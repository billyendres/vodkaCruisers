const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/about.js"))),
  "component---src-pages-age-restriction-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/ageRestriction.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/contact.js"))),
  "component---src-pages-faqs-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/faqs.js"))),
  "component---src-pages-home-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/home.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/index.js"))),
  "component---src-pages-products-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/products.js"))),
  "component---src-pages-products-one-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/products/one.js"))),
  "component---src-pages-products-three-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/products/three.js"))),
  "component---src-pages-products-two-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/products/two.js"))),
  "component---src-pages-promotions-one-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/promotions/one.js"))),
  "component---src-pages-promotions-three-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/promotions/three.js"))),
  "component---src-pages-promotions-two-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/promotions/two.js"))),
  "component---src-pages-terms-js": hot(preferDefault(require("/Applications/MAMP/htdocs/vodkaCruiserGatsby/vodkaCruiserGatsby/src/pages/terms.js")))
}

