/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            screens: {
                xs: { max: "500px" },
                minxs: { min: "501px" },
            },
        },
    },
    daisyui: {
        themes: [
            {
                primary_theme: {
                    primary: "#a0bdd1",
                    secondary: "#0ea5e9",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
