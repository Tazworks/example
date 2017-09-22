module.exports = {
  files: {
    javascripts: {
      joinTo: {
        "app.js": /^(src)|(node_modules)/
      }
    }
  },

  server: {
    port: 3314
  },

  plugins: {
    babel: {
      "presets": [
        [
          "env", {
            "targets": {
              "browsers": ["last 2 versions"]
            }
          }
        ],
        "react"
      ]
    }
  },

  paths: {
    watched: ["src"]
  },

  modules: {
    autoRequire: {
      "app.js": ["src/app.js"]
    }
  },

  npm: {
    enabled: true
  }
};