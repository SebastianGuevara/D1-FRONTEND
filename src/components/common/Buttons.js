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
export const AddDeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    outline: none;
    border: transparent;
    color:#DB071E;
    height:24px;
    width:24px;
    border-radius:1000px;
    font-size: 3rem;
    cursor: pointer;
`
export const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    outline: none;
    border: transparent;
    color: #9f9f9f;
    position: absolute;
    right: -185px;
    width: 100%;
    cursor: pointer;
    transition: 0.5s;
    font-size: 0.9rem;
    font-weight: 600;

    &:hover{
        color: black;
    }

`