import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound/Notfound";
import Articles from "./Components/Articles/Articles";
import Diet from "./Components/Diet/Diet";
import Category from "./Components/Category/Category";
import Calories from "./Components/Calories/Calories";
import { AuthProvider } from "./Components/Context/authentication";
import { Toaster } from "react-hot-toast";
import Registers from "./Components/Registers/Registers";
import Prehome from "./Components/Prehome/Prehome";
import Forgetpassword from "./Components/Forgetpassword/Forgetpassword";
import Resetpassword from "./Components/Resetpassword/Resetpassword";
import Forgetpassotp from "./Components/Forgetpassotp/Forgetpassotp";
import Profile from "./Components/Profile/Profile";
import Fitnutai from "./Components/Fitnutai/Fitnutai";
import Categorytitle from "./Components/Categorytitle/Categorytitle";
import { UserProvider } from "./Components/Context/user";
import Updateweight from "./Components/Updateweight/Updateweight";
import Details from "./Components/Details/Details";
import { QueryClient, QueryClientProvider } from "react-query";
import Uploaddetails from "./Components/Uploaddetails/Uploaddetails";
import Choosefood from "./Components/Choosefood/Choosefood";
import Foodofday from "./Components/Foodofday/Foodofday";
import Choosefooddetails from "./Components/Choosefooddetails/Choosefooddetails";
import Editprofile from "./Components/Editprofile/Editprofile";



const myRouter = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Login /> },
        { path: "home", element: <Home /> },
        { path: "prehome", element: <Prehome /> },
        { path: "forgetpassword", element: <Forgetpassword /> },
        { path: "forgetpassotp", element: <Forgetpassotp /> },
        { path: "resetpassword/:email", element: <Resetpassword /> },
        { path: "details/:id", element: <Details /> },
        { path: "choosefooddetails/:id", element: <Choosefooddetails /> },
        { path: "login", element: <Login /> },
        { path: "uploaddetails", element: <Uploaddetails /> },
        { path: "register", element: <Registers /> },
        { path: "foodofday", element: <Foodofday /> },
        { path: "choosefood", element: <Choosefood /> },
        { path: "profile", element: <Profile /> },
        { path: "editprofile", element: <Editprofile /> },
        { path: "fitnutai", element: <Fitnutai /> },
        { path: "articles", element: <Articles /> },
        { path: "updateweight", element: <Updateweight /> },
        { path: "deit", element: <Diet /> },
        { path: "categorytitle", element: <Categorytitle /> },
        { path: "category", element: <Category /> },
        { path: "calories", element: <Calories /> },

        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
function App() {
  

  // don't forget protected route in the finised of project
  let clientQuery = new QueryClient();

  return (
    
    <>
    <QueryClientProvider client={clientQuery}>
      <UserProvider>
        <AuthProvider>
          <RouterProvider router={myRouter} />
          <Toaster />
        </AuthProvider>
      </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
