import styled from "styled-components";

export const SerachInput = styled.input`
    font-family: 'Nunito', sans-serif;
    display: flex;
    padding: 4px 0px 4px 11px;
    width: 500px;
    height: 35px;
    border-radius: 15px;
    outline: none;
    border: transparent;

    &::placeholder{
        color: #bfbfbf;
    }
`
export const ProductQuantityInput = styled.input`
    font-family: 'Nunito', sans-serif;
    padding: 4px;
    border: transparent;
    background-color: #F2F2F2;
    width: 60%;
    height: 13px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-justify: center;
    font-weight: 600;
`
export const DirectionInput = styled.input`
    font-family: 'Nunito', sans-serif;
    font-size: 0.8rem;
    padding: 4px;
    width: 40%;
    height: 9px;
    border-radius: 30px;
    border: transparent;
    background-color: #F2F2F2;
    outline: none;
`
export const LoginTextInput = styled.input`
    font-family: 'Nunito', sans-serif;
    font-size: 0.8rem;
    padding: 4px;
    width: 70%;
    height: 20px;
    border-radius: 30px;
    border: transparent;
    background-color: #F2F2F2;
    outline: none;
    &[type=number]::-webkit-inner-spin-button, 
    &[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }

`
