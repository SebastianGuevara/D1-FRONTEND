import React from "react";
import { ProductOnCartContainer, ProductOnCartTextContainer } from "../common/Containers";
import { ProductOnCartImage } from "../common/Images";
import { PriceText, ProductOnCartDescriptionText } from "../common/Text";
import AddDelete from "./AddDelete";


const ProductOnCart = (props) => {
    return(
        <ProductOnCartContainer>
            <ProductOnCartImage src='/images/test.webp'/>
            <ProductOnCartTextContainer>
                <ProductOnCartDescriptionText>{props.name}</ProductOnCartDescriptionText>
                <PriceText>{'$ '+props.price}</PriceText>
            </ProductOnCartTextContainer>
            <AddDelete width={'40%'} id={props.id}/>
        </ProductOnCartContainer>
    )
}

export default ProductOnCart;