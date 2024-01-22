const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});

import { i18n } from "./next-i18next.config";
export default {
    i18n
};
