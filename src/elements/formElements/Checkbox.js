import styled from 'styled-components';

export default styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    height: 1.2em;
    width: 1.2em;
    padding: 0;
    background-color: white;
    border: 1px solid #3B4256;
    border-radius: 2px;
    :hover{
        cursor: pointer;
    }
    :checked {
        background-color: #3B4256;
    };
    :after{
        font-family: 'Font Awesome 5 Free';
        font-weight: 800;
        color: white;
        content: "\f00c";
    }
`