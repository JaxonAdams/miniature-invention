import React, { useState } from 'react';
import { ArrowUp } from 'react-bootstrap-icons';

const Rsvp = () => {
    const [formVisible, setFormVisible] = useState(false);

    const showForm = () => {
        setFormVisible(!formVisible);
    };

    return (
        <div id='rsvp'>
            <h2 className='section-title'> - RSVP - </h2>
            <div className='form-container'>
                <div className='form-title-container' onClick={showForm}>
                    <ArrowUp className={`arrow ${!formVisible && 'arrow-down'}`} />
                    <h3 className='form-title'>Click Here to RSVP!</h3>
                    <ArrowUp className={`arrow ${!formVisible && 'arrow-down'}`} />
                </div>
                <form className={`rsvp-form ${!formVisible && 'hide'}`}>
                    <input 
                        type='text' 
                        className='form-input'
                        name='name'
                        placeholder='Name...' 
                    />
                    <input 
                        type='tel' 
                        className='form-input'
                        name='phone'
                        placeholder='Phone Number...' 
                    />
                    <button className='btn submit-btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Rsvp;