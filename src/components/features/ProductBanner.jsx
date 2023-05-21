import React, {useState}  from "react";
import { ProductBannerContainer } from "../common/Containers";
import { ProductImage } from "../common/Images";
import { PriceText, ProductDescriptionText } from "../common/Text";
import { AddToCartButton } from "../common/Buttons";
import { Icon } from '@iconify/react';
const ProductBanner = (props) => {
    return( 
        <ProductBannerContainer>
            <ProductImage src="/images/test.webp"/>
            <PriceText>{'$ '+props.price}</PriceText>
            <ProductDescriptionText>{props.name.toUpperCase()}</ProductDescriptionText>
            <AddToCartButton>
                <span>Agregar </span>
                <Icon icon="iconamoon:shopping-card-light" color="white" width="16px"/>
            </AddToCartButton>
        </ProductBannerContainer>
    )
}

export  default ProductBanner