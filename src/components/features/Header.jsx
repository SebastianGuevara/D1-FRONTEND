import React, {useState, useEffect} from "react";
import { CustomersContainer, HeaderContainer, InputContainer, LoginContainer, LogoContainer, ShadowContainer, ShoppingCartContainer } from "../common/Containers";
import { Logo } from "../common/Images";
import { CustomersButton, LoginButton, ShoppingCartButton } from "../common/Buttons";
import { Icon } from '@iconify/react';
import { SerachInput } from "../common/Inputs";
import Cart from "./Cart";
import LoginInput from "./LoginInput";
import { useSelector } from "react-redux";
const Header = () => {
    const [isOnCart, setIsOnCart] = useState(0);
    const [userClick, setUserClick] = useState(false);
    const [userIsLogged, setUserIsLogged] = useState(false);
    const user = useSelector(state=>state.user);

    useEffect(()=>{
        if(user.id){
            setUserIsLogged(true);
        }
        else{
            setUserIsLogged(false);
        }
    },[user])

    const handleClickOnCart = () =>{
        setIsOnCart(1);
    }
    const handleClickOnLogin = () =>{
        setUserClick(!userClick);
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
            <LoginContainer>
                {!userIsLogged?<span>¡Hola inicia sesion!</span>:<span>{`¡Hola ${user.name&&user.name.split(' ')[0]}!`}</span>}
                <LoginButton onClick={()=>handleClickOnLogin()}>
                     <span> Mi cuenta</span>
                     {userClick?<Icon icon="iconamoon:arrow-up-2-thin" color="#fdeeef" width="25" />
                     :<Icon icon="iconamoon:arrow-down-2-thin" color="#fdeeef" width="25" />}
                </LoginButton>
            </LoginContainer>
            <ShoppingCartContainer>
                <ShoppingCartButton onClick={()=>handleClickOnCart()}>
                    <Icon icon="iconamoon:shopping-card-light" color="white" width="30px"/>
                </ShoppingCartButton>
            </ShoppingCartContainer>
        </HeaderContainer>
        {userClick?<LoginInput display={'1'} userLogged={userIsLogged} setUserLogged={setUserIsLogged}/>:<LoginInput display={0}/>}
        <Cart width={isOnCart} close={setIsOnCart}/>
        {1===isOnCart?<ShadowContainer opacity={isOnCart} onClick={()=>{setIsOnCart(0)}}/>:null}   
    </>
    )
}

export default Header;