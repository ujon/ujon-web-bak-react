import {useTranslations} from "next-intl";
import {ArrowDown} from "@/common/icons/ArrowDown";

export default function Home() {
    const t = useTranslations("home");
    const hero = "Jongho Yoo\nBackend Engineer\nBased in Canada"
    return (
        <main>
            <section className="flex flex-col justify-center px-8 lg:px-36 xl:hero-h">
                <p className="text-display-1 whitespace-pre-line">{hero}</p>
                <hr className="mt-14 mb-12"/>
                <div className="flex flex-col-reverse justify-between gap-8 lg:flex-row">
                    <div className="flex">
                        <ArrowDown className="animate-bounce"/>
                        <p>{t('explore')}</p>
                    </div>
                    <p className="whitespace-pre-line xl:max-w-96">{t('subtitle')}</p>
                </div>
            </section>
            <section>
                {t("test")}
                <div className="w-80 h-80 bg-color-2"></div>
                <div className="w-72 h-72 bg-color-2"></div>
                <div className="w-80 h-80 bg-color-2"></div>
                <div className="w-72 h-72 bg-color-2"></div>
            </section>
        </main>
    );
}
