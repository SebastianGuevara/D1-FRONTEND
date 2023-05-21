import styled from "styled-components";

export const CustomersButton = styled.button`
    font-family: 'Nunito', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    font-size: 1.5rem;
    gap: 5px;
    color: #FFFFFF;
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: transparent;
`
export const ShoppingCartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    outline: none;
    border: transparent;
    cursor: pointer;
    margin-right: 25px;
`
export const AddToCartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DB071E;
    outline: none;
    border: transparent;
    width: 100%;
    height: 30px;
    color: #ffffff;
    font-weight: 0;
    font-size: 0.9rem;
    border-radius: 10px;
    gap: 5px;
    cursor: pointer;
    &:hover{
        background-color: #f9283e;
    }
`