import Home from "./pages/home/Home"
 import Login from "./pages/login/Login";
 import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path:"/home",
    element:<Home/>,
  }
]);

function App() {
  return (
    <div className="App">
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
