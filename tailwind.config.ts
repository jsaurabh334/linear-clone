import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                "card-transform": {
                    "0%": { transform: "perspective(2000px) rotateX(25deg)" },
                    "25%": {
                        transform:
                            "perspective(2000px) rotateX(25deg) scale(0.9)",
                    },
                    "60%, 100%": { transform: "none" },
                },
                cursor: {
                    "0%, 100%": { backgroundColor: "transparent" },
                    "50%": { backgroundColor: "#5e6ad2" },
                },
            },
            animation: {
                cardTransform: "card-transform 1400ms ease forwards",
                cursor: "cursor 1000ms forwards infinite",
            },
        },
        container: {
            center: true,
            padding: "32px",
            screens: {
                "5xl": "1024px",
            },
        },
    },
    plugins: [],
};
export default config;
