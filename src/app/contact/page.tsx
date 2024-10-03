import {useTranslations} from "next-intl";
import Link from "next/link";
import ContactLinks from "@/components/ContactLinks";

function Contact() {
    const t = useTranslations("contact");
    const email = "ujon94@gmail.com"

    return (
        <main className="flex justify-center items-center w-full hero-h">
            <div className="flex flex-col items-center gap-7">
                <p className="text-display-3 text-center whitespace-pre-line">{t("title")}</p>
                <p><Link href={`mailto:${email}`}>{email}</Link></p>
                <ContactLinks/>
            </div>
        </main>
    )
}

export default Contact;