import FormValidation from "../FormValidation";
import FinalForm from "../FinalForm";
import ToDoList from "../ToDoList";
import NotFoundPage from "./NotFoundPage";

export const RouterConfig = [
  {
    path: "/",
    component: FinalForm,
  },
  {
    path: "/finalform",
    component: FinalForm,
  },
  {
    path: "/formvalidation",
    component: FormValidation,
  },
  {
    path: "/todolist",
    component: ToDoList,
  },
  {
    path: "",
    component: NotFoundPage,
  },
];
