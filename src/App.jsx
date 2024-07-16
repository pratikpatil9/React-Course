import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from 'react'
import HomePage from './Pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import Jobs from './Pages/Jobs';
import NotFound from './Pages/NotFound';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path = '/' element = {<MainLayout/>}>
      <Route index element = { <HomePage/>} />
      <Route path = '/jobs' element = { <Jobs/>} />
      <Route path = '*' element = { <NotFound/>} />
    </Route>
  ))

  // console.log( createRoutesFromElements(
  //   <Route index element = {<MainLayout/>}>
  //     <Route index element = { <HomePage/>} />
  //   </Route>
  // ))
const App = () => {
  return (
    <RouterProvider router = {router} />
    
    )
}

export default App