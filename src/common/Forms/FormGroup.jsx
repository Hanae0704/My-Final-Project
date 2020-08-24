import React from 'react';
import styled from 'styled-components';

import Input from './Input.jsx';
import Textarea from './Textarea.jsx';

const FormGroup = ({formField, onChange}) => {

    const Control = (formField.inputType === 'textarea') ? Textarea : Input;

    return (
        <FormGroupStyled className='FormGroup'>
            <label htmlFor={formField.id}>{formField.label}:</label>
            {
                (formField.validate.message) &&
            <div className="feedback">{formField.validate.message}</div>
            }
        <Control formField = {formField} onChange={onChange}/>
        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`

margin: 20px 0px;

label {
    font-weight: bold;
}

.feedback {
    font-size: 14px;
    color: red;
    margin: 5px 0px;

    font-family: futura-pt, sans-serif;
                font-weight: 300;
                font-style: normal;
}

.Control {
    input, textarea {
        width: 100%;
        font-size: 16px;
        padding: 5px;

        font-family: futura-pt, sans-serif;
                    font-weight: 500;
                    font-style: normal;
    }
}

textarea {
    height: 200px;
}
    
`;