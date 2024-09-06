import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'



// criando a função createBrowserRouter
const router = createBrowserRouter([
  {
    // Elementos PAI
    path:'/', element:<App/>,
    errorElement:<Error/>,

    // Elementos FILHOS
    children:[
      {path:"/", element:<Home/>},
      {path:'/login', element:<Login/>},
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
