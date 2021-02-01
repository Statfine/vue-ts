/*
 * @Description:
 * @Author: shaojia
 * @Date: 2021-01-27 19:11:16
 * @LastEditTime: 2021-01-29 13:32:36
 * @LastEditors: shaojia
 */
// const path = require("path");

// module.exports = ({ file }) => {
// const designWidth = file.dirname.includes(path.join("node_modules", "vant"))
//   ? 375
//   : 750;
module.exports = () => {
  return {
    plugins: {
      autoprefixer: {},
      "postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: 375,
        unitPrecision: 6,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        exclude: [],
        landscape: false
      }
    }
  };
};
