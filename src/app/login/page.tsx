"use client"

import {ChangeEvent, useState} from "react";
import {useTranslations} from "next-intl";

function Login() {
    const t = useTranslations("login");
    const [password, setPassword] = useState('');

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return (
        <main className="flex justify-center items-center w-full hero-h">
            <div className="flex flex-col justify-stretch items-center">
                <input
                    type="password"
                    placeholder={t("passcode")}
                    className="w-80 placeholder:text-center text-center mt-5"
                    onChange={handlePasswordChange}
                    value={password}
                    required
                />
                <button
                    className="w-80 mt-5"
                >
                    {t("login")}
                </button>
            </div>
        </main>
    )
}

export default Login;