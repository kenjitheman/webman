const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    i18n: {
        locales: ['en-US', 'uk-UK', 'ru-RU'],
        defaultLocale: 'en-US',
    },
});
