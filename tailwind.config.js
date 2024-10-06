/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryBlue: '#422A86',
            },
        },
    },
    daisyui: {
        styled: true,
        themes: [
            {
                mytheme: {
                    "primaryBlue": "#422A86",
                },
            }


        ],
    },
    plugins: [
        require('daisyui'),
    ],
}