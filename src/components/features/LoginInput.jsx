import React, {useRef} from "react";
import { LoginTextInput } from "../common/Inputs";
import { LoginInputContainer } from "../common/Containers";
import { DefaultButton } from "../common/Buttons";
import { useDispatch } from "react-redux";
import { handleUserLogin } from "../../redux/slices/userSlices";
import { useSelector } from "react-redux";


const LoginInput = (props) =>{
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
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
            <>
                {user.id&&<span>{user.id}</span>}
                {user.name&&<span>{user.name}</span>}
                <DefaultButton onClick={()=>dispatch(handleUserLogin({name:null,id:null}))}>Cerrar Sesión</DefaultButton>
            </>}
            
        </LoginInputContainer>
    )
}

export default LoginInput