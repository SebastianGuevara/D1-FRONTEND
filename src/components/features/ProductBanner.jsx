import React, { useState, useRef, useEffect }  from "react";
import { AddDeleteContainer, ProductBannerContainer } from "../common/Containers";
import { ProductImage } from "../common/Images";
import { PriceText, ProductDescriptionText } from "../common/Text";
import { AddDeleteButton, AddToCartButton } from "../common/Buttons";
import { Icon } from '@iconify/react';
import { ProductQuantityInput } from "../common/Inputs";
const ProductBanner = (props) => {
    const [isOnCart, setIsOnCart] = useState(false);
    const [productQuantity, setProductQuantity] = useState(1);
    const quantityInputRef = useRef(null);

    useEffect(()=>{
        if(quantityInputRef.current){
            quantityInputRef.current.value = productQuantity;
        }
        if(1>productQuantity){
            setIsOnCart(false);
        }
            
    },[productQuantity])

    const handleAddToCartFirstClick = () =>{
        setIsOnCart(true);
        setProductQuantity(1);
    }

    return( 
        <ProductBannerContainer>
            <ProductImage src="/images/test.webp"/>
            <PriceText>{'$ '+props.price}</PriceText>
            <ProductDescriptionText>{props.name.toUpperCase()}</ProductDescriptionText>
            {!isOnCart?
            <AddToCartButton onClick={()=>handleAddToCartFirstClick()}>
                <span>Agregar </span>
                <Icon icon="iconamoon:shopping-card-light" color="white" width="16px"/>
            </AddToCartButton>:
            <AddDeleteContainer>
                <AddDeleteButton onClick={()=>setProductQuantity(productQuantity-1)}>
                    <Icon icon="icomoon-free:minus" color="#db071e" width="30" />
                </AddDeleteButton>
                <ProductQuantityInput ref={quantityInputRef} value={productQuantity} onChange={(event)=>{setProductQuantity(event.target.value)}}/>
                <AddDeleteButton onClick={()=>setProductQuantity(productQuantity+1)}>
                    <Icon icon="icomoon-free:plus" color="#db071e" width="30" />
                </AddDeleteButton>
            </AddDeleteContainer>}
        </ProductBannerContainer>
    )
}

export  default ProductBanner