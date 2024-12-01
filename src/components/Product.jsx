import { useState , useEffect } from 'react'
import axios from 'axios'
import '../CSSFILES/Product.module.css'
let Product = () => {
    let [productss, setProducts] = useState([]);
  
    let fetchApi = async () => {                      
      try {
        let productss = await axios.get("https://dummyjson.com/products");
        setProducts(productss.data.products);
        console.log(productss.data.products);
      }
       catch (error) {
        // console.error(error);
        console.log(error);
      }
    };
  useEffect(()=>
        {
          fetchApi()
        },[])
  
    return (
        <>
      <section>
        <h1>Products</h1>
        <ul>
          {productss.map((product) => (
            <>
            <div key={product.id}> {product.title.toUpperCase()} <hr/> <hr/> </div>
            <h1 >{product.category.toUpperCase()}<br/> <img src={product.images} alt="" /> <hr/>{product.description}</h1>
                    </>
          ))}
        </ul>
      </section>
      </>
    );
  };
  
  export default Product;
  