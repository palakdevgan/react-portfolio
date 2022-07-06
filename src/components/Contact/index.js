import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    //console.log(formState);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div className="about">
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className='row-input'>
                    <div className="col-25">
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                </div>
                <div className='row-input'>
                    <div className="col-25">
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className="col-75">
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                </div>
                <div className='row-input'>
                    <div className="col-25">
                        <label htmlFor="message">Message:</label>
                    </div>
                    <div className="col-75">
                        <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                    </div>
                </div>
                <div className="buttonHolder">
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
              
              <button data-testid="button" type="submit">Submit</button>
              
              </div>
               
                 
                  
                
            </form>
        </div>
    )
}

export default ContactForm;