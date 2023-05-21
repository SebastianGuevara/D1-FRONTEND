import React, {useState} from "react";
import { CustomersContainer, HeaderContainer, InputContainer, LogoContainer, ShadowContainer, ShoppingCartContainer } from "../common/Containers";
import { Logo } from "../common/Images";
import { CustomersButton, ShoppingCartButton } from "../common/Buttons";
import { Icon } from '@iconify/react';
import { SerachInput } from "../common/Inputs";
import Cart from "./Cart";
const Header = () => {
    const [isOnCart, setIsOnCart] = useState(1);
    const handleClickOnCart = () =>{
        setIsOnCart(1);
    }
    return(
    <>
        <HeaderContainer>
            <LogoContainer>
                <Logo src="/images/D1logo.png"/>
            </LogoContainer>
            <CustomersContainer>
                <CustomersButton>
                    <Icon icon="ri:menu-2-fill" color="#FFFFF" height="25px" />
                    <span>Clientes</span>
                </CustomersButton>
            </CustomersContainer>
            <InputContainer>
                <SerachInput placeholder="Buscar"/>
            </InputContainer>
            <ShoppingCartContainer>
                <ShoppingCartButton onClick={()=>handleClickOnCart()}>
                    <Icon icon="iconamoon:shopping-card-light" color="white" width="30px"/>
                </ShoppingCartButton>
            </ShoppingCartContainer>
        </HeaderContainer>
        <Cart width={isOnCart} close={setIsOnCart}/>
        {1===isOnCart?<ShadowContainer opacity={isOnCart} onClick={()=>{setIsOnCart(0)}}/>:null}   
    </>
    )
}

export default Header;