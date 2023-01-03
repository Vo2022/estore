import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

const data = [
    {
        id: 1,
        img: "https://res.cloudinary.com/doizpp8s5/image/upload/v1672699358/fashion/t-shirts/voncuth_qkkjmc.jpg ",
        title: "Vintage Crew Neck Cotton T-Shirt",
        oldPrice: "45",
        newPrice: "29 ",
        
    },
    {
        id: 2,
        img: " https://res.cloudinary.com/doizpp8s5/image/upload/v1672536761/fashion/72454_ucejty.jpg",
        title: "Long Sleeve Black T-Shirt ",
        oldPrice: "89",
        newPrice: "59 ",
        
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/doizpp8s5/image/upload/v1672536742/fashion/14769305_mslcpl.jpg ",
        title: " Futura Icon Graphic T-Shirt",
        oldPrice: "69",
        newPrice: "49",
        
    },
    {
        id: 4,
        img: " https://res.cloudinary.com/doizpp8s5/image/upload/v1672536748/fashion/871494_n92jnn.jpg",
        title: "One-Button Notched Lapel Shaped Blazer",
        oldPrice: "89",
        newPrice: "69",
        
    },
]


const FeaturedProducts = ({type}) => {
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

export default FeaturedProducts