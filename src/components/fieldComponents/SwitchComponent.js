import React from 'react';
import InputLabel from '../../elements/formElements/InputLabel';
import SwitchInput from '../../elements/formElements/switch/SwitchInput';
import SwitchContianer from '../../elements/formElements/switch/SwitchContianer';
import SwitchSlider from '../../elements/formElements/switch/SwitchSlider';

const SwitchComponent = (props) => {
    const required = true;

    return(
        <div style={{ marginBottom: '2em' }}>
            <InputLabel>{required ? <div>{props.label} <label style={{ color: 'red' }}>*</label></div> : props.label }</InputLabel>
            <SwitchContianer onClick={() => props.onChange(!props.value)}>
                <SwitchInput />
                <SwitchSlider checked={props.value} ></SwitchSlider>
            </SwitchContianer>
        </div>
    );
}

export default SwitchComponent;