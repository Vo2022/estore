import React from 'react'
import './TrendingProducts.scss'
import Card from '../Card/Card'

const data = [
    {
        id: 1,
        img: "https://res.cloudinary.com/doizpp8s5/image/upload/v1672698590/fashion/t-shirts/ryan_g23aox.jpg ",
        title: "Vintage Crew Neck Cotton T-Shirt",
        oldPrice: "45",
        newPrice: "29 ",
        
    },
    {
        id: 2,
        img: " https://res.cloudinary.com/doizpp8s5/image/upload/v1672698592/fashion/t-shirts/faith-_rodxa1.jpg",
        title: "We the Daisy Ribbed Braided Cotton T-Shirt",
        oldPrice: "89",
        newPrice: "59 ",
        
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/doizpp8s5/image/upload/v1672698597/fashion/t-shirts/christia_uj4yae.jpg ",
        title: "90's Easy T-Shirt",
        oldPrice: "69",
        newPrice: "49",
        
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/doizpp8s5/image/upload/v1672698604/fashion/t-shirts/david-_ju3tuw.jpg",
        title: "The Boxy Goodie Cotton Graphic",
        oldPrice: "89",
        newPrice: "69",
        
    },
]


const TrendingProducts = ({type}) => {

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>Online & In Stores
                ALL SALES FINAL. 
                Online prices as marked; in-store markdowns taken at register. 
                Total savings up to 80% based on comparable values.
            </p>
        </div>
        <div className="bottom">
        {data.map((item) => (
            <Card item = {item} key={item.id}/>
        ))}
        </div>
    </div>
  )
}

export default TrendingProducts