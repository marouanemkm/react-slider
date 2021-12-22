import {useState, useEffect} from 'react';
import './Slider.css';
import dataSlider from './dataSlider';

export default function Slider() {

    const [slide, setSlide] = useState({
        index: 1,
        inProgress: false
    });

    return (
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slide.index === index + 1 ? "slide active-anim" : "slide"}>
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" />
                    </div>
                )
            })}
        </div>
    );
};