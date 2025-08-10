import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom' // idi main component kabatti ikkade routing ni import cheskuntunnam
import { RouterProvider } from 'react-router-dom'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
        
    ])
  return (
    <div>
        {/* so, manam path use chestunnam kabatti,ikkada RouterProvider ni use cheskovali . daaniki mana appRouterni ivvali */}
        <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body