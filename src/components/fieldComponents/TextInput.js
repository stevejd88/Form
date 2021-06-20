import React from 'react';
import TextInput from '../../elements/formElements/TextInput';
import InputLabel from '../../elements/formElements/InputLabel';
import InputError from '../../elements/formElements/InputError';

export const TextInputComponent = (props) => {
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
            <TextInput placeholder="Text" error={error.length > 0 ? true : false } onChange={(e) => setValue(e.target.value)} onBlur={handleBlur}/>
            {error.length > 0 ? <InputError>{error}</InputError> : <></> }
        </div>
    );
}