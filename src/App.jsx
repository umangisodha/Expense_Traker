import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AddExpensepage from "./pages/AddExpensepages";

function App(){
 const router=createBrowserRouter([
  {path:'/',element:<Homepage/>},
  {path:'/add-expense',element:<AddExpensepage/>}

 ])
  
 return(
    <>
    <RouterProvider router={router}/>
    </>
 );
}

export default App;