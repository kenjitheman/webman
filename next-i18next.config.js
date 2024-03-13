module.exports = {
    debug: process.env.NODE_ENV === "development",
    i18n: {
        defaultLocale: "ru",
        locales: ["en", "uk", "ru"],
        returnObjects: true
    },

    localePath:
        typeof window === "undefined"
            ? require("path").resolve("./public/locales")
            : "/locales",

    reloadOnPrerender: process.env.NODE_ENV === "development"
};
