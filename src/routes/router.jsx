import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Gene from "../pages/Gene";
import Paul from "../pages/Paul";
import Peter from "../pages/Peter";
import Ace from "../pages/Ace";
import ErrorPage from "../pages/ErrorPage";
import Kisstory from "../pages/Kisstory";
import Discografia from "../pages/Discografia";
import Videos from "../pages/Videos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "gene", element: <Gene /> },
            { path: "paul", element: <Paul /> },
            { path: "peter", element: <Peter /> },
            { path: "ace", element: <Ace /> },
            { path: "kisstory", element: <Kisstory /> },
            { path: "discografia", element: <Discografia /> },
            { path: "videos", element: <Videos /> },
        ],
    },
]);

export default router;
