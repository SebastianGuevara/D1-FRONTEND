import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #f2f2f2;
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
    height: 345px;
    width: 100%;
`
export const PagesContainer = styled.div`
    max-width: 1332.1px;
    width: 95%;
    height: calc(100vh - 92px);
    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ProductsContainer = styled.div`
    display: flex;
    background-color:transparent;
    width: 100%;
    height: auto;
    font-family: 'Nunito', sans-serif;
    flex-direction: column;
`
export const ProductsBannerContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;
`
export const ProductBannerContainer = styled.div`
    background-color: #FFFFFF;
    width: 214px;
    height: 305px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.05);
    padding: 12px 12px 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: initial;
    text-justify: initial;
    gap: 15px;
    
    &:hover{
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.25);
    }
`
export const AddDeleteContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    outline: none;
    border: 1px solid #DB071E;
    width: 100%;
    height: 30px;
    color: #ffffff;
    font-weight: 0;
    font-size: 0.9rem;
    border-radius: 10px;
    gap: 10px;
`