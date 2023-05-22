import React, {useState, useEffect} from "react";
import { CustomersContainer, HeaderContainer, InputContainer, LoginContainer, LogoContainer, ShadowContainer, ShoppingCartContainer } from "../common/Containers";
import { Logo } from "../common/Images";
import { CustomersButton, LoginButton, ShoppingCartButton } from "../common/Buttons";
import { Icon } from '@iconify/react';
import { SerachInput } from "../common/Inputs";
import Cart from "./Cart";
import LoginInput from "./LoginInput";
import { useSelector } from "react-redux";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
const Header = () => {
    const [isOnCart, setIsOnCart] = useState(0);
    const [isOnAdmin, setIsOnAdmin] = useState(0);
    const [isOnShadow, setIsOnShadow] = useState(0);
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
        setIsOnShadow(1);
    }
    const handleClickOnAdmin = () =>{
        setIsOnAdmin(1);
        setIsOnShadow(1);
    }
    const handleClickOnLogin = () =>{
        setUserClick(!userClick);
    }
    const handleClickOnShadow = () =>{
        setIsOnAdmin(0);
        setIsOnCart(0);
        setIsOnShadow(0);
    }
    return(
    <>
        <HeaderContainer>
            <LogoContainer>
                <Link to={'/'}>
                    <Logo src="/images/D1logo.png"/>
                </Link>   
            </LogoContainer>
            <CustomersContainer>
                <CustomersButton onClick={()=>handleClickOnAdmin()}>
                    <Icon icon="ri:menu-2-fill" color="#FFFFF" height="25px" />
                    <span>Admin</span>
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
        <AdminMenu width={isOnAdmin} close={setIsOnAdmin}/>
        {1===isOnCart||1===isOnAdmin?<ShadowContainer opacity={isOnShadow} onClick={()=>{handleClickOnShadow()}}/>:null}   
    </>
    )
}

export default Header;