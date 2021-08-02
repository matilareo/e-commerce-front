// routes
import NotFound from "Pages/notFound";
import Products from "Pages/products";
import Checkout from "Pages/checkout";
import AboutMe from "Pages/aboutMe";
import Contact from "Pages/contact";
//const prefix = 'app/'
export default [
    {
        path: "/products",
        component: Products,
    },
    {
        path: "/checkout",
        component: Checkout,
    },
    {
        path: "/aboutMe",
        component: AboutMe,
    },
    {
        path: "/contact",
        component: Contact,
    },
    {
        path: "/*",
        component: NotFound,
    },
];
