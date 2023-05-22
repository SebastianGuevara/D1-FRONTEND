import React, {useRef} from "react";
import { LoginTextInput } from "../common/Inputs";
import { ButtonsLoginContainer, LoginInputContainer } from "../common/Containers";
import { DefaultButton } from "../common/Buttons";
import { useDispatch } from "react-redux";
import { handleUserLogin } from "../../redux/slices/userSlices";
import { Link } from "react-router-dom";

const LoginInput = (props) =>{
    const dispatch = useDispatch();
    const inputNameRef = useRef(null);
    const inputIdRef = useRef(null);
    const handleClickLoginButton = () =>{
        dispatch(handleUserLogin({name:inputNameRef.current.value,id:inputIdRef.current.value}))
    }
    return(
        <LoginInputContainer height={props.display}>
            {!props.userLogged?<>
                <LoginTextInput ref={inputIdRef} type="number" placeholder="Identificación"/>
                <LoginTextInput ref={inputNameRef} placeholder="Nombre"/>
                <DefaultButton onClick={()=>handleClickLoginButton()}>Inicia Sesión</DefaultButton>
            </>:
            <ButtonsLoginContainer>
                <Link to='/shoppingHistory' style={{textDecoration: 'none', width: '100%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                    <DefaultButton>Historial de compras</DefaultButton>
                </Link>
                <Link to='/' style={{textDecoration: 'none', width: '100%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                    <DefaultButton onClick={()=>dispatch(handleUserLogin({name:null,id:null}))}>Cerrar Sesión</DefaultButton>
                </Link>
                
            </ButtonsLoginContainer>}
            
        </LoginInputContainer>
    )
}

export default LoginInput