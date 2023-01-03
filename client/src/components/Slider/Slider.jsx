import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import './Slider.scss'

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://res.cloudinary.com/doizpp8s5/image/upload/v1672455812/fashion/f2_fdkuwk.jpg",
        "https://res.cloudinary.com/doizpp8s5/image/upload/v1672455807/fashion/f5_yzxm9x.jpg",
        "https://res.cloudinary.com/doizpp8s5/image/upload/v1672455794/fashion/f3_mbrtgq.jpg",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }
    const nextSlide = ()=> {
        setCurrentSlide (currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

  return (
    <div className='slider'>
       <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
       </div>
       <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon />
        </div>
       </div>
    </div>
  )
}

export default Slider