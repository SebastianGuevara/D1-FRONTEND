import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.main`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow-y: ${props => props.scroll};
    overflow-x: hidden;
    background-color: #f2f2f2;
`
export const HeaderContainer = styled.header`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 13% 16% 47% 16% 9%;
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
export const LoginContainer = styled.div`
    font-family: 'Nunito', sans-serif;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #ffffff;
    font-weight: 600;
    font-size: 0.9rem;
    flex-direction: column;
`
export const ShoppingCartContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
`
export const SliderContainer = styled(Slider)` 
    margin-top: 20px;

    ul li button {
        color: yellow;
        &:before{
            font-size: 1rem;
            color: #DB071E;
        }
        &:after{
            font-size: 1rem;
            color: yellow;
        }
    }
    button{
        color: yellow;
    }


`
export const PagesContainer = styled.div`
    max-width: 1332.1px;
    font-family: 'Nunito', sans-serif;
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
    border-radius: 30px;
    gap: 10px;
`
export const ShadowContainer = styled.div`
    background-color: rgba(0,0,0,calc(${props => props.opacity}*0.3));
    z-index: 3;
    width: 100vw;
    height: 100vh;
    position: absolute;
`
export const CartInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height: 12%;
    object-fit: contain;
    margin: 16px 16px 0px 80px;
    gap: 15px;
`
export const MiniInformationContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
    gap: 5px;
    position: relative;
`
export const ProductsOnCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 81%;
    width: 100%;
    margin: 0px 16px 16px 80px;
    overflow-y: scroll;
    overflow-x: hidden;
    align-items: center;
    justify-content: flex-start;
`
export const ProductOnCartContainer = styled.div`
    margin-top: 10px;
    display: flex;
    background-color: white;
    height: 64px;
    width: 87%;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.07);
    align-items: center;
    padding: 8px;
    gap: 20px;

    &:hover{
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.25);
    }
`
export const ProductOnCartTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    width: 50%;
    gap: 10px;
`
export const PaymentContainer = styled.div`
    display: flex;
    height: 8%;
    width: 100%;
    border-top: 1px solid lightgray;
    position: relative;
    flex-direction: row;
`
export const LoginInputContainer = styled.div`
    width: 169px;
    height: calc(${props => props.height}*124px);
    background-color: #ffffff;
    position: absolute;
    z-index: 3;
    top: 85px;
    left: 76%;
    transition: 0.5s;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: 'Nunito', sans-serif;
`
export const CartContainer = styled.div`
    height: 100vh;
    width: calc(${props => props.width}*533px);
    background-color: #FFFFFF;
    z-index: 4;
    position: absolute;
    right: 0;
    transition: 0.5s;
    font-family: 'Nunito', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
`
export const AdminSideBarContainer = styled.div`
    position: absolute;
    left: 0;
    width: calc(${props => props.width}*365px);
    height: 100vh;
    background-color: #FFFFFF;
    z-index: 4;
    transition: 0.5s;
`
export const MiniHeaderContainer = styled.div`
    height: 56px;
    width: 100%;
    background-color:#DB071E;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
export const AdminMenuButtonsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    flex-direction: column;
    gap: 30px;
`
export const AdminContainer = styled.div`
    width: 100%;
    height: 50%;
    font-family: 'Nunito', sans-serif;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
`
export const SalesHistoryContainer = styled(AdminContainer)`
    height: auto;
    border-top: 2px solid #DB071E;
`
export const SaleContainer = styled.div`
    background-color: transparent;
    height: 100px;
    width: 800px;
    margin-top: 20px;
    border-bottom: 2px solid lightgray;
    display: flex;
    flex-direction: column;
`
export const ButtonsLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 10px;
`