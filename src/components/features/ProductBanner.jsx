import React, { useState, useEffect }  from "react";
import { ProductBannerContainer } from "../common/Containers";
import { ProductImage } from "../common/Images";
import { PriceText, ProductDescriptionText } from "../common/Text";
import { AddToCartButton } from "../common/Buttons";
import { Icon } from '@iconify/react';
import AddDelete from "./AddDelete";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/cartSlice";
const ProductBanner = (props) => {
    const [isOnCart, setIsOnCart] = useState(false);
    const [url, setUrl] = useState(true);
    const dispatch = useDispatch();
    const handleAddToCartClick = (id,name,price) =>{
        const info ={
            id: id,
            name: name,
            quantity: 1,
            price: price
        }
        setIsOnCart(true);
        dispatch(addProduct(info));
    }
    const handleImageError = () =>{
        setUrl(false);
    }

    return( 
        <ProductBannerContainer>
            {url?<ProductImage src={`https://d1images.s3.amazonaws.com/${props.id}.webp`} alt="Product image" onError={handleImageError}/>:
            <ProductImage src='images/no-photo.png' alt="Default product image"/>}
            <PriceText>{'$ '+props.price}</PriceText>
            <ProductDescriptionText>{props.name.toUpperCase()}</ProductDescriptionText>
            {!isOnCart?
            <AddToCartButton onClick={()=>handleAddToCartClick(props.id,props.name,props.price)}>
                <span>Agregar </span>
                <Icon icon="iconamoon:shopping-card-light" color="white" width="16px"/>
            </AddToCartButton>:
            <AddDelete setOnCart={setIsOnCart} id={props.id}/>}
        </ProductBannerContainer>
    )
}

export  default ProductBanner