'use client';

import {Theme, themes} from '@/common/theme/config'
import {setTheme} from "@/services/theme";

interface Props {
    currentTheme: string | undefined;
}

export default function ThemeSwitch({currentTheme}: Props) {
    const handleTheme = async (theme: Theme) => await setTheme(theme);

    return (
        <div className="border flex justify items-center border-color-2 w-80 h-12">
            {themes.map((theme: Theme, index: number) => {
                return (
                    <div
                        key={`${theme}-${index}`}
                        onClick={() => handleTheme(theme)}
                        className={`flex-1 flex justify-center items-center h-full cursor-pointer select-none ${currentTheme === theme ? 'bg-color-1' : ''}`}
                    >
                        <p className="text-center">{theme}</p>
                    </div>
                );
            })}
        </div>
    );
}