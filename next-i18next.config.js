const path = require("path");

module.exports = {
    i18n: {
        locales: ["en", "uk", "ru"],
        defaultLocale: "en"
    },
    localePath: path.resolve("./public/locales")
};
