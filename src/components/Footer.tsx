import LocaleSwitch from "@/components/LocaleSwitch";
import {getUserLocale} from "@/services/locale";
import {Linkedin} from "@/common/icons/Linkedin";
import {Github} from "@/common/icons/Github";
import {Email} from "@/common/icons/Email";
import ThemeSwitch from "@/components/ThemeSwitch";
import {getTheme} from "@/services/theme";

async function Footer() {
    const locale = await getUserLocale()
    const theme = await getTheme()
    return (
        <footer className="px-8 py-6 border-t border-color-1 flex flex-col gap-8 items-center lg:px-36 lg:py-16 lg:items-start">
            <div className="flex flex-col gap-5">
                <LocaleSwitch currentLocale={locale}/>
                <ThemeSwitch currentTheme={theme}/>
            </div>
            <div className="w-full flex flex-col-reverse items-center gap-4 lg:flex-row lg:items-end">
                <p className="flex-1 text-color-1">Copyright 2024 © ujon. All right reserved</p>
                <div className="flex gap-6">
                    <Linkedin size='32' className="text-color-0"/>
                    <Github size='32' className="text-color-0"/>
                    <Email size='32' className="text-color-0"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;