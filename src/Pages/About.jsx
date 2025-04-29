import { useMemo } from "react";

function About() {
  const ourProducts = useMemo(()=>(

    [ 
        {
            image:"https://media.istockphoto.com/id/887360960/photo/mens-suits-on-hangers-in-different-colors.jpg?s=612x612&w=0&k=20&c=RR19yJjRuR-CBWj9u1sQkFgtdYJ07KEkM678R0mtuZY=" ,
            caption:"Men's Clothing",
        },
        {
            image:"https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=612x612&w=0&k=20&c=fUpcbOITkQqitglZfgJkWO3py-jsbuhc8eZfb4sdrfE=" ,
            caption:"Women's Clothing",
        },
        {
            image:"https://media.istockphoto.com/id/1073849968/photo/jewelry-diamond-shop-display.jpg?s=612x612&w=0&k=20&c=FTnJZl0PlxePzyksW7Y3Mk3mc-kUMiTNLD1UGa-tvsI=" ,
            caption:"Jewelery",
        },
        {
            image:"https://media.istockphoto.com/id/520467743/photo/play-is-the-highest-form-of-research.jpg?s=612x612&w=0&k=20&c=LqJsLyu0AAALwYJzw4YklIf7cASbUKUoMzZ-FP9gaD8=" ,
            caption:"Electronics",
        }
    ]

  ),[])

  return (
    <div className="container mt-5">
      <h2 className="dispaly-6 fw-bold text-center">About Us</h2>
      <hr />
      <p className="lead text-center mt-4 fs-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        veniam earum velit deserunt in unde ullam pariatur non error dolore cum
        nihil repellat ab adipisci itaque excepturi nemo, laboriosam aspernatur?
        Veritatis quae, ex amet velit repudiandae, corrupti doloribus atque
        dolore reiciendis consequuntur aspernatur optio nesciunt accusantium
        dicta incidunt suscipit voluptatem eius tenetur iure, animi perspiciatis
        vitae quis excepturi! Perspiciatis, est! Dicta dolore labore consectetur
        itaque amet! Veniam tempora odio numquam dolorem harum aspernatur
        deserunt, autem quaerat eos aliquam atque velit, hic illum dolores earum
        quas ipsum eveniet doloremque. Velit, quaerat? Tenetur reiciendis, enim,
        itaque cupiditate commodi et ducimus dolores qui rem voluptatibus,
        temporibus placeat debitis deserunt delectus laborum mollitia.
        Distinctio ipsam eum nostrum voluptate ipsum fugiat, odio eos atque
        laborum.
      </p>
      <h2 className="dispaly-6 fw-bold text-center mt-5"> Our Products</h2>
      <hr />
      <div className="container-fluid mt-5">
        <div className="row justify-content-center gy-3">
            { ourProducts.map(({image,caption})=>(
               <div key={caption} className="col-10 col-md-5 col-lg-3"> 
                  <figure className="border border-2 rounded-3 overflow-hidden">
                     <img 
                      src={image}
                      alt={caption} 
                      className="w-100"
                      height="170"
                      loading="lazy"/>
                     <figcaption className="lead text-center my-2">{caption}</figcaption>
                  </figure>
               </div> 
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default About;
