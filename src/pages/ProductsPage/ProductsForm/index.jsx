import React, { useEffect, useState } from 'react'

const ProductsForm = (props) => {
  const { setProducts, selectedProduct } = props;

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [measurement, setMeasurement] = useState('');

  useEffect(() => {
    if(!!selectedProduct) {
        setMeasurement(selectedProduct?.measurement);
        setName(selectedProduct.name);
        setPrice(selectedProduct.price);
        setQuantity(selectedProduct.quantity);
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, quantity, price, measurement } = e.target;

    setProducts((prev) => [...prev, {
        id: prev.length + 1,
        name: name.value,
        quantity: quantity.value,
        measurement: measurement.value,
        price: price.value,
    }]);

    setName('')
    setQuantity('')
    setMeasurement('')
    setPrice('')
  }


  return (
    <form className='bg-stone-900 max-w-md m-auto p-6 mt-6 rounded shadow-xl/40' onSubmit={handleSubmit}>
      <h1 className='flex justify-center items-center text-3xl m-8'>Welcome</h1>
      <div className='flex flex-col justify-center items-left'>
        <label htmlFor="name" className='text-xl pl-2'>Name</label>
        <input className='bg bg-stone-300 outline-0 text-stone-700 p-2 m-2 rounded'
            onInput={(e) => setName(e.target.value)}
            value={name}
            id='name' 
            type="text"
            name='name'
            placeholder='type name...' 
        />
      </div>

    <div className='flex flex-col justify-center items-left'>
        <label htmlFor="quantity" className='text-xl pl-2'>Quantity</label>
        <input className='bg bg-stone-300 outline-0 text-stone-700 p-2 m-2 rounded'
            onInput={(e) => setQuantity(e.target.value)}
            value={quantity}
            id='quantity' 
            type="number"
            name='quantity'
            placeholder='00' 
        />
      </div>

    <div className='flex flex-col justify-center items-left'>
        <label htmlFor="measurement0" className='text-xl pl-2'>Measurement</label>
        <select name='measurement' onChange={(e) => setMeasurement(e.target.value)} value={measurement} className='bg bg-stone-300 outline-0 text-stone-700 p-2 m-2 rounded'>
            <option value="">Select Measurement</option>
            <option value="quantity">Qt.</option>
            <option value="kilogram">Kg.</option>
            <option value="litre">L.</option>
        </select>
      </div>

    <div className='flex flex-col justify-center items-left'>
        <label htmlFor="price" className='text-xl pl-2'>Price</label>
            <input className='bg bg-stone-300 outline-0 text-stone-700 p-2 m-2 rounded'
                onInput={(e) => setPrice(e.target.value)}
                value={price}
                id='price' 
                type="text"
                name='price'
                placeholder='00'
             />
      </div>

      <div className='flex flex-col justify-center items-left'>
        <button type='submit' className='bg bg-zinc-400 outline-0 text-stone-950 p-2 m-2 mt-5 rounded cursor-pointer hover:scale-104 hover:bg-zinc-500 transition-all duration-300 ease-in-out'>Save</button>
      </div>
    </form>
  )
}

export default ProductsForm
