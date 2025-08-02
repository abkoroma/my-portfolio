import ecommorce from "../logo/ecommerce.png";
//import libraryapp from "../logo/library-app.png";
import wildOasis from "../logo/the-wild-oasis.png";
import portfolio from "../logo/portfolio-page.png";

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
        imageUrl: `${ecommorce}`,
        title: "Clothing Store",
        description: "Full stack ecomerce application.",
        stack: ['React', 'JavaScript', 'Typescript', 'HTML/CSS', 'GraphQL','Stripe'],
        link: "https://github.com/abkoroma/ecommerce-clothing-store",
        view: "https://abk-crown-clothing.netlify.app/",
    },
    /*{
        id: 3,
        imageUrl: `${libraryapp}`,
        title: "Library Application",
        description: "Library book managment for both users and admins.",
        stack: ['React', 'Java', 'Spring', 'Typescript', 'SQL', 'Stripe', 'Okta'],
        link: "https://github.com/abkoroma/library-app",
        view: "",
    },*/
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