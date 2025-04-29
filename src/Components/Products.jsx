import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/Slices/cartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Products() {
    
     const [products, setProducts] = useState([]);
     const [isLoading,setLoading] = useState(true)
     const [filteredProducts, setFilteredProducts] = useState([]);
     let mounted=true;
     const prevActiveButton = useRef(null);

     useEffect(() => {
        const fetchProducts= async()=>{ 
            if(mounted){
             try {
                const response = await fetch('https://fakestoreapi.com/products/')
                const parsedRes = await response.json()
                setProducts(parsedRes);
                setFilteredProducts(parsedRes);
             }
             catch (error) {
                console.error('Error fetching products:', error);
             }
             finally{
                setLoading(false)
             }
             
            }
        }
         fetchProducts()
         return ()=>mounted=false
     } ,[])
    
    const updateProducts=(category)=>{

        if (category===prevActiveButton.current.id.replace('-',' ')) return;

         const activeButton = document.getElementById(category.replace(" ","-"));
         prevActiveButton.current.style='';
         activeButton.style.backgroundColor="black";
         activeButton.style.color="white";      
         prevActiveButton.current=activeButton;
       
         if(category==="all"){
            setFilteredProducts(products);
            return;
        }
        setFilteredProducts(products.filter((product)=>product.category===category));  
    }
    const dispatch=useDispatch();
    
    return ( 
        <>
         <div className="container pt-5">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr/>
            <ul className="nav nav-pills gap-lg-2 justify-content-center text-center  mt-5">
                <li className="nav-item col-4 col-md-3 col-lg-2">
                    <button ref={prevActiveButton} onClick={()=>{updateProducts("all")}} id="all" style={{backgroundColor:'black', color: 'white'}}  className="btn btn-outline-dark col-12 fw-bold border border-dark border-2" >All</button>
                </li>
                <li className="nav-item col-6 col-md-3 col-lg-2">
                    <button onClick={()=>{updateProducts("men's clothing")}} id="men's-clothing" className="btn btn-outline-dark col-12 fw-bold border border-dark border-2">Men's clothing</button>
                </li>
                <li className="nav-item col-4 col-md-3 col-lg-2">
                    <button onClick={()=>{updateProducts("jewelery")}} id="jewelery" className="btn btn-outline-dark col-12 fw-bold border border-dark border-2" >Jewelery</button>
                </li>
                <li className="nav-item col-6 col-md-4 col-lg-2">
                    <button onClick={()=>{updateProducts("electronics")}} id="electronics" className="btn btn-outline-dark col-12 fw-bold border border-dark border-2" >Electronics</button>
                </li>
                <li className="nav-item col-10 col-md-5 col-lg-2">
                    <button onClick={()=>{updateProducts("women's clothing")}} id="women's-clothing" className="btn btn-outline-dark col-12 fw-bold border border-dark border-2">Women's clothing</button>
                </li>
            </ul>
            <div className="container mt-5">
              <div className="row justify-content-center gy-4">
                {!isLoading ? filteredProducts.map((product)=>{

                    return(

                     <div key={product.id} className="col-11 col-md-5 col-lg-4">
                         <div  className="card" style={{height: "550px"}}>
                            <div className="col-8 mx-auto p-3 h-50 d-flex align-items-center justify-content-center">
                                <img className="mh-100 img-fluid" src={product.image} alt="Card image"/>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-center">{product.title.slice(0,11)}...</h4>
                                <p className="card-text text-center text-secondary">{product.description.slice(0,70)}...</p>
                                <hr/>
                                <p className="card-text text-center fs-5">{product.price}$</p>
                                <hr/>
                                <div className="d-flex justify-content-center gap-2">
                                    <Link className="btn btn-dark" to={'/products/' + product.id}>Buy Now</Link>
                                    <button className="btn btn-dark" onClick={()=>{
                                        toast.success("Added to cart")
                                        dispatch(addItem(product));
                                    }}>Add to Cart</button>
                                </div>
                            </div>
                         </div>
                     </div>
                    )
                 }):
                   <div className="spinner-border text-primary"></div>
                }
              </div>
            </div>
         </div>
        </>
     );
}

export default Products;