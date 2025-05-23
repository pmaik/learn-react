import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NotFoundPage from "../Pages/NotFoundPage";
import { MENU_SECTION_TYPES } from "../Constants";
import ErrorBoundary from "../Common/ErrorBoundary";
import Spinner from "../Common/Spinner";
import HTML from "../Components/HTML";
import UndoableInput from "../Components/HTML/UndoableInput";
import CSS from "../Components/CSS";
import CssPositions from "../Components/CSS/CssPositions";
import CssGrid from "../Components/CSS/CssGrid";
import JavaScript from "../Components/JavaScript";
import ReactComp from "../Components/React";
import ReactForm from "../Components/React/Form";
import ReactFiber from "../Components/React/ReactFiber";
import RenderProps from "../Components/React/RenderProps";
import ProductComponent from "../Components/React/Pagination";
import ProgressBar from "../Components/React/ProgressBar";
import UseMemoPolyfill from "../Components/React/UseMemoPolyfill";
import UseEffectPolyfill from "../Components/React/UseEffectPolyfill";
import Stepper from "../Components/React/Stepper";
import EMICalculator from "../Components/React/EMICalculator";
import LRUCache from "../Components/React/LRUCache";
import GridLights from "../Components/React/GridLights";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: MENU_SECTION_TYPES.html.toLocaleLowerCase(),
                element: <HTML />,
                children: [
                    { path: "undoable-input", element: <UndoableInput /> },
                ],
            },
            {
                path: MENU_SECTION_TYPES.css.toLocaleLowerCase(),
                element: <CSS />,
                children: [
                    {
                        path: "css-positions",
                        element: <CssPositions />,
                    },
                    {
                        path: "css-grid",
                        element: <CssGrid />,
                    },
                ],
            },
            {
                path: MENU_SECTION_TYPES.js.toLocaleLowerCase(),
                element: <JavaScript />,
            },
            {
                path: MENU_SECTION_TYPES.react.toLocaleLowerCase(),
                element: <ReactComp />,
                children: [
                    {
                        path: "react-form",
                        element: <ReactForm />,
                    },
                    {
                        path: "react-fiber",
                        element: <ReactFiber />,
                    },
                    {
                        path: "render-props",
                        element: <RenderProps />,
                    },
                    {
                        path: "pagination",
                        element: <ProductComponent />,
                    },
                    {
                        path: "progress-bar",
                        element: <ProgressBar />,
                    },
                    {
                        path: "usememo-polyfill",
                        element: <UseMemoPolyfill />,
                    },
                    {
                        path: "useeffect-polyfill",
                        element: <UseEffectPolyfill />,
                    },
                    {
                        path: "stepper",
                        element: <Stepper />,
                    },
                    {
                        path: "lru-cache",
                        element: <LRUCache />,
                    },
                    {
                        path: "grid-lights",
                        element: <GridLights />,
                    },
                    {
                        path: "emi-calculator",
                        element: <EMICalculator />,
                    },
                ],
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

function AppRoutes() {
    return (
        <ErrorBoundary fallback={<h2>Oops! Something went wrong.</h2>}>
            <Suspense fallback={<Spinner />}>
                <RouterProvider router={router} />
            </Suspense>
        </ErrorBoundary>
    );
}

export default AppRoutes;
