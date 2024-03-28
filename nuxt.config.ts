// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nuxt - Test Template',
            titleTemplate: '%s | Test Template',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no',
                },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap',
                },
            ],
        },
    },
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["@nuxtjs/tailwindcss",'@pinia/nuxt','@nuxtjs/i18n'],
    i18n: {
        locales: [
            { code: 'da', file: 'da.json' },
            { code: 'de', file: 'de.json' },
            { code: 'el', file: 'fr.json' },
            { code: 'en', file: 'en.json' },
            { code: 'es', file: 'es.json' },
            { code: 'fr', file: 'fr.json' },
            { code: 'hu', file: 'hu.json' },
            { code: 'it', file: 'it.json' },
            { code: 'ja', file: 'ja.json' },
            { code: 'pl', file: 'pl.json' },
            { code: 'pt', file: 'pt.json' },
            { code: 'ru', file: 'ru.json' },
            { code: 'sv', file: 'sv.json' },
            { code: 'tr', file: 'tr.json' },
            { code: 'zh', file: 'zh.json' },
            { code: 'ae', file: 'ae.json' },
        ],
        lazy: true,
        defaultLocale: 'en',
        strategy: 'no_prefix',
        langDir: 'locales/',
    },
    vite: {
        optimizeDeps: { include: ['quill'] },
    },
    router: {
        options: { linkExactActiveClass: 'active' },
    },
})