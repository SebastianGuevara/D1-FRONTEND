import React, { useState, useRef, useEffect }  from "react";
import { ProductBannerContainer } from "../common/Containers";
import { ProductImage } from "../common/Images";
import { PriceText, ProductDescriptionText } from "../common/Text";
import { AddToCartButton } from "../common/Buttons";
import { Icon } from '@iconify/react';
import AddDelete from "./AddDelete";
const ProductBanner = (props) => {
    const [isOnCart, setIsOnCart] = useState(false); 
    
    return( 
        <ProductBannerContainer>
            <ProductImage src="/images/test.webp"/>
            <PriceText>{'$ '+props.price}</PriceText>
            <ProductDescriptionText>{props.name.toUpperCase()}</ProductDescriptionText>
            {!isOnCart?
            <AddToCartButton onClick={()=>setIsOnCart(true)}>
                <span>Agregar </span>
                <Icon icon="iconamoon:shopping-card-light" color="white" width="16px"/>
            </AddToCartButton>:
            <AddDelete setOnCart={setIsOnCart}/>}
        </ProductBannerContainer>
    )
}

export  default ProductBanner