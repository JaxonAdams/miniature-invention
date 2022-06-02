import React from 'react';

const Gallery = () => {
    return (
        <div id='gallery'>
            <h2 className='section-title'> Maternity Photos </h2>
            
            <div className='slider-links'>
                <a className='slider-link' href="#slide-1">1</a>
                <a className='slider-link' href="#slide-2">2</a>
                <a className='slider-link' href="#slide-3">3</a>
                <a className='slider-link' href="#slide-4">4</a>
                <a className='slider-link' href="#slide-5">5</a>
            </div>

            <div className="slider">
                <div className="slide" id="slide-1"> </div>
                <div className="slide" id="slide-2"> </div>
                <div className="slide" id="slide-3"> </div>
                <div className="slide" id="slide-4"> </div>
                <div className="slide" id="slide-5"> </div>
            </div>
        </div>
    );
};

export default Gallery;