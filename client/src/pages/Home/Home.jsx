import React from 'react'
import Slider from '../../components/Slider/Slider'
import './Home.scss'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type="featured"/>
      <Categories />
      <Contact />
      <TrendingProducts type="trending"/>
    </div>
  )
}

export default Home