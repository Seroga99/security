import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';
import Mailto from 'react-protected-mailto';

class ContactForm extends PureComponent {
    render() {
        return (
            <div>
              Phone: <Mailto tel='205-454-1234' /><br />
              Email: <Mailto
                    email='hello@coston.cool'
                    headers={
                {subject:'Question from the website'},
                {cc:'friend@coston.cool'}
      }/>
           </div>
                
        );
    }
}

ContactForm.propTypes = {

};

export default ContactForm;