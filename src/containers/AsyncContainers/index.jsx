import React from "react";
import Loadable from "react-loadable";
import { Loader } from "semantic-ui-react";

const AsyncProductsContainer = Loadable({
    loader: () => import("Pages/products/views"),
    loading: () => <Loader active inline="centered" />,
});
const AsyncCheckoutContainer = Loadable({
    loader: () => import("Pages/checkout/views"),
    loading: () => <Loader active inline="centered" />,
});
const AsyncContactContainer = Loadable({
    loader: () => import("Pages/contact/views"),
    loading: () => <Loader active inline="centered" />,
});
const AsyncAboutMeContainer = Loadable({
    loader: () => import("Pages/aboutMe/views"),
    loading: () => <Loader active inline="centered" />,
});

const AsyncNotFoundContainer = Loadable({
    loader: () => import("Pages/notFound/views"),
    loading: () => <Loader active inline="centered" />,
});

export {
    AsyncProductsContainer,
    AsyncNotFoundContainer,
    AsyncCheckoutContainer,
    AsyncContactContainer,
    AsyncAboutMeContainer,
};
