import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as _ from 'lodash'
i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        backend: {
            loadPath: 'https://api.test.soa-dev.net/api/v1/pages?lang={{lng}}',
            parse: (data: string) => {
                return _.first(JSON.parse(data))
            }
        },
        detection: {
            order: ['localStorage', 'cookie', 'navigator'],
            lookupLocalStorage: 'i18nextLng',
            lookupCookie: 'i18next',
        },
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: true,
        },
    });

export default i18n;