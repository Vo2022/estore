import React,{ useState} from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';


const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://res.cloudinary.com/doizpp8s5/image/upload/v1672625454/fashion/14769304_e284k7.jpg",
    "https://res.cloudinary.com/doizpp8s5/image/upload/v1672625455/fashion/14769482_fnhmdk.jpg",
  ];


  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)}/>
          <img src={images[1]} alt=""  onClick={e => setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing eliefd
        Lorem ipsum dolor sit amet consectetur adipisicing elie
        </p>
        <div className='quantity'>
          <button onClick={()=> setQuantity(prev =>( prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={()=> setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon />
            ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tags: T-Shirt, Polo, Black</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product