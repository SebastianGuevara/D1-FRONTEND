import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: relative;
`
export const HeaderContainer = styled.header`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 13% 16% 47% 25%;
    background-color: #DB071E;
    height: 92px;
    width: 100vw;
    position: absolute;
    top: 0;
    overflow: hidden;
    z-index:2;
`

export const LogoContainer = styled.div`
    background-color: transparent;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 50px;
`
export const CustomersContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const ShoppingCartContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
`
export const SliderContainer = styled.div`
    background-color: green;
    display: flex;
    height: 500px;
    width: 100vw;
`