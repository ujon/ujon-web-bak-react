'use server';

import {cookies} from 'next/headers';
import {Theme} from "@/common/theme/config";

const COOKIE_NAME: string = 'theme';

export async function getTheme() {
    return cookies().get(COOKIE_NAME)?.value || "system";
}

export async function setTheme(theme: Theme) {
    cookies().set(COOKIE_NAME, theme, {
        maxAge: 60 * 60 * 24 * 365,
    });
}