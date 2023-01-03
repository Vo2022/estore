import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Cart from '../Cart/Cart';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
              <div className="item">
                <img src="/img/logo.svg" alt="" />
                <KeyboardArrowDownIcon />
              </div>
              <div className="item">
                <span>USD</span>
              <KeyboardArrowDownIcon />
              </div>
              <div className="item">
                <Link className="link" to="/products/1">Men's </Link>
              </div>
              <div className="item">
                <Link className="link" to="/products/2">Women's </Link>
              </div>
              <div className="item">
                <Link className="link" to="/products/3">Kids'</Link>
              </div>
              <div className="item">
                <Link className="link" to="/products/4">Accessories </Link>
              </div>
            </div>
            <div className="center">
              <Link className="link" to="/">LAM's STORE</Link>
            </div>
            <div className="right">
            <Link className="link" to="/">Order Status</Link>
            <Link className="link" to="/">Find a Store</Link>
            <Link className="link" to="/">Gift Cards</Link>
            <Link className="link" to="/">Help</Link>
            </div>
            <div className="icons">
              <SearchIcon />
              <PersonOutlineOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className="cartIcon" onClick={()=> setOpen(!open)}>
              {console.log(open)}
              <ShoppingCartOutlinedIcon />
              <span>0</span>
              </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar