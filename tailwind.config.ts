import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                "appear-menu": "menu .4s ease",
            },
            keyframes: {
                menu: {
                    "0%": { transform: "translateX(100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
            },
            screens: {
                p: {
                    max: "380px",
                },
                sm: {
                    max: "610px",
                },
                t: {
                    max: "920px",
                },
                m: {
                    max: "1024px",
                },
                l: {
                    max: "1280px",
                },
                xl: {
                    min: "1281px",
                },
            },
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(to right, #FAFAFA 50%, #FFFFFF 50%)",
            },
            backgroundColor: {
                backdrop: "rgba(0, 0, 0, 0.25)",
            },
            borderColor: {
                grey: "#E1E5EC",
                primaryBlue: "#0451DD",
            },
            colors: {
                primaryBlue: "#0451DD",
                white: "#FFFFFF",
                secondaryWhite: "#FAFAFA",
                grey: "#212121",
                lightGrey: "#E0E0E0",
                darkGreyText: "#9E9E9E",
                lightGreyText: "#616161",
                borderGrey: "#E1E5EC",
            },
            spacing: {
                "120": "120px",
            },
            fontSize: {
                h1: "40px",
                h2: "54px",
                h6: "20px",
                label: "10px",
                span: "14px",
                p: "16px",
                button: "16px",
                link: "14px",
            },
            fontWeight: {
                h1: "700",
                h2: "700",
                h6: "700",
                label: "700",
                span: "400",
                p: "400",
                button: "700",
                link: "500",
            },
            lineHeight: {
                h1: "44px",
                h2: "60px",
                h6: "24px",
                label: "20px",
                span: "18px",
                p: "22px",
                button: "24px",
                link: "20px",
            },
            letterSpacing: {
                label: "3px",
            },
        },
    },
    plugins: [],
};
export default config;
