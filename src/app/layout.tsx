import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import "@/styles/index.css"
import {getUserLocale} from "@/services/locale";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
    title: "ujon",
    description: "",
};

export default async function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const locale = await getUserLocale();
    const messages = await getMessages();
    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
        <Footer/>
        </body>
        </html>
    );
}
