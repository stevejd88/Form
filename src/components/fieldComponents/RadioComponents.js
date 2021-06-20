import React from 'react';
import CheckBoxLabel from '../../elements/formElements/CheckBoxLabel';
import InputLabel from '../../elements/formElements/InputLabel';
import RadioInput from '../../elements/formElements/RadioInput';

const RadioComponent = (props) => {

    return(
        <div style={{ marginBottom: '2em' }}>
            <InputLabel>{props.required ? <div>{props.label} <label style={{ color: 'red' }}>*</label></div> : props.label }</InputLabel>
            {props.list.map((radio, i) => {
                return(
                    <div key={i} style={{ display: 'flex', marginTop: '1em', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <div style={{ width: '1em', height: '1em', borderRadius: '50%', border: '1px solid #3B4256', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <RadioInput name='radio' onChange={(e) => props.onChange(e.target.value)} value={radio.value} />
                        </div>
                        <CheckBoxLabel for={radio.name}>{radio.value}</CheckBoxLabel>
                    </div>
                );
            })}
        </div>
    );
}

export default RadioComponent;