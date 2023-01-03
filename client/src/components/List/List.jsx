
import React from 'react'
import './List.scss'
import Card from '../Card/Card'

const List = () => {

    const data = [
        {
            id: 1,
            img: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672703592/fashion/shoes/shoes2_m8o8m3.jpg',
            img2: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672596065/fashion/2529148_rune5y.jpg',
            title: 'Short Sleeve Yellow T-Shirt',
            isNew: true,
            oldPrice: 110,
            newPrice: 50,
        },
        {
            id: 2,
            img: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672703600/fashion/shoes/Shoes111_utdtm1.jpg',
            img2: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672596065/fashion/2529148_rune5y.jpg',
            title: 'Short Sleeve Yellow T-Shirt',
            isNew: true,
            oldPrice: 90,
            newPrice: 50,
        },
        {
            id: 3,
            img: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672703596/fashion/shoes/shoes3_v4patc.jpg',
            img2: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672596065/fashion/2529148_rune5y.jpg',
            title: 'Short Sleeve Yellow T-Shirt',
            isNew: true,
            oldPrice: 80,
            newPrice: 50,
        },
        {
            id: 4,
            img: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672703583/fashion/shoes/Shoes232_flnwkr.jpg',
            img2: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672596065/fashion/2529148_rune5y.jpg',
            title: 'Short Sleeve Yellow T-Shirt',
            isNew: true,
            oldPrice: 70,
            newPrice: 50,
        }
    ]

  return (
    <div className='list'>
        {data.map((item) => (
            <Card item = {item} key ={item.id} />
        ))}
    </div>
  )
}

export default List