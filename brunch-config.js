module.exports = {
  files: {
    javascripts: {
      joinTo: {
        "app.js": /^(app)|(node_modules)/
      }
    }
  },

  server: {
    port: 3314
  },

  plugins: {
    babel: {
      "presets": ["latest", "react"]
    }
  }
};
