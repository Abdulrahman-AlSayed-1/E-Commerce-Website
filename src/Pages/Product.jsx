import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import  {addItem} from '../Redux/Slices/cartSlice'
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Marquee from "react-fast-marquee";

function Product() {
    const {id}=useParams();
    const [interested, setInterested]=useState({
        product:{},
        similarProducts:[]
    });
    const dispatch=useDispatch();
    const navigate = useNavigate()
    let mounted = true
    useEffect(()=>{
       async function fetchProduct(){ 
        if(mounted){
            try{
                const response=await fetch(`https://fakestoreapi.com/products`)
                const parsedRes=await response.json()
                const product=parsedRes.find((product)=>product.id===Number(id)) 
                if(!product){
                    navigate(`/products/${id}/doesnotExist`) //if user entered in URL invalid id and this will show PageNotFound Page
                    return;
                }
                const similarProducts=parsedRes.filter((item)=>item.category===product.category && item.id!==Number(id))
                setInterested({product:{...product,rating:product.rating.rate}, similarProducts})
            }
            catch(error){console.error('Error fetching product:', error)}
       }
     }
         fetchProduct()
         return ()=>mounted=false
    },[id])

    const {title, image, price, description, category, rating}=interested.product;
    
    return ( 
        
     <> 
         <div className="container pt-md-5 mt-5">
             <div className="row">
                <div className="col-12 py-3 col-md-6 d-flex justify-content-center align-items-center" >
                     <img className="col-6" src={image} alt={title} style={{maxHeight:"400px"}}/>
                </div>
                <div className="col-12 col-md-6 py-3 py-md-0 d-flex flex-column justify-content-center">
                     <h4 className="text-secondary text-uppercase"  style={{fontSize:'clamp(15px,3vw,19px)'}}>{category}</h4>
                     <h3 className="lead"  style={{fontSize:'clamp(20px,5vw,28px)'}}>{title}</h3>
                     <p className="fs-5">
                       {rating + " "}
                       <FontAwesomeIcon icon={faStar} />
                     </p>
                     <h3 className="display-6">{price}$</h3>
                     <p className="lead" style={{fontSize:'clamp(15px,3vw,18px)'}}>{description}</p>
                     <div>
                        <button className="btn btn-light border-secondary shadow me-3 mt-2 py-2 fw-bold" 
                         onClick={()=>{
                         dispatch(addItem(interested.product))
                         toast.success('Added to cart')
                        }}>Add to Cart</button>
                        <Link to='/cart' className="btn btn-dark shadow mt-2 py-2 fw-bold">Go to Cart</Link>
                     </div>
                </div>
             </div>
         </div>
         {/* Similar Products ⬇️ */}
         <div className="container pt-5 mt-5">
                <h2 className="fs-2 lead mb-5">You may also like</h2>
                <Marquee speed={100} pauseOnHover={true} >
                 {
                    interested.similarProducts.map((product)=>{ 
                        return(   

                            <div className="card mx-2 p-3" key={product.id}>
                                <div className="p-3 d-flex align-items-center justify-content-center"
                                style={{width: "250px" , height: "250px"}}>
                                    <img className='mh-100 img-fluid'src={product.image} alt={product.title}/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{product.title.slice(0,11)}...</h5>
                                    <div className="d-flex mt-3 justify-content-center gap-2">
                                            <Link className="btn py-2 btn-dark" style={{fontSize:"14px"}} to={'/products/' + product.id}
                                            onClick={()=>window.scrollTo({
                                                top: 0, 
                                                behavior: 'smooth'
                                            })}>Buy Now</Link>
                                            <button className="btn py-2 btn-dark" style={{fontSize:"14px"}} onClick={()=>{
                                                toast.success("Added to cart")
                                                dispatch(addItem(product));
                                            }}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                 }
                </Marquee>   
         </div>  
     </>
      
   );
}

export default Product;