export type Locale = (typeof locales)[number];
export const locales = ['en', 'ko'] as const;
export const defaultLocale: Locale = 'en';
export const localeLabels: { [key in Locale]: string } = {
    en: 'English',
    ko: '한국어',
};