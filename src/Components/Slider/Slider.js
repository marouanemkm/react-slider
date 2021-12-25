import {useState} from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider';

export default function Slider() {

    const [slide, setSlide] = useState({
        index: 1,
        inProgress: false
    });

    const nextSlide = () => {
        if(slide.index !== dataSlider.length && !slide.inProgress) {

            setSlide({index: slide.index + 1, inProgress: true});

            setTimeout(() => {
                setSlide({index: slide.index + 1, inProgress: false})
            }, 400);

        } else if (slide.index === dataSlider.length && !slide.inProgress) {

            setSlide({index: 1, inProgress: true});

            setTimeout(() => {
                setSlide({index: 1, inProgress: false})
            }, 400);

        };
    };

    const prevSlide = () => {
        if(slide.index !== 1 && !slide.inProgress) {
            setSlide({index: slide.index - 1, inProgress: true});
            setTimeout(() => {
                setSlide({index: slide.index - 1, inProgress: false})
            }, 400);
        } else if (slide.index === 1 && !slide.inProgress) {
            setSlide({index: 5, inProgress: true});
            setTimeout(() => {
                setSlide({index: 5, inProgress: false})
            }, 400);
        };
    };

    const moveDot = (i) => {
        setSlide({index: i, inProgress: false});
    };

    return (
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slide.index === index + 1 ? "slide active-anim" : "slide"}>
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={'next'} />
            <BtnSlider moveSlide={prevSlide} direction={'prev'} />

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => {
                    return ( <div key={index + 1} style={{cursor: 'pointer'}} onClick={() => moveDot(index + 1)} className={slide.index === index + 1 ? 'dot active' : 'dot'}></div> )
                })}
            </div>
        </div>
    );
};