import React, { useState } from 'react';
import { ArrowUp } from 'react-bootstrap-icons';

const Rsvp = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [formState, setFormState] = useState({ name: '', phone: '' });

    const handleChange = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await fetch('/api', {
                method: 'POST',
                body: formState,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.message}`);
            }

            const result = await response.json();
            console.log(result);
        } catch (e) {
            console.error(e);
        }

        setFormState({ name: '', phone: '' });

    };

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
                <form className={`rsvp-form ${!formVisible && 'hide'}`} onSubmit={handleSubmit}>
                    <p className='rsvp-info'>Date: Saturday, June 11, 2022; 1:30-3:00 PM</p>
                    <p className='rsvp-info'>Address: 4038 N Ira Hodges Scenic Pkwy, Eagle Mountain</p>
                    <input 
                        type='text' 
                        className='form-input'
                        name='name'
                        placeholder='Name...'
                        defaultValue={formState.name}
                        onBlur={handleChange}
                    />
                    <input 
                        type='tel' 
                        className='form-input'
                        name='phone'
                        placeholder='Phone number...'
                        defaultValue={formState.phone}
                        onBlur={handleChange}
                    />
                    <button className='btn submit-btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Rsvp;