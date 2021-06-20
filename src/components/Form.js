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
            value: '5'
        }, 
        {   
            name: '2', 
            value: '3'
        },
        {   
            name: '3', 
            value: '4'
        },
        {   
            name: '4', 
            value: '6'
        }
    ];


    console.log(textInputValue, textAreaValue, selectValue, checkboxValue, radioValue, switchValue);

    return(
        <>
        <FormContainer>
            <FormLabel>
                Test Form
            </FormLabel>
            <TextInputComponent label="What is the meaning of life?" required={false} onBlur={(value) => setTextInputValue(value)} />
            <TextAreaComponent label="What is the meaning of life again?" required={true} onBlur={(value) => setTextAreaValue(value)} />
            <SelectComponent label="Which one you choose?" required={false} onChange={(value) => setSelectValue(value)} />
            <CheckboxComponent label="Which are your favorite ice cream flavors?" list={CHECKBOX_LIST} required={false} onChange={handleSelectChange} />
            <RadioComponent label="What is 2+2" list={RADIO_LIST} required={true} onChange={(value) => setRadioValue(value)} />
            <SwitchComponent label="Toggle?" value={switchValue} required={true} onChange={(value) => setSwitchValue(value)} />
        </FormContainer>
        </>
    );
}