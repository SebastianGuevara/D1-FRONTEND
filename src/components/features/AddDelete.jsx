import React, { useState, useRef, useEffect } from "react";
import { AddDeleteContainer } from "../common/Containers";
import { AddDeleteButton } from "../common/Buttons";
import { Icon } from "@iconify/react";
import { ProductQuantityInput } from "../common/Inputs";

const AddDelete = (props) => {
    const [productQuantity, setProductQuantity] = useState(1);
    const quantityInputRef = useRef(null);

    useEffect(()=>{
        if(quantityInputRef.current){
            quantityInputRef.current.value = productQuantity;
        }
        if(1>productQuantity&&props.setOnCart){
            props.setOnCart(false);
        }
        else if(1>productQuantity){
            setProductQuantity(0);
        }
            
    },[productQuantity]) 
    return(
        <AddDeleteContainer style={props.width&&{width:props.width}}>
            <AddDeleteButton onClick={()=>setProductQuantity(productQuantity-1)}>
                <Icon icon="icomoon-free:minus" color="#db071e" width="30" />
            </AddDeleteButton>
            <ProductQuantityInput ref={quantityInputRef} value={productQuantity} onChange={(event)=>{setProductQuantity(event.target.value)}}/>
            <AddDeleteButton onClick={()=>setProductQuantity(productQuantity+1)}>
                <Icon icon="icomoon-free:plus" color="#db071e" width="30" />
            </AddDeleteButton>
        </AddDeleteContainer>
    )
}
export default AddDelete;