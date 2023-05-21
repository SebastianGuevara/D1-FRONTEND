import React from "react";
import { CustomersContainer, HeaderContainer, InputContainer, LogoContainer, ShoppingCartContainer } from "../common/Containers";
import { Logo } from "../common/Images";
import { CustomersButton, ShoppingCartButton } from "../common/Buttons";
import { Icon } from '@iconify/react';
import { SerachInput } from "../common/Inputs";

const Header = () => {
    return(
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
            <ShoppingCartButton>
                <Icon icon="iconamoon:shopping-card-light" color="white" width="30px"/>
            </ShoppingCartButton>
        </ShoppingCartContainer>
    </HeaderContainer>
    )
}

export default Header;