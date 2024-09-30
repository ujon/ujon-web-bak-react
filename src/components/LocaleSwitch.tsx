'use client';

import {Locale, locales, localeLabels} from '@/i18n/config';
import {setUserLocale} from '@/services/locale';

interface Props {
    currentLocale: string | undefined;
}

export default function LocaleSwitch({currentLocale}: Props) {
    const handleLocale = async (locale: Locale) => await setUserLocale(locale);

    return (
        <div className="border flex items-center w-fit border-color-2">
            {locales.map((locale: Locale, index: number) => {
                return (
                    <div
                        key={`${locale}-${index}`}
                        onClick={() => handleLocale(locale)}
                        className={`py-2.5 px-4 ${currentLocale === locale ? 'bg-color-1' : ''}`}
                    >
                        <p className="text-center">{localeLabels[locale]}</p>
                    </div>
                );
            })}
        </div>
    );
}