import Home from "../../pages/Home";
import Books from "../../pages/Books";
import BookDetails from "../../pages/Books/components/BookDetails/BookDetails";
import NotFoundPage from "../NotFoundPage";

export const RouterConfig = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/books",
    component: Books,
  },
  {
    path: "/books/:id",
    component: BookDetails,
  },
  {
    path: "",
    component: NotFoundPage,
  },
];
