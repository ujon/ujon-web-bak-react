'use server';

import {cookies, headers} from 'next/headers';
import {defaultLocale, locales, type Locale} from '@/i18n/config';

const COOKIE_NAME: string = 'locale';

export async function getUserLocale() {
    const cookieLocale = cookies().get(COOKIE_NAME)?.value;
    const acceptLocale = headers().get("accept-language")?.slice(0, 2);
    const tailLocale = (locales.includes(acceptLocale as Locale) ? acceptLocale : defaultLocale);

    return cookieLocale || tailLocale;
}

export async function setUserLocale(locale: Locale) {
    cookies().set(COOKIE_NAME, locale, {
        maxAge: 60 * 60 * 24 * 365,
    });
}