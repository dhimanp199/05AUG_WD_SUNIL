import { createBrowserRouter } from "react-router-dom";
import HeaderComponet from './Componet/header'
import Home from './Home'
import About from './About'
import Examples from './Example'
import HelloComporoute from './HelloComporoute.jsx'
import React, { Suspense } from "react";

const ClassCompoRouter = React.lazy(()=> import('./Type of Component/Class Component/ClassCompoRouter'))
const FunctionalCompoRouter = React.lazy(()=> import('./Type of Component/Functional Component/FunctionalcompoRouter'))
const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <><HeaderComponet/><Home/></>,
    children: [
      {
        path: "hello/*",
        element: <HelloComporoute/>
      }
    ]
  },
  {
    path: "/About",
    element:<><HeaderComponet/><About/></>,
  },
  {
    path: "/Examples",
    element:<><HeaderComponet/><Examples/></>,
    children: [
      {
        path: "classcompo/*",
        element:<Suspense fallback={<h3>Loading Please Wait.....</h3>}> <ClassCompoRouter/> </Suspense>,
      },
      {
        path: "functionalcompo/*",
        element:<Suspense fallback={<h3>Loading Please Wait.....</h3>}> <FunctionalCompoRouter/> </Suspense>
      }
    ]
  },
  
]);

export default Mainrouter;