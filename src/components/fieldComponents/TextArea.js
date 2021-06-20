import React from 'react';
import InputLabel from '../../elements/formElements/InputLabel';
import InputError from '../../elements/formElements/InputError';
import TextAreaInput from '../../elements/formElements/TextAreaInput';

const TextAreaComponent = (props) => {
    const [error, setError] = React.useState('');
    const [value, setValue] = React.useState('');

    const handleBlur = () => {
        if (!value && props.required) {
            setError('Field can not be empty');
        } else {
            props.onBlur(value);
            setError('');
        }
    }

    return(
        <div style={{ marginBottom: '2em' }}>
            <InputLabel>{props.required ? <div>Label <label style={{ color: 'red' }}>*</label></div> : 'Label' }</InputLabel>
            <TextAreaInput placeholder="Text" error={error.legnth > 0 ? true : false} onChange={(e) => setValue(e.target.value)} onBlur={handleBlur}></TextAreaInput>
            {error.length > 0 ? <InputError>{error}</InputError> : <></> }
        </div>
    );
}

export default TextAreaComponent;