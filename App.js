import './App.css';
import RootLayout from './Assignment-8/RootLayout';
import Technology from './Assignment-8/Technology';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Appdevelopment from './Assignment-8/Appdevelopment';
import Webdevelopment from './Assignment-8/Webdevelopment';
import Gamedevelopment from './Assignment-8/Gamedevelopment'
import Languages from './Assignment-8/Languages';
import Java from './Assignment-8/Java';
import Cpp from './Assignment-8/Cpp';
import Python from './Assignment-8/Python';

function App() {
  let router = createBrowserRouter([
    {
    path:'',
    element:<RootLayout/>,
    children:[
    {
      path:'',
      element:<Languages/>,
      children:[
        {
          path:'',
          element:<Java/>
        },
        {
          path:'cpp',
          element:<Cpp/>
        },
        {
          path:'python',
          element:<Python/>
        }

      ]
    },
    {
      path:"technology",
      element:<Technology/>,
      children:[
        {
          path:'',
          element:<Appdevelopment/>
        },
        {
          path:"webdevelopment",
          element:<Webdevelopment/>
        },
        {
          path:"gamedevelopment",
          element:<Gamedevelopment/>
        }
      ]
    }
    ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

