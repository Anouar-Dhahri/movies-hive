import {
  Home,
  PageNotFound,
  Explore,
  SearchResult,
  MediaDetails,
} from "../pages";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore/:mediaType",
    element: <Explore />,
  },
  {
    path: "/:mediaType/:id",
    element: <MediaDetails />,
  },
  {
    path: "/search/:query",
    element: <SearchResult />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
