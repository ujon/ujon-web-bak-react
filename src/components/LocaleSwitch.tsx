'use client';

import {Locale, locales, localeLabels} from '@/i18n/config';
import {setUserLocale} from '@/services/locale';

interface Props {
    currentLocale: string | undefined;
}

export default function LocaleSwitch({currentLocale}: Props) {
    const handleLocale = async (locale: Locale) => await setUserLocale(locale);

    return (
        <div
            className="border flex justify items-center border-color-2 w-80 h-12"
        >
            {locales.map((locale: Locale, index: number) => {
                return (
                    <div
                        key={`${locale}-${index}`}
                        onClick={() => handleLocale(locale)}
                        className={`flex-1 flex justify-center items-center h-full ${currentLocale === locale ? 'bg-color-1' : ''}`}
                    >
                        <p className="text-center">{localeLabels[locale]}</p>
                    </div>
                );
            })}
        </div>
    );
}