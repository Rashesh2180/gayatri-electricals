import React from 'react'
import Hero from '../../components/hero/Hero'
import Categories from '../../components/categories/Categories'
import LatestProducts from '../../components/latestproducts/LatestProducts'
import Review from '../../components/review/Review'
import Products from '../../components/products/Products'

const Home = () => {
  return (
    <div className='   px-3 sm:px-5 pb-10'>
        <Hero/>
        <Products/>
        <Categories/>
        <LatestProducts/>
        <Review/>

      
    </div>
  )
}

export default Home
