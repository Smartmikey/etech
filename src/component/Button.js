import styled from "styled-components";


const Button = styled.button`
    background-color: var(--mainGreen);
    border-radius: 5px;
    color: var(--mainWhite) !important;
    padding: 10px 2rem !important;
    // font-weight: bold;
    outline: none;
    border: none;
    &:focus{
        border: none;

    }
    &:hover{
        background: var(--lightGreen);
    }

`;

export default Button;