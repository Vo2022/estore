import React from 'react';
import './Cart.scss';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const Cart = () => {

    const data = [
        {
            id: 1,
            img: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672596065/fashion/2529148_rune5y.jpg',
            img2: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672596065/fashion/2529148_rune5y.jpg',
            title: 'Court Mid Low 2 Sneakers ',
            desc: "Retro court design brings modern street attitude.",
            isNew: true,
            price: 110,
            newPrice: 50,
        },
        {
            id: 2,
            img: " https://res.cloudinary.com/doizpp8s5/image/upload/v1672536761/fashion/72454_ucejty.jpg",
            title: "Long Sleeve Black T-Shirt ",
            desc: "Double Knit Slim Fit Long Sleeve",
            price: " 89",
            newPrice: "59 ",
            
        },
    ]

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data.map(item => (
            <div className="item"> 
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price"> 1 x ${item.price}</div>
            </div>
            <DeleteOutlineOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart