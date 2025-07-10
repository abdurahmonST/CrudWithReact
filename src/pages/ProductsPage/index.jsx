import React, { useEffect, useState } from 'react'

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false)
      });
  }, []);

  if(loading) {
    return (
      <h1>Loading....</h1>
    )
  }

  return (
    <div>
      <h1 className='text-4xl flex justify-center p-3 m-3'>Products</h1>
        <div className='grid grid-cols-4 bg bg-stone-900 gap-3 p-4 m-4'>
            {products.map(product => (
              <div className="flex flex-col justify-center bg-stone-700 items-center border-1 rounded" key={product.id}>
                <img className='w-35' src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <button className='bg bg-green-500 m-10 w-30 rounded cursor-pointer'>Buy</button>
              </div>
            ))}
        </div>
    </div>
  )
}

export default ProductsPage
