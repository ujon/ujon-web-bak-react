import {useTranslations} from "next-intl";


function NotFound() {
    const t = useTranslations("not-found");

    return (
        <div className="flex justify-center items-center w-full hero-h bg-color-0">
            <p className="text-headline-1">{t("title")}</p>
        </div>
    )
}

export default NotFound