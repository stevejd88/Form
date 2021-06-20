import React from 'react';
import Checkbox from '../../elements/formElements/Checkbox';
import CheckBoxLabel from '../../elements/formElements/CheckBoxLabel';
import InputLabel from '../../elements/formElements/InputLabel';

const CheckboxComponent = (props) => {
    return(
        <div style={{ marginBottom: '2em' }}>
            <InputLabel>{props.required ? <div>Label <label style={{ color: 'red' }}>*</label></div> : 'Label' }</InputLabel>
            {props.list.map((box, i) => {
                return(
                    <div key={i} style={{ display: 'flex', marginTop: '1em', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Checkbox name={box.name} value={box.value} onChange={(e) => props.onChange(e.target.checked, e.target.value)} />
                        <CheckBoxLabel for={box.name}>
                            {box.value}
                        </CheckBoxLabel>
                    </div>
                );
            })}
        </div>
    );
}

export default CheckboxComponent;