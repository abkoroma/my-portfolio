import ecommorce from "../logo/ecommerce.png";
import libraryapp from "../logo/library-app.png";
import recipebook from "../logo/recipe-book.png";
import forkify from "../logo/forkify-app_.png";

export const data = [
    {
        imageUrl: `${ecommorce}`,
        title: "Clothing Store",
        description: "Full stack ecomerce application.",
        stack: ['React', 'JavaScript', 'Typescript', 'HTML/CSS', 'GraphQL','Stripe'],
        link: "https://github.com/abkoroma/ecommerce-clothing-store",
    },
    {
        imageUrl: `${recipebook}`,
        title: "Recipe Book",
        description: "Create a book of original recipes that you have collected from family a friends.",
        stack: ['Angular', 'Typescript', 'HTML/CSS', 'Firebase'],
        link: "https://github.com/abkoroma/recipe-book"
    },
    {
        imageUrl: `${libraryapp}`,
        title: "Library Application",
        description: "Library book managment for both users and admins.",
        stack: ['React', 'Java', 'Spring', 'Typescript', 'SQL', 'Stripe', 'Okta'],
        link: "https://github.com/abkoroma/library-app"
    },
    {
        imageUrl: `${forkify}`,
        title: "Forkify",
        description: "Search for inspirational recipes and bookmark for later.",
        stack: ['Javascript', 'HTML/CSS'],
        link: "https://github.com/abkoroma/forkify-app"
    }
];