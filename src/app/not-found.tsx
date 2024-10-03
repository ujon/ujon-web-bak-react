import {useTranslations} from "next-intl";


function NotFound() {
    const t = useTranslations("not-found");

    return (
        <main className="flex justify-center items-center w-full hero-h">
            <p className="text-headline-1">{t("title")}</p>
        </main>
    )
}

export default NotFound