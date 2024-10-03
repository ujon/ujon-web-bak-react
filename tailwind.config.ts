import type {Config} from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
        colors: {
            "text-0": "var(--color-text-0)",
        }
    },
    plugins: [
        plugin(function ({addUtilities}) {
            const newUtilities = {
                '.hero-h': {
                    height: 'calc(100vh - var(--header-h))',
                },
            }
            addUtilities(newUtilities, {})
        })
    ],
};
export default config;
