import React from 'react';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

export default function BtnSlider(props) {

    return (
        <button onClick={props.moveSlide} className={props.direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
            <img src={props.direction === 'next' ? rightArrow : leftArrow} alt="changer" />    
        </button>
    );
};