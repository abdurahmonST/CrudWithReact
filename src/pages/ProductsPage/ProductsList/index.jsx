import React from 'react';

const ProductsList = ({ products = [], setSelectedProduct, deleteProduct }) => {
  const measurementObj = {
    kilogram: 'Kg',
    quantity: 'Qt.',
    litre: 'L',
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleDelete = (productId) => {
    deleteProduct(productId);
  };

  return (
    <div className="bg-stone-900 max-w-4xl m-auto p-6 mt-6 mb-6 rounded shadow-xl/40">
      <h1 className="flex justify-center items-center text-3xl m-8 text-white">Products List</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-stone-200">
          <thead className="bg-stone-800">
            <tr>
              <th className="p-3 text-xl">ID</th>
              <th className="p-3 text-xl">Name</th>
              <th className="p-3 text-xl">Quantity</th>
              <th className="p-3 text-xl">Price</th>
              <th className="p-3 text-xl">Total</th>
              <th className="p-3 text-xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr
                key={product.id}
                className="border-b border-stone-700 hover:bg-stone-800 transition-all duration-300 ease-in-out"
              >
                <td className="p-3">{product.id}</td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">
                  {product.quantity} {measurementObj[product.measurement]}
                </td>
                <td className="p-3">${product.price}</td>
                <td className="p-3">Total</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-stone-700 px-5 py-1 rounded cursor-pointer hover:bg-stone-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-600 px-5 py-1 rounded cursor-pointer hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;