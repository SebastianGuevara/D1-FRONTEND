import React, { useRef, useEffect } from "react";
import { AddDeleteContainer } from "../common/Containers";
import { AddDeleteButton } from "../common/Buttons";
import { Icon } from "@iconify/react";
import { ProductQuantityInput } from "../common/Inputs";
import { useDispatch } from "react-redux";
import { addProductQuantity, removeProduct, removeProductQuantity } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

const AddDelete = (props) => {
    const quantityInputRef = useRef(null);
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart);
    const { id } = props;
    useEffect(()=>{
        if(quantityInputRef.current){
            quantityInputRef.current.value = selectProductQuantity(props.id);
        }
        if(1>selectProductQuantity(props.id)&&props.setOnCart){
            props.setOnCart(false);
        }
        else if(1>selectProductQuantity(props.id)){
            dispatch(removeProduct({id: props.id}))
        }

    },[cart.products]) 
    const selectProductQuantity = (id) =>{
        let newQuantity = 0;
        cart.products.forEach((product) =>{
            if(product.id === id){
                newQuantity = product.quantity;
            }
        })
        return newQuantity;
    }
    return(
        <AddDeleteContainer style={props.width&&{width:props.width}}>
            <AddDeleteButton onClick={()=>dispatch(removeProductQuantity({id:id}))}>
                <Icon icon="icomoon-free:minus" color="#db071e" width="30" />
            </AddDeleteButton>
            <ProductQuantityInput ref={quantityInputRef} disabled={true}/>
            <AddDeleteButton onClick={()=>dispatch(addProductQuantity({id:id}))}>
                <Icon icon="icomoon-free:plus" color="#db071e" width="30" />
            </AddDeleteButton>
        </AddDeleteContainer>
    )
}
export default AddDelete;