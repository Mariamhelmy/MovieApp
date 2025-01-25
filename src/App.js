import './App.css';
import Details from './Component/Details/Details';
import Home from './Component/Home/Home';
import LayOut from './Component/LayOut/LayOut';
import Action from './Component/Action/Action';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import PopularMovies from './Component/PopularMovies/PopularMovies';
import Comedy from './Component/Comedy/Comedy';
import Drama from './Component/Drama/Drama';
import Romantic from './Component/Romantic/Romantic';
import Search from './Component/Search/Search';






let router =createHashRouter([{
  path:"",element:<LayOut/>,children:[
    {path:"home",element:<Home/>},
    {path:"details/:id",element:<Details/>},
    {path:"action",element:<Action/>},
    {path:"comedy",element:<Comedy/>},
    {path:"drama",element:<Drama/>},
    {path:"romantic",element:<Romantic/>},
    {path:"search",element:<Search/>}
  ]


 }])


function App() {
  return (
    <>
          <RouterProvider router={router} ></RouterProvider>

    </>
  )
}

export default App;
