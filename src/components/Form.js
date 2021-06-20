import React, { useState } from 'react';
import FormContainer from '../elements/formElements/FormContainer';
import { TextInputComponent } from './fieldComponents/TextInput';
import FormLabel from '../elements/formElements/FormLabel';
import SelectComponent from './fieldComponents/SelectComponent';
import TextAreaComponent from './fieldComponents/TextArea';
import CheckboxComponent from './fieldComponents/CheckboxComponent';
import RadioComponent from './fieldComponents/RadioComponents';
import SwitchComponent from './fieldComponents/SwitchComponent';

export const Form = () => {

    const [textInputValue, setTextInputValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [checkboxValue, setCheckboxValue] = useState([]);
    const [radioValue, setRadioValue] = useState('');
    const [switchValue, setSwitchValue] = useState(false);

    const handleSelectChange = (checked, value) => {
        if (checked) {
            setCheckboxValue([...checkboxValue, value]);
        } else {
            setCheckboxValue(checkboxValue.filter(i => i !== value ));
        }
    }

    const CHECKBOX_LIST = [
        {
            name: 'chocolate',
            value: 'Chocolate',
        },
        {
            name: 'vanilla',
            value: 'Vanilla'
        },
        {
            name: 'strawberry',
            value: 'Strawberry'
        }
    ];

    const RADIO_LIST = [
        { 
            name: '1', 
            value: '1'
        }, 
        {   
            name: '2', 
            value: '2'
        }
    ];


    console.log(textInputValue, textAreaValue, selectValue, checkboxValue, radioValue, switchValue);
    return(
        <>
        <FormContainer>
            <FormLabel>
                My Form
            </FormLabel>
            <TextInputComponent required={false} onBlur={(value) => setTextInputValue(value)} />
            <TextAreaComponent required={true} onBlur={(value) => setTextAreaValue(value)} />
            <SelectComponent required={false} onChange={(value) => setSelectValue(value)} />
            <CheckboxComponent list={CHECKBOX_LIST} required={false} onChange={handleSelectChange} />
            <RadioComponent list={RADIO_LIST} required={true} onChange={(value) => setRadioValue(value)} />
            <SwitchComponent value={switchValue} required={true} onChange={(value) => setSwitchValue(value)} />
        </FormContainer>
        </>
    );
}