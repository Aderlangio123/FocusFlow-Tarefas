import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/layout";
import { Home } from "./pages/AdicionarTask/home";
import { ListTaskView } from "./pages/VerTasks/listTask";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/listTask",
        element: <ListTaskView/>
      }

    ]
  }
])

export {router};