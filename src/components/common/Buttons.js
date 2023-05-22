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
    justify-content: flex-start;
    background-color: transparent;
    outline: none;
    border: transparent;
    color: #9f9f9f;
    position: absolute;
    right: -185px;
    width: 55%;
    cursor: pointer;
    transition: 0.5s;
    font-size: 0.9rem;
    font-weight: 600;

    &:hover{
        color: black;
    }
`
export const EmptyCartButton = styled.button`
    background-color: #FDEEEF;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    align-self: center;
    outline: none;
    border: transparent;
    border-radius: 10px;
    height: 40px;
    color: #EC5B6C;
    font-weight: 600;
    gap: 15px;
    margin-top: 15px;
    cursor: pointer;
    transition: 0.5s;
`
export const PaymentButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DB071E;
    outline: none;
    border: transparent;
    width: 20%;
    height: 40px;
    color: #ffffff;
    font-weight: 0;
    font-size: 1.1rem;
    border-radius: 10px;
    gap: 5px;
    cursor: pointer;
    transition: 0.5s;
    align-self: center;
    margin-left: 75%;
    &:hover{
        background-color: #f9283e;
    }
    &:disabled{
        background-color: #F5F5F5;
        color: #cacaca;
        border: 1px solid #cacaca;
        cursor: not-allowed; 
    }
`
export const LoginButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    outline: none;
    border: transparent;
    width: 130px;
    height: 40px;
    color: #ffffff;
    font-weight: 0;
    font-size: 1.2rem;
    border-radius: 10px;
    font-weight:600;
    gap: 5px;
    cursor: pointer;
    transition: 0.5s;
    align-self: center;
`

export const DefaultButton = styled.button`
    display: flex;
    font-family: 'Nunito', sans-serif;
    align-items: center;
    justify-content: center;
    background-color: #DB071E;
    outline: none;
    border: transparent;
    width: 50%;
    height: 30px;
    color: #ffffff;
    font-weight: 0;
    font-size: 0.8rem;
    border-radius: 10px;
    gap: 5px;
    cursor: pointer;
    transition: 0.5s;
    align-self: center;
    &:hover{
        background-color: #f9283e;
    }
`
export const AdminMenuButton = styled.button`
    background-color: transparent;
    margin: 0px 25px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: transparent;
    outline: none;
    cursor: pointer;
    padding: 15px 15px 15px 24px;
    border-radius: 30px;
    transition: 0.5s;
    position: relative;

    &:hover{
       background-color: #fce0e1; 
    }
`