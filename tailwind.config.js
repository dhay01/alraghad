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
            fontFamily: {
                ubuntu: ['Ubuntu', 'sans-serif'],
                // openSans: ['Open Sans', 'sans-serif'],
                tajawal: ['Tajawal', 'sans-serif'],
            },
        },
    },
    daisyui: {
        styled: true,
        themes: [
            {
                mytheme: {
                    "primaryBlue": "#422A86",
                    "primaryRed": "#E62D18",
                },
            }


        ],
    },
    plugins: [
        require('daisyui'),
    ],
}