import ecommorce from "../logo/ecommerce.png";
//import libraryapp from "../logo/library-app.png";
import wildOasis from "../logo/the-wild-oasis.png";
import portfolio from "../logo/portfolio-page.png";
import staywise from "../logo/staywise.png";

export const data = [
    {
        id: 1,
        imageUrl: `${wildOasis}`,
        title: "The Wild Oasis",
        description: "Full stack hotel/cabin booking application.",
        stack: ['React', 'JavaScript', 'Typescript', 'HTML/CSS', 'Supabase','Tanstack'],
        link: "https://github.com/abkoroma/the-wild-oasis.git",
        view: "https://the-wild-oasis-cabin-bookings.netlify.app/",
    },
    {
        id: 2,
        imageUrl: `${staywise}`,
        title: "StayWise - Cabin Reservation Platform",
        description: "A modern cabin reservation platform built for seamless booking experiences.",
        stack: ['Next JS', 'Typescript', 'Supabase', 'Tailwind'],
        link: "https://github.com/abkoroma/StayWise.git",
        view: "https://stay-wise-snowy.vercel.app/",
    },
    {
        id: 3,
        imageUrl: `${ecommorce}`,
        title: "Clothing Store",
        description: "Full stack ecomerce application.",
        stack: ['React', 'JavaScript', 'Typescript', 'HTML/CSS', 'GraphQL','Stripe'],
        link: "https://github.com/abkoroma/ecommerce-clothing-store",
        view: "https://abk-crown-clothing.netlify.app/",
    },
    {
        id: 4,
        imageUrl: `${portfolio}`,
        title: "My Portfolio",
        description: "My personal portfolio website.",
        stack: ['React', 'TypeScript', 'Javascript', 'HTML/CSS'],
        link: "https://github.com/abkoroma/my-portfolio.git",
        view: "https://abukoroma.dev/",
    },
];