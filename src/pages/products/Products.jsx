import React from 'react'
import { Link } from 'react-router-dom';
import { lightsData } from "../../helpers/helpers";
const Products = () => {
  return (
    <div className='total-width mx-auto py-14 px-5  sm:px-20 mt-10'>
    <h1 className='text-center text-white text-3xl font-bold capitalize'>
       Products
    </h1>
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-6'>
      {lightsData.map((product) => (
        <div key={product.id} className='p-4  cursor-pointer rounded-xl max-sm:max-w-[320px] shadow-lg max-w-[300px] w-full'>
          <Link to={`/product/${product.id}`}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className='w-full h-[250px] object-cover rounded-xl'
            />
            <h3 className='text-lg font-semibold text-white mt-5'>{product.name}</h3>
            {/* <p className='text-gray-400'>{product.watt} Watt</p> */}
            {/* <p className='text-lg font-semibold text-orange-600'>
              ₹ {product.price}
            </p> */}
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Products
