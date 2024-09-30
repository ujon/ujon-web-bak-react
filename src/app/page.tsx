import {useTranslations} from "next-intl";

export default function Home() {
    const t = useTranslations();
    return (

        <div>
            {t("test")}
            <div className="w-80 h-80 bg-color-2"></div>
            <div className="w-72 h-72 bg-color-2"></div>
            <div className="w-80 h-80 bg-color-2"></div>
            <div className="w-72 h-72 bg-color-2"></div>
        </div>
    );
}
