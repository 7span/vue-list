const path = require("path");
console.log(path.join(__dirname, "src"));
module.exports = {
  componentsRoot: "src/components",
  components: "**/*.vue",
  outDir: "docs",
  apiOptions: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
};
