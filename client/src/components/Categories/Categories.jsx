import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://res.cloudinary.com/doizpp8s5/image/upload/v1672596049/fashion/1661471_moclii.jpg" alt="" />
                <button>
                    <Link className='Sale' to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://res.cloudinary.com/doizpp8s5/image/upload/v1672596049/fashion/1135531_qzsgaw.jpg" alt="" />
                <button>
                    <Link className='Sale' to="/products/1">Woman</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://res.cloudinary.com/doizpp8s5/image/upload/v1672596059/fashion/1075776_jh0wju.jpg" alt="" />
                <button>
                    <Link className='Sale' to="/products/1">New Season</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://res.cloudinary.com/doizpp8s5/image/upload/v1672596060/fashion/pexels-juan-mendez-1536619_fi6nev.jpg" alt="" />
                <button>
                    <Link className='Sale' to="/products/1">EyeWear</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://res.cloudinary.com/doizpp8s5/image/upload/v1672596074/fashion/pexels-godisable-jacob-965324_z4q2wu.jpg" alt="" />
                <button>
                    <Link className='Sale' to="/products/1">Shoes</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://res.cloudinary.com/doizpp8s5/image/upload/v1672596070/fashion/pexels-lumn-322207_aypbtg.jpg" alt="" />
                <button>
                    <Link className='Sale' to="/products/1">Accessories</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories