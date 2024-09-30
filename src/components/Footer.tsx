import LocaleSwitch from "@/components/LocaleSwitch";
import {getUserLocale} from "@/services/locale";
import {Linkedin} from "@/common/icons/Linkedin";
import {Github} from "@/common/icons/Github";
import {Email} from "@/common/icons/Email";

async function Footer() {
    const locale = await getUserLocale()
    return (
        <footer className="px-36 py-14 border border-t border-b-0 border-color-1 flex">
            <div className="flex-1">
                <LocaleSwitch currentLocale={locale}/>

            </div>
            <div className="flex flex-col">
                <p className="text-headline-3">Jongho Yoo</p>
                <div className="mt-10 flex gap-6">
                    <Linkedin size='32' className="text-color-0"/>
                    <Github size='32' className="text-color-0"/>
                    <Email size='32' className="text-color-0"/>
                </div>
                <p className="mt-8 text-color-1">Copyright 2024 © ujon. All right reserved</p>
            </div>
        </footer>
    );
}

export default Footer;