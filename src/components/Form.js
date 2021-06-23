import React, { useState } from 'react';
import FormContainer from '../elements/formElements/FormContainer';
import TextInputComponent from './fieldComponents/TextInput';
import FormLabel from '../elements/formElements/FormLabel';
import SelectComponent from './fieldComponents/SelectComponent';
import TextAreaComponent from './fieldComponents/TextArea';
import CheckboxComponent from './fieldComponents/CheckboxComponent';
import RadioComponent from './fieldComponents/RadioComponents';
import SwitchComponent from './fieldComponents/SwitchComponent';

const useForm = () => {
    const [textInputValue, setTextInputValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [checkboxValue, setCheckboxValue] = useState([]);
    const [radioValue, setRadioValue] = useState('');
    const [switchValue, setSwitchValue] = useState(false);

    const handleCheckboxChange = (checked, value) => {
        console.log('checkbox');
        if (checked) {
            setCheckboxValue([...checkboxValue, value]);
        } else {
            setCheckboxValue(checkboxValue.filter(i => i !== value ));
        }
    }

    const handleTextInput = (value) => {
        setTextInputValue(value);
    }

    const handleTextAreaInput = (value) => {
        setTextAreaValue(value)
    }

    const handleRadioInput = (value) => {
        setRadioValue(value);
    }

    const handleSelectInput = (value) => {
        setSelectValue(value);
    }

    const handleSwitchInput = (value) => {
        setSwitchValue(value);
    }

    return { textInputValue, textAreaValue, selectValue, checkboxValue, radioValue, switchValue, handleCheckboxChange, handleTextInput, handleTextAreaInput, handleSwitchInput, handleRadioInput, handleSelectInput };
}

const CHECKBOX_LIST = [
    {
        name: 'chocolate',
        value: 'Chocolate',
        disabled: true
    },
    {
        name: 'vanilla',
        value: 'Vanilla',
        disabled: false
    },
    {
        name: 'strawberry',
        value: 'Strawberry',
        disabled: false
    }
];

const RADIO_LIST = [
    { 
        name: '1', 
        value: '5',
        disabled: true
    }, 
    {   
        name: '2', 
        value: '3',
        disabled: false
    },
    {   
        name: '3', 
        value: '4',
        disabled: false
    },
    {   
        name: '4', 
        value: '6',
        disabled: false
    }
];

export const Form = (props) => {

    const { textInputValue, textAreaValue, selectValue, checkboxValue, radioValue, switchValue, handleCheckboxChange, handleTextInput, handleTextAreaInput, handleRadioInput, handleSwitchInput, handleSelectInput } = useForm();

    console.log(textInputValue, textAreaValue, selectValue, checkboxValue, radioValue, switchValue);

    return(
        <>
        <FormContainer>
            <FormLabel data-testid="form_name">
                {props.formName}
            </FormLabel>
            <SwitchComponent disabled={false} label="Do you live in the US?" value={switchValue} required={true} onChange={handleSwitchInput} />
            <TextInputComponent disabled={!switchValue} label="What is your address?" required={false} onBlur={handleTextInput} />
            <TextAreaComponent label="What is the meaning of life again?" required={true} onBlur={handleTextAreaInput} />
            <SelectComponent label="Which one you choose?" required={false} onChange={handleSelectInput} />
            <CheckboxComponent label="Which are your favorite ice cream flavors?" list={CHECKBOX_LIST} required={false} onChange={handleCheckboxChange} />
            <RadioComponent label="What is 2+2" list={RADIO_LIST} required={true} onChange={handleRadioInput} />
        </FormContainer>
        </>
    );
}