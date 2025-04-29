import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
  Cart , Home , 
  Login , Register ,
  Products , About , Contact ,
  Checkout , PageNotFound
} from './Pages'
import { Navbar , Footer} from './Components';
import { Toaster } from 'react-hot-toast';
import { lazy , Suspense} from 'react';
const Product = lazy(()=>import("./Pages/Product")) // using lazy to prevent component loading until user navigates to it

function App() {

  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={
            <Suspense fallback={
                <div className='d-flex justify-content-center align-items-center' style={{height:"70vh"}}>
                  <div className="spinner-border text-primary"></div>
                </div> 
                }>
               <Product/>
            </Suspense>
          }/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
