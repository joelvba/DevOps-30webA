import Products from "../components/Product"
import { useState, useEffect } from "react"

export default function Home() {
  const [products, setProducts]= useState([]);
  const [loading, setLoading]=useState(false);
  const [error, setError]= useState(false);

  return (
    <>    
        <Products/>
    </>
  )
}
