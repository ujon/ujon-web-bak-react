import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import "@/styles/index.css"
import {getUserLocale} from "@/services/locale";
import Footer from "@/components/Footer";
import {getTheme} from "@/services/theme";
import Header from "@/components/Header";


export const metadata: Metadata = {
    title: "ujon",
    description: "",
};

export async function generateViewport() {
    const theme = await getTheme();

    return {
        colorScheme: theme === 'system' ? 'light dark' : theme,
        themeColor: theme === 'dark' ? '#000000' : '#ffffff',
    };
}

export default async function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const locale = await getUserLocale();
    const messages = await getMessages();
    const theme = await getTheme();

    return (
        <html lang={locale} data-theme={theme}>
        <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
            <Header/>
            {children}
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
